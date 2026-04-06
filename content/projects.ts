import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "lh-traffic-safety-analysis",
    title: "LH-traffic-safety-analysis",
    category: "대표 프로젝트",
    summary:
      "교통안전 위험을 단순 사고 건수가 아니라 도시 인프라 우선순위 판단 기준으로 해석한 공간 분석 프로젝트.",
    period: "Independent study",
    format: "개인 프로젝트",
    domains: ["공공", "도시", "교통", "공간데이터 분석"],
    role: ["기획", "데이터 전처리", "공간 분석", "지표 설계", "결과 해석"],
    stack: ["Python", "Jupyter Notebook", "공간데이터 분석"],
    problemTypes: ["문제 정의", "구조 설계", "위험 신호 포착", "인사이트 도출"],
    badges: ["Featured", "Spatial", "Risk-focused"],
    context:
      "교통안전 위험을 해석할 때 사고 건수만으로 우선순위를 판단하면 도시 인프라 계획 관점의 맥락이 빠집니다. 사고 위험을 더 구조적으로 읽을 기준이 필요했습니다.",
    outcome: "교통안전 관련 분석 결과물과 위험도 해석 기준을 정리했습니다.",
    focusPoints: [
      "공간데이터 분석가 포지션과 직접 연결되는 프로젝트",
      "공공데이터 기반 분석 경험",
      "구조적인 위험도 해석",
      "도시 / 교통 맥락을 고려한 분석 시도",
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
        title: "문제 정의",
        paragraphs: [
          "사고가 많이 난 지역을 바로 우선순위로 삼으면 실제 위험이 누적되는 구조를 놓칠 수 있습니다.",
          "도시 계획 맥락에서 어떤 지역이 더 취약한지 판단할 수 있는 해석 기준이 필요했습니다.",
        ],
      },
      {
        title: "분석 접근",
        paragraphs: [
          "공공데이터를 정리하고 공간 단위로 다시 읽을 수 있도록 분석 가능한 구조를 먼저 만들었습니다.",
          "이후 지표를 설계해 단순 빈도보다 위험의 맥락을 읽는 방향으로 해석했습니다.",
        ],
      },
      {
        title: "핵심 인사이트",
        paragraphs: [
          "결과값을 나열하는 대신, 우선적으로 확인해야 할 취약 구간과 위험 신호를 드러내는 데 집중했습니다.",
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
    title: "Seoul-Storefront-Redveil",
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
      "상가 매물을 추천하는 방식은 자주 보이지만, 실제 매입 판단 전 어떤 리스크를 먼저 검토해야 하는지 구조적으로 보여주는 도구는 드물었습니다.",
    outcome:
      "서울 소형 상가 매입 리스크 판별 서비스와 웹 기반 결과물, 프로젝트 구조를 설명하는 문서를 만들었습니다.",
    focusPoints: [
      "분석 + 기획 + 구현이 함께 들어간 프로젝트",
      "리스크 판단 기준을 직접 설계한 프로젝트",
      "데이터 결과를 실제 판단 도구 형태로 구현한 프로젝트",
      "문서화와 구조화 수준을 함께 보여줄 수 있는 프로젝트",
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
          "표면적으로 매력적인 조건이 보여도, 실제 판단에서 중요한 위험 요소는 종종 뒤로 밀립니다.",
          "사용자가 판단을 시작하기 전에 봐야 할 리스크 기준을 먼저 제시하는 흐름이 필요했습니다.",
        ],
      },
      {
        title: "구조 설계",
        paragraphs: [
          "데이터를 수집하고 정리하는 단계부터 결과가 하나의 판단 도구로 이어지도록 분석 구조를 설계했습니다.",
          "리스크 항목을 어떻게 분류하고 보여줄지 정의한 뒤, 웹 결과물로 연결했습니다.",
        ],
      },
      {
        title: "결과물 구현",
        paragraphs: [
          "웹 기반 인터페이스에서 위치, 상권, 매입 전 확인 포인트를 함께 볼 수 있도록 구성했습니다.",
        ],
      },
      {
        title: "회고",
        paragraphs: [
          "좋아 보이는 결과를 보여주는 분석보다, 먼저 의심해야 할 지점을 드러내는 설계가 더 실용적일 수 있다는 점을 증명해보고자 했습니다.",
        ],
      },
    ],
  },
  {
    slug: "uk-online-retail-segment-analysis",
    title: "UK-OnlineRetail-Segment-analysis",
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
    outcome: "리테일 데이터 기반 세그먼트 분석과 비즈니스 인사이트를 정리했습니다.",
    focusPoints: [
      "커머스/비즈니스 데이터 분석 적합성",
      "범용적인 데이터 분석 역량",
      "산업 친화적인 프로젝트 카드로 활용 가능",
    ],
    links: [],
    sortOrder: 3,
    caseStudySlugs: ["segmenting-for-business-meaning"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "커머스 데이터에서 매출 합계만 보는 대신 고객과 구매 패턴을 분리해 해석할 수 있도록 세그먼트를 정리했습니다.",
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
          "커머스 데이터는 숫자 자체보다 해석 프레임이 중요하다는 점을 보여주는 카드로 활용할 수 있습니다.",
        ],
      },
    ],
  },
  {
    slug: "starbucks-promotion-analysis",
    title: "starbucks-promotion-analysis",
    category: "서브 프로젝트",
    summary:
      "프로모션 맥락에서 소비자 반응을 읽고 결과를 정리한 마케팅 분석 프로젝트.",
    period: "Side analysis",
    format: "개인 프로젝트",
    domains: ["마케팅", "프로모션", "소비자 데이터 분석"],
    role: ["분석", "프로모션 데이터 해석", "결과 정리"],
    stack: ["Jupyter Notebook", "Python"],
    problemTypes: ["데이터 정제", "인사이트 도출", "스토리텔링"],
    badges: ["Marketing"],
    context:
      "프로모션 효과는 단순 반응률보다 맥락과 고객 반응 구조를 같이 읽어야 의미가 생깁니다.",
    outcome: "마케팅 / CRM 분야로 확장 가능한 분석 카드로 정리했습니다.",
    focusPoints: [
      "마케팅 / CRM / 소비자 데이터 분석 역량 보완",
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
    title: "nba-game-player-analysis",
    category: "서브 프로젝트",
    summary:
      "스포츠 데이터를 통합하고 경기/선수 지표를 해석한 스포츠 데이터 분석 프로젝트.",
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

