import Link from "next/link";
import { cta, nav, site } from "@/lib/site";

const serviceLinks = [
  { href: "/services/social", label: "Social Media Content" },
  { href: "/services/google-ads", label: "Google Ads" },
  { href: "/services/meta-ads", label: "Meta Ads" },
  { href: "/services/web", label: "Web & Lead Gen" },
  { href: "/services/automation", label: "AI Automation" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-950 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-display text-2xl font-bold tracking-tight text-white">
            AEB<span className="text-brand-400">.media</span>
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-brand-200/90">
            Custom growth systems for local businesses — done-for-you content, ads, and
            automation that turn attention into revenue. {site.region}.
          </p>
          <p className="text-sm">
            <a
              href={`mailto:${site.email}`}
              className="underline decoration-brand-500 underline-offset-4 hover:text-white"
            >
              {site.email}
            </a>
          </p>
          {/* TODO: confirm — social profile links from the live site */}
        </div>

        <nav aria-label="Footer" className="space-y-3 text-sm">
          <p className="font-semibold uppercase tracking-widest text-brand-300">Pages</p>
          <ul className="space-y-2">
            {[{ href: "/", label: "Home" }, ...nav, cta].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-brand-200/90 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="space-y-3 text-sm">
          <p className="font-semibold uppercase tracking-widest text-brand-300">
            Services
          </p>
          <ul className="space-y-2">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-brand-200/90 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-5 text-xs text-brand-300/80 sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
