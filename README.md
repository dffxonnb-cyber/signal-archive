# Signal Archive

<p align="center">
  <strong>데이터 기반 의사결정 아카이브 · 포트폴리오 허브</strong>
</p>

<p align="center">
  분석 프로젝트를 단순히 모아두는 공간이 아니라,<br/>
  질문이 어떻게 문제로 구조화되고, 데이터가 어떻게 판단 기준과 리스크 신호가 되는지 기록하는 아카이브입니다.
</p>

<p align="center">
  <a href="https://signal-archive.vercel.app/"><strong>Live Portfolio</strong></a>
  ·
  <a href="https://signal-archive.vercel.app/start-here"><strong>Reviewer Guide</strong></a>
  ·
  <a href="https://github.com/dffxonnb-cyber"><strong>GitHub Profile</strong></a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-Portfolio-black?style=flat-square&logo=next.js" />
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-Live-black?style=flat-square&logo=vercel" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Content-blue?style=flat-square&logo=typescript" />
  <img alt="Data Portfolio" src="https://img.shields.io/badge/Data-Decision%20Archive-6b7280?style=flat-square" />
</p>

---

## Overview

**Signal Archive**는 데이터 분석 프로젝트를 단순히 나열하는 포트폴리오가 아니라,
각 프로젝트가 어떤 질문에서 출발해 어떤 판단 기준, 리스크 신호, 대시보드, 웹 기반 검토 흐름으로 발전했는지 기록하는 공간입니다.

모든 프로젝트는 공통적으로 다음 흐름을 따릅니다.

<p align="center">
  <strong>Problem → Data → Criteria → Judgment → Output</strong>
</p>

분석 결과를 차트 몇 개로 보여주는 데서 멈추지 않고,
리뷰어가 실제로 판단할 수 있는 기준, 우선순위, 비교 구조, 의사결정 화면으로 연결하는 것을 목표로 합니다.

---

## Featured Projects

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>Seoul Storefront Redveil</h3>
      <p>
        서울 소형 상가 매입 전, 추천보다 <strong>매입 보류 사유와 리스크 신호</strong>를 먼저 확인할 수 있도록 설계한 상권 리스크 진단 프로젝트입니다.
      </p>
      <ul>
        <li><strong>Problem</strong>: 상가 매입 후보지의 가격 부담, 거래 유동성, 상권 과밀, 수요 취약성 검토</li>
        <li><strong>Data / Method</strong>: 공공데이터, 상권 데이터, 실거래 데이터를 결합해 리스크 기준 설계</li>
        <li><strong>Decision Output</strong>: 리스크 점수, 보류 사유, 대체 후보 비교, 구별 리포트</li>
        <li><strong>Contribution</strong>: 문제 정의, 기준 설계, 데이터 구조화, 웹 서비스 구현</li>
      </ul>
      <p>
        <a href="https://redveil.vercel.app/districts.html"><strong>Live Service</strong></a>
        ·
        <a href="https://github.com/dffxonnb-cyber/Seoul-Storefront-Redveil"><strong>Repository</strong></a>
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>LH Traffic Safety Analysis</h3>
      <p>
        사고 이력만으로는 드러나지 않는 위험 구간을 찾기 위해, <strong>100m 격자 단위 사고 위험도와 안전시설 설치 우선순위</strong>를 분석한 프로젝트입니다.
      </p>
      <ul>
        <li><strong>Problem</strong>: 사고 건수만으로는 교통안전시설 우선 검토 지역을 판단하기 어려움</li>
        <li><strong>Data / Method</strong>: 사고, 도로, 공간 데이터를 격자 단위로 재구성</li>
        <li><strong>Decision Output</strong>: 위험 격자, 취약 구역 우선순위, 설치 후보 검토 기준</li>
        <li><strong>Contribution</strong>: 공간 리스크 구조 설계, 전이 검증, 우선순위 프레임워크 구성</li>
      </ul>
      <p>
        <a href="https://github.com/dffxonnb-cyber/LH-traffic-safety-analysis"><strong>Repository</strong></a>
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>Starbucks Promotion Analysis</h3>
      <p>
        고객, 오퍼, 채널, 이벤트 로그를 재구성해 <strong>어떤 고객군이 어떤 프로모션에 반응하는지</strong> 분석한 CRM 프로젝트입니다.
      </p>
      <ul>
        <li><strong>Problem</strong>: 분리된 고객·오퍼·채널 데이터만으로는 반응 구조 파악이 어려움</li>
        <li><strong>Data / Method</strong>: 반정형 이벤트 로그를 고객-오퍼-채널 단위로 재구성</li>
        <li><strong>Decision Output</strong>: CRM 반응 분석, 오퍼·채널 비교, Tableau 대시보드</li>
        <li><strong>Contribution</strong>: 팀 리더, 이벤트 구조 재설계, 추천 후보 해석, 발표 흐름 정리</li>
      </ul>
      <p>
        <a href="https://github.com/dffxonnb-cyber/starbucks-promotion-analysis"><strong>Repository</strong></a>
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>Shelter Signal</h3>
      <p>
        공공 구조동물 공고를 단순 목록이 아니라, <strong>보호 종료일과 데이터 출처를 기준으로 현재·종료 임박·보호/기록 상태</strong>로 분리한 public-data service입니다.
      </p>
      <ul>
        <li><strong>Problem</strong>: 지난 공고와 종료 임박 공고가 섞이고 live/fallback 상태를 구분하기 어려움</li>
        <li><strong>Data / Method</strong>: KST 30일 live API, noticeEdt 필터, D-Day~D-3 urgent signal</li>
        <li><strong>Decision Output</strong>: current/urgent views, 지역 필터, pagination, 데이터 상태 패널</li>
        <li><strong>Contribution</strong>: live-first API, TTL cache, fallback 분리, observability, PWA 구현</li>
        <li><strong>Evidence</strong>: Production UI와 secret-free API metadata snapshot을 상세 페이지에 기록</li>
      </ul>
      <p>
        <a href="https://shelter-signal-ebon.vercel.app/"><strong>Live Demo</strong></a>
        ·
        <a href="https://github.com/dffxonnb-cyber/shelter-signal"><strong>Repository</strong></a>
      </p>
    </td>
  </tr>
</table>

---

## Core Strengths

| Strength                   | Description                                               |
| -------------------------- | --------------------------------------------------------- |
| **Problem Framing**        | 모호한 질문을 분석 단위, 측정 기준, 검토 흐름으로 나누어 판단 가능한 문제로 재구성합니다.      |
| **Risk & Priority Design** | 단순 수치 비교가 아니라, 무엇을 보류하고 무엇을 먼저 검토해야 하는지 설명 가능한 신호를 설계합니다. |
| **Analysis to Interface**  | 분석 결과를 보고서 안에만 두지 않고 대시보드, 지도, 웹 페이지, 리뷰 화면으로 연결합니다.      |
| **Decision Language**      | 모델 점수와 지표를 과장하지 않고, 실제 검토자가 이해할 수 있는 판단 언어로 번역합니다.        |
| **End-to-End Delivery**    | 데이터 준비, 분석, 기준 설계, 시각화, 문서화, 검증 흐름까지 하나의 결과물로 연결합니다.      |

---

## Tech Stack

<table>
  <tr>
    <td><strong>Analysis</strong></td>
    <td>Python, pandas, SQL, scikit-learn, Jupyter</td>
  </tr>
  <tr>
    <td><strong>Visualization / BI</strong></td>
    <td>Tableau, Streamlit, pydeck, Matplotlib, Seaborn</td>
  </tr>
  <tr>
    <td><strong>Web / Delivery</strong></td>
    <td>HTML, CSS, JavaScript, React, Next.js, TypeScript, GitHub Pages, Vercel</td>
  </tr>
  <tr>
    <td><strong>Data / API</strong></td>
    <td>PostgreSQL, Neon, public-data APIs, serverless API routes</td>
  </tr>
  <tr>
    <td><strong>Spatial Analysis</strong></td>
    <td>GeoPandas, QGIS, GeoJSON, spatial grid analysis</td>
  </tr>
  <tr>
    <td><strong>Validation</strong></td>
    <td>GitHub Actions, public artifact checks, smoke tests</td>
  </tr>
</table>

---

## Review the Archive

| Route                                                          | What it shows                               |
| -------------------------------------------------------------- | ------------------------------------------- |
| [Start Here](https://signal-archive.vercel.app/start-here)     | 역할 적합도, 프로젝트 근거, 다음 검토 경로를 안내하는 리뷰어용 시작 페이지 |
| [Projects](https://signal-archive.vercel.app/projects)         | 프로젝트별 문제 정의, 분석 방법, 산출물, 링크, 검증 신호          |
| [Case Studies](https://signal-archive.vercel.app/case-studies) | 리스크 신호, 의사결정 도구, 비즈니스 해석 방식의 반복 패턴          |
| [Resume](https://signal-archive.vercel.app/resume)             | 기술 역량, 역할 적합도, 프로젝트 기반 경험 요약                |
| [Contact](https://signal-archive.vercel.app/contact)           | 공개 연락처와 포트폴리오 링크                            |

---

## Repository Guide

포트폴리오 문구와 프로젝트 정보는 구조화된 TypeScript 콘텐츠로 관리합니다.

| File                      | Role                             |
| ------------------------- | -------------------------------- |
| `content/profile.ts`      | 포지셔닝, 강점, 연락처, 기술 스택             |
| `content/projects.ts`     | 프로젝트 카드, 상세 페이지, 의사결정 질문, 근거, 링크 |
| `content/proof-points.ts` | 상단 핵심 근거와 프로젝트 증거                |
| `content/case-studies.ts` | 반복되는 문제 해결 패턴과 사례 구조             |
| `content/writing.ts`      | 글쓰기 디렉터리 및 아티클 콘텐츠               |

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

---

<p align="center">
  <strong>Signal Archive</strong><br/>
  Data projects translated into criteria, risk signals, and reviewable decision tools.
</p>
