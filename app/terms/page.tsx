import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for NEXARA — the rules and guidelines for using our website.',
};

export default function TermsOfUse() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '40px', fontWeight: 900, color: '#fff' }}>Terms of <span style={{ color: '#e63946' }}>Use</span></h1>
      <p style={{ color: '#555', fontSize: '14px', marginTop: '8px' }}>Effective Date: June 30, 2026 | Last Updated: June 30, 2026</p>

      <p style={{ color: '#999', marginTop: '24px', lineHeight: 1.8 }}>
        Welcome to NEXARA. By accessing or using our website at nexara.com (the "Site"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the Site. NEXARA is operated from the United States.
      </p>

      {[
        {
          title: '1. Acceptance of Terms',
          content: `By accessing and using this Site, you accept and agree to be bound by these Terms and our Privacy Policy. We reserve the right to modify these Terms at any time. Your continued use of the Site after any changes constitutes your acceptance of the new Terms.`
        },
        {
          title: '2. Use of the Site',
          content: `You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others. You must not:
- Use the Site in any way that violates applicable US federal, state, or local laws or regulations
- Reproduce, duplicate, copy, or resell any part of the Site without express written permission
- Transmit any unsolicited or unauthorized advertising or promotional material
- Attempt to gain unauthorized access to any part of the Site or its related systems
- Use automated tools to scrape, crawl, or extract data from the Site without permission`
        },
        {
          title: '3. Intellectual Property',
          content: `All content on the Site, including but not limited to text, graphics, logos, images, and software, is the property of NEXARA or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, or create derivative works from any content on this Site without our express written permission.`
        },
        {
          title: '4. User-Generated Content',
          content: `If you submit any content to the Site (such as through our contact form or comments), you grant NEXARA a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute that content. You represent that you own or have the right to submit such content and that it does not violate any third-party rights.`
        },
        {
          title: '5. Third-Party Links and Advertising',
          content: `The Site may contain links to third-party websites and display advertisements served by third parties including Google AdSense. We are not responsible for the content, privacy policies, or practices of any third-party sites or advertisers. We encourage you to review the terms and privacy policies of any third-party sites you visit.`
        },
        {
          title: '6. Disclaimer of Warranties',
          content: `THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEXARA DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. TO THE FULLEST EXTENT PERMITTED BY US LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED.`
        },
        {
          title: '7. Limitation of Liability',
          content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE US LAW, NEXARA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE OR THESE TERMS, EVEN IF NEXARA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.`
        },
        {
          title: '8. Indemnification',
          content: `You agree to indemnify, defend, and hold harmless NEXARA and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Site or your violation of these Terms.`
        },
        {
          title: '9. Governing Law',
          content: `These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which NEXARA operates, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in the United States.`
        },
        {
          title: '10. Termination',
          content: `We reserve the right to terminate or suspend your access to the Site at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, third parties, or for any other reason.`
        },
        {
          title: '11. Contact Us',
          content: `If you have any questions about these Terms of Use, please contact us at:

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