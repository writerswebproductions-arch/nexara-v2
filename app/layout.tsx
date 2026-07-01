import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdUnit from '../components/AdUnit';

export const metadata: Metadata = {
  title: {
    default: 'NEXARA - Your World Updated',
    template: '%s | NEXARA',
  },
  description: 'NEXARA brings you breaking news, global opportunities, scholarships, fellowships, jobs and stories that matter - updated daily.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          .nav-desktop { display: flex !important; }
          .nav-hamburger { display: none !important; }
          @media (max-width: 768px) {
            .nav-desktop { display: none !important; }
            .nav-hamburger { display: flex !important; }
          }
        `}</style>
      </head>
      <body>
        <Navbar />
        {children}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <AdUnit slot="footer-banner" />
        </div>
        <Footer />
      </body>
    </html>
  );
}