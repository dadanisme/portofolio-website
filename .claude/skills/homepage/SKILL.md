---
name: homepage
description: This skill should be used when managing homepage/CV content - updating personal info, adding/editing/removing work experience, education entries, or skills. It provides an interactive workflow for content management with data stored in TypeScript files.
---

# Homepage Content Management

## Overview

Manage CV-style content for the portfolio homepage. Content is stored in TypeScript data files under `src/content/homepage/`. The homepage displays four sections: Hero, Experience, Education, and Skills.

## Data Files

| Section    | Data File                            | Component                                |
| ---------- | ------------------------------------ | ---------------------------------------- |
| Hero       | `src/content/homepage/hero.ts`       | `src/components/sections/hero.tsx`       |
| Experience | `src/content/homepage/experience.ts` | `src/components/sections/experience.tsx` |
| Education  | `src/content/homepage/education.ts`  | `src/components/sections/education.tsx`  |
| Skills     | `src/content/homepage/skills.ts`     | `src/components/sections/skills.tsx`     |

## Workflow

### Step 1: Display Current State

Run the script to get a compact summary of all content:

```bash
python3 .claude/skills/homepage/scripts/read_content.py all
```

This outputs a token-efficient summary. To read a specific section:

```bash
python3 .claude/skills/homepage/scripts/read_content.py hero
python3 .claude/skills/homepage/scripts/read_content.py experience
python3 .claude/skills/homepage/scripts/read_content.py education
python3 .claude/skills/homepage/scripts/read_content.py skills
```

For full JSON data: `python3 .claude/skills/homepage/scripts/read_content.py json`

### Step 2: Present Options

Ask the user what they want to do:

- **Hero** - Edit name, title, overview, or primary skills
- **Experience** - Add, edit, or remove work experience
- **Education** - Add, edit, or remove education entries
- **Skills** - Add, edit, or remove skill categories

---

## Hero Section

File: `src/content/homepage/hero.ts`

### Data Structure

```typescript
export interface HeroData {
  name: string;
  title: string;
  overview: string;
  primarySkills: string[];
}
```

### Edit Workflow

1. Ask which field to edit
2. Read the file to get current value
3. Get new value from user
4. Update the exported `hero` object

---

## Experience Section

File: `src/content/homepage/experience.ts`

### Data Structure

```typescript
export interface Role {
  title: string;
  type: string; // "Full-time" | "Part-time" | "Freelance" | "Internship" | "Apprenticeship" | "Self-Employed"
  period: string; // "Mon YYYY - Mon YYYY" or "Mon YYYY - Present"
  bullets: string[];
}

export interface Job {
  company: string;
  location: string; // "City, Country (Remote)" or "City, Country"
  roles: Role[];
}
```

### Add Experience

1. Gather: company name, location, role details (title, type, period, bullets)
2. Determine position (most recent jobs appear first in array)
3. Add new entry to the `jobs` array

### Edit Experience

1. Ask which company/role to edit (by number from script output)
2. Read the file to get current data
3. Ask what to modify (company, location, role details, bullets)
4. Apply changes

### Remove Experience

1. Ask which company to remove (by number)
2. Confirm deletion
3. Remove entry from the `jobs` array

---

## Education Section

File: `src/content/homepage/education.ts`

### Data Structure

```typescript
export interface Education {
  institution: string;
  degree: string;
  gpa?: string;
  location: string;
  period: string; // "YYYY - YYYY"
}
```

### Add/Edit/Remove Education

Same workflow as Experience - modify the `education` array.

---

## Skills Section

File: `src/content/homepage/skills.ts`

### Data Structure

```typescript
export interface SkillCategory {
  title: string;
  skills: string[];
}
```

### Add Skill Category

1. Get category title
2. Get initial skills list
3. Add to `skillCategories` array

### Edit Skill Category

1. Ask which category (by number or title)
2. Options: rename, add skills, remove skills, reorder

### Remove Skill Category

1. Ask which category to remove
2. Confirm deletion
3. Remove from array

---

## Content Guidelines

- Keep overview paragraph concise (3-5 sentences)
- Use action verbs for experience bullets ("Led", "Built", "Developed")
- Include quantifiable metrics where possible ("handled 300+ users")
- Order experience chronologically (most recent first)
- Group related skills in appropriate categories

## Resources

### scripts/

- `read_content.py` - Parses data files and outputs compact summary

### references/

- `data-schema.md` - TypeScript interfaces for all section data
