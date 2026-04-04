import locations from "@/data/locations.json";

export const dynamic = "force-static";

export default function Home() {
  const featuredLocations = locations.slice(0, 6);

  return (
    <>
      <style>
        {`
          .hero {
            background: linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%);
            padding: 4rem 1rem;
            text-align: center;
            border-bottom: 2px solid #9b59b6;
          }
          .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: #9b59b6;
          }
          .hero p {
            font-size: 1.2rem;
            color: #b0b0b0;
            max-width: 600px;
            margin: 0 auto;
          }
          .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            padding: 3rem 1rem;
            max-width: 1200px;
            margin: 0 auto;
          }
          .card {
            background: #16161e;
            border: 1px solid #1a1a2e;
            border-radius: 8px;
            padding: 1.5rem;
            transition: all 0.3s ease;
          }
          .card:hover {
            border-color: #9b59b6;
            transform: translateY(-5px);
          }
          .card h3 {
            color: #9b59b6;
            margin-bottom: 0.5rem;
          }
          .card-location {
            font-size: 0.9rem;
            color: #999;
            margin-bottom: 1rem;
          }
          .card-description {
            color: #d0d0d0;
            font-size: 0.95rem;
            margin-bottom: 1rem;
          }
          .amenities {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          .amenity {
            background: #1a1a2e;
            color: #9b59b6;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            border: 1px solid #9b59b6;
          }
          .content-section {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
          }
          .content-section h2 {
            color: #9b59b6;
            margin-bottom: 1rem;
            font-size: 1.8rem;
          }
          .content-section h3 {
            color: #9b59b6;
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
          }
          .content-section p {
            color: #d0d0d0;
            margin-bottom: 1rem;
            line-height: 1.8;
          }
          .faq-item {
            background: #16161e;
            border-left: 4px solid #9b59b6;
            padding: 1.5rem;
            margin-bottom: 1rem;
            border-radius: 4px;
          }
          .faq-item h4 {
            color: #9b59b6;
            margin-bottom: 0.5rem;
          }
          .faq-item p {
            color: #d0d0d0;
            margin: 0;
          }
        `}
      </style>

      <section className="hero">
        <h1>Find Escape Rooms Near You</h1>
        <p>Discover thrilling puzzle adventures, immersive mystery experiences, and team building challenges across America</p>
      </section>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
        <h2 style={{ color: "#9b59b6", marginBottom: "1rem", textAlign: "center" }}>Featured Escape Rooms</h2>
        <div className="cards-grid">
          {featuredLocations.map((location) => (
            <a
              key={location.slug}
              href={`/${location.stateSlug}/${location.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <h3>{location.name}</h3>
                <div className="card-location">
                  {location.city}, {location.state}
                </div>
                <div className="card-description">{location.description}</div>
                <div className="amenities">
                  {location.amenities.map((amenity, idx) => (
                    <span key={idx} className="amenity">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="content-section">
        <h2>Discover Your Next Escape Room Adventure</h2>

        <p>
          Escape rooms have become one of America's favorite entertainment experiences, combining puzzle-solving, teamwork, and immersive storytelling into thrilling 60-90 minute adventures. Whether you're a first-timer or a seasoned puzzler, our directory connects you with the best escape rooms in your area.
        </p>

        <h3>What Are Escape Rooms?</h3>
        <p>
          An escape room is a physical adventure game where participants are "locked" in a themed room and must solve a series of puzzles and riddles to escape within a set time limit. These interactive experiences blend mystery, strategy, and creativity, challenging groups to work together under pressure. Each room tells a unique story through intricate set design, carefully crafted puzzles, and atmospheric elements that transport you to another world.
        </p>

        <h3>Types of Escape Rooms</h3>
        <p>
          Escape rooms come in many flavors to suit different interests and comfort levels. Horror-themed rooms feature scary atmospheres and psychological puzzles, perfect for thrill-seekers. Adventure and exploration rooms transport you to jungles, temples, and ancient civilizations. Mystery rooms challenge you to solve crimes or uncover secrets. Family-friendly options are designed for younger participants while maintaining challenge and fun. Science fiction and fantasy rooms offer futuristic or magical settings with high-tech puzzles.
        </p>

        <h3>How to Choose the Right Escape Room</h3>
        <p>
          When selecting an escape room, consider your group's experience level and interests. Beginners should start with introductory rooms, while experienced players might prefer expert-difficulty challenges. Think about your team's size—most rooms accommodate 2-8 players, and group dynamics significantly affect performance. Review room themes carefully; some cater to specific interests like horror, history, or spy missions. Check amenities like private bookings, group discounts, and available time slots. Read reviews to understand puzzle difficulty, atmosphere quality, and game master professionalism.
        </p>

        <h3>Tips for First-Time Escape Room Players</h3>
        <p>
          Communication is key—constantly share observations and puzzle solutions with your team. Avoid fixating on single puzzles; if stuck for more than a minute or two, ask for hints (most venues offer them). Look at everything; useful clues are hidden in plain sight—check under furniture, behind decorations, and in dark corners. Work systematically rather than randomly; examine all items before trying them on locks or puzzles. Keep a notepad handy to track clues, combinations, and patterns. Don't be afraid to use hints; experienced game masters know exactly when you need help to maximize fun. Finally, enjoy the experience—the goal is teamwork and entertainment, not perfection.
        </p>

        <h3>Team Size and Recommendations</h3>
        <p>
          For escape room success, consider your team composition carefully. Groups of 2-3 work best for introductory rooms but may struggle with complex puzzles requiring multiple simultaneous solutions. Teams of 4-6 are ideal for most standard escape rooms, providing enough hands for parallel puzzle-solving while maintaining team cohesion. Larger groups of 7-8 work well for team building and can tackle the most complex rooms, though coordination becomes more challenging. Very small groups may find some rooms too demanding, while overly large groups sometimes experience idle waiting. Most venues recommend reserving slightly smaller teams and adding members to a waitlist rather than overloading single rooms.
        </p>

        <h3>Frequently Asked Questions</h3>
        <div className="faq-item">
          <h4>Are escape rooms suitable for kids?</h4>
          <p>
            Many venues offer family-friendly escape rooms designed for children ages 8-12. These feature age-appropriate puzzles and themes while maintaining fun and challenge. Always check the age recommendations and consider your child's maturity level and puzzle-solving skills.
          </p>
        </div>

        <div className="faq-item">
          <h4>What if our team can't escape?</h4>
          <p>
            Not escaping is more common than you might think! Professional game masters always ensure entertainment value whether you escape or not. Most venues will offer hints throughout the experience to keep you engaged and progressing through the story.
          </p>
        </div>

        <div className="faq-item">
          <h4>How much do escape rooms cost?</h4>
          <p>
            Typical escape room pricing ranges from $20-40 per person depending on location, venue quality, and complexity. Many venues offer group discounts for larger teams and team building packages. Check individual venue listings for exact pricing.
          </p>
        </div>

        <div className="faq-item">
          <h4>Can I play in business casual clothes?</h4>
          <p>
            Absolutely! Wear comfortable, movable clothing. Some rooms may require removal of jewelry or have specific recommendations to avoid damage, but standard business casual clothing is perfectly fine for most escape rooms.
          </p>
        </div>

        <div className="faq-item">
          <h4>Do I need special skills to play?</h4>
          <p>
            Not at all! Escape rooms are designed for anyone. You don't need puzzle expertise or special knowledge—just an open mind and willingness to communicate with your team. Curiosity and teamwork matter far more than individual skill.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are escape rooms suitable for kids?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many venues offer family-friendly escape rooms designed for children ages 8-12. These feature age-appropriate puzzles and themes while maintaining fun and challenge.",
                },
              },
              {
                "@type": "Question",
                name: "What if our team can't escape?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not escaping is more common than you might think! Professional game masters always ensure entertainment value whether you escape or not.",
                },
              },
              {
                "@type": "Question",
                name: "How much do escape rooms cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Typical escape room pricing ranges from $20-40 per person depending on location, venue quality, and complexity.",
                },
              },
              {
                "@type": "Question",
                name: "Can I play in business casual clothes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely! Wear comfortable, movable clothing. Standard business casual clothing is perfectly fine for most escape rooms.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need special skills to play?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not at all! Escape rooms are designed for anyone. You don't need puzzle expertise or special knowledge.",
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nearby Escape Rooms",
            url: "https://nearbyescaperooms.com",
            logo: "https://nearbyescaperooms.com/logo.png",
            description: "Directory of escape rooms across the United States",
            sameAs: ["https://www.facebook.com/nearbyescaperooms"],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Nearby Escape Rooms",
            url: "https://nearbyescaperooms.com",
            description:
              "Find escape rooms near you. Browse local puzzle rooms and adventure experiences across the US.",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://nearbyescaperooms.com/{state}",
              },
              query_input: "required name=state",
            },
          }),
        }}
      />
    </>
  );
}
