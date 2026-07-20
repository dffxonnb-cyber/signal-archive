# 대표 프로젝트 면접·복습 가이드

Signal Archive의 대표 프로젝트 4개를 면접 준비와 반복 복습에 사용할 수 있도록 정리한 통합 인덱스입니다.

각 문서는 다음 내용을 포함합니다.

- 30초·1분 프로젝트 소개
- 문제 정의와 의사결정 질문
- 데이터·분석·제품 파이프라인
- 핵심 지표·모델·검증 방식
- 설계 선택의 이유
- 주장 가능한 범위와 반드시 말해야 할 한계
- 개선 방향
- 예상 면접 질문과 답변 핵심
- 핵심 파일 읽는 순서
- 3회독 학습법과 면접 직전 체크리스트

---

## 1. Seoul Storefront Redveil V2

**포지셔닝:** 지도 기반 상가 매입 리스크 검토와 판단 artifact

- [면접·학습 가이드](https://github.com/dffxonnb-cyber/Seoul-Storefront-Redveil/blob/main/docs/REDVEIL_INTERVIEW_STUDY_GUIDE.md)
- [저장소](https://github.com/dffxonnb-cyber/Seoul-Storefront-Redveil)
- [공개 V2](https://dffxonnb-cyber.github.io/Seoul-Storefront-Redveil/v2/)

### 반드시 설명할 것

- 추천이 아니라 보류 사유를 설계한 이유
- 거래·경쟁·수요 데이터를 의사결정 언어로 바꾼 과정
- 백분위·가중합·저표본 경고의 역할
- 점수, 대체 후보, 판단 메모의 연결
- 구 단위·휴리스틱·시점 차이의 한계

---

## 2. Shelter Signal V2

**포지셔닝:** 공공 API의 현재 상태와 시간 변화를 분리한 history-aware 데이터 제품

- [면접·학습 가이드](https://github.com/dffxonnb-cyber/shelter-signal/blob/main/docs/SHELTER_SIGNAL_INTERVIEW_STUDY_GUIDE.md)
- [저장소](https://github.com/dffxonnb-cyber/shelter-signal)
- [공개 제품](https://shelter-signal-ebon.vercel.app/)

### 반드시 설명할 것

- V1 live-first와 V2 history-aware의 차이
- current·urgent·protected·archive 날짜 기준
- cache·fallback·정상 empty state를 분리한 이유
- snapshot → event → timeline → briefing 흐름
- NOT_OBSERVED와 DISAPPEARED를 구분한 이유
- 관측 이력과 최종 동물 결과를 혼동하지 않는 경계

---

## 3. DecisionOps Lab

**포지셔닝:** SQL mart, 품질 gate, A/B evidence와 guardrail을 최종 권고로 연결한 workflow

- [면접·학습 가이드](https://github.com/dffxonnb-cyber/DecisionOps-lab/blob/main/docs/DECISIONOPS_INTERVIEW_STUDY_GUIDE.md)
- [저장소](https://github.com/dffxonnb-cyber/DecisionOps-lab)
- [Reviewer Report](https://dffxonnb-cyber.github.io/DecisionOps-lab/)

### 반드시 설명할 것

- raw → staging → intermediate → mart 계층
- activation metric의 분모·분자·시간창
- 품질 실패가 Hold가 아니라 Investigate인 이유
- D7 revisit·refund·average sessions guardrail
- Ship·Retest·Hold·Investigate decision rule
- scenario matrix와 report freshness check의 역할
- synthetic data를 실제 성과로 말하지 않는 경계

---

## 4. LH Traffic Safety Analysis

**포지셔닝:** 100m 격자 위험 신호, 지역 전이 검증과 현장 검토 우선순위

- [면접·학습 가이드](https://github.com/dffxonnb-cyber/LH-traffic-safety-analysis/blob/main/docs/LH_TRAFFIC_SAFETY_INTERVIEW_STUDY_GUIDE.md)
- [저장소](https://github.com/dffxonnb-cyber/LH-traffic-safety-analysis)

### 반드시 설명할 것

- 행정구역 대신 100m 격자를 사용한 이유
- 공간 좌표 포함 Random Forest Regressor의 역할
- 전이 검증용 LORO classifier와 운영용 점수 모델의 차이
- Mean AUC 0.8604와 Top-10% Lift 4.39x의 의미
- 공개 점수와 full model lineage의 차이
- core·auxiliary·legacy 경로 구분
- Top-20이 설치 결정이 아니라 현장 검토 순서라는 경계

---

## 역할별 우선 학습 순서

### 공간·공공데이터 직무

```text
Redveil
→ LH Traffic Safety
→ Shelter Signal
→ DecisionOps Lab
```

### 제품·비즈니스 분석 직무

```text
DecisionOps Lab
→ Redveil
→ Shelter Signal
→ LH Traffic Safety
```

### 데이터 분석 전반 면접

```text
Redveil
→ DecisionOps Lab
→ LH Traffic Safety
→ Shelter Signal
```

---

## 프로젝트당 3회독 방식

### 1회독 · 문제와 결론

- 누구의 어떤 문제인가?
- 분석 단위는 무엇인가?
- 최종 산출물이 어떤 결정을 돕는가?

### 2회독 · 파이프라인과 검증

- 데이터가 어떤 단계로 변하는가?
- 지표·모델·테이블의 역할은 무엇인가?
- 결과를 어떤 방식으로 검증했는가?

### 3회독 · 설계 이유와 한계

- 다른 방법 대신 이 방법을 선택한 이유는 무엇인가?
- 면접관이 공격할 수 있는 가장 큰 한계는 무엇인가?
- 검증되지 않은 범위를 어디까지 분리했는가?

---

## 대표 프로젝트 공통 답변 구조

```text
1. 문제 상황
2. 분석 질문 재정의
3. 데이터와 분석 단위
4. 핵심 파이프라인
5. 검증 방법
6. 의사결정 산출물
7. 한계와 개선 방향
```

면접에서는 기술을 나열하기보다, **왜 그 분석 단위와 검증 방식이 문제에 맞았는지**를 먼저 설명합니다.

---

## 범위

이 인덱스는 Signal Archive의 `Representative Projects` 4개를 대상으로 합니다.

Starbucks Promotion, UK Online Retail, ShopEasy, Job Signal Pipeline, NBA 분석은 supporting evidence이며 이번 대표 프로젝트 가이드 범위에는 포함하지 않았습니다.
