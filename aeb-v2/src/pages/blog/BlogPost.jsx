import { useParams, Link, Navigate } from "react-router-dom";
import { FadeIn } from "../../components/Animations";
import { Icons } from "../../components/Icons";
import PageHead from "../../components/PageHead";
import { blogPosts } from "./posts";

const ContentBlock = ({ block }) => {
  switch (block.type) {
    case "h2":
      return (
        <h2 style={{
          fontFamily: "'Sora', sans-serif", fontSize: "clamp(22px, 3vw, 30px)",
          fontWeight: 700, color: "white", letterSpacing: "-0.5px",
          marginTop: 48, marginBottom: 16, lineHeight: 1.2,
        }}>{block.text}</h2>
      );
    case "p":
      return (
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 17,
          color: "rgba(255,255,255,0.65)", lineHeight: 1.85,
          marginBottom: 20,
        }}>{block.text}</p>
      );
    case "quote":
      return (
        <div style={{
          borderLeft: "3px solid #818cf8",
          padding: "20px 28px", margin: "32px 0",
          background: "rgba(99,102,241,0.05)", borderRadius: "0 16px 16px 0",
        }}>
          <p style={{
            fontFamily: "'Sora', sans-serif", fontSize: 19,
            fontWeight: 500, color: "rgba(255,255,255,0.8)",
            lineHeight: 1.6, fontStyle: "italic",
          }}>{block.text}</p>
        </div>
      );
    case "list":
      return (
        <div style={{ margin: "20px 0 28px", display: "flex", flexDirection: "column", gap: 16 }}>
          {block.items.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <span style={{ flexShrink: 0, marginTop: 4 }}>{Icons.check}</span>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 16,
                color: "rgba(255,255,255,0.65)", lineHeight: 1.75,
              }}>{item}</p>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = blogPosts.indexOf(post);
  const nextPost = blogPosts[currentIndex + 1] || blogPosts[0];
  const prevPost = blogPosts[currentIndex - 1] || blogPosts[blogPosts.length - 1];

  return (
    <>
      <PageHead title={`${post.title} | AEB Media Blog`} description={post.description} />

      {/* ── Article Header ── */}
      <section style={{
        position: "relative", padding: "160px 24px 60px", overflow: "hidden",
      }}>
        <div className="hero-glow" />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto" }}>
          <FadeIn delay={0.1}>
            <Link to="/blog" style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32,
              fontFamily: "'DM Sans', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.55)", transition: "color 0.3s",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              All articles
            </Link>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
              <span style={{
                padding: "5px 14px", borderRadius: 100,
                background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.15)",
                fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                color: "#818cf8", fontWeight: 600,
              }}>{post.category}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{post.date}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{post.readTime}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <h1 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800, lineHeight: 1.1, color: "white",
              letterSpacing: "-2px", marginBottom: 24,
            }}>{post.title}</h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 19,
              color: "rgba(255,255,255,0.6)", lineHeight: 1.7,
            }}>{post.description}</p>
          </FadeIn>
        </div>
      </section>

      <div className="divider" />

      {/* ── Article Body ── */}
      <article style={{ padding: "60px 24px 80px", maxWidth: 720, margin: "0 auto" }}>
        <FadeIn>
          {post.content.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </FadeIn>
      </article>

      <div className="divider" />

      {/* ── CTA ── */}
      <section style={{ padding: "80px 24px", textAlign: "center", position: "relative" }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(99,102,241,0.08), transparent)",
          pointerEvents: "none",
        }}/>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 560, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{
              fontFamily: "'Sora', sans-serif", fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 700, color: "white", letterSpacing: "-1px", marginBottom: 16, lineHeight: 1.15,
            }}>
              Ready to put this into action?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 16,
              color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 32,
            }}>
              Book a free call and we'll build a custom strategy for your business — no pressure, no obligations.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a href="/contact" className="cta-primary" style={{ fontSize: 16, padding: "18px 40px" }}>
              Book Your Free Call {Icons.arrowRight}
            </a>
          </FadeIn>
        </div>
      </section>

      <div className="divider" />

      {/* ── Next/Prev Articles ── */}
      <section style={{ padding: "60px 24px 100px", maxWidth: 720, margin: "0 auto" }}>
        <FadeIn>
          <h3 style={{
            fontFamily: "'Sora', sans-serif", fontSize: 18, fontWeight: 600,
            color: "rgba(255,255,255,0.55)", marginBottom: 24, textAlign: "center",
          }}>Keep reading</h3>
        </FadeIn>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: 16,
        }}>
          {[prevPost, nextPost].filter((p, i, arr) => arr.indexOf(p) === i && p.slug !== post.slug).map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.1}>
              <Link to={`/blog/${p.slug}`} className="glass-card" style={{
                display: "block", padding: "28px 24px",
              }}>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                  color: "#818cf8", fontWeight: 600,
                }}>{p.category}</span>
                <h4 style={{
                  fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 600,
                  color: "white", lineHeight: 1.4, marginTop: 8,
                }}>{p.title}</h4>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
