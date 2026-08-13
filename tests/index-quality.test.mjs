import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('the homepage and trust pages may be indexed', () => {
  const layout = read('src/app/layout.tsx');
  assert.match(layout, /robots:\s*{[\s\S]*?index:\s*true,[\s\S]*?googleBot:\s*{\s*index:\s*true/);
});

test('thin state and listing routes remain noindex,follow', () => {
  for (const path of ['src/app/[state]/page.tsx', 'src/app/[state]/[slug]/page.tsx']) {
    const source = read(path);
    assert.match(source, /robots:\s*{\s*index:\s*false,\s*follow:\s*true/);
    assert.match(source, /googleBot:\s*{\s*index:\s*false,\s*follow:\s*true/);
  }
});

test('directory-only browse hubs remain noindex when present', () => {
  for (const path of ['src/app/browse/page.tsx', 'src/app/browse-states/page.tsx']) {
    const url = new URL(`../${path}`, import.meta.url);
    if (existsSync(url)) {
      assert.match(read(path), /robots:\s*{\s*index:\s*false,\s*follow:\s*true/);
    }
  }
});

test('the sitemap contains only an explicit allowlist', () => {
  const sitemap = read('src/app/sitemap.ts');
  assert.match(sitemap, /INDEXABLE_PATHS/);
  assert.doesNotMatch(sitemap, /data\/locations|locations\.map|statePages|locationPages|parkPages/);
  assert.match(sitemap, /'\/about'/);
  assert.match(sitemap, /'\/contact'/);
});

test('Googlebot can crawl pages to observe route-level noindex rules', () => {
  const robots = read('public/robots.txt');
  assert.match(robots, /User-agent:\s*Googlebot[\s\S]*?Allow:\s*\//i);
});

test('the imported venue inventory and field gaps are exact', () => {
  const records = JSON.parse(read('src/data/locations.json'));
  assert.equal(records.length, 498);
  assert.equal(records.filter((record) => record.city).length, 261);
  assert.equal(new Set(records.map((record) => record.state)).size, 47);
  assert.equal(records.every((record) => JSON.stringify(record.amenities) === JSON.stringify(['Group activity', 'Indoor'])), true);
  assert.equal(records.some((record) => 'source' in record || 'website' in record || 'price' in record || 'reviewedAt' in record), false);
});

test('imported records are not presented as current booking profiles', () => {
  const home = read('src/app/page.tsx');
  const state = read('src/app/[state]/page.tsx');
  const detail = read('src/app/[state]/[slug]/page.tsx');
  const about = read('src/app/about/page.tsx');
  const llms = read('public/llms.txt');
  assert.match(home, /imported location records, not current verified venue profiles/i);
  assert.match(home, /0[\s\S]*Current reviewed venues/);
  assert.match(state, /Not current-verified/);
  assert.match(detail, /does not record the original source or collection date/i);
  assert.match(detail, /stateSlug===state&&location\.slug===slug/);
  assert.match(about, /coordinate does not establish/i);
  assert.match(llms, /Bulk imported pages are not monetization-ready/);
  assert.doesNotMatch(home, /highly rated|all 50 states|best escape rooms/i);
  assert.doesNotMatch(detail, /EntertainmentBusiness|LocalBusiness|priceRange|openingHours/i);
});

test('browse navigation and accessible responsive behavior are present', () => {
  const layout = read('src/app/layout.tsx');
  const browse = read('src/app/browse-states/page.tsx');
  const css = read('src/app/globals.css');
  assert.match(layout, /Skip to main content/);
  assert.match(browse, /googleBot:\s*{\s*index:\s*false/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
});

test('the Creator footer link is followed only on the homepage', () => {
  const layout = read('src/app/layout.tsx');
  const creatorLink = read('src/components/CreatorRevenueLink.tsx');

  assert.match(layout, /s\.href === 'https:\/\/creatorrevenuecalculator\.com'/);
  assert.match(creatorLink, /pathname === '\/' \? 'noopener noreferrer' : 'nofollow noopener noreferrer'/);
});
