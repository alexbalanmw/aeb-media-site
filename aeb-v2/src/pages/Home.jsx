import { useState } from "react";
import { Link } from "react-router-dom";
import { FadeIn, CountUp } from "../components/Animations";
import { Icons } from "../components/Icons";
import PageHead from "../components/PageHead";

export default function Home() {
  const [activeProcess, setActiveProcess] = useState(0);

  const processSteps = [
    { num: "01", title: "Discovery Call", desc: "We hop on a free 30-minute call. You tell us about your business, your goals, and where you're stuck. We listen, ask smart questions, and figure out exactly what you need — no cookie-cutter packages." },
    { num: "02", title: "Custom Strategy", desc: "We build a tailored plan around your business — whether that's social media content, Google Ads, Meta campaigns, AI automations, or a combination. You only pay for what actually moves the needle." },
    { num: "03", title: "We Execute", desc: "Our team handles everything: scripting, filming, editing, posting, ad setup, automation flows. You stay focused on your business. We send weekly updates so you always know what's happening." },
    { num: "04", title: "Scale & Optimize", desc: "We track every metric that matters. What's working gets amplified. What's not gets cut. Your investment keeps getting smarter over time." },
  ];

  return (
    <>
      <PageHead title="AEB Media | Social Media & Ads Agency for Local Businesses" description="We build custom growth systems for local businesses — social media, Google Ads, Meta campaigns, and AI automations. Over 127M+ views generated." />

      <section id="hero" style={{ minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "140px 24px 100px", overflow: "hidden" }}>
        <div className="hero-glow" />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 960 }}>
          <FadeIn delay={0.1}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 20px 8px 10px", marginBottom: 40, borderRadius: 100, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px rgba(34,197,94,0.6)" }}/>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)", letterSpacing: "1.5px", fontWeight: 500 }}>ACCEPTING NEW CLIENTS</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(38px, 7.5vw, 80px)", fontWeight: 800, lineHeight: 1.02, color: "white", letterSpacing: "-3px", marginBottom: 28 }}>
              Your competitors{" "}
              <span style={{ background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #c084fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>are getting seen.</span>
              <br/>Are you?
            </h1>
          </FadeIn>
          <FadeIn delay={0.45}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: 540, margin: "0 auto 52px", fontWeight: 400 }}>
              We build custom growth systems for local businesses — social media, Google Ads, Meta campaigns, and AI automations — tailored to exactly what your business needs.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#contact" className="cta-primary" style={{ fontSize: 16, padding: "20px 44px" }}>Get Your Free Audit {Icons.arrowRight}</a>
              <a href="#results" className="cta-ghost" style={{ fontSize: 16, padding: "20px 44px" }}>See Our Results</a>
            </div>
          </FadeIn>
        </div>
        <div style={{ position: "absolute", bottom: 44, textAlign: "center", animation: "scroll-hint 2.5s ease infinite" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "2px", marginBottom: 8 }}>SCROLL</div>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"><rect x="1" y="1" width="14" height="22" rx="7"/><line x1="8" y1="6" x2="8" y2="10"/></svg>
        </div>
      </section>

      <div style={{ padding: "32px 0", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(90deg, #050507, transparent)", zIndex: 2 }}/>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(-90deg, #050507, transparent)", zIndex: 2 }}/>
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (<div key={i} style={{ display: "flex", gap: 48, flexShrink: 0 }}>
            {["Social Media Management","Google Ads","Facebook & Instagram Ads","AI Automations","Content Production","Brand Strategy","Sales Funnels","Video Editing"].map((item, j) => (
              <span key={j} style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.15)", whiteSpace: "nowrap", letterSpacing: "0.5px", display: "flex", alignItems: "center", gap: 16 }}>
                {item}<span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(99,102,241,0.4)", flexShrink: 0 }}/>
              </span>))}
          </div>))}
        </div>
      </div>

      <section id="problem" style={{ padding: "140px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#818cf8", letterSpacing: "4px", textAlign: "center", marginBottom: 20, textTransform: "uppercase" }}>THE PROBLEM</p></FadeIn>
        <FadeIn delay={0.1}><h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 700, color: "white", textAlign: "center", letterSpacing: "-1.5px", marginBottom: 20, lineHeight: 1.1 }}>These are keeping your<br/>business invisible</h2></FadeIn>
        <FadeIn delay={0.15}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.6)", textAlign: "center", maxWidth: 480, margin: "0 auto 72px", lineHeight: 1.7 }}>If any of these sound familiar, you're leaving money on the table every single day.</p></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 16 }}>
          {[
            { icon: Icons.eye, title: "Zero Online Visibility", desc: "Potential clients scroll right past you. If you're not in their feed, you don't exist to them." },
            { icon: Icons.trendingDown, title: "Leads Are Drying Up", desc: "Word of mouth got you here — but it won't scale. Your pipeline is unpredictable." },
            { icon: Icons.users, title: "Competitors Are Outpacing You", desc: "The business down the street is posting daily, running ads, and getting your calls." },
            { icon: Icons.clock, title: "No Time to Do It Yourself", desc: "You're running a business. Who has time to plan, film, edit, and post — consistently?" },
            { icon: Icons.dollarOff, title: "Wasted Ad Spend", desc: "You've boosted posts without a strategy. Money went out. Nothing came back." },
            { icon: Icons.shieldOff, title: "No Trust or Proof Online", desc: "When someone Googles you, there's nothing. No proof, no content, no reason to choose you." },
          ].map((p, i) => (
            <FadeIn key={i} delay={i * 0.08}><div className="glass-card" style={{ padding: "40px 36px", height: "100%" }}>
              <div style={{ color: "#818cf8", marginBottom: 20, opacity: 0.8 }}>{p.icon}</div>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 18, fontWeight: 600, color: "white", marginBottom: 14 }}>{p.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>{p.desc}</p>
            </div></FadeIn>))}
        </div>
      </section>

      <div className="divider" />

      <section id="services" style={{ padding: "140px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#818cf8", letterSpacing: "4px", textAlign: "center", marginBottom: 20, textTransform: "uppercase" }}>WHAT WE DO</p></FadeIn>
        <FadeIn delay={0.1}><h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 700, color: "white", textAlign: "center", letterSpacing: "-1.5px", marginBottom: 20, lineHeight: 1.1 }}>Built around what your<br/>business actually needs</h2></FadeIn>
        <FadeIn delay={0.15}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.6)", textAlign: "center", maxWidth: 520, margin: "0 auto 80px", lineHeight: 1.7 }}>No cookie-cutter packages. We learn your business first, then build a custom plan using only what moves the needle.</p></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 20 }}>
          {[
            { icon: Icons.film, title: "Social Media Content", path: "/services/social-media", desc: "Scroll-stopping reels, stories, and posts — scripted, filmed, edited, and posted for you.", tags: ["Instagram","TikTok","Facebook","LinkedIn"] },
            { icon: Icons.google, title: "Google Ads", path: "/services/google-ads", desc: "Show up the moment someone searches for what you offer. Clicks become paying clients.", tags: ["Search Ads","Local Campaigns","Retargeting"] },
            { icon: Icons.meta, title: "Meta Ads", path: "/services/meta-ads", desc: "Targeted Facebook and Instagram campaigns that reach your ideal clients. Real strategy.", tags: ["Facebook Ads","Instagram Ads","Lookalikes"] },
            { icon: Icons.bot, title: "AI Automations", path: "/services/ai-automations", desc: "Automate follow-ups, lead capture, appointment booking, and client communication.", tags: ["Lead Capture","Auto Follow-Up","Booking"] },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}><Link to={s.path} className="service-card" style={{ height: "100%", display: "block" }}>
              <div style={{ color: "#818cf8", marginBottom: 24, opacity: 0.7 }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 600, color: "white", marginBottom: 16 }}>{s.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 24 }}>{s.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {s.tags.map((t, j) => (<span key={j} style={{ padding: "6px 14px", borderRadius: 100, background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.12)", fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(129,140,248,0.8)", fontWeight: 500 }}>{t}</span>))}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#818cf8", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>Learn more {Icons.arrowRight}</div>
            </Link></FadeIn>))}
        </div>
      </section>

      <div className="divider" />

      <section id="results" style={{ padding: "160px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.06), transparent)", pointerEvents: "none" }}/>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <FadeIn><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#818cf8", letterSpacing: "4px", marginBottom: 20, textTransform: "uppercase" }}>THE PROOF</p></FadeIn>
          <FadeIn delay={0.1}><h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 700, color: "white", letterSpacing: "-1.5px", marginBottom: 20, lineHeight: 1.1 }}>Results that speak for themselves</h2></FadeIn>
          <FadeIn delay={0.15}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 480, margin: "0 auto 80px", lineHeight: 1.7 }}>Collectively across all client accounts, our content and campaigns have generated:</p></FadeIn>
          <FadeIn delay={0.2}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(64px, 12vw, 140px)", fontWeight: 800, letterSpacing: "-5px", lineHeight: 1, background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 30%, #c084fc 60%, #818cf8 100%)", backgroundSize: "200% 200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                <CountUp end={127} suffix="M+" duration={3000} />
              </div>
              <p style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 500, color: "rgba(255,255,255,0.5)", letterSpacing: "2px", textTransform: "uppercase", marginTop: 8 }}>Total Views</p>
            </div>
          </FadeIn>
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(32px, 6vw, 80px)", flexWrap: "wrap", marginTop: 64 }}>
            {[{ end: 527, suffix: "K+", label: "Interactions" },{ end: 113, suffix: "K+", label: "Followers Generated" },{ end: 1840, suffix: "+", label: "Client Inquiries Driven" }].map((st, i) => (
              <FadeIn key={i} delay={0.3 + i * 0.12}><div style={{ textAlign: "center", minWidth: 140 }}>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, letterSpacing: "-2px", color: "white" }}><CountUp end={st.end} suffix={st.suffix} duration={2800} /></div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", marginTop: 8, fontWeight: 500 }}>{st.label}</p>
              </div></FadeIn>))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section id="process" style={{ padding: "140px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#818cf8", letterSpacing: "4px", textAlign: "center", marginBottom: 20, textTransform: "uppercase" }}>HOW IT WORKS</p></FadeIn>
        <FadeIn delay={0.1}><h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 700, color: "white", textAlign: "center", letterSpacing: "-1.5px", marginBottom: 20, lineHeight: 1.1 }}>Simple. Hands-off. Effective.</h2></FadeIn>
        <FadeIn delay={0.15}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.6)", textAlign: "center", maxWidth: 460, margin: "0 auto 80px", lineHeight: 1.7 }}>No packages. No one-size-fits-all. Here's how we work together:</p></FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 700, margin: "0 auto" }}>
          {processSteps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}><div className={`process-step ${activeProcess === i ? "active" : ""}`} onClick={() => setActiveProcess(i)}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
                <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 32, fontWeight: 800, background: activeProcess === i ? "linear-gradient(135deg, #818cf8, #c084fc)" : "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1, flexShrink: 0, transition: "all 0.4s" }}>{step.num}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 600, color: "white", marginBottom: activeProcess === i ? 12 : 0, transition: "margin 0.4s" }}>{step.title}</h3>
                  <div style={{ maxHeight: activeProcess === i ? 200 : 0, opacity: activeProcess === i ? 1 : 0, overflow: "hidden", transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            </div></FadeIn>))}
        </div>
      </section>

      <div className="divider" />

      <section style={{ padding: "140px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(239,68,68,0.04), transparent)", pointerEvents: "none" }}/>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 680, margin: "0 auto" }}>
          <FadeIn><h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, color: "white", letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 28 }}>Every day you wait, your<br/>competitors get further ahead</h2></FadeIn>
          <FadeIn delay={0.15}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 20 }}>In 2 years, most buyers will check social media before making a call. No presence means no consideration. It already happened in beauty — wellness, trades, clinics, fitness, and real estate are next.</p></FadeIn>
          <FadeIn delay={0.25}><p style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: 48 }}>The question isn't <em>if</em> you need to show up online.<br/>It's how much ground you've already lost.</p></FadeIn>
          <FadeIn delay={0.35}><a href="#contact" className="cta-primary" style={{ fontSize: 16, padding: "20px 44px" }}>Stop Falling Behind {Icons.arrowRight}</a></FadeIn>
        </div>
      </section>

      <div className="divider" />

      <section id="contact" style={{ padding: "180px 24px 140px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 90%, rgba(99,102,241,0.1), transparent)", pointerEvents: "none" }}/>
        <div style={{ position: "relative", zIndex: 2 }}>
          <FadeIn><h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(34px, 6vw, 68px)", fontWeight: 800, color: "white", letterSpacing: "-3px", lineHeight: 1.05, marginBottom: 28 }}>Let's build something{" "}<span style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>custom for you.</span></h2></FadeIn>
          <FadeIn delay={0.2}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto 56px", lineHeight: 1.75 }}>Book a free 30-minute call. We'll audit your current presence, learn about your goals, and show you exactly what's possible — no pressure, no obligations.</p></FadeIn>
          <FadeIn delay={0.4}><a href="https://calendly.com/alexb-aeb/30min" className="cta-primary" style={{ fontSize: 18, padding: "24px 52px" }}>Book Your Free Call {Icons.arrowRight}</a></FadeIn>
          <FadeIn delay={0.55}><div style={{ marginTop: 56, display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <a href="mailto:info@aeb.media" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: 8 }}>{Icons.mail} info@aeb.media</a>
            <a href="tel:2242211041" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: 8 }}>{Icons.phone} (224) 221-1041</a>
          </div></FadeIn>
        </div>
      </section>
    </>
  );
}
