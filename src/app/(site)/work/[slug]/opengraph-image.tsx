import { getCaseStudies, getCaseStudy } from "@/lib/content";
import { OG_SIZE, renderOgImage } from "@/lib/seo/og";

export const alt = "AEB Media case study";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getCaseStudies().map((study) => ({ slug: study.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return renderOgImage({
    title: study?.resultHeadline ?? "Case study",
    kicker: study ? `${study.client} · Case study` : "Case study",
  });
}
