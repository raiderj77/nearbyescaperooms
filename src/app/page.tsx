import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Nearby Escape Rooms - Imported Venue Record Rebuild',
  description: 'Browse imported escape-room location records and learn what to verify directly before booking.',
};

export default function Home() {
  const recordsWithCity = locations.filter((location) => location.city).length;
  const regions = Array.from(new Map(locations.map((location) => [location.stateSlug, location.state])).entries()).sort((a, b) => a[1].localeCompare(b[1]));
  const samples = locations.filter((location) => location.city).slice(0, 6);

  return (
    <>
      <div className="notice-bar"><strong>Editorial rebuild:</strong> these are imported location records, not current verified venue profiles.</div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org', '@type':'WebSite', url:'https://nearbyescaperooms.com', name:'Nearby Escape Rooms' }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org', '@type':'Organization', name:'Nearby Escape Rooms', url:'https://nearbyescaperooms.com', description:'An escape-room location directory undergoing source and editorial review' }) }} />

      <section className="home-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label" style={{ color: 'var(--gold)' }}>Escape-room location records</p>
          <h1 className="hero-title">FIND A RECORD.<br /><span>VERIFY BEFORE BOOKING.</span></h1>
          <p className="hero-copy">Browse {locations.length} imported names and coordinates. Confirm the business is operating and check its official location, room lineup, age and accessibility rules, group size, prices, hours, availability, and booking terms directly with the venue.</p>
          <a href="#browse-regions" className="btn btn-crimson">Browse represented states</a>
        </div>
      </section>

      <section aria-label="Directory inventory" style={{ background: 'white' }}><div className="container stats-grid">
        <div className="stat-item"><div className="stat-number">{locations.length}</div><div className="stat-label">Imported records</div></div>
        <div className="stat-item"><div className="stat-number">{recordsWithCity}</div><div className="stat-label">With a city field</div></div>
        <div className="stat-item"><div className="stat-number">{locations.length - recordsWithCity}</div><div className="stat-label">Missing a city field</div></div>
        <div className="stat-item"><div className="stat-number">0</div><div className="stat-label">Current reviewed venues</div></div>
      </div></section>

      <section style={{ padding: '5rem 1.5rem' }}><div className="container">
        <p className="section-label">Sample imported records</p><h2 className="section-title">What the current directory contains</h2>
        <p className="section-sub" style={{ marginBottom: '3rem' }}>These examples have a name, city, state, and coordinates. The dataset has no original source, website, phone, address, room, age, group-size, price, hours, booking, accessibility, or review-date fields.</p>
        <div className="grid-3">{samples.map((location) => <Link key={`${location.stateSlug}-${location.slug}`} href={`/${location.stateSlug}/${location.slug}`} style={{ textDecoration: 'none' }}><article className="card">
          <div className="card-img record-placeholder"><span>Recorded coordinate</span><strong>{location.lat.toFixed(3)}, {location.lng.toFixed(3)}</strong></div>
          <div className="card-body"><div className="card-meta">{location.city}, {location.state}</div><h3 className="card-title">{location.name}</h3><p className="card-copy">Imported location record. Verify the business and booking details directly.</p></div>
        </article></Link>)}</div>
      </div></section>

      <section className="dark-section"><div className="container"><div style={{ textAlign:'center', marginBottom:'3rem' }}><p className="section-label" style={{ color:'var(--gold)' }}>Before paying</p><h2 className="section-title" style={{ color:'white' }}>CHECK THE CURRENT VENUE</h2></div>
        <div className="grid-3">{[
          ['Confirm the business','Find a current official venue page and confirm that the recorded location is operating. A name and coordinate are only a research lead.'],
          ['Review the experience','Check current rooms, themes, content warnings, age rules, accessibility, group limits, duration, prices, and cancellation terms.'],
          ['Book through an official path','Use the venue’s current official booking page or another clearly authorized seller. Confirm the date, location, total price, and refund terms before paying.'],
        ].map(([title,description])=><article className="check-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      <section id="browse-regions" style={{ padding:'5rem 1.5rem', scrollMarginTop:'6rem' }}><div className="container"><div style={{ textAlign:'center',marginBottom:'2.5rem' }}><p className="section-label">Imported directory</p><h2 className="section-title">Browse the {regions.length} represented states</h2><p className="section-sub" style={{ margin:'0 auto' }}>State and record routes remain out of search indexing while the directory is rebuilt with current venue sources.</p></div><div className="grid-states">{regions.map(([slug,name])=><Link className="state-link" href={`/${slug}`} key={slug}>{name}</Link>)}</div></div></section>

      <section className="source-standard"><div className="container" style={{ maxWidth:'860px' }}><h2 className="section-title">Source and publication standard</h2><p>The repository does not record the origin or collection date of its venue data. Every record carries the same generic `Group activity` and `Indoor` labels even though no official venue source is stored. Those labels are not presented as current facts.</p><p>A future indexable profile must cite a current official venue page, record what was reviewed and when, and clearly identify any authorized booking link. Rankings, ratings, availability, pricing, popularity, and affiliate relationships will not be inferred.</p><p>To report a record problem, use the <Link href="/contact">contact page</Link> and include the record URL plus a current source when possible.</p></div></section>
    </>
  );
}
