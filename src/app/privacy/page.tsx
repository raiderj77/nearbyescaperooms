export default function PrivacyPage() {
  return (
    <>
      <style>
        {`
          .page-hero {
            background: linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%);
            padding: 3rem 1rem;
            text-align: center;
            border-bottom: 2px solid #9b59b6;
          }
          .page-hero h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            color: #9b59b6;
          }
          .page-content {
            max-width: 900px;
            margin: 0 auto;
            padding: 3rem 1rem;
          }
          .page-content h2 {
            color: #9b59b6;
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-size: 1.5rem;
          }
          .page-content h3 {
            color: #9b59b6;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            font-size: 1.1rem;
          }
          .page-content p {
            color: #d0d0d0;
            line-height: 1.8;
            margin-bottom: 1rem;
          }
          .page-content ul {
            color: #d0d0d0;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
            line-height: 1.8;
          }
          .page-content li {
            margin-bottom: 0.5rem;
          }
          .last-updated {
            color: #999;
            font-size: 0.9rem;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid #1a1a2e;
          }
        `}
      </style>

      <section className="page-hero">
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us</p>
      </section>

      <div className="page-content">
        <p>
          This Privacy Policy explains how Nearby Escape Rooms ("we", "us", "our", or "the Site") collects, uses, discloses, and safeguards your information when you visit our website at nearbyescaperooms.com.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect information about you in various ways:</p>
        <ul>
          <li><strong>Automatically Collected Information:</strong> We collect certain information automatically when you visit our Site, including your IP address, browser type, operating system, pages visited, and the time and date of your visit.</li>
          <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to enhance your experience and analyze Site usage.</li>
          <li><strong>Google AdSense:</strong> Google AdSense may collect data about your browsing habits to serve personalized advertisements.</li>
          <li><strong>Contact Information:</strong> If you contact us, we may collect your name, email address, and message content.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Maintain and improve our website</li>
          <li>Analyze site usage and performance</li>
          <li>Serve advertisements through Google AdSense</li>
          <li>Respond to inquiries and communications</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Google Analytics and Advertising</h2>
        <p>
          Our Site uses Google Analytics to track visitor behavior and website performance. Google may also use your information for advertising purposes through Google AdSense. You can learn more about Google's privacy practices at <a href="https://policies.google.com/privacy" style={{ color: "#9b59b6" }}>https://policies.google.com/privacy</a>.
        </p>

        <h2>4. Third-Party Links</h2>
        <p>
          Our Site may contain links to third-party websites, including escape room venues and sister directory sites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information from unauthorized access, alteration, and destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us at contact@nearbyescaperooms.com.
        </p>

        <h2>7. CCPA Compliance</h2>
        <p>
          If you are a California resident, you have certain rights under the California Consumer Privacy Act (CCPA). You may request what personal information we collect, delete your data, or opt-out of data sales. We do not sell personal information, but we do allow third-party advertising partners to collect data for targeted advertising purposes.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to modify this Privacy Policy at any time. Changes will be effective when posted to the Site. Your continued use of the Site following the posting of changes constitutes your acceptance of those changes.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:contact@nearbyescaperooms.com" style={{ color: "#9b59b6" }}>contact@nearbyescaperooms.com</a>
        </p>

        <div className="last-updated">
          Last Updated: April 4, 2026
        </div>
      </div>
    </>
  );
}
