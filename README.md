# Signal Archive

<p align="center">
  <strong>데이터 기반 의사결정 아카이브 · 포트폴리오 허브</strong>
</p>

<p align="center">
  분석 프로젝트를 단순히 모아두는 공간이 아니라,<br/>
  질문이 어떻게 판단 기준, 리스크 신호, 검증 가능한 산출물로 바뀌는지 기록하는 아카이브입니다.
</p>

<p align="center">
  <a href="https://signal-archive.vercel.app/"><strong>Live Portfolio</strong></a>
  ·
  <a href="https://signal-archive.vercel.app/start-here"><strong>Reviewer Guide</strong></a>
  ·
  <a href="https://dffxonnb-cyber.github.io/Seoul-Storefront-Redveil/v2/"><strong>Redveil V2</strong></a>
  ·
  <a href="docs/reviewer-path.md"><strong>Reviewer Path</strong></a>
  ·
  <a href="https://github.com/dffxonnb-cyber"><strong>GitHub Profile</strong></a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-Portfolio-black?style=flat-square&logo=next.js" />
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-Portfolio-black?style=flat-square&logo=vercel" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Content-blue?style=flat-square&logo=typescript" />
  <img alt="Data Portfolio" src="https://img.shields.io/badge/Data-Decision%20Archive-6b7280?style=flat-square" />
</p>

<p align="center">
  <strong>Desktop recommended · Mobile supported</strong><br/>
  프로젝트 비교와 화면 증거 검토는 PC 환경에 최적화되어 있으며, 모바일에서도 전체 콘텐츠를 확인할 수 있습니다.
</p>

---

## Overview

**Signal Archive**는 데이터 분석 결과를 차트 나열에서 끝내지 않고, 리뷰어가 실제로 판단할 수 있는 기준, 보류 사유, 리스크 신호, 검증 가능한 산출물로 연결하는 포트폴리오입니다.

```text
Problem → Data → Criteria → Judgment → Output
```

단일 flagship은 **Seoul Storefront Redveil V2**입니다. 가장 큰 프로젝트라서가 아니라, 공간·거래 분석이 지도 선택, 보류 사유, 대체 후보, 판단 메모와 검증 가능한 제품 흐름으로 바뀌는 방식을 가장 잘 보여주기 때문입니다.

---

## Reviewer Paths

| Review Goal | Suggested Path | What it shows |
| --- | --- | --- |
| **3-minute profile scan** | [Start Here](https://signal-archive.vercel.app/start-here) → [Redveil](https://signal-archive.vercel.app/projects/seoul-storefront-redveil) → [Shelter Signal](https://signal-archive.vercel.app/projects/shelter-signal) → [DecisionOps Lab](https://signal-archive.vercel.app/projects/decisionops-lab) | 단일 flagship, history-aware public-data product, SQL·3 guardrails·7 scenarios decision workflow |
| **Spatial / Public Data role** | [Redveil](https://signal-archive.vercel.app/projects/seoul-storefront-redveil) → [Shelter Signal](https://signal-archive.vercel.app/projects/shelter-signal) → [LH Traffic Safety](https://signal-archive.vercel.app/projects/lh-traffic-safety-analysis) → [DecisionOps Lab](https://signal-archive.vercel.app/projects/decisionops-lab) | 지도 기반 판단 산출물, V1 live와 V2 변화 추적, 100m grid/LORO 검증 |
| **Business / CRM role** | [Redveil](https://signal-archive.vercel.app/projects/seoul-storefront-redveil) → [DecisionOps Lab](https://signal-archive.vercel.app/projects/decisionops-lab) → [Starbucks](https://signal-archive.vercel.app/projects/starbucks-promotion-analysis) → [UK Retail](https://signal-archive.vercel.app/projects/uk-online-retail-segment-analysis) | decision artifact, multi-guardrail product analytics, CRM/segmentation supporting evidence |

더 자세한 검토 순서는 [docs/reviewer-path.md](docs/reviewer-path.md)에 정리했습니다.

---

## Representative Projects

| Order | Project | Positioning | Main Evidence | Review |
| ---: | --- | --- | --- | --- |
| 1 | **Seoul Storefront Redveil V2** | 서울 자치구 지도에서 보류 사유, 대체 후보와 판단 메모까지 연결한 single flagship | 25 districts, 427 dongs, 1,520 trade areas, 12,074 transactions, 5 connected screens | [Detail](https://signal-archive.vercel.app/projects/seoul-storefront-redveil) · [Live V2](https://dffxonnb-cyber.github.io/Seoul-Storefront-Redveil/v2/) · [Repo](https://github.com/dffxonnb-cyber/Seoul-Storefront-Redveil) |
| 2 | **Shelter Signal V2** | V1 현재 공고 탐색과 V2 일별 변화·타임라인·마감 브리핑을 분리한 history-aware public-data product | Daily 06:20 KST snapshot, 7 change-event types, per-notice timeline, D-Day~D-3 briefing | [Detail](https://signal-archive.vercel.app/projects/shelter-signal) · [Live](https://shelter-signal-ebon.vercel.app/) · [Changes](https://shelter-signal-ebon.vercel.app/#changes) · [Repo](https://github.com/dffxonnb-cyber/shelter-signal) |
| 3 | **DecisionOps Lab** | synthetic product events를 SQL mart, quality gate, A/B evidence, 3개 guardrail과 7개 scenario decision matrix로 연결한 workflow | 23 quality checks PASS, activation +3.97pp, p=0.000011, D7·refund·session PASS, Ship/Retest/Hold/Investigate | [Detail](https://signal-archive.vercel.app/projects/decisionops-lab) · [Report](https://dffxonnb-cyber.github.io/DecisionOps-lab/) · [Matrix](https://github.com/dffxonnb-cyber/DecisionOps-lab/blob/main/reports/scenario_matrix.md) · [Repo](https://github.com/dffxonnb-cyber/DecisionOps-lab) |
| 4 | **LH Traffic Safety Analysis** | 100m grid risk signal을 LORO 검증과 현장 검토 우선순위로 번역한 공간 분석 | 99,323 training grids, 770 target grids, AUC 0.8604, Top-10% Lift 4.39x | [Detail](https://signal-archive.vercel.app/projects/lh-traffic-safety-analysis) · [Repo](https://github.com/dffxonnb-cyber/LH-traffic-safety-analysis) |

### Claim Boundaries

- Redveil V2는 portfolio product이며 투자 추천, buy/sell recommendation, 수익률 예측, 개별 매물 정확성이나 전문 검토 대체를 주장하지 않습니다.
- Shelter Signal V2는 수집기가 관측한 변화와 마감 근거를 기록하며, 공식 위험 점수, 입양·안락사 예측, 최종 동물 결과, 사용자 계정·외부 알림 발송, production SLA를 주장하지 않습니다.
- DecisionOps Lab은 synthetic-data workflow이며 실제 제품 성과, 실제 사용자 행동, live experiment operation이나 production business impact를 주장하지 않습니다.
- LH Traffic Safety는 현장 검토 우선순위 신호이며 실제 사고 감소 효과나 시설 설치 결정을 증명하지 않습니다.

---

## Supporting Projects

| Project | Supporting Role | Evidence |
| --- | --- | --- |
| **Starbucks Promotion Analysis** | CRM / marketing analytics | 고객·오퍼·채널 반응, AUC 0.8147, Recall 0.8712, Tableau workbook |
| **UK Online Retail Segment Analysis** | segmentation / campaign action design | RFM, Pareto, statistical tests, top 20% revenue 73.5% |
| **ShopEasy** | commerce dashboard / experiment proposal | deterministic synthetic dataset, conversion dashboard, A/B test proposal |
| **Job Signal Pipeline** | mock/local SQL pipeline validation | PostgreSQL raw loading, 5 analytics views, 7 SQL tests PASS, local review dashboard |
| **NBA Game & Player Analysis** | archive-level sports analytics | EDA, statistical tests, modeling flow, public artifact smoke tests |

---

## Core Strengths

| Strength | Description |
| --- | --- |
| **Problem Framing** | 모호한 질문을 분석 단위, 측정 기준, 검토 흐름으로 나누어 판단 가능한 문제로 재구성합니다. |
| **Risk & Priority Design** | 단순 수치 비교가 아니라 무엇을 보류하고 무엇을 먼저 검토해야 하는지 설명 가능한 신호를 설계합니다. |
| **Analysis to Interface** | 분석 결과를 보고서 안에만 두지 않고 웹 화면, 대시보드, 문서, 검증 경로로 연결합니다. |
| **Decision Language** | 모델 점수와 지표를 과장하지 않고, 실제 검토자가 이해할 수 있는 판단 언어로 번역합니다. |
| **Claim Boundary** | production impact, real user behavior, investment outcome처럼 검증되지 않은 범위를 분리합니다. |

---

## Tech Stack

| Area | Tools / Wording |
| --- | --- |
| **Analysis** | Python, pandas, NumPy, Jupyter, scikit-learn 후보 검토 |
| **SQL / Analytics Engineering** | SQL models, DuckDB, PostgreSQL local/fallback validation, data quality checks |
| **Experiment Decision** | primary metrics, confidence intervals, D7 revisit/refund/session guardrails, scenario decision matrix |
| **Visualization / BI** | Tableau workbook, Matplotlib, Seaborn, Plotly, Streamlit/pydeck prototypes |
| **Web / Delivery** | HTML, CSS, JavaScript, React, Next.js, Vite, TypeScript, GitHub Pages, Vercel |
| **API / Public Data** | Vercel serverless routes, data.go.kr API normalization, daily public-safe snapshots, change events, notice timelines |
| **Spatial Analysis** | GeoPandas, QGIS, GeoJSON, SVG boundary map, 100m grid analysis, public-safe spatial evidence |
| **Validation** | GitHub Actions, typecheck/lint/build, public artifact checks, smoke tests, Playwright Chromium E2E |
| **Data Reliability** | cache/fallback metadata, previous-success comparison, missing-state transition, eventId deduplication |

---

## Review the Archive

| Route | What it shows |
| --- | --- |
| [Start Here](https://signal-archive.vercel.app/start-here) | 역할 적합도, 대표 프로젝트 근거, 다음 검토 경로 |
| [Projects](https://signal-archive.vercel.app/projects) | 대표/지원 프로젝트별 문제 정의, 산출물, 검증 신호 |
| [Case Studies](https://signal-archive.vercel.app/case-studies) | 리스크 신호, decision flow, 품질 gate, 산출물 설계 방식 |
| [Resume](https://signal-archive.vercel.app/resume) | 기술 역량, 역할 적합도, 프로젝트 기반 경험 요약 |
| [Contact](https://signal-archive.vercel.app/contact) | 공개 연락처와 포트폴리오 링크 |

---

## Repository Guide

포트폴리오 문구와 프로젝트 정보는 구조화된 TypeScript 콘텐츠로 관리합니다.

| File | Role |
| --- | --- |
| `content/profile.ts` | 포지셔닝, 강점, 연락처, 기술 스택 |
| `content/projects.ts` | 기본 프로젝트 카드, 상세 페이지, 의사결정 질문, 근거, 링크 |
| `content/projects-v2.ts` | Redveil V2 공식 제품 정보와 화면 증거 override |
| `content/projects-public.ts` | 공개 상태와 canonical evidence 보정 |
| `content/projects-current.ts` | Shelter Signal history-aware V2 override |
| `content/projects-decisionops.ts` | DecisionOps 3개 guardrail·7개 scenario override |
| `content/proof-points.ts` | 상단 핵심 근거와 프로젝트 증거 |
| `content/case-studies.ts` | 반복되는 문제 해결 패턴과 사례 구조 |
| `content/writing.ts` | 글쓰기 디렉터리 및 아티클 콘텐츠 |
| `docs/reviewer-path.md` | 역할별 추천 검토 순서 |

콘텐츠 업데이트 흐름은 `PORTFOLIO_UPDATE_GUIDE.md`, 검증 범위는 `VERIFY.md`에서 확인할 수 있습니다.
