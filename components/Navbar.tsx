"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push("/search?q=" + encodeURIComponent(query.trim()));
      setOpen(false);
    }
  }

  return (
    <nav style={{ background: "#0a0a0a", borderBottom: "1px solid #222", position: "sticky", top: 0, zIndex: 9999, width: "100%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        <Link href="/" style={{ fontSize: "24px", fontWeight: 800, color: "#e63946", letterSpacing: "-1px", textDecoration: "none" }}>NEXARA</Link>

        {/* Desktop Nav */}
        <div className="nav-desktop" style={{ gap: "24px", alignItems: "center" }}>
          <Link href="/" style={{ color: "#fff", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>Home</Link>
          <Link href="/blog" style={{ color: "#fff", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>Blog</Link>
          <Link href="/opportunities" style={{ color: "#fff", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>Opportunities</Link>
          <Link href="/about" style={{ color: "#fff", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>About</Link>
          <Link href="/contact" style={{ color: "#fff", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>Contact</Link>
          <form onSubmit={handleSearch} style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "6px", padding: "8px 12px", color: "#fff", fontSize: "13px", outline: "none", width: "160px" }}
            />
            <button type="submit" style={{ background: "#e63946", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 14px", fontWeight: 700, cursor: "pointer", fontSize: "13px" }}>Go</button>
          </form>
        </div>

        {/* Hamburger Button */}
        <button
          className="nav-hamburger"
          type="button"
          onClick={() => setOpen((v) => !v)}
          onTouchEnd={(e) => { e.preventDefault(); setOpen((v) => !v); }}
          aria-label="Menu"
          style={{ background: "#e63946", border: "none", color: "#fff", fontSize: "22px", cursor: "pointer", width: "44px", height: "44px", borderRadius: "8px", alignItems: "center", justifyContent: "center" }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={{ display: open ? "flex" : "none", background: "#111", borderTop: "1px solid #222", padding: "20px", flexDirection: "column", gap: "20px" }}>
        <form onSubmit={handleSearch} style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search NEXARA..."
            style={{ flex: 1, background: "#1a1a1a", border: "1px solid #333", borderRadius: "6px", padding: "10px 14px", color: "#fff", fontSize: "14px", outline: "none" }}
          />
          <button type="submit" style={{ background: "#e63946", color: "#fff", border: "none", borderRadius: "6px", padding: "10px 16px", fontWeight: 700, cursor: "pointer" }}>Go</button>
        </form>
        <Link href="/" onClick={() => setOpen(false)} style={{ color: "#fff", fontSize: "18px", fontWeight: 600, textDecoration: "none" }}>Home</Link>
        <Link href="/blog" onClick={() => setOpen(false)} style={{ color: "#fff", fontSize: "18px", fontWeight: 600, textDecoration: "none" }}>Blog</Link>
        <Link href="/opportunities" onClick={() => setOpen(false)} style={{ color: "#fff", fontSize: "18px", fontWeight: 600, textDecoration: "none" }}>Opportunities</Link>
        <Link href="/about" onClick={() => setOpen(false)} style={{ color: "#fff", fontSize: "18px", fontWeight: 600, textDecoration: "none" }}>About</Link>
        <Link href="/contact" onClick={() => setOpen(false)} style={{ color: "#fff", fontSize: "18px", fontWeight: 600, textDecoration: "none" }}>Contact</Link>
      </div>
    </nav>
  );
}