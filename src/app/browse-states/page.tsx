import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';
export const metadata:Metadata={title:'Browse Imported Venue Records by State',description:'Browse imported escape-room location records by represented state.',robots:{index:false,follow:true,googleBot:{index:false,follow:true}}};
export default function BrowseStatesPage(){const regions=Array.from(new Map(locations.map((location)=>[location.stateSlug,location.state])).entries()).sort((a,b)=>a[1].localeCompare(b[1]));return <article className="content-page"><p className="section-label">Imported directory</p><h1>Browse records by state</h1><p className="lead">These routes contain imported names and coordinates, not current verified venue profiles. Confirm every business and booking detail directly.</p><div className="grid-states" style={{marginTop:'2rem'}}>{regions.map(([slug,name])=><Link className="state-link" href={`/${slug}`} key={slug}>{name}</Link>)}</div></article>}
