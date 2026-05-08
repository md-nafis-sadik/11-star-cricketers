import { AnnouncementCreateForm } from "@/components/forms/announcement-create-form";
import { Card, CardContent } from "@/components/ui/card";
import { getLiveAnnouncements } from "@/data/live";

export default async function AdminAnnouncementsPage() {
  const announcements = await getLiveAnnouncements();

  return (
    <div className="space-y-6">
      <Card className="border-white/10 bg-white/5">
        <CardContent className="space-y-4 p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">Announcements</p>
          <h1 className="text-3xl font-semibold text-white">Create and publish team updates</h1>
        </CardContent>
      </Card>
      <AnnouncementCreateForm />
      <div className="grid gap-4 lg:grid-cols-2">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="border-white/10 bg-white/5">
            <CardContent className="space-y-3 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">{announcement.priority}</p>
              <h2 className="text-xl font-semibold text-white">{announcement.title}</h2>
              <p className="text-sm leading-7 text-slate-300">{announcement.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
