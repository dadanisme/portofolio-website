# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start development server
bun run build    # Production build
bun lint         # Run ESLint
bun lint:fix     # Auto-fix ESLint issues
bun format       # Format with Prettier
bun format:check # Check formatting
```

## Architecture

This is a Next.js 16 portfolio website using the App Router with MDX support for project content.

### Tech Stack

- **Framework**: Next.js 16 with React 19 and React Compiler
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Content**: MDX with next-mdx-remote for dynamic project pages
- **Animation**: Motion library (framer-motion successor); CSS keyframes for page-load reveals
- **Fonts**: Instrument Serif (display, italic), Geist Sans (body), Geist Mono (metadata). Loaded via `next/font/google` in `app/layout.tsx` as CSS vars `--font-instrument-serif`, `--font-geist-sans`, `--font-geist-mono`.

### Project Structure

```
src/
  app/
    page.tsx              # Home page
    projects/
      page.tsx            # Projects list
      [slug]/page.tsx     # Project detail with MDX + TOC
    contact/
      page.tsx            # Contact page
  components/
    sections/             # Page sections (hero, experience, education, skills)
    ui/                   # shadcn/ui components
    shared/               # Reusable components (navigation, cards, TOC)
    mdx/                  # Custom MDX components (heading, mdx-image)
  content/
    projects/             # Project MDX files
  lib/
    constants/            # Navigation links, contact info
    content.ts            # MDX content fetching utilities
    toc.ts                # Table of contents extraction
    mdx-config.tsx        # MDX component configuration
  types/
    content.ts            # Content type definitions
```

### Routes

- `/` - Home page with hero, experience, education, skills (editorial 12-col layout)
- `/projects` - Currently disabled (returns notFound); re-enable in `navigation.ts` when content is ready
- `/projects/[slug]` - Currently disabled (returns notFound)
- `/contact` - Editorial contact index with numbered rows

### Key Patterns

**Server vs Client Components**:

- `page.tsx` files are ALWAYS Server Components - never add `'use client'`
- Extract interactive parts to separate client component files
- Use `'use client'` only when hooks, event handlers, or browser APIs are needed

**Styling**:

- Use semantic color tokens: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `text-accent` (oxblood)
- OKLCH color system defined in `globals.css` with light/dark mode support (warm paper in light, warm charcoal in dark)
- No shadows, no border-radius (--radius: 0rem)

**Editorial aesthetic** (defined in `globals.css` `@layer components`):

- `.display-serif` — oversized italic Instrument Serif for hero & section titles
- `.eyebrow` — mono uppercase 11px with wide tracking, for labels and section markers
- `.meta` — mono 12px for dates, locations, metadata
- `.folio` — mono uppercase small caps for page-folio style labels (e.g. "12 entries")
- `.link-slide` — underline-slide hover effect
- `.rule` / `.rule-thick` — horizontal keylines
- Oxblood accent (`--accent-ink`) is reserved for emphasis: name slashes, bullet dashes, hover states, selection
- Layouts use 12-col asymmetric grids (`grid grid-cols-12 gap-x-6`) with generous vertical rhythm; no cards/boxes — rely on keyline dividers
- Grain overlay is applied globally via `body::before` SVG noise (do not add per-component)
- Avoid Roman numerals in UI copy — use plain years

**File Conventions**:

- Max 150 lines per file - split into logical modules
- File names: kebab-case (`blog-card.tsx`)
- Component names: PascalCase (`BlogCard`)

**MDX Content**:

- Frontmatter schema: title, description, publishedAt, updatedAt, tags, featured
- Custom components in `src/lib/mdx-config.tsx`
- Content utilities in `src/lib/content.ts`
- TOC extraction in `src/lib/toc.ts`

**Navigation**:

- Sticky top masthead with portfolio marker, center-aligned nav, right-aligned Email/LinkedIn
- Nav links use `.eyebrow` mono caps; active state shows a 16px rule before the label
- Contact links (email, LinkedIn) hidden below `md` breakpoint
- Active state detection using `usePathname()`

### Path Alias

`@/*` maps to `./src/*`
