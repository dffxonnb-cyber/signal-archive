# Verification Guide

Signal Archive is the portfolio hub. Its verification target is not raw data analysis reproduction, but whether the published portfolio can be rebuilt from structured content and whether linked project evidence is organized consistently.

## Verification Scope

| Area | Publicly Verifiable | Notes |
| --- | --- | --- |
| Portfolio build | Yes | Next.js static routes are built from tracked TypeScript content files. |
| Type safety | Yes | `tsc --noEmit` checks content and route types. |
| Linting | Yes | ESLint checks the app, content, and component code. |
| Production build | Yes | `next build` generates the public portfolio pages. |
| Underlying project data | No | Each project repository owns its own data and validation scope. |

## Local Verification

```bash
npm ci
npm run typecheck
npm run lint
npm run build
```

## CI Verification

GitHub Actions runs the same sequence on `main` pushes and pull requests:

```bash
npm ci
npm run typecheck
npm run lint
npm run build
```

## Verification Boundaries

### Verified Public Behavior

- The `signal-archive` portfolio itself is verified through typecheck, lint, and production build.
- Public project links are presented as reviewable artifacts: GitHub Pages sites, Vercel PWA routes, README documents, Tableau workbook files, dashboard screenshots, and tracked validation docs.
- Project-specific public checks are intentionally scoped to what each repository can verify without hidden raw datasets or private credentials.

### Local Validation

- Redveil, LH, Starbucks, UK Retail, NBA, and ShopEasy each keep repository-level verification scripts or CI checks for public artifacts, smoke tests, or entry-point syntax.
- Shelter Signal additionally documents local PostgreSQL, SQL tests, static export, and separate V2 n8n/Mailpit dry-run validation.
- Local validation should not be read as monitoring or notification delivery for real recipients.

### Mock, Sample, And Fallback Behavior

- Shelter Signal currently uses Neon fallback rows based on local mock/export validation data, with static JSON and mock data fallback.
- ShopEasy uses a deterministic synthetic dataset designed for portfolio review and dashboard signal consistency.
- Redveil can rebuild the public payload from raw inputs when available, but public review relies on a tracked public-safe snapshot.

### Excluded Production Scope

- Accounts, subscriptions, notifications, payment/auth flows, monitoring, real recipients, and live business operations are not claimed unless the linked project explicitly implements them.
- Raw competition/Kaggle/UCI datasets are excluded where redistribution is not appropriate.
- Notebook/model reruns that require excluded data are documented as local reproduction paths, not CI-verified public behavior.

## Portfolio Reproducibility Matrix

| Project | Public Verification | Full Reproduction Boundary |
| --- | --- | --- |
| Seoul Storefront Redveil | Unit tests, public-safe payload build, local smoke tests, optional Playwright browser checks, GitHub Pages artifact | Full raw-data rebuild requires excluded source snapshots; the service is a screening prototype, not investment advice. |
| Shelter Signal | Deployed Vite React PWA, live `/api/notices` path with Neon/static/mock fallback, notice-derived `/api/shelters` | Hosted Neon rows are mock/export validation support; hosted public-data ingestion and notification operations are outside the verified scope. |
| LH Traffic Safety Analysis | Public-safe dashboard smoke tests, validation docs, review CSV/images, README visuals | Original competition/geospatial data is excluded; full GRF/grid pipeline rerun requires local source data. |
| Starbucks Promotion Analysis | Public artifact checker, pipeline entry-point compile check, Tableau workbook and screenshots | Full notebook execution requires Kaggle `portfolio.csv`, `profile.csv`, and `transcript.csv`; CI does not retrain models. |
| UK Online Retail Segment Analysis | Public artifact checker, pipeline entry-point compile check, docs/images review | Full notebook execution requires UCI `Online_Retail.csv`; segment thresholds should be revalidated for a new business context. |
| NBA Game & Player Analysis | Public artifact check, synthetic dataframe smoke test, tracked PNG outputs and docs | Full pipeline execution requires Kaggle `games.csv`, `games_details.csv`, `players.csv`, and `teams.csv`; live data integration is not included. |
| ShopEasy | Static dashboard, deterministic synthetic dataset generator, CSV schema/row count/key metric checks | Synthetic data is generated for portfolio review, not production behavior simulation; browser visual regression is not included. |

## Shelter Signal Verification Boundary

- The deployed PWA calls `/api/notices` through live/fallback handling and can fall back to Neon-hosted rows, static JSON, then mock data when the operational path fails or returns no notices.
- `/api/shelters` is a server-side, notice-derived contact summary built from shelter name, phone, address, and jurisdiction fields in rescue animal notices. It is not a complete official shelter directory.
- The V2 branch separately verifies PostgreSQL alert candidates, digest HTML generation, a local n8n dry-run bridge, and Mailpit local SMTP capture.
- Email sending to real recipients, SMS, authentication, subscriptions, activated schedules, and notification operations are outside the implemented and verified scope.

## Known Limits

- The portfolio verifies that the presentation layer builds correctly.
- Project-specific statistical validation, data availability, and notebook execution are documented in each project's own `VERIFY.md`.
