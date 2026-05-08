"use client";

import { useState } from "react";

import { createAnnouncementAction } from "@/server/actions/admin";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function AnnouncementCreateForm() {
  const [pending, setPending] = useState(false);

  async function formAction(formData: FormData) {
    setPending(true);
    await createAnnouncementAction({ ok: false, message: "" }, formData);
    setPending(false);
  }

  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-semibold text-white">Publish announcement</h2>
        <form action={formAction} className="grid gap-3">
          <Input name="title" placeholder="Announcement title" required />
          <Textarea name="body" placeholder="Announcement body" required />
          <Select name="priority" defaultValue="NORMAL" required>
            <option value="LOW">Low</option>
            <option value="NORMAL">Normal</option>
            <option value="HIGH">High</option>
            <option value="URGENT">Urgent</option>
          </Select>
          <Button type="submit">{pending ? "Publishing..." : "Publish announcement"}</Button>
        </form>
      </CardContent>
    </Card>
  );
}
