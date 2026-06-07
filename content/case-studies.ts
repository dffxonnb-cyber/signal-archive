import type { CaseStudy } from "@/types/content";

export const caseStudies: CaseStudy[] = [
  {
    slug: "risk-signals-before-volume",
    title: "선택보다 먼저 핵심 신호를 읽는 방식",
    category: "문제 정의 / 핵심 징후 포착",
    summary:
      "크기나 최신순보다 먼저, 실제 판단 순서를 바꾸는 리스크와 시간 민감 신호를 읽는 접근입니다.",
    keyMoves: [
      "큰 숫자보다 먼저 해석해야 할 핵심 신호를 정의합니다.",
      "지표를 보기 전에 어떤 단위로 문제를 읽을지부터 정합니다.",
      "선택을 서두르기 전에 확인할 포인트가 보이도록 정보 순서를 조정합니다.",
    ],
    linkedProjects: ["lh-traffic-safety-analysis", "seoul-storefront-redveil", "shelter-signal"],
  },
  {
    slug: "turn-analysis-into-a-decision-tool",
    title: "분석 결과를 검토 도구까지 연결하는 방식",
    category: "설계 / 결과물 구현",
    summary:
      "분석 결과를 보고서에서 멈추지 않고, 사용자가 눌러보고 비교해볼 수 있는 검토 도구까지 이어 붙이는 방식입니다.",
    keyMoves: [
      "분석 결과가 사용자의 다음 행동으로 이어지게 정보 흐름을 잡습니다.",
      "무엇을 먼저 봐야 하는지부터 인터페이스와 카피에 반영합니다.",
      "문서, 페이지, 링크를 하나의 포트폴리오 흐름으로 묶습니다.",
    ],
    linkedProjects: ["seoul-storefront-redveil", "shelter-signal", "shopeasy"],
  },
  {
    slug: "segmenting-for-business-meaning",
    title: "세그먼트를 액션 언어로 바꾸는 방식",
    category: "인사이트 도출 / 스토리텔링",
    summary:
      "세그먼트 이름을 붙이는 것보다, 그 구분이 실제 액션과 우선순위로 이어지는지가 더 중요하다는 관점입니다.",
    keyMoves: [
      "세그먼트 이름보다 운영 우선순위를 먼저 둡니다.",
      "요약값이 아니라 비즈니스 질문에 답하는 흐름으로 내용을 정리합니다.",
      "읽는 사람이 바로 액션을 떠올릴 수 있게 설명 순서를 조정합니다.",
    ],
    linkedProjects: ["uk-online-retail-segment-analysis", "starbucks-promotion-analysis"],
  },
];
