import type React from "react";

import Link from "next/link";

import { BarChart3, Bell, CalendarDays, ChartColumnBig, CircleGauge, ClipboardList, ImageIcon, LayoutDashboard, ShieldCheck, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const adminNav = [
  { href: "/admin", label: "Overview", icon: CircleGauge },
  { href: "/admin/players", label: "Players", icon: Users },
  { href: "/admin/matches", label: "Matches", icon: CalendarDays },
  { href: "/admin/scores", label: "Scores", icon: ClipboardList },
  { href: "/admin/attendance", label: "Attendance", icon: BarChart3 },
  { href: "/admin/announcements", label: "Announcements", icon: Bell },
  { href: "/admin/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/admin/team-selection", label: "Playing XI", icon: ShieldCheck },
  { href: "/admin/analytics", label: "Analytics", icon: ChartColumnBig },
];

const playerNav = [
  { href: "/player", label: "Dashboard", icon: CircleGauge },
  { href: "/player/stats", label: "Stats", icon: BarChart3 },
  { href: "/player/matches", label: "Matches", icon: CalendarDays },
  { href: "/player/availability", label: "Availability", icon: ClipboardList },
  { href: "/player/announcements", label: "Announcements", icon: Bell },
];

type SidebarIcon = React.ComponentType<{ className?: string }>;

function SidebarLink({ href, label, icon: Icon }: { href: string; label: string; icon: SidebarIcon }) {
  return (
    <Link href={href} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
      <Icon className="h-4 w-4 text-[#d4af37]" />
      {label}
    </Link>
  );
}

export function DashboardShell({ children, role }: { children: React.ReactNode; role: "ADMIN" | "PLAYER" }) {
  const navigation = role === "ADMIN" ? adminNav : playerNav;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_36%),linear-gradient(180deg,#08111d_0%,#05070b_100%)] text-white">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <LayoutDashboard className="h-5 w-5 text-[#d4af37]" />
                {role === "ADMIN" ? "Admin Console" : "Player Hub"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-slate-300">
                {role === "ADMIN"
                  ? "Manage the entire cricket operation from selection to analytics."
                  : "Track your stats, schedule, attendance, and team updates in one place."}
              </p>
            </CardContent>
          </Card>

          <nav className="mt-6 space-y-1">
            {navigation.map((item) => (
              <SidebarLink key={item.href} {...item} />
            ))}
          </nav>
        </aside>

        <main>
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/70 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">11 Star Cricketers</p>
              <p className="text-sm text-slate-300">{role === "ADMIN" ? "Operations dashboard" : "Personal player dashboard"}</p>
            </div>
            <ThemeToggle />
          </div>
          <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
