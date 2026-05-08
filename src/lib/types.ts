export type UserRole = "ADMIN" | "PLAYER";
export type MatchStatus = "UPCOMING" | "LIVE" | "COMPLETED" | "CANCELLED";
export type AvailabilityStatus = "AVAILABLE" | "UNAVAILABLE" | "INJURED";
export type AnnouncementPriority = "LOW" | "NORMAL" | "HIGH" | "URGENT";
export type SessionType = "MATCH" | "PRACTICE" | "MEETING";

export type PlayerSummary = {
  id: string;
  name: string;
  role: string;
  jerseyNumber: number;
  battingStyle: string;
  bowlingStyle: string;
  availability: AvailabilityStatus;
  runs: number;
  wickets: number;
  strikeRate: number;
  imageUrl: string;
  city: string;
};

export type MatchSummary = {
  id: string;
  title: string;
  opponent: string;
  venue: string;
  dateTime: string;
  status: MatchStatus;
  result: string;
  format: string;
  liveScore?: string;
};

export type AnnouncementSummary = {
  id: string;
  title: string;
  body: string;
  priority: AnnouncementPriority;
  publishedAt: string;
};

export type GalleryImageSummary = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
};
