import { Analytics } from "@/components/analytics/analytics";
import { CtaTracker } from "@/components/analytics/cta-tracker";
import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyCta } from "@/components/layout/sticky-cta";
import { MotionProvider } from "@/components/motion/motion-provider";
import { organizationJsonLd } from "@/lib/seo/jsonld";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
      <JsonLd data={organizationJsonLd()} />
      <Analytics />
      <CtaTracker />
    </MotionProvider>
  );
}
