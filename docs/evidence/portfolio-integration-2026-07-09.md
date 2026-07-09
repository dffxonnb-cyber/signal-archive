# Portfolio Integration Evidence — 2026-07-09

## Updated surfaces

- GitHub profile README
- Signal Archive README featured projects
- Signal Archive reviewer path
- Signal Archive `docs/reviewer-path.md`
- DecisionOps Lab README
- DecisionOps `reports/quality_report.json`
- DecisionOps `reports/experiment_result.json`
- DecisionOps `reports/scenario_matrix.md`
- DecisionOps `reports/decision_memo.md`
- DecisionOps public reviewer report

## Reviewer route

GitHub Profile  
→ Signal Archive  
→ DecisionOps Lab  
→ Public Reviewer Report

## Claim boundary

DecisionOps Lab is a synthetic-data portfolio project.

The claim is workflow design, SQL modeling, metric definition, data quality verification, A/B test interpretation, D7 guardrail-aware decision review, scenario-matrix validation, and decision communication.

It does not claim real product performance, real user behavior, or production business impact.

## Why this project was added

DecisionOps Lab fills the technical workflow layer of the portfolio.

Existing projects show domain-specific decision systems. DecisionOps Lab shows how raw product event data can become a reliable decision workflow through SQL models, quality checks, experiment metrics, guardrail review, and final recommendation artifacts.

## Evidence snapshot

- Raw scope: 10,000 users, 41,676 events, 18,313 sessions.
- Quality gate: 23/23 checks PASS.
- Experiment evidence: Variant A activation 30.15%, Variant B activation 34.12%, absolute lift +3.97pp, p-value 0.000011.
- Guardrail evidence: D7 revisit delta +0.97pp in the default strong-positive scenario.
- Scenario matrix: `strong_positive=Ship`, `guardrail_risk=Retest`, `weak_evidence=Retest`, `neutral=Hold`, `quality_failure=Investigate`.

Refund risk and session activity are documented as decision memo guardrail candidates, but the currently generated scenario matrix is D7 revisit-centered.
