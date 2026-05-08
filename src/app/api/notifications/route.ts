import { NextResponse } from "next/server";

import { listNotifications } from "../../../data/store";

export async function GET() {
  return NextResponse.json({ data: await listNotifications() });
}
