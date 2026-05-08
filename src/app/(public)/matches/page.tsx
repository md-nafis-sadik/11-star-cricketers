import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/layout/section-heading";
import { MatchCard } from "@/components/sections/match-card";
import { getLiveMatches } from "@/data/live";

export default async function MatchesPage() {
  const matches = await getLiveMatches();

  return (
    <PageShell className="space-y-10 py-8 lg:py-12">
      <SectionHeading eyebrow="Schedule" title="Match schedule" description="Follow upcoming, live, and completed fixtures in one schedule view." />
      <div className="grid gap-5 lg:grid-cols-2">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </PageShell>
  );
}
