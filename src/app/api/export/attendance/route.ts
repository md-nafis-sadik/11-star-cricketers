import { NextResponse } from "next/server";

import { listPlayers } from "../../../../data/store";

type AttendanceExportRow = {
  id: string;
  name: string;
  role: string;
  availability: string;
};

export async function GET() {
  const players = await listPlayers();
  const rows: string[][] = [];

  for (const player of players) {
    rows.push([player.id, player.fullName, player.role, player.availability, "PRESENT", "0"]);
  }

  const header: string[] = ["playerId", "name", "role", "availability", "attendanceStatus", "lateByMinutes"];
  const csvLines: string[] = [header, ...rows].map((values) => values.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","));
  const csv = csvLines.join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="attendance.csv"',
    },
  });
}
