# Signal Archive

[![CI](https://github.com/dffxonnb-cyber/signal-archive/actions/workflows/ci.yml/badge.svg)](https://github.com/dffxonnb-cyber/signal-archive/actions/workflows/ci.yml)
[![Live](https://img.shields.io/badge/live-signal--archive-0f766e)](https://signal-archive.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-111827)](https://nextjs.org)

Signal Archive는 문제 정의, 분석 설계, 검증 중심 작업을 정리한 데이터 분석 포트폴리오입니다.
도시, 상권, 공공데이터, CRM 데이터를 판단 가능한 구조로 바꾸고, 분석 결과를 웹 페이지와 문서형 결과물까지 연결하는 흐름을 보여줍니다.

- Live Site: [signal-archive.vercel.app](https://signal-archive.vercel.app)
- Start Here: [signal-archive.vercel.app/start-here](https://signal-archive.vercel.app/start-here)
- Primary Role: Data Analyst / Spatial Data Analyst
- Secondary Fit: Business Data Analyst / CRM Analytics
- Core Tools: Python, SQL, pandas, Jupyter, Tableau, JavaScript, GIS

## Portfolio Focus

이 사이트는 단순 프로젝트 목록보다 채용 검토자가 빠르게 읽을 수 있는 분석 포트폴리오를 목표로 합니다.

- 문제를 다시 정의하고 분석 단위를 세우는 과정
- 흩어진 데이터를 판단 가능한 구조로 정리하는 방식
- 지표 설계와 검증을 통해 설명 가능한 결과를 남기는 흐름
- 분석 결과를 README, 상세 페이지, 웹 결과물로 전달하는 방식

## Website Structure

| Route | Purpose |
| --- | --- |
| `/start-here` | 처음 보는 리뷰어와 채용 담당자를 위한 3분 판단 가이드 |
| `/` | 역할 적합성, 핵심 강점, 대표 프로젝트 3개 요약 |
| `/projects` | 필터 가능한 프로젝트 아카이브와 상세 페이지 진입점 |
| `/case-studies` | 여러 프로젝트에서 반복되는 문제 해결 방식 정리 |
| `/writing` | 분석과 결과물 전달 방식에 대한 짧은 글 |
| `/resume` | 역할 적합성, 기술 스택, 프로젝트 기반 이력 요약 |
| `/contact` | 공개 프로필과 연락 경로 |

## Featured Projects

- **Seoul Storefront Redveil**: 서울 상권 매입 검토에 필요한 확인 포인트를 공개 웹 서비스로 정리한 프로젝트
- **LH Traffic Safety Analysis**: 공공 교통사고 데이터와 공간 정보를 바탕으로 설치 우선순위 판단 흐름을 설계한 프로젝트
- **UK Online Retail Segment Analysis**: RFM 세그먼트를 매출, 재구매, 캠페인 우선순위로 해석한 프로젝트

## Verification Signals

- `ShopEasy`: seed 고정 synthetic dataset generator와 CSV schema/row count/핵심 지표 검증을 추가했습니다.
- `Starbucks Promotion Analysis`: 공개 artifact checker와 public smoke tests를 GitHub Actions에 연결했습니다.
- `UK Online Retail Segment Analysis`: 공개 artifact checker와 public smoke tests를 GitHub Actions에 연결했습니다.
- `signal-archive`: `typecheck`, `lint`, `build`로 포트폴리오 콘텐츠와 정적 페이지 생성을 검증합니다.

## Content Model

포트폴리오 문구와 프로젝트 정보는 구조화된 TypeScript 데이터로 관리합니다. 페이지별 텍스트를 흩어 두지 않고, 재사용 가능한 콘텐츠 객체를 기반으로 UI를 구성합니다.

- [`content/profile.ts`](./content/profile.ts): 역할, 강점, 연락처, 기술 스택
- [`content/projects.ts`](./content/projects.ts): 프로젝트 카드, 상세 페이지, 링크, 검증 포인트
- [`content/case-studies.ts`](./content/case-studies.ts): 문제 해결 패턴과 연결 프로젝트
- [`content/writing.ts`](./content/writing.ts): 글 목록, 본문 섹션, 관련 프로젝트

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Custom CSS
- Vercel deployment

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

- Description: `문제 정의, 분석 설계, 검증 중심 작업을 정리한 데이터 분석 포트폴리오`
- Website: `https://signal-archive.vercel.app`
- Topics: `data-analysis`, `portfolio`, `nextjs`, `typescript`, `react`, `spatial-analysis`, `business-intelligence`, `crm-analytics`, `gis`, `public-data`
