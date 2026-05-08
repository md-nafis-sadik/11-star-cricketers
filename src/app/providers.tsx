"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      {children}
      <Toaster richColors position="top-right" />
    </ClerkProvider>
  );
}
