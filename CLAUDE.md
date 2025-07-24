# Project Guide: Muhammad Ramdan (dadanisme) Portfolio Website

**Version:** 1.0
**Date:** January 25, 2025

## 1. Overview

This document provides the necessary context, conventions, and workflow for developing Muhammad Ramdan's personal portfolio website. Its purpose is to guide an AI development assistant in contributing to the codebase effectively and consistently.

**Project Goal:** Build a modern, responsive portfolio website for Muhammad Ramdan (dadanisme), a World-Class Developer & Product Innovator, showcasing his expertise in full-stack development, team leadership, and diverse project portfolio.

**Target Audience:** Tech recruiters, startup founders, enterprise clients, and freelance opportunities.

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
├── docs/                 # Documentation
│   ├── PRD.md           # Product Requirements Document
│   ├── PORTFOLIO_INFO.md # User information questionnaire
│   └── Formatted_Work_Experience.csv # Work experience data
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

## 7. Portfolio-Specific Context

### 7.1 Personal Information
- **Name:** Muhammad Ramdan (nickname: dadanisme)
- **Title:** World-Class Developer & Product Innovator  
- **Location:** Bali, Indonesia
- **Email:** huntercitation@gmail.com
- **Social:** LinkedIn, GitHub, Facebook profiles available

### 7.2 Key Experience Highlights
- **Current Roles:** 
  - Software Developer Team Lead at Stockifi.io (Europe-based, remote)
  - Lead Software Engineer at Kreasof AI (early-stage startup)
  - Tech Student at Apple Developer Academy @BINUS Bali
- **Expertise:** React/TypeScript, Swift, team leadership, scalable solutions
- **Experience:** 5+ years, managed teams, served 300+ users globally

### 7.3 Featured Projects to Showcase
1. **Stockifi Trading Platform** - Enterprise React/TypeScript application
2. **AI-Powered Drone Inspection Dashboard** - Real-time data visualization  
3. **WebGIS Mapping Solutions** - Interactive mapping with OpenLayers/Mapbox
4. **Smart Tracking System** - Firebase automation tools
5. **Mobile Trading App** - React Native financial application

### 7.4 Development Priorities
1. Building responsive and modern UI components using shadcn/ui
2. Implementing portfolio sections (hero, about, skills, projects, experience, contact)
3. Showcasing technical expertise and leadership experience
4. Optimizing for target audience (recruiters, startup founders, clients)
5. Maintaining clean TypeScript code with proper typing

### 7.5 Design Requirements
- Clean, professional aesthetic suitable for "World-Class Developer" branding
- Dark mode support with shadcn/ui theming
- Mobile-first responsive design
- Fast performance (< 3 seconds load time)
- Accessibility compliance (WCAG AA)