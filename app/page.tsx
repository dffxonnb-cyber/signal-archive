import Link from "next/link";

import { HomeProjectCard } from "@/components/home-project-card";
import { featuredProjects } from "@/content/projects";

const heroMeta = [
  "Data Analyst Candidate",
  "도시 / 상권 / 사용자 데이터",
  "문제 정의 / 구조화 / 지표 설계 / 검증",
  "Python / SQL / GIS / Tableau",
];

const coreStack = ["Python", "SQL", "pandas", "Jupyter", "Tableau", "JavaScript", "GIS"];

const mainStrength = [
  "문제 정의",
  "데이터 구조화",
  "지표 설계",
  "검증",
  "웹/문서 결과물 구현",
];

const targetRoles = [
  "Data Analyst",
  "Business Data Analyst",
  "Spatial Data Analyst",
  "CRM & Growth Data Analyst",
];

const focusDomains = ["도시", "상권", "사용자 데이터"];

const featuredSignals = ["Redveil", "LH Traffic Safety", "UK Online Retail"];

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
  { href: "/writing", label: "Writing", summary: "linked notes / essays" },
  { href: "/resume", label: "Resume", summary: "압축된 경력 정보" },
  { href: "/contact", label: "Contact", summary: "공개 버전 안내" },
];

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
    note: "공간 분석과 위험도 해석",
    problem: "사고 건수 집계가 아니라 도시 인프라 관점에서 먼저 읽어야 할 위험 신호가 필요했다.",
    roleLabel: "spatial analysis / indicator design",
    scopeLabel: "public safety / spatial risk reading",
    tags: ["공간 분석", "공공데이터", "위험 해석", "지표 설계"],
    impact: "교통안전 해석을 빈도 정리에서 우선순위 판단 구조로 전환한 사례.",
  },
  "seoul-storefront-redveil": {
    lens: "end-to-end / decision tool",
    note: "리스크 판단 기준 설계",
    problem: "좋아 보이는 상가보다 매입 전에 먼저 걸러야 할 리스크 신호를 구조적으로 보여줄 필요가 있었다.",
    roleLabel: "service framing / web implementation",
    scopeLabel: "commercial risk / end-to-end build",
    tags: ["리스크 기준", "SQL", "웹 구현", "상권 분석"],
    impact: "분석 결과를 문서에 멈추지 않고 웹 기반 판단 도구까지 연결한 사례.",
  },
  "uk-online-retail-segment-analysis": {
    lens: "commerce / segmentation / insight",
    note: "비즈니스 해석 중심 세그먼트",
    problem: "세그먼트 분류 자체보다, 어떤 고객 해석이 사업 판단으로 이어지는지가 더 중요했다.",
    roleLabel: "segment analysis / business reading",
    scopeLabel: "retail data / business interpretation",
    tags: ["커머스", "세그먼트", "고객 해석", "인사이트"],
    impact: "리테일 데이터를 사업 질문과 연결된 해석 구조로 정리한 사례.",
  },
};

export default function HomePage() {
  const selectedProjects = featuredProjects.slice(0, 3).map((project) => ({
    project,
    meta: homeProjectMeta[project.slug],
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
              <span className="home-hero__title-prefix">위험신호와 구조를 먼저 짚는</span>
              <span className="hero-title__accent home-hero__title-tail">데이터 분석가</span>
            </h1>

            <p className="home-hero__summary">
              <span className="home-hero__summary-line">
                흩어진 데이터를 판단 가능한 구조로 재편하고,
              </span>
              <span className="home-hero__summary-line">
                보기 좋은 결과보다 먼저 검증할 신호를 정리합니다.
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
                Resume 보기
              </Link>
            </div>
          </div>

          <aside className="home-rail">
            <div className="home-rail__head">
              <span className="eyebrow">Selected Dossiers</span>
              <strong>대표 사례 3개</strong>
            </div>

            <div className="home-rail__list">
              {selectedProjects.map(({ project, meta }, index) => (
                <Link className="home-rail__item" href={`/projects/${project.slug}`} key={project.slug}>
                  <span className="home-rail__index">{`0${index + 1}`}</span>
                  <div className="home-rail__body">
                    <strong>{project.title}</strong>
                    <span>{meta?.note ?? project.badges[0] ?? project.format}</span>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </section>

        <section className="surface-card home-snapshot">
          <div className="home-snapshot__head">
            <span className="eyebrow">Hiring Snapshot</span>
            <h2 className="section-title">한 화면 요약</h2>
            <p className="page-intro">
              추상적인 문장보다 먼저, 어떤 역할을 목표로 하고 어떤 데이터를 다루며 어떤 기술과 결과물로
              연결하는지 바로 읽히도록 정리했습니다.
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
                <h3>문제 정의 → 데이터 구조화 → 지표 설계 → 검증 → 웹/문서 결과물 구현</h3>
              </div>

              <p>
                보기 좋은 결과를 빠르게 나열하기보다, 다시 설명하고 검토할 수 있는 판단 구조와 산출물까지
                남기는 쪽에 강점이 있습니다.
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
                <span className="eyebrow">Target Role</span>
                <h3>
                  Data Analyst / Business Data Analyst / Spatial Data Analyst / CRM & Growth Data
                  Analyst
                </h3>
              </div>

              <p>
                도시, 상권, 사용자 데이터를 바탕으로 의사결정 구조를 설계하고 설명 가능한 결과로 번역하는 역할을
                목표로 합니다.
              </p>

              <div className="home-snapshot-card__meta">
                <div className="home-snapshot-card__meta-block">
                  <span className="home-snapshot-card__meta-label">Focus Domain</span>
                  <strong>{focusDomains.join(" · ")}</strong>
                </div>

                <div className="home-snapshot-card__meta-block">
                  <span className="home-snapshot-card__meta-label">Featured Work</span>
                  <strong>{featuredSignals.join(" · ")}</strong>
                </div>
              </div>

              <div className="home-snapshot-card__chips" aria-label="타깃 역할">
                {targetRoles.map((item) => (
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
