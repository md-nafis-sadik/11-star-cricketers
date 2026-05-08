import { Card, CardContent } from "@/components/ui/card";

export default function TeamSelectionPage() {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="space-y-4 p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">Playing XI</p>
        <h1 className="text-3xl font-semibold text-white">Select captain, vice captain, and final XI</h1>
        <p className="text-sm leading-7 text-slate-300">Selection rules can be backed by availability and role constraints when connected to Prisma data.</p>
      </CardContent>
    </Card>
  );
}
