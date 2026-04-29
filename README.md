# Signal Archive

Signal Archive는 문제 정의, 구조 설계, 검증 중심 분석을 정리한 한국어 데이터 분석 포트폴리오입니다. 도시, 상권, 사용자 데이터를 판단 가능한 구조로 바꾸고, 분석 결과를 웹 페이지와 문서 결과물까지 연결하는 흐름을 보여줍니다.

- Live Site: [signal-archive.vercel.app](https://signal-archive.vercel.app)
- Repository Description: 문제 정의, 구조 설계, 검증 중심 분석을 정리한 데이터 분석 포트폴리오.
- Primary Role: Data Analyst / Spatial Data Analyst
- Secondary Fit: Business Data Analyst / CRM Analytics
- Core Tools: Python, SQL, pandas, Jupyter, Tableau, JavaScript, GIS

## Portfolio Focus

이 사이트는 단순 프로젝트 목록보다 채용 담당자가 빠르게 읽을 수 있는 분석 포트폴리오를 목표로 합니다.

- 문제를 다시 정의하고 분석 단위를 세우는 과정
- 흩어진 데이터를 판단 가능한 구조로 정리하는 방식
- 지표 설계와 검증을 통해 설명 가능한 결과를 남기는 흐름
- 분석 결과를 README, 문서, 웹 결과물로 전달하는 방식

## Website Structure

| Route | Purpose |
| --- | --- |
| `/` | 역할 포지셔닝, 핵심 강점, 대표 프로젝트 3개 요약 |
| `/projects` | 필터 가능한 프로젝트 아카이브와 상세 페이지 |
| `/case-studies` | 여러 프로젝트에서 반복되는 문제 해결 방식 정리 |
| `/writing` | 분석과 결과물 전달 방식에 대한 짧은 글 |
| `/resume` | 역할 적합성, 기술 스택, 프로젝트 기반 이력 요약 |
| `/contact` | 공개 프로필과 연락 경로 |

## Featured Projects

- **LH Traffic Safety Analysis**: 공공 안전 우선순위와 공간 위험도 구조를 설계한 분석 사례
- **Seoul Storefront Redveil**: 상권 매입 전 리스크 신호와 대체 후보를 보여주는 의사결정 도구
- **UK Online Retail Segment Analysis**: 고객 세그먼트를 매출과 재구매 관점으로 해석한 이커머스 분석 사례

## Content Model

포트폴리오 문구와 프로젝트 정보는 구조화된 TypeScript 데이터로 관리합니다. 페이지별 텍스트를 흩어 두지 않고, 재사용 가능한 콘텐츠 객체를 기반으로 UI를 구성합니다.

- [`content/profile.ts`](./content/profile.ts): 이름, 역할, 강점, 연락처, 기술 스택
- [`content/projects.ts`](./content/projects.ts): 프로젝트 카드, 상세 페이지, 링크, 검증 포인트
- [`content/case-studies.ts`](./content/case-studies.ts): 문제 해결 패턴과 연결 프로젝트
- [`content/writing.ts`](./content/writing.ts): 글 목록, 본문 섹션, 관련 프로젝트

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- CSS Modules and custom CSS
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

## GitHub About

이 저장소의 GitHub About 영역은 사이트 메타데이터와 같은 방향으로 맞춥니다.

- Description: `문제 정의, 구조 설계, 검증 중심 분석을 정리한 데이터 분석 포트폴리오.`
- Website: `https://signal-archive.vercel.app`
- Topics: `data-analysis`, `portfolio`, `nextjs`, `typescript`, `react`, `spatial-analysis`, `business-intelligence`, `crm-analytics`, `gis`, `public-data`
