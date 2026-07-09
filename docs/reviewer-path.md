# Reviewer Path

Signal Archive를 검토할 때는 프로젝트 전체를 처음부터 끝까지 보지 않아도 됩니다. 기본 위계는 하나로 고정합니다.

## Representative order

1. Seoul Storefront Redveil
2. Shelter Signal
3. DecisionOps Lab
4. LH Traffic Safety Analysis

Redveil은 단일 flagship입니다. 가장 큰 프로젝트라서가 아니라, 분석 결과가 보류 사유, 대체 후보, memo/checklist handoff 같은 reviewable decision artifact로 바뀌는 방식을 가장 잘 보여주기 때문입니다.

## 3-minute profile scan

1. Start Here
2. Seoul Storefront Redveil
3. Shelter Signal
4. DecisionOps Lab

포지셔닝, 단일 flagship, live public-data service, SQL/guardrail decision workflow를 가장 빠르게 확인하는 경로입니다.

## Spatial / Public Data role

1. Seoul Storefront Redveil
2. Shelter Signal
3. LH Traffic Safety Analysis
4. DecisionOps Lab

Redveil로 판단 산출물의 기준을 먼저 확인한 뒤, Shelter Signal의 API/cache/fallback 경계와 LH의 100m grid/LORO 검증을 봅니다. DecisionOps는 SQL 품질 gate와 실험 판단 workflow 보강 근거로 읽습니다.

## Business / CRM role

1. Seoul Storefront Redveil
2. DecisionOps Lab
3. Starbucks Promotion Analysis
4. UK Online Retail Segment Analysis
5. ShopEasy

Redveil과 DecisionOps를 대표 근거로 먼저 보고, Starbucks/UK Retail/ShopEasy는 CRM, segmentation, commerce dashboard, experiment proposal을 보강하는 supporting evidence로 확인합니다.

## Supporting projects

- Starbucks Promotion Analysis: CRM / marketing analytics supporting evidence
- UK Online Retail Segment Analysis: RFM / segmentation supporting evidence
- ShopEasy: commerce dashboard / experiment proposal supporting evidence
- Job Signal Pipeline: mock/local SQL pipeline validation supporting evidence
- NBA Game & Player Analysis: archive-level sports analytics evidence
