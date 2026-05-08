import { NextResponse } from "next/server";

import { listMatches } from "../../../data/store";

export async function GET() {
  return NextResponse.json({ data: await listMatches() });
}
