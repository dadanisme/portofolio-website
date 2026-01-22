# Muhammad Ramdan - Portfolio Website

Personal portfolio website built with Next.js 16, featuring projects showcase and contact information.

## Tech Stack

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Content**: MDX with next-mdx-remote for project pages
- **Fonts**: Geist Mono

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/
    page.tsx              # Home page
    projects/
      page.tsx            # Projects list
      [slug]/page.tsx     # Project detail with MDX
    contact/
      page.tsx            # Contact page
  components/
    sections/             # Page sections (hero, experience, etc.)
    shared/               # Reusable components (navigation, cards)
    mdx/                  # MDX components (headings, images)
    ui/                   # shadcn/ui components
  content/
    projects/             # Project MDX files
  lib/
    constants/            # Navigation and contact constants
    content.ts            # MDX content fetching
    toc.ts                # Table of contents extraction
```

## Adding Projects

Create a new MDX file in `src/content/projects/`:

```mdx
---
title: Project Title
description: Project description
publishedAt: 2024-01-15
tags:
  - React
  - TypeScript
featured: true
---

Project content here...
```

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint
npm run format       # Format with Prettier
```

## License

MIT
