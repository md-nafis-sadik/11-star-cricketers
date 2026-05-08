import { GalleryGrid } from "@/components/sections/gallery-grid";
import { Card, CardContent } from "@/components/ui/card";
import { getLiveGallery } from "@/data/live";

export default async function AdminGalleryPage() {
  const gallery = await getLiveGallery();

  return (
    <div className="space-y-6">
      <Card className="border-white/10 bg-white/5">
        <CardContent className="space-y-4 p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">Gallery management</p>
          <h1 className="text-3xl font-semibold text-white">Upload and categorize team media</h1>
        </CardContent>
      </Card>
      <GalleryGrid items={gallery} />
    </div>
  );
}
