import { Link } from "react-router-dom";
import { Icons } from "./Icons";

export default function Footer() {
  return (
    <footer style={{
      padding: "48px 32px 36px",
      borderTop: "1px solid rgba(255,255,255,0.04)",
      maxWidth: 1280, margin: "0 auto",
    }}>
      <div style={{
        display: "flex", flexWrap: "wrap", justifyContent: "space-between",
        gap: 40, marginBottom: 40,
      }}>
        <div>
          <Link to="/" style={{
            fontFamily: "'Sora', sans-serif", fontSize: 18, fontWeight: 700,
          }}>
            <span style={{ color: "#818cf8" }}>AEB</span> MEDIA
          </Link>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14,
            color: "rgba(255,255,255,0.5)", marginTop: 8, maxWidth: 280, lineHeight: 1.6,
          }}>
            Custom growth systems for local businesses — social media, ads, and AI automations.
          </p>
        </div>

        <div>
          <div style={{
            fontFamily: "'Sora', sans-serif", fontSize: 12, fontWeight: 600,
            color: "rgba(255,255,255,0.5)", letterSpacing: "2px", marginBottom: 16,
          }}>SERVICES</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link to="/services/social-media" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", transition: "color 0.3s" }}>Social Media Content</Link>
            <Link to="/services/google-ads" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)" }}>Google Ads</Link>
            <Link to="/services/meta-ads" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)" }}>Meta Ads</Link>
            <Link to="/services/ai-automations" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)" }}>AI Automations</Link>
          </div>
        </div>

        <div>
          <div style={{
            fontFamily: "'Sora', sans-serif", fontSize: 12, fontWeight: 600,
            color: "rgba(255,255,255,0.5)", letterSpacing: "2px", marginBottom: 16,
          }}>BLOG</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link to="/blog" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)" }}>All Articles</Link>
          </div>
        </div>

        <div>
          <div style={{
            fontFamily: "'Sora', sans-serif", fontSize: 12, fontWeight: 600,
            color: "rgba(255,255,255,0.5)", letterSpacing: "2px", marginBottom: 16,
          }}>CONTACT</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="mailto:alexb@aeb.media" style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: 8,
            }}>{Icons.mail} alexb@aeb.media</a>
            <a href="tel:2242211041" style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: 8,
            }}>{Icons.phone} (224) 221-1041</a>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 24,
        display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16,
      }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.15)" }}>
          © 2026 AEB Media. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
