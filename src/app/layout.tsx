import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// display: "optional" — the font is preloaded so it almost always makes the
// first paint; when it doesn't, the size-adjusted fallback stays for the visit
// instead of swapping mid-view. Keeps the headline (LCP element) from
// re-painting late and dragging LCP with it.
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AEB Media | Social Media & Ads Agency for Local Businesses",
    template: "%s",
  },
  description:
    "Custom growth systems for local businesses: social media content, Google Ads, Meta campaigns, and AI automations. Chicagoland. 127M+ views generated.",
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#110c19",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Dark-only site: the class is baked on and there is no theme toggle.
    <html lang="en" className={`dark ${inter.variable} ${bricolage.variable}`}>
      <body>{children}</body>
    </html>
  );
}
