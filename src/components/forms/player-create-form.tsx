"use client";

import { useState } from "react";

import { createPlayerAction } from "@/server/actions/admin";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export function PlayerCreateForm() {
  const [pending, setPending] = useState(false);

  async function formAction(formData: FormData) {
    setPending(true);
    await createPlayerAction({ ok: false, message: "" }, formData);
    setPending(false);
  }

  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-semibold text-white">Add player</h2>
        <form action={formAction} className="grid gap-3 sm:grid-cols-2">
          <Input name="name" placeholder="Player name" required />
          <Select name="role" defaultValue="BATSMAN" required>
            <option value="BATSMAN">Batsman</option>
            <option value="BOWLER">Bowler</option>
            <option value="ALL_ROUNDER">All rounder</option>
            <option value="WICKET_KEEPER">Wicket keeper</option>
          </Select>
          <Input name="jerseyNumber" type="number" placeholder="Jersey number" required />
          <Input name="city" placeholder="City" required />
          <Input name="battingStyle" placeholder="Batting style" required />
          <Input name="bowlingStyle" placeholder="Bowling style" required />
          <Input name="imageUrl" placeholder="Image URL" className="sm:col-span-2" />
          <Button type="submit" className="sm:col-span-2">
            {pending ? "Saving..." : "Create player"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
