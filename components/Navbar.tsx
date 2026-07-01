"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function checkSize() {
      setIsMobile(window.innerWidth < 768);
    }
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push("/search?q=" + encodeURIComponent(query.trim()));
      setOpen(false);
    }
  }

  const linkStyle = { color: "#fff", fontSize: "14px", fontWeight: 500, textDecoration: "none" } as const;

  return (
    <nav style={{ background: "#0a0a0a", borderBottom: "1px solid #222", position: "sticky", top: 0, zIndex: 9999, width: "100%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        <Link href="/" style={{ fontSize: "24px", fontWeight: 800, color: "#e63946", letterSpacing: "-1px", textDecoration: "none" }}>NEXARA</Link>

        {!isMobile && (
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Link href="/" style={linkStyle}>Home</Link>
            <Link href="/blog" style={linkStyle}>Blog</Link>
            <Link href="/opportunities" style={linkStyle}>Opportunities</Link>
            <Link href="/about" style={linkStyle}>About</Link>
            <Link href="/contact" style={linkStyle}>Contact</Link>
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
        )}

        {isMobile && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            style={{ background: "#e63946", border: "none", color: "#fff", fontSize: "22px", cursor: "pointer", width: "44px", height: "44px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {open ? "✕" : "☰"}
          </button>
        )}
      </div>

      {isMobile && open && (
        <div style={{ background: "#111", borderTop: "1px solid #222", padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
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
          <Link href="/about" onClick={() => setOpen(false)} style={{ color: "#fff", fontSize: "18px", fontWeight: 600, textDecoration: "none" }}>Contact</Link>
          <Link href="/contact" onClick={() => setOpen(false)} style={{ color: "#fff", fontSize: "18px", fontWeight: 600, textDecoration: "none" }}>Contact</Link>
        </div>
      )}
    </nav>
  );
}