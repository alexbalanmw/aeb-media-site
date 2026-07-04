import type { MetadataRoute } from "next";
import { getCaseStudies } from "@/lib/content";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/work", "/about", "/contact", "/free-audit"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getCaseStudies().map((study) => ({
      url: `${site.url}/work/${study.slug}`,
      lastModified: new Date(study.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
