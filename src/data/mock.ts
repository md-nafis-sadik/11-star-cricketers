import type {
  AnnouncementSummary,
  GalleryImageSummary,
  MatchSummary,
  PlayerSummary,
} from "@/lib/types";

export const teamSummary = {
  name: "11 Star Cricketers",
  slogan: "Discipline, data, and match-day intensity.",
  city: "Bengaluru",
  founded: 2011,
  wins: 84,
  matchesPlayed: 122,
  attendanceRate: 92,
  battingAverage: 38.4,
  bowlingStrikeRate: 17.2,
};

export const players: PlayerSummary[] = [
  {
    id: "p1",
    name: "Arjun Shetty",
    role: "BATSMAN",
    jerseyNumber: 7,
    battingStyle: "Right-hand bat",
    bowlingStyle: "Occasional off-spin",
    availability: "AVAILABLE",
    runs: 1284,
    wickets: 9,
    strikeRate: 142.6,
    imageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
    city: "Bengaluru",
  },
  {
    id: "p2",
    name: "Kabir Rao",
    role: "ALL_ROUNDER",
    jerseyNumber: 18,
    battingStyle: "Left-hand bat",
    bowlingStyle: "Right-arm medium",
    availability: "AVAILABLE",
    runs: 1021,
    wickets: 41,
    strikeRate: 128.9,
    imageUrl: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=800&q=80",
    city: "Mysuru",
  },
  {
    id: "p3",
    name: "Rhea Nair",
    role: "WICKET_KEEPER",
    jerseyNumber: 1,
    battingStyle: "Right-hand bat",
    bowlingStyle: "-",
    availability: "INJURED",
    runs: 864,
    wickets: 0,
    strikeRate: 136.1,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    city: "Kochi",
  },
  {
    id: "p4",
    name: "Dev Anand",
    role: "BOWLER",
    jerseyNumber: 12,
    battingStyle: "Right-hand bat",
    bowlingStyle: "Left-arm fast",
    availability: "AVAILABLE",
    runs: 241,
    wickets: 67,
    strikeRate: 104.2,
    imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=800&q=80",
    city: "Chennai",
  },
  {
    id: "p5",
    name: "Ishaan Khanna",
    role: "BATSMAN",
    jerseyNumber: 44,
    battingStyle: "Right-hand bat",
    bowlingStyle: "Leg-spin",
    availability: "AVAILABLE",
    runs: 1518,
    wickets: 14,
    strikeRate: 149.8,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    city: "Hyderabad",
  },
  {
    id: "p6",
    name: "Nitya Malhotra",
    role: "ALL_ROUNDER",
    jerseyNumber: 33,
    battingStyle: "Left-hand bat",
    bowlingStyle: "Right-arm off-spin",
    availability: "UNAVAILABLE",
    runs: 719,
    wickets: 29,
    strikeRate: 121.4,
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    city: "Pune",
  },
];

export const matches: MatchSummary[] = [
  {
    id: "m1",
    title: "League Clash",
    opponent: "Royal Strikers",
    venue: "M. Chinnaswamy Stadium",
    dateTime: "2026-05-11T14:30:00.000Z",
    status: "UPCOMING",
    result: "Scheduled",
    format: "T20",
  },
  {
    id: "m2",
    title: "Regional Final",
    opponent: "Capital Chargers",
    venue: "Kanteerava Ground",
    dateTime: "2026-05-08T18:00:00.000Z",
    status: "LIVE",
    result: "11 Star 124/3 in 14.2 overs",
    format: "T20",
    liveScore: "124/3",
  },
  {
    id: "m3",
    title: "Practice Match",
    opponent: "Training Squad",
    venue: "Indoor Cricket Academy",
    dateTime: "2026-04-29T09:30:00.000Z",
    status: "COMPLETED",
    result: "Won by 23 runs",
    format: "T10",
  },
  {
    id: "m4",
    title: "Super Six Series",
    opponent: "Metro Mavericks",
    venue: "University Oval",
    dateTime: "2026-05-18T16:00:00.000Z",
    status: "UPCOMING",
    result: "Awaiting toss",
    format: "ODI",
  },
];

export const announcements: AnnouncementSummary[] = [
  {
    id: "a1",
    title: "Training moved to 6:30 AM",
    body: "The squad training session starts earlier this week to prepare for the weekend double-header.",
    priority: "HIGH",
    publishedAt: "2026-05-07T08:00:00.000Z",
  },
  {
    id: "a2",
    title: "Media day photos uploaded",
    body: "Gallery now contains new team portraits and match highlights from the regional semi-final.",
    priority: "NORMAL",
    publishedAt: "2026-05-06T12:30:00.000Z",
  },
  {
    id: "a3",
    title: "Fitness update for Rhea",
    body: "The medical team will re-evaluate availability after tomorrow’s recovery session.",
    priority: "URGENT",
    publishedAt: "2026-05-08T06:15:00.000Z",
  },
];

export const gallery: GalleryImageSummary[] = [
  {
    id: "g1",
    title: "Captain's Huddle",
    category: "Team Talk",
    imageUrl: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g2",
    title: "Winning Celebration",
    category: "Match Day",
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g3",
    title: "Training Nets",
    category: "Practice",
    imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g4",
    title: "Match Presentation",
    category: "Awards",
    imageUrl: "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1200&q=80",
  },
];

export const notifications = [
  {
    id: "n1",
    title: "Match readiness check-in",
    body: "Please confirm availability before 8 PM.",
    type: "reminder",
    createdAt: "2026-05-08T08:00:00.000Z",
    read: false,
  },
  {
    id: "n2",
    title: "New announcement",
    body: "Training time has changed for tomorrow.",
    type: "announcement",
    createdAt: "2026-05-07T12:00:00.000Z",
    read: true,
  },
];

export const leaderboard = {
  runs: [...players].sort((left, right) => right.runs - left.runs).slice(0, 5),
  wickets: [...players].sort((left, right) => right.wickets - left.wickets).slice(0, 5),
  strikeRate: [...players].sort((left, right) => right.strikeRate - left.strikeRate).slice(0, 5),
};

export const dashboardStats = [
  { label: "Total Players", value: String(players.length), change: "+2 this month" },
  { label: "Upcoming Matches", value: String(matches.filter((match) => match.status === "UPCOMING").length), change: "Next 14 days" },
  { label: "Attendance", value: "92%", change: "+4% week over week" },
  { label: "Win Ratio", value: "68%", change: "84 wins / 122 matches" },
];

export const activityFeed = [
  "Kabir Rao checked in for practice",
  "Match lineup for the weekend was published",
  "New gallery images uploaded after the final",
  "Live scorecard updated for the current fixture",
];
