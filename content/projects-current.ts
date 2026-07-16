import type { Project } from "../types/content";

import { projects as sourceProjects } from "./projects-public";

const SHELTER_LIVE_URL = "https://shelter-signal-ebon.vercel.app/";
const SHELTER_CHANGES_URL = "https://shelter-signal-ebon.vercel.app/#changes";
const SHELTER_BRIEFING_URL = "https://shelter-signal-ebon.vercel.app/#briefing";
const SHELTER_REPOSITORY_URL =
  "https://github.com/dffxonnb-cyber/shelter-signal";
const SHELTER_V2_EVIDENCE_URL =
  "https://github.com/dffxonnb-cyber/shelter-signal/blob/main/docs/evidence/v2-production-verification-2026-07-14.md";

const PUBLIC_STATUS_LABELS = new Set([
  "공개 접근",
  "저장소 상태",
  "검증 상태",
  "범위 상태",
  "추천 직무",
]);

function upgradeShelterSignal(project: Project): Project {
  if (project.slug !== "shelter-signal") return project;

  const publicStatusEvidence = (project.evidencePoints ?? []).filter((item) =>
    PUBLIC_STATUS_LABELS.has(item.label),
  );

  const signalCaseStudy = project.signalCaseStudy
    ? {
        ...project.signalCaseStudy,
        title: "현재 공고와 시간 변화를 분리한 history-aware 구조",
        thesis:
          "V1은 지금 유효한 구조동물 공고와 종료 임박 신호를 보여주고, V2는 일별 public-safe snapshot을 비교해 새 공고·상태 변화·미관측·복귀 이벤트와 공고별 누적 타임라인, D-Day~D-3 마감 브리핑을 제공하는 공공데이터 제품입니다.",
        chips: [
          "V1 Live API",
          "Daily 06:20 KST",
          "7 Event Types",
          "Notice Timeline",
          "D-Day~D-3 Brief",
          "Cache/Fallback",
          "Public-safe JSON",
        ],
        flow: [
          "Live API",
          "KST freshness",
          "Daily snapshot",
          "Previous-success comparison",
          "Change events",
          "Missing-state transition",
          "Per-notice timeline",
          "Deadline briefing",
        ],
        evidenceTitle: "V1 live 및 V2 history-aware 검증 경로",
        evidenceDescription:
          "포트폴리오에는 V1 production UI와 safe API metadata 화면을 유지하고, V2의 자동 수집·변화 이벤트·누적 타임라인·마감 브리핑은 현재 production evidence 문서와 공개 서비스로 연결합니다.",
        sections: [
          {
            label: "01 Problem",
            title: "현재 목록만으로는 어제와 달라진 공고를 알 수 없음",
            description:
              "실시간 공고 조회는 지금 무엇이 있는지는 보여주지만, 신규·종료일 변경·상태 변경·미관측 같은 시간 변화와 오늘 먼저 볼 이유를 설명하지 못합니다.",
            points: [
              "현재 상태와 변화 이력을 별도 계층으로 분리",
              "미관측을 곧바로 종료나 결과로 단정하지 않음",
            ],
          },
          {
            label: "02 V1 Current Layer",
            title: "현재·긴급·보호·아카이브를 live-first로 탐색",
            description:
              "V1은 data.go.kr 공고를 server-side에서 조회하고 KST 종료일, 지역, page/limit, cache/fallback metadata를 적용해 현재 탐색 경로를 유지합니다.",
            points: [
              "D-Day~D-3 urgent signal",
              "Live · cache · stale-live · fallback 상태 분리",
            ],
          },
          {
            label: "03 V2 Daily Preservation",
            title: "매일 06:20 KST public-safe snapshot을 보존",
            description:
              "GitHub Actions가 최신·월간 snapshot을 갱신하고 이전 성공 수집과 비교해 날짜별 이벤트, missing state와 누적 타임라인을 생성합니다.",
            points: [
              "Latest + monthly snapshot",
              "Daily events + missing notices + cumulative timelines",
            ],
          },
          {
            label: "04 Change Semantics",
            title: "한 번의 누락과 지속 미관측을 구분",
            description:
              "NEW, DEADLINE_CHANGED, STATUS_CHANGED, BECAME_URGENT, NOT_OBSERVED, DISAPPEARED, RETURNED의 일곱 이벤트로 관측 변화를 설명합니다.",
            points: [
              "NOT_OBSERVED → 서로 다른 날짜의 반복 누락 시 DISAPPEARED",
              "조회 창 변경 시 대량 가짜 미관측 방지",
            ],
          },
          {
            label: "05 Timeline / Briefing",
            title: "공고별 변화 이력과 오늘의 확인 순서를 연결",
            description:
              "eventId 기준 중복 제거 타임라인과 D-Day~D-3, 신규 긴급, 긴급 구간 진입, 종료일 앞당김 근거를 결합한 마감 브리핑을 제공합니다.",
            points: [
              "공고별 이전 값 → 현재 값",
              "설명 가능한 우선순위 상위 30건",
            ],
          },
          {
            label: "06 Claim Boundary",
            title: "관측 이벤트와 실제 동물 결과를 구분",
            description:
              "V2는 collector-observed 변화 기록이며 공식 위험 점수, 안락사 가능성, 입양 예측, 실제 알림 발송이나 보호소 운영 결과를 주장하지 않습니다.",
            points: [
              "Missing observation ≠ final outcome",
              "계정·구독·외부 알림·production SLA 제외",
            ],
          },
        ],
      }
    : project.signalCaseStudy;

  return {
    ...project,
    summary:
      "불안정한 공공 구조동물 공고를 현재 탐색(V1)과\n일별 보존·변화 이벤트·누적 타임라인·마감 브리핑(V2)으로 분리한\nhistory-aware public-data product입니다.",
    domains: [
      "공공데이터",
      "구조동물 공고",
      "변화 추적",
      "데이터 신뢰성",
      "PWA",
    ],
    role: [
      "live-first API·cache/fallback 설계",
      "일별 public-safe snapshot 파이프라인",
      "변화 이벤트·누적 타임라인 모델",
      "D-Day~D-3 마감 브리핑 UX",
    ],
    filterTools: ["Python", "React", "TypeScript"],
    cardTools: [
      "Python",
      "React",
      "TypeScript",
      "GitHub Actions",
      "Vercel",
    ],
    stack: [
      "data.go.kr Public Data API",
      "Vite",
      "React",
      "TypeScript",
      "Vercel Functions",
      "GitHub Actions",
      "public-safe JSON snapshots",
      "PWA",
      "Server cache",
      "PostgreSQL/static fallback",
    ],
    problemTypes: [
      "보호 종료 임박 신호",
      "공고 변화 추적",
      "데이터 신뢰성",
      "의사결정 도구",
    ],
    coreTags: [
      "V1 Live API",
      "V2 Daily Snapshot",
      "Change Events",
      "Notice Timeline",
      "D-Day~D-3 Brief",
      "Cache/Fallback",
      "Observability",
    ],
    badges: [
      "Featured",
      "Public Data",
      "History-aware",
      "Daily Preservation",
      "Decision Brief",
    ],
    context:
      "실시간 구조동물 공고는 지금의 목록을 보여주지만, 어제와 무엇이 달라졌는지와 오늘 어떤 공고를 먼저 확인해야 하는지는 남기지 않습니다. Shelter Signal은 V1의 live-first 현재 탐색을 유지하면서 V2에서 일별 보존, 변화 이벤트, 공고별 타임라인과 마감 브리핑을 별도 판단 계층으로 추가했습니다.",
    outcome:
      "V1의 current·urgent·protected·archive, 지역 필터, pagination, cache/fallback 상태 위에 매일 06:20 KST public-safe snapshot 수집을 연결했습니다. 이전 성공 수집과 비교해 일곱 변화 이벤트와 missing state를 만들고, eventId 중복 제거 누적 타임라인과 D-Day~D-3 마감 브리핑으로 오늘의 확인 순서를 설명합니다.",
    supportingLine:
      "현재 공고 탐색과 일별 변화·타임라인·마감 브리핑을 분리한 history-aware 공공데이터 제품",
    review: {
      decisionQuestion:
        "지금 유효한 공고뿐 아니라 어제와 무엇이 달라졌고 오늘 어떤 공고를 먼저 확인해야 하는가?",
      myRole:
        "V1 live API·KST 마감 분류·cache/fallback 설계, V2 일별 snapshot 수집, 변화 이벤트·missing state·누적 타임라인 모델, 마감 브리핑과 public-safe 검증",
      evidence:
        "V1 live API + 매일 06:20 KST snapshot · 7개 변화 이벤트 · 2026-07-16 기준 2,446 notices / 613 daily events / 813 timelines / 983 cumulative events",
      deliverable:
        "현재 공고 탐색, 오늘의 변화 대시보드, 공고별 누적 타임라인과 D-Day~D-3 마감 브리핑을 연결한 모바일 우선 공개 제품",
      hiringSignal:
        "불안정한 공공 API를 신뢰 상태로 분리하고, 시간 변화 데이터를 이벤트·타임라인·설명 가능한 우선순위로 제품화할 수 있음",
    },
    operationMeta: {
      lastVerifiedAt: "2026-07-16 07:13 KST",
      source: "daily public-safe snapshot + deployed V1/V2 product surfaces",
      whyItMatters:
        "현재 공고와 보호 종료 임박 신호뿐 아니라 신규·변경·미관측·복귀 이력과 오늘 먼저 확인할 이유를 같은 서비스에서 검토할 수 있습니다.",
      verified: [
        "V1 live API, KST freshness, region/page/limit와 cache/fallback metadata 확인",
        "매일 06:20 KST GitHub Actions public-safe snapshot 생성·커밋 확인",
        "NEW / DEADLINE_CHANGED / STATUS_CHANGED / BECAME_URGENT / NOT_OBSERVED / DISAPPEARED / RETURNED 이벤트 확인",
        "eventId 중복 제거 공고별 누적 타임라인과 직접 진입 경로 확인",
        "D-Day~D-3, 신규 긴급, 긴급 구간 진입, 종료일 앞당김 기반 마감 브리핑 확인",
        "2026-07-16 snapshot 2,446 notices · 613 changes · 813 timelines · 983 timeline events 확인",
      ],
      designing: [
        "사용자 계정과 영구 구독 관리",
        "외부 email / SMS / push 알림 발송 운영",
        "공식 보호소 운영·수용 capacity 데이터 연동",
        "입양 결과 추적과 production SLA",
      ],
      reviewChecklist: [
        "V1 current notices에서 source/cache/fallback과 KST 마감 상태가 분리되는지",
        "V2 today changes에서 수집 상태와 일곱 이벤트 유형이 설명되는지",
        "변화 카드에서 공고별 누적 타임라인과 이전 값→현재 값을 확인할 수 있는지",
        "deadline briefing이 D-Day~D-3와 변화 근거로 포함 이유를 설명하는지",
        "미관측 이벤트와 실제 종료·입양·안락사 결과를 동일시하지 않는지",
      ],
      risksHandled: [
        {
          risk: "한 번의 공고 누락을 종료로 오인",
          handling:
            "첫 누락은 NOT_OBSERVED, 서로 다른 날짜의 반복 누락부터 DISAPPEARED로 전환",
        },
        {
          risk: "월별 조회 창 변경으로 대량 가짜 미관측 발생",
          handling:
            "observation window 변경을 감지해 missing 이벤트 생성 경계를 분리",
        },
        {
          risk: "live API 지연·실패가 정상 empty state처럼 보임",
          handling:
            "source, cacheStatus, fallbackReason과 stale-live/fallback 상태를 명시적으로 노출",
        },
        {
          risk: "반복 실행으로 타임라인 이벤트 중복",
          handling: "eventId 기준 중복 제거 후 공고별 누적 타임라인 갱신",
        },
        {
          risk: "마감 브리핑을 공식 위험 점수나 실제 알림으로 오해",
          handling:
            "D-Day와 관측 변화 근거만 사용하고 외부 알림·예측·공식 운영 판단을 범위에서 제외",
        },
      ],
    },
    decisionMoment: {
      originalQuestion: "구조동물 공고를 어떻게 조회하게 할 것인가?",
      reframedQuestion:
        "현재 유효한 공고와 어제 달라진 공고를 분리하고, 오늘 먼저 볼 이유를 어떻게 설명할 것인가?",
      keyEvidence:
        "V1 live/cache/fallback metadata · daily 06:20 KST snapshots · 7 change event types · cumulative timeline · D-Day~D-3 briefing",
      finalDeliverable:
        "V1 current notice explorer와 V2 today-change dashboard, notice timeline, deadline briefing을 연결한 public-data PWA",
      proves:
        "공공데이터의 현재 상태와 시간 변화를 분리해 신뢰 가능한 이벤트 기록과 검토 우선순위로 전환하는 역량",
    },
    cardBrief: {
      problem:
        "현재 공고 목록만으로는 신규·마감 변경·상태 변경·미관측 같은 시간 변화와 오늘 먼저 확인할 공고를 알기 어려움.",
      method:
        "V1 live-first 탐색 위에 매일 public-safe snapshot을 보존하고 이전 성공 수집과 비교해 변화 이벤트, missing state, 공고별 타임라인과 마감 브리핑을 생성함.",
      output: [
        "V1 Current / Urgent / Protected / Archive",
        "V2 Today Changes Dashboard",
        "Per-notice Cumulative Timeline",
        "D-Day~D-3 Deadline Briefing",
      ],
    },
    metrics: [
      {
        label: "Current Layer",
        value: "V1 Live API",
        caption: "현재·긴급·보호·아카이브 탐색",
      },
      {
        label: "Preservation",
        value: "Daily 06:20 KST",
        caption: "public-safe snapshot 자동 생성",
      },
      {
        label: "Change Model",
        value: "7 event types",
        caption: "신규·변경·미관측·복귀 분리",
      },
      {
        label: "Decision Brief",
        value: "D-Day~D-3",
        caption: "변화 근거를 포함한 오늘의 확인 순서",
      },
    ],
    evidencePoints: [
      {
        label: "현재 / 변화 분리",
        value: "V1은 지금의 공고, V2는 어제와 달라진 공고와 오늘의 우선순위를 담당",
      },
      {
        label: "일별 보존",
        value: "매일 06:20 KST latest·monthly snapshot, daily events, missing state, cumulative timeline 생성",
      },
      {
        label: "변화 이벤트",
        value: "NEW · DEADLINE_CHANGED · STATUS_CHANGED · BECAME_URGENT · NOT_OBSERVED · DISAPPEARED · RETURNED",
      },
      {
        label: "누적 타임라인",
        value: "eventId 중복 제거와 이전 값→현재 값 기록으로 공고별 변화 이력 누적",
      },
      {
        label: "판단 브리핑",
        value: "D-Day~D-3, 신규 긴급, 긴급 진입, 종료일 앞당김 근거로 상위 30건 설명",
      },
      {
        label: "현재 검증",
        value: "2026-07-16 snapshot · 2,446 notices · 613 changes · 813 timelines · 983 cumulative events",
      },
      {
        label: "주장 범위",
        value: "관측 변화 기록이며 공식 위험 점수·입양 예측·최종 동물 결과·외부 알림 운영이 아님",
      },
      ...publicStatusEvidence,
    ],
    signalCaseStudy,
    detailBrief: {
      problem: {
        what:
          "구조동물 공고의 현재 목록만으로는 신규·종료일 변경·상태 변경·미관측·복귀 같은 시간 변화와 오늘 먼저 확인할 이유를 알기 어렵습니다.",
        why:
          "시간 민감도가 높은 공고는 현재 유효성, 데이터 신뢰 상태, 이전 관측과의 차이, 마감 근거가 함께 보여야 검토 순서를 설명할 수 있기 때문입니다.",
      },
      dataMethod: {
        dataTypes: [
          "data.go.kr 구조동물 공고 live API",
          "latest / monthly public-safe notice snapshots",
          "daily change events와 missing-notice state",
          "per-notice cumulative timeline JSON",
        ],
        process: [
          "V1에서 KST 최근 30일 live 공고를 current·urgent·protected·archive로 정규화",
          "GitHub Actions가 매일 06:20 KST public-safe latest·monthly snapshot 생성",
          "이전 성공 snapshot과 안정 공고 키를 비교해 일곱 변화 이벤트와 missing state 생성",
          "eventId 기준 중복 제거 후 공고별 누적 타임라인 갱신",
          "D-Day~D-3와 당일 변화 근거를 결합해 deadline briefing 구성",
          "source/cache/fallback, collection count, truncation, warnings를 UI에 노출",
        ],
        metrics: [
          "pagesFetched / upstreamTotalCount / normalizedItemCount",
          "NEW / DEADLINE_CHANGED / STATUS_CHANGED / BECAME_URGENT",
          "NOT_OBSERVED / DISAPPEARED / RETURNED",
          "timeline noticeCount / eventCount",
          "days_left / deadline_status / briefing reason",
          "source / cacheStatus / fallbackReason / warnings",
        ],
      },
      limitations: [
        "V1 live API는 승인 상태, quota, 기관별 갱신 주기와 응답 형식 오류에 영향을 받습니다.",
        "V2 snapshot은 수집 시점의 public-safe 월간 관측이며 실시간 전체 upstream 보장을 의미하지 않습니다.",
        "변화 이벤트는 collector-observed 기록이며 미관측은 종료·입양·안락사 같은 최종 결과를 증명하지 않습니다.",
        "타임라인은 V2 보존을 시작한 이후의 이벤트만 포함합니다.",
        "사용자 계정, 영구 구독, 외부 email/SMS/push 발송, production SLA는 포함하지 않습니다.",
        "공식 위험 점수, 안락사 가능성, 입양 예측, 보호소 수용 capacity와 운영 성과를 제공하지 않습니다.",
        "서비스 키와 DATABASE_URL은 server-side에서만 사용하며 공개 JSON과 브라우저에 저장하지 않습니다.",
      ],
      linkNote:
        "공개 서비스의 V1 current notices, V2 today changes와 deadline briefing, GitHub production evidence에서 현재 탐색·일별 수집·이벤트·타임라인·주장 경계를 확인할 수 있습니다.",
    },
    focusPoints: [
      "V1 현재 탐색과 V2 시간 변화 추적을 별도 제품 계층으로 분리",
      "매일 public-safe snapshot을 이전 성공 수집과 비교해 일곱 변화 이벤트 생성",
      "미관측 상태 전이와 eventId 중복 제거로 공고별 누적 타임라인 구성",
      "D-Day~D-3와 당일 변화 근거를 설명 가능한 마감 브리핑으로 변환",
      "live/cache/fallback와 관측 이벤트·최종 결과의 claim boundary를 명시",
    ],
    links: [
      {
        label: "Shelter Signal 공개 서비스",
        href: SHELTER_LIVE_URL,
        type: "primary",
      },
      {
        label: "V2 Production Evidence",
        href: SHELTER_V2_EVIDENCE_URL,
        type: "secondary",
      },
      {
        label: "V2 오늘의 변화",
        href: SHELTER_CHANGES_URL,
        type: "secondary",
      },
      {
        label: "V2 마감 브리핑",
        href: SHELTER_BRIEFING_URL,
        type: "secondary",
      },
      {
        label: "GitHub 저장소",
        href: SHELTER_REPOSITORY_URL,
        type: "secondary",
      },
    ],
    sections: [
      {
        title: "프로젝트 개요",
        paragraphs: [
          "Shelter Signal은 불안정한 공공 구조동물 공고를 현재 탐색과 시간 변화 추적으로 분리한 모바일 우선 데이터 제품입니다.",
          "V1은 지금 유효한 공고와 보호 종료 임박 신호를 보여주고, V2는 어제와 달라진 공고, 공고별 누적 이력과 오늘의 마감 우선순위를 설명합니다.",
        ],
      },
      {
        title: "V1 Current / V2 History-aware",
        paragraphs: [
          "V1은 live API, KST freshness, region/page/limit, cache/fallback metadata로 현재·긴급·보호·아카이브를 탐색합니다.",
          "V2는 매일 06:20 KST public-safe snapshot을 보존하고 이전 성공 수집과 비교해 변화 이벤트, missing state, 누적 타임라인과 deadline briefing을 생성합니다.",
        ],
      },
      {
        title: "변화 이벤트와 판단 경계",
        paragraphs: [
          "한 번의 누락은 NOT_OBSERVED, 서로 다른 날짜의 반복 누락은 DISAPPEARED로 구분하며 RETURNED로 재관측을 기록합니다.",
          "이 이벤트는 수집기가 관측한 변화이며 실제 입양·종료·안락사 결과나 공식 위험 점수를 의미하지 않습니다.",
        ],
      },
      {
        title: "포트폴리오 관점의 의미",
        paragraphs: [
          "공공 API의 불안정성을 cache/fallback로만 감추지 않고, 현재 상태와 시간 이력을 분리해 이벤트 모델, 타임라인, 설명 가능한 브리핑과 public-safe 검증 경로까지 연결한 사례입니다.",
        ],
      },
    ],
  };
}

export const projects = sourceProjects.map(upgradeShelterSignal);

export const featuredProjects = projects
  .filter((project) => project.status === "featured")
  .sort((left, right) => left.sortOrder - right.sortOrder);
