import type { Metadata } from 'next';
import { Cinzel, Raleway } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400','600','700','900'] });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['400','500','600','700'] });

export const metadata: Metadata = {
  title: { template: '%s | Nearby Escape Rooms', default: 'Nearby Escape Rooms - Imported Venue Record Rebuild' },
  description: 'Imported escape-room location records undergoing current venue-source review.',
  keywords: 'escape rooms, puzzle rooms, adventure games, team building, mystery games, local escape rooms',
  metadataBase: new URL('https://nearbyescaperooms.com'),
  alternates: { canonical: 'https://nearbyescaperooms.com' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: { google: 'WbPX8TmWTc59vQoUeGcqKK83ZvrxdtzBUVRhkgaNQ5w' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${raleway.variable}`}>
      <head>
        <meta name="msvalidate.01" content="C4C9B6256BDEDED169E4DE01CA953390" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <header style={{ background: 'var(--void)', borderBottom: '3px solid var(--crimson)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 24px rgba(10,10,15,0.7)' }}>
          <div className="container site-header-inner">
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>🔐</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--gold)', letterSpacing: '0.1em' }}>NEARBY ESCAPE ROOMS</span>
            </a>
            <nav className="primary-nav" aria-label="Primary">
              <a href="/" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-body)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Home</a>
              <a href="/browse-states" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-body)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Browse</a>
              <a href="/about" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-body)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>About</a>
            </nav>
          </div>
        </header>

        <main id="main-content" style={{ minHeight: 'calc(100vh - 340px)' }}>{children}</main>

        <footer style={{ background: 'var(--void)', borderTop: '3px solid rgba(192,25,43,0.3)', marginTop: '5rem', padding: '3rem 0 2rem' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>🔐 NEARBY ESCAPE ROOMS</p>
                <p style={{ color: '#b8b8c6', fontSize: '0.875rem', lineHeight: 1.7 }}>Imported venue location records undergoing current source review. Verify business operation and booking details directly.</p>
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
