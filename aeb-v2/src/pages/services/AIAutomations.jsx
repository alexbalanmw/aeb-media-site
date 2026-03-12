import ServicePage from "../../components/ServicePage";
import { Icons } from "../../components/Icons";

const otherServices = [
  { path: "/services/social-media", icon: Icons.film, label: "Social Media", tagline: "Content that builds your brand" },
  { path: "/services/google-ads", icon: Icons.google, label: "Google Ads", tagline: "Show up when they search" },
  { path: "/services/meta-ads", icon: Icons.meta, label: "Meta Ads", tagline: "Reach them in the feed" },
];

export default function AIAutomations() {
  return (
    <ServicePage
      seo={{
        title: "AI Automations for Local Businesses | AEB Media",
        description: "Automate lead capture, follow-ups, appointment booking, and client communication. Work smarter with custom AI-powered workflows built for your business.",
      }}
      hero={{
        icon: Icons.bot,
        badge: "AI AUTOMATIONS",
        title: <>Your business running<br/><span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>on autopilot</span></>,
        subtitle: "We build custom AI-powered workflows that capture leads, follow up instantly, book appointments, and handle client communication — so you never miss an opportunity again.",
      }}
      problems={{
        heading: "What happens when leads fall through the cracks",
        items: [
          { icon: Icons.clock, title: "Slow response time kills deals", desc: "A lead who fills out your form or sends a DM expects a response within minutes. If you get back to them in 3 hours, they've already called your competitor." },
          { icon: Icons.messageCircle, title: "You forget to follow up", desc: "You're busy running your business. That lead from Tuesday? Forgot to call them back. That inquiry from Instagram? Lost in your DMs. It happens constantly." },
          { icon: Icons.settings, title: "Manual booking is a mess", desc: "Back-and-forth texts trying to find a time that works, missed calls, double bookings — all of this wastes your time and frustrates potential clients." },
          { icon: Icons.trendingDown, title: "No system for repeat business", desc: "Your past clients already trust you. But without an automated system to stay in touch and re-engage them, you're constantly chasing new leads instead of activating existing ones." },
        ],
      }}
      benefits={{
        heading: "Automations that actually save you time and money",
        items: [
          { title: "Instant Lead Response", desc: "When someone fills out a form, sends a DM, or inquires through your website, they get an instant, personalized response — even at 2 AM. No lead sits waiting." },
          { title: "Automated Follow-Up Sequences", desc: "We build multi-step follow-up flows via text and email that nurture leads who didn't book on the first touch. Consistent, professional, and completely hands-off." },
          { title: "Smart Appointment Booking", desc: "Leads can book directly into your calendar without the back-and-forth. The system sends reminders, handles rescheduling, and reduces no-shows automatically." },
          { title: "AI-Powered Client Communication", desc: "Custom AI chatbots trained on your business that can answer common questions, qualify leads, and route hot prospects to you — freeing up hours of your day." },
          { title: "Review Collection on Autopilot", desc: "After every job or appointment, the system automatically asks happy clients for a Google review. More reviews means better local SEO and more trust." },
          { title: "CRM & Pipeline Management", desc: "Every lead, conversation, and follow-up lives in one place. You always know where every prospect is in your pipeline and what needs attention." },
        ],
      }}
      process={[
        { title: "Workflow Audit", desc: "We map out your current lead-to-client journey: where leads come from, how you respond, how you book, how you follow up. We find every gap and missed opportunity." },
        { title: "Custom System Design", desc: "We design automation flows tailored to your specific business — not a generic template. Every workflow is built around how your business actually operates." },
        { title: "Build & Integrate", desc: "We build the automations and integrate them with your existing tools — your calendar, your CRM, your social media, your website. Everything talks to everything." },
        { title: "Launch, Train & Refine", desc: "We launch the system, walk your team through how it works, and monitor it closely for the first few weeks. As real data comes in, we refine and improve the flows." },
      ]}
      otherServices={otherServices}
    />
  );
}
