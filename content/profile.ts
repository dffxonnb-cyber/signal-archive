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
    "겉으로 보이는 숫자보다 먼저 확인해야 할 위험 신호와 의사결정 구조를 짚는 데이터 분석가입니다.",
  summary: [
    "공공데이터, 상권 데이터, CRM 데이터처럼 형태가 다른 데이터를 하나의 판단 구조로 재정리하는 작업을 강점으로 삼고 있습니다.",
    "보기 좋은 결과를 빠르게 만드는 것보다, 먼저 질문을 다시 세우고 검증 가능한 방식으로 끝까지 연결하는 태도를 더 중요하게 생각합니다.",
  ],
  strengths: [
    "문제 정의",
    "구조 설계",
    "검증 중심 태도",
    "위험 신호 포착",
    "end-to-end 분석 수행력",
  ],
  keywords: [
    "구조 설계",
    "위험 신호 포착",
    "문제 정의",
    "end-to-end 분석",
    "검증 중심 태도",
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
      title: "언어 / 환경",
      items: ["Python", "SQL", "TypeScript", "Next.js", "Jupyter Notebook"],
    },
    {
      title: "분석 역량",
      items: [
        "데이터 전처리",
        "EDA",
        "분석 파이프라인 설계",
        "도메인 기반 인사이트 도출",
        "리스크 판단 기준 설계",
        "공간 데이터 분석",
      ],
    },
    {
      title: "구현 / 결과물",
      items: ["웹 기반 결과 구현", "프로젝트 문서화", "리포트/README 구조화"],
    },
  ],
};
