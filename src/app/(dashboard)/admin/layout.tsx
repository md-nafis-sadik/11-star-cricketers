import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <DashboardShell role="ADMIN">{children}</DashboardShell>;
}
