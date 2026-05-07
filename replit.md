# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite + Tailwind v4 + shadcn (New York style)
- **Routing**: wouter

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Project: LORA Foreign Employment Website

**LORA Foreign Employment (Pvt) Ltd** — a Sri Lankan overseas recruitment agency website.

### Artifact: `artifacts/lora-web` (react-vite, preview path: `/`)

Migrated from Lovable.dev. Pure frontend site — no backend, no auth, no database.

**Pages:**
- `/` — Homepage with hero, vision/mission, four pillars, services, CTA
- `/jobs` — Job listings (9 hardcoded overseas positions)
- `/about` — Company story, team, managing directors with photos
- `/contact` — Office info, phone/email, embedded Google Map
- `/apply` — WhatsApp application redirect

**Key components:**
- `src/components/Header.tsx` — Sticky nav with LORA logo, active link highlighting
- `src/components/Footer.tsx` — Full footer with links, contact info, hours
- `src/components/Reveal.tsx` — Scroll-reveal animation using IntersectionObserver
- `src/components/ui/button.tsx` — Extended with `hero` and `glow` variants

**Design system:** Tailwind v4 + OKLCH colors. Custom CSS vars: `--gradient-hero`, `--gradient-primary`, `--gradient-accent`, `--gradient-overlay`, `--shadow-elegant`, `--shadow-glow`, `--shadow-card`.

**Assets:** `src/assets/` — `hero.jpg`, `about.jpg`, `lora-logo.png`, `director-rasanjali.jpeg`, `director-udeshika.jpeg`

**WhatsApp contact:** `https://wa.me/94704040407`
