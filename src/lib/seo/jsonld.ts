import type { CaseStudy } from "@/lib/content";
import type { Service } from "@/lib/services";
import { site } from "@/lib/site";

type JsonLd = Record<string, unknown>;

const ORG_ID = `${site.url}/#organization`;

/** Site-wide Organization + LocalBusiness node, referenced by @id elsewhere. */
export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    // ProfessionalService is a LocalBusiness subtype, which is an Organization.
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    founder: {
      "@type": "Person",
      name: site.founder,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Chicagoland, Illinois",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "IL",
      addressCountry: "US",
    },
    knowsAbout: [
      "Social media marketing",
      "Google Ads",
      "Meta Ads",
      "Web development",
      "Marketing automation",
    ],
  };
}

export function serviceJsonLd(service: Service): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.blurb,
    url: `${site.url}/services/${service.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Chicagoland, Illinois",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function caseStudyJsonLd(study: CaseStudy): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    url: `${site.url}/work/${study.slug}`,
    datePublished: study.date,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    about: study.services,
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
