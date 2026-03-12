import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [navSolid, setNavSolid] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setNavSolid(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
    setServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  const services = [
    { label: "Social Media Content", path: "/services/social-media" },
    { label: "Google Ads", path: "/services/google-ads" },
    { label: "Meta Ads", path: "/services/meta-ads" },
    { label: "AI Automations", path: "/services/ai-automations" },
  ];

  const isHome = location.pathname === "/";
  const contactHref = isHome ? "#contact" : "/#contact";

  return (
    <>
      {/* Mobile Menu */}
      {mobileMenu && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(5,5,7,0.98)", backdropFilter: "blur(30px)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 28,
        }}>
          <button onClick={() => setMobileMenu(false)} aria-label="Close menu" style={{
            position: "absolute", top: 24, right: 28, background: "none", border: "none",
            color: "white", fontSize: 28, cursor: "pointer", fontWeight: 300,
          }}>✕</button>
          <Link to="/" style={{ fontFamily: "'Sora', sans-serif", fontSize: 24, fontWeight: 300, color: "rgba(255,255,255,0.7)" }}>Home</Link>
          {services.map(s => (
            <Link key={s.path} to={s.path} style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 300, color: "rgba(255,255,255,0.5)" }}>{s.label}</Link>
          ))}
          <Link to="/blog" style={{ fontFamily: "'Sora', sans-serif", fontSize: 24, fontWeight: 300, color: "rgba(255,255,255,0.7)" }}>Blog</Link>
          <a href={contactHref} className="cta-primary" style={{ marginTop: 16 }}>Book a Call</a>
        </div>
      )}

      {/* Navbar */}
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
          <Link to="/" style={{
            fontFamily: "'Sora', sans-serif", fontSize: 18, fontWeight: 700, letterSpacing: "-0.5px",
          }}>
            <span style={{ color: "#818cf8" }}>AEB</span> MEDIA
          </Link>

          <div className="desktop-only" style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>Home</Link>

            {/* Services dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span style={{
                color: "rgba(255,255,255,0.65)", fontSize: 13, fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif", cursor: "pointer",
                display: "flex", alignItems: "center", gap: 4,
              }}>
                Services
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ opacity: 0.5, transition: "transform 0.3s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0)" }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </span>
              {servicesOpen && (
                <div style={{
                  position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)",
                  paddingTop: 12, minWidth: 240,
                }}>
                  <div style={{
                    background: "rgba(15,15,20,0.95)", backdropFilter: "blur(24px)",
                    border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16,
                    padding: "8px", display: "flex", flexDirection: "column",
                  }}>
                    {services.map(s => (
                      <Link key={s.path} to={s.path} style={{
                        padding: "12px 20px", borderRadius: 10, fontSize: 14,
                        fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)",
                        transition: "all 0.2s",
                      }} onMouseEnter={e => { e.target.style.background = "rgba(99,102,241,0.1)"; e.target.style.color = "white"; }}
                         onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "rgba(255,255,255,0.6)"; }}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {isHome && <a href="#results" style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>Results</a>}
            {isHome && <a href="#process" style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>Process</a>}
            <Link to="/blog" style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>Blog</Link>

            <a href={contactHref} className="cta-primary" style={{ padding: "10px 26px", fontSize: 13, boxShadow: "none" }}>Book a Call</a>
          </div>

          <button className="mobile-only" onClick={() => setMobileMenu(true)} aria-label="Open menu" style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: 5, padding: 8,
          }}>
            <span style={{ width: 22, height: 1.5, background: "white", display: "block" }}/>
            <span style={{ width: 22, height: 1.5, background: "white", display: "block" }}/>
          </button>
        </div>
      </nav>
    </>
  );
}
