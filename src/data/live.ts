import type { AnnouncementSummary, GalleryImageSummary, MatchSummary, PlayerSummary } from "@/lib/types";
import { prisma } from "@/lib/prisma";

const teamSlug = "11-star-cricketers";

export async function getLivePlayers(): Promise<PlayerSummary[]> {
  const players = await prisma.playerProfile.findMany({
    where: { team: { slug: teamSlug } },
    orderBy: [{ jerseyNumber: "asc" }],
  });

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

  return players.map((player) => {
    const batting = battingStats.find((entry) => entry.playerProfileId === player.id);
    const bowling = bowlingStats.find((entry) => entry.playerProfileId === player.id);

    return {
      id: player.id,
      name: player.fullName,
      role: player.role,
      jerseyNumber: player.jerseyNumber,
      battingStyle: player.battingStyle,
      bowlingStyle: player.bowlingStyle,
      availability: player.availability,
      runs: batting?._sum.runs ?? 0,
      wickets: bowling?._sum.wickets ?? 0,
      strikeRate: batting?._avg.strikeRate ?? 0,
      imageUrl: player.imageUrl || "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80",
      city: player.city,
    } satisfies PlayerSummary;
  });
}

export async function getLiveMatches(): Promise<MatchSummary[]> {
  const matches = await prisma.match.findMany({
    where: { team: { slug: teamSlug } },
    orderBy: [{ startTime: "desc" }],
  });

  return matches.map((match) => ({
    id: match.id,
    title: match.title,
    opponent: match.opponent,
    venue: match.venue,
    dateTime: match.startTime.toISOString(),
    status: match.status,
    result: match.matchResult || "Scheduled",
    format: match.format,
    liveScore: match.liveScore || undefined,
  }));
}

export async function getLiveAnnouncements(): Promise<AnnouncementSummary[]> {
  const announcements = await prisma.announcement.findMany({
    orderBy: [{ publishedAt: "desc" }],
  });

  return announcements.map((announcement) => ({
    id: announcement.id,
    title: announcement.title,
    body: announcement.body,
    priority: announcement.priority,
    publishedAt: announcement.publishedAt.toISOString(),
  }));
}

export async function getLiveGallery(): Promise<GalleryImageSummary[]> {
  const items = await prisma.galleryImage.findMany({
    orderBy: [{ createdAt: "desc" }],
  });

  return items.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    imageUrl: item.imageUrl,
  }));
}

export async function getLiveTeamSummary() {
  const team = await prisma.team.findUnique({ where: { slug: teamSlug } });
  const [playerCount, matchCount, completedMatches, attendanceCount] = await Promise.all([
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

export async function getLiveDashboardStats() {
  const summary = await getLiveTeamSummary();
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

export async function getLiveLeaderboard() {
  const players = await getLivePlayers();

  return {
    runs: [...players].sort((left, right) => right.runs - left.runs).slice(0, 5),
    wickets: [...players].sort((left, right) => right.wickets - left.wickets).slice(0, 5),
    strikeRate: [...players].sort((left, right) => right.strikeRate - left.strikeRate).slice(0, 5),
  };
}
