import { getService, services } from "@/lib/services";
import { OG_SIZE, renderOgImage } from "@/lib/seo/og";

export const alt = "AEB Media service";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  return renderOgImage({
    title: service?.headline ?? "Services",
    kicker: service?.navLabel ?? "AEB Media",
  });
}
