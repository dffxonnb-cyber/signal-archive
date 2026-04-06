import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "lh-traffic-safety-analysis",
    title: "LH Traffic Safety Analysis",
    category: "대표 프로젝트",
    primaryDomain: "공공데이터",
    summary: "사고 건수 합계보다 신도시에도 적용 가능한 교통안전 설치 우선순위 기준이 먼저 필요했다.",
    period: "Independent study",
    format: "개인 프로젝트",
    domains: ["공공데이터", "도시", "교통", "공간데이터 분석"],
    role: ["공간 위험도 설계", "우선순위 도출"],
    filterTools: ["Python", "GIS"],
    cardTools: ["Python", "GIS", "Jupyter"],
    stack: ["Python", "GIS", "Jupyter"],
    problemTypes: ["위험도 평가"],
    coreTags: ["전이검증", "위험격자", "설명가능추천", "공공데이터"],
    badges: ["Featured", "Spatial", "Explainable"],
    context:
      "신도시나 데이터가 충분하지 않은 지역에서는 단순 사고 건수 집계만으로 설치 우선순위를 설명하기 어렵습니다. 공공데이터만으로도 납득 가능한 우선순위를 도출하는 구조가 필요했습니다.",
    outcome:
      "교통안전 시설 설치를 사고 빈도 정리에서 벗어나, 위험 격자와 우선순위 논리로 설명할 수 있는 공간 분석 구조로 재정리했습니다.",
    supportingLine:
      "신도시에서도 설치 우선순위를 설명 가능하게 만든 교통안전 분석",
    focusPoints: [
      "공간 위험도를 단순 사고 건수 대신 격자 기반 우선순위 구조로 재설계",
      "공공데이터만으로도 설명 가능한 추천 구조를 만들기 위해 전이 검증 관점을 적용",
      "정책 판단에 바로 연결될 수 있도록 취약 구간과 설치 우선순위를 함께 제시",
    ],
    links: [],
    sortOrder: 1,
    caseStudySlugs: ["risk-signals-before-volume"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "이 프로젝트는 교통안전 문제를 단순 사고 건수로 정리하는 대신, 신도시처럼 데이터가 부족한 환경에서도 설치 우선순위를 설명할 수 있는 구조를 만드는 데 초점을 맞췄습니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "공공데이터를 공간 단위로 재정렬하고 위험 격자를 구성해, 단순 빈도보다 우선적으로 개입해야 할 지점을 설명할 수 있게 만들었습니다.",
          "이후 전이 검증 관점을 적용해 특정 지역에서만 통하는 기준이 아니라 다른 신도시 환경에도 납득 가능한 우선순위 구조를 설계했습니다.",
        ],
      },
      {
        title: "핵심 인사이트",
        paragraphs: [
          "핵심은 어디가 위험한가보다 왜 이 위치를 먼저 설치해야 하는가를 설명할 수 있게 만드는 것이었습니다. 프로젝트는 시각화보다 우선순위 논리와 설명 가능성에 무게를 두었습니다.",
        ],
      },
      {
        title: "회고",
        paragraphs: [
          "공공 영역의 공간 분석은 지표를 많이 만드는 것보다, 데이터가 적은 환경에서도 설득 가능한 판단 구조를 설계하는 일이 더 중요하다는 점을 다시 확인한 프로젝트였습니다.",
        ],
      },
    ],
  },
  {
    slug: "seoul-storefront-redveil",
    title: "Seoul Storefront Redveil",
    category: "대표 프로젝트",
    primaryDomain: "공공데이터",
    summary: "좋아 보이는 매물 추천보다 먼저 보류해야 할 이유를 설명하는 리스크 구조가 필요했다.",
    period: "Independent build",
    format: "개인 프로젝트",
    domains: ["공공데이터", "상권", "입지", "리스크 분석", "웹 구현"],
    role: ["문제 정의", "서비스 설계", "리스크 로직 구현"],
    filterTools: ["Python", "SQL", "Web"],
    cardTools: ["Python", "SQL", "Web"],
    stack: ["Python", "SQL", "Web", "Jupyter"],
    problemTypes: ["위험도 평가"],
    coreTags: ["리스크 판별", "대체후보", "공공데이터", "웹배포"],
    badges: ["Featured", "End-to-End", "Public-facing"],
    context:
      "상권 분석 서비스는 많지만, 실제 매입 전에 어떤 조건 때문에 보류해야 하는지 구조적으로 보여주는 도구는 드뭅니다. 추천보다 보류 기준을 먼저 설계하는 편이 더 실용적이라고 판단했습니다.",
    outcome:
      "공공데이터와 상권 데이터를 묶어 매입 리스크를 판별하고, 대체 후보 비교까지 가능한 웹 기반 판단 도구로 연결했습니다.",
    supportingLine:
      "먼저 보류해야 할 이유를 보여주는 상권 리스크 서비스",
    focusPoints: [
      "분석 결과를 문서에 멈추지 않고 공공데이터 기반 웹 서비스까지 확장",
      "리스크 판별 기준과 대체 후보 구조를 직접 설계해 사용자의 판단 흐름을 앞당김",
      "상권 추천보다 리스크 보류 근거를 먼저 보여주는 방향으로 서비스 논리를 재구성",
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
          "이 프로젝트는 상가 매물을 예쁘게 비교하는 것이 아니라, 매입 전에 먼저 걸러야 할 리스크를 구조적으로 보여주는 판단 도구를 목표로 했습니다.",
        ],
      },
      {
        title: "문제 정의",
        paragraphs: [
          "겉으로 매력적인 조건이 있어도 실제 판단에서 중요한 위험 요소는 뒤로 밀리는 경우가 많습니다.",
          "사용자가 추천을 보기 전에 보류 사유를 먼저 확인할 수 있도록 리스크 구조를 다시 설계할 필요가 있었습니다.",
        ],
      },
      {
        title: "구조 설계",
        paragraphs: [
          "데이터를 수집하고 정리하는 단계부터 결과가 하나의 판단 도구로 이어지도록 분석 구조를 설계했습니다.",
          "리스크 항목을 어떻게 분류하고, 대체 후보와 함께 어떤 순서로 보여줄지 정의한 뒤 웹 결과물로 연결했습니다.",
        ],
      },
      {
        title: "회고",
        paragraphs: [
          "좋아 보이는 조건을 강조하는 것보다, 먼저 보류해야 할 이유를 드러내는 구조가 더 실용적인 서비스가 될 수 있다는 점을 확인한 프로젝트였습니다.",
        ],
      },
    ],
  },
  {
    slug: "uk-online-retail-segment-analysis",
    title: "UK Online Retail Segment Analysis",
    category: "대표 프로젝트",
    primaryDomain: "커머스",
    summary: "고객 세그먼트를 나누는 일보다 누구를 먼저 관리할지 우선순위로 해석할 기준이 필요했다.",
    period: "Independent analysis",
    format: "개인 프로젝트",
    domains: ["커머스", "리테일", "CRM", "비즈니스 데이터 분석"],
    role: ["CRM 분석", "세그먼트 설계"],
    filterTools: ["Python", "SQL"],
    cardTools: ["Python", "SQL"],
    stack: ["Python", "SQL", "Jupyter"],
    problemTypes: ["세그먼트 분석"],
    coreTags: ["RFM", "파레토검증", "통계검정", "액션전략"],
    badges: ["Featured", "CRM", "Priority Logic"],
    context:
      "커머스 데이터는 세그먼트 이름을 붙이기 쉽지만, 실제 현업에서는 누구를 먼저 관리해야 하는지가 더 중요한 질문입니다. 그래서 분류보다 예산 우선순위 해석에 초점을 맞췄습니다.",
    outcome:
      "고객 세그먼트를 단순 분류표가 아니라 예산과 액션 우선순위 문제로 번역해, CRM 실행 로직과 함께 읽히는 분석 구조로 정리했습니다.",
    supportingLine:
      "예산 우선순위 문제로 번역한 CRM 세그먼트 분석",
    focusPoints: [
      "RFM 기반 세그먼트를 파레토 검증과 통계 검정으로 다시 확인",
      "고객군 이름보다 예산 우선순위와 액션 전략이 먼저 읽히도록 결과를 재구성",
      "커머스 분석 결과를 운영 지표가 아니라 CRM 의사결정 언어로 번역",
    ],
    links: [],
    sortOrder: 3,
    caseStudySlugs: ["segmenting-for-business-meaning"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "이 프로젝트는 고객을 여러 그룹으로 나누는 것 자체보다, 어느 그룹에 예산과 관리 우선순위를 먼저 둘지 판단할 수 있는 구조를 만드는 데 집중했습니다.",
        ],
      },
      {
        title: "분석 접근",
        paragraphs: [
          "고객과 구매 특성을 분리해 세그먼트를 만들고, 파레토 관점과 통계 검정을 함께 사용해 실제로 우선순위를 설명할 수 있는 그룹만 남겼습니다.",
          "이후 각 세그먼트가 어떤 액션 전략으로 연결되는지까지 정리해 CRM 실행 관점으로 번역했습니다.",
        ],
      },
      {
        title: "핵심 인사이트",
        paragraphs: [
          "세그먼트 분석의 강점은 분류표가 아니라 예산 분배와 관리 순서를 설명하는 데 있다는 점이 명확해졌습니다.",
        ],
      },
    ],
  },
  {
    slug: "starbucks-promotion-analysis",
    title: "Starbucks Promotion Analysis",
    category: "서브 프로젝트",
    primaryDomain: "리테일/마케팅",
    summary: "반정형 이벤트 로그를 고객-오퍼-채널 단위로 다시 묶어야 프로모션 판단이 가능했다.",
    period: "Side analysis",
    format: "개인 프로젝트",
    domains: ["리테일/마케팅", "프로모션", "CRM"],
    role: ["데이터 구조 설계", "프로모션 해석"],
    filterTools: ["Python", "SQL"],
    cardTools: ["Python", "SQL", "Tableau"],
    stack: ["Python", "SQL", "Tableau"],
    problemTypes: ["프로모션/추천 해석"],
    coreTags: ["반정형이벤트", "고객-오퍼통합", "채널인사이트", "추천후보"],
    badges: ["CRM", "Event Restructuring"],
    context:
      "프로모션 로그는 이벤트 중심으로 쌓여 있어 그대로는 어떤 고객에게 어떤 오퍼를 어떤 채널로 보내야 하는지 판단하기 어렵습니다. 원시 로그를 고객-오퍼 구조로 다시 묶는 작업이 먼저 필요했습니다.",
    outcome:
      "반정형 프로모션 이벤트를 고객·오퍼·채널 구조로 통합해, CRM 추천 후보와 채널 인사이트를 함께 읽을 수 있는 분석 결과로 정리했습니다.",
    supportingLine:
      "고객-오퍼-채널 결정을 가능하게 만든 CRM 프로젝트",
    focusPoints: [
      "반정형 이벤트 로그를 고객-오퍼-채널 기준으로 재구성",
      "대시보드보다 추천 후보와 채널 인사이트가 먼저 읽히는 구조에 집중",
      "프로모션 해석을 CRM 실행 판단으로 연결할 수 있게 재설계",
    ],
    links: [],
    sortOrder: 4,
    caseStudySlugs: [],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "이 프로젝트는 프로모션 성과를 지표로만 요약하는 대신, 어떤 고객에게 어떤 오퍼를 어떤 채널로 보낼지 결정할 수 있는 구조를 만드는 데 초점을 맞췄습니다.",
        ],
      },
      {
        title: "구조 설계",
        paragraphs: [
          "이벤트 중심으로 흩어진 로그를 고객·오퍼·채널 구조로 통합해, 반응률 숫자보다 추천 후보와 채널 인사이트가 먼저 읽히도록 정리했습니다.",
        ],
      },
    ],
  },
  {
    slug: "nba-game-player-analysis",
    title: "NBA Game & Player Analysis",
    category: "서브 프로젝트",
    primaryDomain: "스포츠",
    summary: "승리 요인, 선수 성과, 플레이 스타일을 하나의 예측 파이프라인으로 연결할 필요가 있었다.",
    period: "Side analysis",
    format: "개인 프로젝트",
    domains: ["스포츠", "예측 모델링", "데이터 파이프라인"],
    role: ["데이터 통합", "예측 모델링", "스타일 군집화"],
    filterTools: ["Python"],
    cardTools: ["Python"],
    stack: ["Python", "Jupyter"],
    problemTypes: ["예측 모델링", "데이터 통합·파이프라인"],
    coreTags: ["EDA", "통계검정", "회귀예측", "클러스터링"],
    badges: ["Sports", "Pipeline"],
    context:
      "스포츠 분석은 주제별로 분리된 결과물이 많지만, 실제로는 경기 결과, 선수 성과, 플레이 스타일을 하나의 파이프라인으로 연결해야 해석의 밀도가 생깁니다.",
    outcome:
      "게임 데이터와 선수 데이터를 통합하고, EDA·통계 검정·회귀 예측·군집화를 하나의 분석 흐름으로 엮어 스포츠 분석 파이프라인을 구성했습니다.",
    supportingLine:
      "승리 요인과 스타일을 한 파이프라인으로 엮은 스포츠 분석",
    focusPoints: [
      "경기와 선수 데이터를 분리하지 않고 하나의 파이프라인으로 통합",
      "EDA, 통계 검정, 회귀 예측, 클러스터링을 연속된 분석 흐름으로 연결",
      "도메인 관심을 넘어 예측 모델링과 데이터 통합 구조 경험을 보여주는 사례",
    ],
    links: [],
    sortOrder: 5,
    caseStudySlugs: [],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "이 프로젝트는 스포츠 데이터를 주제별로 따로 분석하는 대신, 승리 요인과 선수 성과, 플레이 스타일을 하나의 흐름에서 읽을 수 있도록 연결하는 데 집중했습니다.",
        ],
      },
      {
        title: "분석 파이프라인",
        paragraphs: [
          "데이터 통합으로 출발해 EDA, 통계 검정, 회귀 예측, 군집화까지 이어지는 분석 파이프라인을 만들고, 각 단계가 다음 판단으로 이어지도록 정리했습니다.",
        ],
      },
    ],
  },
];

export const featuredProjects = projects
  .filter((project) => project.category === "대표 프로젝트")
  .sort((left, right) => left.sortOrder - right.sortOrder);
