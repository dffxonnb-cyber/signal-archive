import Link from "next/link";

import { PageHero } from "@/components/page-hero";

const evidence = [
  { label: "Decision", value: "Ship / Retest / Hold / Investigate" },
  { label: "Quality Gate", value: "23/23 checks PASS" },
  { label: "A/B Evidence", value: "+3.97pp lift · p=0.000011" },
  { label: "D7 Guardrail", value: "+0.97pp revisit delta" },
  { label: "Scenario Matrix", value: "5 synthetic scenarios" },
  { label: "Verification", value: "GitHub Actions + one-command runner" },
];

const flows = [
  "synthetic raw users/events/sessions/payments/experiments",
  "DuckDB raw tables",
  "SQL staging/intermediate/mart layers",
  "23 data quality checks",
  "A/B activation evidence",
  "D7 revisit guardrail review",
  "scenario matrix",
  "decision memo + public reviewer report",
];

const decisionFrame = [
  {
    label: "Problem",
    title: "좋아 보이는 실험 결과를 바로 Ship해도 되는가?",
    detail: "activation lift가 있어도 데이터 품질이나 downstream behavior가 흔들리면 판단 근거가 약합니다.",
  },
  {
    label: "Data",
    title: "synthetic product events",
    detail: "raw users/events/sessions/payments/experiments를 DuckDB raw tables와 SQL layer로 정리합니다.",
  },
  {
    label: "Criteria",
    title: "quality · p-value · D7 guardrail",
    detail: "23개 품질 검사, activation lift, p-value, D7 revisit delta를 함께 봅니다.",
  },
  {
    label: "Judgment",
    title: "Ship / Retest / Hold / Investigate",
    detail: "positive lift 하나가 아니라 scenario matrix로 decision behavior를 검증합니다.",
  },
  {
    label: "Output",
    title: "memo · report · artifacts",
    detail: "quality report, experiment result, scenario matrix, decision memo, reviewer report를 남깁니다.",
  },
];

const artifacts = [
  ["reports/quality_report.json", "23개 품질 검사 PASS/WARN/FAIL 결과"],
  ["reports/experiment_result.json", "activation lift, p-value, confidence interval, D7 revisit evidence"],
  ["reports/scenario_matrix.md", "Ship, Retest, Hold, Investigate 분기 검증"],
  ["reports/decision_memo.md", "strong_positive scenario의 Ship recommendation memo"],
  ["reports/review_report.html", "빠른 검토용 public reviewer report"],
  ["scripts/run_full_verification.py", "dataset, SQL pipeline, reports, scenario matrix, pytest를 한 번에 실행"],
];

const scenarios = [
  ["strong_positive", "Ship", "activation improves and D7 revisit stays stable"],
  ["guardrail_risk", "Retest", "D7 revisit weakens"],
  ["weak_evidence", "Retest", "positive but weak lift"],
  ["neutral", "Hold", "no meaningful activation improvement"],
  ["quality_failure", "Investigate", "quality fails before interpretation"],
];

export default function DecisionOpsLabPage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid project-detail">
        <PageHero
          actions={
            <>
              <a className="button-link" href="https://dffxonnb-cyber.github.io/DecisionOps-lab/" rel="noreferrer" target="_blank">
                Reviewer Report 열기
              </a>
              <a className="button-link button-link--secondary" href="https://github.com/dffxonnb-cyber/DecisionOps-lab" rel="noreferrer" target="_blank">
                GitHub 저장소
              </a>
            </>
          }
          eyebrow="DecisionOps Lab · Product Analytics Workflow"
          lead="Synthetic product event data를 DuckDB SQL mart, 23개 quality checks, A/B evidence, D7 guardrail, scenario matrix, decision memo, reviewer report로 연결한 Product Analytics / Analytics Engineering 프로젝트입니다."
          title="activation 하나만 보고 Ship하지 않는 의사결정 workflow."
          titleId="decisionops-title"
        />

        <section className="surface-card detail-section detail-section--evidence">
          <div className="detail-section__head">
            <span className="eyebrow">Evidence Snapshot</span>
            <h2 className="section-title">검토자가 먼저 볼 근거</h2>
            <p className="page-intro">
              DecisionOps Lab은 분석 결과를 차트에서 끝내지 않고, 품질 검증과 D7 guardrail을 거쳐 리뷰 가능한 추천 문장으로 바꾸는 과정을 보여줍니다.
            </p>
          </div>
          <div className="detail-evidence-grid">
            {evidence.map((item, index) => (
              <article className={index === 0 ? "detail-evidence-item detail-evidence-item--lead" : "detail-evidence-item"} key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card detail-section detail-decision">
          <div className="detail-section__head">
            <span className="eyebrow">Decision Moment</span>
            <h2 className="section-title">질문이 바뀐 순간</h2>
            <p className="page-intro">
              “Variant B가 activation을 올렸는가?”에서 “이 개선을 품질과 downstream behavior까지 확인하고 Ship해도 되는가?”로 질문을 바꾼 프로젝트입니다.
            </p>
          </div>
          <div className="detail-decision__frame">
            <div className="detail-decision__question-flow" aria-label="decision question shift">
              <div className="detail-decision__question">
                <span>Original Question</span>
                <strong>Variant B가 activation을 올렸는가?</strong>
              </div>
              <div className="detail-decision__connector" aria-hidden="true">
                to
              </div>
              <div className="detail-decision__question detail-decision__question--reframed">
                <span>Reframed Question</span>
                <strong>품질·통계·D7 guardrail을 통과했을 때만 Ship할 수 있는가?</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="surface-card detail-section detail-section--evidence">
          <div className="detail-section__head">
            <span className="eyebrow">Problem → Output</span>
            <h2 className="section-title">Signal Archive식 해석</h2>
            <p className="page-intro">
              DecisionOps는 Redveil과 경쟁하는 flagship이 아니라, raw product event를 reviewable decision artifact로 바꾸는 technical workflow 근거입니다.
            </p>
          </div>
          <div className="detail-evidence-grid">
            {decisionFrame.map((item) => (
              <article className="detail-evidence-item" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card detail-section">
          <div className="detail-section__head">
            <span className="eyebrow">Workflow</span>
            <h2 className="section-title">raw data에서 decision memo까지</h2>
          </div>
          <ol className="list-stack">
            {flows.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section className="surface-card detail-section detail-section--evidence">
          <div className="detail-section__head">
            <span className="eyebrow">Artifacts</span>
            <h2 className="section-title">리뷰어가 확인할 산출물</h2>
            <p className="page-intro">
              모든 산출물은 DecisionOps Lab 저장소의 synthetic-data workflow에서 생성된 검토용 evidence입니다.
            </p>
          </div>
          <div className="detail-evidence-grid">
            {artifacts.map(([artifact, purpose]) => (
              <article className="detail-evidence-item" key={artifact}>
                <span>{artifact}</span>
                <strong>{purpose}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card detail-section detail-section--evidence">
          <div className="detail-section__head">
            <span className="eyebrow">Scenario Matrix</span>
            <h2 className="section-title">하나의 positive case에 고정되지 않은 판단</h2>
            <p className="page-intro">같은 pipeline이 조건에 따라 Ship, Retest, Hold, Investigate로 갈리는지 확인합니다.</p>
          </div>
          <div className="detail-evidence-grid">
            {scenarios.map(([scenario, decision, reason]) => (
              <article className="detail-evidence-item" key={scenario}>
                <span>{scenario}</span>
                <strong>{decision}</strong>
                <p>{reason}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card detail-section">
          <div className="detail-section__head">
            <span className="eyebrow">Claim Boundary</span>
            <h2 className="section-title">주장하는 것과 주장하지 않는 것</h2>
          </div>
          <p className="page-intro">
            이 프로젝트는 synthetic data 기반입니다. 실제 제품 성과, 실제 사용자 행동, production business impact, 인과적 사업 성과를 주장하지 않고, 재현 가능한 분석 workflow, metric definition, quality check, experiment interpretation, guardrail-aware decision communication을 증명합니다.
          </p>
          <div className="button-row">
            <Link className="button-link button-link--secondary" href="/projects">
              프로젝트 목록으로 돌아가기
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
