---
name: add-project
description: This skill should be used when creating a new project page for the portfolio website. It guides through creating MDX files with proper frontmatter, content structure, and placement in the correct directory.
---

# Add Project

## Overview

Create new project pages for the portfolio website by writing MDX files to `src/content/projects/`. Projects are automatically discovered and displayed on the `/projects` page, sorted by publication date (newest first).

## Workflow

### 1. Gather Project Information

Collect the following from the user:
- **Title**: The project name
- **Description**: A brief summary (1-2 sentences)
- **Tags**: Technologies/categories (e.g., React, TypeScript, Next.js)
- **Featured**: Whether to highlight this project (optional, defaults to false)
- **Content**: The project writeup (can be provided or drafted)

### 2. Generate the Slug

Convert the project title to a URL-friendly slug:
- Lowercase all characters
- Replace spaces with hyphens
- Remove special characters
- Example: "My Awesome Project" → `my-awesome-project`

### 3. Create the MDX File

Create a new file at `src/content/projects/{slug}.mdx` with:

1. **YAML Frontmatter** - See `references/frontmatter-schema.md` for the complete schema
2. **Content Body** - MDX content with headings, code blocks, lists, etc.

### 4. Content Structure Guidelines

- Use `## Heading` (h2) and `### Subheading` (h3) for the table of contents
- Include code examples with syntax highlighting using fenced code blocks
- Add links, lists, and blockquotes as needed
- Keep content focused and well-organized

## Example

```mdx
---
title: AI Chat Application
description: A real-time chat application powered by AI with streaming responses.
publishedAt: 2024-03-15
tags:
  - React
  - TypeScript
  - OpenAI
  - WebSocket
featured: true
---

Brief introduction to the project.

## Features

- Feature one
- Feature two

## Technical Implementation

Details about how it works...

### Architecture

Architecture details...

## Conclusion

Summary and links.
```

## Resources

### references/

Contains the frontmatter schema documentation:
- `frontmatter-schema.md` - Complete schema with all required and optional fields
