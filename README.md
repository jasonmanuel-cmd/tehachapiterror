# Tehachapi Terror

Modern rebuild of the Tehachapi Terror haunted house site — React + Vite + Tailwind CSS v4, with an animated
canvas smoke/fog background and drifting Halloween sprites (ghosts, bats, pumpkins, spiders) throughout.

## Status

All content in `src/data/siteContent.js` is **mock/placeholder** — story copy, hours, ticket prices, FAQ,
testimonials, and gallery are stand-ins pending the real content and photography. Swap that file's values,
and replace the gallery placeholder tiles in `src/sections/Gallery.jsx` with real images, before launch.

## Structure

- `src/components/SmokeBackground.jsx` — canvas fog animation, sits behind everything
- `src/components/FloatingSpookyThings.jsx` — drifting ghost/bat/pumpkin/spider layer
- `src/components/SplashGate.jsx` — spooky "enter if you dare" gate shown once per session
- `src/sections/` — page sections (hero, story, attractions, hours & tickets, gallery, FAQ, testimonials, location, footer)
- `src/data/siteContent.js` — all site copy/content in one place

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
