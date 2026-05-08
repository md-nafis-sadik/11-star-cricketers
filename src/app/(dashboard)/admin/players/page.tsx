import { PlayerCreateForm } from "@/components/forms/player-create-form";
import { PlayersTable } from "@/components/tables/players-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getLivePlayers } from "@/data/live";

export default async function AdminPlayersPage() {
  const players = await getLivePlayers();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">Player management</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Roster, roles, and availability</h1>
        </div>
        <Button>Add player</Button>
      </div>
      <PlayerCreateForm />
      <PlayersTable data={players} />
      <Card className="border-white/10 bg-white/5">
        <CardContent className="p-6 text-sm text-slate-300">
          Add, edit, and delete players from the admin action panel. This page is already structured for a Prisma-backed form action.
        </CardContent>
      </Card>
    </div>
  );
}
