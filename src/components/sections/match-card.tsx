import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { MatchSummary } from "@/lib/types";

const statusTone: Record<MatchSummary["status"], string> = {
  UPCOMING: "border-[#d4af37]/20 bg-[#d4af37]/10 text-[#f1dd9a]",
  LIVE: "border-[#6f46a7]/20 bg-[#6f46a7]/15 text-[#d7c5ef]",
  COMPLETED: "border-white/15 bg-white/8 text-[#f5faf7]",
  CANCELLED: "border-[#120b02]/30 bg-[#120b02]/50 text-[#f5faf7]",
};

export function MatchCard({ match }: { match: MatchSummary }) {
  return (
    <Card className="border-white/10 bg-white/5 transition hover:border-[#d4af37]/40">
      <Link href={`/matches/${match.id}`}>
        <CardContent className="space-y-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Badge className={statusTone[match.status]}>{match.status}</Badge>
              <h3 className="mt-3 text-xl font-semibold text-white">{match.title}</h3>
              <p className="text-sm text-slate-300">vs {match.opponent}</p>
            </div>
            <p className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300">{match.format}</p>
          </div>
          <div className="space-y-1 text-sm text-slate-300">
            <p>{match.venue}</p>
            <p>{new Date(match.dateTime).toLocaleString()}</p>
          </div>
          <p className="text-sm text-white">{match.result}</p>
          {match.liveScore ? <p className="text-sm text-[#d4af37]">Live score: {match.liveScore}</p> : null}
        </CardContent>
      </Link>
    </Card>
  );
}
