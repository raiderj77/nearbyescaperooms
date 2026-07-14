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
          <li><strong>Service and Security Data:</strong> Hosting and security providers may process request metadata such as IP address, browser type, requested page, and timestamp to deliver and protect the Site.</li>
          <li><strong>Optional Tracking:</strong> Google AdSense, Google Analytics, and Microsoft Clarity are not currently enabled.</li>
          <li><strong>Contact Information:</strong> If you contact us, we may collect your name, email address, and message content.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Maintain and improve our website</li>
          <li>Maintain site reliability and prevent abuse</li>
          <li>Respond to inquiries and communications</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Cookies, Analytics, and Advertising</h2>
        <p>
          Google AdSense, Google Analytics, and Microsoft Clarity are not currently enabled. The Site does not load their scripts or set their advertising or analytics cookies. A publisher identifier may remain in ads.txt or public metadata solely for ownership verification.
        </p>
        <p>
          If optional advertising or analytics is enabled later, this policy and any required consent and opt-out controls will be updated first.
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
          If you are a California resident, you may have rights to request access to, correction of, or deletion of personal information, subject to applicable law. We do not sell personal information or currently permit targeted-advertising collection on the Site.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to modify this Privacy Policy at any time. Changes will be effective when posted to the Site. Your continued use of the Site following the posting of changes constitutes your acceptance of those changes.
        </p>

        <h2>9. Maryland Online Data Privacy Act (MODPA) Compliance</h2>
        <p>
          As of April 1, 2026, Nearby Escape Rooms complies with the Maryland Online Data Privacy Act (MODPA). This section outlines your consumer rights under MODPA.
        </p>

        <h3>Your Consumer Rights Under MODPA</h3>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access:</strong> Request what personal data we collect about you and obtain a copy of that data.</li>
          <li><strong>Correction:</strong> Request that we correct any inaccurate or incomplete personal data we maintain about you.</li>
          <li><strong>Deletion:</strong> Request deletion of your personal data that we have collected, subject to certain exceptions.</li>
          <li><strong>Opt-Out of Sale or Targeted Advertising:</strong> Direct us not to sell or share your personal data for targeted advertising purposes. Nearby Escape Rooms does not sell personal data or currently run targeted advertising.</li>
          <li><strong>Data Portability:</strong> Request that we provide your personal data in a portable, machine-readable format.</li>
        </ul>

        <h3>Global Privacy Control (GPC)</h3>
        <p>
          The Site does not currently sell personal data or run targeted advertising. If processing subject to an opt-out is introduced later, we will honor applicable Global Privacy Control signals.
        </p>

        <h3>Data Sales</h3>
        <p>
          Nearby Escape Rooms does not sell personal data or currently share data with advertising partners for targeted advertising.
        </p>

        <h3>How to Exercise Your Rights</h3>
        <p>
          To exercise any of your MODPA rights, please send a request to:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:privacy@nearbyescaperooms.com" style={{ color: "#9b59b6" }}>privacy@nearbyescaperooms.com</a>
        </p>
        <p>
          We will respond to your request within 45 days of receipt. If we cannot fulfill your request, we will explain the reason and provide information about any applicable exceptions.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:contact@nearbyescaperooms.com" style={{ color: "#9b59b6" }}>contact@nearbyescaperooms.com</a>
        </p>

        <div className="last-updated">
          Last Updated: July 13, 2026
        </div>
      </div>
    </>
  );
}
