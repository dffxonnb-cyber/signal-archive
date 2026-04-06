import Link from "next/link";

import { HomeProjectCard } from "@/components/home-project-card";
import { featuredProjects } from "@/content/projects";

const heroMeta = [
  {
    label: "Roles",
    value: "데이터 분석가 / 공간데이터 분석가",
  },
  {
    label: "Frame",
    value: "문제 정의 / 구조 설계 / 검증 중심",
  },
];

const frameItems = [
  {
    index: "01",
    title: "문제 정의",
    label: "signals first",
    summary: "먼저 무엇을 의심하고 무엇을 다시 물어야 하는지 정리합니다.",
  },
  {
    index: "02",
    title: "구조 설계",
    label: "analysis structure",
    summary: "흩어진 데이터를 판단 가능한 구조로 다시 묶고 기준을 세웁니다.",
  },
  {
    index: "03",
    title: "검증 중심",
    label: "decision ready",
    summary: "보기 좋은 결과보다 다시 설명하고 검토할 수 있는 결과를 남깁니다.",
  },
];

const routeGroups = [
  {
    href: "/case-studies",
    label: "Case Studies",
    summary: "문제 해결 방식 정리",
  },
  {
    href: "/writing",
    label: "Writing",
    summary: "프로젝트 연계 기록",
  },
  {
    href: "/resume",
    label: "Resume",
    summary: "압축된 경력 정보",
  },
  {
    href: "/contact",
    label: "Contact",
    summary: "공개 버전 안내",
  },
];

const homeProjectMeta: Record<
  string,
  {
    lens: string;
    problem: string;
    roleLabel: string;
    tags: string[];
    impact: string;
    quickNote: string;
  }
> = {
  "lh-traffic-safety-analysis": {
    lens: "spatial / public / risk",
    problem: "사고 건수 집계가 아니라 도시 인프라 관점에서 먼저 읽어야 할 위험 신호가 필요했다.",
    roleLabel: "spatial analysis / indicator design",
    tags: ["공간 분석", "공공데이터", "위험 해석", "지표 설계"],
    impact: "교통안전 해석을 빈도 정리에서 우선순위 판단 구조로 전환한 사례.",
    quickNote: "공간 분석과 위험도 해석",
  },
  "seoul-storefront-redveil": {
    lens: "end-to-end / decision tool",
    problem: "좋아 보이는 상가보다 매입 전에 먼저 걸러야 할 리스크 신호를 구조적으로 보여줄 필요가 있었다.",
    roleLabel: "service framing / web implementation",
    tags: ["리스크 기준", "SQL", "웹 구현", "상권 분석"],
    impact: "분석 결과를 문서에 멈추지 않고 웹 기반 판단 도구까지 연결한 사례.",
    quickNote: "리스크 판단 기준 설계",
  },
  "uk-online-retail-segment-analysis": {
    lens: "commerce / segmentation / insight",
    problem: "세그먼트 분류 자체보다, 어떤 고객 해석이 사업 판단으로 이어지는지가 더 중요했다.",
    roleLabel: "segment analysis / business reading",
    tags: ["커머스", "세그먼트", "고객 해석", "인사이트"],
    impact: "리테일 데이터를 사업 질문과 연결된 해석 구조로 정리한 사례.",
    quickNote: "비즈니스 해석 중심 세그먼트",
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

            <h1 className="hero-title">
              위험 신호와 구조를 먼저 짚는
              <br />
              <span className="hero-title__accent">데이터 분석가</span>
            </h1>

            <p className="home-hero__summary">
              흩어진 데이터를 판단 가능한 구조로 재편하고, 겉으로 좋아 보이는 결과보다 먼저 검증할
              신호를 정리합니다.
            </p>

            <dl className="home-hero__meta-grid">
              {heroMeta.map((item) => (
                <div className="home-hero__meta-item" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="button-row home-hero__actions">
              <Link className="button-link" href="/projects">
                대표 프로젝트 보기
              </Link>
              <Link className="button-link button-link--secondary" href="/resume">
                Resume 보기
              </Link>
            </div>
          </div>

          <aside className="home-dossier">
            <div className="home-dossier__head">
              <span className="eyebrow">Selected Dossiers</span>
              <p>Home에서 바로 확인할 대표 작업 세 개.</p>
            </div>

            <div className="home-dossier__list">
              {selectedProjects.map(({ project, meta }, index) => (
                <Link className="home-dossier__item" href={`/projects/${project.slug}`} key={project.slug}>
                  <span className="home-dossier__index">{`0${index + 1}`}</span>
                  <div className="home-dossier__body">
                    <strong>{project.title}</strong>
                    <span>{meta?.quickNote ?? project.badges[0] ?? project.format}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="home-dossier__footer">
              <span>spatial</span>
              <span>end-to-end</span>
              <span>commerce</span>
            </div>
          </aside>
        </section>

        <section className="surface-card home-frame">
          <div className="home-frame__header">
            <div>
              <span className="eyebrow">Brand Frame</span>
              <h2 className="section-title">분석 기준 3축</h2>
            </div>
            <p className="page-intro">
              설명을 늘리지 않고, 무엇을 먼저 보고 어떻게 판단하는지를 세 축으로 압축했습니다.
            </p>
          </div>

          <div className="home-frame__matrix">
            {frameItems.map((item) => (
              <article className="home-frame-axis" key={item.title}>
                <div className="home-frame-axis__top">
                  <span className="home-frame-axis__index">{item.index}</span>
                  <span className="home-frame-axis__label">{item.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-grid home-selected">
          <div className="section-head section-head--split section-head--tight">
            <div>
              <span className="eyebrow">Selected Projects</span>
              <h2 className="section-title">대표 사례 세 개로 읽히는 분석 역량</h2>
            </div>
            <p className="page-intro section-copy">
              Home에서는 긴 소개를 줄이고, 검토 가능한 사례 패널 세 개만 중심에 남겼습니다.
            </p>
          </div>

          <div className="home-selected__grid">
            {selectedProjects.map(({ project, meta }, index) => (
              <HomeProjectCard
                key={project.slug}
                index={index + 1}
                impact={meta?.impact ?? project.outcome}
                lens={meta?.lens ?? project.badges.slice(0, 2).join(" / ")}
                problem={meta?.problem ?? project.summary}
                project={project}
                roleLabel={meta?.roleLabel ?? project.role.slice(0, 2).join(" / ")}
                tags={meta?.tags ?? project.problemTypes.slice(0, 4)}
              />
            ))}
          </div>
        </section>

        <section className="surface-card home-routes">
          <div className="home-routes__intro">
            <span className="eyebrow">Archive Routes</span>
            <p>나머지 경로는 보조 탐색으로만 남깁니다.</p>
          </div>

          <div className="home-routes__grid">
            {routeGroups.map((route) => (
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
