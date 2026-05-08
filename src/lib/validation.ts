import { z } from "zod";

export const playerFormSchema = z.object({
  name: z.string().min(2).max(80),
  role: z.enum(["BATSMAN", "BOWLER", "ALL_ROUNDER", "WICKET_KEEPER"]),
  battingStyle: z.string().min(2).max(60),
  bowlingStyle: z.string().min(2).max(60),
  jerseyNumber: z.coerce.number().int().min(0).max(999),
  city: z.string().min(2).max(80),
  imageUrl: z.string().url().optional().or(z.literal("")),
});

export const matchFormSchema = z.object({
  opponent: z.string().min(2).max(80),
  venue: z.string().min(2).max(120),
  format: z.enum(["T10", "T20", "ODI", "TEST"]),
  startTime: z.string().min(1),
  status: z.enum(["UPCOMING", "LIVE", "COMPLETED", "CANCELLED"]),
  tossResult: z.string().min(2).max(120),
  result: z.string().max(120).optional(),
});

export const announcementFormSchema = z.object({
  title: z.string().min(3).max(120),
  body: z.string().min(12).max(500),
  priority: z.enum(["LOW", "NORMAL", "HIGH", "URGENT"]),
});

export const availabilityFormSchema = z.object({
  playerId: z.string().min(1),
  status: z.enum(["AVAILABLE", "UNAVAILABLE", "INJURED"]),
  note: z.string().max(140).optional(),
});

export type PlayerFormValues = z.infer<typeof playerFormSchema>;
export type MatchFormValues = z.infer<typeof matchFormSchema>;
export type AnnouncementFormValues = z.infer<typeof announcementFormSchema>;
export type AvailabilityFormValues = z.infer<typeof availabilityFormSchema>;
