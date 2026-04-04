export default function ContactPage() {
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
            margin-bottom: 1rem;
            font-size: 1.5rem;
          }
          .page-content p {
            color: #d0d0d0;
            line-height: 1.8;
            margin-bottom: 1rem;
          }
          .contact-box {
            background: #16161e;
            border-left: 4px solid #9b59b6;
            padding: 2rem;
            border-radius: 4px;
            margin: 2rem 0;
          }
          .contact-box h3 {
            color: #9b59b6;
            margin-bottom: 0.5rem;
          }
          .contact-box p {
            color: #d0d0d0;
            margin: 0;
          }
          .email-link {
            color: #9b59b6;
            text-decoration: none;
            word-break: break-all;
          }
          .email-link:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <section className="page-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with the Nearby Escape Rooms team</p>
      </section>

      <div className="page-content">
        <p>
          Have questions, suggestions, or want to share your feedback about
          escape rooms you've visited? We'd love to hear from you! Whether
          you're an escape room enthusiast, a venue owner, or someone with a
          great tip to share, feel free to reach out.
        </p>

        <h2>Get In Touch</h2>
        <div className="contact-box">
          <h3>Email</h3>
          <p>
            <a href="mailto:contact@nearbyescaperooms.com" className="email-link">
              contact@nearbyescaperooms.com
            </a>
          </p>
        </div>

        <h2>What We'd Like to Hear About</h2>
        <p>
          <strong>Suggestions for venue additions:</strong> Know an amazing
          escape room we should feature? Let us know the venue name, location,
          and why you think it deserves to be in our directory.
        </p>

        <p>
          <strong>Corrections or updates:</strong> If you notice outdated
          information on any listing, please let us know so we can keep our
          directory current and accurate.
        </p>

        <p>
          <strong>Your experiences:</strong> Share your escape room stories and
          adventures. We love hearing about teams that conquered challenging
          rooms or discovered new favorites.
        </p>

        <p>
          <strong>Questions and feedback:</strong> Have questions about our
          directory, need advice on choosing an escape room, or have other
          feedback? We're here to help.
        </p>

        <p style={{ marginTop: "2rem", fontStyle: "italic", color: "#999" }}>
          Note: While we appreciate all inquiries, we may take some time to
          respond depending on volume. We make our best effort to review all
          suggestions for new venues and ensure our listings remain accurate and
          up-to-date.
        </p>
      </div>
    </>
  );
}
