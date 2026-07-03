# Nearby Escape Rooms, CLAUDE.md

> Source of truth for Claude Code on this project. Last updated: 2026-04-30

## Project Identity

- **Site**: Nearby Escape Rooms
- **Domain**: nearbyescaperooms.com
- **Purpose**: Location finder for escape room venues across the United States
- **Type**: utility-site (ad-supported location directory)
- **Compliance Tier**: Standard

## Tech Stack

- **Framework**: Next.js | **Deployment**: Vercel | **Language**: TypeScript | **Styling**: Tailwind CSS | **Package Manager**: npm

## 1. AdSense & Monetization

- **Publisher ID**: `ca-pub-7171402107622932`
- **ads.txt**: `google.com, pub-7171402107622932, DIRECT, f08c47fec0942fa0`

## 2. SEO

- SSR/SSG required
- Each venue page: name, address, room themes available, difficulty levels, group size capacity, booking link if available, price range
- Escape room businesses open/close frequently, include "verify current availability" disclaimer

## 3. Core Web Vitals

- **LCP** ≤ 2.5s | **INP** ≤ 200ms | **CLS** ≤ 0.1

## 4. E-E-A-T

- Attribution: "Built by an experienced web developer", no personal name
- Disclaimer: "Venue information may change, book directly with the venue to confirm availability"

## 5. Structured Data

- Organization, WebSite, LocalBusiness (EntertainmentBusiness sub-type), BreadcrumbList
- Include priceRange, openingHours where available

## 6. Mobile-First

- Touch targets 48px+, responsive, 16px+ body text

## 7. Bing Optimization

- meta keywords, SSR mandatory, IndexNow on deploy

## 8. GEO / AI

- `/llms.txt` at root, standard AI crawler rules

## 9. Privacy & Consent

- `/privacy` and `/terms` required

## 10. Accessibility (WCAG 2.1 AA)

- Standard requirements

## 11. Security Headers

Standard Empire security headers

## 12. Sitemaps & Metadata

Sitemap via `app/sitemap.ts`, submit to GSC and Bing WMT

## Cross-Site Links

Footer: all sister sites (excluding self)

## Deployment

Vercel | main | `npm run build` | Env: INDEXNOW_API_KEY

## Warnings

Standard Empire warnings. Escape room businesses have high turnover, never present venue data as guaranteed current.
