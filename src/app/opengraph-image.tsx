import { OG_SIZE, renderOgImage } from "@/lib/seo/og";

export const alt = "AEB Media — Social Media & Ads Agency for Local Businesses";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Your competitors are getting seen. Are you?",
    kicker: "127M+ views generated",
  });
}
