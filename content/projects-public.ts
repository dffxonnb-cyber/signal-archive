import type { Project } from "../types/content";

import { getProjectPublicStatusEvidence } from "./project-public-status";
import { projects as sourceProjects } from "./projects-v2";

const REDVEIL_SLUG = "seoul-storefront-redveil";
const LH_SLUG = "lh-traffic-safety-analysis";
const LEGACY_MOBILE_HOME = "/evidence/redveil-v2-mobile-home-2026-07-12.svg";

function syncRedveilEvidence(project: Project): Project {
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
}

function syncLhCanonicalScope(project: Project): Project {
  if (project.slug !== LH_SLUG) {
    return project;
  }

  const signalCaseStudy = project.signalCaseStudy
    ? {
        ...project.signalCaseStudy,
        thesis:
          "공간 좌표 포함 Random Forest 회귀로 연속 위험 신호를 산출하고, 별도 Random Forest 분류 기반 LORO로 지역 전이 가능성을 검증한 뒤, 공개 RiskScore_A_norm_grid 기준 Top-20을 현장 검토 순서로 정리한 공간 의사결정 사례입니다.",
        flow: [
          "4개 기존 시·구",
          "100m grid",
          "RF regression risk signal",
          "pred_risk / rank_desc",
          "separate LORO classifier",
          "public review score",
          "grid_rank",
          "Top-k field review",
        ],
        sections: project.signalCaseStudy.sections.map((section) => {
          if (section.label === "03 Modeling Logic") {
            return {
              ...section,
              title: "회귀 위험 신호와 legacy 명칭을 분리",
              description:
                "운영용 연속 위험 신호는 공간 좌표를 포함한 RandomForestRegressor가 산출하며, pred_risk와 rank_desc를 모델 출력으로 사용합니다.",
              points: ["기본 target은 acc_count", "GRF·GWRF는 호환을 위해 남은 legacy label"],
            };
          }

          if (section.label === "04 Validation") {
            return {
              ...section,
              title: "별도 분류 LORO로 지역 전이 가능성 검증",
              description:
                "LORO AUC와 Top-10% Lift는 위험 점수 생성기가 아니라, 사고 발생 여부를 대상으로 한 별도 Random Forest 분류 검증 결과입니다.",
              points: ["Mean AUC 0.8604 · Worst 0.7979", "Mean Top-10% Lift 4.39x"],
            };
          }

          if (section.label === "05 Risk Ranking") {
            return {
              ...section,
              title: "공개 점수 기준 Top-k 검토표",
              description:
                "공개 최종 검토 순위는 RiskScore_A_norm_grid와 grid_rank를 기준으로 하며, 모델 출력에서 공개 점수까지의 전체 비공개 데이터 lineage는 별도 경계로 둡니다.",
              points: ["public_top20_priority.csv와 대응 SVG", "full model-to-public-score lineage는 needs confirmation"],
            };
          }

          if (section.label === "07 Limitations") {
            return {
              ...section,
              points: [
                "full model-to-public-score lineage·fold/run 원본·Dashboard URL은 needs confirmation",
                "실제 현장 점검·시설 설치·사고 감소 효과는 not available",
              ],
            };
          }

          return section;
        }),
      }
    : project.signalCaseStudy;

  return {
    ...project,
    summary:
      "100m 격자 단위로 공간 좌표 포함 Random Forest 회귀 위험 신호를 산출하고\n별도 Random Forest 분류 LORO로 지역 전이 가능성을 검증한 뒤\n공개 점수 기준 Top-20을 현장 검토 우선순위로 정리한 공간 분석입니다.",
    outcome:
      "4개 기존 시·구의 99,323개 학습 격자에서 공간 좌표 포함 Random Forest 회귀 위험 신호를 산출하고, 별도 분류 LORO로 전이 가능성을 검증했습니다. 하남교산 770개 대상 격자의 공개 검토 순위는 RiskScore_A_norm_grid와 grid_rank 기준으로 정리했습니다.",
    supportingLine:
      "회귀 위험 신호·별도 LORO 검증·공개 검토 점수의 경계를 분리한 100m 격자 공간 분석",
    review: {
      decisionQuestion: "사고 이력이 부족한 신도시에서 어떤 100m 격자를 먼저 현장 검토해야 하는가?",
      myRole:
        "100m 격자 설계, 공간 좌표 포함 Random Forest 회귀 위험 신호 산출, 별도 분류 LORO 검증, 공개 Top-k 검토표와 evidence boundary 정리",
      evidence:
        "99,323 training grids → 770 target grids · pred_risk/rank_desc · public RiskScore_A_norm_grid/grid_rank · LORO AUC 0.8604 · Top-10% Lift 4.39x",
      deliverable:
        "모델 출력, 전이 검증, 공개 검토 점수를 구분한 고위험 100m 격자 Top-20 현장 검토 우선순위 자료",
      hiringSignal:
        "공간 모델 출력과 검증 지표, 공개 가능한 최종 점수의 계보를 구분하고 결과를 현장 검토 언어로 번역할 수 있음",
    },
    decisionMoment: {
      originalQuestion: "사고가 많은 곳은 어디인가?",
      reframedQuestion: "사고 이력이 부족한 하남교산에서 어떤 100m 격자를 먼저 현장 검토해야 하는가?",
      keyEvidence:
        "RF regression pred_risk/rank_desc · separate LORO classifier AUC 0.8604 / Lift 4.39x · public RiskScore_A_norm_grid/grid_rank",
      finalDeliverable:
        "공개 점수 기준 Top-20 검토표, 100m 위험 지도, 성능·검증 요약, evidence audit와 field-review handoff",
      proves:
        "모델 생성·전이 검증·공개 결과의 경계를 분리하면서 공간 위험 신호를 검토 우선순위로 전환하는 역량",
    },
    cardBrief: {
      problem:
        "사고 이력이 적은 신도시는 과거 사고 건수와 행정구역 평균만으로 내부의 세부 위험 구간을 먼저 고르기 어려움.",
      method:
        "공간 좌표 포함 Random Forest 회귀로 연속 위험 신호를 산출하고, 별도 분류 LORO로 전이 가능성을 검증한 뒤 공개 RiskScore_A_norm_grid 기준 검토 순위를 구성함.",
      output: [
        "pred_risk / rank_desc 모델 출력",
        "LORO AUC / Top-10% Lift 검증",
        "RiskScore_A_norm_grid / grid_rank 공개 순위",
        "public-safe Top-20과 evidence audit",
      ],
    },
    evidencePoints: [
      {
        label: "정본 상태",
        value: "2026-07-15 frozen / canonical · 추가 모델·점수 확장 없이 공개 주장 범위 고정",
      },
      {
        label: "운영용 위험 모델",
        value: "공간 좌표 포함 RandomForestRegressor · 기본 target acc_count · output pred_risk / rank_desc",
      },
      {
        label: "전이 검증",
        value: "별도 Random Forest 분류 LORO · Mean AUC 0.8604 · Worst 0.7979 · Top-10% Lift 4.39x",
      },
      {
        label: "공개 최종 순위",
        value: "RiskScore_A_norm_grid / grid_rank 기준 public Top-20 검토표와 대응 SVG evidence",
      },
      {
        label: "Lineage 경계",
        value: "pred_risk에서 RiskScore_A_grid까지의 full private-data lineage는 needs confirmation",
      },
      {
        label: "결과 경계",
        value: "시설 설치 결정·현장 점검 결과·사고 감소 효과는 검증되지 않았으며 not available로 관리",
      },
    ],
    signalCaseStudy,
    detailBrief: {
      ...project.detailBrief,
      dataMethod: {
        dataTypes: [
          "4개 기존 시·구 사고·교통·공간 데이터",
          "100m 격자와 중심 좌표",
          "하남교산 대상 격자와 공개 review score",
        ],
        process: [
          "사고·교통·공간 변수를 100m 격자 단위로 통합",
          "공간 좌표 포함 RandomForestRegressor로 연속 위험 신호 pred_risk와 rank_desc 산출",
          "별도 Random Forest 분류 LORO로 지역 전이 구분력과 상위 위험 후보 집중도 검증",
          "공개 RiskScore_A_norm_grid와 grid_rank 기준으로 하남교산 Top-20 검토 순위 구성",
          "성능 카드·검증 요약·위험 지도·Top-20 검토표·evidence audit로 공개 증거 경로 구성",
        ],
        metrics: [
          "Mean LORO AUC 0.8604",
          "Top-10% Lift 4.39x",
          "Worst holdout AUC 0.7979",
          "Monte Carlo mean Jaccard 0.503",
        ],
      },
      limitations: [
        "공개 저장소에는 full retraining부터 RiskScore_A_grid까지의 전체 private-data lineage가 없어 pred_risk와 공개 최종 점수가 동일 실행에서 직접 이어졌다고 주장하지 않습니다.",
        "fold-level LORO 원본과 run-level Monte Carlo 원본은 공개되지 않아 요약 지표 범위로 제한합니다.",
        "시설 패키지·추천 사유 최종 결과와 검증 가능한 공개 Dashboard URL은 needs confirmation입니다.",
        "모델 출력과 공개 Top-20은 시설 설치 결정이 아니라 현장 점검 우선순위를 위한 위험 신호입니다.",
        "실제 현장 점검, 시설 설치, 사고 감소 사후 검증 결과는 없습니다.",
        "R²=0.006은 legacy 점수와 보조 입지 점수 사이의 낮은 선형 설명력 진단이며 성능 또는 순위 일치 근거가 아닙니다.",
      ],
      linkNote:
        "GitHub canonical scope, README, portfolio case study, evidence audit에서 모델 출력·전이 검증·공개 점수와 needs confirmation 경계를 확인할 수 있습니다.",
    },
    focusPoints: [
      "공간 좌표 포함 Random Forest 회귀로 연속 위험 신호를 산출",
      "별도 Random Forest 분류 LORO로 지역 전이 가능성을 검증",
      "공개 검토 점수와 full model-to-public-score lineage 경계를 분리",
      "결과를 사고 감소 예측이 아니라 제한된 현장 조사 자원의 우선순위로 번역",
    ],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "이 프로젝트는 사고 이력이 부족한 하남교산에서 어떤 100m 격자를 먼저 현장 점검해야 하는지 설명하는 공간 위험 신호 분석입니다.",
          "운영용 회귀 위험 신호, 별도 LORO 전이 검증, 공개 최종 검토 점수를 서로 다른 근거 층으로 분리했습니다.",
        ],
      },
      {
        title: "접근 방식",
        paragraphs: [
          "공간 좌표 포함 RandomForestRegressor가 pred_risk와 rank_desc를 산출하고, 별도 Random Forest 분류 LORO가 AUC와 Top-10% Lift로 지역 전이 가능성을 검증합니다.",
          "하남교산 공개 Top-20은 RiskScore_A_norm_grid와 grid_rank 기준이며, 모델 출력부터 공개 점수까지의 전체 비공개 데이터 lineage는 needs confirmation으로 구분합니다.",
        ],
      },
      {
        title: "포트폴리오 관점의 의미",
        paragraphs: [
          "모델 성능만 강조하지 않고, 어떤 결과가 모델 출력인지, 어떤 지표가 검증용인지, 어떤 공개 점수가 실제 검토표에 쓰였는지를 분리해 과장 없이 설명한 공간 의사결정 프로젝트입니다.",
        ],
      },
    ],
  };
}

const PUBLIC_STATUS_LABELS = new Set(["공개 접근", "저장소 상태", "검증 상태", "범위 상태"]);

function syncProjectPublicStatus(project: Project): Project {
  const existingEvidence = (project.evidencePoints ?? []).filter(
    (item) => !PUBLIC_STATUS_LABELS.has(item.label),
  );

  return {
    ...project,
    evidencePoints: [
      ...getProjectPublicStatusEvidence(project.slug),
      ...existingEvidence,
    ],
  };
}

export const projects = sourceProjects
  .map(syncRedveilEvidence)
  .map(syncLhCanonicalScope)
  .map(syncProjectPublicStatus);

export const featuredProjects = projects
  .filter((project) => project.status === "featured")
  .sort((left, right) => left.sortOrder - right.sortOrder);
