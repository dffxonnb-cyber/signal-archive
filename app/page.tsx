import Link from "next/link";

import { caseStudies } from "@/content/case-studies";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { writingEntries } from "@/content/writing";

export default function HomePage() {
  const featuredWriting = writingEntries.slice(0, 2);
  const heroProjects = featuredProjects.slice(0, 2);

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card intro-panel">
          <div className="intro-layout">
            <div className="page-grid intro-main">
              <div>
                <span className="eyebrow">Signal Archive</span>
                <p className="intro-name">공개용 버전</p>
              </div>
              <h1 className="page-title">{profile.headline}</h1>
              <div className="copy-stack intro-copy">
                {profile.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="tag-list">
                {profile.primaryRoles.map((role) => (
                  <span className="tag tag--accent" key={role}>
                    {role}
                  </span>
                ))}
                {profile.keywords.slice(0, 3).map((keyword) => (
                  <span className="tag" key={keyword}>
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="button-row">
                <Link className="button-link" href="/projects">
                  대표 프로젝트 보기
                </Link>
                <Link className="button-link button-link--secondary" href="/resume">
                  Resume 보기
                </Link>
              </div>
            </div>

            <div className="hero-side">
              <section className="hero-panel hero-panel--accent">
                <div className="hero-panel__header">
                  <span className="eyebrow">Core Frame</span>
                  <h2 className="section-title">핵심 판단 프레임</h2>
                </div>
                <div className="hero-metric-list">
                  <article className="hero-metric">
                    <span className="hero-metric__index">01</span>
                    <div>
                      <h3>문제 정의</h3>
                      <p>먼저 무엇을 검증해야 하는지부터 다시 세웁니다.</p>
                    </div>
                  </article>
                  <article className="hero-metric">
                    <span className="hero-metric__index">02</span>
                    <div>
                      <h3>구조 설계</h3>
                      <p>흩어진 데이터를 분석 가능한 단위로 재구성합니다.</p>
                    </div>
                  </article>
                  <article className="hero-metric">
                    <span className="hero-metric__index">03</span>
                    <div>
                      <h3>검증 중심</h3>
                      <p>겉으로 좋은 수치보다 위험 신호와 맥락을 먼저 봅니다.</p>
                    </div>
                  </article>
                </div>
              </section>

              <section className="hero-panel">
                <div className="hero-panel__header">
                  <span className="eyebrow">Selected Work</span>
                  <h2 className="section-title">대표 작업</h2>
                </div>
                <div className="hero-link-list">
                  {heroProjects.map((project) => (
                    <Link className="hero-link-card" href={`/projects/${project.slug}`} key={project.slug}>
                      <div className="hero-link-card__top">
                        <span className="tag tag--accent">{project.badges[0] ?? project.category}</span>
                        <span className="hero-link-card__arrow">↗</span>
                      </div>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="overview-grid">
          <article className="surface-card compact-panel">
            <span className="eyebrow">Positioning</span>
            <h2 className="section-title">어떤 분석가로 읽히는지</h2>
            <p className="page-intro">
              단순한 보고나 시각화보다 문제 정의, 구조 설계, 검증 과정을 중심에
              두는 분석가로 보이도록 설계했습니다.
            </p>
          </article>

          <article className="surface-card compact-panel">
            <span className="eyebrow">Featured</span>
            <h2 className="section-title">대표 프로젝트 3개</h2>
            <ul className="inline-list">
              {featuredProjects.map((project) => (
                <li key={project.slug}>
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-card compact-panel compact-panel--accent">
            <span className="eyebrow">Keywords</span>
            <h2 className="section-title">기억할 키워드</h2>
            <div className="tag-list">
              {profile.keywords.map((keyword) => (
                <span className="tag tag--accent" key={keyword}>
                  {keyword}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="page-grid">
          <div className="section-head">
            <span className="eyebrow">Featured Projects</span>
            <h2 className="section-title">대표 프로젝트</h2>
          </div>
          <div className="highlight-grid">
            {featuredProjects.map((project) => (
              <article className="summary-card" key={project.slug}>
                <div className="tag-list">
                  {project.badges.map((badge) => (
                    <span className="tag" key={badge}>
                      {badge}
                    </span>
                  ))}
                </div>
                <h3>
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>
                <p>{project.summary}</p>
                <ul className="list-stack compact-list">
                  {project.focusPoints.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-columns">
          <div className="page-grid section-column">
            <div className="section-head section-head--aligned">
              <span className="eyebrow">Case Studies</span>
              <h2 className="section-title">문제 해결 방식</h2>
            </div>
            <div className="highlight-grid">
              {caseStudies.map((caseStudy) => (
                <article className="summary-card" key={caseStudy.slug}>
                  <span className="tag tag--accent">{caseStudy.category}</span>
                  <h3>
                    <Link href={`/case-studies#${caseStudy.slug}`}>{caseStudy.title}</Link>
                  </h3>
                  <p>{caseStudy.summary}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="page-grid section-column">
            <div className="section-head section-head--aligned">
              <span className="eyebrow">Writing</span>
              <h2 className="section-title">프로젝트 연계 글쓰기</h2>
            </div>
            <div className="page-grid">
              {featuredWriting.map((entry) => (
                <article className="summary-card" key={entry.slug}>
                  <div className="tag-list">
                    <span className="tag tag--accent">{entry.platform}</span>
                    <span className={`tag status-tag status-tag--${entry.status}`}>
                      {entry.status}
                    </span>
                  </div>
                  <h3>{entry.title}</h3>
                  <p>{entry.summary}</p>
                  <div className="tag-list">
                    {entry.categories.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
