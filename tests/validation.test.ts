import { describe, expect, it } from "vitest";

import {
  announcementFormSchema,
  availabilityFormSchema,
  matchFormSchema,
  playerFormSchema,
} from "@/lib/validation";

describe("validation schemas", () => {
  it("accepts a valid player payload", () => {
    const result = playerFormSchema.safeParse({
      name: "Arjun Shetty",
      role: "BATSMAN",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Off spin",
      jerseyNumber: 7,
      city: "Bengaluru",
      imageUrl: "https://example.com/player.png",
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid match payload", () => {
    const result = matchFormSchema.safeParse({
      opponent: "A",
      venue: "",
      format: "T20",
      startTime: "",
      status: "UPCOMING",
      tossResult: "",
      result: "",
    });

    expect(result.success).toBe(false);
  });

  it("accepts announcement payload", () => {
    const result = announcementFormSchema.safeParse({
      title: "Practice timing updated",
      body: "The warm-up session now starts at 6:30 AM this week.",
      priority: "HIGH",
    });

    expect(result.success).toBe(true);
  });

  it("rejects empty availability player id", () => {
    const result = availabilityFormSchema.safeParse({
      playerId: "",
      status: "AVAILABLE",
      note: "Ready",
    });

    expect(result.success).toBe(false);
  });
});
