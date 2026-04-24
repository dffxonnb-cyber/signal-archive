import type { CaseStudy } from "@/types/content";

export const caseStudies: CaseStudy[] = [
  {
    slug: "risk-signals-before-volume",
    title: "규모보다 먼저 위험 신호를 읽는 구조",
    category: "문제 정의 / 위험 신호 포착",
    summary:
      "크기나 볼륨이 큰 지표를 먼저 보는 대신, 실제 판단을 바꾸는 이상 신호와 리스크 징후를 먼저 읽는 접근입니다.",
    keyMoves: [
      "큰 숫자보다 먼저 해석해야 할 위험 신호를 정의합니다.",
      "지표를 보기 전에 어떤 단위로 문제를 읽을지부터 정합니다.",
      "추천보다 보류 사유가 먼저 보이도록 판단 순서를 재설계합니다.",
    ],
    linkedProjects: ["lh-traffic-safety-analysis", "seoul-storefront-redveil"],
  },
  {
    slug: "turn-analysis-into-a-decision-tool",
    title: "분석 결과를 판단 도구까지 연결하는 방식",
    category: "구조 설계 / 결과물 구현",
    summary:
      "분석 결과를 보고서에서 멈추지 않고, 실제 사용자가 눌러보고 비교해볼 수 있는 도구까지 이어 붙이는 방식입니다.",
    keyMoves: [
      "분석 결과가 사용자의 다음 행동으로 이어지게 정보 구조를 잡습니다.",
      "무엇을 판단해야 하는지부터 인터페이스와 카피에 반영합니다.",
      "문서, 페이지, 링크를 하나의 포트폴리오 흐름으로 묶습니다.",
    ],
    linkedProjects: ["seoul-storefront-redveil", "shopeasy"],
  },
  {
    slug: "segmenting-for-business-meaning",
    title: "세그먼트를 액션 가능한 해석으로 번역하는 방식",
    category: "인사이트 도출 / 스토리텔링",
    summary:
      "세그먼트 이름을 붙이는 것보다, 그 구분이 실제 액션과 우선순위로 이어지는지가 더 중요하다는 관점입니다.",
    keyMoves: [
      "세그먼트 이름보다 운영 판단 기준을 먼저 둡니다.",
      "요약값이 아니라 비즈니스 질문에 답하는 구조로 내용을 정리합니다.",
      "읽는 사람이 바로 액션을 떠올릴 수 있게 설명 순서를 조정합니다.",
    ],
    linkedProjects: ["uk-online-retail-segment-analysis", "starbucks-promotion-analysis"],
  },
];
