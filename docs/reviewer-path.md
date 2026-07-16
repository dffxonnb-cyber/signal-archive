# Reviewer Path

Signal Archive를 검토할 때는 프로젝트 전체를 처음부터 끝까지 보지 않아도 됩니다. 기본 위계는 하나로 고정합니다.

## Representative order

1. [Seoul Storefront Redveil V2](https://signal-archive.vercel.app/projects/seoul-storefront-redveil)
2. [Shelter Signal V2](https://signal-archive.vercel.app/projects/shelter-signal)
3. [DecisionOps Lab](https://signal-archive.vercel.app/projects/decisionops-lab)
4. [LH Traffic Safety Analysis](https://signal-archive.vercel.app/projects/lh-traffic-safety-analysis)

Redveil V2는 단일 flagship입니다. 가장 큰 프로젝트라서가 아니라, 공간·거래 분석이 서울 자치구 지도, 보류 사유, 대체 후보, 판단 메모와 검증 가능한 제품 흐름으로 바뀌는 방식을 가장 잘 보여주기 때문입니다.

- [Redveil V2 공식 데모](https://dffxonnb-cyber.github.io/Seoul-Storefront-Redveil/v2/)
- [Redveil V2 GitHub 저장소](https://github.com/dffxonnb-cyber/Seoul-Storefront-Redveil)

Shelter Signal은 V1 현재 탐색과 V2 시간 변화 추적을 함께 확인합니다.

- [V1 현재 공고](https://shelter-signal-ebon.vercel.app/#live)
- [V2 오늘의 변화](https://shelter-signal-ebon.vercel.app/#changes)
- [V2 마감 브리핑](https://shelter-signal-ebon.vercel.app/#briefing)
- [Shelter Signal GitHub 저장소](https://github.com/dffxonnb-cyber/shelter-signal)

## 3-minute profile scan

1. [Start Here](https://signal-archive.vercel.app/start-here)
2. [Seoul Storefront Redveil V2](https://signal-archive.vercel.app/projects/seoul-storefront-redveil)
3. [Shelter Signal V2](https://signal-archive.vercel.app/projects/shelter-signal)
4. [DecisionOps Lab](https://signal-archive.vercel.app/projects/decisionops-lab)

포지셔닝, 단일 flagship, V1 live와 V2 일별 변화 추적을 결합한 public-data product, SQL/D7 guardrail decision workflow를 가장 빠르게 확인하는 경로입니다.

## Analytics Engineering / Product Analyst role

1. [DecisionOps Lab](https://signal-archive.vercel.app/projects/decisionops-lab)
2. [Public Reviewer Report](https://dffxonnb-cyber.github.io/DecisionOps-lab/)
3. [Seoul Storefront Redveil V2](https://signal-archive.vercel.app/projects/seoul-storefront-redveil)

SQL 모델링, 23개 품질검증, activation lift, p-value, D7 revisit guardrail, scenario matrix 기반 의사결정 흐름을 확인한 뒤 Redveil V2에서 분석 결과가 사용자 제품으로 번역되는 방식을 봅니다.

## Spatial / Public Data role

1. [Seoul Storefront Redveil V2](https://signal-archive.vercel.app/projects/seoul-storefront-redveil)
2. [Shelter Signal V2](https://signal-archive.vercel.app/projects/shelter-signal)
3. [LH Traffic Safety Analysis](https://signal-archive.vercel.app/projects/lh-traffic-safety-analysis)
4. [DecisionOps Lab](https://signal-archive.vercel.app/projects/decisionops-lab)

Redveil V2의 서울 자치구 GeoJSON 지도와 연결된 판단 산출물을 먼저 확인한 뒤, Shelter Signal의 V1 live/cache/fallback 경계와 V2 daily snapshot·7개 변화 이벤트·공고별 타임라인·D-Day~D-3 브리핑을 봅니다. 이어서 LH의 100m grid/LORO 검증을 확인하고, DecisionOps는 SQL 품질 gate와 실험 판단 workflow 보강 근거로 읽습니다.

## Business / CRM role

1. [Seoul Storefront Redveil V2](https://signal-archive.vercel.app/projects/seoul-storefront-redveil)
2. [DecisionOps Lab](https://signal-archive.vercel.app/projects/decisionops-lab)
3. [Starbucks Promotion Analysis](https://signal-archive.vercel.app/projects/starbucks-promotion-analysis)
4. [UK Online Retail Segment Analysis](https://signal-archive.vercel.app/projects/uk-online-retail-segment-analysis)
5. [ShopEasy](https://signal-archive.vercel.app/projects/shopeasy)

Redveil V2와 DecisionOps를 대표 근거로 먼저 보고, Starbucks/UK Retail/ShopEasy는 CRM, segmentation, commerce dashboard, experiment proposal을 보강하는 supporting evidence로 확인합니다.

## Supporting projects

- Starbucks Promotion Analysis: CRM / marketing analytics supporting evidence
- UK Online Retail Segment Analysis: RFM / segmentation supporting evidence
- ShopEasy: commerce dashboard / experiment proposal supporting evidence
- Job Signal Pipeline: mock/local SQL pipeline validation supporting evidence
- NBA Game & Player Analysis: archive-level sports analytics evidence
