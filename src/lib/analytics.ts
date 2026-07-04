/** Client-side analytics helpers. Each call is a no-op if the script isn't loaded. */

type GtagFn = (...args: unknown[]) => void;
type FbqFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    fbq?: FbqFn;
  }
}

export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

export function trackLead(service: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "generate_lead", { service });
  window.fbq?.("track", "Lead", { content_category: service });
}

export function trackCtaClick(label: string, location: string) {
  trackEvent("cta_click", { label, location });
}
