/**
 * Per-service SEO copy: search-intent titles/descriptions and FAQ content
 * (rendered on the page and emitted as FAQPage JSON-LD). Answers only restate
 * existing service positioning — no invented prices, timelines, or stats.
 */

export type ServiceFaq = { question: string; answer: string };

type ServiceSeo = {
  title: string;
  description: string;
  faqs: ServiceFaq[];
};

export const serviceSeo: Record<string, ServiceSeo> = {
  social: {
    title: "Social Media Management & Content Creation in Chicago | AEB Media",
    description:
      "Done-for-you social media for Chicagoland local businesses — scripted, filmed, edited, and posted. Reels and short-form content that builds your brand and books clients.",
    faqs: [
      {
        question: "Do you film the content, or do I have to?",
        answer:
          "We do. Our team handles scripting, filming on location at your business, editing, and posting — you keep running your business while the content gets made around it.",
      },
      {
        question: "Do I need to be on camera?",
        answer:
          "Only as much as you want to be. Your work, your team, and your results are the content — we script the hooks and direct the whole shoot, so nobody has to perform.",
      },
      {
        question: "How is this different from hiring a videographer?",
        answer:
          "A videographer hands you footage. We run a system: a content strategy built for your market, filming and editing tuned for short-form, consistent posting, and reporting on what actually drives inquiries — then we double down on what works.",
      },
      {
        question: "Why isn't my current posting getting views?",
        answer:
          "Posting random photos of your work isn't a strategy. Without proper hooks, scripting, and editing, content gets buried by the algorithm. The first three seconds decide whether anyone sees the rest — that's a craft, and it's the part we own.",
      },
    ],
  },
  "google-ads": {
    title: "Google Ads Management for Local Businesses in Chicago | AEB Media",
    description:
      "Google Ads management for Chicagoland home services, fitness, and wellness businesses. Tight keywords, converting landing pages, and tracking down to cost per client.",
    faqs: [
      {
        question: "I've run Google Ads before and lost money. Why would this be different?",
        answer:
          "We start by auditing what went wrong — broad keywords, missing negatives, no conversion tracking are the usual suspects. Then we rebuild from scratch: proper structure, tight keyword groups, compelling ads, and tracking set up correctly from day one.",
      },
      {
        question: "How do I know which ads are actually producing clients?",
        answer:
          "We set up tracking for calls, form submissions, and bookings so every lead is attributed. You'll know exactly what your cost per client is — and we cut anything that doesn't pay for itself.",
      },
      {
        question: "What's included in management?",
        answer:
          "Ad copywriting, landing page optimization, conversion tracking, and ongoing optimization — bids, negative keywords, and new ad tests, monitored daily to improve your return on ad spend.",
      },
      {
        question: "How much should I budget?",
        answer:
          "It depends on your market and your goals — there's no one-size number. We build the plan around what actually moves the needle for your business, and because everything is tracked, budget decisions come from your real cost per lead, not guesswork.",
      },
    ],
  },
  "meta-ads": {
    title: "Facebook & Instagram Ads Management in Chicago | AEB Media",
    description:
      "Meta ads management for Chicagoland local businesses — real audience targeting, video ads built for the feed, full-funnel retargeting, and weekly lead reports.",
    faqs: [
      {
        question: "Why not just boost my posts?",
        answer:
          "Hitting 'Boost Post' feels productive but targets the wrong audience with the wrong message — it's the most expensive way to get zero results on Meta. Proper campaigns use custom audiences, lookalikes, and a full funnel from awareness to conversion.",
      },
      {
        question: "Do you create the ad videos?",
        answer:
          "Yes — we create 3-5 professional video ads per campaign, scripted, filmed, and edited specifically for the Meta feed. They're not repurposed posts; they're built to convert.",
      },
      {
        question: "What happens after someone clicks the ad?",
        answer:
          "They land on a mobile-optimized page designed for one action — booking. Ads without a landing page, retargeting, and follow-up waste the attention you paid for, so we build the complete path.",
      },
      {
        question: "How do you report results?",
        answer:
          "Weekly reports showing exactly how many leads you got, what they cost, and how campaigns are trending. No vanity metrics — just the numbers that matter to your business.",
      },
    ],
  },
  web: {
    title: "Web Design & Lead Generation Websites in Chicago | AEB Media",
    description:
      "Fast, conversion-focused websites and landing pages for Chicagoland local businesses — built to turn clicks from ads and search into booked jobs.",
    faqs: [
      {
        question: "Do you redesign existing sites or only build new ones?",
        answer:
          "Both. What matters is the outcome: a fast, mobile-first site with a clear offer, strong proof, and an obvious next step. If your current site can get there, we improve it; if it can't, we rebuild it.",
      },
      {
        question: "Will the site work with my ad campaigns?",
        answer:
          "That's the point. We build dedicated landing pages for each campaign — single offer, single action, matched to the ad that brought the click — so your ad spend stops leaking.",
      },
      {
        question: "Do you handle tracking and SEO?",
        answer:
          "Analytics, conversion events, and technical SEO foundations are set up as part of the build — clean structure, fast Core Web Vitals, and local search basics done correctly.",
      },
      {
        question: "What makes a website actually generate leads?",
        answer:
          "Speed, clarity, and wiring. Every extra second of load time loses visitors; a site without a clear next step loses the rest. We connect forms, click-to-call, and booking flows to your inbox and CRM so nothing arrives silently.",
      },
    ],
  },
  automation: {
    title: "AI & Marketing Automation for Local Businesses | AEB Media",
    description:
      "Custom AI-powered workflows for Chicagoland businesses — instant lead response, automated follow-up, appointment booking, and review collection on autopilot.",
    faqs: [
      {
        question: "What actually gets automated?",
        answer:
          "Lead capture and instant responses, multi-step follow-up via text and email, appointment booking with reminders, AI chat that qualifies leads, and automatic Google review requests after every job.",
      },
      {
        question: "Will it sound robotic to my customers?",
        answer:
          "No — responses are personalized and built around how your business actually talks. The difference customers notice is speed: an answer at 2 AM instead of silence until morning.",
      },
      {
        question: "Do I need to switch to new software?",
        answer:
          "No. We build the automations around your existing tools — your calendar, your CRM, your social media, your website. Everything talks to everything.",
      },
      {
        question: "What happens to leads that don't book right away?",
        answer:
          "They enter a follow-up sequence — consistent, professional touches by text and email that nurture the maybes instead of losing them. Most leads don't book on the first touch; the system is built for the ones that need a second.",
      },
    ],
  },
};
