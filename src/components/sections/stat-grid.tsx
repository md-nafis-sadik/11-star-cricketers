import { Card, CardContent } from "@/components/ui/card";

export function StatGrid({ stats }: { stats: Array<{ label: string; value: string; change?: string }> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-white/10 bg-white/5">
          <CardContent className="space-y-2 p-6">
            <p className="text-sm text-slate-300">{stat.label}</p>
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            {stat.change ? <p className="text-xs uppercase tracking-[0.22em] text-[#d4af37]">{stat.change}</p> : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
