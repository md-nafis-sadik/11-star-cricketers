import { NextResponse } from "next/server";

import { listMatches } from "../../../../data/store";

type ScorecardExportRow = {
  id: string;
  title: string;
  opponent: string;
  venue: string;
  startTime: Date;
  status: string;
  matchResult: string | null;
  format: string;
  liveScore: string | null;
};

export async function GET() {
  const matches = (await listMatches()) as ScorecardExportRow[];
  const rows: string[][] = [];

  for (const match of matches) {
    rows.push([
      match.id,
      match.title,
      match.opponent,
      match.venue,
      match.startTime.toISOString(),
      match.status,
      match.matchResult ?? "",
      match.format,
    ]);
  }

  const header: string[] = ["id", "title", "opponent", "venue", "dateTime", "status", "result", "format"];
  const csvLines: string[] = [header, ...rows].map((values) => values.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","));
  const csv = csvLines.join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="scorecards.csv"',
    },
  });
}
