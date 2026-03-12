import { Link } from "react-router-dom";
import { FadeIn } from "../../components/Animations";
import { Icons } from "../../components/Icons";
import PageHead from "../../components/PageHead";
import { blogPosts } from "./posts";

export default function BlogList() {
  return (
    <>
      <PageHead
        title="Blog | AEB Media — Social Media & Marketing Tips for Local Businesses"
        description="Practical marketing advice for local businesses. Learn about social media strategy, Google Ads, video content, and growing your business online."
      />

      <section style={{
        minHeight: "60vh", position: "relative",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "160px 24px 80px", overflow: "hidden",
      }}>
        <div className="hero-glow" />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 760 }}>
          <FadeIn delay={0.1}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
              color: "#818cf8", letterSpacing: "4px", marginBottom: 20, textTransform: "uppercase",
            }}>BLOG</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(34px, 6vw, 64px)",
              fontWeight: 800, lineHeight: 1.05, color: "white",
              letterSpacing: "-2.5px", marginBottom: 24,
            }}>
              Insights that help your{" "}
              <span style={{
                background: "linear-gradient(135deg, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>business grow</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 18,
              color: "rgba(255,255,255,0.6)", lineHeight: 1.75,
              maxWidth: 500, margin: "0 auto",
            }}>
              Practical tips on social media, ads, and digital marketing — straight from the team that's generated over 127M+ views.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="divider" />

      <section style={{ padding: "80px 24px 140px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.08}>
              <Link to={`/blog/${post.slug}`} className="glass-card" style={{
                display: "block", padding: "40px 40px",
              }}>
                <div style={{
                  display: "flex", gap: 16, alignItems: "center", marginBottom: 16, flexWrap: "wrap",
                }}>
                  <span style={{
                    padding: "5px 14px", borderRadius: 100,
                    background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.15)",
                    fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                    color: "#818cf8", fontWeight: 600,
                  }}>{post.category}</span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                    color: "rgba(255,255,255,0.55)",
                  }}>{post.date}</span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                    color: "rgba(255,255,255,0.55)",
                  }}>{post.readTime}</span>
                </div>

                <h2 style={{
                  fontFamily: "'Sora', sans-serif", fontSize: "clamp(20px, 3vw, 26px)",
                  fontWeight: 700, color: "white",
                  letterSpacing: "-0.5px", lineHeight: 1.3, marginBottom: 12,
                }}>{post.title}</h2>

                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                  color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 20,
                }}>{post.description}</p>

                <div style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  color: "#818cf8", fontWeight: 600,
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                  Read article {Icons.arrowRight}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
