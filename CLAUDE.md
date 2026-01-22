# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format with Prettier
npm run format:check # Check formatting
```

## Architecture

This is a Next.js 16 portfolio website using the App Router with MDX support for project content.

### Tech Stack

- **Framework**: Next.js 16 with React 19 and React Compiler
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Content**: MDX with next-mdx-remote for dynamic project pages
- **Animation**: Motion library (framer-motion successor)
- **Fonts**: Geist Mono (monospace throughout)

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

- `/` - Home page with hero, experience, education, skills
- `/projects` - Projects list with cards
- `/projects/[slug]` - Project detail with MDX content and table of contents
- `/contact` - Contact page with card-based layout

### Key Patterns

**Server vs Client Components**:

- `page.tsx` files are ALWAYS Server Components - never add `'use client'`
- Extract interactive parts to separate client component files
- Use `'use client'` only when hooks, event handlers, or browser APIs are needed

**Styling**:

- Use semantic color tokens: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`
- OKLCH color system defined in `globals.css` with light/dark mode support
- No shadows, no border-radius (--radius: 0rem)

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

- Tab bar with Home, Projects, Contact
- Contact links (email, LinkedIn) hidden on mobile
- Active state detection using `usePathname()`

### Path Alias

`@/*` maps to `./src/*`
