import Link from "next/link";

import { caseStudies } from "@/content/case-studies";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { writingEntries } from "@/content/writing";

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card intro-panel">
          <span className="eyebrow">Signal Archive</span>
          <p className="intro-name">최다빈</p>
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
            {profile.keywords.map((keyword) => (
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

        <section className="page-grid">
          <div className="section-head">
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
        </section>

        <section className="page-grid">
          <div className="section-head">
            <span className="eyebrow">Writing</span>
            <h2 className="section-title">프로젝트와 연결되는 글쓰기</h2>
          </div>
          <div className="highlight-grid">
            {writingEntries.map((entry) => (
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
        </section>

        <section className="surface-card info-strip">
          <div className="section-head">
            <span className="eyebrow">Keywords</span>
            <h2 className="section-title">채용자가 기억했으면 하는 키워드</h2>
          </div>
          <div className="tag-list">
            {profile.keywords.map((keyword) => (
              <span className="tag tag--accent" key={keyword}>
                {keyword}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
