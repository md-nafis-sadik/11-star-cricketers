"use client";

import { useState } from "react";

import { createMatchAction } from "@/server/actions/admin";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export function MatchCreateForm() {
  const [pending, setPending] = useState(false);

  async function formAction(formData: FormData) {
    setPending(true);
    await createMatchAction({ ok: false, message: "" }, formData);
    setPending(false);
  }

  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-semibold text-white">Create match</h2>
        <form action={formAction} className="grid gap-3 sm:grid-cols-2">
          <Input name="opponent" placeholder="Opponent" required />
          <Input name="venue" placeholder="Venue" required />
          <Input name="startTime" type="datetime-local" required />
          <Select name="format" defaultValue="T20" required>
            <option value="T10">T10</option>
            <option value="T20">T20</option>
            <option value="ODI">ODI</option>
            <option value="TEST">Test</option>
          </Select>
          <Select name="status" defaultValue="UPCOMING" required>
            <option value="UPCOMING">Upcoming</option>
            <option value="LIVE">Live</option>
            <option value="COMPLETED">Completed</option>
            <option value="CANCELLED">Cancelled</option>
          </Select>
          <Input name="tossResult" placeholder="Toss result" required />
          <Input name="result" placeholder="Match result" className="sm:col-span-2" />
          <Button type="submit" className="sm:col-span-2">
            {pending ? "Saving..." : "Create match"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
