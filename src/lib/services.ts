export type ServiceStep = { title: string; body: string };
export type ServiceItem = { title: string; body: string };

export type Service = {
  slug: string;
  name: string;
  /** Short label for nav/footer/strips. */
  navLabel: string;
  /** Big display headline on the detail page. */
  headline: string;
  /** Supporting line under the headline. */
  subheadline: string;
  /** One-sentence card blurb. */
  blurb: string;
  /** Who this is for. */
  who: string;
  /** Pain-point section heading + items. */
  painsHeading: string;
  pains: ServiceItem[];
  /** Deliverables section heading + items. */
  deliverablesHeading: string;
  deliverables: ServiceItem[];
  process: ServiceStep[];
  ctaLabel: string;
};

// Copy sourced from the live aeb.media site where it existed; the web pillar is new.
export const services: Service[] = [
  {
    slug: "social",
    name: "Social Media Content Production",
    navLabel: "Social Media Content",
    headline: "Content that builds your brand",
    subheadline:
      "We handle scripting, filming, editing, and posting — so your business shows up consistently in your clients' feed, without you lifting a finger.",
    blurb:
      "Scroll-stopping reels, stories, and posts — scripted, filmed, edited, and posted for you.",
    who: "Local businesses that know they should be posting but don't have the time, gear, or strategy to do it well — home services, fitness, and wellness especially.",
    painsHeading: "Why most businesses fail at social media",
    pains: [
      {
        title: "There's never time",
        body: "Running a business is already a full-time job. Social media falls to the bottom of the list every single week — and your audience notices the silence.",
      },
      {
        title: "Posting isn't a strategy",
        body: "Posting random photos of your work isn't a strategy. Without proper hooks, scripting, and editing, your content gets buried by the algorithm.",
      },
      {
        title: "Silence costs you clients",
        body: "When someone Googles you, there's nothing. No proof, no content, no reason to choose you.",
      },
    ],
    deliverablesHeading: "Done-for-you, start to finish",
    deliverables: [
      {
        title: "Content strategy & calendar",
        body: "A monthly plan built around your business, your customers, and what actually performs in your market — not a generic posting schedule.",
      },
      {
        title: "Content production",
        body: "We script and film on location — reels, stories, and posts designed to stop the scroll, built around hooks that earn the first three seconds.",
      },
      {
        title: "Professional editing",
        body: "Cuts, captions, and pacing tuned for short-form. Your content looks like a brand, not a camera roll.",
      },
      {
        title: "Posting & reporting",
        body: "We publish, watch what performs, and double down on it. You get a clear report — reach, followers, and inquiries, not vanity metrics.",
      },
    ],
    process: [
      {
        title: "Strategy",
        body: "We learn your business, your customers, and your market, then build a content plan around what will actually move the needle.",
      },
      {
        title: "Produce",
        body: "We script, film, and edit batches of content on a schedule that doesn't disrupt your operation.",
      },
      {
        title: "Run",
        body: "We post consistently and keep your presence alive in the feed — no gaps, no silence.",
      },
      {
        title: "Report",
        body: "We track every metric that matters. What's working gets amplified. What's not gets cut.",
      },
    ],
    ctaLabel: "Claim your free audit",
  },
  {
    slug: "google-ads",
    name: "Google Ads Management",
    navLabel: "Google Ads",
    headline: "Show up when they search",
    subheadline:
      "Show up the moment someone searches for what you offer. Clicks become paying clients.",
    blurb:
      "Show up the moment someone searches for what you offer. Clicks become paying clients.",
    who: "Local businesses whose customers search before they buy — cleaning, HVAC, gyms, med spas — and who want every ad dollar attributed to a booked job.",
    painsHeading: "Why Google Ads eats budgets",
    pains: [
      {
        title: "Paying for the wrong clicks",
        body: "Broad keywords and missing negatives mean your budget goes to people who were never going to buy from you.",
      },
      {
        title: "Ads that don't get clicked",
        body: "Weak headlines and no clear offer hand the click — and the client — to the competitor listed right below you.",
      },
      {
        title: "No idea what's working",
        body: "Without call, form, and booking tracking, you can't tell which campaign pays for itself and which just spends.",
      },
    ],
    deliverablesHeading: "What you get",
    deliverables: [
      {
        title: "Ad copywriting",
        body: "We write compelling ad copy with strong headlines, clear value propositions, and calls to action that make people click your ad instead of your competitor's.",
      },
      {
        title: "Landing page optimization",
        body: "We make sure the page people land on after clicking is designed to convert — fast loading, clear offer, strong call to action, mobile-friendly.",
      },
      {
        title: "Conversion tracking",
        body: "We set up tracking for calls, form submissions, and bookings so every lead is attributed. You'll know exactly what your cost per client is.",
      },
      {
        title: "Ongoing optimization",
        body: "We monitor performance daily, adjust bids, add negative keywords, test new ad copy, and continuously improve your return on ad spend.",
      },
    ],
    process: [
      {
        title: "Audit & research",
        body: "We audit your current online presence, research your competition, and identify the highest-value keywords for your business. If you've run ads before, we analyze what went wrong.",
      },
      {
        title: "Campaign build & structure",
        body: "We build your campaigns from scratch — proper structure, tight keyword groups, compelling ads, and conversion tracking all set up correctly from day one.",
      },
      {
        title: "Optimize & scale",
        body: "Once we know what's working, we double down. We cut what isn't converting, scale what is, and continuously improve your cost per lead.",
      },
    ],
    ctaLabel: "Book a free consultation",
  },
  {
    slug: "meta-ads",
    name: "Meta Ads Management",
    navLabel: "Meta Ads",
    headline: "Reach them in the feed — before they even search",
    subheadline:
      "Targeted Facebook and Instagram campaigns that reach your ideal clients. Real strategy, real creative, real tracking.",
    blurb:
      "Targeted Facebook and Instagram campaigns that reach your ideal clients. Real strategy.",
    who: "Businesses whose customers don't know they need them yet — where demand is created in the feed, not typed into a search bar.",
    painsHeading: "Why 'Boost Post' doesn't work",
    pains: [
      {
        title: "Boosting is burning",
        body: "Hitting 'Boost Post' feels productive but targets the wrong audience with the wrong message. It's the most expensive way to get zero results on Meta.",
      },
      {
        title: "Reaching everyone except your ideal client",
        body: "Without proper audience targeting — custom audiences, lookalikes, interest stacking — your ads reach people who will never buy from you.",
      },
      {
        title: "Attention with nowhere to go",
        body: "Even a great ad fails if there's nothing behind it. Without a landing page, retargeting, and follow-up system, you're paying for attention and wasting it.",
      },
    ],
    deliverablesHeading: "A complete Meta ads system, not just campaigns",
    deliverables: [
      {
        title: "Audience targeting",
        body: "We build targeted audiences using your existing customer data, website visitors, lookalike modeling, and interest-based targeting to reach the people most likely to become clients.",
      },
      {
        title: "Creative production",
        body: "We create 3-5 professional video ads per campaign — scripted, filmed, and edited specifically for the Meta feed. These aren't repurposed posts. They're built to convert.",
      },
      {
        title: "Full funnel setup",
        body: "We build the complete path: awareness ads to cold audiences, retargeting ads to warm audiences, and conversion ads to people who've already engaged. Every dollar works harder.",
      },
      {
        title: "Landing pages that convert",
        body: "We design mobile-optimized landing pages for each campaign — fast loading, clear value, strong social proof, and a single call to action that drives bookings.",
      },
      {
        title: "Testing & iteration",
        body: "We test different hooks, audiences, ad formats, and offers to find the winning combinations. Then we scale what works and cut what doesn't.",
      },
      {
        title: "Weekly performance reports",
        body: "Weekly reports showing exactly how many leads you got, what they cost, and how the campaigns are trending. No vanity metrics — just the numbers that matter to your business.",
      },
    ],
    process: [
      {
        title: "Discovery & strategy",
        body: "We learn your business, your ideal client, and your offer. We research your market and competition to build an ad strategy designed to generate real leads — not just impressions.",
      },
      {
        title: "Campaign launch",
        body: "We produce the creative, build the audiences, and launch the full funnel — awareness, retargeting, and conversion — with tracking wired in from day one.",
      },
      {
        title: "Optimize & scale",
        body: "As data flows in, we optimize daily — adjusting audiences, swapping creative, refining targeting. Once we find the winning formula, we scale your budget for maximum return.",
      },
    ],
    ctaLabel: "Book a free consultation",
  },
  {
    slug: "web",
    name: "Web Development & Lead-Gen Infrastructure",
    navLabel: "Web & Lead Gen",
    headline: "A website that works as hard as your ads",
    subheadline:
      "Fast, conversion-focused sites and landing pages — the infrastructure every campaign lands on and every lead flows through.",
    blurb:
      "Fast, conversion-focused websites and landing pages that turn clicks into booked jobs.",
    who: "Businesses running (or planning to run) traffic that deserves better than a slow template site — and anyone whose website has never actually produced a lead.",
    painsHeading: "Where websites lose the lead",
    pains: [
      {
        title: "Slow sites bleed conversions",
        body: "Every extra second of load time sends a chunk of your visitors — and your ad spend — to the back button.",
      },
      {
        title: "No clear next step",
        body: "A site that's just a brochure gives visitors nothing to do. No offer, no form, no booking — no lead.",
      },
      {
        title: "Leads with nowhere to land",
        body: "Running ads to a homepage is like mailing flyers with no phone number. Each campaign needs a page built for exactly one action.",
      },
    ],
    deliverablesHeading: "What you get",
    deliverables: [
      {
        title: "Conversion-focused website",
        body: "A fast, mobile-first site with one job: turn visitors into inquiries. Clear offer, strong proof, obvious call to action.",
      },
      {
        title: "Campaign landing pages",
        body: "Dedicated pages for each ad campaign — single offer, single action, matched to the ad that brought the click.",
      },
      {
        title: "Lead capture wiring",
        body: "Forms, click-to-call, and booking flows connected to your inbox, phone, and CRM — so nothing arrives silently.",
      },
      {
        title: "Tracking & SEO foundations",
        body: "Analytics, conversion events, and technical SEO set up correctly — clean structure, fast Core Web Vitals, local search basics.",
      },
    ],
    process: [
      {
        title: "Map the funnel",
        body: "We figure out where your leads should come from and what has to happen for a visitor to become a booked job.",
      },
      {
        title: "Design & build",
        body: "We build fast, focused pages around your offer — no bloat, no template clutter.",
      },
      {
        title: "Wire & launch",
        body: "Forms, tracking, and follow-up connected end to end, tested, and shipped.",
      },
      {
        title: "Measure & improve",
        body: "We watch real visitor behavior and keep tightening the path from click to client.",
      },
    ],
    ctaLabel: "Book a free consultation",
  },
  {
    slug: "automation",
    name: "AI & Marketing Automation",
    navLabel: "AI Automation",
    headline: "Automations that actually save you time and money",
    subheadline:
      "We build custom AI-powered workflows that capture leads, follow up instantly, book appointments, and handle client communication — so you never miss an opportunity again.",
    blurb:
      "Automate follow-ups, lead capture, appointment booking, and client communication.",
    who: "Businesses losing leads to slow responses — where whoever answers first wins the job, and after-hours inquiries go cold by morning.",
    painsHeading: "What happens when leads fall through the cracks",
    pains: [
      {
        title: "Leads go cold overnight",
        body: "When someone inquires at 9 PM and hears back at 10 AM, they've often already booked with whoever answered first.",
      },
      {
        title: "Scheduling eats your day",
        body: "Back-and-forth texts trying to find a time that works, missed calls, double bookings — all of this wastes your time and frustrates potential clients.",
      },
      {
        title: "No follow-up, no sale",
        body: "Most leads don't book on the first touch. Without a follow-up system, those maybes quietly become someone else's clients.",
      },
    ],
    deliverablesHeading: "What we automate",
    deliverables: [
      {
        title: "Instant lead response",
        body: "When someone fills out a form, sends a DM, or inquires through your website, they get an instant, personalized response — even at 2 AM. No lead sits waiting.",
      },
      {
        title: "Automated follow-up sequences",
        body: "We build multi-step follow-up flows via text and email that nurture leads who didn't book on the first touch. Consistent, professional, and completely hands-off.",
      },
      {
        title: "Smart appointment booking",
        body: "Leads can book directly into your calendar without the back-and-forth. The system sends reminders, handles rescheduling, and reduces no-shows automatically.",
      },
      {
        title: "AI chat & lead qualification",
        body: "Custom AI chatbots trained on your business that can answer common questions, qualify leads, and route hot prospects to you — freeing up hours of your day.",
      },
      {
        title: "Review collection on autopilot",
        body: "After every job or appointment, the system automatically asks happy clients for a Google review. More reviews means better local SEO and more trust.",
      },
    ],
    process: [
      {
        title: "Map your journey",
        body: "We map out your current lead-to-client journey: where leads come from, how you respond, how you book, how you follow up. We find every gap and missed opportunity.",
      },
      {
        title: "Custom system design",
        body: "We design automation flows tailored to your specific business — not a generic template. Every workflow is built around how your business actually operates.",
      },
      {
        title: "Build & integrate",
        body: "We build the automations and integrate them with your existing tools — your calendar, your CRM, your social media, your website. Everything talks to everything.",
      },
      {
        title: "Launch & refine",
        body: "We launch the system, walk your team through how it works, and monitor it closely for the first few weeks. As real data comes in, we refine and improve the flows.",
      },
    ],
    ctaLabel: "Book a free consultation",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
