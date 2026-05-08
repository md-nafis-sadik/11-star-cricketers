import { AvailabilityForm } from "@/components/forms/availability-form";
import { Card, CardContent } from "@/components/ui/card";

export default function PlayerAvailabilityPage() {
  return (
    <div className="space-y-6">
      <Card className="border-white/10 bg-white/5">
        <CardContent className="space-y-4 p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">Availability</p>
          <h1 className="text-3xl font-semibold text-white">Available, unavailable, or injured</h1>
          <p className="text-sm leading-7 text-slate-300">Players can update availability for upcoming fixtures, practice, and medical recovery windows.</p>
        </CardContent>
      </Card>
      <AvailabilityForm />
    </div>
  );
}
