import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/layout/section-heading";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { getLiveGallery } from "@/data/live";

export default async function GalleryPage() {
  const gallery = await getLiveGallery();

  return (
    <PageShell className="space-y-10 py-8 lg:py-12">
      <SectionHeading eyebrow="Moments" title="Gallery" description="Match day moments, training frames, and team celebrations." />
      <GalleryGrid items={gallery} />
    </PageShell>
  );
}
