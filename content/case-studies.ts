import type { CaseStudy } from "@/types/content";

export const caseStudies: CaseStudy[] = [
  {
    slug: "risk-signals-before-volume",
    title: "Risk Signal Design",
    category: "리스크·우선순위 신호 설계",
    summary:
      "무엇을 추천할지보다 먼저, 무엇을 보류·검토·비교·우선 처리해야 하는지 설명하는 신호를 설계합니다.",
    keyMoves: [
      "Redveil의 매입 보류 사유와 대체 후보처럼 선택 전 확인 기준을 앞에 둡니다.",
      "LH 교통안전의 100m 위험 격자처럼 검증된 공간 신호를 현장 점검 자원 배분 기준으로 바꿉니다.",
      "Shelter Signal의 noticeEdt와 D-Day~D-3 분류처럼 공고 생명주기를 보호 종료 임박 신호로 번역합니다.",
    ],
    linkedProjects: ["seoul-storefront-redveil", "lh-traffic-safety-analysis", "shelter-signal"],
  },
  {
    slug: "turn-analysis-into-a-decision-tool",
    title: "Decision Flow Design",
    category: "분석 결과·검토 흐름 설계",
    summary:
      "분석 결과를 차트나 점수에서 멈추지 않고, 사용자가 다음 판단을 이어갈 수 있는 검토 흐름과 산출물로 연결합니다.",
    keyMoves: [
      "Redveil의 리스크 점수·보류 사유·대체 후보를 하나의 웹 검토 순서로 연결합니다.",
      "Shelter Signal의 region/page API와 current·urgent view를 대량 공공데이터 탐색 흐름으로 연결합니다.",
      "Starbucks 분석의 고객·오퍼·채널 비교를 Tableau 대시보드와 액션 인사이트로 정리합니다.",
    ],
    linkedProjects: ["seoul-storefront-redveil", "shelter-signal", "starbucks-promotion-analysis"],
  },
  {
    slug: "segmenting-for-business-meaning",
    title: "Business / Public Interpretation",
    category: "지표·모델 결과의 판단 언어화",
    summary:
      "분석 지표와 모델 결과를 리뷰어가 실제 행동, 우선순위, 한계와 함께 이해할 수 있는 판단 언어로 번역합니다.",
    keyMoves: [
      "Starbucks의 반응 지표를 어떤 고객군·오퍼·채널을 검토할지에 대한 CRM 언어로 바꿉니다.",
      "LH 교통안전의 LORO AUC와 Lift를 어떤 100m 격자를 먼저 검토할지 설명하는 공간 근거와 함께 제시합니다.",
      "Shelter Signal의 source·cacheStatus·fallbackReason처럼 공공데이터 상태와 한계를 응답과 화면에서 함께 설명합니다.",
    ],
    linkedProjects: ["starbucks-promotion-analysis", "lh-traffic-safety-analysis", "shelter-signal"],
  },
  {
    slug: "pipeline-validation-design",
    title: "Pipeline Validation Design",
    category: "mock/local 경계·SQL 검증 설계",
    summary:
      "live 운영 주장을 앞세우기보다, 어떤 데이터 경로가 실제로 검증됐는지 SQL tests와 dashboard로 확인 가능한 구조를 설계합니다.",
    keyMoves: [
      "Job Signal Pipeline은 Saramin mock ingestion에서 raw.job_postings 적재, analytics views, SQL tests, Streamlit dashboard까지 한 경로로 검증합니다.",
      "raw와 analytics schema를 분리해 원천 응답 보존과 리뷰 가능한 business logic을 나눕니다.",
      "Saramin live API, production ingestion, notification 운영은 검증 범위 밖이라고 문서와 한계 섹션에서 분리합니다.",
    ],
    linkedProjects: ["job-signal-pipeline"],
  },
];
