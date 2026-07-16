import type { Project } from "../types/content";

import { projects as sourceProjects } from "./projects-current";

const DECISIONOPS_REPORT_URL =
  "https://dffxonnb-cyber.github.io/DecisionOps-lab/";
const DECISIONOPS_SCENARIO_MATRIX_URL =
  "https://github.com/dffxonnb-cyber/DecisionOps-lab/blob/main/reports/scenario_matrix.md";
const DECISIONOPS_REPOSITORY_URL =
  "https://github.com/dffxonnb-cyber/DecisionOps-lab";

const PUBLIC_STATUS_LABELS = new Set([
  "공개 접근",
  "저장소 상태",
  "검증 상태",
  "범위 상태",
  "추천 직무",
]);

function upgradeDecisionOps(project: Project): Project {
  if (project.slug !== "decisionops-lab") return project;

  const publicStatusEvidence = (project.evidencePoints ?? []).filter((item) =>
    PUBLIC_STATUS_LABELS.has(item.label),
  );

  const signalCaseStudy = project.signalCaseStudy
    ? {
        ...project.signalCaseStudy,
        title: "1개 지표가 아니라 3개 가드레일과 7개 시나리오로 결정하기",
        thesis:
          "synthetic 제품 이벤트를 SQL mart와 23개 품질 gate로 정리한 뒤 activation evidence를 D7 revisit, refund rate, session activity의 세 가드레일과 함께 읽고, 일곱 시나리오에서 Ship·Retest·Hold·Investigate 결정을 재현하는 분석 의사결정 workflow입니다.",
        chips: [
          "DuckDB SQL",
          "23 Quality Checks",
          "+3.97pp Lift",
          "p=0.000011",
          "3 Guardrails",
          "7 Scenarios",
          "Decision Memo",
          "Public Report",
        ],
        flow: [
          "Synthetic events",
          "SQL staging",
          "Intermediate models",
          "Mart layer",
          "Quality gate",
          "Primary metric",
          "3 guardrails",
          "7-scenario matrix",
          "Decision memo",
          "Reviewer report",
        ],
        sections: [
          {
            label: "01 Problem",
            title: "activation lift만 보고 Ship하지 않기",
            description:
              "주요 지표가 개선되어도 데이터 품질, 재방문, 환불, 사용 활동이 흔들리면 제품 결정을 그대로 밀어붙일 수 없습니다.",
            points: [
              "quality → primary metric → guardrails 순서",
              "좋은 lift도 downstream risk가 있으면 Retest",
            ],
          },
          {
            label: "02 Data Model",
            title: "raw event를 검토 가능한 SQL layer로 분리",
            description:
              "raw users/events/sessions/payments/experiments를 DuckDB raw, staging, intermediate, mart layer로 나누고 reviewer artifact가 mart 결과를 읽도록 구성합니다.",
            points: [
              "mart_experiment_result",
              "mart_decision_summary",
              "mart_segment_performance",
              "mart_retention_cohort",
            ],
          },
          {
            label: "03 Quality Gate",
            title: "실험 해석 전에 23개 품질 검사를 실행",
            description:
              "row count, null, accepted values, referential integrity, duplicate와 experiment balance를 먼저 확인하며 quality_failure는 결과 해석 전에 Investigate로 분기합니다.",
            points: ["23/23 PASS in default case", "quality_failure=Investigate"],
          },
          {
            label: "04 Primary Evidence",
            title: "activation 개선과 통계 근거를 확인",
            description:
              "strong_positive 기본 사례에서 Variant B activation은 30.15%에서 34.12%로 +3.97pp 개선되며 p-value는 0.000011입니다.",
            points: ["A 30.15% → B 34.12%", "+3.97pp", "95% CI +2.14pp~+5.80pp"],
          },
          {
            label: "05 Three Guardrails",
            title: "재방문·환불·세션 활동을 함께 검토",
            description:
              "D7 revisit, refund rate, average sessions를 독립 가드레일로 평가해 activation 개선이 이후 행동이나 비용 신호를 악화시키지 않는지 확인합니다.",
            points: [
              "D7 revisit delta +0.97pp · PASS",
              "refund rate delta -0.02pp · PASS",
              "avg sessions +1.93% · PASS",
            ],
          },
          {
            label: "06 Seven Scenarios",
            title: "가드레일별 실패와 약한 근거를 별도 재현",
            description:
              "strong_positive, guardrail_risk, refund_risk, session_activity_risk, weak_evidence, neutral, quality_failure의 일곱 조건으로 결정 규칙이 한 결과에 고정되지 않았는지 검증합니다.",
            points: [
              "Ship: strong_positive",
              "Retest: 3 guardrail risks + weak_evidence",
              "Hold: neutral",
              "Investigate: quality_failure",
            ],
          },
          {
            label: "07 Decision Artifact",
            title: "결과를 memo·matrix·public report로 남기기",
            description:
              "quality report, experiment result, scenario matrix, decision memo와 GitHub Pages reviewer report를 같은 실행 경로에서 생성합니다.",
            points: ["one-command verification", "machine-readable JSON + reviewer-facing artifacts"],
          },
          {
            label: "08 Boundary",
            title: "synthetic workflow의 주장 범위를 유지",
            description:
              "DecisionOps는 분석·검증·의사결정 설계 역량을 보여주는 synthetic-data workflow이며 실제 사용자 행동, 제품 성과나 production business impact를 증명하지 않습니다.",
            points: ["synthetic data only", "production warehouse or live experiment operation 아님"],
          },
        ],
      }
    : project.signalCaseStudy;

  return {
    ...project,
    summary:
      "synthetic 제품 이벤트를 DuckDB SQL mart, 23개 품질 gate, A/B evidence,\nD7 재방문·환불률·세션 활동의 3개 가드레일과 7개 시나리오로 검토해\nShip·Retest·Hold·Investigate memo/report로 연결한 DecisionOps workflow입니다.",
    role: [
      "raw/staging/intermediate/mart SQL 설계",
      "23개 data quality gate",
      "A/B test evidence",
      "D7·refund·session 3개 guardrail review",
      "7개 scenario decision matrix",
    ],
    stack: [
      "Python",
      "pandas",
      "DuckDB",
      "SQL",
      "SciPy",
      "statsmodels",
      "pytest",
      "GitHub Actions",
      "GitHub Pages",
    ],
    problemTypes: [
      "제품 지표 설계",
      "실험 검토",
      "멀티 가드레일 판단",
      "데이터 품질 검증",
    ],
    coreTags: [
      "SQL Mart",
      "23 Quality Checks",
      "A/B Evidence",
      "3 Guardrails",
      "7 Scenarios",
      "Decision Memo",
      "Synthetic Data",
    ],
    badges: [
      "Featured",
      "Analytics Engineering",
      "Product Analytics",
      "Multi-Guardrail",
      "Scenario Matrix",
    ],
    context:
      "제품 실험은 주요 지표가 좋아졌다는 이유만으로 바로 Ship할 수 없습니다. DecisionOps Lab은 synthetic raw events를 검토 가능한 SQL layer로 정리하고 품질 gate를 먼저 통과시킨 뒤, activation evidence를 D7 revisit·refund rate·session activity와 함께 읽어 의사결정합니다.",
    outcome:
      "raw CSV를 DuckDB raw·staging·intermediate·mart layer로 모델링하고 23개 quality checks를 실행했습니다. 기본 strong_positive 사례에서 activation은 +3.97pp, p-value 0.000011이며 D7 revisit·refund rate·session activity가 모두 PASS입니다. 같은 pipeline을 일곱 시나리오에 적용해 Ship 1개, Retest 4개, Hold 1개, Investigate 1개 결정을 memo와 public report로 생성합니다.",
    supportingLine:
      "SQL mart와 품질 gate 뒤에 3개 가드레일·7개 시나리오를 연결한 실험 의사결정 workflow",
    review: {
      decisionQuestion:
        "activation lift가 유의해도 D7 재방문·환불률·세션 활동 가드레일과 데이터 품질을 통과해야 Ship할 수 있는가?",
      myRole:
        "synthetic dataset 설계, DuckDB SQL layer, 23개 quality checks, A/B 분석, D7·refund·session 멀티 가드레일, 7개 scenario matrix와 decision memo/public report 생성",
      evidence:
        "10,000 users · 41,676 events · 23/23 quality PASS · activation +3.97pp · p=0.000011 · 3 guardrails PASS · 7 scenarios",
      deliverable:
        "SQL marts, quality/experiment JSON, 7-scenario decision matrix, Ship/Retest/Hold/Investigate memo와 공개 reviewer report",
      hiringSignal:
        "제품 이벤트를 신뢰 가능한 SQL metric layer로 만들고 주요 지표·복수 가드레일·시나리오 규칙을 검토 가능한 결정 산출물로 연결할 수 있음",
    },
    decisionMoment: {
      originalQuestion: "activation이 개선되면 바로 Ship해도 되는가?",
      reframedQuestion:
        "데이터 품질을 통과하고 D7 재방문·환불률·세션 활동이 악화되지 않을 때만 Ship하도록 결정 규칙을 재현할 수 있는가?",
      keyEvidence:
        "23 quality checks · activation +3.97pp / p=0.000011 · D7 +0.97pp · refund -0.02pp · sessions +1.93% · 7 scenarios",
      finalDeliverable:
        "SQL mart, quality gate, multi-guardrail experiment result, 7-scenario matrix, decision memo와 public reviewer report",
      proves:
        "하나의 성공 지표를 복수의 위험 신호와 품질 조건 안에서 검토해 재현 가능한 의사결정 언어로 바꾸는 역량",
    },
    cardBrief: {
      problem:
        "activation이 개선되어도 데이터 품질, 재방문, 환불, 세션 활동을 함께 보지 않으면 Ship 판단이 한 지표에 과도하게 의존함.",
      method:
        "synthetic events를 DuckDB SQL layer로 모델링하고 23개 품질 검사 후 A/B evidence와 3개 guardrail을 일곱 시나리오에서 평가함.",
      output: [
        "SQL staging / intermediate / mart layer",
        "23/23 quality gate",
        "D7 · refund · session 3 guardrails",
        "7-scenario matrix + decision memo/report",
      ],
    },
    metrics: [
      { label: "Quality Gate", value: "23/23 PASS" },
      { label: "Activation Lift", value: "+3.97pp" },
      { label: "Guardrails", value: "3 PASS" },
      { label: "Scenario Matrix", value: "7 scenarios" },
    ],
    evidencePoints: [
      {
        label: "SQL Layer",
        value: "raw events → staging → intermediate → mart로 grain과 metric contract를 분리",
      },
      {
        label: "Quality Gate",
        value: "row count, null, accepted values, relation, duplicate, experiment balance 등 23/23 checks PASS",
      },
      {
        label: "Primary Evidence",
        value: "Variant A 30.15% → B 34.12% · activation +3.97pp · p-value 0.000011",
      },
      {
        label: "D7 Revisit Guardrail",
        value: "48.17% → 49.14% · delta +0.97pp · PASS",
      },
      {
        label: "Refund Guardrail",
        value: "0.22% → 0.20% · delta -0.02pp · PASS",
      },
      {
        label: "Session Activity Guardrail",
        value: "평균 세션 1.814 → 1.849 · relative delta +1.93% · PASS",
      },
      {
        label: "7 Scenario Decisions",
        value: "strong_positive=Ship · 3 guardrail risks/weak_evidence=Retest · neutral=Hold · quality_failure=Investigate",
      },
      {
        label: "Verification",
        value: "one-command runner와 GitHub Actions가 quality, experiment, matrix, memo, reviewer report를 생성",
      },
      {
        label: "Claim Boundary",
        value: "synthetic workflow이며 실제 제품 성과·사용자 행동·production business impact를 주장하지 않음",
      },
      ...publicStatusEvidence,
    ],
    signalCaseStudy,
    detailBrief: {
      problem: {
        what:
          "제품 실험의 주요 지표가 개선되어도 데이터 품질이나 D7 재방문, 환불률, 세션 활동이 악화되면 신뢰 가능한 Ship 판단으로 이어질 수 없습니다.",
        why:
          "리뷰 가능한 의사결정 workflow는 raw data부터 SQL metric layer, 품질 gate, 통계 근거, 복수 guardrail과 최종 memo가 같은 실행 경로로 연결되어야 하기 때문입니다.",
      },
      dataMethod: {
        dataTypes: [
          "synthetic users / events / sessions / payments / experiments",
          "DuckDB raw / staging / intermediate / mart tables",
          "quality / experiment / scenario JSON reports",
          "decision memo와 reviewer HTML report",
        ],
        process: [
          "fixed seed와 scenario mode로 synthetic raw CSV 생성",
          "DuckDB raw, staging, intermediate, mart SQL layer로 grain과 지표 정의 분리",
          "23개 quality checks를 실험 해석보다 먼저 실행",
          "activation lift, p-value와 confidence interval 확인",
          "D7 revisit, refund rate, average sessions의 세 guardrail 평가",
          "일곱 시나리오에서 Ship/Retest/Hold/Investigate 규칙 재현",
          "decision memo, scenario matrix와 public reviewer report 생성",
        ],
        metrics: [
          "23/23 quality PASS",
          "activation +3.97pp · p-value 0.000011",
          "D7 revisit delta +0.97pp",
          "refund rate delta -0.02pp",
          "average sessions relative delta +1.93%",
          "7 scenarios · Ship/Retest/Hold/Investigate",
        ],
      },
      limitations: [
        "synthetic dataset 기반이므로 실제 제품 성과, 실제 사용자 행동과 production business impact를 주장하지 않습니다.",
        "실험 결과는 workflow 검증용이며 실제 production A/B test나 인과적 사업 성과 검증이 아닙니다.",
        "DuckDB 기반 portfolio workflow이며 production warehouse scale, orchestration이나 live data operation을 주장하지 않습니다.",
        "guardrail threshold는 데모용 metric contract이며 실제 조직에서는 제품 맥락과 비용 구조에 맞춰 재합의해야 합니다.",
        "세그먼트 진단은 탐색 근거이며 다중 검정 보정이나 production rollout policy를 대체하지 않습니다.",
      ],
      linkNote:
        "공개 reviewer report, scenario matrix와 GitHub 문서에서 23개 품질 gate, 3개 guardrail, 7개 scenario decision과 synthetic claim boundary를 확인할 수 있습니다.",
    },
    focusPoints: [
      "raw product events를 DuckDB SQL mart와 명시적 metric layer로 재구성",
      "23개 data quality gate를 실험 해석보다 먼저 실행",
      "activation evidence를 D7 revisit·refund rate·session activity와 함께 검토",
      "7개 scenario matrix로 Ship·Retest·Hold·Investigate 규칙을 재현",
      "memo·JSON·public report를 같은 verification runner에서 생성",
      "synthetic workflow의 claim boundary를 명확히 유지",
    ],
    links: [
      {
        label: "Public Reviewer Report",
        href: DECISIONOPS_REPORT_URL,
        type: "primary",
      },
      {
        label: "7-Scenario Matrix",
        href: DECISIONOPS_SCENARIO_MATRIX_URL,
        type: "secondary",
      },
      {
        label: "GitHub 저장소",
        href: DECISIONOPS_REPOSITORY_URL,
        type: "secondary",
      },
    ],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "DecisionOps Lab은 synthetic 제품 이벤트를 SQL mart, 품질 gate, 실험 evidence와 복수 guardrail을 거쳐 decision memo로 연결하는 product analytics workflow입니다.",
          "기본 strong_positive뿐 아니라 가드레일별 위험, 약한 근거, 중립 결과와 품질 실패를 일곱 시나리오로 재현합니다.",
        ],
      },
      {
        title: "3개 Guardrail",
        paragraphs: [
          "activation을 primary metric으로 두되 D7 revisit, refund rate, average sessions를 독립 guardrail로 평가합니다.",
          "기본 사례에서는 세 guardrail이 모두 PASS하지만, 각각의 악화를 별도 scenario로 만들어 positive lift가 있어도 Retest로 분기되도록 검증했습니다.",
        ],
      },
      {
        title: "7개 Scenario Decision",
        paragraphs: [
          "strong_positive는 Ship, guardrail_risk·refund_risk·session_activity_risk·weak_evidence는 Retest, neutral은 Hold, quality_failure는 Investigate입니다.",
          "같은 pipeline과 decision rules가 서로 다른 조건에서 일관된 결과를 생성하는지를 matrix와 JSON으로 확인합니다.",
        ],
      },
      {
        title: "Scope and Limitations",
        paragraphs: [
          "이 프로젝트는 synthetic-data workflow이며 실제 사용자 행동, 실제 제품 성과나 production business impact를 증명하지 않습니다.",
          "강점은 SQL modeling, quality gate, primary evidence, multi-guardrail review와 decision artifact가 한 검토 경로로 연결되어 있다는 점입니다.",
        ],
      },
    ],
  };
}

export const projects = sourceProjects.map(upgradeDecisionOps);

export const featuredProjects = projects
  .filter((project) => project.status === "featured")
  .sort((left, right) => left.sortOrder - right.sortOrder);
