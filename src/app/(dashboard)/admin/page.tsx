import { Bell, CalendarDays, Siren, Trophy } from "lucide-react";

import { PerformanceChart } from "@/components/charts/performance-chart";
import { Card, CardContent } from "@/components/ui/card";
import { StatGrid } from "@/components/sections/stat-grid";
import { getLiveAnnouncements, getLiveDashboardStats, getLiveMatches } from "@/data/live";

export default async function AdminDashboardPage() {
  const [dashboardStats, announcements, matches] = await Promise.all([
    getLiveDashboardStats(),
    getLiveAnnouncements(),
    getLiveMatches(),
  ]);
  const activityFeed = [
    ...announcements.slice(0, 2).map((item) => `Announcement published: ${item.title}`),
    ...matches.slice(0, 2).map((item) => `Fixture tracked: ${item.opponent} on ${item.dateTime}`),
  ];

  return (
    <div className="space-y-6">
      <StatGrid stats={dashboardStats} />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <PerformanceChart />
        <Card className="border-white/10 bg-white/5">
          <CardContent className="space-y-4 p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Recent activity</p>
            <div className="space-y-3">
              {activityFeed.map((activity) => (
                <div key={activity} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-200">
                  {activity}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Attendance check-ins", CalendarDays],
          ["Announcement queue", Bell],
          ["Playing XI review", Trophy],
          ["Live scoring", Siren],
        ].map(([label, Icon]) => (
          <Card key={label as string} className="border-white/10 bg-white/5">
            <CardContent className="flex items-center gap-4 p-6">
              <Icon className="h-5 w-5 text-[#d4af37]" />
              <p className="text-sm text-slate-200">{label as string}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
