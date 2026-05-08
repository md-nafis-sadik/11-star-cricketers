import { Prisma, type AvailabilityStatus, type AnnouncementPriority, type MatchStatus } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import type { AnnouncementFormValues, MatchFormValues, PlayerFormValues } from "@/lib/validation";

const teamSlug = "11-star-cricketers";

async function ensureTeam() {
  return prisma.team.upsert({
    where: { slug: teamSlug },
    update: {},
    create: {
      name: "11 Star Cricketers",
      slug: teamSlug,
      city: "Bengaluru",
      foundedYear: 2011,
    },
  });
}

export async function listPlayers() {
  return prisma.playerProfile.findMany({
    where: { team: { slug: teamSlug } },
    orderBy: [{ jerseyNumber: "asc" }],
  });
}

export async function listMatches() {
  return prisma.match.findMany({
    where: { team: { slug: teamSlug } },
    orderBy: [{ startTime: "desc" }],
  });
}

export async function listAnnouncements() {
  return prisma.announcement.findMany({
    orderBy: [{ publishedAt: "desc" }],
  });
}

export async function listNotifications(userId?: string) {
  return prisma.notification.findMany({
    where: userId ? { userId } : undefined,
    orderBy: [{ createdAt: "desc" }],
  });
}

export async function listGalleryImages() {
  return prisma.galleryImage.findMany({
    orderBy: [{ createdAt: "desc" }],
  });
}

export async function getTeamSummary() {
  const [team, playerCount, matchCount, completedMatches, attendanceCount] = await Promise.all([
    prisma.team.findUnique({ where: { slug: teamSlug } }),
    prisma.playerProfile.count({ where: { team: { slug: teamSlug } } }),
    prisma.match.count({ where: { team: { slug: teamSlug } } }),
    prisma.match.count({ where: { team: { slug: teamSlug }, status: "COMPLETED" } }),
    prisma.attendance.count({ where: { playerProfile: { team: { slug: teamSlug } } } }),
  ]);

  return {
    name: team?.name ?? "11 Star Cricketers",
    slogan: "Discipline, data, and match-day intensity.",
    city: team?.city ?? "Bengaluru",
    founded: team?.foundedYear ?? 2011,
    wins: completedMatches,
    matchesPlayed: matchCount,
    attendanceRate: matchCount ? Math.round((attendanceCount / Math.max(matchCount, 1)) * 100) : 0,
    battingAverage: 38.4,
    bowlingStrikeRate: 17.2,
    playerCount,
  };
}

export async function getDashboardStats() {
  const summary = await getTeamSummary();
  const upcomingMatches = await prisma.match.count({
    where: { team: { slug: teamSlug }, status: "UPCOMING" },
  });

  return [
    { label: "Total Players", value: String(summary.playerCount), change: "Live roster" },
    { label: "Upcoming Matches", value: String(upcomingMatches), change: "Next fixtures" },
    { label: "Attendance", value: `${summary.attendanceRate}%`, change: "From attendance records" },
    { label: "Win Ratio", value: summary.matchesPlayed ? `${Math.round((summary.wins / summary.matchesPlayed) * 100)}%` : "0%", change: `${summary.wins} wins` },
  ];
}

export async function getLeaderboard() {
  const players = await listPlayers();
  const battingStats = await prisma.battingStats.groupBy({
    by: ["playerProfileId"],
    where: { playerProfile: { team: { slug: teamSlug } } },
    _sum: { runs: true },
    _avg: { strikeRate: true },
  });
  const bowlingStats = await prisma.bowlingStats.groupBy({
    by: ["playerProfileId"],
    where: { playerProfile: { team: { slug: teamSlug } } },
    _sum: { wickets: true },
  });

  const mergedPlayers = players.map((player) => {
    const batting = battingStats.find((entry) => entry.playerProfileId === player.id);
    const bowling = bowlingStats.find((entry) => entry.playerProfileId === player.id);

    return {
      ...player,
      runs: batting?._sum.runs ?? 0,
      wickets: bowling?._sum.wickets ?? 0,
      strikeRate: batting?._avg.strikeRate ?? 0,
    };
  });

  return {
    runs: [...mergedPlayers].sort((left, right) => right.runs - left.runs).slice(0, 5),
    wickets: [...mergedPlayers].sort((left, right) => right.wickets - left.wickets).slice(0, 5),
    strikeRate: [...mergedPlayers].sort((left, right) => right.strikeRate - left.strikeRate).slice(0, 5),
  };
}

export async function addPlayer(input: PlayerFormValues) {
  const team = await ensureTeam();

  return prisma.playerProfile.create({
    data: {
      teamId: team.id,
      fullName: input.name,
      jerseyNumber: input.jerseyNumber,
      battingStyle: input.battingStyle,
      bowlingStyle: input.bowlingStyle,
      role: input.role,
      availability: "AVAILABLE" as AvailabilityStatus,
      city: input.city,
      imageUrl:
        input.imageUrl ||
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80",
    },
  });
}

export async function addMatch(input: MatchFormValues) {
  const team = await ensureTeam();

  return prisma.match.create({
    data: {
      teamId: team.id,
      title: `${input.format} fixture`,
      opponent: input.opponent,
      venue: input.venue,
      startTime: new Date(input.startTime),
      format: input.format,
      status: input.status as MatchStatus,
      tossResult: input.tossResult,
      matchResult: input.result || null,
    },
  });
}

export async function addAnnouncement(input: AnnouncementFormValues) {
  return prisma.announcement.create({
    data: {
      title: input.title,
      body: input.body,
      priority: input.priority as AnnouncementPriority,
    },
  });
}

export async function updateAvailability(playerId: string, status: AvailabilityStatus) {
  return prisma.playerProfile.update({
    where: { id: playerId },
    data: { availability: status },
  });
}