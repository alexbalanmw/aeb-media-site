import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@/components/analytics/analytics";
import { CtaTracker } from "@/components/analytics/cta-tracker";
import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyCta } from "@/components/layout/sticky-cta";
import { MotionProvider } from "@/components/motion/motion-provider";
import { organizationJsonLd } from "@/lib/seo/jsonld";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${bricolage.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="pb-20 md:pb-0">
            {children}
          </main>
            <Footer />
            <StickyCta />
          </MotionProvider>
        </ThemeProvider>
        <JsonLd data={organizationJsonLd()} />
        <Analytics />
        <CtaTracker />
      </body>
    </html>
  );
}
