import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for NEXARA — important information about the content on our website.',
};

export default function Disclaimer() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '40px', fontWeight: 900, color: '#fff' }}>Site <span style={{ color: '#e63946' }}>Disclaimer</span></h1>
      <p style={{ color: '#555', fontSize: '14px', marginTop: '8px' }}>Effective Date: June 30, 2026 | Last Updated: June 30, 2026</p>

      <p style={{ color: '#999', marginTop: '24px', lineHeight: 1.8 }}>
        The information provided by NEXARA on nexara.com (the "Site") is for general informational and educational purposes only. All information on the Site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
      </p>

      {[
        {
          title: '1. No Professional Advice',
          content: `The content published on NEXARA — including news articles, opportunity listings, scholarship information, job postings, and other materials — does not constitute professional legal, financial, educational, or career advice. Always seek the guidance of a qualified professional before making any decisions based on information found on this Site.`
        },
        {
          title: '2. News and Editorial Content',
          content: `NEXARA publishes news and editorial content for informational purposes. While we strive to ensure accuracy, news stories may evolve rapidly and information may become outdated. We do not guarantee that all news content is complete, current, or error-free. Readers are encouraged to verify information through primary sources before acting on it.`
        },
        {
          title: '3. Opportunities, Scholarships, and Listings',
          content: `NEXARA aggregates and publishes information about scholarships, fellowships, grants, internships, jobs, competitions, and other opportunities. We do not guarantee the accuracy, legitimacy, or availability of any listed opportunity. Deadlines, eligibility requirements, and award amounts are subject to change by the offering organization. Always verify opportunity details directly with the offering institution or organization before applying.

NEXARA is not responsible for any loss, rejection, or damages resulting from reliance on opportunity listings published on this Site.`
        },
        {
          title: '4. External Links Disclaimer',
          content: `The Site may contain links to external websites that are not provided or maintained by NEXARA. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.`
        },
        {
          title: '5. Advertising Disclaimer',
          content: `NEXARA displays third-party advertisements through Google AdSense and may display other sponsored content. These advertisements are clearly distinguished from editorial content. NEXARA does not endorse the products or services advertised. Any transactions between you and advertisers are solely between you and the advertiser.`
        },
        {
          title: '6. Affiliate Disclaimer',
          content: `From time to time, NEXARA may include affiliate links in its content. This means we may earn a small commission if you click through and make a purchase, at no additional cost to you. We only recommend products and services we believe may be of value to our readers. All affiliate relationships are disclosed in accordance with the Federal Trade Commission (FTC) guidelines.`
        },
        {
          title: '7. Fair Use Notice',
          content: `Some content published on NEXARA may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We make such material available for news reporting, commentary, and educational purposes, which constitutes a "fair use" of any such copyrighted material as provided for in Section 107 of the US Copyright Law.`
        },
        {
          title: '8. Errors and Omissions',
          content: `While we take every precaution to ensure the accuracy of information published on the Site, errors and omissions may occur. If you notice an error or inaccuracy, please contact us so we can correct it promptly.`
        },
        {
          title: '9. Limitation of Liability',
          content: `Under no circumstances shall NEXARA be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising from your use of the Site or reliance on any information published on the Site. This limitation applies to the fullest extent permitted by applicable US law.`
        },
        {
          title: '10. Contact Us',
          content: `If you have any questions about this Disclaimer, please contact us at:

NEXARA
United States
Email: nexara@writerswebproduction.com`
        },
      ].map(({ title, content }) => (
        <div key={title} style={{ marginTop: '40px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px', fontWeight: 800 }}>{title}</h2>
          <p style={{ color: '#999', marginTop: '12px', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{content}</p>
        </div>
      ))}
    </main>
  );
}