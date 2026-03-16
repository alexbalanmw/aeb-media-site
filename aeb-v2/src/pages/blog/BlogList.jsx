import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "../../components/Animations";
import { Icons } from "../../components/Icons";
import PageHead from "../../components/PageHead";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/blog-posts.json")
      .then(r => r.json())
      .then(data => {
        setPosts(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <PageHead
        title="Blog | AEB Media"
        description="Insights on social media marketing, Google Ads, Meta Ads, and AI automations for local businesses."
      />

      <section style={{
        minHeight: "60vh", position: "relative",
        padding: "160px 24px 40px", textAlign: "center",
      }}>
        <div className="hero-glow" />
        <div style={{ position: "relative", zIndex: 2 }}>
          <FadeIn>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#818cf8", letterSpacing: "4px", marginBottom: 20, textTransform: "uppercase" }}>BLOG</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "white", letterSpacing: "-2.5px", lineHeight: 1.05, marginBottom: 16 }}>
              Insights for{" "}
              <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>growing businesses</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
              Practical advice on social media, ads, and growth strategies for local businesses.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="divider" />

      <section style={{ padding: "80px 24px 140px", maxWidth: 900, margin: "0 auto" }}>
        {loading ? (
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)", textAlign: "center" }}>Loading posts...</p>
        ) : posts.length === 0 ? (
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)", textAlign: "center" }}>No posts yet. Check back soon!</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.08}>
                <Link to={"/blog/" + post.slug} className="glass-card" style={{ display: "block", padding: "36px 40px", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
                    <span style={{ padding: "4px 12px", borderRadius: 100, background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.12)", fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(129,140,248,0.8)", fontWeight: 500 }}>{post.category}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{post.date}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{post.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 700, color: "white", letterSpacing: "-0.5px", marginBottom: 12, lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt}</p>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#818cf8", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>Read article {Icons.arrowRight}</div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
