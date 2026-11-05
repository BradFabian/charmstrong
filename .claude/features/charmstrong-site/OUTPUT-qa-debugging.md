# QA: Theme and Shell

**Status:** Round 1 automated checks complete. Waiting on human review and the items marked `[NOT RUN]`.

## Round 1

Run on 2026-11-05 against the production build served locally with `astro preview`, in headless Chrome on Node 24.11.1. Results: 79 of 79 scripted checks passed. The script was temporary and isn't part of the repo.

### Build

- [PASS] `npm run build` completes with no errors (12 pages)
- [PASS] `npx astro check` reports 0 errors, 0 warnings, 0 hints
- [PASS] No framework JavaScript in `dist`; no JS files at all, as the age gate and mobile nav scripts are inline

### Age gate

- [PASS] Appears on first visit, and is open before page content is parsed
- [PASS] "Yes" closes it, and it stays closed after reloading and on other pages
- [PASS] "No" shows the under-21 message, stores nothing, and keeps the site blocked
- [PASS] Escape doesn't dismiss it (pressed twice)
- [PASS] Tab stays inside the dialog, with visible focus
- [PASS] Reappears after 31 days, when cleared, and on a corrupt stored value; stays closed at 29 days
- [PASS] Still works when `localStorage` is blocked, and asks again on the next page
- [PASS] Accessible name resolves in both the question and under-21 states
- [NOT RUN] Screen reader announces its name and purpose

### Navigation and layout

- [PASS] All nav, footer and card links reach the correct route
- [PASS] Current page is indicated visually and with `aria-current`
- [PASS] Mobile menu opens and closes by click, keyboard and Escape; focus returns to the toggle
- [PASS] Without JavaScript, nav links stay visible and the 21+ notice appears
- [NOT RUN] Mobile menu on a real touch device
- [PASS] Skip link appears on focus and moves to the main content
- [PASS] 404 page displays with a 404 status for an unknown URL
- [PASS] No horizontal scrolling at 320, 375, 768, 1024, 1440 and 1920px
- [PASS] No horizontal scrolling at 640px, a proxy for 200% zoom on a 1280px screen
- [NOT RUN] Real browser zoom at 200%
- [NOT RUN] Safari and Firefox, which matter most for the age gate's dialog behavior

### Theme

- [NOT RUN] Colors match the PDF palette and the look reads as the PNG direction: needs your review
- [PASS] All text pairs meet WCAG 2.2 AA contrast (lowest is cream on Celtic Green, 5.13:1)
- [PASS] Focus ring is visible on dark surfaces (checked in the header). Ring contrast is 6.14:1 on dark and 10.55:1 on cream.
- [PASS] Reduced-motion setting is respected
- [PASS] Fonts load from this site, with no third-party requests; measured layout shift 0.0000 on the home page
- [PASS] Style guide shows all shared components

### SEO and deployment

- [PASS] Each page has a unique title and description
- [PASS] One `h1` per page with a logical heading order
- [PASS] Style guide and 404 carry `noindex`
- [NOT RUN] Netlify deploy preview responds with `X-Robots-Tag: noindex`: not deployed yet
- [PASS] Placeholder content is clearly identified

### Fixed during this round

- Irish Style Lager can disappeared against the dark hero. Added a brass outline.
- Placeholder note had no space after "Placeholder:". Fixed.
- Age gate's under-21 state pointed to a heading ID that didn't exist. Added the ID.
- Type error in `BeerCard.astro`. Fixed.

## Previous Rounds

None yet.
