import { describe, expect, it } from "vitest";

import { addAnnouncement, addMatch, addPlayer, listAnnouncements, listMatches, listPlayers } from "@/data/store";

const runDbTests = process.env.RUN_DB_TESTS === "true";

describe.skipIf(!runDbTests)("store mutations", () => {
  it("adds a player", async () => {
    const before = (await listPlayers()).length;
    const jerseyNumber = Math.floor(Date.now() % 900) + 100;

    await addPlayer({
      name: "Test Player",
      role: "BATSMAN",
      battingStyle: "Right-hand",
      bowlingStyle: "Off spin",
      jerseyNumber,
      city: "Test City",
      imageUrl: "",
    });

    expect((await listPlayers()).length).toBe(before + 1);
  });

  it("adds a match", async () => {
    const before = (await listMatches()).length;

    await addMatch({
      opponent: "Test Opponent",
      venue: "Test Ground",
      format: "T20",
      startTime: new Date().toISOString(),
      status: "UPCOMING",
      tossResult: "Won toss",
      result: "",
    });

    expect((await listMatches()).length).toBe(before + 1);
  });

  it("adds an announcement", async () => {
    const before = (await listAnnouncements()).length;

    await addAnnouncement({
      title: "Test announcement",
      body: "This is a valid announcement body used in unit test.",
      priority: "NORMAL",
    });

    expect((await listAnnouncements()).length).toBe(before + 1);
  });
});
