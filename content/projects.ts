import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "lh-traffic-safety-analysis",
    title: "LH Traffic Safety Analysis",
    category: "대표 프로젝트",
    primaryDomain: "공공데이터",
    summary: "사고 건수 합계보다, 신도시에도 적용 가능한 설치 우선순위 기준을 세우는 교통안전 분석 프로젝트입니다.",
    period: "2026",
    format: "개인 프로젝트",
    domains: ["공공데이터", "도시", "교통", "공간 데이터 분석"],
    role: ["공간 위험도 설계", "전이 검증 구조화", "우선순위 도출"],
    filterTools: ["Python", "GIS"],
    cardTools: ["Python", "GIS", "Jupyter"],
    stack: ["Python", "GIS", "Jupyter"],
    problemTypes: ["위험도 평가"],
    coreTags: ["전이 검증", "위험 격자", "설명 가능한 추천", "공공데이터"],
    badges: ["Featured", "Spatial", "Explainable"],
    context:
      "신도시나 사고 이력이 충분하지 않은 지역에서는 단순 사고 건수 집계만으로 설치 우선순위를 설명하기 어렵습니다. 공공데이터만으로도 납득 가능한 우선순위를 도출하는 구조가 필요했습니다.",
    outcome:
      "교통안전 시설 설치를 사고 빈도 정리에서 벗어나, 위험 격자와 우선순위 논리로 설명할 수 있는 공간 분석 구조로 재정리했습니다.",
    supportingLine: "신도시에서도 설치 우선순위를 설명 가능하게 만든 교통안전 분석",
    cardBrief: {
      problem:
        "사고 건수 집계만으로는 신도시와 같은 저이력 지역의 교통 취약 구역 우선순위를 설명하기 어려웠습니다.",
      method:
        "공공데이터와 공간 정보를 격자 단위로 재구성하고, 위험 구간 해석과 설치 후보 비교 로직을 함께 설계했습니다.",
      output: [
        "교통 취약 구역 우선순위",
        "위험 격자 / 위험 구간 분석",
        "공공시설 설치 후보 검토 로직",
        "지도 기반 시각화",
      ],
    },
    evidencePoints: [
      {
        label: "Coverage",
        value: "4개 신도시 권역 비교와 교산 적용 시나리오까지 포함",
      },
      {
        label: "Analysis Unit",
        value: "격자 기반 위험 구간과 설치 후보 위치 단위로 재구성",
      },
      {
        label: "Validation",
        value: "Mean AUC 0.8604 / Top-10% Lift 4.39x",
      },
      {
        label: "Decision Output",
        value: "추천 패키지와 추천 사유까지 설명 가능한 결과물로 연결",
      },
    ],
    detailBrief: {
      problem: {
        what:
          "사고 빈도 합계만으로는 데이터가 적은 지역까지 포함한 교통 취약 구역 우선순위를 설명하기 어려웠습니다.",
        why:
          "공공시설 설치 판단은 단순 집계보다 어디를 먼저 검토해야 하는지 설명 가능한 기준이 필요하기 때문입니다.",
      },
      dataMethod: {
        dataTypes: ["교통사고 공공데이터", "도로 / 공간 정보", "설치 후보 위치 정보"],
        process: [
          "공간 데이터를 격자 단위로 재구성",
          "위험 구간과 설치 후보를 함께 비교하는 구조 설계",
          "설명 가능한 우선순위 흐름으로 지도 시각화 정리",
        ],
        metrics: ["위험 격자 기준", "설치 우선순위 판단 기준", "전이 검증 관점"],
      },
      limitations: [
        "데이터 규모와 기간 세부 수치는 추가 정리 예정입니다.",
        "실제 정책 집행 데이터와의 후속 검증은 추가로 필요합니다.",
        "지역별 외부 변수 차이를 더 정교하게 반영하는 보완이 필요합니다.",
      ],
      linkNote: "README / 추가 문서 정리 예정",
    },
    focusPoints: [
      "공간 위험도를 단순 사고 건수 대신 격자 기반 우선순위 구조로 재설계",
      "공공데이터만으로도 설명 가능한 추천 구조를 만들기 위해 전이 검증 관점을 적용",
      "정책 판단에 바로 연결될 수 있도록 취약 구간과 설치 우선순위를 함께 제시",
    ],
    links: [
      {
        label: "GitHub 저장소",
        href: "https://github.com/dffxonnb-cyber/LH-traffic-safety-analysis",
      },
    ],
    sortOrder: 1,
    caseStudySlugs: ["risk-signals-before-volume"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "이 프로젝트는 교통안전 문제를 단순 사고 건수로 정리하는 대신, 신도시처럼 데이터가 부족한 환경에서도 설치 우선순위를 설명할 수 있는 구조를 만드는 데 초점을 맞췄습니다.",
          "공간 정보를 이용해 위험도를 격자 단위로 읽고, 어떤 위치에 무엇을 먼저 설치해야 하는지 설명 가능한 형태로 연결했습니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "공공데이터를 공간 단위로 정리한 뒤 위험 격자를 구성하고, 다른 지역에서도 사용할 수 있도록 전이 검증 관점으로 모델 구조를 점검했습니다.",
          "단순히 고위험 지역을 시각화하는 데서 끝내지 않고, 왜 그 위치가 우선순위인지 설명할 수 있게 추천 사유와 검증 문서를 함께 정리했습니다.",
        ],
      },
      {
        title: "포트폴리오 관점의 의미",
        paragraphs: [
          "도메인은 공공 안전이지만, 실질적으로는 데이터가 충분하지 않은 환경에서 자원 배분 우선순위를 설계하고 설명하는 문제를 다뤘습니다.",
        ],
      },
    ],
  },
  {
    slug: "seoul-storefront-redveil",
    title: "Seoul Storefront Redveil",
    category: "대표 프로젝트",
    primaryDomain: "상권/부동산",
    summary: "좋아 보이는 매물 추천보다, 매입 전에 먼저 보류해야 할 이유를 구조적으로 보여주는 상권 리스크 서비스입니다.",
    period: "2026",
    format: "개인 프로젝트",
    domains: ["상권 분석", "공공데이터", "리스크 모델링", "웹 구현"],
    role: ["문제 정의", "리스크 기준 설계", "서비스 구현"],
    filterTools: ["Python", "SQL", "Web"],
    cardTools: ["Python", "SQL", "Web"],
    stack: ["Python", "SQL", "HTML/CSS/JS", "Jupyter"],
    problemTypes: ["의사결정 도구"],
    coreTags: ["리스크 사유", "대체 후보", "공개 사이트", "공공데이터"],
    badges: ["Featured", "End-to-End", "Public-facing"],
    context:
      "상권 분석 자료는 많지만, 실제 매입 판단 단계에서 먼저 어떤 신호를 보류 사유로 읽어야 하는지까지 연결해주는 도구는 드뭅니다. 추천보다 보류 판단을 먼저 도와주는 서비스 구조가 필요했습니다.",
    outcome:
      "공공데이터와 상권 데이터를 묶어 매입 리스크를 설명하는 웹 기반 판단 도구를 만들고, 대체 후보 비교까지 가능한 서비스 흐름으로 정리했습니다.",
    supportingLine: "먼저 보류해야 할 이유를 보여주는 상권 리스크 판단 서비스",
    cardBrief: {
      problem:
        "좋아 보이는 매물 추천보다, 매입 전에 먼저 보류해야 할 리스크 신호를 구조적으로 보여줄 필요가 있었습니다.",
      method:
        "공공데이터와 상권 데이터를 결합해 리스크 기준을 설계하고, 비교 가능한 웹 서비스 흐름으로 구현했습니다.",
      output: [
        "상권 리스크 점수",
        "보류 사유 분류",
        "대체 후보 비교",
        "웹 기반 공개 페이지",
      ],
    },
    evidencePoints: [
      {
        label: "Coverage",
        value: "서울 25개 구, 행정동 428개, 취약 상권 1,570개 비교",
      },
      {
        label: "Transaction Data",
        value: "상업용 부동산 거래 12,074건 기반 검토",
      },
      {
        label: "Analysis Unit",
        value: "구 단위 비교 + 매물 1건 검토 + 대체 후보 비교 흐름",
      },
      {
        label: "Delivery",
        value: "리스크 점수, 보류 사유, 대체 후보를 공개 웹에서 바로 확인",
      },
    ],
    detailBrief: {
      problem: {
        what:
          "상권 분석 결과가 많아도 실제 매입 판단 단계에서는 무엇을 먼저 보류해야 하는지 명확히 보여주는 구조가 부족했습니다.",
        why:
          "의사결정 도구는 추천보다 리스크 사유와 대체 후보가 먼저 읽혀야 실제 검토 흐름에 바로 연결될 수 있기 때문입니다.",
      },
      dataMethod: {
        dataTypes: ["공공데이터", "상권 / 부동산 데이터", "매물 비교용 후보 정보"],
        process: [
          "리스크 사유 중심으로 데이터 구조 재정리",
          "점수, 보류 이유, 대체 후보 비교 흐름 설계",
          "웹 페이지에서 바로 검토 가능한 형태로 구현",
        ],
        metrics: ["상권 리스크 기준", "보류 사유 분류 기준", "대체 후보 비교 기준"],
      },
      limitations: [
        "공개 가능한 데이터 범위 기준으로 구성되어 실제 거래 데이터 검증은 추가 정리 예정입니다.",
        "데이터 기간과 커버리지 세부 정보는 README 기준 보완이 필요합니다.",
        "실제 투자 판단 결과와의 장기 검증은 후속 작업이 필요합니다.",
      ],
      linkNote: "서비스 설명 문서 추가 정리 예정",
    },
    focusPoints: [
      "분석 결과를 문서에 두지 않고 공개 웹사이트 형태로 구현",
      "리스크 점수보다 보류 사유와 대체 후보가 먼저 읽히는 흐름으로 정보 구조를 설계",
      "데이터 수집, 가공, 점수 계산, 공개 페이지 배포까지 end-to-end로 연결",
    ],
    links: [
      {
        label: "Live Site",
        href: "https://dffxonnb-cyber.github.io/Seoul-Storefront-Redveil/",
      },
      {
        label: "GitHub 저장소",
        href: "https://github.com/dffxonnb-cyber/Seoul-Storefront-Redveil",
      },
    ],
    sortOrder: 2,
    caseStudySlugs: ["risk-signals-before-volume", "turn-analysis-into-a-decision-tool"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "Redveil은 서울 상가 매입 전 검토에 필요한 리스크 신호를 빠르게 읽을 수 있게 만든 공개 서비스입니다.",
          "좋아 보이는 매물을 추천하는 것보다 먼저 사지 말아야 할 이유를 보여주는 흐름을 중심에 두고 설계했습니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "공공데이터와 거래 데이터를 묶어 구 단위 비교, 매물 단건 검토, 대체 후보 비교, 사례/방법론 문서까지 하나의 서비스 흐름으로 연결했습니다.",
          "분석 결과를 읽는 사람의 판단 순서를 고려해 점수, 사유, 비교, 후속 문서를 한 화면 안에서 이어지게 만들었습니다.",
        ],
      },
      {
        title: "포트폴리오 관점의 의미",
        paragraphs: [
          "이 프로젝트는 분석을 끝내는 사람이 아니라, 분석 결과를 실제 사용 가능한 도구와 경험으로 전환하는 사람이라는 점을 가장 직접적으로 보여주는 사례입니다.",
        ],
      },
    ],
  },
  {
    slug: "uk-online-retail-segment-analysis",
    title: "UK Online Retail Segment Analysis",
    category: "대표 프로젝트",
    primaryDomain: "UK Online Retail / E-commerce Analytics",
    summary: "영국 온라인 리테일 거래 데이터를 기반으로 고객 구매 패턴과 세그먼트를 분석한 e-commerce 분석 프로젝트입니다.",
    period: "2026",
    format: "팀 프로젝트 기반 정리",
    domains: ["UK Online Retail", "E-commerce Analytics", "구매 패턴 분석", "고객 세그먼트 분석"],
    role: ["RFM 해석 구조화", "통계 검정 정리", "캠페인 시나리오 번역"],
    filterTools: ["Python", "SQL"],
    cardTools: ["Python", "SQL"],
    stack: ["Python", "SQL", "Jupyter"],
    problemTypes: ["구매 패턴 분석", "고객 세그먼트 분석", "매출/재구매 인사이트"],
    coreTags: ["UK Online Retail", "E-commerce", "RFM", "Customer Segmentation", "Revenue Analysis"],
    badges: ["Featured", "E-commerce", "Revenue Logic"],
    context:
      "영국 온라인 리테일 거래 데이터는 구매 기록 자체는 풍부하지만, 어떤 패턴이 세그먼트 차이와 재구매 관점 인사이트로 이어지는지 구조적으로 정리할 필요가 있었습니다.",
    outcome:
      "거래 데이터를 구매 패턴, RFM, 세그먼트 기준으로 재구성하고, 매출 및 재구매 관점에서 해석 가능한 e-commerce 분석 결과로 정리했습니다.",
    supportingLine: "구매 패턴과 고객 세그먼트를 함께 읽을 수 있게 정리한 UK 온라인 리테일 분석",
    cardBrief: {
      problem:
        "거래 데이터는 많지만 고객 구매 패턴과 세그먼트 차이를 매출 및 재구매 관점으로 함께 읽기 어려웠습니다.",
      method:
        "거래 이력에서 RFM과 구매 패턴을 정리하고, 세그먼트별 차이를 비교해 e-commerce 관점 인사이트로 연결했습니다.",
      output: [
        "고객 세그먼트 분석",
        "RFM / 구매 패턴 분석",
        "매출 / 재구매 관점 인사이트",
        "매출 / 고객 유지 인사이트",
      ],
    },
    evidencePoints: [
      {
        label: "Dataset",
        value: "UK Online Retail 공개 거래 데이터와 고객 구매 이력 기반",
      },
      {
        label: "Analysis Unit",
        value: "고객 단위 RFM 세그먼트와 월별 매출·재구매 패턴 비교",
      },
      {
        label: "Revenue Signal",
        value: "상위 20% 고객이 전체 매출의 73.5% 차지",
      },
      {
        label: "Risk Signal",
        value: "이탈위험 고객군 11월 매출이 10월 대비 84.2% 감소",
      },
    ],
    detailBrief: {
      problem: {
        what:
          "거래 데이터 자체는 풍부하지만, 고객 구매 패턴과 세그먼트 차이를 매출 및 재구매 관점으로 읽기 쉽게 정리하는 작업이 필요했습니다.",
        why:
          "e-commerce 분석은 고객을 나누는 것만이 아니라 어떤 구매 패턴이 매출과 재구매 관점 해석으로 이어지는지 설명할 수 있어야 하기 때문입니다.",
      },
      dataMethod: {
        dataTypes: ["영국 온라인 리테일 거래 데이터", "고객 구매 이력", "RFM 기준 데이터"],
        process: [
          "고객군을 RFM과 구매 패턴 기준으로 재구성",
          "세그먼트별 구매 차이를 비교하고 통계적으로 검토",
          "매출 및 재구매 관점 인사이트로 결과 정리",
        ],
        metrics: ["RFM 기준", "구매 패턴 비교", "매출 / 재구매 관점 해석 기준"],
      },
      limitations: [
        "데이터 규모와 기간 세부 정보는 추가 정리 예정입니다.",
        "실제 운영 고객 식별 정보와 연결한 검증은 후속 보완이 필요합니다.",
        "재구매 관점 인사이트의 후속 검증은 추가 분석이 필요합니다.",
      ],
      linkNote: "README / 관련 문서 추가 정리 예정",
    },
    focusPoints: [
      "RFM과 구매 패턴을 함께 사용해 세그먼트 구조를 정리",
      "세그먼트별 차이를 매출 및 재구매 관점으로 비교",
      "거래 데이터를 e-commerce 해석 언어로 다시 정리",
    ],
    links: [
      {
        label: "GitHub 저장소",
        href: "https://github.com/dffxonnb-cyber/UK-OnlineRetail-Segment-analysis",
      },
    ],
    sortOrder: 3,
    caseStudySlugs: ["segmenting-for-business-meaning"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "이 프로젝트는 고객을 나누는 것 자체보다, 어떤 고객군을 먼저 유지하고 재활성화해야 하는지까지 설명하는 데 초점을 맞췄습니다.",
          "그래서 세그먼트 명칭보다 운영 해석과 KPI 연결을 더 앞쪽에 배치했습니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "RFM 기준으로 고객군을 나눈 뒤, 파레토 구조와 통계 검정을 통해 세그먼트별 차이가 실제로 의미 있는지 확인했습니다.",
          "마지막에는 결과를 유지, 업셀, 재활성화 같은 액션 시나리오로 번역해 CRM 관점에서 읽히도록 구성했습니다.",
        ],
      },
      {
        title: "포트폴리오 관점의 의미",
        paragraphs: [
          "분석 결과를 숫자 요약으로 끝내지 않고 비즈니스 판단 언어로 바꾸는 방식이 잘 드러나는 프로젝트입니다.",
        ],
      },
    ],
  },
  {
    slug: "starbucks-promotion-analysis",
    title: "Starbucks Promotion Analysis",
    category: "서브 프로젝트",
    primaryDomain: "CRM / Marketing Analytics",
    summary: "고객, 오퍼, 채널 데이터를 기반으로 어떤 고객군이 어떤 제안에 반응하는지 분석한 CRM / 마케팅 분석 프로젝트입니다.",
    period: "2026",
    format: "개인 프로젝트",
    domains: ["CRM", "Marketing Analytics", "고객 반응 분석", "오퍼/채널 성과 분석"],
    role: ["이벤트 구조 재설계", "추천 후보 해석", "Tableau 결과 정리"],
    filterTools: ["Python", "SQL"],
    cardTools: ["Python", "SQL", "Tableau"],
    stack: ["Python", "SQL", "Tableau"],
    problemTypes: ["고객 반응 분석", "오퍼/채널 성과 분석", "마케팅 액션 인사이트"],
    coreTags: ["CRM", "Offer Response", "Customer Segmentation", "Marketing Analytics", "Tableau"],
    badges: ["CRM", "Marketing Analytics"],
    context:
      "고객, 오퍼, 채널 데이터가 분리된 상태에서는 어떤 고객군이 어떤 제안에 반응하는지와 오퍼/채널 성과 차이를 함께 읽기 어렵습니다.",
    outcome:
      "고객, 오퍼, 채널 데이터를 재구성해 고객 반응과 오퍼/채널 성과를 함께 해석할 수 있는 CRM / 마케팅 분석 결과로 정리했습니다.",
    supportingLine: "고객군별 오퍼 반응과 채널 성과를 함께 읽을 수 있게 만든 CRM 분석",
    cardBrief: {
      problem:
        "고객, 오퍼, 채널 데이터가 분리되어 있어 어떤 고객군이 어떤 제안에 반응하는지 바로 파악하기 어려웠습니다.",
      method:
        "고객-오퍼-채널 구조로 데이터를 재편하고, 반응 패턴과 성과 차이를 Tableau까지 연결해 해석했습니다.",
      output: [
        "고객·오퍼·채널 데이터 통합",
        "고객 반응 / 오퍼 성과 분석",
        "Tableau 대시보드",
        "마케팅 액션 인사이트",
      ],
    },
    detailBrief: {
      problem: {
        what:
          "고객, 오퍼, 채널 기준으로 흩어진 데이터를 한 구조에서 보고 고객 반응과 오퍼 성과를 함께 읽을 수 있는 분석 틀이 필요했습니다.",
        why:
          "마케팅 분석은 단순 반응률이 아니라 어떤 고객군이 어떤 제안과 채널에 반응하는지까지 연결되어야 실행 인사이트가 되기 때문입니다.",
      },
      dataMethod: {
        dataTypes: ["이벤트 로그", "고객 정보", "오퍼 / 채널 데이터"],
        process: [
          "반정형 로그를 조인 가능한 테이블 구조로 전처리",
          "고객 반응과 오퍼 / 채널 성과를 함께 비교",
          "Tableau 대시보드와 해석 문서로 결과 정리",
        ],
        metrics: ["고객 반응 비교 기준", "오퍼 / 채널 성과 기준", "마케팅 인사이트 정리 기준"],
      },
      limitations: [
        "데이터 규모와 기간 세부 정보는 추가 정리 예정입니다.",
        "실제 운영 캠페인 성과와 연결한 후속 검증은 포함되지 않았습니다.",
        "오퍼별 장기 유지 효과 비교는 추가 분석이 필요합니다.",
      ],
      linkNote: "README / 대시보드 설명 문서 추가 정리 예정",
    },
    focusPoints: [
      "반정형 이벤트 로그를 분석 가능한 구조로 재정리",
      "고객 반응과 오퍼 / 채널 성과를 함께 해석",
      "Tableau 대시보드와 README 스토리로 마케팅 의사결정 흐름을 강조",
    ],
    links: [
      {
        label: "GitHub 저장소",
        href: "https://github.com/dffxonnb-cyber/starbucks-promotion-analysis",
      },
    ],
    sortOrder: 4,
    caseStudySlugs: ["segmenting-for-business-meaning"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "스타벅스 프로모션 프로젝트는 로그 데이터를 곧바로 분석하는 대신, 먼저 고객·오퍼·채널 기준으로 다시 구조화하는 작업부터 시작했습니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "이벤트 수준 로그를 조인 가능한 테이블 구조로 변환하고, 추천 후보와 채널 반응을 동시에 읽을 수 있게 지표를 정리했습니다.",
        ],
      },
    ],
  },
  {
    slug: "nba-game-player-analysis",
    title: "NBA Game & Player Analysis",
    category: "서브 프로젝트",
    primaryDomain: "스포츠 분석",
    summary: "승리 요인, 선수 성과, 플레이 스타일을 하나의 분석 파이프라인으로 연결한 스포츠 데이터 분석입니다.",
    period: "2026",
    format: "개인 프로젝트",
    domains: ["스포츠 분석", "예측 모델링", "EDA", "파이프라인"],
    role: ["데이터 통합", "모델링", "결과 해석"],
    filterTools: ["Python"],
    cardTools: ["Python"],
    stack: ["Python", "Jupyter"],
    problemTypes: ["예측 모델링"],
    coreTags: ["EDA", "통계 검정", "회귀 예측", "군집화"],
    badges: ["Sports", "Pipeline"],
    context:
      "스포츠 분석은 승패 요인, 선수 성과, 플레이 스타일이 따로 노는 경우가 많지만, 실제로는 하나의 흐름으로 같이 읽혀야 해석 가치가 커집니다.",
    outcome:
      "경기 데이터와 선수 데이터를 묶고, EDA부터 통계 검정, 예측, 군집화까지 이어지는 하나의 분석 파이프라인으로 정리했습니다.",
    supportingLine: "승리 요인과 선수 성과를 하나의 파이프라인으로 묶은 스포츠 분석",
    cardBrief: {
      problem:
        "승리 요인, 선수 성과, 팀 특성이 각각 분리되어 있어 경기 해석이 한 흐름으로 읽히지 않는 문제가 있었습니다.",
      method:
        "경기·선수 데이터를 통합하고 EDA, 모델링, 지표 비교를 연결해 팀과 선수 특성을 함께 해석했습니다.",
      output: [
        "승리 요인 분석",
        "모델링 / 지표 비교",
        "선수 / 팀 특성 분석",
        "시각화 결과",
      ],
    },
    detailBrief: {
      problem: {
        what:
          "경기 결과, 선수 성과, 팀 특성이 분리되어 있어 어떤 요인이 승리에 연결되는지 한 흐름으로 해석하기 어려웠습니다.",
        why:
          "스포츠 데이터 분석은 설명과 예측이 분리되기 쉬워, 코칭 포인트로 이어질 수 있는 통합 구조가 중요하기 때문입니다.",
      },
      dataMethod: {
        dataTypes: ["경기 데이터", "선수 기록 데이터", "팀 단위 비교 지표"],
        process: [
          "경기와 선수 데이터를 하나의 분석 파이프라인으로 통합",
          "EDA, 통계 검정, 모델링, 군집화 순으로 해석 연결",
          "팀 / 선수 특성이 함께 보이도록 시각화 구성",
        ],
        metrics: ["승리 요인 비교 지표", "선수 / 팀 특성 비교 기준", "모델 성능 비교 기준"],
      },
      limitations: [
        "데이터 규모와 시즌 범위 표기는 추가 정리 예정입니다.",
        "실시간 경기 데이터와 연결한 검증은 포함되지 않았습니다.",
        "모델 일반화 성능은 후속 비교 실험이 더 필요합니다.",
      ],
      linkNote: "README / 분석 리포트 추가 정리 예정",
    },
    focusPoints: [
      "경기와 선수 데이터를 하나의 흐름으로 통합",
      "설명과 예측을 함께 보여주는 구조로 분석 단계를 배치",
      "결과를 코칭 포인트와 스카우팅 해석으로 연결",
    ],
    links: [
      {
        label: "GitHub 저장소",
        href: "https://github.com/dffxonnb-cyber/nba-game-player-analysis",
      },
    ],
    sortOrder: 5,
    caseStudySlugs: [],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "NBA 프로젝트는 승리 요인, 선수 성과 예측, 플레이 스타일 해석을 따로 떼어내지 않고 하나의 분석 흐름으로 묶는 데 집중했습니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "전처리, EDA, 통계 검정, 머신러닝, 군집화, 시각화를 순서대로 연결하고 각 단계가 다음 판단으로 이어지도록 문서와 코드를 함께 정리했습니다.",
        ],
      },
    ],
  },
];

export const featuredProjects = projects
  .filter((project) => project.category === "대표 프로젝트")
  .sort((left, right) => left.sortOrder - right.sortOrder);
