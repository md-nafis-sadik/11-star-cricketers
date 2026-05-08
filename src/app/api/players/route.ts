import { NextResponse } from "next/server";

import { listPlayers } from "../../../data/store";

type PlayerSearchRow = {
  name: string;
  role: string;
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q")?.toLowerCase() ?? "";
  const page = Number(url.searchParams.get("page") ?? "1");
  const pageSize = Number(url.searchParams.get("pageSize") ?? "10");
  const players = (await listPlayers()) as PlayerSearchRow[];
  const filtered: PlayerSearchRow[] = [];

  for (const player of players) {
    if (player.name.toLowerCase().includes(query) || player.role.toLowerCase().includes(query)) {
      filtered.push(player);
    }
  }

  const startIndex = (page - 1) * pageSize;

  return NextResponse.json({
    data: filtered.slice(startIndex, startIndex + pageSize),
    total: filtered.length,
    page,
    pageSize,
  });
}
