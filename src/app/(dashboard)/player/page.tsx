import { Card, CardContent } from "@/components/ui/card";
import { StatGrid } from "@/components/sections/stat-grid";
import { getLiveAnnouncements, getLiveDashboardStats } from "@/data/live";

export default async function PlayerDashboardPage() {
  const [playerStats, announcements] = await Promise.all([getLiveDashboardStats(), getLiveAnnouncements()]);

  return (
    <div className="space-y-6">
      <StatGrid stats={playerStats} />
      <Card className="border-white/10 bg-white/5">
        <CardContent className="space-y-4 p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">Notifications</p>
          <h1 className="text-3xl font-semibold text-white">Your latest team updates</h1>
          <div className="space-y-3 text-sm leading-7 text-slate-300">
            {announcements.slice(0, 3).map((announcement) => (
              <div key={announcement.id} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">{announcement.priority}</p>
                <p className="mt-2 text-white">{announcement.title}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
