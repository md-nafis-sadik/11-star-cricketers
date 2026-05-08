import { getLiveAnnouncements } from "@/data/live";

export default async function PlayerAnnouncementsPage() {
  const announcements = await getLiveAnnouncements();

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {announcements.map((announcement) => (
        <div key={announcement.id} className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">{announcement.priority}</p>
          <h2 className="mt-3 text-xl font-semibold text-white">{announcement.title}</h2>
          <p className="mt-2 text-sm leading-7 text-slate-300">{announcement.body}</p>
        </div>
      ))}
    </div>
  );
}
