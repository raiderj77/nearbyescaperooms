export default function TermsPage() {
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
        <h1>Terms of Service</h1>
        <p>Please read these terms carefully before using our site</p>
      </section>

      <div className="page-content">
        <p>
          Welcome to Nearby Escape Rooms ("Site"). These Terms of Service govern your use of our website and services. By accessing and using this Site, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2>1. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on the Nearby Escape Rooms Site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul>
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display</li>
          <li>Attempt to decompile or reverse engineer any software contained on the Site</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          <li>Engage in any automated data collection or web scraping</li>
        </ul>

        <h2>2. Disclaimer of Warranties</h2>
        <p>
          The materials on the Nearby Escape Rooms Site are provided on an "as is" basis. The Site makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2>3. Limitations of Liability</h2>
        <p>
          In no event shall Nearby Escape Rooms or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Nearby Escape Rooms Site, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h2>4. Accuracy of Materials</h2>
        <p>
          The materials appearing on the Nearby Escape Rooms Site could include technical, typographical, or photographic errors. The Site does not warrant that any of the materials on our Site are accurate, complete, or current. The Site may make changes to the materials contained on its Site at any time without notice.
        </p>

        <h2>5. Links to Third-Party Sites</h2>
        <p>
          The Nearby Escape Rooms Site may contain links to third-party websites, including escape room venues and directory partners. These external sites are not under our control, and we are not responsible for the contents of any linked site or any link contained in a linked site, or any changes or updates to such sites. We provide links to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the site or any association with its operators.
        </p>

        <h2>6. Modifications to Terms</h2>
        <p>
          The Site may revise these terms of service for its Site at any time without notice. By using this Site, you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>

        <h2>8. User-Generated Content</h2>
        <p>
          If you submit any content, feedback, or suggestions to the Site, you grant Nearby Escape Rooms a worldwide, non-exclusive, royalty-free license to use, modify, and distribute such content without compensation or attribution.
        </p>

        <h2>9. Prohibited Conduct</h2>
        <p>
          You agree not to engage in any of the following conduct:
        </p>
        <ul>
          <li>Harassing, threatening, or intimidating others</li>
          <li>Posting false, misleading, or defamatory content</li>
          <li>Attempting to gain unauthorized access to the Site</li>
          <li>Interfering with the Site's operation</li>
          <li>Violating any applicable laws or regulations</li>
        </ul>

        <h2>10. Contact Information</h2>
        <p>
          If you have questions about these Terms of Service, please contact us at:
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
