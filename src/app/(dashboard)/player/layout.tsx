import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function PlayerLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <DashboardShell role="PLAYER">{children}</DashboardShell>;
}
