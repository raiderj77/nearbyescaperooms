/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Nearby Escape Rooms — Find Escape Room Adventures Across America',
  description: 'Find the best escape rooms near you. Puzzle adventures, mystery experiences, and team challenges across all 50 states.',
};

const ALL_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
  'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
  'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

const IMG_KEYWORDS = ['escape+room','puzzle+room','mystery+room','adventure+room','lock+puzzle','mystery+door','thriller+room','secret+room'];

export default function Home() {
  const featured = locations.slice(0, 6);
  const statesWithData = Array.from(new Set(locations.map((l) => l.state))).length;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebSite',url:'https://nearbyescaperooms.com',
        name:'Nearby Escape Rooms',
        potentialAction:{'@type':'SearchAction',target:{'@type':'EntryPoint',urlTemplate:'https://nearbyescaperooms.com/search?q={search_term_string}'},'query-input':'required name=search_term_string'},
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(160deg, var(--void) 0%, #0f0010 50%, #1a0005 100%)', overflow: 'hidden', padding: '7rem 1.5rem 8rem' }}>
        {/* Particle/fog effect */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 600px 400px at 20% 50%, rgba(192,25,43,0.06) 0%, transparent 70%), radial-gradient(ellipse 400px 300px at 80% 30%, rgba(201,162,39,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Keyhole silhouette divider */}
        <div aria-hidden style={{ position: 'absolute', top: '10%', right: '8%', width: '120px', height: '160px', background: 'radial-gradient(ellipse 60px 50px at 50% 35%, rgba(192,25,43,0.08) 0%, transparent 100%), linear-gradient(to bottom, transparent 55%, rgba(192,25,43,0.06) 55%)', pointerEvents: 'none', opacity: 0.6 }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="anim-fade-up" style={{ display: 'inline-block', color: 'var(--gold)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontFamily: 'var(--font-body)', background: 'rgba(201,162,39,0.1)', padding: '0.4rem 1.2rem', borderRadius: '2px', border: '1px solid rgba(201,162,39,0.25)' }}>
            🔐 Escape Room Directory
          </p>
          <h1 className="anim-fade-up anim-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5.5vw,3.8rem)', color: 'var(--white)', fontWeight: 900, marginBottom: '0.5rem', lineHeight: 1.05, letterSpacing: '0.08em' }}>
            FIND YOUR NEXT
          </h1>
          <h1 className="anim-fade-up anim-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5.5vw,3.8rem)', color: 'var(--crimson)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.05, letterSpacing: '0.08em', textShadow: '0 0 40px rgba(192,25,43,0.5)' }}>
            ESCAPE ADVENTURE
          </h1>
          <div className="ornament anim-fade-up anim-delay-2" style={{ maxWidth: '300px', margin: '0 auto 1.25rem' }}>MYSTERY AWAITS</div>
          <p className="anim-fade-up anim-delay-2" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2.75rem', maxWidth: '480px', margin: '0 auto 2.75rem', fontFamily: 'var(--font-body)', lineHeight: 1.65 }}>
            Puzzle rooms, mystery experiences &amp; team challenges — {locations.length}+ escape rooms across {statesWithData} states.
          </p>
          <form method="GET" action="/search" className="anim-fade-up anim-delay-3">
            <div className="search-wrap">
              <input type="text" name="q" placeholder="Search by city, state, or theme…" className="search-input" />
              <button type="submit" className="search-btn">Find Rooms</button>
            </div>
          </form>
        </div>
        <svg aria-hidden viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,28 C360,55 1080,0 1440,28 L1440,55 L0,55 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid rgba(192,25,43,0.08)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { n:`${locations.length}+`, l:'Escape Rooms' },
            { n:`${statesWithData}`, l:'States Covered' },
            { n:'Puzzles', l:'& Mystery Games' },
            { n:'Team', l:'Adventures' },
          ].map(({n,l}) => (
            <div key={l} className="stat-item">
              <div className="stat-number">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '5rem 1.5rem 4rem' }}>
        <div className="container">
          <p className="section-label">🔐 Top Rooms</p>
          <h2 className="section-title">Featured Escape Rooms</h2>
          <p className="section-sub" style={{ marginBottom: '3rem' }}>Highly rated puzzle adventures and mystery experiences from coast to coast.</p>
          <div className="grid-3">
            {featured.map((loc, i) => (
              <Link key={loc.slug} href={`/${loc.stateSlug}/${loc.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card">
                  <img src={`https://source.unsplash.com/800x500/?${IMG_KEYWORDS[i%IMG_KEYWORDS.length]}&sig=${i+1}`} alt={loc.name} className="card-img" loading="lazy" width={800} height={500} />
                  <div className="card-body">
                    <div className="card-meta"><span>📍</span><span>{loc.city ? `${loc.city}, ` : ''}{loc.state}</span></div>
                    <h3 className="card-title">{loc.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{loc.description.slice(0,110)}…</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {loc.amenities.slice(0,3).map((a) => <span key={a} className="chip">{a}</span>)}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'linear-gradient(135deg, var(--void) 0%, #0f0010 100%)', padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '0.75rem', fontFamily: 'var(--font-body)' }}>How It Works</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--white)', letterSpacing: '0.08em' }}>PLAN YOUR ESCAPE</h2>
          </div>
          <div className="grid-3">
            {[
              { icon:'🗺️', title:'FIND A ROOM', desc:'Browse by state to discover every escape room nearby — themes, difficulty, group size, and booking details.' },
              { icon:'🧩', title:'PICK YOUR THEME', desc:'Horror, mystery, adventure, sci-fi — filter by theme and difficulty to match your group\'s style.' },
              { icon:'🔐', title:'BOOK & ESCAPE', desc:'Book directly with the venue. Gather your team, solve the puzzles, and beat the clock.' },
            ].map(({icon,title,desc}) => (
              <div key={title} style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius)', border: '1px solid rgba(192,25,43,0.2)' }}>
                <div className="step-icon">{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.25rem', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--void)', marginBottom: '1.25rem', letterSpacing: '0.06em' }}>THE WORLD OF ESCAPE ROOMS</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>Escape rooms have grown from a niche curiosity into one of America's most popular team entertainment formats. With thousands of venues spanning every state, from small independent operators to large franchise chains, there's never been more variety in theme, difficulty, and experience design.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>Modern escape rooms go far beyond locked-door puzzles. Expect live actors, theatrical sets, electronic puzzles, hidden compartments, and narratives that span multiple interconnected rooms. The best venues treat each game as an immersive story you step into.</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--void)', marginTop: '2rem', marginBottom: '0.75rem', letterSpacing: '0.06em' }}>TIPS FOR FIRST-TIMERS</h3>
          <p style={{ lineHeight: 1.85 }}>Communicate constantly with your team. No single person will spot every clue — spread out and share what you find. Don't fixate on one puzzle; move on and come back. Most rooms include hints — use them without shame. And above all, have fun: the clock is part of the theater.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--parchment)', borderTop: '1px solid rgba(192,25,43,0.08)', padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common Questions</h2>
          </div>
          {[
            { q:'How many people do escape rooms typically allow?', a:'Most rooms accommodate 2–8 players, with the sweet spot being 4–6. Some larger venues have rooms for up to 12. Always check the venue\'s min/max requirements before booking, especially for team events.' },
            { q:'How difficult are escape rooms?', a:'Difficulty varies widely. Many venues rate their rooms on a scale and offer beginner-friendly options. First-timers should look for rooms rated "beginner" or "moderate." Escape rates (percentage of groups who succeed) are often listed and give a good difficulty indicator.' },
            { q:'How long does an escape room take?', a:'Most games run 60 minutes, though 45- and 90-minute formats exist. Add 15–30 minutes for briefing and debrief. Budget about 90 minutes total for your visit.' },
            { q:'Can kids participate?', a:'Most venues allow kids 10+ with an adult. Some family-friendly rooms are designed for younger children. Always check age requirements and content warnings (some horror-themed rooms have age restrictions).' },
            { q:'What should I wear to an escape room?', a:'Comfortable clothes you can move in. You may need to crawl, reach, or crouch depending on the room design. Avoid high heels. Most rooms are climate-controlled indoors.' },
          ].map(({q,a}) => (
            <details key={q} className="faq-item">
              <summary>{q}</summary>
              <div className="faq-answer">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Browse States */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">All 50 States</p>
            <h2 className="section-title">Browse Escape Rooms by State</h2>
          </div>
          <div className="grid-states">
            {ALL_STATES.map((s) => (
              <Link key={s} href={`/${s.toLowerCase().replace(/\s+/g,'-')}`} className="state-link">{s}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--void)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <p style={{ color: 'var(--gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '0.75rem' }}>🔐 The Clock Is Ticking</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--white)', marginBottom: '1rem', letterSpacing: '0.08em' }}>CAN YOU ESCAPE?</h2>
          <p style={{ color: 'var(--fog)', marginBottom: '2rem', lineHeight: 1.7 }}>{locations.length}+ escape rooms across {statesWithData} states. Find your challenge.</p>
          <Link href="/browse-states" className="btn btn-crimson" style={{ padding: '0.9rem 2.25rem' }}>Find Escape Rooms →</Link>
        </div>
      </section>
    </>
  );
}
