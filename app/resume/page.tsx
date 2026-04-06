import Link from "next/link";

import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";

export default function ResumePage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card resume-hero">
          <div className="resume-hero__main">
            <span className="eyebrow">Resume</span>
            <h1 className="page-title">압축된 채용용 요약</h1>
            <p className="page-intro">
              긴 자기소개보다 역할, 강점, 프로젝트, 외부 링크가 빠르게 읽히는
              형태로 정리했습니다.
            </p>
          </div>

          <div className="resume-hero__side">
            <article className="resume-side-card">
              <span className="resume-side-card__label">Primary Role</span>
              <div className="tag-list">
                {profile.primaryRoles.map((role) => (
                  <span className="tag tag--accent" key={role}>
                    {role}
                  </span>
                ))}
              </div>
            </article>

            <article className="resume-side-card">
              <span className="resume-side-card__label">Keywords</span>
              <p>{profile.keywords.slice(0, 4).join(" / ")}</p>
            </article>
          </div>
        </section>

        <div className="resume-grid">
          <section className="surface-card detail-section resume-panel resume-panel--profile">
            <span className="eyebrow">Profile</span>
            <h2 className="section-title">{profile.name}</h2>
            <p className="page-intro">{profile.headline}</p>
            <div className="resume-profile-grid">
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
              <div className="project-card__block resume-profile-grid__wide">
                <span className="project-card__label">관심 산업</span>
                <div className="tag-list">
                  {profile.industries.map((industry) => (
                    <span className="tag" key={industry}>
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="surface-card detail-section resume-panel resume-panel--strengths">
            <span className="eyebrow">Strengths</span>
            <h2 className="section-title">핵심 강점</h2>
            <div className="resume-strength-grid">
              {profile.strengths.map((item, index) => (
                <article className="resume-strength-card" key={item}>
                  <span className="resume-strength-card__index">{`0${index + 1}`}</span>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </section>

          <section className="surface-card detail-section resume-panel resume-panel--skills">
            <span className="eyebrow">Skills</span>
            <h2 className="section-title">기술 스택</h2>
            <div className="resume-skill-grid">
              {profile.skillGroups.map((group) => (
                <article className="resume-skill-card" key={group.title}>
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

          <section className="surface-card detail-section resume-panel resume-panel--projects">
            <span className="eyebrow">Featured</span>
            <h2 className="section-title">대표 프로젝트 요약</h2>
            <div className="resume-project-list">
              {featuredProjects.map((project) => (
                <article className="resume-project-card" key={project.slug}>
                  <div className="resume-project-card__top">
                    <span className="tag tag--accent">{project.badges[0] ?? project.category}</span>
                    <Link className="resume-project-card__link" href={`/projects/${project.slug}`}>
                      보기
                    </Link>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="surface-card detail-section resume-panel resume-panel--links">
            <span className="eyebrow">Links</span>
            <h2 className="section-title">외부 링크</h2>
            <div className="resume-links-grid">
              {profile.contactLinks.map((link) => (
                <a
                  className="resume-link-card"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="resume-link-card__label">{link.label}</span>
                  <strong>{link.label}</strong>
                </a>
              ))}
              <div className="resume-link-card resume-link-card--muted">
                <span className="resume-link-card__label">Document</span>
                <strong>PDF Resume 준비 중</strong>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
