import type { CaseStudy } from "@/types/content";

export const caseStudies: CaseStudy[] = [
  {
    slug: "risk-signals-before-volume",
    title: "큰 숫자보다 먼저 위험 신호를 확인하는 구조",
    category: "문제 정의 / 위험 신호 포착",
    summary:
      "좋아 보이거나 많이 보이는 수치에 바로 반응하지 않고, 먼저 어떤 신호를 의심해야 하는지 기준을 세우는 방식입니다.",
    keyMoves: [
      "겉으로 드러난 결과보다 먼저 확인해야 할 리스크 지점을 정의합니다.",
      "수치가 의미를 갖기 전의 맥락과 해석 단위를 먼저 정리합니다.",
      "판단 순서를 바꾸는 지표와 설명 구조를 설계합니다.",
    ],
    linkedProjects: ["lh-traffic-safety-analysis", "seoul-storefront-redveil"],
  },
  {
    slug: "turn-analysis-into-a-decision-tool",
    title: "분석 결과를 의사결정 도구로 연결하는 방식",
    category: "구조 설계 / 결과물 구현",
    summary:
      "분석으로 끝내지 않고, 실제 판단 흐름에 들어갈 수 있는 형태까지 이어서 구현하는 방식입니다.",
    keyMoves: [
      "분석 결과가 사용자의 다음 행동으로 이어지도록 구조를 설계합니다.",
      "결과보다 먼저 확인해야 할 조건과 질문을 인터페이스에 배치합니다.",
      "문서화까지 포함해 프로젝트가 다시 읽히는 구조를 남깁니다.",
    ],
    linkedProjects: ["seoul-storefront-redveil"],
  },
  {
    slug: "segmenting-for-business-meaning",
    title: "세그먼트를 비즈니스 의미로 번역하는 방식",
    category: "인사이트 도출 / 스토리텔링",
    summary:
      "군집이나 세그먼트 자체보다, 그것이 어떤 판단과 액션으로 이어지는지에 초점을 맞추는 방식입니다.",
    keyMoves: [
      "세그먼트 이름보다 해석 기준을 먼저 둡니다.",
      "요약값이 아니라 비즈니스 질문에 답하는 구조로 인사이트를 정리합니다.",
      "산업 적합성이 읽히도록 설명 순서를 설계합니다.",
    ],
    linkedProjects: ["uk-online-retail-segment-analysis"],
  },
];
