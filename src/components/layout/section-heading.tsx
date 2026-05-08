import { Badge } from "@/components/ui/badge";

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        {description ? <p className="text-sm leading-7 text-slate-300 sm:text-base">{description}</p> : null}
      </div>
    </div>
  );
}
