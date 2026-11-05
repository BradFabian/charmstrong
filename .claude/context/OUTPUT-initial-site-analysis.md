# Site Analysis

Last updated 2026-11-05. New build, not an existing site.

## Stack

- Astro 7.4.5, static output, `trailingSlash: 'always'`
- Tailwind CSS 4.3.4 through `@tailwindcss/vite`; tokens in `src/styles/global.css`
- TypeScript 6.0.3, strict Astro config, checked with `@astrojs/check`
- Node 24.11.1 pinned in `.nvmrc`. Astro needs 22.23.4 or newer. The machine's nvm default is 14, so run `nvm use` first.
- npm. Scripts: `dev`, `build`, `preview`, `check`

## Routes

`/`, `/beers/`, `/beers/[slug]/` (five beers), `/our-story/`, `/find-our-beer/`, `/contact/`, `/styleguide/` (`noindex`, internal), and `404`. All are stubs apart from the shell.

## Design tokens

Colors: `celtic`, `pub`, `ink`, `cream`, `parchment`, `brass`, `malt`, `tin`. Tailwind's default palette is removed, so only these are available.
Fonts: `font-display` (Zilla Slab 700), `font-body` (Barlow 400, 600). Self-hosted through Astro's font system.
Width: `max-w-page` (76rem).

## Components

- `src/layouts/BaseLayout.astro`: document, metadata, skip link
- `src/components/`: `AgeGate`, `Header`, `Footer`
- `src/components/ui/`: `Button`, `Section`, `BeerCan`, `BeerCard`, `PlaceholderNote`
- `src/components/sections/`: `HeroBand`

## Content

- Beers: `src/content/beers.json`, validated by the schema in `src/content.config.ts`
- Navigation and site details: `src/data/site.ts`

## Deployment

`netlify.toml` builds to `dist` and sends `X-Robots-Tag: noindex` on every page. Not deployed yet. `site` in `astro.config.mjs` reads Netlify's `URL`, so local builds use a localhost canonical.

## Known gaps

- Logo file, can art, photography, beer specs, founding story, retailer data and contact email are outstanding.
- Not tested yet: Safari, Firefox, screen readers, real touch devices.
