export const site = {
  name: "AEB Media",
  tagline: "Social Media & Ads Agency for Local Businesses",
  description:
    "Custom growth systems for local businesses: social media content, Google Ads, Meta campaigns, and AI automations. Serving Chicagoland home services, fitness, and wellness businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aeb.media",
  founder: "Alex Balan",
  region: "Chicagoland, IL",
  email: "alexb@aeb.media", // TODO: confirm public contact email
  headlineStat: { value: 127, suffix: "M+", label: "views generated" },
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const cta = { href: "/free-audit", label: "Get a free audit" } as const;
