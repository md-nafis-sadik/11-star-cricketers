import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { GalleryImageSummary } from "@/lib/types";

export function GalleryGrid({ items }: { items: GalleryImageSummary[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden border-white/10 bg-white/5">
          <div className="relative aspect-[4/3]">
            <Image src={item.imageUrl} alt={item.title} fill className="object-cover" unoptimized />
          </div>
          <CardContent className="space-y-2 p-5">
            <Badge>{item.category}</Badge>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
