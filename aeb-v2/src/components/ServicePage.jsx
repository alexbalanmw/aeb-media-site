import { Link } from "react-router-dom";
import { FadeIn } from "./Animations";
import { Icons } from "./Icons";
import PageHead from "./PageHead";

export default function ServicePage({ seo, hero, problems, benefits, process, otherServices }) {
  return (
    <>
      <PageHead title={seo.title} description={seo.description} />

      {/* ═══ HERO ═══ */}
      <section style={{
        minHeight: "80vh", position: "relative",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "160px 24px 100px", overflow: "hidden",
      }}>
        <div className="hero-glow" />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 860 }}>
          <FadeIn delay={0.1}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "10px 22px", marginBottom: 36,
              borderRadius: 100, border: "1px solid rgba(99,102,241,0.2)",
              background: "rgba(99,102,241,0.06)",
            }}>
              <span style={{ color: "#818cf8", display: "flex" }}>{hero.icon}</span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                color: "rgba(129,140,248,0.8)", letterSpacing: "1px", fontWeight: 600,
              }}>{hero.badge}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <h1 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(34px, 6vw, 68px)",
              fontWeight: 800, lineHeight: 1.05, color: "white",
              letterSpacing: "-2.5px", marginBottom: 24,
            }}>
              {hero.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "rgba(255,255,255,0.6)", lineHeight: 1.75,
              maxWidth: 560, margin: "0 auto 48px",
            }}>
              {hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.55}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="cta-primary" style={{ fontSize: 16, padding: "20px 44px" }}>
                Get Your Free Audit {Icons.arrowRight}
              </Link>
              <Link to="/" className="cta-ghost" style={{ fontSize: 16, padding: "20px 44px" }}>
                Back to Home
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ PROBLEMS THIS SOLVES ═══ */}
      <section style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
            color: "#818cf8", letterSpacing: "4px", textAlign: "center",
            marginBottom: 20, textTransform: "uppercase",
          }}>THE PROBLEM</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700, color: "white", textAlign: "center",
            letterSpacing: "-1.5px", marginBottom: 64, lineHeight: 1.1,
          }}>
            {problems.heading}
          </h2>
        </FadeIn>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: 16,
        }}>
          {problems.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="glass-card" style={{ padding: "36px 32px", height: "100%" }}>
                <div style={{ color: "#818cf8", marginBottom: 16, opacity: 0.8 }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif", fontSize: 17, fontWeight: 600,
                  color: "white", marginBottom: 12,
                }}>{item.title}</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                  color: "rgba(255,255,255,0.6)", lineHeight: 1.75,
                }}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ═══ WHAT YOU GET ═══ */}
      <section style={{ padding: "120px 24px", maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
            color: "#818cf8", letterSpacing: "4px", textAlign: "center",
            marginBottom: 20, textTransform: "uppercase",
          }}>WHAT YOU GET</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700, color: "white", textAlign: "center",
            letterSpacing: "-1.5px", marginBottom: 64, lineHeight: 1.1,
          }}>
            {benefits.heading}
          </h2>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {benefits.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="glass-card" style={{
                padding: "28px 32px",
                display: "flex", alignItems: "flex-start", gap: 16,
              }}>
                <span style={{ flexShrink: 0, marginTop: 2 }}>{Icons.check}</span>
                <div>
                  <h3 style={{
                    fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 600,
                    color: "white", marginBottom: 6,
                  }}>{item.title}</h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                    color: "rgba(255,255,255,0.6)", lineHeight: 1.7,
                  }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ═══ HOW IT WORKS ═══ */}
      <section style={{ padding: "120px 24px", maxWidth: 800, margin: "0 auto" }}>
        <FadeIn>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
            color: "#818cf8", letterSpacing: "4px", textAlign: "center",
            marginBottom: 20, textTransform: "uppercase",
          }}>THE PROCESS</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700, color: "white", textAlign: "center",
            letterSpacing: "-1.5px", marginBottom: 64, lineHeight: 1.1,
          }}>
            How we do it
          </h2>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {process.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
                <span style={{
                  fontFamily: "'Sora', sans-serif", fontSize: 40, fontWeight: 800,
                  background: "linear-gradient(135deg, #818cf8, #c084fc)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  lineHeight: 1, flexShrink: 0,
                }}>0{i + 1}</span>
                <div>
                  <h3 style={{
                    fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 600,
                    color: "white", marginBottom: 8,
                  }}>{step.title}</h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                    color: "rgba(255,255,255,0.6)", lineHeight: 1.75,
                  }}>{step.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ═══ OTHER SERVICES ═══ */}
      <section style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 700, color: "white", textAlign: "center",
            letterSpacing: "-1px", marginBottom: 48, lineHeight: 1.15,
          }}>
            Explore our other services
          </h2>
        </FadeIn>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: 16,
        }}>
          {otherServices.map((svc, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <Link to={svc.path} className="glass-card" style={{
                display: "block", padding: "32px 28px", textAlign: "center",
              }}>
                <div style={{ color: "#818cf8", marginBottom: 12, display: "flex", justifyContent: "center" }}>{svc.icon}</div>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif", fontSize: 17, fontWeight: 600,
                  color: "white", marginBottom: 8,
                }}>{svc.label}</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                }}>{svc.tagline}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ═══ CTA ═══ */}
      <section style={{
        padding: "140px 24px", textAlign: "center", position: "relative",
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
              fontSize: "clamp(30px, 5vw, 56px)",
              fontWeight: 800, color: "white",
              letterSpacing: "-2px", lineHeight: 1.05, marginBottom: 24,
            }}>
              Ready to get started?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 18,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.75,
            }}>
              Book a free consultation. We'll learn about your business and
              build a custom plan — no pressure, no obligations.
            </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <Link to="/contact" className="cta-primary"
              style={{ fontSize: 18, padding: "24px 52px" }}>
              Book a Call {Icons.arrowRight}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
