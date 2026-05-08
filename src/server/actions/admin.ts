"use server";

import { revalidatePath } from "next/cache";

import { addAnnouncement, addMatch, addPlayer, updateAvailability } from "../../data/store";
import type { AvailabilityFormValues, AnnouncementFormValues, MatchFormValues, PlayerFormValues } from "@/lib/validation";
import { availabilityFormSchema, announcementFormSchema, matchFormSchema, playerFormSchema } from "@/lib/validation";

type ActionState = {
  ok: boolean;
  message: string;
};

export async function createPlayerAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = playerFormSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid player data" };
  }

  await addPlayer(parsed.data as PlayerFormValues);
  revalidatePath("/admin/players");
  revalidatePath("/players");
  return { ok: true, message: "Player created" };
}

export async function createMatchAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = matchFormSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid match data" };
  }

  await addMatch(parsed.data as MatchFormValues);
  revalidatePath("/admin/matches");
  revalidatePath("/matches");
  return { ok: true, message: "Match created" };
}

export async function createAnnouncementAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = announcementFormSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid announcement data" };
  }

  await addAnnouncement(parsed.data as AnnouncementFormValues);
  revalidatePath("/admin/announcements");
  revalidatePath("/");
  return { ok: true, message: "Announcement published" };
}

export async function updateAvailabilityAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = availabilityFormSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid availability data" };
  }

  await updateAvailability(parsed.data.playerId, parsed.data.status);
  revalidatePath("/player/availability");
  revalidatePath("/admin/attendance");
  return { ok: true, message: "Availability updated" };
}
