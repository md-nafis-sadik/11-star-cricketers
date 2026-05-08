import Link from "next/link";

import { ShieldCheck } from "lucide-react";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass hidden overflow-hidden rounded-[2rem] p-10 lg:block">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">11 Star Cricketers</p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight text-white">Secure team access for admins and players.</h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
            Manage attendance, match logistics, live scoring, and player availability from a single authenticated platform.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300">Role based routes</p>
              <p className="mt-2 text-lg font-semibold text-white">Admin and player access are separated by middleware.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300">Auth provider</p>
              <p className="mt-2 text-lg font-semibold text-white">Google sign-in, email auth, and password reset with Clerk.</p>
            </div>
          </div>
          <Link href="/" className="mt-10 inline-flex items-center gap-2 text-sm text-[#d4af37] transition hover:text-[#f1dd9a]">
            <ShieldCheck className="h-4 w-4" />
            Back to site
          </Link>
        </div>
        <div className="glass rounded-[2rem] p-6 sm:p-10">{children}</div>
      </div>
    </div>
  );
}
