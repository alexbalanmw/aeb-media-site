import { useState, useEffect, useRef } from "react";

/* ── Intersection Observer Hook ── */
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, isVisible];
};

/* ── Animated Counter ── */
const CountUp = ({ end, suffix = "", prefix = "", duration = 2500 }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useInView(0.3);
  const hasRun = useRef(false);
  useEffect(() => {
    if (!isVisible || hasRun.current) return;
    hasRun.current = true;
    const steps = 80;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      if (step >= steps) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(end * ease));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

/* ── Scroll-Triggered Fade ── */
const FadeIn = ({ children, delay = 0, direction = "up", className = "", style = {} }) => {
  const [ref, isVisible] = useInView(0.08);
  const transforms = {
    up: "translateY(50px)", down: "translateY(-50px)",
    left: "translateX(50px)", right: "translateX(-50px)",
    none: "translateY(0px) scale(0.97)"
  };
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0) scale(1)" : transforms[direction],
      transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    }}>
      {children}
    </div>
  );
};

/* ── SVG Icons ── */
const Icons = {
  eye: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  trendingDown: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>
    </svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  clock: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  dollarOff: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><line x1="1" y1="1" x2="23" y2="23" stroke="rgba(255,100,100,0.5)" strokeWidth="1"/>
    </svg>
  ),
  shieldOff: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="8" y1="11" x2="16" y2="11" strokeWidth="2"/>
    </svg>
  ),
  film: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  ),
  google: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/>
    </svg>
  ),
  meta: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  bot: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="11"/><circle cx="8" cy="16" r="1" fill="currentColor"/><circle cx="16" cy="16" r="1" fill="currentColor"/>
    </svg>
  ),
  arrowRight: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  phone: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  mail: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
};


/* ═══════════════════════════════════════════
   MAIN SITE COMPONENT
═══════════════════════════════════════════ */
export default function App() {
  const [navSolid, setNavSolid] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeProcess, setActiveProcess] = useState(0);

  useEffect(() => {
    const handleScroll = () => setNavSolid(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  const NAV = ["Problem", "Services", "Results", "Process", "Contact"];

  const processSteps = [
    { num: "01", title: "Discovery Call", desc: "We hop on a free 30-minute call. You tell us about your business, your goals, and where you're stuck. We listen, ask smart questions, and figure out exactly what you need — no cookie-cutter packages." },
    { num: "02", title: "Custom Strategy", desc: "We build a tailored plan around your business — whether that's social media content, Google Ads, Meta campaigns, AI automations, or a combination. You only pay for what actually moves the needle." },
    { num: "03", title: "We Execute", desc: "Our team handles everything: scripting, filming, editing, posting, ad setup, automation flows. You stay focused on your business. We send weekly updates so you always know what's happening." },
    { num: "04", title: "Scale & Optimize", desc: "We track every metric that matters. What's working gets amplified. What's not gets cut. Your investment keeps getting smarter over time." },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        body { background: #050507; overflow-x: hidden; font-family: 'DM Sans', sans-serif; color: white; }
        a { text-decoration: none; color: inherit; }
        img { max-width: 100%; display: block; }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #050507; }
        ::-webkit-scrollbar-thumb { background: #1a1a2e; border-radius: 3px; }

        .hero-glow {
          position: absolute; top: -200px; left: 50%; transform: translateX(-50%);
          width: 1000px; height: 600px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%);
          pointer-events: none;
        }

        .grain {
          position: fixed; inset: 0; z-index: 9999; pointer-events: none; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .divider {
          height: 1px; max-width: 1200px; margin: 0 auto;
          background: linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.2) 30%, rgba(139,92,246,0.2) 70%, transparent 100%);
        }

        .glass-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 24px;
          backdrop-filter: blur(20px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-card:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(99,102,241,0.2);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(99,102,241,0.08);
        }

        .service-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 28px;
          padding: 48px 40px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative; overflow: hidden;
        }
        .service-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent);
          opacity: 0; transition: opacity 0.5s;
        }
        .service-card:hover { border-color: rgba(99,102,241,0.2); transform: translateY(-4px); }
        .service-card:hover::before { opacity: 1; }

        .cta-primary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 18px 42px;
          background: linear-gradient(135deg, #6366f1 0%, #7c3aed 50%, #8b5cf6 100%);
          color: white; border: none; border-radius: 100px;
          font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 600;
          cursor: pointer; letter-spacing: -0.2px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 40px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .cta-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 0 80px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
        }

        .cta-ghost {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 18px 42px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.8); border-radius: 100px;
          font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 500;
          cursor: pointer; transition: all 0.3s ease;
        }
        .cta-ghost:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.25);
          transform: translateY(-2px);
        }

        .process-step {
          padding: 28px 32px; border-radius: 16px; cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.4s ease;
        }
        .process-step:hover { background: rgba(255,255,255,0.02); }
        .process-step.active {
          background: rgba(99,102,241,0.06);
          border-color: rgba(99,102,241,0.15);
        }

        .ticker-track {
          display: flex; gap: 48;
          animation: ticker-scroll 25s linear infinite;
          will-change: transform;
        }
        @keyframes ticker-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-hint { 0%,100% { transform: translateY(0); opacity: 0.3; } 50% { transform: translateY(10px); opacity: 0.8; } }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .service-card { padding: 36px 28px; }
          .process-step { padding: 20px 20px; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}</style>

      <div className="grain" />

      {/* ── Mobile Menu ── */}
      {mobileMenu && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(5,5,7,0.98)", backdropFilter: "blur(30px)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 36,
        }}>
          <button onClick={() => setMobileMenu(false)} style={{
            position: "absolute", top: 24, right: 28, background: "none", border: "none",
            color: "white", fontSize: 28, cursor: "pointer", fontWeight: 300,
          }}>✕</button>
          {NAV.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenu(false)}
              style={{
                fontFamily: "'Sora', sans-serif", fontSize: 28, fontWeight: 300,
                color: "rgba(255,255,255,0.7)", letterSpacing: "-0.5px",
              }}>{item}</a>
          ))}
          <a href="#contact" onClick={() => setMobileMenu(false)} className="cta-primary" style={{ marginTop: 16 }}>
            Book a Call
          </a>
        </div>
      )}


      {/* ═══════ NAVBAR ═══════ */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: navSolid ? "rgba(5,5,7,0.8)" : "transparent",
        backdropFilter: navSolid ? "blur(24px)" : "none",
        borderBottom: navSolid ? "1px solid rgba(255,255,255,0.04)" : "none",
        transition: "all 0.5s ease",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "18px 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <a href="#hero" style={{
            fontFamily: "'Sora', sans-serif", fontSize: 18, fontWeight: 700,
            letterSpacing: "-0.5px",
          }}>
            <span style={{ color: "#818cf8" }}>AEB</span> MEDIA
          </a>

          <div className="desktop-only" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {NAV.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                color: "rgba(255,255,255,0.45)", fontSize: 13, fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.3px",
                transition: "color 0.3s",
              }}>{item}</a>
            ))}
            <a href="#contact" className="cta-primary" style={{
              padding: "10px 26px", fontSize: 13, boxShadow: "none",
            }}>Book a Call</a>
          </div>

          <button className="mobile-only" onClick={() => setMobileMenu(true)} style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: 5, padding: 8,
          }}>
            <span style={{ width: 22, height: 1.5, background: "white", display: "block" }}/>
            <span style={{ width: 22, height: 1.5, background: "white", display: "block" }}/>
          </button>
        </div>
      </nav>


      {/* ═══════ HERO ═══════ */}
      <section id="hero" style={{
        minHeight: "100vh", position: "relative",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "140px 24px 100px", overflow: "hidden",
      }}>
        <div className="hero-glow" />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 960 }}>
          <FadeIn delay={0.1}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "8px 20px 8px 10px", marginBottom: 40,
              borderRadius: 100, border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%", background: "#22c55e",
                boxShadow: "0 0 8px rgba(34,197,94,0.6)",
              }}/>
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", fontWeight: 500,
              }}>
                ACCEPTING NEW CLIENTS
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <h1 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(38px, 7.5vw, 80px)",
              fontWeight: 800, lineHeight: 1.02, color: "white",
              letterSpacing: "-3px", marginBottom: 28,
            }}>
              Your competitors{" "}
              <span style={{
                background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #c084fc 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>are getting seen.</span>
              <br/>Are you?
            </h1>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "rgba(255,255,255,0.38)", lineHeight: 1.75,
              maxWidth: 540, margin: "0 auto 52px", fontWeight: 400,
            }}>
              We build custom growth systems for local businesses — social media,
              Google Ads, Meta campaigns, and AI automations — tailored to exactly
              what your business needs.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#contact" className="cta-primary" style={{ fontSize: 16, padding: "20px 44px" }}>
                Get Your Free Audit {Icons.arrowRight}
              </a>
              <a href="#results" className="cta-ghost" style={{ fontSize: 16, padding: "20px 44px" }}>
                See Our Results
              </a>
            </div>
          </FadeIn>
        </div>

        <div style={{
          position: "absolute", bottom: 44, textAlign: "center",
          animation: "scroll-hint 2.5s ease infinite",
        }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11,
            color: "rgba(255,255,255,0.2)", letterSpacing: "2px", marginBottom: 8,
          }}>SCROLL</div>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5">
            <rect x="1" y="1" width="14" height="22" rx="7"/>
            <line x1="8" y1="6" x2="8" y2="10"/>
          </svg>
        </div>
      </section>


      {/* ═══════ SOCIAL PROOF TICKER ═══════ */}
      <div style={{
        padding: "32px 0", borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        overflow: "hidden", position: "relative",
      }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 100,
          background: "linear-gradient(90deg, #050507, transparent)", zIndex: 2,
        }}/>
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 100,
          background: "linear-gradient(-90deg, #050507, transparent)", zIndex: 2,
        }}/>
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: "flex", gap: 48, flexShrink: 0 }}>
              {["Social Media Management", "Google Ads", "Facebook & Instagram Ads", "AI Automations", "Content Production", "Brand Strategy", "Sales Funnels", "Video Editing"].map((item, j) => (
                <span key={j} style={{
                  fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 500,
                  color: "rgba(255,255,255,0.15)", whiteSpace: "nowrap", letterSpacing: "0.5px",
                  display: "flex", alignItems: "center", gap: 16,
                }}>
                  {item}
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(99,102,241,0.4)", flexShrink: 0 }}/>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>


      {/* ═══════ PAIN POINTS ═══════ */}
      <section id="problem" style={{ padding: "140px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
            color: "#818cf8", letterSpacing: "4px", textAlign: "center",
            marginBottom: 20, textTransform: "uppercase",
          }}>THE PROBLEM</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 4.5vw, 52px)",
            fontWeight: 700, color: "white", textAlign: "center",
            letterSpacing: "-1.5px", marginBottom: 20, lineHeight: 1.1,
          }}>
            These are keeping your<br/>business invisible
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17,
            color: "rgba(255,255,255,0.35)", textAlign: "center",
            maxWidth: 480, margin: "0 auto 72px", lineHeight: 1.7,
          }}>
            If any of these sound familiar, you're leaving money on the table every single day.
          </p>
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: 16,
        }}>
          {[
            { icon: Icons.eye, title: "Zero Online Visibility", desc: "Potential clients scroll right past you. If you're not in their feed, you don't exist to them. Simple as that." },
            { icon: Icons.trendingDown, title: "Leads Are Drying Up", desc: "Word of mouth got you here — but it won't scale. Your pipeline is unpredictable and you're always one slow month away from stress." },
            { icon: Icons.users, title: "Competitors Are Outpacing You", desc: "The business down the street is posting daily, running ads, and getting the calls that should be going to you." },
            { icon: Icons.clock, title: "No Time to Do It Yourself", desc: "You're running a business. Who has time to plan content, film, edit, write captions, post, and manage ads — consistently?" },
            { icon: Icons.dollarOff, title: "Wasted Ad Spend", desc: "You've boosted posts or tried running ads without a strategy. Money went out. Nothing came back. That's not advertising — that's gambling." },
            { icon: Icons.shieldOff, title: "No Trust or Proof Online", desc: "When someone Googles your business, there's nothing compelling. No social proof, no content, no reason to pick you over the next option." },
          ].map((pain, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="glass-card" style={{ padding: "40px 36px", height: "100%" }}>
                <div style={{ color: "#818cf8", marginBottom: 20, opacity: 0.8 }}>{pain.icon}</div>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif", fontSize: 18, fontWeight: 600,
                  color: "white", marginBottom: 14, letterSpacing: "-0.3px",
                }}>{pain.title}</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                  color: "rgba(255,255,255,0.38)", lineHeight: 1.75,
                }}>{pain.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="divider" />


      {/* ═══════ SERVICES ═══════ */}
      <section id="services" style={{ padding: "140px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
            color: "#818cf8", letterSpacing: "4px", textAlign: "center",
            marginBottom: 20, textTransform: "uppercase",
          }}>WHAT WE DO</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 4.5vw, 52px)",
            fontWeight: 700, color: "white", textAlign: "center",
            letterSpacing: "-1.5px", marginBottom: 20, lineHeight: 1.1,
          }}>
            Built around what your<br/>business actually needs
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17,
            color: "rgba(255,255,255,0.35)", textAlign: "center",
            maxWidth: 520, margin: "0 auto 80px", lineHeight: 1.7,
          }}>
            No cookie-cutter packages. We learn your business first, then build
            a custom plan using only what moves the needle.
          </p>
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: 20,
        }}>
          {[
            {
              icon: Icons.film, title: "Social Media Content",
              desc: "Scroll-stopping reels, stories, and posts — scripted, filmed, edited, and posted for you. We turn your face into your brand's biggest asset.",
              tags: ["Instagram", "TikTok", "Facebook", "LinkedIn"],
            },
            {
              icon: Icons.google, title: "Google Ads",
              desc: "Show up the moment someone searches for exactly what you offer. We build, manage, and optimize campaigns that turn clicks into paying clients.",
              tags: ["Search Ads", "Local Campaigns", "Retargeting"],
            },
            {
              icon: Icons.meta, title: "Meta Ads",
              desc: "Targeted Facebook and Instagram ad campaigns that reach your ideal clients in their feed. Real strategy — not just boosted posts.",
              tags: ["Facebook Ads", "Instagram Ads", "Lookalike Audiences"],
            },
            {
              icon: Icons.bot, title: "AI Automations",
              desc: "Automate your follow-ups, lead capture, appointment booking, and client communication. Work smarter, not harder.",
              tags: ["Lead Capture", "Auto Follow-Up", "Booking Flows"],
            },
          ].map((service, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="service-card" style={{ height: "100%" }}>
                <div style={{ color: "#818cf8", marginBottom: 24, opacity: 0.7 }}>{service.icon}</div>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 600,
                  color: "white", marginBottom: 16, letterSpacing: "-0.5px",
                }}>{service.title}</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                  color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: 24,
                }}>{service.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {service.tags.map((tag, j) => (
                    <span key={j} style={{
                      padding: "6px 14px", borderRadius: 100,
                      background: "rgba(99,102,241,0.08)",
                      border: "1px solid rgba(99,102,241,0.12)",
                      fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                      color: "rgba(129,140,248,0.8)", fontWeight: 500,
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="divider" />


      {/* ═══════ RESULTS ═══════ */}
      <section id="results" style={{
        padding: "160px 24px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.06), transparent)",
          pointerEvents: "none",
        }}/>

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
              color: "#818cf8", letterSpacing: "4px",
              marginBottom: 20, textTransform: "uppercase",
            }}>THE PROOF</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{
              fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 4.5vw, 52px)",
              fontWeight: 700, color: "white",
              letterSpacing: "-1.5px", marginBottom: 20, lineHeight: 1.1,
            }}>
              Results that speak for themselves
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 17,
              color: "rgba(255,255,255,0.35)",
              maxWidth: 480, margin: "0 auto 80px", lineHeight: 1.7,
            }}>
              Collectively across all client accounts, our content and campaigns have generated:
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(64px, 12vw, 140px)",
                fontWeight: 800, letterSpacing: "-5px", lineHeight: 1,
                background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 30%, #c084fc 60%, #818cf8 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                <CountUp end={127} suffix="M+" duration={3000} />
              </div>
              <p style={{
                fontFamily: "'Sora', sans-serif", fontSize: "clamp(16px, 2vw, 22px)",
                fontWeight: 500, color: "rgba(255,255,255,0.5)",
                letterSpacing: "2px", textTransform: "uppercase", marginTop: 8,
              }}>
                Total Views
              </p>
            </div>
          </FadeIn>

          <div style={{
            display: "flex", justifyContent: "center", gap: "clamp(32px, 6vw, 80px)",
            flexWrap: "wrap", marginTop: 64,
          }}>
            {[
              { end: 527, suffix: "K+", label: "Interactions" },
              { end: 113, suffix: "K+", label: "Followers Generated" },
              { end: 1840, suffix: "+", label: "Client Inquiries Driven" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.3 + i * 0.12}>
                <div style={{ textAlign: "center", minWidth: 140 }}>
                  <div style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "clamp(32px, 5vw, 52px)",
                    fontWeight: 700, letterSpacing: "-2px", color: "white",
                  }}>
                    <CountUp end={stat.end} suffix={stat.suffix} duration={2800} />
                  </div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                    color: "rgba(255,255,255,0.3)", marginTop: 8, fontWeight: 500,
                  }}>{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />


      {/* ═══════ PROCESS ═══════ */}
      <section id="process" style={{ padding: "140px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
            color: "#818cf8", letterSpacing: "4px", textAlign: "center",
            marginBottom: 20, textTransform: "uppercase",
          }}>HOW IT WORKS</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 4.5vw, 52px)",
            fontWeight: 700, color: "white", textAlign: "center",
            letterSpacing: "-1.5px", marginBottom: 20, lineHeight: 1.1,
          }}>
            Simple. Hands-off. Effective.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17,
            color: "rgba(255,255,255,0.35)", textAlign: "center",
            maxWidth: 460, margin: "0 auto 80px", lineHeight: 1.7,
          }}>
            No packages. No one-size-fits-all. Here's how we work together:
          </p>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 700, margin: "0 auto" }}>
          {processSteps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className={`process-step ${activeProcess === i ? "active" : ""}`}
                onClick={() => setActiveProcess(i)}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
                  <span style={{
                    fontFamily: "'Sora', sans-serif", fontSize: 32, fontWeight: 800,
                    background: activeProcess === i
                      ? "linear-gradient(135deg, #818cf8, #c084fc)"
                      : "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    lineHeight: 1, flexShrink: 0, transition: "all 0.4s",
                  }}>{step.num}</span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 600,
                      color: "white", marginBottom: activeProcess === i ? 12 : 0,
                      letterSpacing: "-0.3px", transition: "margin 0.4s",
                    }}>{step.title}</h3>
                    <div style={{
                      maxHeight: activeProcess === i ? 200 : 0,
                      opacity: activeProcess === i ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}>
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                        color: "rgba(255,255,255,0.45)", lineHeight: 1.75,
                      }}>{step.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="divider" />


      {/* ═══════ URGENCY ═══════ */}
      <section style={{
        padding: "140px 24px", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(239,68,68,0.04), transparent)",
          pointerEvents: "none",
        }}/>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 680, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{
              fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 700, color: "white",
              letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 28,
            }}>
              Every day you wait, your<br/>competitors get further ahead
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 17,
              color: "rgba(255,255,255,0.4)", lineHeight: 1.8, marginBottom: 20,
            }}>
              In 2 years, most buyers will check social media before making a call.
              No presence means no consideration. It already happened in beauty —
              wellness, trades, clinics, fitness, and real estate are next.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p style={{
              fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 600,
              color: "rgba(255,255,255,0.7)", marginBottom: 48,
            }}>
              The question isn't <em>if</em> you need to show up online.<br/>It's how much ground you've already lost.
            </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <a href="#contact" className="cta-primary" style={{ fontSize: 16, padding: "20px 44px" }}>
              Stop Falling Behind {Icons.arrowRight}
            </a>
          </FadeIn>
        </div>
      </section>

      <div className="divider" />


      {/* ═══════ FINAL CTA ═══════ */}
      <section id="contact" style={{
        padding: "180px 24px 140px", textAlign: "center", position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 90%, rgba(99,102,241,0.1), transparent)",
          pointerEvents: "none",
        }}/>

        <div style={{ position: "relative", zIndex: 2 }}>
          <FadeIn>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(34px, 6vw, 68px)",
              fontWeight: 800, color: "white",
              letterSpacing: "-3px", lineHeight: 1.05, marginBottom: 28,
            }}>
              Let's build something{" "}
              <span style={{
                background: "linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>custom for you.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 18,
              color: "rgba(255,255,255,0.4)", marginBottom: 56,
              maxWidth: 520, margin: "0 auto 56px", lineHeight: 1.75,
            }}>
              Book a free 30-minute call. We'll audit your current presence,
              learn about your goals, and show you exactly what's possible — no
              pressure, no obligations.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <a href="https://calendly.com/alexb-aeb/30min" className="cta-primary"
              style={{ fontSize: 18, padding: "24px 52px" }}>
              Book Your Free Call {Icons.arrowRight}
            </a>
          </FadeIn>
          <FadeIn delay={0.55}>
            <div style={{
              marginTop: 56, display: "flex", gap: 40,
              justifyContent: "center", flexWrap: "wrap", alignItems: "center",
            }}>
              <a href="mailto:info@aeb.media" style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                color: "rgba(255,255,255,0.3)",
                display: "flex", alignItems: "center", gap: 8,
              }}>{Icons.mail} info@aeb.media</a>
              <a href="tel:2242211041" style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                color: "rgba(255,255,255,0.3)",
                display: "flex", alignItems: "center", gap: 8,
              }}>{Icons.phone} (224) 221-1041</a>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ═══════ FOOTER ═══════ */}
      <footer style={{
        padding: "36px 32px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        maxWidth: 1280, margin: "0 auto",
        display: "flex", flexWrap: "wrap", justifyContent: "space-between",
        alignItems: "center", gap: 16,
      }}>
        <span style={{
          fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 600,
          color: "rgba(255,255,255,0.3)",
        }}>
          <span style={{ color: "rgba(129,140,248,0.5)" }}>AEB</span> MEDIA
        </span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 12,
          color: "rgba(255,255,255,0.15)",
        }}>
          © 2026 AEB Media. All rights reserved.
        </span>
      </footer>
    </>
  );
}
