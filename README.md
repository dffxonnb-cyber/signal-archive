# Signal Archive

**데이터 기반 의사결정 아카이브 · 포트폴리오 허브**

Signal Archive는 데이터 분석 프로젝트를 단순히 모아두는 공간이 아니라,
**질문이 어떻게 분석 문제로 바뀌고, 데이터가 어떻게 판단 기준과 리스크 신호가 되는지 기록하는 포트폴리오 아카이브**입니다.

각 프로젝트는 공통적으로 다음 흐름을 따릅니다.

**문제 정의 → 데이터 구조화 → 판단 기준 설계 → 결과 해석 → 의사결정 화면/문서화**

분석 결과를 차트 몇 개로 보여주는 데서 멈추지 않고,
리뷰어가 실제로 판단할 수 있는 기준, 우선순위, 대시보드, 웹 기반 검토 흐름으로 연결하는 것을 목표로 합니다.

[라이브 포트폴리오 보기]
[리뷰어 가이드부터 보기]
[GitHub 프로필 보기]

---

## Featured Projects

### Seoul Storefront Redveil

서울 소형 상가 매입 전, 추천보다 **매입 보류 사유와 리스크 신호를 먼저 확인할 수 있도록 설계한 상권 리스크 진단 프로젝트**입니다.

* **Problem**
  상가 매입 후보지를 검토할 때, 단순 추천보다 가격 부담, 거래 유동성, 상권 과밀, 수요 취약성 등 보류 사유를 먼저 확인할 필요가 있었습니다.

* **Data / Method**
  공공데이터, 상권 데이터, 실거래 데이터를 결합하고, 리스크 기준을 설계해 정적 웹 기반 검토 흐름으로 구현했습니다.

* **Decision Output**
  상가 리스크 점수, 보류 사유 카테고리, 대체 후보 비교, 구별 리포트, 공개형 리뷰 프로토타입을 제공합니다.

* **Role / Contribution**
  문제 정의, 리스크 기준 설계, 데이터 구조화, 시각화 흐름 기획, 퍼블릭 웹 서비스 구현을 담당했습니다.

[Live Service]
[GitHub Repository]

---

### LH Traffic Safety Analysis

신도시 및 교통 취약 지역에서 사고 이력만으로는 드러나지 않는 위험 구간을 찾기 위해,
**100m 격자 단위 사고 위험도와 안전시설 설치 우선순위를 분석한 프로젝트**입니다.

* **Problem**
  사고 건수만으로는 교통안전시설을 어디에 먼저 검토해야 하는지 판단하기 어렵고, 특히 사고 이력이 적은 신도시에서는 추가적인 위험 기준이 필요했습니다.

* **Data / Method**
  사고 데이터, 도로·공간 데이터를 격자 단위로 재구성하고, 지역 간 전이 가능성과 우선순위 판단 로직을 검증했습니다.

* **Decision Output**
  설명 가능한 위험 격자, 취약 구역 우선순위, 안전시설 설치 후보 검토 기준, 지도 기반 근거 자료를 도출했습니다.

* **Role / Contribution**
  공간 리스크 구조 설계, 전이 검증 방식 구성, 설치 우선순위 프레임워크 설계, 분석 결과 문서화를 담당했습니다.

[GitHub Repository]

---

### Starbucks Promotion Analysis

고객, 오퍼, 채널, 이벤트 로그가 분리되어 있는 데이터를 재구성해,
**어떤 고객군이 어떤 프로모션에 반응하는지 분석한 CRM 프로젝트**입니다.

* **Problem**
  분리된 고객·오퍼·채널 데이터를 그대로는 프로모션 반응 구조를 파악하기 어렵고, 마케팅 액션으로 연결하기에도 한계가 있었습니다.

* **Data / Method**
  반정형 이벤트 로그를 고객-오퍼-채널 단위로 재구성하고, 반응 패턴을 분석한 뒤 Tableau 대시보드로 정리했습니다.

* **Decision Output**
  CRM 반응 분석, 오퍼별·채널별 비교, 고객군별 프로모션 인사이트, Tableau 기반 마케팅 액션 제안을 제공합니다.

* **Role / Contribution**
  팀 리더로 참여했으며, 이벤트 구조 재설계, 추천 후보 해석, Tableau 결과 구성, 발표 흐름 정리를 담당했습니다.

[GitHub Repository]

---

### Shelter Signal

공공 유기동물 공고를 단순 최신순으로 보여주는 방식의 한계를 보완하기 위해,
**시간 민감도와 공고 상태를 기준으로 우선 검토해야 할 공고를 정리한 프로젝트**입니다.

* **Problem**
  최신순 공고 목록만으로는 보호 종료일이 임박했거나, 검토 우선순위가 높은 공고를 빠르게 파악하기 어렵습니다.

* **Data / Method**
  보호 종료일, 공고 상태, 사진 여부, 연락처 정보, 지역 신호를 조합해 Rescue Window Score와 검토 라벨을 설계했습니다.

* **Decision Output**
  우선 검토 흐름, 보호소·연락처 요약, 공고 기반 리뷰 라벨, 모바일 중심 PWA 화면을 제공합니다.

* **Role / Contribution**
  우선순위 신호 설계, 데이터 파이프라인 구성, 서버리스 API 경로 연결, PWA 구현을 담당했습니다.

[Live Demo]
[GitHub Repository]

---

## Core Strengths

### 문제를 판단 가능한 구조로 바꾸는 능력

모호한 질문을 분석 단위, 측정 기준, 검토 흐름으로 나누어
실제로 판단 가능한 문제로 재구성합니다.

### 리스크와 우선순위 신호 설계

단순 수치 비교에 그치지 않고,
무엇을 보류해야 하는지, 무엇을 먼저 검토해야 하는지, 어떤 후보를 비교해야 하는지 설명할 수 있는 신호를 설계합니다.

### 분석 결과의 인터페이스화

분석 결과를 보고서 안에만 두지 않고,
대시보드, 지도, 웹 페이지, 리뷰 화면, 구조화된 문서로 연결합니다.

### 의사결정 언어로 번역

모델 점수와 지표를 과장하지 않고,
실제 검토자가 이해할 수 있는 판단 언어로 바꾸는 데 집중합니다.

### End-to-End Delivery

데이터 준비, 분석, 기준 설계, 시각화, 문서화, 검증 흐름까지
하나의 리뷰 가능한 결과물로 연결합니다.

---

## Tech Stack

### Analysis

Python, pandas, SQL, scikit-learn, Jupyter

### Visualization / BI

Tableau, Streamlit, pydeck, Matplotlib, Seaborn

### Web / Delivery

HTML, CSS, JavaScript, React, Next.js, TypeScript, GitHub Pages, Vercel

### Data / API

PostgreSQL, Neon, public-data APIs, serverless API routes

### Spatial Analysis

GeoPandas, QGIS, GeoJSON, spatial grid analysis

### Validation

GitHub Actions, public artifact checks, smoke tests

---

## Review the Archive

| Route        | What it shows                               |
| ------------ | ------------------------------------------- |
| Start Here   | 역할 적합도, 프로젝트 근거, 다음 검토 경로를 안내하는 리뷰어용 시작 페이지 |
| Projects     | 프로젝트별 문제 정의, 분석 방법, 산출물, 링크, 검증 신호          |
| Case Studies | 리스크 신호, 의사결정 도구, 비즈니스 해석 방식의 반복 패턴          |
| Resume       | 기술 역량, 역할 적합도, 프로젝트 기반 경험 요약                |
| Contact      | 공개 연락처와 포트폴리오 링크                            |

---

## Repository Guide

포트폴리오 문구와 프로젝트 정보는 구조화된 TypeScript 콘텐츠로 관리합니다.

* `content/profile.ts`
  포지셔닝, 강점, 연락처, 기술 스택

* `content/projects.ts`
  프로젝트 카드, 상세 페이지, 의사결정 질문, 근거, 링크

* `content/proof-points.ts`
  상단 핵심 근거와 프로젝트 증거

* `content/case-studies.ts`
  반복되는 문제 해결 패턴과 사례 구조

* `content/writing.ts`
  글쓰기 디렉터리 및 아티클 콘텐츠

콘텐츠 업데이트 흐름은 `PORTFOLIO_UPDATE_GUIDE.md`,
검증 범위는 `VERIFY.md`에서 확인할 수 있습니다.

---

## Local Development

```bash
npm install
npm run dev
```

---

## Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
```

GitHub Actions는 `main` 브랜치에 대한 push와 pull request에서 저장소 검증을 실행합니다.
