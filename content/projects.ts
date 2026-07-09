import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "lh-traffic-safety-analysis",
    slug: "lh-traffic-safety-analysis",
    title: "LH Traffic Safety · 고위험 격자 신호 분석",
    status: "featured",
    category: "대표 프로젝트",
    primaryDomain: "공공데이터",
    summary:
      "100m 격자 단위로 사고·교통·공간 위험 신호를 학습하고\nLORO 검증과 public-safe evidence 경계를 거쳐 하남교산 현장 검토 우선순위로 번역한\n공간 데이터 분석입니다.",
    period: "2026",
    format: "개인 프로젝트",
    domains: ["공공데이터", "도시", "교통", "공간 데이터 분석"],
    role: ["100m 공간 위험 신호 설계", "LORO 전이 검증", "현장 검토 우선순위 도출"],
    filterTools: ["Python", "GIS"],
    cardTools: ["Python", "GeoPandas", "scikit-learn", "GIS"],
    stack: ["Python", "pandas", "GeoPandas", "scikit-learn", "Jupyter", "Streamlit/pydeck"],
    problemTypes: ["공간 위험 신호"],
    coreTags: ["100m Grid", "Spatial RF", "LORO", "Priority Ranking", "Decision Support"],
    badges: ["Featured", "Spatial Signal", "Decision Support"],
    context:
      "사고 이력이 부족한 신도시에서는 과거 사고 건수만으로 안전시설 우선순위를 정하기 어렵습니다. 행정구역 평균도 같은 지역 내부의 도로 구조와 통행 환경 차이를 가리기 때문에, 더 작은 공간 단위의 위험 신호와 검증 기준이 필요했습니다.",
    outcome:
      "4개 기존 시·구의 사고·교통·공간 데이터를 100m 격자로 통합하고, 공간 좌표 포함 Random Forest를 LORO로 검증했습니다. 검증된 위험 신호를 하남교산 770개 격자에 적용해 현장 검토 우선 후보로 정렬했습니다.",
    supportingLine: "100m 격자 위험 신호를 검증 가능한 현장 검토 우선순위로 바꾼 공간 분석",
    review: {
      decisionQuestion: "사고 이력이 부족한 신도시에서 어떤 100m 격자를 먼저 현장 검토해야 하는가?",
      myRole: "100m 격자 설계, 사고·교통·공간 변수 통합, 공간 좌표 포함 Random Forest, LORO 검증, Top-k 우선순위 도출",
      evidence: "99,323 training grids → 770 target grids · LORO AUC 0.8604 · Top-10% Lift 4.39x · public-safe Top-20 review notes",
      deliverable: "고위험 100m 격자 순위와 공개 검증 근거를 연결한 현장 검토 우선순위 자료",
      hiringSignal: "공간 모델 결과를 성능 지표, public-safe evidence boundary, 현장 검토 우선순위 언어로 번역할 수 있음",
    },
    decisionMoment: {
      originalQuestion: "사고가 많은 곳은 어디인가?",
      reframedQuestion: "사고 이력이 부족한 하남교산에서 먼저 검토할 100m 위험 격자는 어디인가?",
      keyEvidence: "100m grid · 99,323 training grids · 770 target grids · LORO AUC 0.8604 · Top-10% Lift 4.39x",
      finalDeliverable: "고위험 격자 순위, 100m 위험 지도, public-safe Top-20 검토표, evidence audit",
      proves: "공간 위험 신호를 검증 지표와 현장 검토 단위로 전환하는 역량",
    },
    cardBrief: {
      problem:
        "사고 이력이 적은 신도시는 과거 사고 건수와 행정구역 평균만으로 내부의 세부 위험 구간을 먼저 고르기 어려움.",
      method:
        "사고·교통·공간 변수를 100m 격자로 통합하고, 공간 좌표 포함 Random Forest를 LORO로 검증해 지역 전이 가능성을 점검함.",
      output: [
        "하남교산 고위험 100m 격자 순위",
        "안전시설 현장 검토 우선 후보",
        "public-safe Top-20 review notes",
        "100m 위험 지도와 evidence audit",
      ],
    },
    metrics: [
      { label: "Spatial Unit", value: "100m Grid" },
      { label: "Training Scope", value: "99,323 Grids" },
      { label: "LORO Validation", value: "AUC 0.8604" },
    ],
    evidencePoints: [
      {
        label: "데이터 범위",
        value: "4개 기존 시·구 99,323개 학습 격자 → 하남교산 770개 대상 격자",
      },
      {
        label: "공간 단위",
        value: "행정구역 평균 대신 100m × 100m 격자를 위험도·후보 비교·현장 검토의 공통 단위로 사용",
      },
      {
        label: "전이 검증",
        value: "Mean LORO AUC 0.8604 · Worst holdout AUC 0.7979 · Top-10% Lift 4.39x",
      },
      {
        label: "후보 안정성",
        value: "Monte Carlo mean Jaccard 0.503을 Top-20 후보군 중첩의 참고값으로 사용",
      },
      {
        label: "공개 검토표",
        value: "public_top20_priority.csv에 public_review_note와 claim_boundary를 추가해 공개 가능한 검토 언어로 정리",
      },
      {
        label: "공개 경계",
        value: "시설 패키지·추천 사유·Dashboard URL·현장 검증은 evidence audit에서 별도 경계로 관리",
      },
    ],
    signalCaseStudy: {
      signalType: "공간 위험 신호",
      title: "100m 격자 위험 신호를 현장 검토 우선순위로 바꾸기",
      thesis:
        "행정구역 평균에 묻히는 세부 위험 차이를 100m 격자로 읽고, 지역 전이 검증을 거쳐 하남교산 안전시설 현장 검토 후보로 정렬한 공간 의사결정 사례입니다.",
      chips: ["100m Grid", "99,323 Training Grids", "770 Target Grids", "Spatial RF", "LORO", "AUC 0.8604", "Lift 4.39x", "Priority Ranking"],
      flow: ["4개 기존 시·구", "100m grid", "사고·교통·공간 변수", "Spatial RF", "LORO validation", "risk score", "Top-k ranking", "inspection candidate"],
      evidenceTitle: "공개 가능한 공간·검증 근거",
      evidenceDescription:
        "비공개 원천 데이터 없이 확인 가능한 범위·검증 요약, 100m 위험 지도, public-safe Top-20 검토표와 evidence audit을 함께 제시합니다.",
      evidence: [
        {
          src: "/evidence/lh-performance-summary.svg",
          alt: "LH 교통안전 프로젝트의 100m 격자, 99,323개 학습 격자, 770개 대상 격자, LORO AUC 0.8604, Top-10% Lift 4.39배를 요약한 공개 성능 카드",
          caption: "Performance summary · 범위와 검증 지표",
          note: "프로젝트의 공간 단위, 데이터 범위, 핵심 성능을 한 화면에서 확인합니다.",
          width: 1440,
          height: 900,
        },
        {
          src: "/evidence/lh-validation-summary.svg",
          alt: "Leave-One-Region-Out 검증 흐름과 AUC, Lift, Jaccard 지표의 의미를 설명하는 LH 교통안전 검증 요약",
          caption: "Validation summary · 지역 전이 검증",
          note: "공개 요약 지표를 위험 신호 품질로 해석하며 fold별 원본은 공개되지 않았습니다.",
          width: 1440,
          height: 900,
        },
        {
          src: "/evidence/lh-score-comparison-note.svg",
          alt: "Legacy GWRF 정규화 위험도와 09번 시설 입지 선정 정규화 점수 사이의 낮은 선형 설명력 R² 0.006과 해석 원칙",
          caption: "Score comparison · R²=0.006 진단",
          note: "R²는 순위상관이 아니며, 서로 다른 위험 개념을 측정할 가능성을 보여주는 진단 자료입니다.",
          width: 1440,
          height: 900,
        },
        {
          src: "/evidence/lh-four-city-risk-overview.png",
          alt: "판교, 동탄, 송파, 미사의 100m 격자별 정규화 위험도를 동일한 위험 구간 기준으로 비교한 지도",
          caption: "100m risk map · 4개 기존 지역 비교",
          note: "행정구역 평균이 아닌 격자 수준에서 지역 내부 위험 차이를 보여줍니다.",
          width: 2705,
          height: 2559,
        },
        {
          src: "/evidence/lh-public-top20-preview.svg",
          alt: "공개 시나리오 CSV에서 확인 가능한 하남교산 상위 20개 격자 순위와 정규화 위험도 표",
          caption: "Public Top-20 · 현장 검토 우선 후보",
          note: "공개 Top-20에는 review note와 claim boundary를 추가했고, 시설 패키지·추천 사유 원본은 needs confirmation으로 유지합니다.",
          width: 1440,
          height: 1280,
        },
      ],
      sections: [
        {
          label: "01 Problem",
          title: "저이력 신도시의 우선순위 문제",
          description:
            "사고 기록이 적다는 사실만으로 안전하다고 판단할 수 없고, 시·구 평균은 내부의 세부 위험 차이를 가립니다.",
          points: ["사고 건수 중심 판단의 한계", "결과는 설치 결정이 아닌 현장 검토 신호"],
        },
        {
          label: "02 Spatial Unit",
          title: "100m 격자를 공통 의사결정 단위로 사용",
          description:
            "위험 산정, 후보 비교, 지도 표현, 시나리오 검토를 같은 100m × 100m 격자 단위로 연결했습니다.",
          points: ["99,323개 학습 격자", "하남교산 770개 대상 격자"],
        },
        {
          label: "03 Modeling Logic",
          title: "공간 좌표 포함 Random Forest",
          description:
            "사고·교통·공간 변수와 격자 중심 좌표를 결합해 위치별 위험 패턴을 학습했습니다.",
          points: ["전용 GWRF로 과장하지 않음", "legacy GRF/GWRF 파일명과 실제 구현을 분리"],
        },
        {
          label: "04 Validation",
          title: "지역을 바꿔도 유지되는지 검증",
          description:
            "한 지역씩 제외하는 LORO로 특정 지역에만 맞춘 위험 신호인지 점검했습니다.",
          points: ["Mean AUC 0.8604 · Worst 0.7979", "Top-10% Lift 4.39x"],
        },
        {
          label: "05 Risk Ranking",
          title: "위험 점수를 Top-k 검토 후보로 변환",
          description:
            "하남교산 격자를 위험도 순으로 정렬하고 공개 가능한 Top-20 검토표를 별도 증거로 제공합니다.",
          points: ["공개 표는 순위·정규화 위험도·review note·claim boundary 포함", "비공개 결과는 needs confirmation"],
        },
        {
          label: "06 Decision Use",
          title: "모델 결과를 현장 검토 언어로 번역",
          description:
            "위험 신호를 제한된 조사·예산 자원을 어디부터 투입할지 검토하는 우선순위로 해석합니다.",
          points: ["시설 패키지·추천 사유 생성 로직", "실제 결정에는 현장 검증 필요"],
        },
        {
          label: "07 Limitations",
          title: "시나리오와 인과효과를 구분",
          description:
            "Top-k는 현장 점검 우선순위 제안이며 실제 현장 검증이나 사고 감소 효과를 증명하지 않습니다.",
          points: ["fold별 LORO 원본·Dashboard URL은 needs confirmation", "R²=0.006은 점수 체계 차이 진단 자료"],
        },
        {
          label: "08 Evidence",
          title: "공개 가능한 증거만 분리",
          description:
            "비공개 원천 데이터 대신 성능 카드, 검증 요약, 위험 지도, 공개 Top-20 표로 검토 경로를 제공합니다.",
          points: ["민감 좌표·원천 데이터 미노출", "공개 저장소 기준 재생성 스크립트 제공"],
        },
      ],
    },
    detailBrief: {
      problem: {
        what:
          "사고 빈도와 행정구역 평균만으로는 사고 이력이 부족한 신도시 내부의 세부 위험 구간을 먼저 검토하기 어렵습니다.",
        why:
          "안전시설 검토는 실제 현장 단위에 가까운 공간 신호와 지역이 바뀌어도 유지되는지에 대한 검증 근거가 필요하기 때문입니다.",
      },
      dataMethod: {
        dataTypes: ["4개 기존 시·구 사고·교통·공간 데이터", "100m 격자와 중심 좌표", "하남교산 대상 격자"],
        process: [
          "사고·교통·공간 변수를 100m 격자 단위로 통합",
          "공간 좌표 포함 Random Forest로 사고 발생 위험 신호 학습",
          "LORO로 지역 전이 구분력과 상위 위험 후보 집중도 검증",
          "하남교산 770개 격자를 위험도 순으로 정렬해 현장 검토 후보 도출",
          "공개 성능 카드·검증 요약·위험 지도·Top-20 검토표·evidence audit로 증거 경로 구성",
        ],
        metrics: ["Mean LORO AUC 0.8604", "Top-10% Lift 4.39x", "Worst holdout AUC 0.7979", "Monte Carlo mean Jaccard 0.503"],
      },
      limitations: [
        "적용 전후 시나리오는 실제 사고 감소 효과나 인과효과를 증명하지 않습니다.",
        "모델 출력은 시설 설치 결정이 아니라 현장 점검 우선순위를 위한 위험 신호입니다.",
        "실제 시설 결정에는 현장 조사, 예산, 법규, 주민 수요, 행정 절차가 필요합니다.",
        "원본 공모전 데이터와 시설 패키지·추천 사유 최종 결과는 공개되지 않으며, 공개 Top-20은 review note와 claim boundary 중심의 검토표로 제한됩니다.",
        "LORO 공개 근거는 요약 지표이며 fold별 원본 결과와 검증 가능한 공개 Dashboard URL은 needs confirmation입니다.",
        "실제 현장 점검 결과와 사고 감소 사후 검증 결과는 없습니다.",
        "공간 전이는 지역별 도로 구조와 생활권 차이의 영향을 받을 수 있습니다.",
        "R²=0.006은 legacy GWRF 정규화 위험도와 09번 시설 입지 선정 정규화 점수 사이의 선형 설명력이 매우 낮음을 보여줍니다. 순위상관이나 성능 증거로 사용하지 않습니다.",
      ],
      linkNote: "GitHub README와 portfolio case study 문서에서 공개 증거 생성 방식, 검증 요약, Top-20 공개 경계를 확인할 수 있습니다.",
    },
    focusPoints: [
      "행정구역 평균 대신 100m 격자를 위험 산정과 현장 검토의 공통 단위로 설계",
      "공간 좌표 포함 Random Forest를 LORO로 검증해 지역 전이 가능성을 점검",
      "모델 점수를 사고 감소 효과가 아니라 현장 검토 우선순위 신호로 번역",
    ],
    links: [
      {
        label: "GitHub 저장소",
        href: "https://github.com/dffxonnb-cyber/LH-traffic-safety-analysis",
        type: "secondary",
      },
    ],
    sortOrder: 4,
    caseStudySlugs: ["risk-signals-before-volume", "turn-analysis-into-a-decision-tool", "segmenting-for-business-meaning"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "이 프로젝트는 사고 이력이 부족한 하남교산에서 어떤 100m 격자를 먼저 현장 점검해야 하는지 설명하는 공간 위험 신호 분석입니다.",
          "4개 기존 시·구의 99,323개 학습 격자에서 검증한 위험 패턴을 770개 대상 격자에 적용했습니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "사고·교통·공간 변수와 격자 중심 좌표를 Random Forest에 포함하고, 한 지역씩 제외하는 LORO로 전이 가능성을 점검했습니다.",
          "위험 점수를 Top-k 현장 검토 후보로 바꾸고 공개 가능한 범위·검증·지도·순위 표를 증거로 연결했습니다.",
        ],
      },
      {
        title: "포트폴리오 관점의 의미",
        paragraphs: [
          "도메인은 공공 안전이지만, 실질적으로는 데이터가 부족한 환경에서 검증 가능한 위험 신호를 만들고 제한된 현장 조사 자원의 우선순위를 설계하는 문제를 다뤘습니다.",
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
    summary: "상가 후보를 고르기 전에 먼저 멈춰야 할\n가격 부담·거래 둔화·과밀 신호와 재확인 항목을\nreview memo로 정리하는 상권 리스크 UI입니다.",
    period: "2026",
    format: "개인 프로젝트",
    domains: ["상권 분석", "공공데이터", "리스크 모델링", "웹 구현"],
    role: ["문제 정의", "리스크 기준 설계", "서비스 구현"],
    filterTools: ["Python", "SQL", "Web"],
    cardTools: ["Python", "Pandas", "Static JS", "GitHub Pages"],
    stack: ["Python", "pandas", "requests", "SQL review queries", "Static HTML/CSS/JS", "Streamlit prototype", "GitHub Pages", "GitHub Actions", "Playwright checks"],
    problemTypes: ["의사결정 도구"],
    coreTags: ["리스크 사유", "대체 후보", "Decision Artifact", "공공데이터"],
    badges: ["Featured", "End-to-End", "Public-facing", "Decision Artifact"],
    context:
      "상권 데이터는 많지만, 매입 전 검토 단계에서 어떤 신호를 보류 사유와 재확인 항목으로 읽어야 하는지는 바로 보이지 않습니다. Redveil은 후보를 고르기 전에 가격 부담, 거래 둔화, 과밀 신호, 대체 후보 비교, professional review handoff를 먼저 확인하는 pause-first review 흐름으로 설계했습니다.",
    outcome:
      "서울 25개 구 상권·거래 데이터를 정리해 리스크 점수, 보류 사유, 대체 후보 비교, Hold Memo, Comparison Memo, Professional Review Checklist를 검토할 수 있는 공개 웹 UI로 구현했습니다.",
    supportingLine: "보류 근거, 대체 후보, review memo를 함께 보여주는 상권 리스크 검토 프로토타입",
    review: {
      decisionQuestion: "상가 후보를 고르기 전에 어떤 보류 신호를 먼저 확인해야 하는가?",
      myRole: "리스크 기준 설계, 거래/상권 데이터 구조화, public-safe payload 정리, 정적 웹 UI 구현",
      evidence: "서울 25개 구 / 행정동 427개 / 거래 12,074건 / 취약 상권 1,520개 / GitHub Pages production evidence / V2 decision artifact evidence",
      deliverable: "보류 사유, 대체 후보 비교, Hold Memo, Comparison Memo, Professional Review Checklist를 연결한 공개 상권 리스크 검토 UI",
      hiringSignal: "분석 결과를 추천이 아니라 보류 기준, comparison baseline, re-check items, professional review handoff로 번역할 수 있음",
},
    decisionMoment: {
      originalQuestion: "어떤 상권이 좋아 보이는가?",
      reframedQuestion: "상가 후보를 고르기 전에 먼저 멈춰야 할 리스크 신호는 무엇인가?",
      keyEvidence: "서울 25개 구, 행정동 427개, 취약 상권 1,520개, 거래 12,074건",
      finalDeliverable: "보류 사유, 리스크 축, 대체 후보 비교, copy/export 가능한 decision artifact를 연결한 공개 웹 UI",
      proves: "상권 데이터를 추천 결과가 아니라 검토 기준, 보류 신호, professional review handoff로 번역하는 역량",
},
    cardBrief: {
      problem:
        "상가 후보를 고르기 전에 가격 부담, 거래 둔화, 과밀 신호를 보류 사유와 re-check item으로 먼저 검토할 필요가 있었음.",
      method:
        "서울 구·행정동·거래 데이터를 정리해 리스크 축을 만들고, 보류 사유·대체 후보·Hold Memo·Comparison Memo·Professional Review Checklist를 함께 읽는 정적 웹 UI로 구현함.",
      output: [
        "상권 리스크 점수",
        "보류 사유 요약",
        "대체 후보 비교와 comparison baseline",
        "Hold Memo / Comparison Memo / Professional Review Checklist",
  ],
},
    metrics: [
      { label: "Scope", value: "25 Seoul Districts" },
      { label: "Transactions", value: "12,074 Transactions" },
      { label: "Admin Units", value: "427 Dongs" },
    ],
    evidencePoints: [
      {
        label: "Coverage",
        value: "서울 25개 구, 행정동 427개, 취약 상권 1,520개 비교",
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
        value: "리스크 점수, 보류 사유, 대체 후보, Hold Memo, Comparison Memo를 GitHub Pages 정적 웹에서 바로 확인",
      },
      {
        label: "V2 Decision Artifact",
        value: "Hold Memo copy/export, Comparison Memo copy/export, Professional Review Checklist UI와 memo text 포함까지 검증",
      },
      {
        label: "Public Verification",
        value: "GitHub Pages 배포, public-safe payload, tests, smoke checks, Production evidence 확인",
      },
      {
        label: "QA Boundary",
        value: "portfolio prototype이며 투자 추천, buy/sell recommendation, 수익률 예측, 법률·세무·금융·중개·현장 전문 검토 대체를 주장하지 않음",
      },
    ],
    signalCaseStudy: {
      signalType: "매입 전 보류 신호",
      title: "추천보다 먼저 멈춰야 할 이유를 보여주는 구조",
      thesis:
        "서울 상가 후보를 추천하는 대신 가격 부담, 거래 둔화, 변동성, 상권 과밀을 같은 기준으로 비교해 추가 확인이 필요한 이유를 먼저 보여주는 리스크 스크리닝 프로토타입입니다.",
      chips: ["Pause-first", "25 Districts", "12,074 Transactions", "Decision Artifact", "Professional Handoff", "GitHub Pages"],
      flow: ["Public data", "Risk score", "Pause reasons", "Alternative comparison", "Hold Memo", "Comparison Memo", "Professional Review Checklist"],
      evidenceTitle: "Production 검토 화면",
      evidenceDescription: "Primary GitHub Pages의 홈 decision surface와 구별 리포트로 현재 공개 검토 흐름을 확인했습니다.",
      evidence: [
        {
          src: "/evidence/redveil-production-home.png",
          alt: "Redveil Production 홈에서 좋아 보이는 이유보다 멈춰야 할 신호를 먼저 보여주는 보류 우선 메시지와 서초구 예시 리스크 축을 보여주는 화면",
          caption: "Production 홈 · 보류 우선 decision surface",
          note: "투자 추천이 아니라 추가 확인이 필요한 리스크 신호라는 제품 경계를 첫 화면에서 보여줍니다.",
          width: 1264,
          height: 900,
        },
        {
          src: "/evidence/redveil-production-districts.png",
          alt: "Redveil Production 구별 리포트에서 서울 25개 구 리스크 지도, 서초구 점수, 보류 사유, 대체 후보, 데이터 신뢰도를 보여주는 화면",
          caption: "구별 리포트 · 리스크 축과 대체 후보 비교",
          note: "구 단위 스크리닝, 기반 표본, 저표본 주의, 후속 비교 흐름을 공개 화면에서 확인합니다.",
          width: 1264,
          height: 900,
        },
      ],
      sections: [
        {
          label: "01 Problem",
          title: "좋아 보이는 후보보다 반대 근거를 먼저 검토",
          description:
            "상권 자료가 많아도 실제 매입 전 검토에서는 무엇을 먼저 보류 사유로 읽어야 하는지 연결하기 어렵습니다.",
          points: ["buy/sell recommendation을 제공하지 않음", "보류 사유와 후속 확인 질문을 앞에 배치"],
        },
        {
          label: "02 Signal Logic",
          title: "리스크 축을 같은 판단 언어로 정리",
          description:
            "가격 부담, 거래 둔화, 변동성, 상권 과밀을 구 단위 비교와 매물 검토 흐름으로 연결합니다.",
          points: ["낮은 점수도 자동 추천으로 표현하지 않음", "저표본 구는 데이터 신뢰도 경고와 함께 해석"],
        },
        {
          label: "03 Evidence Boundary",
          title: "데이터 시점과 한계를 함께 공개",
          description:
            "현재 public payload의 기간, coverage, Deploy Pages 검증을 공개하되 실제 투자 성과나 인과적 결과는 주장하지 않습니다.",
          points: ["거래 2025.04~2026.03", "GitHub Pages를 primary live demo로 사용"],
        },
      ],
    },
    detailBrief: {
      problem: {
        what:
          "상권 분석 결과가 많아도 매입 전 검토 단계에서는 무엇을 먼저 보류해야 하는지 명확히 보여주는 구조가 부족했습니다.",
        why:
          "검토 도구는 리스크 사유와 대체 후보가 먼저 읽혀야 다음 확인 단계로 자연스럽게 연결될 수 있기 때문입니다.",
      },
      dataMethod: {
        dataTypes: ["공공데이터", "상권 / 부동산 데이터", "매물 비교용 후보 정보"],
        process: [
          "리스크 사유 중심으로 데이터 구조 재정리",
          "점수, 보류 이유, 대체 후보 비교 흐름 설계",
          "Hold Memo, Comparison Memo, Professional Review Checklist를 decision artifact로 연결",
          "웹 페이지에서 바로 검토 가능한 형태로 구현",
        ],
        metrics: ["상권 리스크 기준", "보류 사유 분류 기준", "대체 후보 비교 기준", "professional review handoff checklist"],
      },
      limitations: [
        "portfolio prototype이며 금융·법률·부동산 투자 자문이나 buy/sell recommendation이 아닙니다.",
        "공개 가능한 public-safe snapshot 기준으로 구성되어 raw data 전체 재빌드는 로컬 원천 데이터가 필요합니다.",
        "실시간 공실률, 유동 인구, 운영 매출, 임대차 조건, 권리금, 관리비, 법적 제약 같은 추가 변수는 아직 결합하지 않았습니다.",
        "실제 투자 결과와 연결한 장기 검증은 포함하지 않았습니다.",
        "V2 decision artifact layer는 Hold Memo, Comparison Memo, Professional Review Checklist를 추가했지만 기존 public V1 review flow를 대체하지 않습니다.",
      ],
      linkNote: "서비스 페이지와 GitHub 저장소 문서에서 서비스 흐름과 설명 자료를 함께 확인할 수 있습니다.",
    },
    focusPoints: [
      "상권 분석 결과를 추천 리스트가 아니라 보류 신호와 decision artifact 검토 UI로 구현",
      "리스크 점수보다 보류 사유, 대체 후보, 재확인 항목이 먼저 읽히는 정보 구조 설계",
      "Hold Memo, Comparison Memo, Professional Review Checklist를 professional review handoff로 연결",
      "데이터 수집, 가공, 점수 계산, public-safe payload, GitHub Pages 배포까지 end-to-end로 연결",
    ],
    links: [
      {
        label: "서비스 보기",
        href: "https://dffxonnb-cyber.github.io/Seoul-Storefront-Redveil/",
        type: "secondary",
      },
      {
        label: "Redveil QA Note",
        href: "https://github.com/dffxonnb-cyber/Seoul-Storefront-Redveil/blob/main/docs/REDVEIL_QA_2026-06-19.md",
        type: "secondary",
      },
      {
        label: "V2 Decision Artifact Evidence",
        href: "https://github.com/dffxonnb-cyber/Seoul-Storefront-Redveil/blob/featrue/v2-decision-artifact/docs/evidence/v2-decision-artifact.md",
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
          "Redveil은 서울 상가 매입 전 검토에 필요한 확인 포인트를 빠르게 읽을 수 있게 만든 공개 웹 프로토타입입니다.",
          "후보 선택을 서두르기 전에 보류 사유, 대체 후보, 재확인 항목을 먼저 검토하고 professional review handoff로 넘길 수 있게 설계했습니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "공공데이터와 거래 데이터를 묶어 구 단위 비교, 매물 단건 검토, 대체 후보 비교, Hold Memo/Comparison Memo export, 사례/방법론 문서까지 하나의 서비스 흐름으로 연결했습니다.",
          "분석 결과를 읽는 사람의 판단 순서를 고려해 risk score, pause reasons, comparison baseline, re-check items, 후속 문서를 한 화면 안에서 이어지게 만들었습니다.",
        ],
      },
      {
        title: "v1 / v2 decision artifact boundary",
        paragraphs: [
          "기존 public V1 review flow는 유지하면서, V2는 review/compare 결과에 copy/export 가능한 Hold Memo, Comparison Memo, Professional Review Checklist를 decision artifact layer로 추가했습니다.",
          "Redveil 전체는 투자 추천이 아니라 매입 전 보류 신호, 대체 후보 비교, 재확인 항목, professional review handoff를 검토하는 portfolio prototype으로 해석해야 합니다.",
        ],
      },
      {
        title: "포트폴리오 관점의 의미",
        paragraphs: [
          "이 프로젝트는 분석 결과를 검토 가능한 웹 프로토타입과 사용자 흐름으로 전환하는 역량을 직접적으로 보여주는 사례입니다.",
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
      "공공 구조동물 공고를 KST 마감일·지역·데이터 상태 기준으로 정리해\n현재 공고와 보호 종료 임박 신호를 구분하는\nlive-first public-data service입니다.",
    period: "2026",
    format: "개인 프로젝트",
    domains: ["공공데이터", "구조동물 공고", "데이터 신뢰성", "PWA"],
    role: ["live-first API 설계", "마감 신호 분류", "캐시·fallback 운영", "PWA 구현"],
    filterTools: ["Python", "SQL", "React"],
    cardTools: ["Python", "React", "TypeScript", "Vercel"],
    stack: ["Public Data API", "Vite", "React", "TypeScript", "Vercel Functions", "PWA", "Server Cache", "PostgreSQL fallback"],
    problemTypes: ["보호 종료 임박 신호", "데이터 신뢰성", "의사결정 도구"],
    coreTags: ["Live API", "KST 30일", "D-Day~D-3", "Region Filter", "Pagination", "TTL Cache", "Fallback 분리", "Observability"],
    badges: ["Featured", "Public Data", "Live API", "Signal Service"],
    context:
      "구조동물 원천 공고는 지난 공고와 현재 공고가 섞이고, 보호 종료 임박 공고가 전체 목록에 묻히기 쉽습니다. Shelter Signal은 단순 목록이 아니라 공고 생명주기, 지역 필터, live/cache/fallback 상태를 함께 읽는 탐색 흐름으로 설계했습니다.",
    outcome:
      "KST 최근 30일 live 공고를 current·urgent·protected·archive로 분리하고, D-Day~D-3를 보호 종료 임박 신호로 우선 정렬했습니다. 서버 지역 필터, page/limit 페이지네이션, 5분 TTL 캐시, source/cache/fallback metadata를 결합해 공고의 유효성과 데이터 상태를 함께 확인할 수 있게 구현했습니다.",
    supportingLine:
      "공공 API 상태와 보호 종료 임박 신호를 함께 읽는 live-first 탐색 서비스",
    review: {
      decisionQuestion: "현재 유효한 공고와 보호 종료 임박 공고를 어떻게 신뢰 가능한 상태로 구분할 것인가?",
      myRole: "live-first API 설계, KST 마감 분류, region/page API, TTL cache, fallback 상태 분리, PWA 구현",
      evidence: "KST 30일 live window · D-Day~D-3 urgent signal · source/cache/fallback metadata · deployed UI/API evidence",
      deliverable: "현재 공고, 보호 종료 임박 신호, 데이터 상태를 함께 보여주는 live-first public-data service",
      hiringSignal: "공공 API의 불안정성을 숨기지 않고 신호 로직, cache/fallback, UI 상태로 분리해 구현할 수 있음",
    },
    operationMeta: {
      lastVerifiedAt: "2026-06-12 09:30 KST",
      source: "live api",
      whyItMatters:
        "공공데이터 API의 지연, 누락, 만료 상태를 서비스 운영 흐름 안에서 처리하고, 마감 임박 공고를 분리해 실제 확인 가능한 archive로 구성했습니다.",
      verified: [
        "Live API 응답 기반 source 확인",
        "KST 최근 30일 dateRange 수집 구조 확인",
        "region filter / page / limit 응답 구조 확인",
        "deadline_status 기반 current / urgent / protected / archive 분리 확인",
        "cache hit / miss 및 stale-live fallback 흐름 확인",
      ],
      designing: [
        "장기 추세 대시보드",
        "지역별 위험도 비교",
        "보호소 단위 capacity signal",
        "입양 가능성 기반 scoring",
      ],
      reviewChecklist: [
        "최근 30일 live API 응답이 deployed API source로 들어오는지",
        "D-Day / D-1~3 / active / expired 상태가 분리되는지",
        "current / urgent / protected / archive view가 목적별로 나뉘는지",
        "API 실패 시 fallback path가 분리되어 있는지",
      ],
      risksHandled: [
        {
          risk: "공공데이터 API 응답 지연",
          handling: "5분 TTL cache와 stale-live fallback으로 사용자 흐름을 유지",
        },
        {
          risk: "마감일 기준 혼선",
          handling: "D-Day, D-1~3, active, expired로 deadline_status를 분리",
        },
        {
          risk: "지역명 검색 오인",
          handling: "region alias와 filter normalization으로 보정",
        },
        {
          risk: "live API 실패",
          handling: "PostgreSQL, static, mock fallback 순서로 degraded state 구성",
        },
      ],
    },
    reviewerPriority: 1,
    showInReviewerPath: true,
    decisionMoment: {
      originalQuestion: "구조동물 공고를 어떻게 조회하게 할 것인가?",
      reframedQuestion: "공고의 유효성, 보호 종료 임박도, 데이터 상태를 어떻게 함께 보여줄 것인가?",
      keyEvidence: "KST 30일 live window, noticeEdt freshness filter, D-Day~D-3 urgent 분류, source/cache/fallback metadata",
      finalDeliverable: "live-first `/api/notices`, region/page API, TTL cache, 상태 패널을 갖춘 React PWA",
      proves: "공공데이터 목록을 마감 신호와 데이터 신뢰 상태가 보이는 서비스 흐름으로 재구성하는 역량",
    },
    cardBrief: {
      problem:
        "지난 공고, 현재 공고, 보호 종료 임박 공고가 한 목록에 섞이면 어떤 공고를 지금 봐야 하는지 판단하기 어려움.",
      method:
        "KST 30일 live 공고를 noticeEdt 기준으로 current/urgent/protected/archive로 분리하고, D-Day~D-3와 source/cache/fallback metadata를 UI 상태로 노출함.",
      output: [
        "Current / Urgent / Protected / Archive",
        "서버 측 Region Filter",
        "Page / Limit Pagination",
        "Live / Cache / Fallback 상태 패널",
      ],
    },
    metrics: [
      {
        label: "Live Window",
        value: "KST 30일",
        caption: "KST 기준 최근 30일 공고 수집",
      },
      {
        label: "Urgent Signal",
        value: "D-Day~D-3",
        caption: "보호 종료 임박 공고 우선 분류",
      },
      {
        label: "Server Cache",
        value: "5분 TTL",
        caption: "반복 호출 비용과 응답 지연 완화",
      },
      {
        label: "View Modes",
        value: "4 views",
        caption: "current / urgent / protected / archive",
      },
    ],
    evidencePoints: [
      {
        label: "Live-first 수집",
        value: "KST 기준 최근 30일, state=notice, 최대 10개 upstream page 수집",
      },
      {
        label: "Signal Logic",
        value: "noticeEdt 기반 current/urgent/protected/archive 분리와 D-Day~D-3 긴급 신호 정렬",
      },
      {
        label: "탐색 단위",
        value: "서버 측 한국 지역 alias 필터와 page/limit 기반 20건 단위 탐색",
      },
      {
        label: "Trust Layer",
        value: "source, fallbackReason, cacheStatus, fetchedAt, dateRange, count metadata로 응답 상태 구분",
      },
      {
        label: "Operational Layer",
        value: "5분 TTL 정규화 데이터 캐시, in-flight request sharing, stale-live 처리",
      },
      {
        label: "Observability",
        value: "cache hit/miss, upstream fetch duration/count, normalized/filtered/returned count 확인",
      },
      {
        label: "V2 dry-run evidence",
        value: "alert_candidates → JSON/HTML digest preview는 local dry-run evidence로 분리했으며 실제 알림 발송 운영은 주장하지 않음",
      },
    ],
    signalCaseStudy: {
      signalType: "보호 종료 임박 신호",
      title: "데이터 상태와 마감일을 함께 읽는 구조",
      thesis:
        "공고 마감일과 데이터 신뢰 상태를 함께 읽어 현재 유효한 구조동물 공고와 종료 임박 공고를 구분하는 공공데이터 서비스입니다.",
      chips: ["Live API", "KST 30일", "D-Day~D-3", "Region Filter", "Pagination", "TTL Cache", "Fallback 분리", "Observability"],
      flow: ["Live API", "KST 30-day range", "Deadline filter", "Urgent signal", "Region filter", "Pagination", "Cache", "Metadata", "UI state"],
      evidenceTitle: "검증 화면",
      evidenceDescription: "Production UI와 비밀정보를 제외한 API metadata로 live-first 동작을 확인했습니다.",
      evidence: [
        {
          src: "/evidence/shelter-signal-production-ui.webp",
          alt: "Shelter Signal Production UI에서 Live API 상태, 서울 지역 선택, 20/185건 결과, cache hit, 현재 공고 카드를 보여주는 화면",
          caption: "Production UI · Live API와 서울 지역 공고 탐색",
          note: "Live 상태, 서버 지역 필터, 페이지 단위 결과를 한 화면에서 확인합니다.",
          width: 1440,
          height: 1000,
        },
        {
          src: "/evidence/shelter-signal-api-metadata.webp",
          alt: "Shelter Signal Production API의 source api, cacheStatus hit, dateRange, 결과 수, upstream 진단 값, fallbackReason null을 보여주는 안전한 metadata 화면",
          caption: "Safe API metadata · live/cache/fallback 상태 검증",
          note: "서비스 키와 upstream URL 없이 운영 판단 필드만 시각화했습니다.",
          width: 1200,
          height: 780,
        },
      ],
      sections: [
        {
          label: "01 Problem",
          title: "목록이 아니라 공고 생명주기를 해석",
          description:
            "날짜·상태·지역이 섞인 원천 공고에서는 지난 공고가 현재처럼 보이거나 종료 임박 공고가 전체 목록에 묻힐 수 있습니다.",
          points: ["expired·missing noticeEdt를 current에서 제외", "정상 빈 live 결과와 API 실패를 분리"],
        },
        {
          label: "02 Signal Logic",
          title: "noticeEdt를 보호 종료 임박 신호로 변환",
          description:
            "KST 기준 최근 30일 공고를 수집하고 noticeEdt로 current·urgent·protected·archive를 분리합니다.",
          points: ["D-Day~D-3를 urgent로 분류", "days_left 오름차순 정렬"],
        },
        {
          label: "03 Data Trust Layer",
          title: "데이터 상태를 숨기지 않는 응답",
          description:
            "live API, cache hit, stale-live, fallback, empty state를 같은 상태처럼 취급하지 않고 metadata로 구분합니다.",
          points: ["source · fallbackReason · cacheStatus", "fetchedAt · dateRange · returnedCount"],
        },
        {
          label: "04 API / Cache / Fallback",
          title: "반복 호출 비용과 장애 상태를 분리",
          description:
            "정규화된 live 데이터를 5분 TTL로 서버 캐싱하고 동시 요청은 하나의 upstream fetch를 공유합니다.",
          points: ["in-flight request sharing", "fallback 경고는 source=fallback일 때만 표시"],
        },
        {
          label: "05 UX Result",
          title: "대량 결과를 탐색 가능한 단위로 축소",
          description:
            "지역 필터를 서버에서 적용하고 page/limit 기반 더 보기로 한 번에 렌더링되는 공고 수를 제한했습니다.",
          points: ["region alias matching", "current/urgent에 expired 누수 방지"],
        },
        {
          label: "06 Technical Evidence",
          title: "운영 상태를 검증 가능한 수치로 기록",
          description:
            "응답과 안전 로그에서 upstream 수집 비용, 정규화 건수, 필터 결과, 반환 건수를 확인할 수 있습니다.",
          points: ["upstreamFetchDurationMs · upstreamFetchCount", "normalizedItemCount · totalFilteredCount"],
        },
      ],
    },
    detailBrief: {
      problem: {
        what:
          "구조동물 공고의 날짜, 상태, 지역 정보가 한 목록에 섞이면 이미 종료된 공고와 현재 공고를 구분하고 종료 임박 공고를 먼저 찾기 어렵습니다.",
        why:
          "시간 민감도가 높은 공고를 탐색하려면 공고 생명주기뿐 아니라 live·cache·fallback 등 데이터 신뢰 상태도 함께 확인할 수 있어야 하기 때문입니다.",
      },
      dataMethod: {
        dataTypes: ["data.go.kr 구조동물 공고 live API", "정규화된 server cache dataset", "PostgreSQL / static JSON / mock fallback"],
        process: [
          "KST 기준 최근 30일과 state=notice로 live API를 우선 수집하고 응답 shape를 정규화",
          "noticeEdt와 KST 날짜로 days_left를 계산해 current·urgent·protected·archive를 분리",
          "지역 alias를 서버에서 매칭하고 view·region·page·limit를 캐시된 정규화 데이터에 적용",
          "5분 TTL cache, stale-live, fallback, 정상 empty state를 서로 다른 metadata 상태로 반환",
          "cache hit/miss와 upstream duration/count, normalized/filtered/returned count를 안전 로그로 기록",
        ],
        metrics: [
          "days_left / deadline_status",
          "pagesFetched / upstreamTotalCount",
          "totalFilteredCount / returnedCount / hasMore",
          "cacheStatus / cacheAgeSeconds / inFlightMerged",
          "upstreamFetchDurationMs / upstreamFetchCount / normalizedItemCount",
        ],
      },
      limitations: [
        "공공 API의 승인 상태, quota, XML/plain-text 오류 응답, 기관별 갱신 주기에 영향을 받습니다.",
        "upstream 수집은 page당 최대 1000건, 최대 10페이지로 제한되어 매우 큰 조회 범위는 잘릴 수 있습니다.",
        "5분 캐시는 Vercel function instance memory 기반이므로 cold start와 다른 instance 사이에서 hit를 보장하지 않습니다.",
        "stale-live와 fallback은 연속성을 위한 상태이며 실시간성을 보장하지 않습니다.",
        "사용자 계정, 영구 저장, push·email·SMS 알림은 현재 production 범위에 포함하지 않았습니다.",
        "Shelter Signal V2의 alert_candidates와 digest preview는 local dry-run evidence이며 실제 email/SMS/push 알림 운영이나 구독 관리를 의미하지 않습니다.",
        "서비스 키와 운영 비밀값은 server-side 환경 변수로만 사용하며 브라우저와 로그에 노출하지 않습니다.",
      ],
      linkNote: "Live Demo의 상태 패널에서 Live API, 조회 기간, 수집 페이지, 현재·긴급 공고 수, cache 상태를 확인할 수 있습니다. fallback 경고는 source가 fallback일 때만 표시되며 서비스 키는 브라우저에 노출하지 않습니다.",
    },
    focusPoints: [
      "공공데이터 목록을 현재 유효성, 보호 종료 임박도, 데이터 상태를 함께 읽는 문제로 재정의",
      "noticeEdt와 KST 날짜를 current/urgent/protected/archive 및 D-Day~D-3 urgent signal로 변환",
      "신호 로직을 region/page API, TTL cache, fallback metadata, observability, compact UI까지 연결",
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
      {
        label: "V2 dry-run evidence",
        href: "https://github.com/dffxonnb-cyber/shelter-signal/blob/main/docs/evidence/v2-dry-run-2026-06-19.md",
        type: "secondary",
      },
    ],
    sortOrder: 2,
    caseStudySlugs: ["risk-signals-before-volume", "turn-analysis-into-a-decision-tool"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "Shelter Signal은 공공데이터의 구조동물 공고를 단순 목록으로 보여주는 대신, 공고 종료일과 데이터 출처를 기준으로 현재 공고·종료 임박 공고·보호/기록 상태를 분리한 public-data service입니다.",
          "D-Day~D-3 공고를 urgent signal로 재정렬하고, 지역 필터와 page/limit 페이지네이션을 통해 대량 공공데이터를 탐색 가능한 단위로 축소했습니다.",
        ],
      },
      {
        title: "Data to Decision Flow",
        paragraphs: [
          "Live API → KST 30일 범위 → noticeEdt 마감 필터 → urgent signal → region filter → pagination → cache → metadata → UI state 순서로 공고를 처리합니다.",
          "Live API 응답, fallback, stale-live, empty state를 구분하기 위해 source, fallbackReason, cacheStatus, fetchedAt, dateRange, totalFilteredCount, upstreamFetchDurationMs 등의 metadata를 응답에 포함했습니다.",
        ],
      },
      {
        title: "V2 dry-run evidence",
        paragraphs: [
          "Production은 live-first `/api/notices`와 current/urgent/protected/archive 탐색 흐름을 유지합니다.",
          "V2는 alert_candidates → JSON/HTML digest preview를 로컬에서 확인하는 dry-run preview이며, 실제 알림 발송·구독 관리·Production 스케줄 운영을 주장하지 않습니다.",
        ],
      },
      {
        title: "What This Proves",
        paragraphs: [
          "공공 API의 불안정성과 대량 결과를 숨기지 않고, 데이터 상태와 보호 종료 임박 신호를 함께 읽는 서비스 구조로 번역했습니다.",
          "반복 호출 비용을 줄이기 위해 5분 TTL 서버 캐시와 in-flight request sharing을 적용하고 cache hit/miss와 upstream 응답 시간을 관찰할 수 있게 했습니다.",
        ],
      },
      {
        title: "Scope and Limitations",
        paragraphs: [
          "공공 API quota, 비정형 오류 응답, 갱신 주기 차이, 최대 upstream page cap은 남아 있는 제약입니다.",
          "Vercel instance-local 캐시는 cold start나 다른 instance에서 공유를 보장하지 않으며, 사용자 계정·영구 저장·알림은 현재 production 범위가 아닙니다.",
        ],
      },
    ],
  },
  {
    id: "decisionops-lab",
    slug: "decisionops-lab",
    title: "DecisionOps Lab",
    status: "featured",
    category: "대표 프로젝트",
    primaryDomain: "제품 분석",
    summary:
      "synthetic 제품 이벤트 데이터를 DuckDB SQL mart, 품질 gate, A/B evidence, D7 guardrail, scenario matrix, decision memo/report로 연결한 분석 의사결정 workflow입니다.",
    period: "2026",
    format: "개인 프로젝트",
    domains: ["제품 분석", "analytics engineering", "SQL 모델링", "실험 검토"],
    role: ["raw/staging/intermediate/mart SQL 설계", "data quality gate", "A/B test evidence", "D7 guardrail review", "scenario matrix"],
    filterTools: ["Python", "SQL"],
    cardTools: ["Python", "SQL", "DuckDB", "GitHub Actions"],
    stack: ["Python", "pandas", "DuckDB", "SQL", "SciPy", "statsmodels", "pytest", "GitHub Actions"],
    problemTypes: ["제품 지표 설계", "실험 검토", "데이터 품질 검증"],
    coreTags: ["SQL Mart", "Quality Gate", "A/B Evidence", "Guardrail Review", "Decision Memo", "Synthetic Data"],
    badges: ["Featured", "Analytics Engineering", "Product Analytics", "Claim Boundary"],
    context:
      "제품 이벤트 데이터는 지표 계산만으로 바로 의사결정에 쓰기 어렵습니다. DecisionOps Lab은 synthetic raw users/events/sessions/payments/experiments를 분석 가능한 SQL layer로 정리하고, 품질 gate와 D7 revisit guardrail을 먼저 통과한 뒤 실험 결과를 Ship/Retest/Hold/Investigate 언어로 남기는 workflow입니다.",
    outcome:
      "raw CSV를 DuckDB raw tables, staging, intermediate, mart layer로 모델링하고, 23개 quality checks PASS, activation lift +3.97pp, p-value 0.000011, D7 revisit delta +0.97pp, 5개 scenario matrix, decision memo, reviewer-facing HTML report를 생성했습니다. 모든 결과는 synthetic-data workflow로 제한해 실제 제품 성과나 사용자 행동을 주장하지 않습니다.",
    supportingLine:
      "raw event를 SQL mart, 품질 gate, A/B evidence, D7 guardrail, scenario matrix, decision memo로 연결한 분석 의사결정 workflow",
    review: {
      decisionQuestion: "activation lift가 좋아 보여도 품질 gate와 guardrail을 통과해야 Ship으로 판단할 수 있는가?",
      myRole: "synthetic dataset 설계, SQL staging/intermediate/mart layer 구성, data quality checks, A/B test analysis, D7 guardrail review, scenario matrix, decision memo/report 생성",
      evidence: "raw users 10,000 · raw events 41,676 · 23 quality checks PASS · activation lift +3.97pp · p-value 0.000011 · D7 delta +0.97pp · 5 scenario matrix",
      deliverable: "SQL mart layer, data quality report, experiment evidence, Ship/Retest/Hold/Investigate decision memo, reviewer HTML report",
      hiringSignal: "제품 이벤트 데이터를 지표 계산에서 멈추지 않고 품질 gate, guardrail, 실험 근거, 리뷰 가능한 decision artifact로 연결할 수 있음",
    },
    reviewerPriority: 3,
    showInReviewerPath: true,
    decisionMoment: {
      originalQuestion: "실험 결과가 좋아 보이면 바로 Ship해도 되는가?",
      reframedQuestion: "activation lift와 통계 신호가 있어도 품질 검증과 guardrail을 통과해야 Ship으로 판단할 수 있는가?",
      keyEvidence: "SQL mart · 23 quality checks PASS · activation lift +3.97pp · p-value 0.000011 · D7 revisit guardrail +0.97pp · 5 scenario matrix",
      finalDeliverable: "mart_decision_summary, quality_report.json, experiment_result.json, scenario_matrix.md, decision_memo.md, public reviewer report",
      proves: "제품 이벤트 데이터를 해석 전 품질 gate와 실험/guardrail 판단 언어로 전환하는 역량",
    },
    cardBrief: {
      problem:
        "실험 지표가 하나 좋아 보여도 데이터 품질, D7 revisit guardrail, 시나리오별 decision behavior를 함께 보지 않으면 의사결정 근거가 약해집니다.",
      method:
        "synthetic raw events를 DuckDB SQL layer로 모델링하고, 23개 quality checks와 A/B 분석, D7 guardrail 검토를 거쳐 Ship/Retest/Hold/Investigate decision memo로 정리했습니다.",
      output: [
        "SQL staging/intermediate/mart layer",
        "23 data quality checks",
        "A/B evidence + D7 revisit guardrail",
        "decision memo / reviewer report",
      ],
    },
    metrics: [
      { label: "Quality Gate", value: "23/23 PASS" },
      { label: "Activation Lift", value: "+3.97pp" },
      { label: "D7 Guardrail", value: "+0.97pp" },
      { label: "Scenario Matrix", value: "5 scenarios" },
    ],
    evidencePoints: [
      {
        label: "SQL Layer",
        value: "raw users/events/sessions/payments/experiments를 staging, intermediate, mart tables로 분리하고 reviewer-facing artifact가 mart layer를 읽도록 구성",
      },
      {
        label: "Quality Gate",
        value: "row count, nulls, accepted values, relation, duplicate, experiment balance 등 23개 checks가 모두 PASS",
      },
      {
        label: "Experiment Review",
        value: "Variant A activation 30.15%, B 34.12%, absolute lift +3.97pp, p-value 0.000011, confidence interval +2.14pp~+5.80pp",
      },
      {
        label: "Guardrail Review",
        value: "D7 revisit A 48.17%, B 49.14%, delta +0.97pp로 default strong_positive scenario의 guardrail PASS 확인",
      },
      {
        label: "Decision Language",
        value: "strong_positive=Ship, guardrail_risk/weak_evidence=Retest, neutral=Hold, quality_failure=Investigate로 분기",
      },
      {
        label: "Verification",
        value: "`scripts/run_full_verification.py`와 GitHub Actions가 reports/quality_report.json, experiment_result.json, decision_memo.md, review_report.html, scenario_matrix를 생성/업로드",
      },
      {
        label: "Claim Boundary",
        value: "synthetic data workflow이며 실제 제품 성과, 실제 사용자 행동, production business impact는 주장하지 않음",
      },
    ],
    signalCaseStudy: {
      signalType: "실험 의사결정 workflow",
      title: "activation lift를 Ship 판단으로 바로 넘기지 않는 구조",
      thesis:
        "synthetic 제품 이벤트를 SQL mart와 품질 gate로 정리하고, A/B evidence와 D7 revisit guardrail을 함께 읽어 Ship / Retest / Hold / Investigate memo로 번역한 technical workflow 사례입니다.",
      chips: ["DuckDB SQL", "23 Quality Checks", "+3.97pp Lift", "p=0.000011", "D7 +0.97pp", "5 Scenarios", "Decision Memo", "Reviewer Report"],
      flow: ["Synthetic events", "DuckDB raw", "SQL staging", "Intermediate models", "Mart layer", "Quality gate", "A/B evidence", "D7 guardrail", "Scenario matrix", "Decision memo"],
      evidenceTitle: "검토 가능한 DecisionOps 산출물",
      evidenceDescription:
        "별도 스크린샷을 만들지 않고, 저장소에 남아 있는 quality report, experiment result, scenario matrix, decision memo, reviewer report를 evidence로 연결합니다.",
      sections: [
        {
          label: "01 Problem",
          title: "좋아 보이는 실험 결과를 바로 Ship하지 않기",
          description:
            "activation lift가 좋아 보여도 데이터 품질이나 downstream behavior가 흔들리면 제품 판단으로 승격하기 어렵습니다.",
          points: ["지표 단독 해석을 보류", "품질·통계·D7 guardrail을 먼저 확인"],
        },
        {
          label: "02 Data Model",
          title: "raw event를 SQL layer로 분리",
          description:
            "raw users/events/sessions/payments/experiments를 DuckDB raw tables, staging, intermediate, mart layer로 나눕니다.",
          points: ["mart_experiment_result", "mart_decision_summary", "mart_segment_performance", "mart_retention_cohort"],
        },
        {
          label: "03 Quality Gate",
          title: "해석 전에 23개 checks를 통과",
          description:
            "row count, nulls, accepted values, relation, duplicate, experiment balance checks를 먼저 확인합니다.",
          points: ["23/23 PASS", "quality failure scenario는 Investigate로 분기"],
        },
        {
          label: "04 Experiment Evidence",
          title: "activation lift와 통계 신호 확인",
          description:
            "default strong_positive scenario에서 Variant B의 activation이 높지만, 이 결과만으로 결론을 내리지 않습니다.",
          points: ["A 30.15% → B 34.12%", "+3.97pp lift", "p-value 0.000011"],
        },
        {
          label: "05 Guardrail",
          title: "D7 revisit를 downstream guardrail로 확인",
          description:
            "짧은 activation 개선이 이후 revisit 행동을 약화시키지 않는지 D7 revisit delta를 함께 봅니다.",
          points: ["D7 revisit delta +0.97pp", "guardrail_risk는 Retest로 분기"],
        },
        {
          label: "06 Decision Matrix",
          title: "하나의 positive result에 고정하지 않기",
          description:
            "scenario matrix가 Ship, Retest, Hold, Investigate 판단을 모두 보여주도록 구성했습니다.",
          points: ["strong_positive=Ship", "weak_evidence/guardrail_risk=Retest", "neutral=Hold", "quality_failure=Investigate"],
        },
        {
          label: "07 Output",
          title: "reviewer-facing artifact로 남기기",
          description:
            "quality report, experiment result, scenario matrix, decision memo, public reviewer report를 검토 가능한 산출물로 남깁니다.",
          points: ["reports/decision_memo.md", "reports/review_report.html", "scripts/run_full_verification.py"],
        },
        {
          label: "08 Boundary",
          title: "synthetic-data claim boundary 유지",
          description:
            "DecisionOps는 workflow design evidence이며 실제 제품 성과, 실제 사용자 행동, production business impact를 증명하지 않습니다.",
          points: ["public-safe synthetic workflow", "production warehouse operation 아님"],
        },
      ],
    },
    detailBrief: {
      problem: {
        what:
          "제품 분석 결과는 지표 산출만으로는 부족하며, 품질 문제가 있는 데이터나 D7 revisit guardrail 악화를 무시하면 잘못된 Ship 판단으로 이어질 수 있습니다.",
        why:
          "리뷰어가 신뢰할 수 있는 포트폴리오 evidence가 되려면 raw data, SQL model, 품질 gate, 실험 해석, 최종 memo가 같은 경로로 연결되어야 하기 때문입니다.",
      },
      dataMethod: {
        dataTypes: ["synthetic product events", "users/sessions/payments/experiments", "DuckDB SQL marts", "quality/experiment/scenario reports"],
        process: [
          "synthetic raw CSV를 생성하고 DuckDB pipeline으로 적재",
          "staging, intermediate, mart SQL layer로 grain과 metric 정의를 분리",
          "23개 quality checks를 먼저 실행한 뒤 A/B evidence와 D7 revisit guardrail 확인",
          "5개 scenario matrix로 Ship/Retest/Hold/Investigate decision behavior 검증",
          "decision memo와 reviewer HTML report로 검토 가능한 산출물 생성",
        ],
        metrics: ["23/23 quality PASS", "activation lift +3.97pp", "p-value 0.000011", "D7 delta +0.97pp", "5 scenario matrix"],
      },
      limitations: [
        "synthetic dataset 기반이므로 실제 제품 성과, 실제 사용자 행동, 실제 business impact를 주장하지 않습니다.",
        "실험 결과는 workflow 검증용이며 production A/B test나 인과적 사업 성과 검증이 아닙니다.",
        "DuckDB 기반 portfolio workflow이며 production warehouse scale이나 운영 데이터 플랫폼을 주장하지 않습니다.",
        "refund risk와 session activity는 decision memo 설계 문서의 guardrail 후보로 다루며, 현재 생성된 scenario matrix의 검증 중심은 D7 revisit입니다.",
        "dashboard보다는 SQL layer, quality gate, scenario matrix, decision memo 중심의 reviewer-facing evidence입니다.",
      ],
      linkNote: "GitHub README, docs/REVIEW_GUIDE.md, reports/scenario_matrix.md, reports/decision_memo.md에서 검증 경로와 claim boundary를 확인할 수 있습니다.",
    },
    focusPoints: [
      "raw product event를 SQL mart layer와 metric definition으로 재구성",
      "data quality gate를 해석보다 앞에 두어 결과 신뢰 경계를 분리",
      "A/B evidence를 D7 revisit guardrail과 함께 읽고 decision memo로 번역",
      "scenario matrix로 Ship, Retest, Hold, Investigate 분기를 재현 가능하게 검증",
      "synthetic-data workflow의 claim boundary를 명확히 유지",
    ],
    links: [
      {
        label: "Public Reviewer Report",
        href: "https://dffxonnb-cyber.github.io/DecisionOps-lab/",
        type: "primary",
      },
      {
        label: "GitHub 저장소",
        href: "https://github.com/dffxonnb-cyber/DecisionOps-lab",
        type: "secondary",
      },
    ],
    sortOrder: 3,
    caseStudySlugs: ["guardrail-aware-experiment-decision", "pipeline-validation-design", "turn-analysis-into-a-decision-tool"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "DecisionOps Lab은 synthetic 제품 이벤트 데이터를 raw 분석에서 바로 결론으로 넘기지 않고, SQL layer와 품질 gate를 거쳐 decision memo로 연결하는 product analytics workflow입니다.",
          "대표 역할은 실제 제품 성과를 주장하는 것이 아니라, 실험 해석 전에 어떤 검증과 guardrail을 통과해야 하는지 보여주는 것입니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "raw events를 staging, intermediate, mart layer로 분리하고, reviewer-facing report가 mart layer를 읽도록 구성했습니다.",
          "23/23 quality PASS, activation lift +3.97pp, p-value 0.000011, D7 revisit guardrail +0.97pp, 5개 scenario matrix를 함께 보고 Ship/Retest/Hold/Investigate 판단 언어로 정리했습니다.",
        ],
      },
      {
        title: "Scope and Limitations",
        paragraphs: [
          "이 프로젝트는 synthetic-data workflow입니다. 실제 사용자 행동, 실제 제품 성과, production business impact를 증명하지 않습니다.",
          "강점은 SQL 모델링, 품질 gate, 실험 evidence, guardrail review, decision memo가 하나의 검토 경로로 연결되어 있다는 점입니다.",
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
    filterTools: ["Python"],
    cardTools: ["Python", "Jupyter"],
    stack: ["Python", "pandas", "NumPy", "SciPy", "statsmodels", "scikit-posthocs", "Jupyter", "Matplotlib/Seaborn"],
    problemTypes: ["구매 패턴 분석", "고객 세그먼트 분석", "매출/재구매 인사이트"],
    coreTags: ["UK Online Retail", "E-commerce", "RFM", "Customer Segmentation", "Revenue Analysis"],
    badges: ["E-commerce", "Revenue Logic", "CI Verified"],
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
        label: "통계 검정",
        value: "ANOVA / Kruskal-Wallis로 세그먼트별 매출 차이 검토",
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
        "full notebook execution은 UCI Online Retail CSV를 로컬에 배치해야 하며, CI는 artifact completeness와 pipeline entry-point syntax를 검증합니다.",
        "실제 운영 고객 식별 정보와 연결한 캠페인 집행/성과 검증은 포함하지 않았습니다.",
        "세그먼트 경계값은 업종, 기간, 운영 목표가 달라지면 재검토가 필요합니다.",
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
    sortOrder: 6,
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
    status: "supporting",
    category: "서브 프로젝트",
    primaryDomain: "마케팅",
    summary:
      "고객·오퍼·채널 데이터를 재구성해\n어떤 고객군이 어떤 제안과 채널에 반응하는지 읽고\nCRM 액션 판단으로 번역한 마케팅 분석입니다.",
    period: "2026",
    format: "4인 팀 프로젝트",
    domains: ["CRM", "Marketing Analytics", "고객 반응 분석", "오퍼/채널 성과 분석"],
    role: ["이벤트 구조 재설계", "추천 후보 해석", "Tableau 결과 정리"],
    filterTools: ["Python"],
    cardTools: ["Python", "Tableau"],
    stack: ["Python", "pandas", "NumPy", "scikit-learn", "Jupyter", "Tableau"],
    problemTypes: ["고객 반응 분석", "오퍼/채널 성과 분석", "마케팅 액션 인사이트"],
    coreTags: ["CRM", "Offer Response", "Customer Segmentation", "Marketing Analytics", "Tableau"],
    badges: ["CRM", "Marketing Analytics", "Model Metrics", "CI Verified"],
    context:
      "고객, 오퍼, 채널 데이터가 분리된 상태에서는 어떤 고객군이 어떤 제안에 반응하고 어떤 채널 조합이 성과로 이어지는지 함께 읽기 어렵습니다. 이 프로젝트는 분리된 로그를 CRM 판단 단위로 다시 묶는 데 초점을 뒀습니다.",
    outcome:
      "고객·오퍼·채널 데이터를 조인 가능한 분석 구조로 재구성하고, 반응 예측 지표와 오퍼/채널 성과 비교를 Tableau 결과물과 마케팅 액션 인사이트로 정리했습니다.",
    supportingLine: "고객군별 오퍼 반응과 채널 성과를 CRM 액션으로 번역한 마케팅 분석",
    review: {
      decisionQuestion: "어떤 고객군이 어떤 오퍼와 채널에 반응하며, 이를 어떤 CRM 액션으로 해석할 것인가?",
      myRole: "팀 리더, 이벤트 로그 구조 재설계, 고객·오퍼·채널 반응 해석, 추천 후보 정리, Tableau 결과물 구성",
      evidence: "AUC 0.8147 / Recall 0.8712 / Precision 0.6830 / F1 0.7657 / NDCG@5 1.0000",
      deliverable: "고객군별 오퍼 반응, 채널 성과, CRM 액션 인사이트를 연결한 분석 결과물",
      hiringSignal: "분리된 고객·오퍼·채널 데이터를 마케팅 판단과 실행 후보 언어로 번역할 수 있음",
    },
    decisionMoment: {
      originalQuestion: "어떤 오퍼가 성과가 좋은가?",
      reframedQuestion: "어떤 고객군이 어떤 오퍼와 채널에 반응하며, 어떤 액션 후보로 볼 수 있는가?",
      keyEvidence: "AUC 0.8147, Recall 0.8712, Precision 0.6830, F1 0.7657, NDCG@5 1.0000",
      finalDeliverable: "고객군별 오퍼 반응 분석, 채널 성과 비교, Tableau 결과물, CRM 액션 인사이트",
      proves: "고객·오퍼·채널 데이터를 마케팅 실행 판단으로 번역하는 역량",
    },
    cardBrief: {
      problem:
        "고객, 오퍼, 채널 데이터가 분리되어 있어 어떤 고객군에게 어떤 제안과 채널이 유효한지 판단하기 어려움.",
      method:
        "이벤트 로그를 고객-오퍼-채널 기준으로 재구성하고, 반응 예측 지표와 성과 비교를 Tableau 스토리라인으로 연결함.",
      output: [
        "고객·오퍼·채널 데이터 통합",
        "고객 반응 / 오퍼 성과 분석",
        "Tableau 결과물",
        "CRM 액션 인사이트",
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
      {
        label: "공개 산출물",
        value: "Tableau workbook과 README 스크린샷으로 대시보드 스토리라인 검토 가능",
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
        "원본 Kaggle CSV는 저장소에 포함하지 않아 full notebook execution은 `portfolio.csv`, `profile.csv`, `transcript.csv`를 로컬에 배치해야 합니다.",
        "CI는 public artifact checker와 pipeline entry-point syntax를 확인하며, 데이터가 필요한 notebook retraining은 실행하지 않습니다.",
        "실제 운영 캠페인 성과와 연결한 후속 검증은 포함되지 않았습니다.",
        "오퍼별 장기 유지 효과 비교는 추가 분석이 필요합니다.",
      ],
      linkNote: "GitHub README와 대시보드 산출물 기준으로 전체 분석 흐름을 확인할 수 있습니다.",
    },
    focusPoints: [
      "반정형 이벤트 로그를 고객·오퍼·채널 기준의 분석 구조로 재정리",
      "고객 반응, 오퍼 성과, 채널 차이를 CRM 액션 후보로 함께 해석",
      "모델 성능 지표와 Tableau 결과물을 마케팅 의사결정 흐름으로 연결",
    ],
    links: [
      {
        label: "GitHub 저장소",
        href: "https://github.com/dffxonnb-cyber/starbucks-promotion-analysis",
        type: "secondary",
      },
    ],
    sortOrder: 5,
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
    stack: ["Python", "pandas", "NumPy", "SciPy", "scikit-learn", "Matplotlib/Seaborn"],
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
      evidence: "EDA, 통계 검정, 모델링, 군집화 / 예측-실측 상관 0.68~0.72",
      deliverable: "경기/선수 분석 파이프라인과 시각화 결과",
      hiringSignal: "분리된 데이터를 재현 가능한 분석 흐름으로 통합 가능",
    },
    decisionMoment: {
      originalQuestion: "승리 팀은 어떤 특징이 있는가?",
      reframedQuestion: "승리 요인과 선수 성과를 한 분석 흐름에서 어떻게 설명할 것인가?",
      keyEvidence: "경기·선수 데이터 통합, EDA, 통계 검정, 모델링, 군집화, 예측-실측 상관 0.68~0.72",
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
    metrics: [
      { label: "Prediction Corr", value: "0.68-0.72" },
      { label: "Player Model", value: "R2 > 0.6" },
    ],
    evidencePoints: [
      {
        label: "분석 흐름",
        value: "전처리, EDA, 통계 검정, ML, 군집화, 시각화를 Python 모듈로 분리",
      },
      {
        label: "예측 검증",
        value: "문서 기준 R2 > 0.6, 예측-실측 상관 0.68~0.72, PLUS_MINUS 평균 오차 ±2.5",
      },
      {
        label: "공개 검증",
        value: "public artifact check와 synthetic dataframe 기반 smoke test가 GitHub Actions에서 실행",
      },
    ],
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
        "full pipeline rerun은 Kaggle 원본 CSV 4개를 로컬 `data/` 폴더에 배치해야 합니다.",
        "공개 저장소 기준으로는 코드, 문서, PNG 산출물, smoke test를 통해 분석 구조를 검토합니다.",
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
    sortOrder: 9,
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
    id: "job-signal-pipeline",
    slug: "job-signal-pipeline",
    title: "Job Signal Pipeline",
    status: "supporting",
    category: "서브 프로젝트",
    primaryDomain: "데이터 파이프라인",
    summary:
      "채용 공고 mock 응답을 PostgreSQL raw 적재부터\nanalytics views, SQL tests, local review dashboard까지 연결해 검증한\nlocal validation data pipeline v1입니다.",
    period: "2026",
    format: "개인 프로젝트",
    domains: ["채용 데이터", "데이터 파이프라인", "PostgreSQL", "검증 자동화"],
    role: ["mock ingestion 설계", "raw/analytics schema 분리", "SQL data quality tests", "local review dashboard 검증"],
    filterTools: ["Python", "SQL", "Web"],
    cardTools: ["Python", "PostgreSQL", "SQL", "Local validation"],
    stack: ["Python", "PostgreSQL", "SQLAlchemy", "psycopg", "Docker Compose local", "n8n dry-run outline", "Streamlit local review", "Plotly"],
    problemTypes: ["데이터 품질 검증", "로컬 파이프라인 검증", "분석 뷰 설계"],
    coreTags: ["Mock Ingestion", "Raw Loading", "Analytics Views", "SQL Tests", "Local Review Dashboard", "Boundary Docs"],
    badges: ["Pipeline Validation", "SQL QA", "Local v1"],
    context:
      "외부 채용 API 승인과 production 운영 환경이 없는 상태에서 live 서비스처럼 보이게 만드는 대신, 채용 공고 데이터가 어떻게 수집·적재·모델링·검증·조회되는지 mock/local 범위 안에서 재현 가능한 파이프라인으로 분리했습니다.",
    outcome:
      "Saramin mock 응답을 `raw.job_postings`에 upsert하고, `analytics` schema의 5개 views와 7개 SQL data quality tests를 `scripts/validate_sql_models.py`로 검증했습니다. local review dashboard는 live API가 아니라 검증된 analytics views를 조회하는 portfolio review 화면으로 연결했습니다.",
    supportingLine:
      "mock ingestion부터 PostgreSQL, SQL tests, local review dashboard까지 연결한 검증형 데이터 파이프라인",
    review: {
      decisionQuestion: "live API나 production 운영을 주장하지 않고 채용 데이터 파이프라인 구조를 어떻게 검증할 것인가?",
      myRole: "mock ingestion 설계, PostgreSQL raw/analytics schema 분리, SQL data quality tests, local review dashboard 연결, 검증 문서 정리",
      evidence: "Saramin mock → raw.job_postings → 5 analytics views → 7 SQL tests PASS → localhost local dashboard",
      deliverable: "mock/local boundary가 명확한 local validation data pipeline v1과 VERIFY/architecture/runbook 문서",
      hiringSignal: "외부 API 제약을 숨기지 않고 수집-적재-모델링-검증-대시보드 흐름을 SQL 테스트로 확인 가능하게 만듦",
    },
    decisionMoment: {
      originalQuestion: "채용 공고 서비스를 만들 수 있는가?",
      reframedQuestion: "live 운영을 주장하지 않고 검증 가능한 채용 데이터 파이프라인 구조를 어떻게 증명할 것인가?",
      keyEvidence: "Saramin mock ingestion, PostgreSQL raw loading, 5 analytics SQL views, 7 zero-failing SQL tests, local review dashboard",
      finalDeliverable: "Docker Compose local PostgreSQL, raw/analytics SQL models, validation script, local review dashboard, verification docs",
      proves: "구현 범위와 미검증 범위를 분리하면서 데이터 품질 검증 루프를 끝까지 연결하는 역량",
    },
    cardBrief: {
      problem:
        "live 채용 API와 production 운영을 주장하지 않으면서도 채용 데이터 파이프라인의 구조와 품질 검증 흐름을 보여줄 필요가 있었음.",
      method:
        "Saramin mock 응답을 정규화해 PostgreSQL raw table에 적재하고, 5개 analytics views와 7개 SQL tests를 validation script와 local review dashboard로 연결함.",
      output: [
        "Mock ingestion",
        "PostgreSQL raw loading",
        "5 Analytics SQL views",
        "7 SQL tests + local dashboard",
      ],
    },
    metrics: [
      { label: "Analytics Views", value: "5 SQL views" },
      { label: "Quality Checks", value: "7 SQL tests" },
      { label: "Validation", value: "PASS" },
    ],
    evidencePoints: [
      {
      label: "검증 경로",
      value: "Saramin mock ingestion → PostgreSQL raw loading → 5 analytics views → 7 SQL tests PASS → local review dashboard",
      },
      {
        label: "Raw/Analytics 분리",
        value: "`raw.job_postings`와 `analytics.job_postings_clean`, market summary, skill demand, source quality, weekly trend views를 분리",
      },
      {
        label: "SQL 품질 검증",
        value: "required fields, salary bounds, source/source_job_id, unique key 등 7개 SQL tests가 zero failing rows로 통과",
      },
      {
        label: "Dashboard 검증",
        value: "local review dashboard는 live API를 호출하지 않고 검증된 PostgreSQL analytics views를 조회",
      },
      {
      label: "범위 경계",
      value: "Saramin live API 운영, production ingestion schedule, monitoring, notification delivery는 구현/검증 범위 밖으로 명시",
      },
    ],
    detailBrief: {
      problem: {
        what:
          "채용 공고 API 승인과 production 운영이 없는 상태에서도 데이터 파이프라인의 구조와 품질 검증 흐름을 리뷰어가 확인할 수 있어야 했습니다.",
        why:
          "외부 API 제약을 구현 실패처럼 숨기거나 live 서비스처럼 과장하면, 실제로 검증된 범위와 앞으로 필요한 작업이 흐려지기 때문입니다.",
      },
      dataMethod: {
        dataTypes: ["Saramin mock response", "PostgreSQL raw.job_postings", "analytics SQL views", "SQL data quality test queries", "Streamlit local review dashboard"],
        process: [
          "Saramin mock 응답을 정규화하고 `--load-db` 옵션으로 PostgreSQL raw table에 upsert",
          "raw schema와 analytics schema를 분리해 원천 보존과 분석 로직을 나눔",
          "정렬된 SQL migrations/models/tests를 `scripts/validate_sql_models.py`에서 순서대로 실행",
          "analytics previews와 SQL tests가 통과한 뒤 local review dashboard에서 views를 조회",
          "VERIFY 문서와 evidence 문서에 mock/local boundary와 미구현 범위를 명시",
        ],
        metrics: ["5 analytics views", "7 SQL tests", "PASS: Validation passed", "localhost local dashboard connection"],
      },
      limitations: [
        "Saramin live API 호출 성공이나 production ingestion 운영을 주장하지 않습니다.",
        "실제 live API 검증에는 승인된 `SARAMIN_API_KEY`와 quota/rate limit 확인이 필요합니다.",
        "Work24는 보조 reference/enrichment 성격으로 분리했으며 main job posting source로 적재하지 않았습니다.",
        "n8n workflow automation, monitoring, notification delivery는 현재 구현 범위가 아닙니다.",
        "local review dashboard는 portfolio review용이며 운영 채용 서비스가 아닙니다.",
        "mock 데이터 검증은 파이프라인 구조 검증이지 실제 채용 시장 커버리지 검증이 아닙니다.",
      ],
      linkNote: "GitHub README, VERIFY.md, docs/architecture.md, local validation evidence에서 검증 경로와 미검증 범위를 함께 확인할 수 있습니다.",
    },
    focusPoints: [
      "live 서비스 주장이 아니라 mock/local boundary 안에서 검증 가능한 채용 데이터 흐름으로 범위 재정의",
      "raw loading, 5 analytics views, 7 SQL tests, local review dashboard를 한 검증 루프로 연결",
      "Saramin live API 운영, production ingestion, monitoring, notification delivery 미구현 범위를 문서에 명확히 분리",
    ],
    links: [
      {
        label: "GitHub 저장소",
        href: "https://github.com/dffxonnb-cyber/job-signal-pipeline",
        type: "secondary",
      },
    ],
    sortOrder: 8,
    caseStudySlugs: ["pipeline-validation-design", "turn-analysis-into-a-decision-tool"],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "Job Signal Pipeline은 채용 공고 데이터를 live 서비스처럼 운영했다고 주장하는 프로젝트가 아니라, mock 응답 기반으로 수집·적재·모델링·검증·대시보드 조회 경로를 확인한 local validation pipeline v1입니다.",
          "핵심 검증 경로는 Saramin mock ingestion → PostgreSQL raw loading → analytics SQL views → SQL tests → local review dashboard입니다.",
        ],
      },
      {
        title: "검증 흐름",
        paragraphs: [
          "`scripts/validate_sql_models.py`는 SQL migrations, analytics models, mock ingestion loading, analytics previews, SQL tests를 한 번에 실행해 데이터 품질과 분석 뷰 연결을 확인합니다.",
          "local review dashboard는 live API를 직접 호출하지 않고 PostgreSQL analytics views를 읽기 때문에, 수집과 분석/시각화 경계를 분리해 검토할 수 있습니다.",
        ],
      },
      {
        title: "Scope and Limitations",
        paragraphs: [
          "Saramin live API 호출, production ingestion schedule, monitoring, notification delivery는 현재 검증 범위에 포함하지 않았습니다.",
          "이 프로젝트의 의미는 live 채용 서비스 운영이 아니라, 외부 API 제약을 분리하고 검증 가능한 SQL 중심 데이터 파이프라인 구조를 끝까지 연결한 데 있습니다.",
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
    stack: ["Python", "pandas", "Static HTML/CSS/JS", "GitHub Pages", "GitHub Actions"],
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
        dataTypes: ["seed 고정 synthetic 주문 데이터", "사용자 데이터", "세션 데이터"],
        process: [
          "월별 주문 수와 완료 주문 수 흐름 정리",
          "카테고리·진입 페이지·디바이스·이탈 페이지 기준으로 전환 병목 분해",
          "분석 결과를 웹 대시보드와 A/B 테스트 설계안으로 연결",
        ],
        metrics: ["주문 완료율", "진입 페이지별 구매 전환율", "디바이스별 구매 전환율", "연령대별 이탈률"],
      },
      limitations: [
        "seed 고정 synthetic dataset 기반이라 실제 서비스 로그나 production behavior simulation을 대체하지는 못합니다.",
        "세션 단위 데이터라 퍼널 전체를 이벤트 수준으로 추적하는 데 한계가 있습니다.",
        "A/B 테스트는 제안 단계이며 실제 유의성 검정은 포함되지 않았습니다.",
        "CI는 static dashboard artifact와 CSV schema/key metric consistency를 확인하며 browser visual regression은 포함하지 않습니다.",
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
    sortOrder: 7,
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
