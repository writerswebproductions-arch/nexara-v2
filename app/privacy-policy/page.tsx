import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for NEXARA — how we collect, use, and protect your information.',
};

export default function PrivacyPolicy() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '40px', fontWeight: 900, color: '#fff' }}>Privacy <span style={{ color: '#e63946' }}>Policy</span></h1>
      <p style={{ color: '#555', fontSize: '14px', marginTop: '8px' }}>Effective Date: June 30, 2026 | Last Updated: June 30, 2026</p>

      <p style={{ color: '#999', marginTop: '24px', lineHeight: 1.8 }}>
        NEXARA ("we," "our," or "us") operates the website nexara.com (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.
      </p>

      {[
        {
          title: '1. Information We Collect',
          content: `We may collect information about you in the following ways:

- Automatically Collected Data: When you visit the Site, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and pages viewed. This is collected via cookies and similar tracking technologies.

- Information You Provide: If you contact us via our contact form or subscribe to our newsletter, we collect your name and email address.

- Third-Party Analytics: We use Google Analytics to understand how visitors interact with our Site. Google Analytics collects information such as how often users visit the Site, what pages they visit, and what other sites they used prior to coming to our Site.`
        },
        {
          title: '2. Use of Your Information',
          content: `We use the information we collect to:
- Operate and maintain the Site
- Improve, personalize, and expand the Site
- Understand and analyze how you use the Site
- Send you emails and newsletters (only if you opted in)
- Display relevant advertisements via Google AdSense
- Comply with applicable laws and regulations`
        },
        {
          title: '3. Cookies and Tracking Technologies',
          content: `We use cookies and similar tracking technologies to track activity on our Site. Cookies are small data files stored on your device.

We use the following types of cookies:
- Essential Cookies: Necessary for the Site to function properly.
- Analytics Cookies: Used by Google Analytics to collect information about how visitors use the Site.
- Advertising Cookies: Used by Google AdSense to serve personalized advertisements based on your interests and browsing history.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of the Site may not function properly.`
        },
        {
          title: '4. Google AdSense and Advertising',
          content: `We use Google AdSense to display advertisements on our Site. Google AdSense uses cookies to serve ads based on your prior visits to our Site and other sites on the Internet. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our Site and/or other sites on the Internet.

You may opt out of personalized advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads. You can also opt out of third-party vendor use of cookies for personalized advertising by visiting www.aboutads.info.`
        },
        {
          title: '5. Third-Party Services',
          content: `Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.

We may share your information with third parties only in the following circumstances:
- With service providers who assist us in operating the Site
- If required by law or to protect our rights
- In connection with a business transfer or acquisition`
        },
        {
          title: '6. Children\'s Privacy',
          content: `Our Site is not directed to children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us and we will delete such information from our records.`
        },
        {
          title: '7. Your Rights (California Residents — CCPA)',
          content: `If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):
- The right to know what personal information we collect, use, disclose, or sell
- The right to request deletion of your personal information
- The right to opt out of the sale of your personal information
- The right to non-discrimination for exercising your privacy rights

To exercise any of these rights, please contact us at the email below.`
        },
        {
          title: '8. Data Security',
          content: `We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`
        },
        {
          title: '9. Changes to This Privacy Policy',
          content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date. You are advised to review this Privacy Policy periodically for any changes.`
        },
        {
          title: '10. Contact Us',
          content: `If you have any questions about this Privacy Policy, please contact us at:

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