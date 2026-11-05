# Implementation Plan: Theme and Shell

**Status:** Approved 2026-11-05 with the recommended answers in `feature.md`. Steps 1-10 are built on `feature/charmstrong-site`. See the QA file for results.

**Changes from this plan during the build:**

- Fonts use Astro's built-in font system, so no extra packages were needed.
- Zilla Slab and Barlow were picked directly rather than compared in the style guide. Swapping them is a small config change.
- Added `ink`, `parchment` and `tin` color tokens. `ink` is an estimate from the mockup, not a pixel sample.
- Added `src/components/ui/PlaceholderNote.astro` to mark unapproved content consistently.
- The age gate and mobile nav scripts end up inline in the HTML, so the build has no separate JS files.

## Decisions

| Area | Decision | Why |
| --- | --- | --- |
| Framework | Astro 7, static output | Content site with very little interactivity |
| Styling | Tailwind 4 through `@tailwindcss/vite`, tokens in CSS `@theme` | Latest versions on npm at time of writing are Astro 7.4.5 and Tailwind 4.3.4. Confirm compatibility at install. |
| Node | `.nvmrc` pinned to 24.11.1 | Astro 7.4.5 requires Node 22.23.4 or newer. The nvm default here is 14. Already installed; global default unchanged. |
| Package manager | npm | Already available |
| Beer data | Astro content collection with a typed schema | Five beers share the PDF's fields: tasting notes, style, ABV, ingredients, availability. Migrates cleanly to a CMS later. |
| Interactivity | Small vanilla scripts only | Age gate and mobile nav; no UI framework |
| Hosting | Netlify, static | Provides Forms for the later contact page |
| Indexing | `X-Robots-Tag: noindex` through `netlify.toml` during POC | Placeholder specs and retailers shouldn't appear in search. Remove at launch. |

## Dependencies to approve

- `astro`
- `tailwindcss`, `@tailwindcss/vite`
- `typescript`, `@astrojs/check` (dev)
- Possibly self-hosted font packages, once fonts are chosen (step 3)

Project files are created by hand rather than with the Astro template, so nothing overwrites the existing README and no demo content needs removing.

## Design tokens

From the PDF palette:

| Token | Value | Use |
| --- | --- | --- |
| `celtic` | `#087443` | Primary buttons, links on cream, accents |
| `pub` | `#103E2B` | Dark sections, headings on cream |
| `cream` | `#F5F0DF` | Page background, text on dark |
| `brass` | `#D7B56D` | Rules, details, large text on dark |
| `malt` | `#713D28` | Dark Lager accents |

To add from the PNG: `ink`, a near-black green for the header and footer. Sampled from the mockup at build time.

Contrast limits, calculated from the hex values:

- Cream on Celtic Green is about 5.1:1, which passes AA for all text.
- Brass on Celtic Green is about 3:1, so large text only. The PDF cover's tagline pairing shouldn't be used at small sizes.
- The PNG's bright logo green has weak contrast with white text, so buttons use `celtic` and bright green stays in the logo.

**Type:** a heritage serif or slab for headlines, and a clean condensed sans for navigation and product information. Compare two or three open-licensed options in the style guide, self-hosted, with at most three font files loaded per page if possible.

## Steps

1. **Project setup.** `package.json`, `astro.config.mjs`, `tsconfig.json`, `.nvmrc`, `.gitignore` (`node_modules`, `dist`, `.astro`, `.netlify`, `.env*`), `netlify.toml`. Commit `.claude/` first if approved.
2. **Tokens and global styles.** `src/styles/global.css`: Tailwind entry, `@theme` tokens, base typography, focus states, reduced-motion handling.
3. **Fonts.** Choose and self-host; define fallbacks to limit layout shift.
4. **Base layout.** `src/layouts/BaseLayout.astro` with skip link, landmarks and SEO props. `src/data/site.ts` holds navigation and site details.
5. **Header and footer.** `src/components/Header.astro`, `src/components/Footer.astro`. Logo slot uses a text wordmark until the logo file arrives. Mobile nav uses a real button with `aria-expanded`, closes on Escape, and stays usable without JavaScript.
6. **Age gate.** `src/components/AgeGate.astro`; see below.
7. **Shared components.** `src/components/ui/Button.astro`, `src/components/ui/Section.astro`, `src/components/sections/HeroBand.astro`, `src/components/ui/BeerCan.astro` (drawn placeholder), `src/components/ui/BeerCard.astro`.
8. **Beer data model.** `src/content.config.ts` and five placeholder entries, marked as placeholder.
9. **Routes.** Stub pages for each route in `feature.md`, `src/pages/404.astro`, and `src/pages/styleguide.astro` (`noindex`).
10. **Validate.** Build, `astro check`, then the QA list. Add `OUTPUT-initial-site-analysis.md` and the first project log entry.

## Age gate approach

- Native `<dialog>` opened with `showModal()`, which handles focus trapping and makes the page behind it inert. Escape can't dismiss it.
- A small inline script directly after the dialog, at the top of `<body>`, opens it before first paint so site content doesn't flash.
- "Yes" stores a timestamp in `localStorage` with a 30-day expiry. If storage is blocked, the gate closes for that page view and appears again on the next.
- "No" shows an under-21 message in the dialog, stores nothing, and keeps the site blocked.
- Page content stays in the HTML, so search engines can read the site at launch.
- Without JavaScript the gate can't open, so a `<noscript>` notice states the site is for ages 21 and over. This is a known limit of a static gate.

## Risks

- **Late assets:** the design relies heavily on photography and can art. Placeholders will make the POC look plainer than the mockup until they arrive.
- **Mockup fidelity:** tilted headlines, torn-paper edges and textures need image assets and restraint to stay fast. Start with type, color and simple rules; add texture once real assets exist.
- **No mobile or Story/Find designs in the PNG:** these are my interpretation and need your review.
- **Age gate:** determined users can bypass it, as with any client-side check.

## Rollback

All work is on `feature/charmstrong-site`; `main` is untouched. Nothing deploys without your approval.

## Next features

1. Home
2. Beers overview and five product pages
3. Our Story
4. Find Our Beer
5. Contact
