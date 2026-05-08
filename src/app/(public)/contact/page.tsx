import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <PageShell className="space-y-10 py-8 lg:py-12">
      <SectionHeading eyebrow="Contact" title="Get in touch" description="For partnerships, event management, or team operations, reach out to the club." />
      <Card className="border-white/10 bg-white/5">
        <CardContent className="grid gap-6 p-8 sm:grid-cols-3">
          {[
            ["Email", "hello@11starcricketers.com"],
            ["Phone", "+91 98765 43210"],
            ["Venue", "Bengaluru, Karnataka"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
              <p className="mt-2 text-lg font-semibold text-white">{value}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  );
}
