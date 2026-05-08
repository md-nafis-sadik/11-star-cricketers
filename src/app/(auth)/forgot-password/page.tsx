import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ForgotPasswordPage() {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="space-y-5 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Password reset</p>
        <h1 className="text-3xl font-semibold text-white">Reset your access through Clerk.</h1>
        <p className="text-sm leading-7 text-slate-300">Use the login page to continue the reset flow or contact the team admin for help recovering access.</p>
        <Button asChild>
          <Link href="/login">Return to login</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
