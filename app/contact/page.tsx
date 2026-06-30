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
            {status === "success" && <p style={{ color: "#4caf50", fontSize: "14px" }}>Message sent successfully!</p>}
            {status === "error" && <p style={{ color: "#e63946", fontSize: "14px" }}>Failed to send. Please try again.</p>}
          </form>
        </div>

        {/* Right - Contact Details */}
        <div>
          <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: 700, marginBottom: "24px" }}>Contact Details</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <p style={{ color: "#999", fontSize: "14px", marginBottom: "4px" }}>Email</p>
              <a href="mailto:nexara@writerswebproduction.com" style={{ color: "#e63946", fontSize: "16px", fontWeight: 600, textDecoration: "none" }}>nexara@writerswebproduction.com</a>
            </div>
            <div>
              <p style={{ color: "#999", fontSize: "14px", marginBottom: "16px" }}>Follow & Connect</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href="https://wa.me/233256883660" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>
                  <span style={{ background: "#25d366", width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>💬</span>
                  WhatsApp
                </a>
                <a href="https://web.facebook.com/profile.php?id=61591154086030" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>
                  <span style={{ background: "#1877f2", width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>f</span>
                  Facebook
                </a>
                <a href="https://x.com/Writerswebb" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>
                  <span style={{ background: "#000", border: "1px solid #333", width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>𝕏</span>
                  X (Twitter)
                </a>
                <a href="https://www.instagram.com/writerswebbproduction/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>
                  <span style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>📸</span>
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/aaron-amoako-smith-4657582bb/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>
                  <span style={{ background: "#0077b5", width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>in</span>
                  LinkedIn
                </a>
                <a href="https://www.youtube.com/@writerswebproductions-x8w" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>
                  <span style={{ background: "#ff0000", width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>▶</span>
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