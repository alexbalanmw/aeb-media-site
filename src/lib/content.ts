import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const caseStudyFrontmatter = z.object({
  title: z.string(),
  client: z.string(),
  vertical: z.string(),
  services: z.array(z.string()).min(1),
  resultHeadline: z.string(),
  summary: z.string(),
  date: z.string(),
  featured: z.boolean().default(false),
  heroImage: z.string().optional(),
});

export type CaseStudyFrontmatter = z.infer<typeof caseStudyFrontmatter>;

export type CaseStudy = CaseStudyFrontmatter & {
  slug: string;
  body: string;
};

const caseStudiesDir = path.join(process.cwd(), "content", "case-studies");

export function getCaseStudies(): CaseStudy[] {
  const files = fs
    .readdirSync(caseStudiesDir)
    .filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(caseStudiesDir, file), "utf8");
      const { data, content } = matter(raw);
      const frontmatter = caseStudyFrontmatter.parse(data);
      return {
        ...frontmatter,
        slug: file.replace(/\.mdx$/, ""),
        body: content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getCaseStudies().find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getCaseStudies().filter((study) => study.featured);
}
