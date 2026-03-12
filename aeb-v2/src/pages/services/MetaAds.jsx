import ServicePage from "../../components/ServicePage";
import { Icons } from "../../components/Icons";

const otherServices = [
  { path: "/services/social-media", icon: Icons.film, label: "Social Media", tagline: "Content that builds your brand" },
  { path: "/services/google-ads", icon: Icons.google, label: "Google Ads", tagline: "Show up when they search" },
  { path: "/services/ai-automations", icon: Icons.bot, label: "AI Automations", tagline: "Automate your follow-ups" },
];

export default function MetaAds() {
  return (
    <ServicePage
      seo={{
        title: "Facebook & Instagram Ads for Local Businesses | AEB Media",
        description: "Targeted Meta ad campaigns that reach your ideal clients in their feed. Real strategy, not just boosted posts. We handle everything from creative to conversion.",
      }}
      hero={{
        icon: Icons.meta,
        badge: "FACEBOOK & INSTAGRAM ADS",
        title: <>Reach your ideal clients<br/><span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>before they even search</span></>,
        subtitle: "Google catches people looking. Meta puts you in front of people who didn't know they needed you yet — and turns that attention into booked appointments.",
      }}
      problems={{
        heading: "Why boosting posts isn't a strategy",
        items: [
          { icon: Icons.dollarOff, title: "Boosted posts burn money", desc: "Hitting 'Boost Post' feels productive but targets the wrong audience with the wrong message. It's the most expensive way to get zero results on Meta." },
          { icon: Icons.users, title: "You're reaching everyone except your ideal client", desc: "Without proper audience targeting — custom audiences, lookalikes, interest stacking — your ads reach people who will never buy from you." },
          { icon: Icons.eye, title: "Your ad creative doesn't convert", desc: "A static image with 'Call us today!' is invisible in 2026. Scroll-stopping video ads with hooks, storytelling, and clear offers are what drive real results." },
          { icon: Icons.barChart, title: "No funnel behind the ad", desc: "Even a great ad fails if there's nothing behind it. Without a landing page, retargeting, and follow-up system, you're paying for attention and wasting it." },
        ],
      }}
      benefits={{
        heading: "A complete Meta ads system, not just campaigns",
        items: [
          { title: "Custom Audience Strategy", desc: "We build targeted audiences using your existing customer data, website visitors, lookalike modeling, and interest-based targeting to reach the people most likely to become clients." },
          { title: "Scroll-Stopping Video Ads", desc: "We create 3-5 professional video ads per campaign — scripted, filmed, and edited specifically for the Meta feed. These aren't repurposed posts. They're built to convert." },
          { title: "Full Funnel Setup", desc: "We build the complete path: awareness ads to cold audiences, retargeting ads to warm audiences, and conversion ads to people who've already engaged. Every dollar works harder." },
          { title: "Landing Pages That Convert", desc: "We design mobile-optimized landing pages for each campaign — fast loading, clear value, strong social proof, and a single call to action that drives bookings." },
          { title: "A/B Testing & Optimization", desc: "We test different hooks, audiences, ad formats, and offers to find the winning combinations. Then we scale what works and cut what doesn't." },
          { title: "Transparent Reporting", desc: "Weekly reports showing exactly how many leads you got, what they cost, and how the campaigns are trending. No vanity metrics — just the numbers that matter to your business." },
        ],
      }}
      process={[
        { title: "Strategy Session", desc: "We learn your business, your ideal client, and your offer. We research your market and competition to build an ad strategy designed to generate real leads — not just impressions." },
        { title: "Creative Production", desc: "We script and produce video ad creative specifically designed for Meta. Strong hooks in the first second, clear value, and a compelling call to action." },
        { title: "Campaign Launch", desc: "We build the full funnel in Meta Ads Manager — proper campaign structure, audience targeting, budget allocation, and tracking. Then we launch and monitor closely." },
        { title: "Optimize & Scale", desc: "As data flows in, we optimize daily — adjusting audiences, swapping creative, refining targeting. Once we find the winning formula, we scale your budget for maximum return." },
      ]}
      otherServices={otherServices}
    />
  );
}
