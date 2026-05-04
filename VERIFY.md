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

## Portfolio Reproducibility Matrix

| Project | Public Verification | Full Reproduction Boundary |
| --- | --- | --- |
| Seoul Storefront Redveil | Unit tests, public-safe payload build, GitHub Pages deployment | Full raw-data rebuild requires public API/source snapshots excluded from the repo. |
| LH Traffic Safety Analysis | Public-safe dashboard smoke tests, validation docs, review CSV/images | Original competition data is not included. |
| Starbucks Promotion Analysis | Public artifact check, pipeline entry-point compile check, public smoke tests | Full notebook execution requires Kaggle CSV files. |
| UK Online Retail Segment Analysis | Public artifact check, pipeline entry-point compile check, public smoke tests | Full notebook execution requires UCI Online Retail CSV. |
| ShopEasy | Static dashboard, deterministic synthetic dataset generator, CSV schema/row count/key metric checks | Synthetic data is generated for portfolio review, not production behavior simulation. |

## Known Limits

- The portfolio verifies that the presentation layer builds correctly.
- Project-specific statistical validation, data availability, and notebook execution are documented in each project's own `VERIFY.md`.
