import { collection, config, fields } from "@keystatic/core";

// "owner/name", e.g. "alexbalan/aeb-media". When set (with the KEYSTATIC_*
// secrets), the admin runs in GitHub mode: edits become commits and Vercel
// redeploys. Without it, local mode edits the files on disk directly.
const githubRepo = process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO;

export default config({
  storage: githubRepo
    ? { kind: "github", repo: githubRepo as `${string}/${string}` }
    : { kind: "local" },
  ui: {
    brand: { name: "AEB Media" },
  },
  collections: {
    caseStudies: collection({
      label: "Case Studies",
      slugField: "title",
      path: "content/case-studies/*",
      entryLayout: "content",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { isRequired: true } },
        }),
        client: fields.text({ label: "Client", validation: { isRequired: true } }),
        vertical: fields.text({
          label: "Vertical",
          description: "e.g. Home Services, Fitness & Recreation",
          validation: { isRequired: true },
        }),
        services: fields.array(fields.text({ label: "Service" }), {
          label: "Services",
          description:
            "Shown as filter chips — match existing names (Social Media Content, Google Ads, Meta Ads, Web & Lead Gen, AI Automation)",
          itemLabel: (props) => props.value,
          validation: { length: { min: 1 } },
        }),
        resultHeadline: fields.text({
          label: "Result headline",
          description: "The big line on the card and page header",
          validation: { isRequired: true },
        }),
        summary: fields.text({
          label: "Summary",
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: "Date",
          validation: { isRequired: true },
          defaultValue: { kind: "today" },
        }),
        featured: fields.checkbox({
          label: "Featured on home page",
          defaultValue: false,
        }),
        body: fields.mdx({ label: "Body" }),
      },
    }),
    blog: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "content/blog/*",
      entryLayout: "content",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { isRequired: true } },
        }),
        description: fields.text({
          label: "Description",
          description: "Shown on the blog index and in search results",
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: "Date",
          validation: { isRequired: true },
          defaultValue: { kind: "today" },
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        body: fields.mdx({ label: "Body" }),
      },
    }),
  },
});
