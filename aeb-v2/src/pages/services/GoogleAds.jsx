import ServicePage from "../../components/ServicePage";
import { Icons } from "../../components/Icons";

const otherServices = [
  { path: "/services/social-media", icon: Icons.film, label: "Social Media", tagline: "Content that builds your brand" },
  { path: "/services/meta-ads", icon: Icons.meta, label: "Meta Ads", tagline: "Reach them in the feed" },
  { path: "/services/ai-automations", icon: Icons.bot, label: "AI Automations", tagline: "Automate your follow-ups" },
];

export default function GoogleAds() {
  return (
    <ServicePage
      seo={{
        title: "Google Ads Management for Local Businesses | AEB Media",
        description: "Show up the moment someone searches for what you offer. We build, manage, and optimize Google Ad campaigns that turn clicks into paying clients.",
      }}
      hero={{
        icon: Icons.google,
        badge: "GOOGLE ADS",
        title: <>Show up when<br/><span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>they're searching for you</span></>,
        subtitle: "When someone Googles exactly what you offer, you should be the first thing they see. We build and manage campaigns that turn search intent into booked clients.",
      }}
      problems={{
        heading: "Why most local businesses waste money on Google Ads",
        items: [
          { icon: Icons.dollarOff, title: "Burning budget with no return", desc: "You've tried Google Ads before — set up a campaign, let it run, watched your budget disappear. Without proper targeting and optimization, that's just gambling with extra steps." },
          { icon: Icons.target, title: "Targeting the wrong keywords", desc: "Bidding on broad terms like 'plumber' or 'restaurant near me' burns cash fast. You need hyper-specific, high-intent keywords that attract buyers, not browsers." },
          { icon: Icons.barChart, title: "No tracking or measurement", desc: "If you don't know which ad, keyword, or landing page generated a call, you can't optimize anything. Most local businesses are flying completely blind." },
          { icon: Icons.refresh, title: "Set it and forget it", desc: "Google Ads isn't a one-time setup. Campaigns need constant monitoring, A/B testing, bid adjustments, and negative keyword management to stay profitable." },
        ],
      }}
      benefits={{
        heading: "What your Google Ads campaign includes",
        items: [
          { title: "Keyword Research & Strategy", desc: "We identify the exact high-intent search terms your ideal clients use when they're ready to buy — not just browse. Every dollar goes toward keywords that convert." },
          { title: "Campaign Build & Structure", desc: "We set up your campaigns with proper ad groups, match types, and targeting so your budget reaches the right people at the right moment." },
          { title: "Ad Copywriting", desc: "We write compelling ad copy with strong headlines, clear value propositions, and calls to action that make people click your ad instead of your competitor's." },
          { title: "Landing Page Optimization", desc: "We make sure the page people land on after clicking is designed to convert — fast loading, clear offer, strong call to action, mobile-friendly." },
          { title: "Conversion Tracking", desc: "We set up tracking for calls, form submissions, and bookings so every lead is attributed. You'll know exactly what your cost per client is." },
          { title: "Ongoing Optimization", desc: "We monitor performance daily, adjust bids, add negative keywords, test new ad copy, and continuously improve your return on ad spend." },
        ],
      }}
      process={[
        { title: "Audit & Research", desc: "We audit your current online presence, research your competition, and identify the highest-value keywords for your business. If you've run ads before, we analyze what went wrong." },
        { title: "Campaign Setup", desc: "We build your campaigns from scratch — proper structure, tight keyword groups, compelling ads, and conversion tracking all set up correctly from day one." },
        { title: "Launch & Monitor", desc: "We launch your campaigns and monitor them closely during the first 2-4 weeks, making real-time adjustments as data comes in to maximize your budget." },
        { title: "Optimize & Scale", desc: "Once we know what's working, we double down. We cut what isn't converting, scale what is, and continuously improve your cost per lead." },
      ]}
      otherServices={otherServices}
    />
  );
}
