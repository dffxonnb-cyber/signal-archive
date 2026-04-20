import type { Profile } from "@/types/content";

export const profile: Profile = {
  name: "최다빈",
  primaryRoles: ["데이터 분석가", "공간 데이터 분석가"],
  secondaryRoles: ["비즈니스 데이터 분석가", "마케팅/CRM 데이터 분석가"],
  industries: ["공공데이터", "상권/부동산", "리테일", "CRM", "커머스", "스포츠"],
  avoidSignals: [
    "단순 운영 리포트 작성 위주의 역할",
    "반복 보고 업무가 중심인 포지션",
    "툴만 다루는 사람처럼 보이는 방향",
    "시각화만 하는 사람처럼 보이는 방향",
  ],
  headline:
    "도시, 상권, 사용자 데이터를 의사결정용 분석 구조와 결과물로 정리하는 데이터 분석가입니다.",
  summary: [
    "공공데이터, 상권 데이터, CRM 데이터처럼 성격이 다른 데이터를 목적에 맞는 분석 단위와 지표로 다시 정리하는 작업을 강점으로 삼고 있습니다.",
    "채용 관점에서는 문제 정의 이후의 분석 구조 설계, 결과 해석, 문서와 웹 결과물 전달까지 한 흐름으로 수행할 수 있다는 점을 보여주는 데 초점을 두고 있습니다.",
  ],
  strengths: [
    "문제 정의",
    "분석 구조 설계",
    "지표 설계와 검증",
    "도메인 해석 번역력",
    "end-to-end 결과물 구현",
  ],
  keywords: [
    "분석 구조 설계",
    "지표 설계",
    "문제 정의",
    "end-to-end 분석",
    "결과물 전달",
  ],
  contactLinks: [
    {
      label: "GitHub",
      href: "https://github.com/dffxonnb-cyber",
      displayText: "github.com/dffxonnb-cyber",
    },
    {
      label: "Email",
      href: "mailto:dffxonnb@gmail.com",
      displayText: "dffxonnb@gmail.com",
    },
  ],
  skillGroups: [
    {
      title: "SQL",
      summary: "조회와 집계를 넘어, 분석에 바로 사용할 수 있는 테이블 구조와 기본 지표를 정리하는 데 사용합니다.",
      items: [
        "조건 필터링",
        "집계",
        "GROUP BY",
        "JOIN",
        "분석용 테이블 구성",
        "기본적인 지표 산출",
      ],
    },
    {
      title: "Python",
      summary: "분석 흐름의 중심 도구로 사용하며, 전처리부터 탐색과 기본 검증까지 Jupyter 기준으로 정리합니다.",
      items: [
        "pandas 기반 전처리",
        "EDA",
        "결측치/이상치 확인",
        "시각화",
        "간단한 통계 분석",
        "Jupyter Notebook 기반 분석 흐름 정리",
      ],
    },
    {
      title: "BI / Visualization",
      summary: "결과를 보기 좋게 꾸미기보다, 의사결정에 필요한 비교와 요약이 먼저 읽히도록 구성합니다.",
      items: ["Tableau 대시보드", "지표 요약", "의사결정용 차트 구성", "분석 결과 스토리텔링"],
    },
    {
      title: "GIS / Spatial Analysis",
      summary: "도시·공공데이터 맥락에서 지역 단위 비교와 우선순위 판단이 가능하도록 공간 정보를 해석합니다.",
      items: [
        "지역 단위 데이터 분석",
        "공간 데이터 시각화",
        "취약 지역 또는 위험 구역 우선순위화",
        "공공데이터 기반 입지 분석",
      ],
    },
    {
      title: "Web / Delivery",
      summary: "분석 결과를 코드나 표에서 끝내지 않고, 사용자가 읽을 수 있는 페이지와 문서로 변환합니다.",
      items: [
        "HTML/CSS/JavaScript 기반 결과 페이지 구성",
        "GitHub Pages 또는 Vercel 배포",
        "분석 결과를 사용자가 읽을 수 있는 페이지로 변환",
      ],
    },
  ],
  aiWorkflow: {
    summary:
      "AI-assisted workflow를 활용해 분석 아이디어 구조화, 코드 초안 작성, 디버깅, 문서화를 효율화합니다. 다만 프로젝트의 문제 정의, 지표 설계, 결과 해석, 최종 판단 기준은 직접 검토하고 구성합니다.",
    items: [
      "분석 아이디어를 구조화할 때 AI를 활용",
      "코드 초안 작성 및 디버깅에 AI 활용",
      "SQL/Python 에러 원인 파악에 AI 활용",
      "README, 분석 보고서, 페이지 문구 정리에 AI 활용",
      "반복 작업을 줄이고, 검증과 판단에 더 많은 시간을 쓰기 위한 방식으로 활용",
    ],
    note:
      "AI를 기술 역량의 대체재로 사용하지는 않습니다. 핵심은 문제를 정의하고 분석 방향을 정하고 결과를 검토하는 역할을 직접 수행하는 데 있습니다.",
  },
};
