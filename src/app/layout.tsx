import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Find Escape Rooms Near You | Nearby Escape Rooms",
  description: "Discover the best escape rooms in your area. Browse local puzzle rooms, adventure experiences, and team building games across the US.",
  keywords: "escape rooms, puzzle rooms, adventure games, team building, mystery games, local escape rooms, indoor games",
  alternates: { canonical: "https://nearbyescaperooms.com" },
  verification: { google: "WbPX8TmWTc59vQoUeGcqKK83ZvrxdtzBUVRhkgaNQ5w" },
  openGraph: {
    title: "Find Escape Rooms Near You",
    description: "Discover the best escape rooms in your area.",
    url: "https://nearbyescaperooms.com",
    type: "website",
    images: [
      {
        url: "https://nearbyescaperooms.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Escape Rooms Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Escape Rooms Near You",
    description: "Discover the best escape rooms in your area.",
  },
  other: {
    "msvalidate.01": "C4C9B6256BDEDED169E4DE01CA953390",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <style>
          {`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            html {
              scroll-behavior: smooth;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              background-color: #0d0d1a;
              color: #e0e0e0;
              line-height: 1.6;
            }
            a {
              color: #9b59b6;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          `}
        </style>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#0d0d1a",
        borderBottom: "1px solid #1a1a2e",
        padding: "1rem 0",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#9b59b6",
          }}
        >
          Nearby Escape Rooms
        </a>
        <div style={{ display: "flex", gap: "2rem" }}>
          <a href="/" style={{ color: "#e0e0e0" }}>
            Home
          </a>
          <a href="/about" style={{ color: "#e0e0e0" }}>
            About
          </a>
          <a href="/contact" style={{ color: "#e0e0e0" }}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#16161e",
        borderTop: "1px solid #1a1a2e",
        padding: "3rem 1rem",
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        }}
      >
        <div>
          <h3
            style={{
              color: "#9b59b6",
              marginBottom: "1rem",
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
            Directory Sites
          </h3>
          <ul style={{ listStyle: "none" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://publicboatramps.com">Public Boat Ramps</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://findswimspots.com">Find Swim Spots</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://craftdistilleryfinder.com">Craft Distillery Finder</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://driveintonight.com">Drive-In Tonight</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://allskateparks.com">All Skate Parks</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://rockhoundingfinder.com">Rockhounding Finder</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://allskatingrinks.com">All Skating Rinks</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://soakusa.net">Soak USA</a>
            </li>
          </ul>
        </div>

        <div>
          <h3
            style={{
              color: "#9b59b6",
              marginBottom: "1rem",
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
            Tool Sites
          </h3>
          <ul style={{ listStyle: "none" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://fibertools.app">Fiber Tools</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://mindchecktools.com">Mind Check Tools</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://flipmycase.com">Flip My Case</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://creatorrevenuecalculator.com">Creator Revenue Calculator</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://contractextract.com">Contract Extract</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://medicalbillreader.com">Medical Bill Reader</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://taxbreaktools.com">Tax Break Tools</a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://524tracker.com">524 Tracker</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "2rem auto 0",
          paddingTop: "2rem",
          borderTop: "1px solid #1a1a2e",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#666",
        }}
      >
        <p>
          <a href="/privacy" style={{ color: "#999" }}>
            Privacy Policy
          </a>
          {" | "}
          <a href="/terms" style={{ color: "#999" }}>
            Terms of Service
          </a>
        </p>
        <p style={{ marginTop: "1rem" }}>
          &copy; 2026 Nearby Escape Rooms. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
