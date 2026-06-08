import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { profile } from "@/content/profile";
import { featuredProjects, projects } from "@/content/projects";

export default function ResumePage() {
  const projectTitleMap = new Map(
    projects.map((project) => [project.slug, project.title] as const),
  );
  const roleFits = [
    {
      title: "Data Analyst Fit",
      relevantWork: ["데이터 정리", "EDA", "지표 설계", "결과 해석", "문서화"],
      coreSkills: ["SQL", "Python", "pandas", "Jupyter", "Tableau", "Looker Studio"],
      proofProjects: [
        "starbucks-promotion-analysis",
        "uk-online-retail-segment-analysis",
        "shopeasy",
      ],
      evidence: ["고객 반응 분석", "세그먼트 분석", "전환 병목 분석"],
    },
    {
      title: "Data Product Builder Fit",
      relevantWork: ["웹앱 구현", "서버리스 API 연결", "정적 fallback", "검증 가능한 배포"],
      coreSkills: ["React", "Next.js", "TypeScript", "Vercel", "Neon"],
      proofProjects: ["shelter-signal", "seoul-storefront-redveil", "shopeasy"],
      evidence: ["Vercel API route", "PWA", "case study archive"],
    },
    {
      title: "Pipeline / Automation Validation Fit",
      relevantWork: ["PostgreSQL 모델링", "SQL tests", "Docker 로컬 검증", "dry-run 자동화"],
      coreSkills: ["PostgreSQL", "Docker", "n8n", "Mailpit", "Python smoke tests"],
      proofProjects: ["shelter-signal"],
      evidence: ["Mailpit smoke test PASS", "SQL validation", "email_html dry-run"],
    },
  ];

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <PageHero
          eyebrow="Resume"
          lead="직무별 적합성, 기술 범위, 증거 프로젝트를 빠르게 대조할 수 있도록 정리했습니다."
          title="데이터 분석과 데이터 제품 구현을 함께 보는 요약 패널"
          titleId="resume-title"
        >
          <aside aria-label="resume fast scan" className="resume-fast-scan">
            <span className="eyebrow">Fast Scan</span>
            <dl className="resume-fast-scan__list">
              <div>
                <dt>Primary Fit</dt>
                <dd>{profile.primaryRoles.join(" / ")}</dd>
              </div>
              <div>
                <dt>Proof Projects</dt>
                <dd>Redveil · Shelter Signal · LH Traffic Safety · Starbucks</dd>
              </div>
              <div>
                <dt>Resume PDF</dt>
                <dd>Available on Request</dd>
              </div>
            </dl>
          </aside>
        </PageHero>

        <div className="resume-grid">
          <section className="surface-card detail-section resume-panel resume-panel--profile">
            <span className="eyebrow">Profile</span>
            <h2 className="section-title">{profile.name}</h2>
            <p className="page-intro">{profile.headline}</p>
            <div className="copy-stack">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
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

          <section className="surface-card detail-section resume-panel resume-panel--role-fit">
            <span className="eyebrow">Role Fit</span>
            <h2 className="section-title">직무별 적합성</h2>
            <p className="page-intro">
              직무별로 먼저 확인할 작업, 기술, 증거 프로젝트를 분리했습니다.
            </p>
            <div className="resume-role-fit-grid">
              {roleFits.map((fit, index) => (
                <article className="resume-role-fit-card" key={fit.title}>
                  <div className="resume-role-fit-card__head">
                    <span className="resume-role-fit-card__index">{`0${index + 1}`}</span>
                    <h3>{fit.title}</h3>
                  </div>
                  <dl className="resume-role-fit-card__list">
                    <div>
                      <dt>Relevant Work</dt>
                      <dd>
                        <div className="resume-chip-row">
                          {fit.relevantWork.map((item) => (
                            <span className="chip" key={item}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </dd>
                    </div>
                    <div>
                      <dt>Core Skills</dt>
                      <dd>
                        <div className="resume-chip-row">
                          {fit.coreSkills.map((item) => (
                            <span className="chip chip--quiet" key={item}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </dd>
                    </div>
                    <div>
                      <dt>Proof Projects</dt>
                      <dd>
                        <div className="resume-proof-links">
                          {fit.proofProjects.map((slug) => (
                            <Link className="resume-proof-link" href={`/projects/${slug}`} key={slug}>
                              {projectTitleMap.get(slug) ?? slug}
                            </Link>
                          ))}
                        </div>
                      </dd>
                    </div>
                    <div>
                      <dt>Evidence</dt>
                      <dd>
                        <div className="resume-evidence-row">
                          {fit.evidence.map((item) => (
                            <span className="chip chip--metric" key={item}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
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
            <h2 className="section-title">기술 구성</h2>
            <p className="page-intro">
              도구 이름보다, 각 기술로 실제 어떤 작업을 수행하고 어떤 방식으로 결과를 전달하는지 중심으로 정리했습니다.
            </p>
            <div className="resume-skill-grid">
              {profile.skillGroups.map((group) => (
                <article className="resume-skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  {group.summary ? <p className="resume-skill-card__summary">{group.summary}</p> : null}
                  <div className="resume-skill-card__chips">
                    {group.items.map((item) => (
                      <span className="chip chip--quiet" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="surface-card detail-section resume-panel resume-panel--workflow">
            <span className="eyebrow">Workflow</span>
            <h2 className="section-title">AI-assisted Workflow</h2>
            <p className="page-intro">
              AI는 아이디어 구조화, 코드 초안, 디버깅, 문서화의 반복 시간을 줄이는 보조 도구로 사용합니다.
              문제 정의, 지표 설계, 결과 해석, 최종 판단 기준은 직접 검토합니다.
            </p>
            <ul className="list-stack">
              {profile.aiWorkflow.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
                      상세 보기
                    </Link>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  {project.metrics.length ? (
                    <div className="resume-project-card__metrics">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <span className="chip chip--metric" key={`${metric.label}-${metric.value}`}>
                          {metric.value}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="surface-card detail-section resume-panel resume-panel--links">
            <span className="eyebrow">Access</span>
            <h2 className="section-title">프로필 및 연락 경로</h2>
            <div className="resume-links-grid">
              {profile.contactLinks.map((link) => (
                <a
                  className="resume-link-card"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="resume-link-card__label">{link.label === "Email" ? "이메일" : link.label}</span>
                  <strong>{link.displayText ?? link.href.replace("mailto:", "")}</strong>
                </a>
              ))}
              <article className="resume-link-card resume-link-card--muted">
                <span className="resume-link-card__label">Resume PDF</span>
                <strong>Available on Request</strong>
              </article>
            </div>
          </section>

          <section className="surface-card detail-section resume-panel">
            <span className="eyebrow">Next Review</span>
            <h2 className="section-title">다음 검토 경로</h2>
            <p className="page-intro">
              직무 적합성을 확인했다면, 대표 프로젝트의 Decision Moment와 GitHub 문서를 함께 보면 작업 방식이 더 빠르게 보입니다.
            </p>
            <div className="button-row">
              <Link className="button-link" href="/projects">
                프로젝트 전체 보기
              </Link>
              <Link className="button-link button-link--secondary" href="/contact">
                이메일 연락
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
