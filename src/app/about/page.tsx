import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const metadata: Metadata = { title:'About the Nearby Escape Rooms Rebuild', description:'Learn what the imported venue records contain and the publication standard for future reviewed profiles.' };

export default function AboutPage(){const withCity=locations.filter((location)=>location.city).length;return <article className="content-page"><p className="section-label">About this rebuild</p><h1>Source transparency before booking guidance</h1><p className="lead">Nearby Escape Rooms is being rebuilt from an imported coordinate directory into a smaller, current, source-backed venue resource.</p>
  <section><h2>What the repository contains</h2><ul><li>{locations.length} names with latitude and longitude</li><li>{withCity} records with a city and {locations.length-withCity} without one</li><li>{new Set(locations.map((location)=>location.state)).size} represented states</li><li>The same generic `Group activity` and `Indoor` labels on every record</li></ul></section>
  <section><h2>What it does not contain</h2><p>No record stores the original source, collection date, website, phone, street address, room lineup, theme, difficulty, age policy, group size, price, hours, availability, booking link, accessibility, rating, or review date. A coordinate does not establish that the business is still operating or that it accepts customers at that point.</p></section>
  <section><h2>Publication standard</h2><p>A future reviewed profile must cite a current official venue source, record the review date, distinguish venue-published facts from editorial guidance, and identify whether any outbound booking seller is the venue or an authorized third party.</p></section>
  <section><h2>Corrections</h2><p>Use the <Link href="/contact">contact instructions</Link> to report a closed, renamed, moved, duplicated, or inaccurate record.</p></section>
</article>}
