import Link from 'next/link';

export default function Footer() {
  const socials = [
    { name: 'Facebook', href: 'https://web.facebook.com/profile.php?id=61591154086030', bg: '#1877f2', icon: 'f' },
    { name: 'X (Twitter)', href: 'https://x.com/Writerswebb', bg: '#000', border: '1px solid #333', icon: '𝕏' },
    { name: 'Instagram', href: 'https://www.instagram.com/writerswebbproduction/', bg: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', icon: '📸' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aaron-amoako-smith-4657582bb/', bg: '#0077b5', icon: 'in' },
    { name: 'YouTube', href: 'https://www.youtube.com/@writerswebproductions-x8w', bg: '#ff0000', icon: '▶' },
  ];

  return (
    <footer style={{ background: '#0d0d0d', borderTop: '1px solid #222', padding: '48px 20px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
        <div>
          <h3 style={{ color: '#e63946', fontWeight: 900, fontSize: '22px' }}>NEXARA</h3>
          <p style={{ color: '#999', marginTop: '12px', fontSize: '14px', lineHeight: 1.8 }}>Your World Updated. Breaking news, global opportunities and stories that matter.</p>
        </div>
        <div>
          <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '16px' }}>News</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href='/category/news' style={{ color: '#999', fontSize: '14px' }}>News</Link>
            <Link href='/category/sports' style={{ color: '#999', fontSize: '14px' }}>Sports</Link>
            <Link href='/category/entertainment' style={{ color: '#999', fontSize: '14px' }}>Entertainment</Link>
            <Link href='/category/politics' style={{ color: '#999', fontSize: '14px' }}>Politics</Link>
            <Link href='/category/technology' style={{ color: '#999', fontSize: '14px' }}>Technology</Link>
          </div>
        </div>
        <div>
          <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '16px' }}>Opportunities</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href='/category/scholarships' style={{ color: '#999', fontSize: '14px' }}>Scholarships</Link>
            <Link href='/category/fellowships' style={{ color: '#999', fontSize: '14px' }}>Fellowships</Link>
            <Link href='/category/grants' style={{ color: '#999', fontSize: '14px' }}>Grants</Link>
            <Link href='/category/internships' style={{ color: '#999', fontSize: '14px' }}>Internships</Link>
            <Link href='/category/jobs' style={{ color: '#999', fontSize: '14px' }}>Jobs</Link>
          </div>
        </div>
        <div>
          <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '16px' }}>Company</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href='/about' style={{ color: '#999', fontSize: '14px' }}>About Us</Link>
            <Link href='/contact' style={{ color: '#999', fontSize: '14px' }}>Contact</Link>
          </div>
        </div>
        <div>
          <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '16px' }}>Legal</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href='/privacy-policy' style={{ color: '#999', fontSize: '14px' }}>Privacy Policy</Link>
            <Link href='/terms' style={{ color: '#999', fontSize: '14px' }}>Terms of Use</Link>
            <Link href='/disclaimer' style={{ color: '#999', fontSize: '14px' }}>Disclaimer</Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '40px auto 0', paddingTop: '32px', borderTop: '1px solid #1a1a1a' }}>
        <p style={{ color: '#999', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px' }}>FOLLOW & CONNECT</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.name}
              style={{
                background: s.bg,
                border: s.border || 'none',
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                color: '#fff',
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '32px auto 0', paddingTop: '24px', borderTop: '1px solid #222', textAlign: 'center' }}>
        <p style={{ color: '#555', fontSize: '13px' }}>© 2026 NEXARA. All rights reserved. Your World Updated.</p>
      </div>
    </footer>
  );
}
