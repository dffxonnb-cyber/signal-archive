import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "lh-traffic-safety-analysis",
    title: "LH Traffic Safety Analysis",
    category: "대표 프로젝트",
    summary:
      "사고 건수보다 도시 인프라 관점의 위험 신호를 우선순위로 읽은 공간 분석 프로젝트.",
    period: "Independent study",
    format: "개인 프로젝트",
    domains: ["공공", "도시", "교통", "공간데이터 분석"],
    role: ["문제 정의", "데이터 전처리", "공간 분석", "지표 설계", "결과 해석"],
    stack: ["Python", "Jupyter Notebook", "공간데이터 분석"],
    problemTypes: ["문제 정의", "구조 설계", "위험 신호 포착", "인사이트 도출"],
    badges: ["Featured", "Spatial", "Risk-focused"],
    context:
      "교통안전 리스크를 해석할 때 사고 건수만으로 우선순위를 정하면 도시 인프라 관점의 맥락이 빠집니다. 더 구조적인 위험 해석 기준이 필요했습니다.",
    outcome:
      "교통안전 관련 데이터를 공간 단위로 다시 읽고, 취약 구간과 위험도를 해석하는 기준을 정리했습니다.",
    focusPoints: [
      "공공데이터 기반 공간 분석 경험",
      "도시 / 교통 맥락을 고려한 위험도 해석",
      "지표보다 먼저 해석 단위를 세우는 접근",
    ],
    links: [],
    sortOrder: 1,
    caseStudySlugs: ["risk-signals-before-volume"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "이 프로젝트는 교통안전 이슈를 단순 사고 건수로 정리하는 대신, 도시 인프라 관점에서 먼저 봐야 하는 위험 신호를 식별하는 데 초점을 맞췄습니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "공공데이터를 정리하고 공간 단위로 다시 읽을 수 있도록 분석 가능한 구조를 먼저 만들었습니다.",
          "이후 지표를 설계해 단순 빈도보다 위험의 맥락이 드러나는 방향으로 결과를 해석했습니다.",
        ],
      },
      {
        title: "핵심 인사이트",
        paragraphs: [
          "결과값 자체를 나열하는 대신, 우선적으로 확인해야 할 취약 구간과 위험 신호를 드러내는 데 집중했습니다.",
        ],
      },
      {
        title: "회고",
        paragraphs: [
          "공간데이터 분석은 시각적 결과보다 먼저 해석 단위와 구조를 정리해야 한다는 점을 다시 확인한 프로젝트였습니다.",
        ],
      },
    ],
  },
  {
    slug: "seoul-storefront-redveil",
    title: "Seoul Storefront Redveil",
    category: "대표 프로젝트",
    summary:
      "좋아 보이는 상가 매물을 고르는 대신, 매입 전에 먼저 확인해야 할 리스크 신호를 구조적으로 보여주는 분석형 서비스.",
    period: "Independent build",
    format: "개인 프로젝트",
    domains: ["상권", "부동산", "입지", "리스크 분석", "웹 구현"],
    role: [
      "문제 정의",
      "서비스 기획",
      "데이터 수집 및 가공",
      "분석 구조 설계",
      "리스크 판단 기준 설계",
      "웹 구현",
      "문서화",
      "배포",
    ],
    stack: ["Python", "SQL", "Jupyter Notebook", "JavaScript", "HTML/CSS"],
    problemTypes: ["문제 정의", "리스크 모델링", "구조 설계", "웹 구현", "스토리텔링"],
    badges: ["Featured", "End-to-End", "Decision tool"],
    context:
      "상가 매물을 추천하는 서비스는 많지만, 실제 매입 전 어떤 리스크를 먼저 검토해야 하는지 구조적으로 보여주는 도구는 드뭅니다.",
    outcome:
      "서울 소형 상가 매입 리스크를 판별하는 웹 기반 결과물과 프로젝트 구조 문서를 만들었습니다.",
    focusPoints: [
      "분석 + 기획 + 구현이 함께 들어간 프로젝트",
      "리스크 판단 기준을 직접 설계한 경험",
      "데이터 결과를 실제 판단 도구로 연결한 구조",
    ],
    links: [],
    sortOrder: 2,
    caseStudySlugs: [
      "risk-signals-before-volume",
      "turn-analysis-into-a-decision-tool",
    ],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "상가 분석 결과를 예쁘게 보여주는 것이 아니라, 매입 전에 먼저 걸러야 할 리스크 신호를 구조적으로 확인하는 도구를 목표로 했습니다.",
        ],
      },
      {
        title: "문제 정의",
        paragraphs: [
          "표면적으로 매력적인 조건이 보여도 실제 판단에서 중요한 위험 요소는 뒤로 밀리는 경우가 많습니다.",
          "사용자가 판단을 시작하기 전에 봐야 할 리스크 기준을 먼저 제시하는 흐름이 필요했습니다.",
        ],
      },
      {
        title: "구조 설계",
        paragraphs: [
          "데이터를 수집하고 정리하는 단계부터 결과가 하나의 판단 도구로 이어지도록 분석 구조를 설계했습니다.",
          "리스크 항목을 어떻게 분류하고 보여줄지 정의한 뒤 웹 결과물로 연결했습니다.",
        ],
      },
      {
        title: "회고",
        paragraphs: [
          "좋아 보이는 결과보다 먼저 의심해야 할 지점을 드러내는 설계가 더 실용적일 수 있다는 점을 보여준 프로젝트였습니다.",
        ],
      },
    ],
  },
  {
    slug: "uk-online-retail-segment-analysis",
    title: "UK Online Retail Segment Analysis",
    category: "대표 프로젝트",
    summary:
      "온라인 리테일 데이터를 바탕으로 고객과 세그먼트를 해석하고 비즈니스 관점 인사이트를 정리한 분석 프로젝트.",
    period: "Independent analysis",
    format: "개인 프로젝트",
    domains: ["커머스", "리테일", "비즈니스 데이터 분석"],
    role: ["데이터 분석", "세그먼트 해석", "인사이트 도출"],
    stack: ["Python", "Jupyter Notebook", "데이터 분석"],
    problemTypes: ["데이터 정제", "세그먼트 분석", "인사이트 도출", "스토리텔링"],
    badges: ["Featured", "Commerce", "Insight-heavy"],
    context:
      "온라인 리테일 데이터는 요약 지표를 쉽게 만들 수 있지만, 실제로는 고객 세그먼트와 구매 패턴을 어떤 관점으로 해석하느냐가 더 중요합니다.",
    outcome:
      "리테일 데이터 기반 세그먼트 분석과 비즈니스 인사이트를 정리하고, 산업 적합성이 읽히는 설명 구조로 문서를 구성했습니다.",
    focusPoints: [
      "커머스 / 비즈니스 데이터 분석 적합성",
      "숫자보다 해석 프레임을 중심에 둔 카드",
      "산업 친화적인 분석 서사 구성",
    ],
    links: [],
    sortOrder: 3,
    caseStudySlugs: ["segmenting-for-business-meaning"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "커머스 데이터에서 매출 합계만 보는 대신, 고객과 구매 패턴을 분리해 해석할 수 있도록 세그먼트를 정리했습니다.",
        ],
      },
      {
        title: "분석 접근",
        paragraphs: [
          "고객과 구매 특성을 구분하고, 세그먼트별 의미가 비즈니스 판단으로 이어지도록 설명 구조를 설계했습니다.",
        ],
      },
      {
        title: "핵심 인사이트",
        paragraphs: [
          "세그먼트 이름보다 해석 기준과 비즈니스 의미가 먼저 읽히는 분석 카드가 되도록 정리했습니다.",
        ],
      },
    ],
  },
  {
    slug: "starbucks-promotion-analysis",
    title: "Starbucks Promotion Analysis",
    category: "서브 프로젝트",
    summary:
      "프로모션 맥락에서 소비자 반응을 읽고 결과를 정리한 마케팅 분석 프로젝트.",
    period: "Side analysis",
    format: "개인 프로젝트",
    domains: ["마케팅", "프로모션", "소비자 데이터 분석"],
    role: ["데이터 분석", "프로모션 해석", "결과 정리"],
    stack: ["Python", "Jupyter Notebook"],
    problemTypes: ["데이터 정제", "인사이트 도출", "스토리텔링"],
    badges: ["Marketing"],
    context:
      "프로모션 효과는 단순 반응률보다 맥락과 고객 반응 구조를 같이 읽어야 의미가 생깁니다.",
    outcome: "마케팅 / CRM 분야로 확장 가능한 분석 카드로 정리했습니다.",
    focusPoints: [
      "마케팅 / CRM 분석 역량 보완",
      "대표 프로젝트 외 도메인 확장성 제시",
    ],
    links: [],
    sortOrder: 4,
    caseStudySlugs: [],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "프로모션 성과를 결과 지표로만 보지 않고, 반응 구조와 해석 포인트를 정리했습니다.",
        ],
      },
    ],
  },
  {
    slug: "nba-game-player-analysis",
    title: "NBA Game & Player Analysis",
    category: "서브 프로젝트",
    summary:
      "스포츠 데이터를 통합하고 경기 / 선수 지표를 해석한 스포츠 데이터 분석 프로젝트.",
    period: "Side analysis",
    format: "개인 프로젝트",
    domains: ["스포츠 데이터 분석"],
    role: ["데이터 통합", "전처리", "지표 해석", "분석"],
    stack: ["Python", "Jupyter Notebook"],
    problemTypes: ["데이터 통합", "전처리", "지표 해석", "분석 구조"],
    badges: ["Sports"],
    context:
      "스포츠 데이터는 데이터 소스가 분리돼 있는 경우가 많아, 통합과 해석 구조를 동시에 설계하는 경험이 중요했습니다.",
    outcome: "도메인 확장성과 다중 데이터 처리 경험을 보여주는 분석 카드로 정리했습니다.",
    focusPoints: [
      "스포츠 데이터 도메인 관심도와 확장성 제시",
      "다중 데이터 처리 및 분석 구조 경험 보완",
    ],
    links: [],
    sortOrder: 5,
    caseStudySlugs: [],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "경기와 선수 데이터의 관계를 연결해 지표를 해석하는 흐름을 만들었습니다.",
        ],
      },
    ],
  },
];

export const featuredProjects = projects
  .filter((project) => project.category === "대표 프로젝트")
  .sort((left, right) => left.sortOrder - right.sortOrder);
