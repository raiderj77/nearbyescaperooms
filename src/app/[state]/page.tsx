import locations from "@/data/locations.json";

export const revalidate = 86400;

export async function generateStaticParams() {
  const states = [...new Set(locations.map((loc) => loc.stateSlug))];
  return states.map((stateSlug) => ({
    state: stateSlug,
  }));
}

interface PageProps {
  params: Promise<{ state: string }>;
}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params;

  const stateLocations = locations.filter((loc) => loc.stateSlug === state);
  const stateName =
    stateLocations.length > 0 ? stateLocations[0].state : "Unknown State";

  return (
    <>
      <style>
        {`
          .state-hero {
            background: linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%);
            padding: 3rem 1rem;
            text-align: center;
            border-bottom: 2px solid #9b59b6;
          }
          .state-hero h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            color: #9b59b6;
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
          .rooms-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            padding: 3rem 1rem;
            max-width: 1200px;
            margin: 0 auto;
          }
          .room-card {
            background: #16161e;
            border: 1px solid #1a1a2e;
            border-radius: 8px;
            padding: 1.5rem;
            transition: all 0.3s ease;
          }
          .room-card:hover {
            border-color: #9b59b6;
            transform: translateY(-5px);
          }
          .room-card a {
            text-decoration: none;
            color: inherit;
          }
          .room-card h3 {
            color: #9b59b6;
            margin-bottom: 0.5rem;
          }
          .room-location {
            font-size: 0.9rem;
            color: #999;
            margin-bottom: 1rem;
          }
          .room-description {
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
          .no-results {
            text-align: center;
            padding: 3rem 1rem;
            color: #999;
          }
        `}
      </style>

      <section className="state-hero">
        <div className="breadcrumb">
          <a href="/">Home</a> / {stateName}
        </div>
        <h1>Escape Rooms in {stateName}</h1>
        <p>Explore thrilling escape room adventures in {stateName}</p>
      </section>

      {stateLocations.length > 0 ? (
        <div className="rooms-grid">
          {stateLocations.map((location) => (
            <div key={location.slug} className="room-card">
              <a href={`/${location.stateSlug}/${location.slug}`}>
                <h3>{location.name}</h3>
              </a>
              <div className="room-location">{location.city}</div>
              <div className="room-description">{location.description}</div>
              <div className="amenities">
                {location.amenities.map((amenity, idx) => (
                  <span key={idx} className="amenity">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No escape rooms found in {stateName}. Check back soon!</p>
        </div>
      )}

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
                name: stateName,
                item: `https://nearbyescaperooms.com/${state}`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
