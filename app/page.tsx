import Link from "next/link";

import { HomeProjectCard } from "@/components/home-project-card";
import { featuredProjects } from "@/content/projects";

const heroRoles = ["데이터 분석가", "공간데이터 분석가"];

const frameItems = [
  {
    title: "문제 정의",
    label: "signals first",
    description: "겉으로 드러난 수치보다 먼저 검증해야 할 위험 신호와 질문을 정리합니다.",
  },
  {
    title: "구조 설계",
    label: "analysis structure",
    description: "흩어진 데이터를 분석 가능한 단위로 다시 묶고, 판단 기준이 되는 구조를 세웁니다.",
  },
  {
    title: "검증 중심",
    label: "decision ready",
    description: "보기 좋은 결과보다 실제로 다시 확인하고 설명할 수 있는 결과를 남깁니다.",
  },
];

const archiveRoutes = [
  {
    href: "/case-studies",
    label: "Case Studies",
    title: "문제 해결 방식",
    description: "문제 정의, 구조 설계, 전달 구조를 별도 프레임으로 정리한 기록.",
  },
  {
    href: "/writing",
    label: "Writing",
    title: "분석 기록 아카이브",
    description: "프로젝트와 연결되는 메모, 회고, 글의 흐름을 묶은 아카이브.",
  },
  {
    href: "/resume",
    label: "Resume",
    title: "압축된 경력 정보",
    description: "기술, 프로젝트, 역할을 빠르게 읽을 수 있도록 압축한 요약본.",
  },
  {
    href: "/contact",
    label: "Contact",
    title: "공개 버전 안내",
    description: "공개 사이트 기준의 연락 방식과 포트폴리오 범위를 정리한 페이지.",
  },
];

const homeProjectMeta: Record<
  string,
  {
    lens: string;
    heroNote: string;
    problem: string;
    roleLabel: string;
    tags: string[];
    impact: string;
  }
> = {
  "lh-traffic-safety-analysis": {
    lens: "spatial / public / risk",
    heroNote: "공간 분석과 위험도 해석",
    problem: "사고 건수 집계가 아니라 도시 인프라 관점에서 먼저 읽어야 할 위험 신호가 필요했다.",
    roleLabel: "spatial analysis / indicator design",
    tags: ["공간 분석", "공공데이터", "위험 해석", "지표 설계"],
    impact: "교통안전 해석을 빈도 중심 정리에서 우선순위 판단 구조로 전환한 사례.",
  },
  "seoul-storefront-redveil": {
    lens: "end-to-end / decision tool",
    heroNote: "리스크 판단 기준 설계",
    problem: "좋아 보이는 상가보다 매입 전에 먼저 걸러야 할 리스크 신호를 구조적으로 보여줄 필요가 있었다.",
    roleLabel: "service framing / web implementation",
    tags: ["리스크 기준", "SQL", "웹 구현", "상권 분석"],
    impact: "분석 결과를 문서에 멈추지 않고 웹 기반 판단 도구까지 연결한 사례.",
  },
  "uk-online-retail-segment-analysis": {
    lens: "commerce / segmentation / insight",
    heroNote: "비즈니스 해석 중심 세그먼트",
    problem: "세그먼트 분류 자체보다, 어떤 고객 해석이 사업 판단으로 이어지는지가 더 중요했다.",
    roleLabel: "segment analysis / business reading",
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
              <p className="intro-name">Data Analysis Portfolio</p>
            </div>

            <h1 className="hero-title">위험 신호와 구조를 먼저 짚는 데이터 분석가</h1>

            <div className="home-hero__summary">
              <p>
                흩어진 데이터를 분석 가능한 구조로 정리하고, 표면적인 결과보다 먼저 확인해야 할 위험
                신호와 맥락을 짚습니다.
              </p>
              <p>
                공간 데이터, 상권 리스크, 커머스 분석까지 서로 다른 도메인에서도 같은 판단 프레임으로
                문제를 다룹니다.
              </p>
            </div>

            <div className="home-hero__tokens" aria-label="핵심 포지션">
              {heroRoles.map((role) => (
                <span className="home-token" key={role}>
                  {role}
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

          <aside className="home-hero__rail">
            <section className="home-panel">
              <div className="home-panel__head">
                <span className="eyebrow">Position</span>
                <p>문제 정의, 구조 설계, 검증 중심의 분석 프레임으로 읽히는 포지션.</p>
              </div>
              <div className="home-panel__stack">
                <div className="home-panel__metric">
                  <span className="home-panel__label">Primary</span>
                  <strong>데이터 분석가 / 공간데이터 분석가</strong>
                </div>
                <div className="home-panel__metric">
                  <span className="home-panel__label">Focus</span>
                  <strong>risk signals / structure design / end-to-end analysis</strong>
                </div>
              </div>
            </section>

            <section className="home-panel">
              <div className="home-panel__head">
                <span className="eyebrow">Selected Work</span>
                <p>Home에서 바로 확인할 대표 프로젝트 3개.</p>
              </div>
              <div className="home-work-list">
                {selectedProjects.map(({ project, meta }, index) => (
                  <Link className="home-work-link" href={`/projects/${project.slug}`} key={project.slug}>
                    <span className="home-work-link__index">{`0${index + 1}`}</span>
                    <div className="home-work-link__body">
                      <strong>{project.title}</strong>
                      <span>{meta?.heroNote ?? project.badges[0] ?? project.format}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </section>

        <section className="surface-card home-frame">
          <div className="home-frame__intro">
            <span className="eyebrow">Brand Frame</span>
            <h2 className="section-title">반복 설명 대신, 세 개의 프레임으로 압축한 분석 태도</h2>
            <p className="page-intro">
              같은 말을 다른 제목으로 나누지 않고, 문제를 다루는 기준을 하나의 구조로 묶었습니다.
            </p>
          </div>

          <div className="home-frame__grid">
            {frameItems.map((item, index) => (
              <article className="home-frame-card" key={item.title}>
                <div className="home-frame-card__top">
                  <span className="home-frame-card__index">{`0${index + 1}`}</span>
                  <span className="home-frame-card__label">{item.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-grid home-selected">
          <div className="section-head section-head--split section-head--tight">
            <div>
              <span className="eyebrow">Selected Projects</span>
              <h2 className="section-title">대표 작업 세 개로 읽히는 분석 역량</h2>
            </div>
            <p className="page-intro section-copy">
              한 줄 소개 대신 문제 정의, 역할, 핵심 태그, 결과를 카드 안에서 바로 읽을 수 있게
              정리했습니다.
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

        <section className="surface-card home-archive">
          <div className="section-head section-head--split section-head--tight">
            <div>
              <span className="eyebrow">Archive Routes</span>
              <h2 className="section-title">프로젝트 바깥의 기록은 얇게, 하지만 바로 닿게</h2>
            </div>
            <p className="page-intro section-copy">
              Case Studies, Writing, Resume, Contact는 홈에서 과하게 설명하지 않고 경로만 분명하게
              남겼습니다.
            </p>
          </div>

          <div className="home-archive__grid">
            {archiveRoutes.map((route) => (
              <Link className="home-archive-card" href={route.href} key={route.href}>
                <span className="home-archive-card__label">{route.label}</span>
                <strong>{route.title}</strong>
                <p>{route.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
