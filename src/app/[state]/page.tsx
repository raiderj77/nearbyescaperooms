/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

function getMapboxImage(lat: number, lng: number, width = 800, height = 500): string {
  return `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/${lng},${lat},16,0/${width}x${height}?access_token=${MAPBOX_TOKEN}`;
}

function getEscapeRoomPreview(d: { name: string; state: string; city: string; amenities: string[]; description: string }): string {
  const amenityCount = d.amenities.length;
  const location = d.city ? `${d.city}, ${d.state}` : d.state;
  if (amenityCount >= 2) {
    return `Escape room venue in ${location} with ${d.amenities.slice(0, 2).join(' and ').toLowerCase()}.`;
  }
  return `Escape room experience in ${location}. Book your adventure today.`;
}

export const revalidate = 86400;

const stateList = [
  { name: 'Alabama', slug: 'alabama' }, { name: 'Alaska', slug: 'alaska' },
  { name: 'Arizona', slug: 'arizona' }, { name: 'Arkansas', slug: 'arkansas' },
  { name: 'California', slug: 'california' }, { name: 'Colorado', slug: 'colorado' },
  { name: 'Connecticut', slug: 'connecticut' }, { name: 'Delaware', slug: 'delaware' },
  { name: 'Florida', slug: 'florida' }, { name: 'Georgia', slug: 'georgia' },
  { name: 'Hawaii', slug: 'hawaii' }, { name: 'Idaho', slug: 'idaho' },
  { name: 'Illinois', slug: 'illinois' }, { name: 'Indiana', slug: 'indiana' },
  { name: 'Iowa', slug: 'iowa' }, { name: 'Kansas', slug: 'kansas' },
  { name: 'Kentucky', slug: 'kentucky' }, { name: 'Louisiana', slug: 'louisiana' },
  { name: 'Maine', slug: 'maine' }, { name: 'Maryland', slug: 'maryland' },
  { name: 'Massachusetts', slug: 'massachusetts' }, { name: 'Michigan', slug: 'michigan' },
  { name: 'Minnesota', slug: 'minnesota' }, { name: 'Mississippi', slug: 'mississippi' },
  { name: 'Missouri', slug: 'missouri' }, { name: 'Montana', slug: 'montana' },
  { name: 'Nebraska', slug: 'nebraska' }, { name: 'Nevada', slug: 'nevada' },
  { name: 'New Hampshire', slug: 'new-hampshire' }, { name: 'New Jersey', slug: 'new-jersey' },
  { name: 'New Mexico', slug: 'new-mexico' }, { name: 'New York', slug: 'new-york' },
  { name: 'North Carolina', slug: 'north-carolina' }, { name: 'North Dakota', slug: 'north-dakota' },
  { name: 'Ohio', slug: 'ohio' }, { name: 'Oklahoma', slug: 'oklahoma' },
  { name: 'Oregon', slug: 'oregon' }, { name: 'Pennsylvania', slug: 'pennsylvania' },
  { name: 'Rhode Island', slug: 'rhode-island' }, { name: 'South Carolina', slug: 'south-carolina' },
  { name: 'South Dakota', slug: 'south-dakota' }, { name: 'Tennessee', slug: 'tennessee' },
  { name: 'Texas', slug: 'texas' }, { name: 'Utah', slug: 'utah' },
  { name: 'Vermont', slug: 'vermont' }, { name: 'Virginia', slug: 'virginia' },
  { name: 'Washington', slug: 'washington' }, { name: 'West Virginia', slug: 'west-virginia' },
  { name: 'Wisconsin', slug: 'wisconsin' }, { name: 'Wyoming', slug: 'wyoming' },
];

function getStateName(slug: string) {
  return stateList.find((s) => s.slug === slug)?.name ?? slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
}

export function generateStaticParams() {
  return stateList.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const stateName = getStateName(state);
  return {
    title: `Escape Rooms in ${stateName}`,
    description: `Find the best escape rooms in ${stateName}. Puzzle adventures, mystery experiences, and team challenges with booking details.`,
    alternates: { canonical: `https://nearbyescaperooms.com/${state}` },
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const stateName = getStateName(state);
  const spots = locations.filter((l) => l.stateSlug === state);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BreadcrumbList',
        itemListElement:[
          { '@type':'ListItem',position:1,name:'Home',item:'https://nearbyescaperooms.com'},
          { '@type':'ListItem',position:2,name:`Escape Rooms in ${stateName}`,item:`https://nearbyescaperooms.com/${state}`},
        ],
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(160deg, var(--void) 0%, #0f0010 60%, #1a0005 100%)', overflow: 'hidden', padding: '4rem 1.5rem 3.5rem' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 600px 300px at 10% 50%, rgba(192,25,43,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--crimson)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/" style={{ color: 'var(--gold)', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none' }}>← All States</Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4.5vw,3.2rem)', color: 'var(--white)', marginBottom: '0.75rem', letterSpacing: '0.08em', fontWeight: 900 }}>
            ESCAPE ROOMS IN <span style={{ color: 'var(--crimson)', textShadow: '0 0 30px rgba(192,25,43,0.4)' }}>{stateName.toUpperCase()}</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="chip chip-crimson">{spots.length} {spots.length===1?'Room':'Rooms'} Listed</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>Puzzles &amp; mystery adventures</span>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Grid */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container">
          {spots.length > 0 ? (
            <div className="grid-3">
              {spots.map((spot, i) => (
                <Link key={spot.slug} href={`/${state}/${spot.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="card">
                    <img src={getMapboxImage(spot.lat ?? 0, spot.lng ?? 0)} alt={spot.name} className="card-img" loading="lazy" width={800} height={500} />
                    <div className="card-body">
                      <div className="card-meta"><span>📍</span><span>{spot.city ? `${spot.city}, ` : ''}{spot.state}</span></div>
                      <h2 className="card-title">{spot.name}</h2>
                      <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>{getEscapeRoomPreview(spot)}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {spot.amenities.slice(0,3).map((a) => <span key={a} className="chip">{a}</span>)}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '5rem 2rem', background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)' }}>
              <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔐</p>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--void)', marginBottom: '0.75rem', fontSize: '1.8rem', letterSpacing: '0.06em' }}>COMING SOON</h2>
              <p style={{ color: 'var(--fog)', fontFamily: 'var(--font-body)' }}>{"We're adding escape rooms in "}{stateName}{" — check back soon!"}</p>
              <Link href="/" className="btn btn-crimson" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>Browse Other States</Link>
            </div>
          )}
        </div>
      </section>

      {/* State info */}
      <section style={{ background: 'var(--parchment)', borderTop: '1px solid rgba(192,25,43,0.08)', padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', color: 'var(--void)', marginBottom: '1rem', letterSpacing: '0.06em' }}>ESCAPE ROOMS IN {stateName.toUpperCase()}</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1.1rem', color: '#445' }}>
            {stateName} has a thriving escape room scene ranging from small independent venues with hand-crafted puzzles to large entertainment centers with multiple themed rooms. Whether you prefer horror, mystery, adventure, or family-friendly themes, you'll find options here.
          </p>
          <p style={{ lineHeight: 1.85, color: '#445' }}>
            Most venues require advance booking, especially on weekends. Group sizes typically range from 2 to 8 players. Check each venue's website for current availability, pricing, and any age restrictions before your visit.
          </p>
        </div>
      </section>
    </>
  );
}
