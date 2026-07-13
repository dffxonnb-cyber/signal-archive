import { projects as sourceProjects } from "./projects-v2";

const REDVEIL_SLUG = "seoul-storefront-redveil";
const LEGACY_MOBILE_HOME = "/evidence/redveil-v2-mobile-home-2026-07-12.svg";

export const projects = sourceProjects.map((project) => {
  if (project.slug !== REDVEIL_SLUG || !project.signalCaseStudy?.evidence) {
    return project;
  }

  const evidence = project.signalCaseStudy.evidence.flatMap((item) => {
    if (item.src !== LEGACY_MOBILE_HOME) {
      return [item];
    }

    return [
      {
        src: "/evidence/redveil-v2-mobile-map-2026-07-13.svg",
        alt: "390픽셀 모바일 화면에서 Redveil V2 서울 자치구 리스크 지도와 선택 구 상태를 보여주는 화면",
        caption: "모바일 지도 탐색 · 자치구 선택과 위험 신호",
        note: "실제 서울 경계 지도에서 자치구를 선택하고 위험 등급과 핵심 리스크를 같은 흐름으로 확인합니다.",
        width: 390,
        height: 844,
      },
      {
        src: "/evidence/redveil-v2-mobile-report-2026-07-13.svg",
        alt: "390픽셀 모바일 화면에서 Redveil V2 구별 리포트와 결정 메모를 보여주는 화면",
        caption: "모바일 구별 리포트 · 위험 사유와 결정 메모",
        note: "지도 탐색 결과가 구별 위험 설명, 다음 확인 항목과 매입 전 결정 메모로 이어집니다.",
        width: 390,
        height: 844,
      },
    ];
  });

  return {
    ...project,
    signalCaseStudy: {
      ...project.signalCaseStudy,
      evidenceTitle: "Redveil V2 최종 제품 화면",
      evidenceDescription:
        "2026-07-13 최종 V2 기준으로 데스크톱 지도, 모바일 지도·구별 리포트, 매물 검토와 후보 비교 흐름을 공개 화면에서 확인합니다.",
      evidence,
    },
  };
});

export const featuredProjects = projects
  .filter((project) => project.status === "featured")
  .sort((left, right) => left.sortOrder - right.sortOrder);
