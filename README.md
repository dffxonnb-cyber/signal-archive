# Signal Archive

A hiring portfolio connecting data analysis, structured problem solving, and written communication.

## Overview

Signal Archive is a Korean-first portfolio site for Choi Dabin. Instead of a simple project gallery, the site is structured as an archive-style interface that connects:

- analysis projects
- problem-solving case studies
- writing and reflective notes

The goal is to show not only what was built, but how problems were framed, structured, and verified.

## Current structure

- `Home`: positioning, featured projects, case study previews, writing entry points
- `Projects`: filterable project archive with dynamic detail pages
- `Case Studies`: extracted problem-solving patterns across projects
- `Writing`: unified writing directory with platform and category filters
- `Resume`: compressed hiring summary
- `Contact`: direct contact links

## Content model

Portfolio content is stored as structured TypeScript data:

- [`content/profile.ts`](./content/profile.ts)
- [`content/projects.ts`](./content/projects.ts)
- [`content/case-studies.ts`](./content/case-studies.ts)
- [`content/writing.ts`](./content/writing.ts)

This keeps the UI tied to reusable data instead of page-specific copy.

## Tech stack

- Next.js App Router
- TypeScript
- CSS-based UI foundation for the initial scaffold

## Local development

1. Install Node.js 20 or newer.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

## Notes

- This repository was scaffolded in an environment without Node.js installed, so dependency installation and local runtime verification still need to be done on a machine with Node available.
- The next implementation pass should focus on article-level writing entries, external project links, and deployment setup.
