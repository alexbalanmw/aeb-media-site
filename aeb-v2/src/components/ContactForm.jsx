import { useState } from "react";
import { FadeIn } from "./Animations";
import { Icons } from "./Icons";

export default function ContactForm({ id = "contact" }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xjgaregy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name, email: form.email, phone: form.phone,
          business: form.business, message: form.message,
        }),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", phone: "", business: "", message: "" }); }
      else setStatus("error");
    } catch (err) { setStatus("error"); }
  };

  const inputStyle = {
    width: "100%", padding: "16px 20px",
    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14, color: "white", fontFamily: "'DM Sans', sans-serif", fontSize: 15,
    outline: "none", transition: "all 0.3s ease",
  };

  const fp = {
    onFocus: (e) => { e.target.style.borderColor = "rgba(99,102,241,0.4)"; e.target.style.background = "rgba(99,102,241,0.04)"; e.target.style.boxShadow = "0 0 20px rgba(99,102,241,0.08)"; },
    onBlur: (e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.03)"; e.target.style.boxShadow = "none"; },
  };

  const label = { fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.4)", display: "block", marginBottom: 8 };

  if (status === "success") {
    return (
      <section id={id} style={{ padding: "180px 24px 140px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 90%, rgba(99,102,241,0.1), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <FadeIn>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}><h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "white", letterSpacing: "-1.5px", marginBottom: 16 }}>We got your message!</h2></FadeIn>
          <FadeIn delay={0.2}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.4)", maxWidth: 460, margin: "0 auto 40px", lineHeight: 1.7 }}>We'll review your info and get back to you within 24 hours. Talk soon.</p></FadeIn>
          <FadeIn delay={0.3}><button onClick={() => setStatus("idle")} className="cta-ghost" style={{ fontSize: 15, padding: "14px 32px" }}>Send Another Message</button></FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section id={id} style={{ padding: "140px 24px", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 90%, rgba(99,102,241,0.1), transparent)", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 600, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#818cf8", letterSpacing: "4px", marginBottom: 20, textTransform: "uppercase" }}>GET IN TOUCH</p>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 800, color: "white", letterSpacing: "-2px", lineHeight: 1.05, marginBottom: 16 }}>
              Let's build something{" "}
              <span style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>custom for you.</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 460, margin: "0 auto" }}>
              Tell us about your business and what you're looking for. We'll get back to you within 24 hours with a game plan.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 28, padding: "clamp(28px, 5vw, 48px)", backdropFilter: "blur(20px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                <div>
                  <label style={label}>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="John Smith" style={inputStyle} {...fp} />
                </div>
                <div>
                  <label style={label}>Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@business.com" style={inputStyle} {...fp} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                <div>
                  <label style={label}>Phone Number</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 123-4567" style={inputStyle} {...fp} />
                </div>
                <div>
                  <label style={label}>Business Name</label>
                  <input name="business" value={form.business} onChange={handleChange} placeholder="Your Business LLC" style={inputStyle} {...fp} />
                </div>
              </div>
              <div>
                <label style={label}>What are you looking for? *</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your business, your goals, and what services you're interested in..." style={{ ...inputStyle, resize: "vertical", minHeight: 120 }} {...fp} />
              </div>
              <button type="button" onClick={handleSubmit}
                disabled={status === "sending" || !form.name || !form.email || !form.message}
                className="cta-primary"
                style={{ width: "100%", justifyContent: "center", marginTop: 8, fontSize: 16, padding: "20px 40px", opacity: (status === "sending" || !form.name || !form.email || !form.message) ? 0.5 : 1, cursor: (status === "sending" || !form.name || !form.email || !form.message) ? "not-allowed" : "pointer" }}>
                {status === "sending" ? "Sending..." : <>Send Message {Icons.arrowRight}</>}
              </button>
              {status === "error" && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#ef4444", textAlign: "center", marginTop: 8 }}>Something went wrong. Please try again or email us directly at alexb@aeb.media</p>}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ marginTop: 40, display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <a href="mailto:alexb@aeb.media" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", gap: 8 }}>{Icons.mail} alexb@aeb.media</a>
            <a href="tel:2242211041" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", gap: 8 }}>{Icons.phone} (224) 221-1041</a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
