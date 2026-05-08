import { notFound } from "next/navigation";

import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getLivePlayers } from "@/data/live";

export default async function PlayerProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const player = (await getLivePlayers()).find((item) => item.id === slug);

  if (!player) {
    notFound();
  }

  return (
    <PageShell className="space-y-10 py-8 lg:py-12">
      <SectionHeading eyebrow="Player profile" title={player.name} description={`${player.role} from ${player.city}.`} />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-white/10 bg-white/5">
          <CardContent className="space-y-4 p-8">
            <div className="flex flex-wrap gap-2">
              <Badge>#{player.jerseyNumber}</Badge>
              <Badge>{player.availability}</Badge>
              <Badge>{player.role}</Badge>
            </div>
            <p className="text-sm leading-7 text-slate-300">A detailed profile page can include career history, heat maps, recent form, and training notes. This route is ready for live data from Prisma-backed records.</p>
          </CardContent>
        </Card>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            ["Runs", String(player.runs)],
            ["Wickets", String(player.wickets)],
            ["Strike rate", String(player.strikeRate)],
            ["Batting style", player.battingStyle],
            ["Bowling style", player.bowlingStyle],
          ].map(([label, value]) => (
            <Card key={label} className="border-white/10 bg-white/5">
              <CardContent className="p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
