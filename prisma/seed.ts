import { PrismaClient, AnnouncementPriority, AvailabilityStatus, MatchStatus, SessionType, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const team = await prisma.team.upsert({
    where: { slug: "11-star-cricketers" },
    update: {},
    create: {
      name: "11 Star Cricketers",
      slug: "11-star-cricketers",
      city: "Bengaluru",
      foundedYear: 2011,
    },
  });

  const admin = await prisma.user.upsert({
    where: { clerkId: "user_admin_11star" },
    update: {},
    create: {
      clerkId: "user_admin_11star",
      email: "admin@11starcricketers.com",
      name: "Team Admin",
      role: UserRole.ADMIN,
      publicMetadata: { role: "ADMIN" },
    },
  });

  const playerUser = await prisma.user.upsert({
    where: { clerkId: "user_player_11star" },
    update: {},
    create: {
      clerkId: "user_player_11star",
      email: "player@11starcricketers.com",
      name: "Arjun Shetty",
      role: UserRole.PLAYER,
      publicMetadata: { role: "PLAYER" },
    },
  });

  const player = await prisma.playerProfile.upsert({
    where: { jerseyNumber: 7 },
    update: {},
    create: {
      userId: playerUser.id,
      teamId: team.id,
      fullName: "Arjun Shetty",
      jerseyNumber: 7,
      battingStyle: "Right-hand bat",
      bowlingStyle: "Occasional off-spin",
      role: "BATSMAN",
      availability: AvailabilityStatus.AVAILABLE,
      city: "Bengaluru",
      imageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
      bio: "Top-order anchor with aggressive powerplay intent.",
    },
  });

  const match = await prisma.match.create({
    data: {
      teamId: team.id,
      title: "League Clash",
      opponent: "Royal Strikers",
      venue: "M. Chinnaswamy Stadium",
      startTime: new Date("2026-05-11T14:30:00.000Z"),
      format: "T20",
      status: MatchStatus.UPCOMING,
      tossResult: "To be announced",
      liveScore: null,
    },
  });

  const scorecard = await prisma.scorecard.create({
    data: {
      matchId: match.id,
      teamRuns: 124,
      wickets: 3,
      overs: 14.2,
      extras: 6,
      resultSummary: "Strong powerplay with two wickets in hand.",
    },
  });

  await prisma.battingStats.create({
    data: {
      playerProfileId: player.id,
      scorecardId: scorecard.id,
      runs: 48,
      balls: 31,
      fours: 5,
      sixes: 2,
      strikeRate: 154.84,
    },
  });

  await prisma.bowlingStats.create({
    data: {
      playerProfileId: player.id,
      scorecardId: scorecard.id,
      wickets: 0,
      overs: 0,
      runsConceded: 0,
      maidens: 0,
      economy: 0,
    },
  });

  await prisma.attendance.create({
    data: {
      playerProfileId: player.id,
      matchId: match.id,
      sessionType: SessionType.MATCH,
      status: AvailabilityStatus.AVAILABLE,
      checkedInAt: new Date(),
      lateByMinutes: 0,
      note: "Arrived early for warm-ups",
    },
  });

  await prisma.availability.upsert({
    where: { playerProfileId: player.id },
    update: { status: AvailabilityStatus.AVAILABLE, note: "Available for the weekend" },
    create: { playerProfileId: player.id, status: AvailabilityStatus.AVAILABLE, note: "Available for the weekend" },
  });

  const playingXI = await prisma.playingXI.create({
    data: {
      matchId: match.id,
      captainId: player.id,
      viceCaptainId: player.id,
      members: {
        create: [
          {
            playerProfileId: player.id,
            battingPosition: 1,
            isCaptain: true,
            isViceCaptain: true,
          },
        ],
      },
    },
  });

  await prisma.announcement.createMany({
    data: [
      {
        title: "Training moved to 6:30 AM",
        body: "The squad training session starts earlier this week.",
        priority: AnnouncementPriority.HIGH,
        authorId: admin.id,
      },
      {
        title: "Media day photos uploaded",
        body: "Gallery now contains new team portraits and match highlights.",
        priority: AnnouncementPriority.NORMAL,
        authorId: admin.id,
      },
    ],
  });

  await prisma.notification.create({
    data: {
      userId: playerUser.id,
      title: "Match readiness check-in",
      body: "Please confirm availability before 8 PM.",
      type: "reminder",
    },
  });

  await prisma.galleryImage.createMany({
    data: [
      {
        title: "Captain's Huddle",
        category: "Team Talk",
        imageUrl: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80",
        uploadedById: admin.id,
      },
      {
        title: "Winning Celebration",
        category: "Match Day",
        imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
        uploadedById: admin.id,
      },
    ],
  });

  console.log({ team, admin, player, match, scorecard, playingXI });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
