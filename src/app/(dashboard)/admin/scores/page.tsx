import { Card, CardContent } from "@/components/ui/card";

export default function AdminScoresPage() {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="space-y-4 p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">Score management</p>
        <h1 className="text-3xl font-semibold text-white">Live batting and bowling scorecards</h1>
        <p className="text-sm leading-7 text-slate-300">This space is ready for full scorecard entry, extras, overs, strike rate, economy rate, and partnership tracking powered by server actions.</p>
      </CardContent>
    </Card>
  );
}
