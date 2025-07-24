# Project Guide: Portfolio Website

**Version:** 1.0
**Date:** January 25, 2025

## 1. Overview

This document provides the necessary context, conventions, and workflow for developing a personal portfolio website. Its purpose is to guide an AI development assistant in contributing to the codebase effectively and consistently.

The project's goal is to build a modern, responsive portfolio website to showcase personal projects, skills, and experience.

## 2. Core Mandates for AI Contribution

As an AI assistant, you must adhere to the following principles:

1.  **TypeScript First.** All code should be written in TypeScript. The project is already set up with TypeScript and should maintain this standard.
2.  **Adhere to Existing Conventions.** Before writing any code, analyze the existing project structure, coding style, and architectural patterns. New code should blend in seamlessly.
3.  **Use shadcn/ui Components.** Always prefer shadcn/ui components for UI elements. Check existing components before creating custom ones.
4.  **Incremental and Verifiable Changes.** Implement features and refactors in small, logical steps. Each step should result in a testable and verifiable state.
5.  **Test-Driven Mindset.** All new features, bug fixes, or refactors must be accompanied by corresponding tests.
6.  **Clarity and Communication.** If a request is ambiguous or requires a significant architectural decision, present a clear plan or ask clarifying questions before proceeding.

## 3. Technology Stack

*   **Language:** TypeScript
*   **Framework:** Next.js 15 with App Router
*   **Styling:** Tailwind CSS 4
*   **UI Components:** shadcn/ui
*   **Package Manager:** npm
*   **Development:** Turbopack for fast development builds

## 4. Project Structure

This is a Next.js application with the following structure:

```
.
├── src/
│   └── app/              # Next.js App Router
│       ├── globals.css   # Global styles
│       ├── layout.tsx    # Root layout
│       ├── page.tsx      # Home page
│       └── favicon.ico   # Site favicon
├── public/               # Static assets
│   ├── *.svg            # SVG icons and images
│   └── ...
├── node_modules/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── CLAUDE.md            # This file
└── README.md
```

## 5. Development Workflow

### Setup
Run `npm install` to install all dependencies.

### Development Commands
*   **Run development server with Turbopack:**
    ```bash
    npm run dev
    ```
*   **Build for production:**
    ```bash
    npm run build
    ```
*   **Start production server:**
    ```bash
    npm run start
    ```
*   **Run linting:**
    ```bash
    npm run lint
    ```

## 6. Coding Style and Conventions

*   **Linting:** ESLint is configured with Next.js and TypeScript rules
*   **Naming:**
    *   Use `PascalCase` for components, classes, and type/interface names (e.g., `UserProfile`, `interface User`)
    *   Use `camelCase` for variables and functions (e.g., `const userName`, `function getUserName()`)
*   **File Structure:** Follow Next.js App Router conventions for routing and file organization

## 7. Development Focus

Current development priorities:
1.  Building responsive and modern UI components
2.  Implementing portfolio sections (projects, skills, experience, contact)
3.  Optimizing performance and accessibility
4.  Maintaining clean TypeScript code with proper typing