# WEBSITE THEME

## Brief

[We are building a full website for Charmstrong. This will have a home page, it will have a products page, it will have an about us page, and it will have us a where to find or buy beer page. Each page will be structured in a new feature for their site. Right now we're going to have the general theme built. This theme will be mobile responsive, will be desktop. Best practices in CSS, HTML, and JavaScript. We will keep the website fast and polished and use color tones that reflect a modern yet historic beer company. Think Boston Celtics, creams, greens, darker greens, and refer to any references within the reference folder.]

---

## Scoping Questions

Filled in manually because the `/scope-feature` skill isn't installed. Recommended answers are pre-checked; change any box and add notes. Nothing is built until these are confirmed.

**Q1. Which reference sets the look?** The two conflict: the PDF is flat, calm and serif-led; the PNG is dark, photographic and built around the lion logo.

- [x] PNG for the look and feel. PDF for the palette, page structure and the two pages the PNG doesn't show (Our Story, Find Our Beer). (Recommended)
- [ ] PDF only
- [ ] PNG only
- Notes:

**Q2. How much does this feature cover?** The brief says each page is its own feature; the POC needs all of them.

- [x] This feature is the theme and shell: design tokens, layout, header, footer, age gate, shared components, working routes with stub pages. Each page follows as its own feature. (Recommended)
- [ ] Build every page in this one feature
- Notes:

**Q3. Shamrocks?** Client notes say "more heritage brewery than Shamrocks" and the PDF says "without cliches", but the PNG uses shamrocks on a can, a barrel and a homepage icon.

- [x] Allow one on the Irish Style Lager can only. Use hops, lighthouse and brass details everywhere else. (Recommended)
- [ ] Use them as the PNG does
- [ ] None at all
- Notes:

**Q4. The "Buy Beer" cart button in the PNG?** The stated goal is showing where to buy, not selling online. A cart icon implies a store that doesn't exist, and online alcohol sales bring licensing questions.

- [x] Remove it and style "Find Our Beer" as the highlighted nav button. (Recommended)
- [ ] Keep "Buy Beer", without the cart icon, linking to Find Our Beer
- [ ] Online sales are actually planned (needs separate scoping)
- Notes:

**Q5. Age gate format?**

- [x] "Are you 21 or older?" with Yes/No, remembered on that device for 30 days. (Recommended)
- [ ] Full date-of-birth entry
- Notes:

**Q6. Find Our Beer for the POC?** The PDF lists ZIP radius search, a map toggle and online purchase links. Radius search and maps need a geocoding or map provider, plus keys and possibly cost.

- [x] Placeholder retailer list, filter by city/ZIP text and by type (store or bar), with a "Get directions" link for each. No embedded map yet. (Recommended)
- [ ] Add a real map and radius search now
- Notes:

**Q7. Where does the contact form live?** It wasn't in the page list.

- [x] Its own `/contact` page, linked from the footer, using Netlify Forms. This makes Netlify the host. (Recommended)
- [ ] A section on another page: ______
- Notes:

**Q8. Logo details**

- Supply a vector (SVG/AI/EPS) or high-resolution transparent PNG. The current file is an angled photo of a screen and can't be used on the site.
- Which is correct: "3 MIA" (logo photo) or "13 MIA" (PNG mockup)? ______
- What do "33 BOS" and the MIA mark refer to? ______ They read like jersey numbers, which matters because the PDF says "without sports branding".

**Q9. Commit `.claude/` to the repo?** Includes about 6 MB of reference files.

- [x] Yes, as the first commit on this branch. (Recommended)
- [ ] Commit the docs only and ignore `reference/`
- Notes:

## Extended Brief

Draft, assuming the recommended answers above.

### Project goal

A proof of concept that displays the CharmStrong beers, informs customers about each product, and shows where to buy them in stores or bars. The developer makes all updates; there is no CMS yet. Hosting is Netlify or similar.

### Site map for the POC

| Route | Page | Delivered by |
| --- | --- | --- |
| `/` | Home | Home feature |
| `/beers` | Beers overview | Beers feature |
| `/beers/american-crisp-lager` | Product page | Beers feature |
| `/beers/irish-style-lager` | Product page | Beers feature |
| `/beers/dark-lager` | Product page | Beers feature |
| `/beers/ipa` | Product page | Beers feature |
| `/beers/specialty-series` | Product page (one page for rotating releases) | Beers feature |
| `/our-story` | Our Story | Our Story feature |
| `/find-our-beer` | Retailer and bar list | Find Our Beer feature |
| `/contact` | Contact form | Contact feature |
| `/404` | Not found | This feature |

### In scope for this feature (theme and shell)

- Astro, Tailwind and TypeScript project, deployable as a static site to Netlify
- Brand tokens: color, type, spacing, page widths, focus states
- Base layout with per-page title, description, canonical and Open Graph metadata
- Responsive header and mobile navigation; footer with responsible-drinking message
- 21+ age gate on first visit
- Shared components: buttons, section wrapper, hero band, can/beer card
- Stub pages so all navigation works, and a `noindex` style guide for reviewing the theme
- The whole POC is kept out of search engines until launch

### Out of scope for this feature

Final page content, real retailer data, the working contact form, CMS, e-commerce, maps, analytics, and final legal/privacy pages. A cookie banner isn't needed unless analytics or similar are added.

### Acceptance criteria

- `npm run build` and `astro check` pass with no errors
- Layout holds from 320px to large desktop with no horizontal scrolling
- Header, mobile nav and age gate work by keyboard alone, with visible focus states
- Text meets WCAG 2.2 AA contrast
- The age gate appears on first visit with no flash of site content, and is remembered after "Yes"
- No framework JavaScript ships; the only client scripts are the age gate and mobile nav
- All placeholder content is clearly identified as placeholder

### Known content and asset needs

- **Logo:** see Q8
- **Can art and photography:** five cans plus hero images, created by the team. Crops from the mockup PNG are too small to use, so the theme uses drawn placeholder cans until these exist.
- **Beer specs:** ABV, IBU and descriptions in the mockup are placeholders until confirmed. The PDF states that product names and visuals are placeholders.
- **Naming:** the PDF says "Specialty Releases" and the PNG says "Specialty Series". This draft uses "Specialty Series".
- **Story copy:** needs the founding story; the theme won't invent history or claims about the brewery
- **Retailer data:** needs real stockists before launch
- **Contact form:** needs a recipient email address

### Compliance notes

- The age gate is a courtesy check, not verification. Alcohol advertising rules should be confirmed by the client or their counsel before launch.
- Green and cream are fine, but avoid Celtics marks, names and imagery. The PDF is explicit about no affiliation, even though the brief says "think Boston Celtics".

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
