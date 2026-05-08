import Link from "next/link";

import { ArrowRight, CalendarDays, Medal, Shield, Stars, Trophy } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { StatGrid } from "@/components/sections/stat-grid";
import { MatchCard } from "@/components/sections/match-card";
import { PlayerCard } from "@/components/sections/player-card";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/layout/section-heading";
import { getLiveAnnouncements, getLiveDashboardStats, getLiveGallery, getLiveMatches, getLivePlayers, getLiveTeamSummary } from "@/data/live";

export default async function HomePage() {
  const [teamSummary, dashboardStats, matches, players, announcements, gallery] = await Promise.all([
    getLiveTeamSummary(),
    getLiveDashboardStats(),
    getLiveMatches(),
    getLivePlayers(),
    getLiveAnnouncements(),
    getLiveGallery(),
  ]);

  return (
    <PageShell className="space-y-16 py-8 lg:py-12">
      <PageHero
        eyebrow="Cricket management, reimagined"
        title="Operate the entire 11 Star squad from one premium dashboard."
        description="A modern cricket team management stack for live scoring, availability, selection, analytics, attendance, and team communication."
        primaryAction={{ label: "View live dashboard", href: "/admin" }}
        secondaryAction={{ label: "Explore players", href: "/players" }}
      />

      <StatGrid stats={dashboardStats} />

      <section className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <Card className="border-white/10 bg-white/5">
          <CardContent className="space-y-4 p-8">
            <Badge>Team identity</Badge>
            <h2 className="text-3xl font-semibold text-white">{teamSummary.name}</h2>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">{teamSummary.slogan}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "City", value: teamSummary.city },
                { label: "Founded", value: String(teamSummary.founded) },
                { label: "Matches", value: String(teamSummary.matchesPlayed) },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-white/5">
          <CardContent className="space-y-5 p-8">
            <SectionHeading eyebrow="Leadership" title="What the dashboard helps you do" />
            <div className="space-y-4 text-sm text-slate-300">
              {[
                "Select playing XI with captain and vice captain logic.",
                "Track live scorecards, attendance, and match results.",
                "Review leaderboards, trends, and player availability.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <Stars className="mt-0.5 h-4 w-4 text-[#d4af37]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Upcoming"
          title="Next fixtures"
          description="Review the match context, venue, and live status before game day."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {matches.slice(0, 2).map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="Roster" title="Featured players" description="A balanced mix of power hitters, spin, and pace." />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {players.slice(0, 6).map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <Card className="border-white/10 bg-white/5">
          <CardContent className="space-y-5 p-8">
            <SectionHeading eyebrow="Announcements" title="Latest updates" />
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">{announcement.priority}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{announcement.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{announcement.body}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-white/5">
          <CardContent className="space-y-5 p-8">
            <SectionHeading eyebrow="Gallery" title="Recent media" />
            <GalleryGrid items={gallery.slice(0, 2)} />
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-white/10 bg-[#6f46a7]/10">
          <CardContent className="space-y-5 p-8">
            <Badge>CTA</Badge>
            <h2 className="text-3xl font-semibold text-white">Ready to manage the squad in real time?</h2>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">Open the admin console to manage players, matches, attendance, and selections without leaving the dashboard.</p>
            <Button asChild size="lg">
              <Link href="/admin">
                Open admin console
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Players", icon: Trophy, href: "/players" },
            { label: "Schedule", icon: CalendarDays, href: "/matches" },
            { label: "Statistics", icon: Medal, href: "/statistics" },
            { label: "Secure Access", icon: Shield, href: "/login" },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="glass flex min-h-40 flex-col justify-between rounded-[2rem] p-6 transition hover:-translate-y-1">
              <item.icon className="h-6 w-6 text-[#d4af37]" />
              <div>
                <p className="text-lg font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-sm text-slate-300">Open the {item.label.toLowerCase()} view.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
