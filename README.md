# Signal Archive

Signal Archive는 데이터 분석 작업물, 문제 정의 패턴, 그리고 연결된 글쓰기를 아카이브형 인터페이스 하나에 담아 보여주는 한국어 중심 포트폴리오 사이트입니다.

## 구성 내용

- `Home`: 포지셔닝, 분석 관점, 추천 프로젝트
- `Projects`: 필터 가능한 아카이브와 프로젝트별 상세 페이지
- `Case Studies`: 여러 프로젝트에서 반복적으로 드러난 문제 해결 패턴
- `Writing`: 프로젝트와 연결되는 글 단위의 노트
- `Resume`: 요약 프로필, 강점, 기술 스택, 프로젝트 정리
- `Contact`: 공개 프로필과 리뷰/연락 경로

## 콘텐츠 모델

포트폴리오 콘텐츠는 구조화된 TypeScript 데이터로 관리됩니다.

- [`content/profile.ts`](./content/profile.ts)
- [`content/projects.ts`](./content/projects.ts)
- [`content/case-studies.ts`](./content/case-studies.ts)
- [`content/writing.ts`](./content/writing.ts)

이 구조 덕분에 페이지마다 개별 문구를 직접 넣기보다, 재사용 가능한 콘텐츠 객체를 기반으로 UI를 구성할 수 있습니다.

## 스택

- Next.js App Router
- React 19
- TypeScript
- CSS 기반 커스텀 UI

## 로컬 개발

1. Node.js 20 이상을 설치합니다.
2. 의존성을 설치합니다.

   ```bash
   npm install
   ```

3. 개발 서버를 실행합니다.

   ```bash
   npm run dev
   ```

## 점검 명령

- `npm run lint`
- `npm run typecheck`
- `npm run build`

GitHub Actions 워크플로우가 포함되어 있어, push와 pull request 시 lint, typecheck, build를 자동으로 실행합니다.

## 현재 범위

- 실제 프로젝트 링크가 프로젝트 상세 페이지에 연결되어 있습니다.
- Writing 항목은 더 이상 플레이스홀더 카드가 아니라 전용 상세 페이지를 가집니다.
- Resume와 Contact는 플레이스홀더 대신 공개 가능한 프로필 경로를 노출합니다.
- 포트폴리오 문구는 현재 GitHub 프로젝트 아카이브 기준에 맞춰 정렬되어 있습니다.

## 검증 메모

현재 작업 환경에는 Node.js가 설치되어 있지 않아, 이 환경에서 `npm install`, `npm run lint`, `npm run build`를 직접 실행하지는 못했습니다. 저장소는 Node 사용 가능 환경이나 GitHub CI에서 바로 해당 점검을 수행할 수 있도록 업데이트되어 있습니다.
