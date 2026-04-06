import Link from "next/link";

import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";

export default function ResumePage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card">
          <span className="eyebrow">Resume</span>
          <h1 className="page-title">압축된 채용용 요약</h1>
          <p className="page-intro">
            긴 자기소개보다 역할, 강점, 프로젝트, 외부 링크가 빠르게 읽히는
            형태로 정리했습니다.
          </p>
        </section>

        <div className="detail-layout">
          <section className="surface-card detail-section">
            <span className="eyebrow">Profile</span>
            <h2 className="section-title">{profile.name}</h2>
            <p className="page-intro">{profile.headline}</p>
            <div className="project-card__block">
              <span className="project-card__label">1순위 직무</span>
              <div className="tag-list">
                {profile.primaryRoles.map((role) => (
                  <span className="tag tag--accent" key={role}>
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-card__block">
              <span className="project-card__label">2순위 직무</span>
              <div className="tag-list">
                {profile.secondaryRoles.map((role) => (
                  <span className="tag" key={role}>
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-card__block">
              <span className="project-card__label">관심 산업</span>
              <div className="tag-list">
                {profile.industries.map((industry) => (
                  <span className="tag" key={industry}>
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <div className="page-grid">
            <section className="surface-card detail-section">
              <span className="eyebrow">Strengths</span>
              <h2 className="section-title">핵심 강점</h2>
              <ul className="list-stack">
                {profile.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="surface-card detail-section">
              <span className="eyebrow">Skills</span>
              <h2 className="section-title">기술 스택</h2>
              <div className="page-grid compact-grid">
                {profile.skillGroups.map((group) => (
                  <article className="summary-card" key={group.title}>
                    <h3>{group.title}</h3>
                    <div className="tag-list">
                      {group.items.map((item) => (
                        <span className="tag" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="surface-card detail-section">
              <span className="eyebrow">Featured</span>
              <h2 className="section-title">대표 프로젝트 요약</h2>
              <div className="page-grid compact-grid">
                {featuredProjects.map((project) => (
                  <article className="summary-card" key={project.slug}>
                    <h3>
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <p>{project.summary}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="surface-card detail-section">
              <span className="eyebrow">Links</span>
              <h2 className="section-title">외부 링크</h2>
              <div className="button-row">
                {profile.contactLinks.map((link) => (
                  <a
                    className="button-link"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
                <span className="button-link button-link--secondary">PDF Resume 준비 중</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
