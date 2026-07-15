export type ProjectPublicStatus = {
  access: string;
  repository: "Public repository" | "Private repository";
  verification: string;
  verifiedAt?: string;
  scope: string;
  currentLine?: string;
};

const projectPublicStatusBySlug: Record<string, ProjectPublicStatus> = {
  "seoul-storefront-redveil": {
    access: "공개 V2 서비스",
    repository: "Public repository",
    verification: "Release evidence verified",
    verifiedAt: "2026-07-13",
    scope: "Frozen flagship",
    currentLine: "V2 공식 flagship · 공개 서비스 · 2026-07-13 검증",
  },
  "shelter-signal": {
    access: "Live service",
    repository: "Public repository",
    verification: "Production flow verified",
    verifiedAt: "2026-06-12 09:30 KST",
    scope: "Live API · alert delivery not in scope",
    currentLine: "Live API 운영 흐름 검증 · 2026-06-12 · 실제 알림 발송 제외",
  },
  "decisionops-lab": {
    access: "Public reviewer report",
    repository: "Public repository",
    verification: "Workflow verified",
    verifiedAt: "2026-07-09",
    scope: "Synthetic workflow",
    currentLine: "Synthetic workflow 정본 · 공개 reviewer report · 2026-07-09 검증",
  },
  "lh-traffic-safety-analysis": {
    access: "Public evidence",
    repository: "Public repository",
    verification: "Canonical scope frozen",
    verifiedAt: "2026-07-15",
    scope: "Field-review signal",
    currentLine: "Canonical scope 동결 · 공개 evidence · 2026-07-15",
  },
  "starbucks-promotion-analysis": {
    access: "Public artifacts",
    repository: "Public repository",
    verification: "CI artifact checks",
    scope: "Public dataset workflow",
  },
  "uk-online-retail-segment-analysis": {
    access: "Public artifacts",
    repository: "Public repository",
    verification: "CI artifact checks",
    scope: "Public dataset workflow",
  },
  shopeasy: {
    access: "Public dashboard",
    repository: "Public repository",
    verification: "Reproducible data checks",
    scope: "Synthetic commerce analysis",
  },
  "job-signal-pipeline": {
    access: "Portfolio summary",
    repository: "Private repository",
    verification: "Local validation",
    scope: "Mock / local only",
  },
  "nba-game-player-analysis": {
    access: "Archive summary",
    repository: "Private repository",
    verification: "Smoke-test evidence",
    scope: "Archive-level supporting project",
  },
};

const fallbackStatus: ProjectPublicStatus = {
  access: "Portfolio summary",
  repository: "Private repository",
  verification: "Evidence documented",
  scope: "Supporting project",
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
  ];
}
