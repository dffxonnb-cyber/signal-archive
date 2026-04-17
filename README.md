# Signal Archive

Signal Archive is a Korean-first portfolio site for presenting data analysis work, problem-framing patterns, and linked writing in one archive-style interface.

## What It Shows

- `Home`: positioning, analytical lens, and featured project selection
- `Projects`: filterable archive with per-project detail pages
- `Case Studies`: recurring problem-solving patterns extracted across projects
- `Writing`: article-level notes connected back to projects
- `Resume`: compressed profile, strengths, stack, and project summary
- `Contact`: public profile and review/contact routes

## Content Model

Portfolio content is stored as structured TypeScript data:

- [`content/profile.ts`](./content/profile.ts)
- [`content/projects.ts`](./content/projects.ts)
- [`content/case-studies.ts`](./content/case-studies.ts)
- [`content/writing.ts`](./content/writing.ts)

This keeps the UI driven by reusable content objects instead of page-local copy.

## Stack

- Next.js App Router
- React 19
- TypeScript
- CSS-based custom UI

## Local Development

1. Install Node.js 20 or newer.
2. Install dependencies.

   ```bash
   npm install
   ```

3. Run the development server.

   ```bash
   npm run dev
   ```

## Checks

- `npm run lint`
- `npm run typecheck`
- `npm run build`

A GitHub Actions workflow is included to run lint, typecheck, and build on pushes and pull requests.

## Current Scope

- Real project links are wired into project detail pages.
- Writing entries now have dedicated detail pages instead of placeholder cards.
- Resume and Contact now expose public-safe profile routes instead of placeholders.
- The portfolio copy is aligned to the current GitHub project archive.

## Verification Note

The current workspace does not have Node.js installed, so I could not run `npm install`, `npm run lint`, or `npm run build` locally in this environment. The repository has been updated to support those checks as soon as Node is available or CI runs on GitHub.
