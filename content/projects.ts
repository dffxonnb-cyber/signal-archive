import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "lh-traffic-safety-analysis",
    slug: "lh-traffic-safety-analysis",
    title: "LH Traffic Safety Analysis",
    status: "featured",
    category: "대표 프로젝트",
    primaryDomain: "공공데이터",
    summary: "신도시에 적용 가능한 설치 우선 순위 기준을\n명확히 도출한 교통안전 분석 프로젝트입니다.",
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
    review: {
      decisionQuestion: "사고 이력이 부족한 신도시에서도 어떤 구간을 먼저 검토해야 하는가?",
      myRole: "공간 위험도 구조화, 전이 검증 설계, 설치 우선순위 도출",
      evidence: "Mean AUC 0.8604 / Top-10% Lift 4.39x",
      deliverable: "격자 기반 위험도 분석과 우선순위 검토 구조",
      hiringSignal: "공간 데이터 기반 우선순위 설계와 검증 가능",
    },
    decisionMoment: {
      originalQuestion: "사고가 많은 곳은 어디인가?",
      reframedQuestion: "사고 이력이 부족한 신도시에서도 먼저 설치를 검토할 구간은 어디인가?",
      keyEvidence: "Mean AUC 0.8604, Top-10% Lift 4.39x",
      finalDeliverable: "격자 기반 위험도 분석과 우선순위 검토 구조",
      proves: "공간 데이터 기반 우선순위 설계와 검증 역량",
    },
    cardBrief: {
      problem:
        "사고 건수 집계만으로는 신도시와 같은 저이력 지역의 교통 취약 구역 우선순위를 설명하기 어려움.",
      method:
        "공공데이터와 공간 정보를 격자 단위로 재구성하고, 위험 구간 해석과 설치 후보 비교 로직을 함께 설계함.",
      output: [
        "교통 취약 구역 우선순위",
        "위험 격자 / 위험 구간 분석",
        "공공시설 설치 후보 검토 로직",
        "지도 기반 시각화",
      ],
    },
    metrics: [
      { label: "Model Quality", value: "AUC 0.8604" },
      { label: "Priority Signal", value: "Top-10% Lift 4.39x" },
    ],
    evidencePoints: [
      {
        label: "적용 범위",
        value: "4개 신도시 권역 비교와 교산 적용 시나리오까지 포함",
      },
      {
        label: "분석 단위",
        value: "격자 기반 위험 구간과 설치 후보 위치 단위로 재구성",
      },
      {
        label: "검증 결과",
        value: "Mean AUC 0.8604 / Top-10% Lift 4.39x",
      },
      {
        label: "결과물 연결",
        value: "설치 후보와 우선순위 사유를 함께 설명하는 결과물로 연결",
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
        "공개 저장소는 원천 데이터 제외 상태라 재현 범위가 검증 문서와 산출물 기준으로 제한됩니다.",
        "실제 정책 집행 데이터와의 후속 검증은 추가로 필요합니다.",
        "지역별 외부 변수 차이를 더 정교하게 반영하는 보완이 필요합니다.",
      ],
      linkNote: "GitHub README와 검증 문서, 시각화 산출물 기준으로 전체 흐름을 확인할 수 있습니다.",
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
        type: "secondary",
      },
    ],
    sortOrder: 3,
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
    id: "seoul-storefront-redveil",
    slug: "seoul-storefront-redveil",
    title: "Seoul Storefront Redveil",
    status: "featured",
    category: "대표 프로젝트",
    primaryDomain: "상권/부동산",
    summary: "좋아 보이는 매물 추천보다, 매입 전에 확인해야 할\n근거를 한 화면에 정리한 상권 검토 서비스입니다.",
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
    supportingLine: "보류 근거를 명확히 보여주는 상권 리스트 판단 서비스",
    review: {
      decisionQuestion: "매입 후보를 추천하기 전에 어떤 보류 신호를 먼저 확인해야 하는가?",
      myRole: "리스크 기준 설계, 거래/상권 데이터 구조화, 공개 웹 서비스 구현",
      evidence: "서울 25개 구 / 행정동 428개 / 거래 12,074건 / 취약 상권 1,570개",
      deliverable: "공개 웹 기반 상권 리스크 검토 서비스",
      hiringSignal: "분석 결과를 실제 의사결정 UI로 번역할 수 있음",
    },
    decisionMoment: {
      originalQuestion: "어떤 상권이 좋아 보이는가?",
      reframedQuestion: "매입 전에 먼저 보류해야 할 신호는 무엇인가?",
      keyEvidence: "서울 25개 구, 행정동 428개, 취약 상권 1,570개, 거래 12,074건",
      finalDeliverable: "공개 웹 기반 상권 리스크 검토 서비스",
      proves: "분석 결과를 의사결정 UI로 번역하는 역량",
    },
    cardBrief: {
      problem:
        "좋아 보이는 매물 추천보다, 매입 전에 먼저 확인해야 할 항목을 한눈에 보여줄 필요가 있었음.",
      method:
        "공공데이터와 상권 데이터를 결합해 리스크 기준을 설계하고, 비교 가능한 웹 서비스 흐름으로 구현함.",
      output: [
        "상권 리스크 점수",
        "보류 사유 분류",
        "대체 후보 비교",
        "웹 기반 공개 페이지",
      ],
    },
    metrics: [
      { label: "Scope", value: "25 Seoul Districts" },
      { label: "Transactions", value: "12,074 Transactions" },
      { label: "Admin Units", value: "428 Dongs" },
    ],
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
        "공개 가능한 데이터 범위 기준으로 구성되어 실제 거래 데이터 검증 범위는 저장소 문서와 공개 서비스 기준으로 제한됩니다.",
        "실시간 공실률, 유동 인구, 운영 매출 같은 추가 변수는 아직 결합하지 않았습니다.",
        "실제 투자 판단 결과와의 장기 검증은 후속 작업이 필요합니다.",
      ],
      linkNote: "서비스 페이지와 GitHub 저장소 문서에서 서비스 흐름과 설명 자료를 함께 확인할 수 있습니다.",
    },
    focusPoints: [
      "분석 결과를 문서에 두지 않고 공개 웹사이트 형태로 구현",
      "리스크 점수보다 보류 사유와 대체 후보가 먼저 읽히는 흐름으로 정보 구조를 설계",
      "데이터 수집, 가공, 점수 계산, 공개 페이지 배포까지 end-to-end로 연결",
    ],
    links: [
      {
        label: "서비스 보기",
        href: "https://dffxonnb-cyber.github.io/Seoul-Storefront-Redveil/",
        type: "secondary",
      },
      {
        label: "GitHub 저장소",
        href: "https://github.com/dffxonnb-cyber/Seoul-Storefront-Redveil",
        type: "secondary",
      },
    ],
    sortOrder: 1,
    caseStudySlugs: ["risk-signals-before-volume", "turn-analysis-into-a-decision-tool"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "Redveil은 서울 상가 매입 전 검토에 필요한 확인 포인트를 빠르게 읽을 수 있게 만든 공개 서비스입니다.",
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
    id: "shelter-signal",
    slug: "shelter-signal",
    title: "Shelter Signal",
    status: "featured",
    category: "대표 프로젝트",
    primaryDomain: "공공데이터",
    summary:
      "구조동물 공고의 보호 종료일과 데이터 신호를 기반으로\n우선 확인 공고를 정리하는 공공데이터 PWA입니다.",
    period: "2026",
    format: "개인 프로젝트",
    domains: ["공공데이터", "구조동물", "데이터 파이프라인", "PWA"],
    role: ["데이터 파이프라인 설계", "SQL 모델링", "PWA 구현"],
    filterTools: ["Python", "SQL", "React"],
    cardTools: ["Python", "PostgreSQL", "React", "TypeScript"],
    stack: ["Python", "PostgreSQL", "SQL", "Vite", "React", "TypeScript", "Vercel"],
    problemTypes: ["우선순위 판단", "의사결정 도구"],
    coreTags: ["Public Data", "PostgreSQL", "SQL", "React", "TypeScript", "PWA", "Vercel"],
    badges: ["Featured", "Public Data", "PWA", "Static JSON"],
    context:
      "구조동물 공고는 보호 종료일, 지역, 보호소 연락처, 사진 여부가 흩어져 있어 오늘 먼저 확인할 공고를 빠르게 고르기 어렵습니다. 단순 최신순 목록보다 보호 종료 신호를 기준으로 다시 정리하는 화면이 필요했습니다.",
    outcome:
      "공공 구조동물 데이터를 수집·정제하고, 보호 종료일까지 남은 시간과 데이터 신호를 바탕으로 Rescue Window Score를 계산해 모바일 우선 PWA로 시각화했습니다. 배포 버전은 live backend가 아니라 export된 정적 JSON 데이터를 사용합니다.",
    supportingLine:
      "보호 종료일까지 남은 시간과 데이터 신호를 기반으로\n먼저 확인할 구조동물 공고를 정리한 PWA",
    review: {
      decisionQuestion: "오늘 먼저 확인해야 할 구조동물 공고는 무엇인가?",
      myRole: "공공 API 점검, PostgreSQL 파이프라인, SQL summary view, React PWA 구현",
      evidence: "20개 공고 정적 JSON / Rescue Window Score / Vercel PWA",
      deliverable: "정적 JSON export 기반 모바일 우선 PWA",
      hiringSignal: "데이터 파이프라인을 사용자가 판단 가능한 웹 화면으로 연결 가능",
    },
    decisionMoment: {
      originalQuestion: "구조동물 공고를 어떻게 조회할 것인가?",
      reframedQuestion: "보호 종료가 가까운 공고를 어떻게 먼저 확인하게 만들 것인가?",
      keyEvidence: "공고 종료일, 진행 상태, 사진·연락처 신호를 조합한 Rescue Window Score",
      finalDeliverable: "static JSON export bridge와 Vite React PWA",
      proves: "공공데이터 제약을 드러낸 상태로 데이터 제품형 MVP를 끝까지 구성할 수 있음",
    },
    cardBrief: {
      problem:
        "공고 종료일과 보호소 정보가 흩어져 있어 사용자가 우선 확인 공고를 빠르게 고르기 어려움.",
      method:
        "공공 구조동물 데이터를 수집·정제하고, 보호 종료일까지 남은 시간과 데이터 신호를 바탕으로 Rescue Window Score를 계산함.",
      output: [
        "Rescue Window Score",
        "정적 JSON export bridge",
        "모바일 우선 PWA",
        "Vercel 배포",
      ],
    },
    metrics: [
      { label: "Data Bridge", value: "5 JSON Exports" },
      { label: "App Scope", value: "5 PWA Views" },
      { label: "Deployment", value: "Vercel" },
    ],
    evidencePoints: [
      {
        label: "데이터 수집",
        value: "구조동물 공공 API smoke test와 mock 데이터 기반 파이프라인 검증",
      },
      {
        label: "데이터 구조",
        value: "PostgreSQL raw rescued animal table, SQL models, summary views 구성",
      },
      {
        label: "우선순위 신호",
        value: "보호 종료일과 데이터 품질 신호를 조합한 Rescue Window Score",
      },
      {
        label: "배포 방식",
        value: "현재 배포 버전은 live backend가 아닌 exported static JSON 데이터를 사용",
      },
      {
        label: "화면 범위",
        value: "홈, 골든타임, 공고 필터, 지역 탐색, 상세 시트, 저장 placeholder",
      },
    ],
    detailBrief: {
      problem: {
        what:
          "구조동물 공고는 종료일, 지역, 보호소 연락처, 사진 여부가 흩어져 있어 긴급하게 확인해야 할 공고를 한눈에 고르기 어렵습니다.",
        why:
          "보호 종료가 가까운 공고는 시간이 중요한데, 사용자가 매번 전체 목록을 훑는 방식으로는 우선 확인 대상을 놓치기 쉽기 때문입니다.",
      },
      dataMethod: {
        dataTypes: ["구조동물 공공 API 응답", "mock rescued animal 데이터", "SQL summary view"],
        process: [
          "공공 API 응답을 DB 필드로 정규화하고 raw 테이블 구조를 설계",
          "SQL model과 summary view에서 Rescue Window Score와 지역별 신호 계산",
          "앱에서 읽을 수 있도록 정적 JSON으로 export하고 PWA 화면에 연결",
        ],
        metrics: ["보호 종료일까지 남은 일수", "공고 진행 상태", "사진·보호소 연락처·특이사항 신호"],
      },
      limitations: [
        "현재 배포 버전은 `app/public/data/*.json`으로 export된 정적 JSON 데이터를 사용하며 production live backend가 아닙니다.",
        "실사용자 계정, 저장 persistence, 실시간 알림, email/SMS 자동화는 아직 구현하지 않았습니다.",
        "Rescue Window Score는 공식 위험 점수나 입양 결과 예측 모델이 아니라 내부 우선순위 탐색 신호입니다.",
        "API key와 운영용 비밀값은 저장소와 배포 문서에 포함하지 않았습니다.",
      ],
      linkNote: "Live Demo에서는 정적 JSON 기반 PWA 화면을 확인할 수 있고, GitHub 저장소에서는 데이터 파이프라인과 export 흐름을 함께 확인할 수 있습니다.",
    },
    focusPoints: [
      "공고 목록을 최신순이 아니라 보호 종료 신호 중심의 우선순위 문제로 재정의",
      "PostgreSQL, SQL model, static JSON export, React PWA를 하나의 검증 가능한 흐름으로 연결",
      "배포 한계와 데이터 제약을 문서에 명시해 production-ready 서비스처럼 과장하지 않음",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://shelter-signal-ebon.vercel.app/",
        type: "primary",
      },
      {
        label: "GitHub 저장소",
        href: "https://github.com/dffxonnb-cyber/shelter-signal",
        type: "secondary",
      },
    ],
    sortOrder: 2,
    caseStudySlugs: ["risk-signals-before-volume", "turn-analysis-into-a-decision-tool"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "Shelter Signal은 구조동물 공고를 단순히 나열하지 않고, 보호 종료일까지 남은 시간과 데이터 신호를 바탕으로 먼저 볼 공고를 정리한 공공데이터 기반 PWA입니다.",
          "현재 공개 배포는 실시간 backend가 아니라 export된 정적 JSON 데이터를 읽는 방식으로 구성되어 있으며, 포트폴리오용 데이터 제품 MVP의 범위를 명확히 드러냅니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "공공 API smoke test와 mock 데이터를 바탕으로 PostgreSQL raw 테이블을 설계하고, SQL model과 summary view에서 Rescue Window Score와 지역별 신호를 만들었습니다.",
          "그 결과를 static JSON export bridge로 앱에 넘기고, Vite + React + TypeScript PWA에서 홈, 골든타임, 공고 필터, 지역 탐색, 상세 시트 흐름으로 시각화했습니다.",
        ],
      },
      {
        title: "포트폴리오 관점의 의미",
        paragraphs: [
          "이 프로젝트는 데이터 수집, 모델링, export, 배포 화면까지 이어지는 end-to-end 흐름을 보여주면서도, live backend와 production 운영 기능이 아직 없다는 한계를 숨기지 않는 사례입니다.",
        ],
      },
    ],
  },
  {
    id: "uk-online-retail-segment-analysis",
    slug: "uk-online-retail-segment-analysis",
    title: "UK Online Retail Segment Analysis",
    status: "supporting",
    category: "서브 프로젝트",
    primaryDomain: "이커머스",
    summary: "영국 온라인 리테일 거래 데이터를 기반으로\n세그먼트를 분석한 이커머스 분석 프로젝트입니다.",
    period: "2026",
    format: "팀 프로젝트 기반 정리",
    domains: ["UK Online Retail", "E-commerce Analytics", "구매 패턴 분석", "고객 세그먼트 분석"],
    role: ["RFM 해석 구조화", "통계 검정 정리", "캠페인 시나리오 번역"],
    filterTools: ["Python", "SQL"],
    cardTools: ["Python", "SQL"],
    stack: ["Python", "SQL", "Jupyter"],
    problemTypes: ["구매 패턴 분석", "고객 세그먼트 분석", "매출/재구매 인사이트"],
    coreTags: ["UK Online Retail", "E-commerce", "RFM", "Customer Segmentation", "Revenue Analysis"],
    badges: ["Featured", "E-commerce", "Revenue Logic", "CI Verified"],
    context:
      "영국 온라인 리테일 거래 데이터는 구매 기록 자체는 풍부하지만, 어떤 패턴이 세그먼트 차이와 재구매 관점 인사이트로 이어지는지 구조적으로 정리할 필요가 있었습니다.",
    outcome:
      "거래 데이터를 구매 패턴, RFM, 세그먼트 기준으로 재구성하고, 매출 및 재구매 관점에서 해석 가능한 e-commerce 분석 결과로 정리했습니다.",
    supportingLine: "구매 패턴 | 고객 세그먼트를 함께 파악할 수 있도록\n분석한 UK 온라인 리테일 분석",
    review: {
      decisionQuestion: "어떤 고객군을 유지·재활성화 우선순위로 볼 것인가?",
      myRole: "RFM 해석 구조화, 통계 검정 정리, 캠페인 시나리오 번역",
      evidence: "Top 20% = 73.5% Sales / 이탈위험 고객군 84.2% MoM Drop",
      deliverable: "RFM 세그먼트 분석과 매출·재구매 인사이트",
      hiringSignal: "거래 데이터를 CRM/커머스 액션 언어로 번역 가능",
    },
    decisionMoment: {
      originalQuestion: "고객 세그먼트는 어떻게 나뉘는가?",
      reframedQuestion: "어떤 고객군을 유지·재활성화 우선순위로 볼 것인가?",
      keyEvidence: "Top 20% = 73.5% Sales, 이탈위험 고객군 84.2% MoM Drop",
      finalDeliverable: "RFM 세그먼트 분석과 매출·재구매 인사이트",
      proves: "고객 세그먼트를 액션과 KPI 언어로 번역하는 역량",
    },
    cardBrief: {
      problem:
        "거래 데이터는 많지만 고객 구매 패턴과 세그먼트 차이를 매출 및 재구매 관점으로 함께 읽기 어려움.",
      method:
        "거래 이력에서 RFM과 구매 패턴을 정리하고, 세그먼트별 차이를 비교해 이커머스 관점 인사이트로 연결함.",
      output: [
        "고객 세그먼트 분석",
        "RFM / 구매 패턴 분석",
        "매출 / 재구매 관점 인사이트",
        "매출 / 고객 유지 인사이트",
      ],
    },
    metrics: [
      { label: "Revenue Share", value: "Top 20% = 73.5% Sales" },
      { label: "Risk Signal", value: "84.2% MoM Drop" },
    ],
    evidencePoints: [
      {
        label: "데이터셋",
        value: "UK Online Retail 공개 거래 데이터와 고객 구매 이력 기반",
      },
      {
        label: "분석 단위",
        value: "고객 단위 RFM 세그먼트와 월별 매출·재구매 패턴 비교",
      },
      {
        label: "매출 핵심 지표",
        value: "상위 20% 고객이 전체 매출의 73.5% 차지",
      },
      {
        label: "이탈 징후",
        value: "이탈위험 고객군 11월 매출이 10월 대비 84.2% 감소",
      },
      {
        label: "공개 검증",
        value: "artifact checker + public smoke tests가 GitHub Actions에서 통과",
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
        "공개 데이터셋 기반이라 최근 운영 환경에 그대로 일반화하기는 어렵습니다.",
        "실제 운영 고객 식별 정보와 연결한 캠페인 검증은 후속 보완이 필요합니다.",
        "재구매 관점 인사이트의 후속 검증은 추가 분석이 필요합니다.",
      ],
      linkNote: "GitHub README와 저장소 문서에서 분석 흐름과 실행 가이드를 확인할 수 있습니다.",
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
        type: "secondary",
      },
    ],
    sortOrder: 5,
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
    id: "starbucks-promotion-analysis",
    slug: "starbucks-promotion-analysis",
    title: "Starbucks Promotion Analysis",
    status: "featured",
    category: "대표 프로젝트",
    primaryDomain: "마케팅",
    summary: "고객, 오퍼, 채널 데이터를 기반으로\n세그먼트와 오퍼 반응의 상관관계를 분석한\nCRM / 마케팅 분석 프로젝트입니다.",
    period: "2026",
    format: "개인 프로젝트",
    domains: ["CRM", "Marketing Analytics", "고객 반응 분석", "오퍼/채널 성과 분석"],
    role: ["이벤트 구조 재설계", "추천 후보 해석", "Tableau 결과 정리"],
    filterTools: ["Python", "SQL"],
    cardTools: ["Python", "SQL", "Tableau"],
    stack: ["Python", "SQL", "Tableau"],
    problemTypes: ["고객 반응 분석", "오퍼/채널 성과 분석", "마케팅 액션 인사이트"],
    coreTags: ["CRM", "Offer Response", "Customer Segmentation", "Marketing Analytics", "Tableau"],
    badges: ["CRM", "Marketing Analytics", "Model Metrics", "CI Verified"],
    context:
      "고객, 오퍼, 채널 데이터가 분리된 상태에서는 어떤 고객군이 어떤 제안에 반응하는지와 오퍼/채널 성과 차이를 함께 읽기 어렵습니다.",
    outcome:
      "고객, 오퍼, 채널 데이터를 재구성해 고객 반응과 오퍼/채널 성과를 함께 해석할 수 있는 CRM / 마케팅 분석 결과로 정리했습니다.",
    supportingLine: "고객군별 오퍼 반응과 채널 성과를\n함께 도출한 CRM 분석",
    review: {
      decisionQuestion: "어떤 고객군이 어떤 오퍼와 채널에 반응하는가?",
      myRole: "이벤트 구조 재설계, 추천 후보 해석, Tableau 결과 정리",
      evidence: "AUC 0.8147 / Recall 0.8712 / Precision 0.6830 / F1 0.7657",
      deliverable: "CRM 반응 분석과 Tableau 결과물",
      hiringSignal: "고객·오퍼·채널 데이터를 액션 언어로 번역 가능",
    },
    decisionMoment: {
      originalQuestion: "어떤 오퍼가 성과가 좋은가?",
      reframedQuestion: "어떤 고객군이 어떤 오퍼와 채널에 반응하는가?",
      keyEvidence: "AUC 0.8147, Recall 0.8712, Precision 0.6830, F1 0.7657",
      finalDeliverable: "CRM 반응 분석과 Tableau 결과물",
      proves: "고객·오퍼·채널 구조를 액션 가능한 분석으로 바꾸는 역량",
    },
    cardBrief: {
      problem:
        "고객, 오퍼, 채널 데이터가 분리되어 있어 어떤 고객군이 어떤 제안에 반응하는지 바로 파악하기 어려움.",
      method:
        "고객-오퍼-채널 구조로 데이터를 재편하고, 반응 패턴과 성과 차이를 Tableau까지 연결해 해석함.",
      output: [
        "고객·오퍼·채널 데이터 통합",
        "고객 반응 / 오퍼 성과 분석",
        "Tableau 대시보드",
        "마케팅 액션 인사이트",
      ],
    },
    metrics: [
      { label: "Model Quality", value: "AUC 0.8147" },
      { label: "Response Recall", value: "Recall 0.8712" },
      { label: "Recommendation Rank", value: "NDCG@5 1.0000" },
    ],
    evidencePoints: [
      {
        label: "모델 성능",
        value: "AUC 0.8147 / Recall 0.8712 / Precision 0.6830 / F1 0.7657",
      },
      {
        label: "추천 검증",
        value: "Recall@5% 0.0855 / Recall@10% 0.1642 / NDCG@5 1.0000",
      },
      {
        label: "검증 설계",
        value: "시간 기반 train/test split으로 미래 정보 누수 가능성을 줄임",
      },
      {
        label: "공개 검증",
        value: "artifact checker + public smoke tests가 GitHub Actions에서 통과",
      },
    ],
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
        "공개 저장소 기준으로는 데이터 커버리지보다 분석 구조와 대시보드 흐름 중심으로 확인할 수 있습니다.",
        "실제 운영 캠페인 성과와 연결한 후속 검증은 포함되지 않았습니다.",
        "오퍼별 장기 유지 효과 비교는 추가 분석이 필요합니다.",
      ],
      linkNote: "GitHub README와 대시보드 산출물 기준으로 전체 분석 흐름을 확인할 수 있습니다.",
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
        type: "secondary",
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
    id: "nba-game-player-analysis",
    slug: "nba-game-player-analysis",
    title: "NBA Game & Player Analysis",
    status: "supporting",
    category: "서브 프로젝트",
    primaryDomain: "스포츠 분석",
    summary: "승리 요인, 선수 성과, 플레이 스타일을\n하나의 분석 파이프라인으로 연결한\n스포츠 데이터 분석입니다.",
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
    supportingLine: "승리 요인과 선수 성과를 하나의 파이프라인으로 묶은\n스포츠 분석",
    review: {
      decisionQuestion: "승리 요인과 선수 성과를 한 흐름에서 어떻게 해석할 것인가?",
      myRole: "경기·선수 데이터 통합, 모델링, 결과 해석",
      evidence: "EDA, 통계 검정, 모델링, 군집화를 하나의 파이프라인으로 구성",
      deliverable: "경기/선수 분석 파이프라인과 시각화 결과",
      hiringSignal: "분리된 데이터를 재현 가능한 분석 흐름으로 통합 가능",
    },
    decisionMoment: {
      originalQuestion: "승리 팀은 어떤 특징이 있는가?",
      reframedQuestion: "승리 요인과 선수 성과를 한 분석 흐름에서 어떻게 설명할 것인가?",
      keyEvidence: "경기·선수 데이터 통합, EDA, 통계 검정, 모델링, 군집화",
      finalDeliverable: "경기/선수 분석 파이프라인과 시각화 결과",
      proves: "분리된 데이터 소스를 하나의 분석 흐름으로 연결하는 역량",
    },
    cardBrief: {
      problem:
        "승리 요인, 선수 성과, 팀 특성이 각각 분리되어 있어 경기 해석이 한 흐름으로 읽히지 않음.",
      method:
        "경기·선수 데이터를 통합하고 EDA, 모델링, 지표 비교를 연결해 팀과 선수 특성을 함께 해석함.",
      output: [
        "승리 요인 분석",
        "모델링 / 지표 비교",
        "선수 / 팀 특성 분석",
        "시각화 결과",
      ],
    },
    metrics: [],
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
        "공개 저장소 기준으로는 시즌 범위 표기보다 분석 파이프라인과 모델 비교 구조 중심으로 확인할 수 있습니다.",
        "실시간 경기 데이터와 연결한 검증은 포함되지 않았습니다.",
        "모델 일반화 성능은 후속 비교 실험이 더 필요합니다.",
      ],
      linkNote: "GitHub README와 분석 리포트 문서에서 전체 흐름을 확인할 수 있습니다.",
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
        type: "secondary",
      },
    ],
    sortOrder: 7,
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
  {
    id: "shopeasy",
    slug: "shopeasy",
    title: "ShopEasy",
    status: "supporting",
    category: "서브 프로젝트",
    primaryDomain: "커머스",
    summary: "2025년 3분기 주문 감소 원인을\n고객·카테고리·세션 흐름으로 분해하고\nA/B 테스트까지 제안한 서비스 분석 프로젝트입니다.",
    period: "2026",
    format: "개인 프로젝트",
    domains: ["커머스", "전환율 분석", "서비스 지표", "웹 대시보드"],
    role: ["데이터 설계", "전환 흐름 분석", "웹 대시보드 구현", "A/B 테스트 설계"],
    filterTools: ["Python", "Web"],
    cardTools: ["Python", "Web"],
    stack: ["Python", "Pandas", "HTML/CSS/JS"],
    problemTypes: ["전환율 분석", "서비스 진단", "실험 설계"],
    coreTags: ["주문 감소", "모바일 전환", "전자기기 완료율", "A/B Test"],
    badges: ["Commerce", "Dashboard", "Experiment", "Reproducible Data"],
    context:
      "주문 감소를 단순 유입 하락으로만 보면 어떤 구간을 먼저 고쳐야 하는지 알기 어렵습니다. 고객 세그먼트, 카테고리, 진입 페이지, 디바이스, 이탈 페이지를 함께 읽어 실제 개선 실험까지 연결하는 구조가 필요했습니다.",
    outcome:
      "주문 감소 문제를 카테고리, 진입 흐름, 디바이스, 이탈 페이지 기준으로 분해하고, 모바일 전자기기 구매 완료율 개선 A/B 테스트로 이어지는 웹 기반 서비스 지표 대시보드로 정리했습니다.",
    supportingLine: "주문 감소 원인을 전환 흐름으로 분해하고\n실험 제안까지 연결한 커머스 대시보드",
    review: {
      decisionQuestion: "주문 감소에서 어떤 전환 병목을 먼저 개선해야 하는가?",
      myRole: "데이터 설계, 전환 흐름 분석, 웹 대시보드 구현, A/B 테스트 설계",
      evidence: "주문 1,000건 / 사용자 500명 / 세션 2,000건 / Mobile CVR 6.38%",
      deliverable: "웹 기반 통합 대시보드와 A/B 테스트 설계안",
      hiringSignal: "서비스 지표를 개선 실험과 KPI로 연결 가능",
    },
    decisionMoment: {
      originalQuestion: "왜 주문이 줄었는가?",
      reframedQuestion: "어떤 전환 병목을 먼저 검증하고 개선해야 하는가?",
      keyEvidence: "주문 1,000건, 사용자 500명, 세션 2,000건, Mobile CVR 6.38%",
      finalDeliverable: "웹 기반 통합 대시보드와 A/B 테스트 설계안",
      proves: "서비스 지표를 진단하고 실험 설계로 연결하는 역량",
    },
    cardBrief: {
      problem:
        "주문 감소가 유입 하락인지, 전환 흐름 약화인지, 특정 카테고리·디바이스 문제인지 한 번에 설명하기 어려웠음.",
      method:
        "주문·세션·사용자 데이터를 묶어 카테고리, 진입 페이지, 디바이스, 이탈 페이지 관점으로 전환 병목을 재구성함.",
      output: [
        "웹 기반 통합 대시보드",
        "주문 / 전환 / 이탈 진단",
        "카테고리·디바이스 인사이트",
        "A/B 테스트 설계안",
      ],
    },
    metrics: [
      { label: "Orders", value: "1,000 Orders" },
      { label: "Mobile CVR", value: "6.38% Mobile CVR" },
      { label: "Category Gap", value: "52.34% Electronics" },
    ],
    evidencePoints: [
      {
        label: "Coverage",
        value: "주문 1,000건 / 사용자 500명 / 세션 2,000건 기준 분석",
      },
      {
        label: "Monthly Drop",
        value: "7월 420건 → 9월 240건, 완료 주문 305건 → 159건",
      },
      {
        label: "Conversion Gap",
        value: "모바일 전환율 6.38% / 전자기기 완료율 52.34%",
      },
      {
        label: "Experiment Output",
        value: "모바일 전자기기 상품상세·장바구니 개선 A/B 테스트 제안",
      },
      {
        label: "Public Verification",
        value: "seed 고정 데이터 생성기와 CSV schema/row count/핵심 지표 검증 추가",
      },
    ],
    detailBrief: {
      problem: {
        what:
          "최근 3개월 주문 감소가 단순 유입 감소인지, 특정 세그먼트·카테고리·디바이스 병목인지 분리해서 읽기 어려웠습니다.",
        why:
          "커머스 문제는 감소 사실보다 어느 흐름을 먼저 개선해야 하는지까지 연결되어야 실제 액션과 실험으로 이어지기 때문입니다.",
      },
      dataMethod: {
        dataTypes: ["주문 데이터", "사용자 데이터", "세션 데이터"],
        process: [
          "월별 주문 수와 완료 주문 수 흐름 정리",
          "카테고리·진입 페이지·디바이스·이탈 페이지 기준으로 전환 병목 분해",
          "분석 결과를 웹 대시보드와 A/B 테스트 설계안으로 연결",
        ],
        metrics: ["주문 완료율", "진입 페이지별 구매 전환율", "디바이스별 구매 전환율", "연령대별 이탈률"],
      },
      limitations: [
        "더미 데이터 기반이라 실제 서비스 로그를 완전히 대체하지는 못합니다.",
        "세션 단위 데이터라 퍼널 전체를 이벤트 수준으로 추적하는 데 한계가 있습니다.",
        "A/B 테스트는 제안 단계이며 실제 유의성 검정은 포함되지 않았습니다.",
      ],
      linkNote: "GitHub README와 배포 대시보드에서 주문 감소 진단 흐름과 실험 제안을 함께 확인할 수 있습니다.",
    },
    focusPoints: [
      "주문 감소 문제를 고객, 카테고리, 진입 흐름, 디바이스로 나눠 병목을 구조화",
      "분석 결과를 차트 나열이 아니라 문제 → 근거 → 해석 → 액션 순서의 웹 대시보드로 재구성",
      "모바일 전자기기 구매 완료율 개선이라는 실험 가설과 KPI까지 연결",
    ],
    links: [
      {
        label: "서비스 보기",
        href: "https://dffxonnb-cyber.github.io/ShopEasy/",
        type: "secondary",
      },
      {
        label: "GitHub 저장소",
        href: "https://github.com/dffxonnb-cyber/ShopEasy",
        type: "secondary",
      },
    ],
    sortOrder: 6,
    caseStudySlugs: ["turn-analysis-into-a-decision-tool"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "ShopEasy는 주문 감소를 단순히 매출 하락으로 요약하지 않고, 구매 완료까지 이어지는 전환 흐름 전체를 다시 읽기 위해 만든 서비스 분석 프로젝트입니다.",
          "월별 주문 추이, 카테고리별 완료율, 진입 페이지, 디바이스, 이탈 페이지를 하나의 대시보드 흐름으로 연결해 어떤 병목을 먼저 개선해야 하는지 보이도록 구성했습니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "주문·사용자·세션 데이터를 함께 사용해 주문 감소 원인을 고객군, 카테고리, 탐색 흐름, 디바이스 관점으로 분해했습니다.",
          "마지막에는 결과를 모바일 전자기기 상품상세/장바구니 개선 A/B 테스트 제안으로 연결해, 분석이 다음 액션으로 이어지도록 정리했습니다.",
        ],
      },
      {
        title: "포트폴리오 관점의 의미",
        paragraphs: [
          "이 프로젝트는 분석 결과를 설명에서 멈추지 않고 웹 대시보드와 실험 가설까지 연결해, 서비스 지표 해석을 실제 개선 제안으로 번역하는 방식을 보여줍니다.",
        ],
      },
    ],
  },
];

export const featuredProjects = projects
  .filter((project) => project.status === "featured")
  .sort((left, right) => left.sortOrder - right.sortOrder);
