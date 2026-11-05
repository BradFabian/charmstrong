# Project Log

## 2026-11-05: Theme and shell built

**What changed:** Set up the Astro and Tailwind project with brand tokens, layout, header, footer, age gate, shared components, and stub routes. See `features/charmstrong-site/`.

**Decisions:**

- The PNG sets the look; the PDF sets the palette and page structure.
- The theme is built first, and each page follows as its own feature.
- Shamrock only on the Irish Style Lager can.
- No "Buy Beer" cart. "Find Our Beer" is the highlighted nav link, as the site doesn't sell online.
- Yes/No age gate, remembered for 30 days on the device.
- Find Our Beer POC: filterable list with directions links. No map or radius search, which would need a third-party provider.
- `/contact` uses Netlify Forms, which makes Netlify the host.
- The POC is kept out of search engines. Remove the `netlify.toml` header at launch.
- No CMS for now, but beers live in a typed collection to ease a later move.

**Risks and open questions:**

- Logo: need a usable file, the correct "3 MIA" or "13 MIA" wording, and the meaning of the "33 BOS" and MIA marks, which read like jersey numbers. The PDF says "without sports branding".
- All beer specs are placeholders from the concept design.
- The age gate is a courtesy check, not verification. Client or counsel should confirm alcohol advertising requirements before launch.
- The brief uses both "Charmstrong" and "CharmStrong". The site uses "Charmstrong" until confirmed.
