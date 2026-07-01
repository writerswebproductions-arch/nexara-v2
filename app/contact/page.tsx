"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    if (res.ok) {
      setStatus("success");
      setName(""); setEmail(""); setMessage("");
    } else {
      setStatus("error");
    }
  }

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
      <span style={{ background: "#e63946", color: "#fff", padding: "4px 12px", borderRadius: "4px", fontSize: "12px", fontWeight: 700, letterSpacing: "2px" }}>GET IN TOUCH</span>
      <h1 style={{ fontSize: "48px", fontWeight: 900, color: "#fff", marginTop: "16px" }}>Contact <span style={{ color: "#e63946" }}>Us</span></h1>
      <p style={{ color: "#999", marginTop: "8px", fontSize: "16px" }}>Have a story tip, opportunity to share, or just want to reach out? We'd love to hear from you.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginTop: "48px" }}>

        {/* Left - Form */}
        <div>
          <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: 700, marginBottom: "24px" }}>Send Us a Message</h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              style={{ background: "#161616", border: "1px solid #333", borderRadius: "8px", padding: "14px 16px", color: "#fff", fontSize: "16px", outline: "none" }}
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              type="email"
              required
              style={{ background: "#161616", border: "1px solid #333", borderRadius: "8px", padding: "14px 16px", color: "#fff", fontSize: "16px", outline: "none" }}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={6}
              required
              style={{ background: "#161616", border: "1px solid #333", borderRadius: "8px", padding: "14px 16px", color: "#fff", fontSize: "16px", outline: "none", resize: "vertical" }}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              style={{ background: "#e63946", color: "#fff", padding: "14px", borderRadius: "8px", fontWeight: 700, fontSize: "16px", border: "none", cursor: "pointer" }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p style={{ color: "#4caf50", fontSize: "14px" }}>✅ Message sent successfully! We'll get back to you soon.</p>}
            {status === "error" && <p style={{ color: "#e63946", fontSize: "14px" }}>❌ Failed to send. Please try again or email us directly.</p>}
          </form>
        </div>

        {/* Right - Contact Details */}
        <div>
          <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: 700, marginBottom: "24px" }}>Contact Details</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            <div style={{ background: "#161616", border: "1px solid #222", borderRadius: "12px", padding: "20px" }}>
              <p style={{ color: "#999", fontSize: "13px", marginBottom: "4px", letterSpacing: "1px" }}>EMAIL</p>
              <a href="mailto:nexara@writerswebproduction.com" style={{ color: "#e63946", fontSize: "15px", fontWeight: 600, textDecoration: "none" }}>nexara@writerswebproduction.com</a>
            </div>

            <div style={{ background: "#161616", border: "1px solid #222", borderRadius: "12px", padding: "20px" }}>
              <p style={{ color: "#999", fontSize: "13px", marginBottom: "4px", letterSpacing: "1px" }}>LOCATION</p>
              <p style={{ color: "#fff", fontSize: "15px", fontWeight: 600 }}>United States 🇺🇸</p>
            </div>

            <div style={{ background: "#161616", border: "1px solid #222", borderRadius: "12px", padding: "20px" }}>
              <p style={{ color: "#999", fontSize: "13px", marginBottom: "16px", letterSpacing: "1px" }}>FOLLOW & CONNECT</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href="https://web.facebook.com/profile.php?id=61591154086030" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>
                  <span style={{ background: "#1877f2", width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>f</span>
                  Facebook
                </a>
                <a href="https://x.com/Writerswebb" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>
                  <span style={{ background: "#000", border: "1px solid #333", width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>𝕏</span>
                  X (Twitter)
                </a>
                <a href="https://www.instagram.com/writerswebbproduction/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>
                  <span style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>📸</span>
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/aaron-amoako-smith-4657582bb/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>
                  <span style={{ background: "#0077b5", width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>in</span>
                  LinkedIn
                </a>
                <a href="https://www.youtube.com/@writerswebproductions-x8w" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>
                  <span style={{ background: "#ff0000", width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>▶</span>
                  YouTube
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}