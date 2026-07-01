import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdUnit from '../components/AdUnit';
import GoogleAnalytics from '../components/GoogleAnalytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.writerswebproduction.com'),
  title: {
    default: 'NEXARA - Your World Updated',
    template: '%s | NEXARA',
  },
  description: 'NEXARA brings you breaking news, global opportunities, scholarships, fellowships, jobs and stories that matter - updated daily.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NEXARA - Your World Updated',
    description: 'NEXARA brings you breaking news, global opportunities, scholarships, fellowships, jobs and stories that matter - updated daily.',
    url: 'https://www.writerswebproduction.com',
    siteName: 'NEXARA',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXARA - Your World Updated',
    description: 'NEXARA brings you breaking news, global opportunities, scholarships, fellowships, jobs and stories that matter - updated daily.',
  },
  verification: {
    google: 'fgELsB8m2_u43PPn6zYICAYdt100oQlpOSzQ-YdKEb8',
  },
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
        <GoogleAnalytics />
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