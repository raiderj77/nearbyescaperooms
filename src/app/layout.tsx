import type { Metadata } from 'next';
import Script from 'next/script';
import { Cinzel, Raleway } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400','600','700','900'] });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['400','500','600','700'] });

export const metadata: Metadata = {
  title: { template: '%s | Nearby Escape Rooms', default: 'Nearby Escape Rooms — Find Escape Rooms Across America' },
  description: 'Discover the best escape rooms near you. Browse puzzle rooms, adventure experiences, and mystery games across all 50 states.',
  keywords: 'escape rooms, puzzle rooms, adventure games, team building, mystery games, local escape rooms',
  metadataBase: new URL('https://nearbyescaperooms.com'),
  alternates: { canonical: 'https://nearbyescaperooms.com' },
  robots: 'index, follow, max-snippet:-1',
  verification: { google: 'WbPX8TmWTc59vQoUeGcqKK83ZvrxdtzBUVRhkgaNQ5w' },
};

const toolSites = [
  { name: 'Fiber Tools', href: 'https://fibertools.app' }, { name: 'Mind Check Tools', href: 'https://mindchecktools.com' },
  { name: 'Flip My Case', href: 'https://flipmycase.com' }, { name: 'Creator Revenue Calculator', href: 'https://creatorrevenuecalculator.com' },
  { name: 'Contract Extract', href: 'https://contractextract.com' }, { name: 'Medical Bill Reader', href: 'https://medicalbillreader.com' },
  { name: 'Tax Break Tools', href: 'https://taxbreaktools.com' }, { name: '524 Tracker', href: 'https://524tracker.com' },
];
const directorySites = [
  { name: 'Public Boat Ramps', href: 'https://publicboatramps.com' }, { name: 'Find Swim Spots', href: 'https://findswimspots.com' },
  { name: 'Craft Distillery Finder', href: 'https://craftdistilleryfinder.com' }, { name: 'Drive-In Tonight', href: 'https://driveintonight.com' },
  { name: 'All Skate Parks', href: 'https://allskateparks.com' }, { name: 'Rockhounding Finder', href: 'https://rockhoundingfinder.com' },
  { name: 'All Skating Rinks', href: 'https://allskatingrinks.com' }, { name: 'Soak USA', href: 'https://soakusa.net' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${raleway.variable}`}>
      <head>
        <meta name="msvalidate.01" content="C4C9B6256BDEDED169E4DE01CA953390" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932" strategy="afterInteractive" />
        <Script id="microsoft-clarity" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","vsqobt7va0");`}</Script>
      </head>
      <body>
        <header style={{ background: 'var(--void)', borderBottom: '3px solid var(--crimson)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 24px rgba(10,10,15,0.7)' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.5rem' }}>
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>🔐</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--gold)', letterSpacing: '0.1em' }}>NEARBY ESCAPE ROOMS</span>
            </a>
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-body)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Home</a>
              <a href="/browse-states" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-body)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Browse</a>
              <a href="/about" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-body)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>About</a>
            </nav>
          </div>
        </header>

        <main style={{ minHeight: 'calc(100vh - 340px)' }}>{children}</main>

        <footer style={{ background: 'var(--void)', borderTop: '3px solid rgba(192,25,43,0.3)', marginTop: '5rem', padding: '3rem 0 2rem' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>🔐 NEARBY ESCAPE ROOMS</p>
                <p style={{ color: 'var(--fog)', fontSize: '0.875rem', lineHeight: 1.7 }}>Free directory of escape rooms, puzzle adventures, and mystery experiences across the United States.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--crimson)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Directory Sites</h4>
                <ul style={{ listStyle: 'none' }}>
                  {directorySites.map((s) => <li key={s.href} style={{ marginBottom: '0.4rem' }}><a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fog)', fontSize: '0.875rem', textDecoration: 'none' }}>{s.name}</a></li>)}
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--crimson)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Tools</h4>
                <ul style={{ listStyle: 'none' }}>
                  {toolSites.map((s) => <li key={s.href} style={{ marginBottom: '0.4rem' }}><a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fog)', fontSize: '0.875rem', textDecoration: 'none' }}>{s.name}</a></li>)}
                </ul>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <p style={{ color: 'var(--mid)', fontSize: '0.85rem' }}>© 2026 Nearby Escape Rooms. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {[['Privacy', '/privacy'], ['Terms', '/terms'], ['Contact', '/contact'], ['About', '/about']].map(([l, h]) => (
                  <a key={h} href={h} style={{ color: 'var(--mid)', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
