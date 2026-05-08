import Link from "next/link";

import { Menu, ShieldCheck, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/players", label: "Players" },
  { href: "/matches", label: "Matches" },
  { href: "/statistics", label: "Stats" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d4af37] text-[#120b02] shadow-lg shadow-[#d4af37]/30">
            <Trophy className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">11 Star</span>
            <span className="block text-sm text-slate-300">Cricketers</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link href="/login">
              <ShieldCheck className="mr-2 h-4 w-4" />
              Login
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="lg:hidden rounded-full border border-white/10">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
