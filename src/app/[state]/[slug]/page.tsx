import locations from "@/data/locations.json";
import { notFound } from "next/navigation";

export const revalidate = 86400;

export async function generateStaticParams() {
  return locations.map((location) => ({
    state: location.stateSlug,
    slug: location.slug,
  }));
}

interface PageProps {
  params: Promise<{ state: string; slug: string }>;
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { state, slug } = await params;

  const location = locations.find(
    (loc) => loc.stateSlug === state && loc.slug === slug
  );

  if (!location) {
    notFound();
  }

  return (
    <>
      <style>
        {`
          .detail-hero {
            background: linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%);
            padding: 3rem 1rem;
            border-bottom: 2px solid #9b59b6;
          }
          .detail-hero-content {
            max-width: 1200px;
            margin: 0 auto;
          }
          .breadcrumb {
            color: #999;
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }
          .breadcrumb a {
            color: #9b59b6;
            text-decoration: none;
          }
          .breadcrumb a:hover {
            text-decoration: underline;
          }
          .detail-hero h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            color: #9b59b6;
          }
          .location-info {
            color: #999;
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          .detail-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 1rem;
          }
          .content-section {
            margin-bottom: 3rem;
          }
          .content-section h2 {
            color: #9b59b6;
            margin-bottom: 1rem;
            font-size: 1.5rem;
          }
          .content-section h3 {
            color: #9b59b6;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            font-size: 1.2rem;
          }
          .content-section p {
            color: #d0d0d0;
            line-height: 1.8;
            margin-bottom: 1rem;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
          }
          .info-box {
            background: #16161e;
            border-left: 4px solid #9b59b6;
            padding: 1.5rem;
            border-radius: 4px;
          }
          .info-box h3 {
            color: #9b59b6;
            margin-bottom: 0.5rem;
          }
          .info-box p {
            color: #d0d0d0;
            margin: 0;
          }
          .amenities-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
          }
          .amenity-item {
            background: #16161e;
            border: 1px solid #9b59b6;
            color: #9b59b6;
            padding: 1rem;
            border-radius: 4px;
            text-align: center;
          }
          .map-section {
            margin-top: 2rem;
            background: #16161e;
            padding: 2rem;
            border-radius: 8px;
            border: 1px solid #1a1a2e;
          }
        `}
      </style>

      <section className="detail-hero">
        <div className="detail-hero-content">
          <div className="breadcrumb">
            <a href="/">Home</a> / <a href={`/${state}`}>{location.state}</a> /{" "}
            {location.name}
          </div>
          <h1>{location.name}</h1>
          <div className="location-info">
            {location.city}, {location.state} • Located at coordinates:{" "}
            {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
          </div>
        </div>
      </section>

      <div className="detail-content">
        <section className="content-section">
          <h2>About This Escape Room</h2>
          <p>{location.description}</p>
        </section>

        <section className="content-section">
          <h2>Key Information</h2>
          <div className="info-grid">
            <div className="info-box">
              <h3>City</h3>
              <p>{location.city}</p>
            </div>
            <div className="info-box">
              <h3>State</h3>
              <p>{location.state}</p>
            </div>
            <div className="info-box">
              <h3>Type</h3>
              <p>Entertainment Business</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Amenities & Features</h2>
          <div className="amenities-list">
            {location.amenities.map((amenity, idx) => (
              <div key={idx} className="amenity-item">
                {amenity}
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>What to Expect</h2>
          <p>
            When you visit {location.name}, you can expect an immersive escape
            room experience crafted with attention to detail and puzzle design.
            Our professional game masters will guide you through the rules and
            provide hints when needed to ensure you have an unforgettable
            adventure.
          </p>
          <h3>Before Your Visit</h3>
          <p>
            Plan to arrive 10-15 minutes early for check-in. Gather your team,
            wear comfortable clothes, and bring an open mind. Review any
            specific rules or restrictions provided by the venue. Most escape
            rooms accommodate groups of 2-8 people and require a deposit or full
            payment in advance.
          </p>
          <h3>During Your Adventure</h3>
          <p>
            You'll be immersed in a themed environment with puzzles, hidden
            clues, and interactive elements. Communication with your team is
            essential—discuss observations and work together to solve puzzles.
            Don't hesitate to ask for hints if you're stuck; the game master
            wants you to succeed and have fun. Most sessions last 60-90 minutes,
            depending on the room.
          </p>
          <h3>Pricing & Booking</h3>
          <p>
            Escape room experiences typically cost $20-40 per person. Group
            discounts and team building packages are often available. Contact
            the venue directly or visit their website to check availability,
            book your session, and learn about any special offers or promotions.
          </p>
        </section>

        <section className="map-section">
          <h2 style={{ color: "#9b59b6", marginBottom: "1rem" }}>Location</h2>
          <p style={{ color: "#d0d0d0", marginBottom: "1rem" }}>
            {location.name} is located in {location.city}, {location.state}.
            Use the coordinates below to find directions or call ahead to
            confirm hours and availability.
          </p>
          <p style={{ color: "#999" }}>
            <strong>Coordinates:</strong> {location.lat.toFixed(6)},{" "}
            {location.lng.toFixed(6)}
          </p>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EntertainmentBusiness",
            name: location.name,
            description: location.description,
            address: {
              "@type": "PostalAddress",
              addressLocality: location.city,
              addressRegion: location.state,
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: location.lat,
              longitude: location.lng,
            },
            url: `https://nearbyescaperooms.com/${location.stateSlug}/${location.slug}`,
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://nearbyescaperooms.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: location.state,
                item: `https://nearbyescaperooms.com/${state}`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: location.name,
                item: `https://nearbyescaperooms.com/${state}/${slug}`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
