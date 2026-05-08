import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "ghost" | "outline" | "destructive";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
};

export function Button({ className, variant = "default", size = "md", asChild, children, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full border text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 disabled:pointer-events-none disabled:opacity-50",
    variant === "default" && "border-[#d4af37] bg-[#d4af37] text-[#120b02] shadow-lg shadow-[#d4af37]/20 hover:bg-[#e7c86e]",
    variant === "secondary" && "border-[#6f46a7] bg-[#121827] text-[#f5faf7] hover:border-[#d4af37] hover:text-[#fff9ea]",
    variant === "ghost" && "border-transparent bg-transparent text-slate-200 hover:bg-white/5",
    variant === "outline" && "border-slate-700 bg-transparent text-slate-100 hover:border-slate-500",
    variant === "destructive" && "border-[#6f46a7] bg-[#6f46a7] text-white hover:bg-[#8b63c4]",
    size === "sm" && "h-9 px-3",
    size === "md" && "h-11 px-5",
    size === "lg" && "h-12 px-6 text-base",
    className,
  );

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      ...child.props,
      className: cn(classes, child.props.className),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
