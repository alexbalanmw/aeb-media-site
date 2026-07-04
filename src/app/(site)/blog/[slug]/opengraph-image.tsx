import { getBlogPost, getBlogPosts } from "@/lib/content";
import { OG_SIZE, renderOgImage } from "@/lib/seo/og";

export const alt = "AEB Media blog post";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return renderOgImage({
    title: post?.title ?? "Blog",
    kicker: "From the AEB Media blog",
  });
}
