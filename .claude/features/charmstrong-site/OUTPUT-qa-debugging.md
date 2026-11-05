# QA: Theme and Shell

**Status:** Not started. Nothing has been built or tested yet.

## Round 1

### Build

- [ ] `npm run build` completes with no errors
- [ ] `npx astro check` reports no errors
- [ ] No framework JavaScript in `dist`; only the age gate and mobile nav scripts

### Age gate

- [ ] Appears on first visit to any page, with no flash of site content
- [ ] "Yes" closes it, and it stays closed after reloading and on other pages
- [ ] "No" shows the under-21 message and keeps the site blocked
- [ ] Escape doesn't dismiss it
- [ ] Tab stays inside the dialog, with visible focus
- [ ] Reappears after the stored value expires or is cleared
- [ ] Still works when `localStorage` is blocked
- [ ] Screen reader announces its name and purpose

### Navigation and layout

- [ ] All nav and footer links reach the correct route
- [ ] Current page is indicated visually and with `aria-current`
- [ ] Mobile menu opens and closes by touch, keyboard and Escape
- [ ] Skip link appears on focus and works
- [ ] 404 page displays for an unknown URL
- [ ] No horizontal scrolling at 320, 375, 768, 1024, 1440 and 1920px
- [ ] Text remains usable at 200% zoom

### Theme

- [ ] Colors match the PDF palette; the look reads as the PNG direction
- [ ] All text pairs meet WCAG 2.2 AA contrast
- [ ] Focus states are visible on both dark and cream backgrounds
- [ ] Reduced-motion setting is respected
- [ ] Fonts load with no significant layout shift
- [ ] Style guide shows all shared components

### SEO and deployment

- [ ] Each page has a unique title and description
- [ ] One `h1` per page with a logical heading order
- [ ] Netlify deploy preview responds with `X-Robots-Tag: noindex`
- [ ] Placeholder content is clearly identified

## Previous Rounds

None yet.
