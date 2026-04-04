export default function AboutPage() {
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
        `}
      </style>

      <section className="page-hero">
        <h1>About Nearby Escape Rooms</h1>
        <p>Your guide to the best escape room experiences across America</p>
      </section>

      <div className="page-content">
        <p>
          Nearby Escape Rooms is a comprehensive directory dedicated to helping
          puzzle enthusiasts, adventure seekers, and teams find the best escape
          room experiences across the United States. We've created this resource
          to connect people with thrilling, immersive entertainment that
          combines mystery, teamwork, and creative problem-solving.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to make it easy for anyone to discover and experience
          quality escape rooms in their area. We believe escape rooms are more
          than just entertainment—they're opportunities for teams to bond, for
          individuals to test their problem-solving skills, and for families to
          create unforgettable memories together.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li>Comprehensive directory of escape rooms across all US states</li>
          <li>
            Detailed information about room themes, amenities, and difficulty
            levels
          </li>
          <li>
            Helpful guides for first-timers and experienced puzzle solvers
          </li>
          <li>
            Practical tips for choosing the right escape room for your group
          </li>
          <li>State-by-state browse capability for easy location-based search</li>
        </ul>

        <h2>Our Community</h2>
        <p>
          Escape rooms have become a vibrant part of American entertainment and
          team-building culture. From small mom-and-pop operations to large
          commercial franchises, escape rooms offer diverse experiences for
          every preference and skill level. Our directory aims to highlight and
          celebrate these businesses while helping customers make informed
          choices about their next adventure.
        </p>

        <h2>How We Curate</h2>
        <p>
          We carefully select and feature escape rooms based on multiple factors
          including customer reputation, venue quality, puzzle design
          creativity, and the professionalism of their game masters. Each
          listing includes essential information like location, available rooms,
          amenities, and tips for first-time players.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have questions about a specific escape room or want to suggest a
          venue for our directory? We'd love to hear from you! Visit our{" "}
          <a href="/contact">contact page</a> to get in touch.
        </p>
      </div>
    </>
  );
}
