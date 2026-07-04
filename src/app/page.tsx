import type { Metadata } from "next";
import { ClosingCta } from "@/components/sections/closing-cta";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Process } from "@/components/sections/process";
import { ServicesStrip } from "@/components/sections/services-strip";

export const metadata: Metadata = {
  title: "AEB Media | Social Media & Ads Agency for Local Businesses",
  description:
    "We build custom growth systems for local businesses — social media, Google Ads, Meta campaigns, and AI automations. Over 127M+ views generated.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesStrip />
      <FeaturedWork />
      <Process />
      <ClosingCta />
    </>
  );
}
