"use client";

import type React from "react";
import { useState } from "react";

import { updateAvailabilityAction } from "@/server/actions/admin";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export function AvailabilityForm() {
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setPending(true);
    await updateAvailabilityAction({ ok: false, message: "" }, formData);
    setPending(false);
  }

  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-semibold text-white">Update availability</h2>
        <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
          <Input name="playerId" placeholder="Player ID" required />
          <Select name="status" defaultValue="AVAILABLE" required>
            <option value="AVAILABLE">Available</option>
            <option value="UNAVAILABLE">Unavailable</option>
            <option value="INJURED">Injured</option>
          </Select>
          <Input name="note" placeholder="Optional note" className="sm:col-span-2" />
          <Button type="submit" className="sm:col-span-2">
            {pending ? "Updating..." : "Save availability"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
