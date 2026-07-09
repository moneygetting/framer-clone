# Senzwelwe's Profile — Case Study Page (clone)

A Next.js (App Router) + Tailwind CSS recreation of
https://exhilarated-manatee-114484.framer.app/, built from the provided
screenshots and a fetch of the live page.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes / assumptions

- The original site is a Framer export. All real Framer image assets
  (portrait photo, robot toy photo, gradient/aurora graphic, the phone-style
  mockup shape, etc.) have been swapped for `placehold.co` placeholder
  images or plain CSS shapes/gradients, as requested. Swap them out in the
  component files under `/components` with real assets when you have them.
- Headings use **Silkscreen** (pixel font) to match the blocky pixel type
  seen throughout the page. Body copy uses **Raleway**, and UI labels use
  **Questrial** — both fonts are literally named in the site's own
  placeholder copy ("...good text combination, questrial and raleway").
- The live site has a lot of duplicated/looping marquee content (the same
  "Change Model" / "Case Study 02" headings and body paragraph repeated
  many times, and small icons repeated dozens of times) — this is typical
  of an in-progress Framer canvas where components are duplicated for
  review. This clone keeps every *distinct* section/layout that appears in
  the screenshots (hero, circular counter, two Change Model rows, the
  aurora/gradient transition into Case Study 02, the white card with the
  robot image, the two icon+dot "rail" variants, the simple centered
  variant, and the footer) without mechanically repeating identical blocks
  dozens of times.
- The circular "01 / 04" counter and the vertical dot "rail" indicators
  looked scroll-driven/animated on the live site. They're rendered here as
  static decorative components — wire them up to `IntersectionObserver` or
  a library like Framer Motion if you want the scroll-linked behavior back.
- The "Made in Framer" badge is included as a fixed bottom-right element
  since it appears in every screenshot of the live site.

## Structure

```
app/
  layout.js        Root layout, font setup
  page.js           Assembles all sections in scroll order
  globals.css       Tailwind directives
components/
  Navbar.jsx
  HeroCaseStudy.jsx
  CircleCounter.jsx
  ChangeModel.jsx
  AuroraTransition.jsx
  CaseStudy02Card.jsx
  CaseStudy02Rail.jsx
  CaseStudy02Simple.jsx
  Footer.jsx
  MadeInFramerBadge.jsx
  PixelIcons.jsx    Inline SVG icon set (invaders, rocket, gears, pac-man, robot face)
```
