import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { getLiveTeamSummary } from "@/data/live";

export default async function AboutPage() {
  const teamSummary = await getLiveTeamSummary();

  return (
    <PageShell className="space-y-10 py-8 lg:py-12">
      <SectionHeading
        eyebrow="About the team"
        title="Built around discipline, data, and consistent cricketing standards."
        description="11 Star Cricketers is structured like a modern sports organization with clear roles, analytics, and player development workflows."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-white/10 bg-white/5">
          <CardContent className="space-y-4 p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Profile</p>
            <p className="text-3xl font-semibold text-white">{teamSummary.name}</p>
            <p className="text-sm leading-7 text-slate-300">{teamSummary.slogan}</p>
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-white/5">
          <CardContent className="grid gap-4 p-8 sm:grid-cols-2">
            {[
              ["City", teamSummary.city],
              ["Founded", String(teamSummary.founded)],
              ["Average", String(teamSummary.battingAverage)],
              ["Strike rate", String(teamSummary.bowlingStrikeRate)],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
