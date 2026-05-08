import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { PlayerSummary } from "@/lib/types";

export function PlayerCard({ player }: { player: PlayerSummary }) {
  return (
    <Card className="group overflow-hidden border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-[#d4af37]/40">
      <Link href={`/players/${player.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src={player.imageUrl} alt={player.name} fill className="object-cover transition duration-700 group-hover:scale-105" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            <Badge>{player.role}</Badge>
            <Badge>#{player.jerseyNumber}</Badge>
          </div>
          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <h3 className="text-xl font-semibold text-white">{player.name}</h3>
            <p className="text-sm text-slate-300">{player.city}</p>
          </div>
        </div>
        <CardContent className="grid grid-cols-3 gap-3 p-4 text-sm text-slate-300">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Runs</p>
            <p className="text-white">{player.runs}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Wkts</p>
            <p className="text-white">{player.wickets}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">SR</p>
            <p className="text-white">{player.strikeRate}</p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
