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

This is a Next.js 16 portfolio website using the App Router with MDX support for blog/project content.

### Tech Stack
- **Framework**: Next.js 16 with React 19 and React Compiler
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Content**: MDX with rehype-pretty-code for syntax highlighting
- **Animation**: Motion library (framer-motion successor)
- **Fonts**: Geist Mono (monospace throughout)

### Project Structure
```
src/
  app/              # Next.js App Router pages
  components/
    layouts/        # Header, footer, sections
    ui/             # shadcn/ui components
    shared/         # Reusable custom components
    mdx/            # Custom MDX components
  content/
    blog/           # Blog MDX files
    projects/       # Project MDX files
  lib/              # Utilities (cn helper, content fetchers)
  types/            # TypeScript definitions
```

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
- Frontmatter schema: title, description, publishedAt, updatedAt, tags, featured, author
- Custom components registered in `src/mdx-components.tsx`
- Content utilities in `/src/lib/content.ts`

### Path Alias
`@/*` maps to `./src/*`
