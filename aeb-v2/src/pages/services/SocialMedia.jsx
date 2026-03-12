import ServicePage from "../../components/ServicePage";
import { Icons } from "../../components/Icons";

const otherServices = [
  { path: "/services/google-ads", icon: Icons.google, label: "Google Ads", tagline: "Show up when they search" },
  { path: "/services/meta-ads", icon: Icons.meta, label: "Meta Ads", tagline: "Reach them in the feed" },
  { path: "/services/ai-automations", icon: Icons.bot, label: "AI Automations", tagline: "Automate your follow-ups" },
];

export default function SocialMedia() {
  return (
    <ServicePage
      seo={{
        title: "Social Media Management for Local Businesses | AEB Media",
        description: "Done-for-you social media content — scripting, filming, editing, and posting. We turn local businesses into brands people recognize, trust, and buy from.",
      }}
      hero={{
        icon: Icons.film,
        badge: "SOCIAL MEDIA CONTENT",
        title: <>Scroll-stopping content<br/><span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>that builds your brand</span></>,
        subtitle: "We handle scripting, filming, editing, and posting — so your business shows up consistently in your clients' feed, without you lifting a finger.",
      }}
      problems={{
        heading: "Why most businesses fail at social media",
        items: [
          { icon: Icons.clock, title: "You're too busy to post consistently", desc: "Running a business is already a full-time job. Social media falls to the bottom of the list every single week — and your audience notices the silence." },
          { icon: Icons.eye, title: "Your content doesn't get views", desc: "Posting random photos of your work isn't a strategy. Without proper hooks, scripting, and editing, your content gets buried by the algorithm." },
          { icon: Icons.users, title: "You don't know what to post", desc: "Staring at a blank screen wondering what your audience wants to see is exhausting. Without a content strategy, you're just guessing." },
          { icon: Icons.trendingDown, title: "Followers don't convert to clients", desc: "Having 5,000 followers means nothing if none of them book. Content needs to be strategically designed to drive action, not just likes." },
        ],
      }}
      benefits={{
        heading: "Everything included, nothing to worry about",
        items: [
          { title: "Professional Scripting", desc: "We write hooks, stories, and calls-to-action that are proven to stop the scroll and get people to watch until the end." },
          { title: "On-Site Filming", desc: "Our team comes to your location and captures high-quality video of you, your team, and your process — the real, authentic content that builds trust." },
          { title: "Professional Editing", desc: "We edit every reel with trending audio, dynamic cuts, captions, and motion graphics that make your content feel premium." },
          { title: "Multi-Platform Posting", desc: "We post and optimize for Instagram, TikTok, Facebook, and LinkedIn — maximizing your reach across every platform that matters." },
          { title: "Content Strategy & Calendar", desc: "No more guessing. We plan your content weeks in advance so every post serves a purpose and builds toward your business goals." },
          { title: "Weekly Performance Reports", desc: "We track views, engagement, follower growth, and inquiries so you always know exactly what's working and what your content is generating." },
        ],
      }}
      process={[
        { title: "Discovery Call", desc: "We learn about your business, your ideal clients, your voice, and your goals. This call tells us everything we need to build a content strategy that actually works for you." },
        { title: "Content Strategy", desc: "We create a custom content plan with topics, hooks, and posting schedules tailored to your industry and audience. You approve it before we start." },
        { title: "Film Day", desc: "We come to you and shoot enough content for the entire month in one session. It's efficient, it's fun, and it takes about 2-3 hours of your time." },
        { title: "Edit, Post, Grow", desc: "We edit everything to a premium standard, write captions, schedule posts, and handle publishing. You review everything before it goes live. Then we analyze results and optimize." },
      ]}
      otherServices={otherServices}
    />
  );
}
