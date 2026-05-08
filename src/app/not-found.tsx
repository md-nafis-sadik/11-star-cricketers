import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-xl space-y-6 rounded-[2rem] p-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">404</p>
        <h1 className="text-4xl font-semibold text-white">We could not find that page.</h1>
        <p className="text-sm leading-6 text-slate-300">The page may have moved or the route has not been created yet.</p>
        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </div>
  );
}
