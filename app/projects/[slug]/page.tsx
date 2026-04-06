import Link from "next/link";
import { notFound } from "next/navigation";

import { caseStudies } from "@/content/case-studies";
import { projects } from "@/content/projects";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedCaseStudies = caseStudies.filter((caseStudy) =>
    project.caseStudySlugs.includes(caseStudy.slug),
  );

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card detail-hero">
          <Link className="back-link" href="/projects">
            Projects
          </Link>
          <div className="tag-list" aria-label="Project badges">
            <span className="tag tag--accent">{project.category}</span>
            {project.badges.map((badge) => (
              <span className="tag" key={badge}>
                {badge}
              </span>
            ))}
          </div>
          <h1 className="page-title detail-title">{project.title}</h1>
          <p className="page-intro">{project.summary}</p>
        </section>

        <div className="detail-layout">
          <aside className="surface-card detail-sidebar">
            <dl className="detail-meta">
              <div>
                <dt>형태</dt>
                <dd>{project.format}</dd>
              </div>
              <div>
                <dt>기간</dt>
                <dd>{project.period}</dd>
              </div>
              <div>
                <dt>도메인</dt>
                <dd>{project.domains.join(" / ")}</dd>
              </div>
              <div>
                <dt>역할</dt>
                <dd>{project.role.join(", ")}</dd>
              </div>
              <div>
                <dt>기술</dt>
                <dd>{project.stack.join(", ")}</dd>
              </div>
            </dl>

            {project.links.length > 0 ? (
              <div className="detail-links">
                {project.links.map((link) => (
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
              </div>
            ) : null}
          </aside>

          <div className="page-grid">
            <section className="surface-card detail-section">
              <span className="eyebrow">Problem Frame</span>
              <h2 className="section-title">문제 상황</h2>
              <p className="page-intro">{project.context}</p>
            </section>

            <section className="surface-card detail-section">
              <span className="eyebrow">Outcome</span>
              <h2 className="section-title">결과물</h2>
              <p className="page-intro">{project.outcome}</p>
              <ul className="list-stack">
                {project.focusPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {project.sections.map((section) => (
              <section className="surface-card detail-section" key={section.title}>
                <h2 className="section-title">{section.title}</h2>
                <div className="copy-stack">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            {relatedCaseStudies.length > 0 ? (
              <section className="surface-card detail-section">
                <span className="eyebrow">Case Studies</span>
                <h2 className="section-title">관련 문제 해결 방식</h2>
                <div className="related-grid">
                  {relatedCaseStudies.map((caseStudy) => (
                    <article className="related-card" key={caseStudy.slug}>
                      <h3>{caseStudy.title}</h3>
                      <p>{caseStudy.summary}</p>
                      <Link className="button-link button-link--secondary" href={`/case-studies#${caseStudy.slug}`}>
                        Case Studies에서 보기
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
