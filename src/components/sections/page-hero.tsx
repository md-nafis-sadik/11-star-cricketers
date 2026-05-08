import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.22),rgba(8,17,29,0.85)_40%,rgba(2,6,23,0.95))] p-8 shadow-2xl shadow-black/30 sm:p-12 lg:p-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_25%)]" />
      <div className="relative z-10 max-w-3xl space-y-6">
        <Badge>
          <Sparkles className="mr-2 h-3.5 w-3.5 text-[#d4af37]" />
          {eyebrow}
        </Badge>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
        <div className="flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <Link href={primaryAction.href}>
              {primaryAction.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {secondaryAction ? (
            <Button asChild variant="outline" size="lg">
              <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
