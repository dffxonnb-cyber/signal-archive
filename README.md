# Signal Archive

[![CI](https://github.com/dffxonnb-cyber/signal-archive/actions/workflows/ci.yml/badge.svg)](https://github.com/dffxonnb-cyber/signal-archive/actions/workflows/ci.yml)
[![Live](https://img.shields.io/badge/live-signal--archive-0f766e)](https://signal-archive.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-111827)](https://nextjs.org)

Signal Archive는 Python/SQL 기반 데이터 분석을 웹앱, 서버리스 API, 자동화 검증까지 연결한 데이터 프로덕트형 포트폴리오입니다.
도시, 상권, 공공데이터, CRM 데이터를 판단 가능한 구조로 바꾸고, 분석 결과를 웹 페이지, API route, 대시보드, 문서형 결과물까지 연결하는 흐름을 보여줍니다.

- Live Site: [signal-archive.vercel.app](https://signal-archive.vercel.app)
- Start Here: [signal-archive.vercel.app/start-here](https://signal-archive.vercel.app/start-here)
- Positioning: Data analyst building data products with Python, SQL, React, and automation workflows
- Primary Fit: Data Analyst / Data Product Builder
- Secondary Fit: Spatial Data Analyst / Business & CRM Analytics
- Core Tools: Python, pandas, SQL, React, TypeScript, PostgreSQL/Neon, Vercel, Docker, local n8n/Mailpit validation, Tableau, GIS

## Portfolio Focus

이 사이트는 단순 프로젝트 목록보다 채용 검토자가 빠르게 읽을 수 있는 데이터 프로덕트 포트폴리오를 목표로 합니다.

- 문제를 다시 정의하고 분석 단위를 세우는 과정
- 흩어진 데이터를 판단 가능한 구조로 정리하는 방식
- 지표 설계와 검증을 통해 설명 가능한 결과를 남기는 흐름
- 분석 결과를 README, 상세 페이지, 웹앱, 서버리스 API, 검증 스크립트로 전달하는 방식

## Website Structure

| Route | Purpose |
| --- | --- |
| `/start-here` | 처음 보는 리뷰어와 채용 담당자를 위한 3분 판단 가이드 |
| `/` | 역할 적합성, 핵심 강점, 대표 프로젝트 4개 요약 |
| `/projects` | 필터 가능한 프로젝트 아카이브와 상세 페이지 진입점 |
| `/case-studies` | 여러 프로젝트에서 반복되는 문제 해결 방식 정리 |
| `/writing` | 분석과 결과물 전달 방식에 대한 짧은 글 |
| `/resume` | 역할 적합성, 기술 스택, 프로젝트 기반 이력 요약 |
| `/contact` | 공개 프로필과 연락 경로 |

## Featured Projects

- **Seoul Storefront Redveil**: Python/pandas로 만든 public-safe 상권 payload를 Static HTML/CSS/JS, client-side review state, GitHub Pages 검토 흐름으로 연결한 storefront acquisition risk prototype
- **Shelter Signal**: Vite React TypeScript PWA, Vercel `/api/notices`, Neon operational read path, static/mock fallback, notice-derived `/api/shelters`를 연결한 공공데이터 제품형 MVP
- **LH Traffic Safety Analysis**: Python, GeoPandas, scikit-learn, Jupyter, Streamlit/pydeck으로 교통안전 위험 격자와 설치 우선순위 검증 흐름을 정리한 공간 분석 프로젝트
- **Starbucks Promotion Analysis**: 4인 팀 CRM 분석에서 Python/pandas/scikit-learn 모델링과 Tableau workbook으로 고객·오퍼·채널 반응 구조를 정리한 프로젝트

## Verification Signals

- `Redveil`: unit tests, public-safe payload build, local smoke tests, optional Playwright browser checks, GitHub Pages deployment path를 구분합니다.
- `Shelter Signal`: Neon-backed `/api/notices`, static/mock fallback, notice-derived `/api/shelters`, 별도 V2 브랜치의 로컬 n8n/Mailpit 검증 범위를 구분합니다.
- `LH Traffic Safety Analysis`: 공개 시각화, validation docs, review CSV/images, public-safe dashboard smoke tests를 검토 범위로 둡니다.
- `Starbucks Promotion Analysis`: 공개 artifact checker, pipeline entry-point syntax, Tableau workbook review를 GitHub Actions 검증 범위와 분리해 설명합니다.
- `UK Online Retail Segment Analysis`: 공개 artifact checker와 pipeline entry-point syntax를 검증하며, full notebook execution은 UCI CSV가 필요합니다.
- `NBA Game & Player Analysis`: public artifact check와 synthetic dataframe smoke test로 공개 검토 가능 범위를 확인합니다.
- `ShopEasy`: seed 고정 synthetic dataset generator와 CSV schema/row count/핵심 지표 검증을 추가했습니다.
- `signal-archive`: `typecheck`, `lint`, `build`로 포트폴리오 콘텐츠와 정적 페이지 생성을 검증합니다.

## Content Model

포트폴리오 문구와 프로젝트 정보는 구조화된 TypeScript 데이터로 관리합니다. 페이지별 텍스트를 흩어 두지 않고, 재사용 가능한 콘텐츠 객체를 기반으로 UI를 구성합니다.

- [`content/profile.ts`](./content/profile.ts): 역할, 강점, 연락처, 기술 스택
- [`content/projects.ts`](./content/projects.ts): 프로젝트 카드, 상세 페이지, status, metrics, 링크, 검증 포인트
- [`content/proof-points.ts`](./content/proof-points.ts): 홈 상단 대표 근거 지표
- [`content/case-studies.ts`](./content/case-studies.ts): 문제 해결 패턴과 연결 프로젝트
- [`content/writing.ts`](./content/writing.ts): 글 목록, 본문 섹션, 관련 프로젝트

새 프로젝트를 추가할 때는 [PORTFOLIO_UPDATE_GUIDE.md](./PORTFOLIO_UPDATE_GUIDE.md)를 기준으로 `content/projects.ts`부터 갱신합니다.

## Tech Stack

- Frontend: Next.js 15 App Router, React 19, TypeScript, Custom CSS
- Project delivery: Vite React PWA, Static HTML/CSS/JS, Streamlit/pydeck dashboard, GitHub Pages, Vercel
- Data/Product evidence: Python, pandas, NumPy, GeoPandas, scikit-learn, PostgreSQL/Neon, SQL models/tests, Tableau, GIS
- Serverless/API: Vercel Functions, `/api/notices`, `/api/shelters`, server-side public API proxy, static/mock fallback
- Validation: TypeScript typecheck, ESLint, production build, public artifact checks, smoke tests, documented raw-data boundaries

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

GitHub Actions는 `main` 브랜치 push와 pull request에서 `npm ci`, `typecheck`, `lint`, `build`를 실행합니다.

재현성 기준과 pinned 프로젝트별 검증 범위는 [VERIFY.md](./VERIFY.md)에 정리했습니다.

## GitHub About

Repository About 영역은 아래처럼 맞추는 것을 권장합니다.

- Description: `Python/SQL 기반 데이터 분석을 웹앱, 서버리스 API, 자동화 검증까지 연결한 데이터 프로덕트 포트폴리오`
- Website: `https://signal-archive.vercel.app`
- Topics: `data-analysis`, `portfolio`, `nextjs`, `typescript`, `react`, `spatial-analysis`, `business-intelligence`, `crm-analytics`, `gis`, `public-data`
