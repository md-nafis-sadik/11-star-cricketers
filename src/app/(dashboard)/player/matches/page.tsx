import { MatchCard } from "@/components/sections/match-card";
import { getLiveMatches } from "@/data/live";

export default async function PlayerMatchesPage() {
  const matches = await getLiveMatches();

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
}
