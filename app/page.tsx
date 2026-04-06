import Link from "next/link";

import { HomeProjectCard } from "@/components/home-project-card";
import { featuredProjects } from "@/content/projects";

const heroMeta = [
  "데이터 분석가 / 공간데이터 분석가",
  "문제 정의 / 구조 설계 / 검증 중심",
];

const lensItems = [
  {
    index: "01",
    title: "문제 정의",
    label: "signals first",
    summary: "무엇을 의심하고 어떤 질문을 다시 세워야 하는지 먼저 정리합니다.",
  },
  {
    index: "02",
    title: "구조 설계",
    label: "analysis structure",
    summary: "흩어진 데이터를 판단 가능한 구조로 다시 묶고 해석 기준을 세웁니다.",
  },
  {
    index: "03",
    title: "검증 중심",
    label: "decision ready",
    summary: "보기 좋은 결과보다 다시 설명하고 검토할 수 있는 결과를 남깁니다.",
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
              <span className="home-hero__title-prefix">위험 신호와 구조를 먼저 짚는</span>
              <span className="hero-title__accent home-hero__title-tail">데이터 분석가</span>
            </h1>

            <p className="home-hero__summary">
              흩어진 데이터를 판단 가능한 구조로 재편하고, 보기 좋은 결과보다 먼저 검증할 신호를
              정리합니다.
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
                <p>{item.summary}</p>
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
