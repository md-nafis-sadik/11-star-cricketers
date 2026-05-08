import * as React from "react";

import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white placeholder:text-slate-500 shadow-inner shadow-black/10 outline-none transition focus:border-[#d4af37]/70 focus:ring-2 focus:ring-[#d4af37]/20",
        className,
      )}
      {...props}
    />
  );
}
