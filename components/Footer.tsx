import Link from 'next/link';

export default function Footer() {
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
        <div>
          <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '16px' }}>Follow & Connect</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="https://web.facebook.com/profile.php?id=61591154086030" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#999', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              <span style={{ background: '#1877f2', width: '30px', height: '30px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', flexShrink: 0, color: '#fff' }}>f</span>
              Facebook
            </a>
            <a href="https://x.com/Writerswebb" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#999', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              <span style={{ background: '#000', border: '1px solid #333', width: '30px', height: '30px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', flexShrink: 0, color: '#fff' }}>𝕏</span>
              X (Twitter)
            </a>
            <a href="https://www.instagram.com/writerswebbproduction/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#999', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              <span style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', width: '30px', height: '30px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', flexShrink: 0 }}>📸</span>
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/aaron-amoako-smith-4657582bb/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#999', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              <span style={{ background: '#0077b5', width: '30px', height: '30px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', flexShrink: 0, color: '#fff' }}>in</span>
              LinkedIn
            </a>
            <a href="https://www.youtube.com/@writerswebproductions-x8w" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#999', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              <span style={{ background: '#ff0000', width: '30px', height: '30px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', flexShrink: 0, color: '#fff' }}>▶</span>
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '32px auto 0', paddingTop: '24px', borderTop: '1px solid #222', textAlign: 'center' }}>
        <p style={{ color: '#555', fontSize: '13px' }}>© 2026 NEXARA. All rights reserved. Your World Updated.</p>
      </div>
    </footer>
  );
}