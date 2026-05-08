import { notFound } from "next/navigation";

import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { getLiveMatches } from "@/data/live";

export default async function MatchDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const match = (await getLiveMatches()).find((item) => item.id === id);

  if (!match) {
    notFound();
  }

  return (
    <PageShell className="space-y-10 py-8 lg:py-12">
      <SectionHeading eyebrow="Match details" title={match.title} description={`${match.opponent} at ${match.venue}.`} />
      <Card className="border-white/10 bg-white/5">
        <CardContent className="grid gap-6 p-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">{match.status}</p>
            <p className="text-3xl font-semibold text-white">{match.result}</p>
            <p className="text-sm leading-7 text-slate-300">A live scorecard, partnerships, bowling spell summaries, and export actions can be mounted here from the Scorecard model.</p>
          </div>
          <div className="space-y-3 text-sm text-slate-300">
            <p>Venue: {match.venue}</p>
            <p>Date: {new Date(match.dateTime).toLocaleString()}</p>
            <p>Format: {match.format}</p>
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
