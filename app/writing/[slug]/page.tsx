import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/content/projects";
import { writingEntries } from "@/content/writing";

type WritingDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return writingEntries
    .filter((entry) => entry.linkKind === "internal")
    .map((entry) => ({
      slug: entry.slug,
    }));
}

export default async function WritingDetailPage({
  params,
}: WritingDetailPageProps) {
  const { slug } = await params;
  const entry = writingEntries.find((item) => item.slug === slug);

  if (!entry) {
    notFound();
  }

  const relatedProjects = projects.filter((project) =>
    entry.relatedProjects.includes(project.slug),
  );

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card detail-hero">
          <Link className="back-link" href="/writing">
            Writing
          </Link>
          <div className="tag-list" aria-label="Writing metadata">
            <span className="tag tag--accent">{entry.platform}</span>
            {entry.categories.map((category) => (
              <span className="tag" key={category}>
                {category}
              </span>
            ))}
          </div>
          <h1 className="page-title detail-title">{entry.title}</h1>
          <p className="page-intro">{entry.summary}</p>
        </section>

        <div className="detail-layout">
          <aside className="surface-card detail-sidebar">
            <dl className="detail-meta">
              <div>
                <dt>플랫폼</dt>
                <dd>{entry.platform}</dd>
              </div>
              <div>
                <dt>상태</dt>
                <dd>{entry.status}</dd>
              </div>
              <div>
                <dt>게시 시점</dt>
                <dd>{entry.publishedAt}</dd>
              </div>
              <div>
                <dt>연결 프로젝트</dt>
                <dd>{relatedProjects.length}개</dd>
              </div>
            </dl>
          </aside>

          <div className="page-grid">
            {entry.bodySections.map((section) => (
              <section className="surface-card detail-section" key={section.title}>
                <h2 className="section-title">{section.title}</h2>
                <div className="copy-stack">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            {relatedProjects.length > 0 ? (
              <section className="surface-card detail-section">
                <span className="eyebrow">Related Projects</span>
                <h2 className="section-title">함께 보면 좋은 프로젝트</h2>
                <div className="related-grid">
                  {relatedProjects.map((project) => (
                    <article className="related-card" key={project.slug}>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <Link className="button-link button-link--secondary" href={`/projects/${project.slug}`}>
                        프로젝트 보기
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
