import Link from "next/link";

import { HomeProjectCard } from "@/components/home-project-card";
import { IdentitySnapshotModule } from "@/components/page-summary";
import { featuredProjects, projects } from "@/content/projects";

const heroMeta = [
  "주요 역할: 데이터 분석가 / 공간 데이터 분석가",
  "확장 역할: 비즈니스 데이터 분석 / CRM 분석",
  "도메인: 도시 / 상권 / 사용자 데이터",
  "도구: Python / SQL / GIS / Tableau",
];

const coreStack = ["Python", "SQL", "pandas", "Jupyter", "Tableau", "JavaScript", "GIS"];

const mainStrength = [
  "문제 정의",
  "데이터 구조화",
  "지표 설계",
  "검증",
  "웹/문서 결과물 구현",
];

const primaryRoles = ["Data Analyst", "Spatial Data Analyst"];

const secondaryRoles = ["Business Data Analyst", "CRM & Growth Data Analyst"];
const identityRoles = ["데이터 분석가", "공간 데이터 분석가"];
const identitySecondaryRoles = ["비즈니스 데이터 분석", "CRM 분석"];
const identityDomains = ["공공데이터", "도시", "상권/부동산", "CRM"];

const lensItems = [
  {
    index: "01",
    title: "문제 정의",
    label: "signals first",
    summaryLines: [
      "무엇을 의심하고 어떤 질문을 다시 세워야 하는지",
      "우선 정리합니다.",
    ],
  },
  {
    index: "02",
    title: "구조 설계",
    label: "analysis structure",
    summaryLines: [
      "흩어진 데이터를 판단 가능한 구조로 다시 묶고",
      "해석 기준을 세웁니다.",
    ],
  },
  {
    index: "03",
    title: "검증 중심",
    label: "decision ready",
    summaryLines: [
      "보기 좋은 결과보다 다시 설명하고 검토할 수 있는",
      "결과를 남깁니다.",
    ],
  },
];

const archiveRoutes = [
  { href: "/case-studies", label: "Case Studies", summary: "문제 해결 방식" },
  { href: "/writing", label: "Writing", summary: "분석 메모와 회고" },
  { href: "/resume", label: "Resume", summary: "이력 요약과 역할 적합성" },
  { href: "/contact", label: "Contact", summary: "연락 경로와 검토 안내" },
];

const selectedProjectSlugs = [
  "seoul-storefront-redveil",
  "lh-traffic-safety-analysis",
  "starbucks-promotion-analysis",
] as const;

const homeProjectMeta: Record<
  string,
  {
    lens: string;
    note: string;
    problem: string;
    roleLabel: string;
    scopeLabel: string;
    tags: string[];
    impact: string;
  }
> = {
  "lh-traffic-safety-analysis": {
    lens: "spatial / public / risk",
    note: "공공 안전 우선순위 설계",
    problem: "사고 건수 집계만으로는 신도시 같은 저이력 지역의 설치 우선순위를 설명하기 어려웠다.",
    roleLabel: "공간 분석 / 우선순위 지표 설계",
    scopeLabel: "공공 안전 / 설치 우선순위",
    tags: ["공간 분석", "공공데이터", "우선순위 비교", "지표 설계"],
    impact: "Mean AUC 0.8604와 Top-10% Lift 4.39x를 바탕으로 설치 우선순위를 비교 가능한 형태로 정리한 사례.",
  },
  "seoul-storefront-redveil": {
    lens: "end-to-end / decision tool",
    note: "상권 검토 서비스 구현",
    problem: "매입 전 검토에서 추천보다 먼저 확인해야 할 항목을 한 화면에 보여줄 필요가 있었다.",
    roleLabel: "비교 기준 설계 / 웹 구현",
    scopeLabel: "상권 매입 검토 / 공개 서비스",
    tags: ["상권 분석", "비교 기준", "웹 구현", "공공데이터"],
    impact: "서울 25개 구와 거래 12,074건을 바탕으로 매물 비교와 확인 포인트를 공개 웹으로 정리한 사례.",
  },
  "uk-online-retail-segment-analysis": {
    lens: "commerce / segmentation / insight",
    note: "매출·재구매 해석 중심 세그먼트",
    problem: "세그먼트 분류 자체보다, 어떤 고객 해석이 매출과 재구매 액션으로 이어지는지가 더 중요했다.",
    roleLabel: "세그먼트 해석 / 인사이트 정리",
    scopeLabel: "리테일 데이터 / 매출·재구매 해석",
    tags: ["커머스", "세그먼트", "고객 해석", "인사이트"],
    impact: "상위 20% 고객이 매출의 73.5%를 차지한다는 신호를 바탕으로 세그먼트를 액션 언어로 번역한 사례.",
  },
  "starbucks-promotion-analysis": {
    lens: "crm / offer / response",
    note: "CRM 반응 구조 분석",
    problem: "고객, 오퍼, 채널 데이터가 흩어져 있어 어떤 제안이 어떤 반응으로 이어졌는지 한 번에 읽기 어려웠다.",
    roleLabel: "오퍼 반응 해석 / Tableau 결과물",
    scopeLabel: "CRM / 마케팅 반응 분석",
    tags: ["CRM", "오퍼 반응", "채널 효과", "Tableau"],
    impact: "고객-오퍼-채널 구조를 다시 묶어 세그먼트 반응과 마케팅 액션까지 연결한 사례.",
  },
};

export default function HomePage() {
  const selectedProjects = selectedProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project))
    .map((project) => ({
      project,
      meta: homeProjectMeta[project.slug],
    }));
  const projectSignals = selectedProjects.map(({ project, meta }) => ({
    label: project.title,
    href: `/projects/${project.slug}`,
    detail: meta?.note ?? project.badges[0] ?? project.format,
    kind: "internal" as const,
  }));

  return (
    <main className="page-shell">
      <div className="site-container page-grid page-grid--home">
        <section className="surface-card home-hero">
          <div className="home-hero__copy">
            <div className="home-hero__lead">
              <span className="eyebrow">Signal Archive</span>
              <p className="intro-name">Analytical Dossier</p>
            </div>

            <h1 className="hero-title home-hero__title">
              <span className="home-hero__title-prefix">문제를 다시 정의하고, 데이터를 판단 가능한 구조로 바꾸는</span>
              <span className="hero-title__accent home-hero__title-tail">데이터 분석가</span>
            </h1>

            <p className="home-hero__summary">
              <span className="home-hero__summary-line">
                흩어진 데이터를 분석 가능한 단위로 정리하고,
              </span>
              <span className="home-hero__summary-line">
                문제 정의·지표 설계·검증 과정을 거쳐 의사결정에 필요한 결과물로 연결합니다.
              </span>
            </p>

            <div className="home-hero__meta-line" aria-label="핵심 메타">
              {heroMeta.map((item) => (
                <span className="home-hero__meta-token" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="button-row home-hero__actions">
              <Link className="button-link" href="/projects">
                대표 프로젝트 보기
              </Link>
              <Link className="button-link button-link--secondary" href="/resume">
                이력서 보기
              </Link>
            </div>
          </div>

          <IdentitySnapshotModule
            ariaLabel="home identity snapshot"
            domains={identityDomains}
            projectSignals={projectSignals}
            roles={identityRoles}
            secondaryRoles={identitySecondaryRoles}
            stack={coreStack}
            stats={[
              { label: "역할 축", value: identityRoles.length },
              { label: "도메인 축", value: identityDomains.length },
              { label: "대표 신호", value: projectSignals.length },
            ]}
          />
        </section>

        <section className="surface-card home-snapshot">
          <div className="home-snapshot__head">
            <span className="eyebrow">Hiring Snapshot</span>
            <h2 className="section-title">한 화면 요약</h2>
            <p className="page-intro">
              채용 담당자가 첫 화면에서 바로 읽을 수 있도록, 목표 역할과 핵심 도메인, 작업 방식과 대표 결과물을
              한 화면에 압축했습니다.
            </p>
          </div>

          <div className="home-snapshot__grid">
            <article className="home-snapshot-card home-snapshot-card--stack">
              <div className="home-snapshot-card__top">
                <span className="eyebrow">Core Stack</span>
                <h3>Python · SQL · pandas · Jupyter · Tableau · JavaScript · GIS</h3>
              </div>

              <p>
                데이터 분석, 탐색, 시각화, 웹 전달물까지 하나의 흐름으로 연결할 때 실제로 가장 자주 사용하는
                도구들입니다.
              </p>

              <div className="home-snapshot-card__chips" aria-label="핵심 기술 스택">
                {coreStack.map((item) => (
                  <span className="home-snapshot-card__chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="home-snapshot-card home-snapshot-card--strength">
              <div className="home-snapshot-card__top">
                <span className="eyebrow">Main Strength</span>
                <h3>문제 정의 → 데이터 정리 → 지표 설계 → 검증 → 웹/문서 결과물 구현</h3>
              </div>

              <p>
                보기 좋은 결과를 빠르게 나열하기보다, 질문을 다시 세우고 검증 가능한 방식으로 결과물까지
                연결하는 작업 방식을 중요하게 생각합니다.
              </p>

              <div className="home-snapshot-card__chips" aria-label="핵심 강점">
                {mainStrength.map((item) => (
                  <span className="home-snapshot-card__chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="home-snapshot-card home-snapshot-card--role">
              <div className="home-snapshot-card__top">
                <span className="eyebrow">Role Fit</span>
                <h3>Data Analyst / Spatial Data Analyst</h3>
              </div>

              <p>
                도시, 상권, 사용자 데이터를 구조화하고 설명 가능한 지표와 결과물로 연결하는 역할에 가장 잘 맞습니다.
                비즈니스 데이터 분석과 CRM/Growth 분석은 2순위 확장 역할로 보고 있습니다.
              </p>

              <div className="home-snapshot-card__meta">
                <div className="home-snapshot-card__meta-block">
                  <span className="home-snapshot-card__meta-label">Primary Role</span>
                  <strong>{primaryRoles.join(" · ")}</strong>
                </div>

                <div className="home-snapshot-card__meta-block">
                  <span className="home-snapshot-card__meta-label">Secondary Fit</span>
                  <strong>{secondaryRoles.join(" · ")}</strong>
                </div>
              </div>

              <div className="home-snapshot-card__chips" aria-label="타깃 역할">
                {[...primaryRoles, ...secondaryRoles].map((item) => (
                  <span className="home-snapshot-card__chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="surface-card home-lens">
          <div className="home-lens__head">
            <span className="eyebrow">Analytical Lens</span>
            <h2 className="section-title">판단 기준 3축</h2>
          </div>

          <div className="home-lens__matrix">
            {lensItems.map((item) => (
              <article className="home-lens__axis" key={item.title}>
                <div className="home-lens__axis-top">
                  <span className="home-lens__axis-index">{item.index}</span>
                  <span className="home-lens__axis-label">{item.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p>
                  {item.summaryLines.map((line) => (
                    <span className="home-lens__summary-line" key={line}>
                      {line}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-grid home-selected">
          <div className="home-selected__head">
            <span className="eyebrow">Selected Projects</span>
            <h2 className="section-title">대표 사례 3개</h2>
            <p className="page-intro">
              각 프로젝트가 어떤 분석 역할 적합성을 보여주는지 빠르게 읽히도록, 문제 유형과 결과물 기준으로
              다시 정리했습니다.
            </p>
          </div>

          <div className="home-selected__grid">
            {selectedProjects.map(({ project, meta }, index) => (
              <HomeProjectCard
                key={project.slug}
                index={index + 1}
                lens={meta?.lens ?? project.badges.slice(0, 2).join(" / ")}
                problem={meta?.problem ?? project.summary}
                roleLabel={meta?.roleLabel ?? project.role.slice(0, 2).join(" / ")}
                scopeLabel={meta?.scopeLabel ?? project.domains.slice(0, 2).join(" / ")}
                tags={meta?.tags ?? project.problemTypes.slice(0, 4)}
                impact={meta?.impact ?? project.outcome}
                project={project}
              />
            ))}
          </div>
        </section>

        <section className="surface-card home-routes">
          <span className="eyebrow">Archive Routes</span>
          <div className="home-routes__grid">
            {archiveRoutes.map((route) => (
              <Link className="home-route" href={route.href} key={route.href}>
                <strong>{route.label}</strong>
                <span>{route.summary}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
