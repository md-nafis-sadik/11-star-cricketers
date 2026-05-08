import { MatchCreateForm } from "@/components/forms/match-create-form";
import { MatchCard } from "@/components/sections/match-card";
import { Button } from "@/components/ui/button";
import { getLiveMatches } from "@/data/live";

export default async function AdminMatchesPage() {
  const matches = await getLiveMatches();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">Match management</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Create and manage fixtures</h1>
        </div>
        <Button>Create match</Button>
      </div>
      <MatchCreateForm />
      <div className="grid gap-5 lg:grid-cols-2">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
