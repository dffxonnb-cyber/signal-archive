export type ProjectPublicStatus = {
  access: string;
  repository: "Public repository" | "Private repository";
  verification: string;
  verifiedAt?: string;
  scope: string;
  currentLine?: string;
  bestFitRoles: string[];
};

const projectPublicStatusBySlug: Record<string, ProjectPublicStatus> = {
  "seoul-storefront-redveil": {
    access: "공개 V2 서비스",
    repository: "Public repository",
    verification: "Release evidence verified",
    verifiedAt: "2026-07-13",
    scope: "Frozen flagship",
    currentLine: "V2 공식 flagship · 공개 서비스 · 2026-07-13 검증",
    bestFitRoles: ["공간데이터 분석", "비즈니스 분석", "데이터 기반 서비스 기획"],
  },
  "shelter-signal": {
    access: "Live service",
    repository: "Public repository",
    verification: "Production flow verified",
    verifiedAt: "2026-06-12 09:30 KST",
    scope: "Live API · alert delivery not in scope",
    currentLine: "Live API 운영 흐름 검증 · 2026-06-12 · 실제 알림 발송 제외",
    bestFitRoles: ["공공데이터 분석", "데이터 서비스 운영", "API 기반 제품 분석"],
  },
  "decisionops-lab": {
    access: "Public reviewer report",
    repository: "Public repository",
    verification: "Workflow verified",
    verifiedAt: "2026-07-09",
    scope: "Synthetic workflow",
    currentLine: "Synthetic workflow 정본 · 공개 reviewer report · 2026-07-09 검증",
    bestFitRoles: ["제품 데이터 분석", "Analytics Engineering", "실험 분석"],
  },
  "lh-traffic-safety-analysis": {
    access: "Public evidence",
    repository: "Public repository",
    verification: "Canonical scope frozen",
    verifiedAt: "2026-07-15",
    scope: "Field-review signal",
    currentLine: "Canonical scope 동결 · 공개 evidence · 2026-07-15",
    bestFitRoles: ["GIS·공간데이터 분석", "공공 안전 데이터 분석", "리스크 우선순위 분석"],
  },
  "starbucks-promotion-analysis": {
    access: "Public artifacts",
    repository: "Public repository",
    verification: "CI artifact checks",
    scope: "Public dataset workflow",
    bestFitRoles: ["CRM·마케팅 데이터 분석", "고객 반응 분석", "캠페인 분석"],
  },
  "uk-online-retail-segment-analysis": {
    access: "Public artifacts",
    repository: "Public repository",
    verification: "CI artifact checks",
    scope: "Public dataset workflow",
    bestFitRoles: ["이커머스 분석", "고객 세그먼트 분석", "비즈니스 분석"],
  },
  shopeasy: {
    access: "Public dashboard",
    repository: "Public repository",
    verification: "Reproducible data checks",
    scope: "Synthetic commerce analysis",
    bestFitRoles: ["제품·전환 분석", "이커머스 분석", "A/B 테스트 분석"],
  },
  "job-signal-pipeline": {
    access: "Portfolio summary",
    repository: "Private repository",
    verification: "Local validation",
    scope: "Mock / local only",
    bestFitRoles: ["SQL 데이터 분석", "데이터 파이프라인", "데이터 운영"],
  },
  "nba-game-player-analysis": {
    access: "Archive summary",
    repository: "Private repository",
    verification: "Smoke-test evidence",
    scope: "Archive-level supporting project",
    bestFitRoles: ["데이터 분석", "스포츠 데이터 분석", "예측 모델링"],
  },
};

const fallbackStatus: ProjectPublicStatus = {
  access: "Portfolio summary",
  repository: "Private repository",
  verification: "Evidence documented",
  scope: "Supporting project",
  bestFitRoles: ["데이터 분석"],
};

export function getProjectPublicStatus(slug: string): ProjectPublicStatus {
  return projectPublicStatusBySlug[slug] ?? fallbackStatus;
}

export function getProjectCurrentStatusLine(slug: string): string {
  const status = getProjectPublicStatus(slug);

  return (
    status.currentLine ??
    [
      status.access,
      status.verification,
      status.verifiedAt ? status.verifiedAt : null,
      status.scope,
    ]
      .filter(Boolean)
      .join(" · ")
  );
}

export function getProjectBestFitRoles(slug: string): string[] {
  return getProjectPublicStatus(slug).bestFitRoles;
}

export function getProjectBestFitRoleLine(slug: string): string {
  return getProjectBestFitRoles(slug).join(" · ");
}

export function getProjectPublicStatusChips(slug: string): string[] {
  const status = getProjectPublicStatus(slug);

  return [
    status.access,
    status.repository,
    status.verification,
    status.verifiedAt ? `Checked ${status.verifiedAt}` : null,
    status.scope,
  ].filter(Boolean) as string[];
}

export function getProjectPublicStatusEvidence(slug: string) {
  const status = getProjectPublicStatus(slug);

  return [
    { label: "공개 접근", value: status.access },
    { label: "저장소 상태", value: status.repository },
    {
      label: "검증 상태",
      value: status.verifiedAt
        ? `${status.verification} · ${status.verifiedAt}`
        : status.verification,
    },
    { label: "범위 상태", value: status.scope },
    { label: "추천 직무", value: status.bestFitRoles.join(" · ") },
  ];
}
