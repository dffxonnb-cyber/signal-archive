import type { WritingEntry } from "@/types/content";

export const writingEntries: WritingEntry[] = [
  {
    slug: "signals-before-polish",
    title: "보기 좋은 결과보다 먼저 위험 신호를 확인하는 이유",
    platform: "Signal Archive",
    summary:
      "좋아 보이는 결과를 빠르게 만드는 대신, 왜 먼저 이상 신호와 보류 사유를 읽으려 하는지 정리한 글입니다.",
    href: "/writing/signals-before-polish",
    linkKind: "internal",
    status: "published",
    categories: ["문제 정의", "분석 태도", "프로젝트 회고"],
    relatedProjects: ["lh-traffic-safety-analysis", "seoul-storefront-redveil"],
    publishedAt: "2026-04",
    bodySections: [
      {
        title: "왜 이 관점이 중요했는가",
        paragraphs: [
          "여러 프로젝트를 진행하면서 공통으로 느낀 점은, 리뷰어가 가장 먼저 궁금해하는 것이 화려한 결과보다 무엇을 기준으로 판단했는가라는 점이었습니다.",
          "그래서 저는 모델 성능이나 시각화 완성도보다 먼저, 어떤 신호를 위험으로 보고 어떤 경우를 보류해야 하는지부터 정리하는 방식을 선호하게 됐습니다.",
        ],
      },
      {
        title: "프로젝트에 어떻게 적용했는가",
        paragraphs: [
          "LH 프로젝트에서는 사고 건수 집계보다 설치 우선순위를 먼저 읽는 구조가 필요했고, Redveil에서는 추천보다 보류 사유를 먼저 보여주는 흐름이 더 중요했습니다.",
          "둘 다 겉으로는 도메인이 다르지만, 실제로는 무엇을 먼저 의심해야 하는가를 구조화했다는 점에서 같은 문제였습니다.",
        ],
      },
      {
        title: "앞으로 계속 가져갈 기준",
        paragraphs: [
          "이후에도 결과값을 보여주기 전에, 어떤 질문을 다시 세워야 하고 어떤 리스크를 먼저 봐야 하는지부터 문서와 인터페이스에 남기는 작업을 계속 강화할 생각입니다.",
        ],
      },
    ],
  },
  {
    slug: "from-analysis-to-tool",
    title: "분석 결과를 보고서에서 판단 도구로 옮길 때의 기준",
    platform: "Signal Archive",
    summary:
      "분석 산출물을 실제 사용 흐름과 연결할 때 어떤 정보부터 화면에 올려야 하는지 정리한 글입니다.",
    href: "/writing/from-analysis-to-tool",
    linkKind: "internal",
    status: "published",
    categories: ["구조 설계", "결과물 구현", "서비스화"],
    relatedProjects: ["seoul-storefront-redveil"],
    publishedAt: "2026-04",
    bodySections: [
      {
        title: "보고서와 도구는 무엇이 다른가",
        paragraphs: [
          "보고서는 읽는 사람이 의미를 해석해야 하지만, 도구는 사용자가 바로 다음 판단을 내릴 수 있도록 질문 순서와 정보 우선순위가 설계돼 있어야 합니다.",
          "그래서 같은 분석 결과라도 어떤 문장을 앞에 두는지, 어떤 비교 기준을 먼저 노출하는지에 따라 전혀 다른 경험이 만들어집니다.",
        ],
      },
      {
        title: "Redveil에서 배운 점",
        paragraphs: [
          "Redveil을 만들면서 가장 중요했던 것은 좋은 매물을 추천하는 것이 아니라, 사용자가 보류해야 할 이유를 빠르게 이해하게 만드는 것이었습니다.",
          "그 기준 덕분에 화면 구성도 점수, 사유, 대체 후보 순으로 정리할 수 있었습니다.",
        ],
      },
      {
        title: "포트폴리오에도 같은 기준을 적용하기",
        paragraphs: [
          "Signal Archive 역시 프로젝트를 나열하는 대신, 문제 해결 방식과 연결 글을 함께 두는 구조로 설계했습니다. 포트폴리오도 결국 하나의 판단 도구라고 생각하기 때문입니다.",
        ],
      },
    ],
  },
  {
    slug: "segment-first-action-later",
    title: "세그먼트 이름보다 액션 시나리오가 먼저여야 하는 이유",
    platform: "Signal Archive",
    summary:
      "CRM 프로젝트에서 세그먼트 분류보다 운영 우선순위와 액션 기준을 먼저 설명하려는 이유를 정리했습니다.",
    href: "/writing/segment-first-action-later",
    linkKind: "internal",
    status: "published",
    categories: ["비즈니스 해석", "CRM", "인사이트 도출"],
    relatedProjects: ["uk-online-retail-segment-analysis", "starbucks-promotion-analysis"],
    publishedAt: "2026-04",
    bodySections: [
      {
        title: "세그먼트 이름만으로는 부족한 이유",
        paragraphs: [
          "충성 고객, 이탈 위험 고객 같은 이름은 이해를 돕지만, 실제 운영에서는 그래서 무엇을 먼저 해야 하는가가 더 중요합니다.",
          "그래서 저는 세그먼트 정의와 동시에 어떤 KPI를 보고 어떤 채널을 우선 적용해야 하는지까지 연결해서 설명하려고 합니다.",
        ],
      },
      {
        title: "UK Retail과 Starbucks에서 공통으로 본 점",
        paragraphs: [
          "두 프로젝트 모두 데이터 구조는 달랐지만, 최종 목적은 고객을 나누는 것이 아니라 누가 먼저 액션 대상인지 판단하는 데 있었습니다.",
          "이 관점을 기준으로 README와 결과 설명도 분류 자체보다 해석과 실행 우선순위를 앞에 배치했습니다.",
        ],
      },
      {
        title: "앞으로 더 보완할 부분",
        paragraphs: [
          "다음 단계에서는 세그먼트별 액션을 더 구체적인 실험 설계나 메시지 전략으로까지 연결하는 글도 추가할 계획입니다.",
        ],
      },
    ],
  },
];

export const writingCategories = [
  "문제 정의",
  "분석 태도",
  "프로젝트 회고",
  "구조 설계",
  "결과물 구현",
  "서비스화",
  "비즈니스 해석",
  "CRM",
  "인사이트 도출",
];
