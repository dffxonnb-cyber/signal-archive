import type { Project } from "@/types/content";

import { projects as sourceProjects } from "./projects";

const REDVEIL_V2_URL =
  "https://dffxonnb-cyber.github.io/Seoul-Storefront-Redveil/v2/";
const REDVEIL_REPOSITORY_URL =
  "https://github.com/dffxonnb-cyber/Seoul-Storefront-Redveil";
const REDVEIL_RELEASE_EVIDENCE_URL =
  "https://github.com/dffxonnb-cyber/Seoul-Storefront-Redveil/blob/main/docs/evidence/v2-release-2026-07-12.md";

function upgradeRedveil(project: Project): Project {
  if (project.slug !== "seoul-storefront-redveil") return project;

  return {
    ...project,
    summary:
      "서울 자치구를 지도에서 선택하고 리스크 점수·보류 사유·대체 후보를 확인한 뒤\n매물 검토, 3분 진단, 후보 비교, 구별 리포트와 판단 메모까지 이어지는\n지도 기반 상가 매입 리스크 분석 제품입니다.",
    cardTools: ["Python", "Pandas", "GeoJSON", "Static JS", "GitHub Pages"],
    stack: [
      "Python",
      "pandas",
      "GeoJSON",
      "SVG boundary map",
      "Static HTML/CSS/JavaScript",
      "URL query + localStorage",
      "GitHub Pages",
      "GitHub Actions",
      "Playwright Chromium E2E",
    ],
    coreTags: [
      "서울 25개 자치구",
      "지도 기반 리스크",
      "보류 사유",
      "대체 후보",
      "Decision Artifact",
    ],
    badges: ["Flagship", "V2 Official", "Spatial UX", "Decision Artifact"],
    context:
      "상권 데이터가 많아도 매입 전 검토 단계에서는 무엇 때문에 멈추고, 어떤 후보와 비교하며, 무엇을 다시 확인해야 하는지가 한 흐름으로 보이지 않습니다. Redveil V2는 서울 자치구 경계 지도에서 출발해 가격 부담·거래 유동성·변동성·상권 과밀 신호를 보류 사유와 다음 확인 항목으로 연결합니다.",
    outcome:
      "서울 25개 자치구와 12,074건의 공개 거래 범위를 지도 홈, 매물 검토, 3분 진단, 후보 비교, 구별 리포트로 통합했습니다. 선택 자치구는 화면 사이에서 유지되며 Hold Memo와 Comparison Memo를 복사·저장 가능한 판단 기록으로 제공합니다.",
    supportingLine:
      "서울 지도에서 보류 사유, 대체 후보와 판단 메모까지 이어지는 상가 리스크 제품",
    review: {
      decisionQuestion:
        "이 매물을 바로 사기 전에 무엇 때문에 멈추고, 어떤 후보와 비교하며, 무엇을 다시 확인해야 하는가?",
      myRole:
        "문제 정의, 리스크 축 설계, 거래·상권 데이터 구조화, GeoJSON 지도 UX, V2 공통 화면·상태 연결, public-safe 배포와 검증",
      evidence:
        "서울 25개 자치구 · 행정동 427개 · 상권 1,520개 · 거래 12,074건 · 5개 연결 화면 · 360~768px 반응형 검증",
      deliverable:
        "지도 선택부터 매물 검토·3분 진단·후보 비교·구별 리포트·판단 메모까지 연결한 공개 V2 제품",
      hiringSignal:
        "공간 데이터를 제품 화면으로 번역하고, 분석 신호를 추천이 아닌 보류 기준·대체 후보·재확인 항목으로 구조화할 수 있음",
    },
    decisionMoment: {
      originalQuestion: "어떤 상권이 좋아 보이는가?",
      reframedQuestion:
        "매입 전에 무엇 때문에 멈추고 어떤 대체 후보와 비교해야 하는가?",
      keyEvidence:
        "서울 25개 자치구 · 행정동 427개 · 상권 1,520개 · 거래 12,074건 · 5개 V2 화면",
      finalDeliverable:
        "자치구 경계 지도, 보류 사유, 매물 검토, 빠른 진단, 후보 비교, 구별 리포트와 판단 메모를 연결한 정적 웹 제품",
      proves:
        "공간·거래 분석 결과를 검토 가능한 사용자 흐름과 안전한 주장 범위를 가진 제품으로 전환하는 역량",
    },
    cardBrief: {
      problem:
        "상가 매입 후보를 볼 때 가격 부담, 거래 둔화, 변동성과 과밀 신호가 여러 자료에 흩어져 있어 보류 이유와 비교 기준을 한 번에 읽기 어려움.",
      method:
        "서울 자치구 GeoJSON과 공개 배포 데이터를 결합하고, 선택 구 상태를 지도 홈·매물 검토·3분 진단·후보 비교·구별 리포트 사이에서 유지함.",
      output: [
        "서울 25개 자치구 리스크 지도",
        "매물 검토와 Hold Memo",
        "3분 진단과 리스크 축",
        "후보 비교와 Comparison Memo",
        "구별 리포트와 다음 확인 항목",
      ],
    },
    evidencePoints: [
      {
        label: "공식 제품",
        value: "GitHub Pages `/v2/`를 대표 데모로 사용하고 V1은 Legacy 화면으로 보존",
      },
      {
        label: "데이터 범위",
        value: "서울 25개 자치구 · 행정동 427개 · 상권 1,520개 · 거래 12,074건",
      },
      {
        label: "제품 흐름",
        value: "지도 선택 → 매물 검토 → 3분 진단 → 후보 비교 → 구별 리포트 → 판단 메모",
      },
      {
        label: "상태 연결",
        value: "URL query와 localStorage로 선택 자치구를 다섯 화면과 새로고침 뒤에도 유지",
      },
      {
        label: "반응형 검증",
        value: "360 · 390 · 430 · 768px와 데스크톱에서 가로 넘침, 드로어와 터치 영역 자동 검사",
      },
      {
        label: "복구 경계",
        value: "잘못된 주소, 저장값 손상, payload·GeoJSON 연결 실패를 안내와 복구 상태로 처리",
      },
      {
        label: "주장 범위",
        value: "투자 추천·수익률 예측·개별 매물 정확성·법률·세무·금융·중개 자문을 제공하지 않음",
      },
    ],
    signalCaseStudy: {
      signalType: "매입 전 보류 신호",
      title: "서울 지도에서 판단 메모까지 이어지는 V2 검토 흐름",
      thesis:
        "자치구 경계 지도에서 리스크 신호를 확인하고, 동일한 선택 맥락을 매물 검토·진단·후보 비교·리포트로 이어 보류 사유와 다음 확인 항목을 남기는 공간 의사결정 제품입니다.",
      chips: [
        "25 Districts",
        "GeoJSON",
        "SVG Map",
        "12,074 Transactions",
        "State Continuity",
        "Responsive QA",
        "Decision Memo",
      ],
      flow: [
        "District map",
        "Risk score",
        "Pause reasons",
        "Property review",
        "Quick assessment",
        "Candidate compare",
        "District report",
        "Decision memo",
      ],
      evidenceTitle: "Redveil V2 공식 제품 화면",
      evidenceDescription:
        "2026-07-12 릴리스 기준 PC·모바일 지도 홈과 매물 검토·후보 비교 결과를 공개 화면으로 확인합니다.",
      evidence: [
        {
          src: "/evidence/redveil-v2-desktop-home-2026-07-12.svg",
          alt: "Redveil V2 데스크톱 지도 홈에서 서울 자치구 경계 지도와 선택 구 리스크를 보여주는 화면",
          caption: "V2 지도 홈 · 서울 자치구 경계와 선택 구 리스크",
          note: "지도 선택, 리스크 점수, 핵심 위험 사유와 대체 후보가 한 화면에서 이어집니다.",
          width: 1440,
          height: 2932,
        },
        {
          src: "/evidence/redveil-v2-mobile-home-2026-07-12.svg",
          alt: "390픽셀 모바일 화면에서 Redveil V2 지도 홈이 한 열로 표시되는 화면",
          caption: "모바일 지도 홈 · 390px 반응형 검증",
          note: "드로어 내비게이션과 지도·리스크 카드가 페이지 가로 넘침 없이 배치됩니다.",
          width: 390,
          height: 4891,
        },
        {
          src: "/evidence/redveil-v2-property-review-2026-07-12.svg",
          alt: "Redveil V2 매물 검토 화면에서 서초동 매물 조건과 보류 판단 메모를 보여주는 화면",
          caption: "매물 검토 · 보류 사유와 Hold Memo",
          note: "매물 조건을 선택 자치구 맥락과 결합해 저장 가능한 판단 기록으로 변환합니다.",
          width: 1440,
          height: 4383,
        },
        {
          src: "/evidence/redveil-v2-candidate-compare-2026-07-12.svg",
          alt: "Redveil V2 후보 비교 화면에서 세 자치구의 리스크 축과 비교 메모를 보여주는 화면",
          caption: "후보 비교 · 동일 리스크 축과 Comparison Memo",
          note: "보류 후보와 대체 후보를 같은 기준으로 비교하고 다음 확인 항목을 정리합니다.",
          width: 1440,
          height: 3627,
        },
      ],
      sections: [
        {
          label: "01 Problem",
          title: "좋아 보이는 이유보다 멈춰야 할 이유를 먼저 확인",
          description:
            "가격·거래·상권 자료가 흩어져 있으면 매입 전 반대 근거와 재확인 항목을 놓치기 쉽습니다.",
          points: ["매수·매도 추천을 제공하지 않음", "보류 사유와 비교 기준을 먼저 배치"],
        },
        {
          label: "02 Spatial Entry",
          title: "서울 자치구 경계 지도를 제품의 출발점으로 사용",
          description:
            "25개 자치구를 실제 경계로 선택하고 선택 구 리스크를 지도와 요약 패널에서 함께 읽습니다.",
          points: ["GeoJSON → SVG 경계 지도", "별도 상용 지도 API 없이 정적 배포"],
        },
        {
          label: "03 Connected Flow",
          title: "선택 자치구를 다섯 화면에 연결",
          description:
            "지도에서 선택한 구가 매물 검토, 3분 진단, 후보 비교와 구별 리포트에 그대로 이어집니다.",
          points: ["URL query + localStorage", "새로고침·직접 진입·잘못된 코드 복구"],
        },
        {
          label: "04 Decision Artifact",
          title: "분석 결과를 복사·저장 가능한 판단 기록으로 변환",
          description:
            "점수만 보여주지 않고 보류 이유, 대체 후보, 전문가 검토 전 확인 항목을 메모로 남깁니다.",
          points: ["Hold Memo", "Comparison Memo", "다음 확인 항목"],
        },
        {
          label: "05 Product QA",
          title: "모바일·오류 상태까지 제품 범위로 검증",
          description:
            "화면 너비, 드로어, 입력 크기와 데이터·저장·경계 지도 실패 상태를 자동 검사합니다.",
          points: ["360·390·430·768px", "Python·smoke·Chromium E2E"],
        },
      ],
    },
    detailBrief: {
      problem: {
        what:
          "상권 분석 결과가 많아도 매입 전 검토 단계에서는 무엇 때문에 멈추고 어떤 후보와 비교해야 하는지 한 흐름으로 보이지 않았습니다.",
        why:
          "검토 도구는 공간 맥락, 리스크 사유, 대체 후보와 다음 확인 항목이 같은 선택 상태 안에서 연결되어야 실제 판단 순서를 지원할 수 있기 때문입니다.",
      },
      dataMethod: {
        dataTypes: [
          "서울 자치구 GeoJSON",
          "공개 상권·수요 데이터",
          "상업용 부동산 거래 데이터",
          "public-safe V2 payload",
        ],
        process: [
          "리스크 축과 자치구 비교 데이터를 공개 배포 payload로 정리",
          "서울 25개 자치구 경계를 SVG 지도에 렌더링",
          "지도 선택을 검토·진단·비교·리포트 화면 상태와 연결",
          "보류 사유와 대체 후보를 Hold Memo·Comparison Memo로 변환",
          "반응형·오류 복구·정적 배포 흐름을 CI에서 검증",
        ],
        metrics: [
          "25개 자치구",
          "427개 행정동",
          "1,520개 상권",
          "12,074건 거래",
          "5개 연결 화면",
        ],
      },
      limitations: [
        "공개 데이터를 활용한 포트폴리오 제품이며 투자 자문·매수·매도 추천·수익률 예측이 아닙니다.",
        "개별 건물의 공실, 임대차, 권리금, 관리비와 법적 제약을 정확히 판정하지 않습니다.",
        "실시간 데이터나 개별 매물 정확성을 보장하지 않습니다.",
        "실제 의사결정에는 최신 실거래·호가, 현장 조사와 법률·세무·금융·중개 전문가 검토가 필요합니다.",
        "V1은 Legacy 화면으로 보존하며 공식 대표 제품과 최신 기능 흐름은 V2입니다.",
      ],
      linkNote:
        "Redveil V2 공식 데모와 GitHub 릴리스 증거에서 제품 흐름, 화면 캡처, 데이터 범위와 검증 경계를 확인할 수 있습니다.",
    },
    focusPoints: [
      "서울 자치구 GeoJSON을 정적 SVG 지도와 제품 선택 흐름으로 구현",
      "리스크 점수를 보류 사유·대체 후보·다음 확인 항목으로 번역",
      "지도 선택을 다섯 화면과 판단 메모에 연결",
      "360~768px 반응형과 데이터·저장·지도 연결 실패를 자동 검증",
      "V2를 공식 대표 제품으로 포장하고 V1을 Legacy로 분리",
    ],
    links: [
      {
        label: "Redveil V2 공식 데모",
        href: REDVEIL_V2_URL,
        type: "primary",
      },
      {
        label: "V2 릴리스 증거",
        href: REDVEIL_RELEASE_EVIDENCE_URL,
        type: "secondary",
      },
      {
        label: "GitHub 저장소",
        href: REDVEIL_REPOSITORY_URL,
        type: "secondary",
      },
    ],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "Redveil V2는 서울 소형 상가 매입 전 검토를 위한 지도 기반 리스크 분석 제품입니다.",
          "서울 자치구 경계 지도에서 출발해 보류 사유, 매물 조건, 빠른 진단, 대체 후보 비교와 구별 리포트를 하나의 선택 맥락 안에서 연결합니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "공개 거래·상권 데이터와 자치구 GeoJSON을 정적 배포 payload로 구성하고, 지도 선택을 URL query와 브라우저 저장 상태로 다섯 화면에 전달했습니다.",
          "리스크 점수 자체보다 왜 멈춰야 하는지, 무엇과 비교해야 하는지, 어떤 항목을 다시 확인해야 하는지가 먼저 읽히도록 판단 메모를 설계했습니다.",
        ],
      },
      {
        title: "V2 공식 제품 경계",
        paragraphs: [
          "공식 대표 데모는 GitHub Pages의 `/v2/`이며, V1은 초기 설명형 인터페이스를 보존한 Legacy 버전입니다.",
          "V2는 투자 추천이나 개별 매물 정답을 제공하지 않고 검토 우선순위와 전문가 검토 전 확인 항목을 정리하는 포트폴리오 제품입니다.",
        ],
      },
      {
        title: "포트폴리오 관점의 의미",
        paragraphs: [
          "공간·거래 분석을 지도 UX, 상태 연결, 반응형, 오류 복구, 배포 증거까지 포함한 완결된 제품으로 전환한 대표 사례입니다.",
        ],
      },
    ],
  };
}

export const projects: Project[] = sourceProjects.map(upgradeRedveil);
