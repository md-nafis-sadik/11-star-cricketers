import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({ className, children }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
