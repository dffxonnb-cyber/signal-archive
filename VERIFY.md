# Verification Guide

Signal Archive is the portfolio hub. Its verification target is whether the public portfolio can be rebuilt from tracked structured content, whether current representative-project claims point to public evidence, and whether each linked repository's verification boundary is described without expanding beyond what that repository actually proves.

## Verification Scope

| Area | Publicly Verifiable | Notes |
| --- | --- | --- |
| Portfolio build | Yes | Next.js routes are built from tracked TypeScript content and override layers. |
| Content consistency | Yes | A Node check enforces the canonical content alias and override chain, representative-project contracts, slugs, public assets, relative documentation links, URL syntax, and stale-phrase exclusions. |
| Type safety | Yes | `tsc --noEmit` checks project content, components, and route types. |
| Linting | Yes | ESLint checks the app, content, scripts, and component code. |
| Production build | Yes | `next build` generates the deployable portfolio pages. |
| Underlying project data | Repository-specific | Each project repository owns its raw-data, model, pipeline, and production boundary. |

## Structured Content Path

Hiring-facing imports use the exact `tsconfig.json` alias below:

```text
@/content/projects
→ content/projects-hiring.ts
→ content/projects-decisionops.ts
→ content/projects-current.ts
→ content/projects-public.ts
→ content/projects-v2.ts
→ content/projects.ts
```

The final file in that chain contains the base project records; each preceding layer applies a narrower public-safe override before the objects reach the app:

- `projects-v2.ts`: Redveil V2 official product and evidence.
- `projects-public.ts`: public-status evidence and canonical LH scope.
- `projects-current.ts`: Shelter Signal V1 current layer and V2 history-aware layer.
- `projects-decisionops.ts`: DecisionOps three-guardrail, seven-scenario workflow.
- `projects-hiring.ts`: removes private-repository links from hiring-facing output.

The content check fails if the exact alias or any import in this chain is removed or redirected.

## Automated Content Contracts

`npm run check:content` verifies:

- Redveil uses the official GitHub Pages `/v2/` URL and retains Chromium E2E evidence.
- Shelter contains the seven change-event types, daily 06:20 KST collection wording, `#changes`, `#briefing`, and D-Day~D-3 boundary.
- DecisionOps contains all seven scenario names and D7 revisit, refund rate, and session activity guardrails with the 3/7 counts.
- Representative and supporting project slugs are unique, and hard-coded `/projects/<slug>` routes reference known project records.
- `src: "/..."` evidence references in structured content exist under `public/`.
- Relative Markdown links resolve to tracked files.
- Public URL strings are syntactically valid HTTPS URLs.
- Hiring-facing files do not reintroduce known stale wording such as five-scenario, local V2 dry-run, D7-only, or optional-browser-check descriptions.

This is a repository-level consistency contract. It does not make external network requests or independently rerun the linked repositories.

## Local Verification

```bash
npm ci
npm run check:content
npm run typecheck
npm run lint
npm run build
```

## CI Verification

GitHub Actions runs the same sequence on `main` pushes and pull requests:

```bash
npm ci
npm run check:content
npm run typecheck
npm run lint
npm run build
```

A passing Signal Archive CI run proves that the canonical content path and representative-project contracts are intact, the structured content is type-valid, and the portfolio can be linted and built. It does not rerun every linked project's data pipeline.

## Verification Boundaries

### Verified Portfolio Behavior

- Signal Archive itself is verified through content consistency, typecheck, lint, and production build.
- Public project links are presented as reviewable artifacts such as GitHub Pages products, Vercel routes, repository documents, tracked reports, public-safe JSON, Tableau files, screenshots, and evidence notes.
- Representative-project wording is limited to evidence available in the linked public repositories.
- Project-specific validation is delegated to each repository rather than being duplicated inside this portfolio repository.

### Representative Project Status

#### Seoul Storefront Redveil V2

- The official reviewer entry point is the GitHub Pages `/v2/` product; the root V1 interface is retained as legacy.
- Repository verification covers public-safe payload checks, unit checks, responsive Chromium E2E, route/state continuity, recovery states, and GitHub Pages delivery.
- The project is a screening and review product, not investment advice, a return forecast, an individual-property accuracy guarantee, or professional legal, tax, finance, or brokerage guidance.

#### Shelter Signal V1 / V2

- V1 is the current-notice layer: server-side data.go.kr access, KST deadline normalization, current/urgent/protected/archive views, region filtering, pagination, short cache, and explicit source/fallback metadata.
- A valid live zero-result response remains an API empty state; fallback is used only when live and usable cache paths are unavailable.
- V2 is the history-aware layer: a daily 06:20 KST GitHub Actions workflow creates public-safe latest/monthly snapshots, daily change events, missing-state records, and per-notice cumulative timelines.
- The V2 change model includes `NEW`, `DEADLINE_CHANGED`, `STATUS_CHANGED`, `BECAME_URGENT`, `NOT_OBSERVED`, `DISAPPEARED`, and `RETURNED`.
- The deadline briefing combines D-Day~D-3 status with observed change reasons. It is not an official risk score, adoption prediction, euthanasia prediction, or real notification delivery system.
- User accounts, permanent subscriptions, external email/SMS/push delivery, shelter-capacity operations, adoption outcome tracking, and production SLA are excluded.

#### DecisionOps Lab

- The repository uses reproducible synthetic product events, DuckDB SQL layers, 23 data-quality checks, experiment evidence, decision rules, tracked reports, and GitHub Actions verification.
- The default `strong_positive` case reports activation 30.15% → 34.12%, absolute lift +3.97pp, and p-value 0.000011.
- Three guardrails are evaluated: D7 revisit, refund rate, and average session activity.
- Seven scenarios are reproduced: `strong_positive`, `guardrail_risk`, `refund_risk`, `session_activity_risk`, `weak_evidence`, `neutral`, and `quality_failure`.
- Scenario outcomes cover Ship, Retest, Hold, and Investigate.
- This is synthetic workflow evidence, not real user behavior, real product performance, a live production experiment, or production warehouse operation.

#### LH Traffic Safety Analysis

- Public verification separates the regression risk signal, the separate classification-based LORO validation, and the public review score used for the Top-20 field-review table.
- The canonical public scope includes tracked evidence, verification scripts, public-safe review artifacts, and generated-artifact freshness checks.
- Fold-level LORO source outputs, run-level Monte Carlo outputs, the full private model-to-public-score lineage, and a verifiable public dashboard remain outside the public evidence set unless separately published.
- The result is a field-review prioritization signal, not proof of facility effectiveness or accident reduction.

### Supporting Project Boundaries

- Starbucks Promotion and UK Online Retail use public artifact checks and pipeline-entry verification; full notebook reproduction requires locally supplied source datasets that are not redistributed.
- ShopEasy uses a deterministic synthetic commerce dataset for portfolio review rather than production behavior simulation.
- Job Signal Pipeline remains mock/local validation and does not claim a live recruitment API schedule, production monitoring, or notification delivery.
- NBA Game & Player Analysis keeps archive-level public artifacts and synthetic smoke tests; full execution requires excluded source datasets.

## Portfolio Reproducibility Matrix

| Project | Public Verification | Full Reproduction Boundary |
| --- | --- | --- |
| Seoul Storefront Redveil V2 | Official `/v2/` product, public-safe payload checks, unit checks, responsive Chromium E2E, GitHub Pages deployment | Full raw-input rebuild requires excluded source snapshots; the product does not provide investment or professional advice. |
| Shelter Signal V1 / V2 | V1 live API/cache/fallback metadata; daily public-safe snapshots; seven change-event types; cumulative timelines; deadline briefing; CI snapshot self-tests and app build | Upstream completeness and continuous availability are not guaranteed; observed changes do not prove final animal outcomes; accounts and external notification delivery are excluded. |
| DecisionOps Lab | DuckDB SQL marts, 23/23 quality checks, A/B evidence, three guardrails, seven-scenario matrix, memo, public reviewer report, GitHub Actions | Synthetic workflow only; no real product impact, live experiment operation, production warehouse scale, or production business outcome is claimed. |
| LH Traffic Safety Analysis | Canonical public-safe evidence, rebuild scripts, tests, generated-artifact diff check, review CSV/images | Original private/competition inputs and complete private lineage are excluded; no facility installation or accident-reduction outcome is proven. |
| Starbucks Promotion Analysis | Public artifact checker, pipeline-entry compile check, Tableau workbook and screenshots | Full notebook execution requires locally supplied Kaggle source files; CI does not retrain the model. |
| UK Online Retail Segment Analysis | Public artifact checker, pipeline-entry compile check, docs/images review | Full notebook execution requires locally supplied UCI data; thresholds need revalidation in a new business context. |
| ShopEasy | Static dashboard, deterministic synthetic generator, schema/row-count/key-metric checks | Synthetic portfolio data only; browser visual regression and production behavior validation are not included. |
| Job Signal Pipeline | Mock ingestion, PostgreSQL raw loading, analytics views, SQL tests, local review-dashboard docs | Live Saramin operation, production schedules, monitoring, and notification delivery are excluded. |
| NBA Game & Player Analysis | Public artifact check, synthetic dataframe smoke test, tracked outputs and docs | Full pipeline execution requires locally supplied source CSV files; live data integration is excluded. |

## Claim Rules

- A portfolio statement must not convert a tracked prototype or synthetic workflow into a production-impact claim.
- A public link proves access to that artifact, not full raw-data reproducibility.
- A passing portfolio build proves presentation integrity, not the statistical validity of every linked result.
- A fallback or mock path must be labeled separately from live or production-origin data.
- Missing observations, model scores, guardrails, and ranking signals must retain the interpretation limits defined by their source repositories.

## Known Limits

- Signal Archive does not rerun all external project repositories from one monorepo command.
- URL verification is syntactic and local; CI does not make network calls to prove that every external service is reachable at that moment.
- Evidence-date freshness still follows each source repository's update cadence; this check prevents structural drift but does not infer whether a source dataset should have refreshed today.
- Project-specific statistical validation, raw-data availability, and notebook execution remain documented in each project's repository-level verification guide.
