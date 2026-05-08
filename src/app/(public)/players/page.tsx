import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/layout/section-heading";
import { PlayerCard } from "@/components/sections/player-card";
import { getLivePlayers } from "@/data/live";

export default async function PlayersPage() {
  const players = await getLivePlayers();

  return (
    <PageShell className="space-y-10 py-8 lg:py-12">
      <SectionHeading eyebrow="Squad" title="Players" description="Explore the current roster and open a detailed player profile." />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </PageShell>
  );
}
