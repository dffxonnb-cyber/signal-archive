# Signal Archive

**Data-driven decision archive and portfolio hub**

[![CI](https://github.com/dffxonnb-cyber/signal-archive/actions/workflows/ci.yml/badge.svg)](https://github.com/dffxonnb-cyber/signal-archive/actions/workflows/ci.yml)
[![Live](https://img.shields.io/badge/live-signal--archive-0f766e)](https://signal-archive.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-111827)](https://nextjs.org)

**[View the live portfolio](https://signal-archive.vercel.app)** ·
**[Start with the reviewer guide](https://signal-archive.vercel.app/start-here)** ·
**[GitHub profile](https://github.com/dffxonnb-cyber)**

Signal Archive is a portfolio archive for data-driven decision systems. Each project records how a broad question becomes a measurable problem, how raw data becomes criteria and risk signals, and how those signals support a clear judgment. The work is organized around a consistent path: **problem → data → criteria → judgment → output**. Rather than presenting analysis as a collection of charts, the archive shows how analysis can become a review framework, dashboard, or web-based decision tool.

## Featured Projects

### Seoul Storefront Redveil

- **Problem:** Before selecting a storefront acquisition candidate, reviewers need to see hold signals, risk reasons, and alternatives.
- **Data / Method:** Combined public, commercial-area, and transaction data; designed risk criteria; and translated the analysis into a static web review flow.
- **Decision Output:** Storefront risk scores, hold-reason categories, alternative-candidate comparisons, and a public review prototype.
- **Role / Contribution:** Defined the problem, designed the risk criteria, structured the data, and implemented the public-facing service.

[Live service](https://dffxonnb-cyber.github.io/Seoul-Storefront-Redveil/) ·
[GitHub repository](https://github.com/dffxonnb-cyber/Seoul-Storefront-Redveil)

### LH Traffic Safety Analysis

- **Problem:** Accident counts alone do not explain where safety facilities should be reviewed first in new cities with limited accident history.
- **Data / Method:** Reorganized public accident, road, and spatial data into grid-based risk units, then evaluated transferability and priority logic.
- **Decision Output:** Explainable risk grids, vulnerable-area priorities, installation-candidate review logic, and map-based evidence.
- **Role / Contribution:** Designed the spatial risk structure, transfer-validation approach, and installation-priority framework.

[GitHub repository](https://github.com/dffxonnb-cyber/LH-traffic-safety-analysis)

### Starbucks Promotion Analysis

- **Problem:** Separate customer, offer, and channel data makes it difficult to identify which groups respond to which promotions.
- **Data / Method:** Restructured semi-structured event logs into joinable customer-offer-channel data, analyzed response patterns, and organized the results in Tableau.
- **Decision Output:** CRM response analysis, offer and channel comparisons, a Tableau dashboard, and marketing-action insights.
- **Role / Contribution:** Served as team lead; redesigned the event structure, interpreted recommendation candidates, and organized the Tableau results.

[GitHub repository](https://github.com/dffxonnb-cyber/starbucks-promotion-analysis)

### Shelter Signal

- **Problem:** A latest-first list of public animal notices does not make time-sensitive notices easy to review first.
- **Data / Method:** Converted notice end dates, status, photo/contact availability, and regional signals into a Rescue Window Score and review labels.
- **Decision Output:** A priority-review flow, notice-derived shelter/contact summaries, and a mobile-first PWA with API and fallback paths.
- **Role / Contribution:** Designed the priority signals and data pipeline, connected the serverless API paths, and implemented the PWA.

[Live demo](https://shelter-signal-ebon.vercel.app/) ·
[GitHub repository](https://github.com/dffxonnb-cyber/shelter-signal)

## Core Strengths

- **Problem framing:** Turn vague questions into a decision question, analysis unit, and measurable review criteria.
- **Risk and priority design:** Build interpretable signals that explain what should be reviewed, held, compared, or prioritized.
- **Analysis to interface:** Communicate findings through dashboards, public web pages, maps, and structured documentation.
- **Decision language:** Translate metrics and model outputs into practical judgment language without overstating certainty.
- **End-to-end delivery:** Connect data preparation, analysis, criteria design, presentation, and validation into a reviewable result.

## Tech Stack

- **Analysis:** Python, pandas, SQL, scikit-learn, Jupyter
- **Visualization and BI:** Tableau, Streamlit/pydeck, Matplotlib, Seaborn
- **Web and delivery:** HTML/CSS/JavaScript, React, Next.js, TypeScript, GitHub Pages, Vercel
- **Data and APIs:** PostgreSQL/Neon, public-data APIs, serverless API routes
- **Spatial analysis:** GeoPandas, QGIS, GeoJSON, spatial grid analysis
- **Validation:** GitHub Actions, public artifact checks, smoke tests

## Review the Archive

| Route | What it shows |
| --- | --- |
| [Start Here](https://signal-archive.vercel.app/start-here) | A short reviewer path for role fit, project evidence, and next steps |
| [Projects](https://signal-archive.vercel.app/projects) | Project-level problems, methods, outputs, links, and verification signals |
| [Case Studies](https://signal-archive.vercel.app/case-studies) | Repeated approaches to risk signals, decision tools, and business interpretation |
| [Resume](https://signal-archive.vercel.app/resume) | Skills, role fit, and project-based experience summary |
| [Contact](https://signal-archive.vercel.app/contact) | Public contact and portfolio links |

## Repository Guide

Portfolio copy is managed as structured TypeScript content:

- [`content/profile.ts`](./content/profile.ts): positioning, strengths, contact links, and stack
- [`content/projects.ts`](./content/projects.ts): project cards, detail pages, decision questions, evidence, and links
- [`content/proof-points.ts`](./content/proof-points.ts): top-level evidence
- [`content/case-studies.ts`](./content/case-studies.ts): repeated problem-solving patterns
- [`content/writing.ts`](./content/writing.ts): writing directory and article content

See [PORTFOLIO_UPDATE_GUIDE.md](./PORTFOLIO_UPDATE_GUIDE.md) for the content update workflow and [VERIFY.md](./VERIFY.md) for the documented verification scope.

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
```

GitHub Actions runs the repository checks on pushes and pull requests to `main`.
