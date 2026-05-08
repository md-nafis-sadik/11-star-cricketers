import Link from "next/link";

const footerLinks = [
  { href: "/players", label: "Players" },
  { href: "/matches", label: "Schedule" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">11 Star Cricketers</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            A modern cricket management platform for squad operations, live scoring, attendance, and performance analytics.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400 lg:justify-end">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
