# Meridian AI — Website

**Location:** `/home/beni/Documents/MeridianAI/site/`

## What This Is

Marketing website for **Meridian AI LLC** — a web design, local SEO, and AI agent deployment company serving Bellingham, WA and Burlington, WA.

**Brand mascot:** Fenn the Fox (fenn.jpg, fenn_suit.jpg in `/public/`)

## Quick Start

```bash
cd /home/beni/Documents/MeridianAI/site
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Images:** Unsplash (external URLs), Fenn assets (local in `/public/`)
- **Fonts:** System font stack

## Project Structure

```
src/app/
├── page.tsx                    # Homepage
├── layout.tsx                  # Root layout + metadata
├── globals.css                 # Global styles + animations
├── case-studies/
│   ├── page.tsx               # Case studies grid
│   └── [slug]/page.tsx        # Individual case study (SSG)
└── services/page.tsx           # Detailed services breakdown
```

## Key Content Data

### Services (in page.tsx)
| Service | Price Range |
|---------|-------------|
| Basic Website | $500 – $1,200 |
| Professional Website + SEO | $2,000 – $5,000 |
| Premium Website + AI | $5,000 – $15,000 |
| Google Business Profile | $149 – $299 |
| Local SEO Audit | $300 – $800 |
| Monthly SEO Management | $300 – $1,000/mo |
| OpenClaw/Hermes AI Agent | $299 – $799 |

### Case Studies
- **Betty's Bakery** (`/case-studies/bettys-bakery`) — Restaurant, AI agent for email/inventory
- **Bellingham Family Dental** (`/case-studies/bellingham-family-dental`) — Dental, website + local SEO

### Contact
- Currently uses `mailto:hello@meridianai.co`
- Domain not yet purchased — email is placeholder
- No backend API — contact is mailto link only

## Customization Guide

### Colors
Edit `tailwind.config.ts` — brand colors are `brand.*` (teal) and `meridian.*` (orange/teal):
```ts
colors: {
  brand: {
    600: "#0d9488",  // primary teal
    700: "#0f766e",  // darker teal
  },
  meridian: {
    orange: "#ea580c",
    teal: "#0d9488",
    navy: "#0f172a",
  },
}
```

### Fenn the Fox Assets
Located in `/public/`:
- `fenn_suit.jpg` — Primary mascot photo (used in hero, nav, footer)
- `fenn.jpg` — Alternate photo

### Images
Service images use Unsplash URLs (no local copies). Case study images:
- Bakery: `https://images.unsplash.com/photo-1555507036-ab1f4038808a`
- Dental: `https://images.unsplash.com/photo-1629909613654-28e377c37b09`

### Adding a New Case Study
1. Add data to `caseStudiesData` in `/src/app/case-studies/[slug]/page.tsx`
2. Add teaser entry to `caseStudies` array in `/src/app/case-studies/page.tsx`

### Adding a New Page
Create a new folder under `src/app/` with a `page.tsx`.

## Deployment

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy — no special configuration needed

**Domain:** Not yet purchased. After purchase, update:
- `layout.tsx` — `openGraph.url`
- All `mailto:` links in pages

## Related Context (Parent Folder)

Source materials and business planning docs are in `/home/beni/Documents/MeridianAI/`:
- `briefs/meridian-ai-one-pager.md` — Business plan
- `approach-c-design.md` — Growth engine design doc
- `case-studies/*.md` — Full case study writeups (markdown versions)
- `marketing/*.pdf` — One-pager PDF, social content

## Notes for AI Agents

- This is a **static-first** site. No database, no auth, no API routes.
- Contact form is mailto only — no server-side form handling.
- All pages are statically generated at build time (or ISR for slug pages).
- The `Button` component in `@/components/ui` needs `"use client"` if used in a Server Component.
- The case-studies and services pages are `"use client"` to support interactive tab/section navigation on homepage.
