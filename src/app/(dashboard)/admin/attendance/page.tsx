import { Card, CardContent } from "@/components/ui/card";

export default function AdminAttendancePage() {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="space-y-4 p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">Attendance</p>
        <h1 className="text-3xl font-semibold text-white">Check-ins, check-outs, and late tracking</h1>
        <p className="text-sm leading-7 text-slate-300">Attendance metrics and practice session records will be stored in the Attendance model and surfaced here with export support.</p>
      </CardContent>
    </Card>
  );
}
