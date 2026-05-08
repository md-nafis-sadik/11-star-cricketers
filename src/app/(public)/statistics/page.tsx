import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/layout/section-heading";
import { PerformanceChart } from "@/components/charts/performance-chart";
import { Card, CardContent } from "@/components/ui/card";
import { getLiveLeaderboard, getLiveTeamSummary } from "@/data/live";

export default async function StatisticsPage() {
  const [leaderboard, teamSummary] = await Promise.all([getLiveLeaderboard(), getLiveTeamSummary()]);

  return (
    <PageShell className="space-y-10 py-8 lg:py-12">
      <SectionHeading eyebrow="Analytics" title="Team statistics" description="Use charts, leaderboards, and trend lines to track squad performance." />
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <PerformanceChart />
        <Card className="border-white/10 bg-white/5">
          <CardContent className="space-y-4 p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Team summary</p>
            <p className="text-3xl font-semibold text-white">{teamSummary.wins} wins</p>
            <div className="space-y-3 text-sm text-slate-300">
              <p>Batting average: {teamSummary.battingAverage}</p>
              <p>Bowling strike rate: {teamSummary.bowlingStrikeRate}</p>
              <p>Attendance rate: {teamSummary.attendanceRate}%</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          ["Runs", leaderboard.runs],
          ["Wickets", leaderboard.wickets],
          ["Strike rate", leaderboard.strikeRate],
        ].map(([label, items]) => (
          <Card key={label as string} className="border-white/10 bg-white/5">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">{label as string}</p>
              <div className="space-y-3">
                {(items as typeof leaderboard.runs).map((player, index) => (
                  <div key={player.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-sm">
                    <span className="text-slate-300">{index + 1}. {player.name}</span>
                    <span className="text-white">{label === "Runs" ? player.runs : label === "Wickets" ? player.wickets : player.strikeRate}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
