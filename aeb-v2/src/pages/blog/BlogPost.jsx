import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FadeIn } from "../../components/Animations";
import { Icons } from "../../components/Icons";
import PageHead from "../../components/PageHead";

function renderMarkdown(text) {
  if (!text) return "";
  return text
    .split("\n\n")
    .map((block, i) => {
      if (block.startsWith("## ")) {
        return '<h2 style="font-family: Sora, sans-serif; font-size: 24px; font-weight: 700; color: white; margin: 40px 0 16px; letter-spacing: -0.5px;">' + block.slice(3) + "</h2>";
      }
      if (block.startsWith("### ")) {
        return '<h3 style="font-family: Sora, sans-serif; font-size: 20px; font-weight: 600; color: white; margin: 32px 0 12px;">' + block.slice(4) + "</h3>";
      }
      let html = block
        .replace(/\*\*(.+?)\*\*/g, '<strong style="color: white; font-weight: 600;">$1</strong>')
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/\n/g, "<br/>");
      return '<p style="font-family: DM Sans, sans-serif; font-size: 16px; color: rgba(255,255,255,0.6); line-height: 1.85; margin-bottom: 20px;">' + html + "</p>";
    })
    .join("");
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/blog-posts.json")
      .then(r => r.json())
      .then(data => {
        const found = data.find(p => p.slug === slug);
        setPost(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "160px 24px" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)" }}>Loading...</p>
      </section>
    );
  }

  if (!post) {
    return (
      <section style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "160px 24px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 36, fontWeight: 700, color: "white", marginBottom: 16 }}>Post not found</h1>
        <Link to="/blog" className="cta-ghost" style={{ fontSize: 15, padding: "14px 32px" }}>Back to Blog</Link>
      </section>
    );
  }

  return (
    <>
      <PageHead title={post.title + " | AEB Media"} description={post.excerpt} />

      <section style={{ padding: "160px 24px 40px", textAlign: "center", position: "relative" }}>
        <div className="hero-glow" />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto" }}>
          <FadeIn>
            <Link to="/blog" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#818cf8", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Back to Blog
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 20, flexWrap: "wrap" }}>
              <span style={{ padding: "4px 12px", borderRadius: 100, background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.12)", fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(129,140,248,0.8)", fontWeight: 500 }}>{post.category}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{post.date}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{post.readTime}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800, color: "white", letterSpacing: "-2px", lineHeight: 1.15 }}>{post.title}</h1>
          </FadeIn>
        </div>
      </section>

      <div className="divider" />

      <section style={{ padding: "60px 24px 120px", maxWidth: 700, margin: "0 auto" }}>
        <FadeIn>
          <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
        </FadeIn>

        <div className="divider" style={{ margin: "60px 0" }} />

        <FadeIn>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 28, fontWeight: 700, color: "white", letterSpacing: "-1px", marginBottom: 16 }}>Want results like these for your business?</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)", marginBottom: 32, lineHeight: 1.7 }}>Book a free consultation and we will build a custom growth plan for you.</p>
            <Link to="/contact" className="cta-primary" style={{ fontSize: 16, padding: "18px 40px" }}>
              Book a Call {Icons.arrowRight}
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
