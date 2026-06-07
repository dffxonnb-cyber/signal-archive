import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/content/projects";
import { writingEntries } from "@/content/writing";

import styles from "./page.module.css";

type WritingDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatNoteNumber(value: number) {
  return value.toString().padStart(2, "0");
}

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
  const entryIndex = writingEntries.findIndex((item) => item.slug === slug);
  const entry = writingEntries[entryIndex];

  if (!entry) {
    notFound();
  }

  const relatedProjects = projects.filter((project) =>
    entry.relatedProjects.includes(project.slug),
  );

  return (
    <main className="page-shell">
      <div className={`site-container page-grid ${styles.page}`}>
        <section className={`surface-card ${styles.articleHero}`}>
          <div className={styles.heroCopy}>
            <div className={styles.heroMeta}>
              <span className={styles.noteLabel}>Analysis Note</span>
              <span className={styles.noteIndex}>
                {formatNoteNumber(entryIndex + 1)}
              </span>
            </div>

            <h1 className={styles.articleTitle}>{entry.title}</h1>
            <p className={styles.articleLead}>{entry.lead}</p>

            <div aria-label="article themes" className={styles.themeList}>
              {entry.categories.map((category) => (
                <span className={styles.themeTag} key={category}>
                  {category}
                </span>
              ))}
            </div>
          </div>

          <aside aria-label="selected sentence" className={styles.heroQuote}>
            <span className={styles.quoteLabel}>Selected Sentence</span>
            <blockquote className={styles.heroQuoteText}>
              “{entry.lens.sentence}”
            </blockquote>
          </aside>
        </section>

        <section className={styles.lensBlock}>
          <div className={styles.lensHead}>
            <span className={styles.noteLabel}>Note Lens</span>
            <p className={styles.lensSummary}>
              이 글이 감각을 읽고 구조를 만들고 문장으로 남기는 방식을 세 가지
              축으로 정리했습니다.
            </p>
          </div>

          <div className={styles.lensGrid}>
            <article className={styles.lensItem}>
              <span className={styles.lensLabel}>Observe</span>
              <p>{entry.lens.observe}</p>
            </article>

            <article className={styles.lensItem}>
              <span className={styles.lensLabel}>Interpret</span>
              <p>{entry.lens.interpret}</p>
            </article>

            <article className={styles.lensItem}>
              <span className={styles.lensLabel}>Sentence</span>
              <p>{entry.lens.sentence}</p>
            </article>
          </div>
        </section>

        <section className={styles.articleBody}>
          {entry.bodySections.map((section, index) => (
            <section className={styles.articleSection} key={section.title}>
              <span className={styles.sectionIndex}>
                {formatNoteNumber(index + 1)}
              </span>

              <div className={styles.sectionContent}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>

                {section.quote ? (
                  <blockquote className={styles.sectionQuote}>
                    “{section.quote}”
                  </blockquote>
                ) : null}

                <div className={styles.prose}>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <footer className={styles.articleFooter}>
            <Link className={styles.backLink} href="/writing">
              Back to Notes
            </Link>

            {relatedProjects.length > 0 ? (
              <div className={styles.relatedProjects}>
                <span className={styles.footerLabel}>Related Projects</span>
                <div className={styles.relatedProjectList}>
                  {relatedProjects.map((project) => (
                    <Link
                      className={styles.relatedProjectLink}
                      href={`/projects/${project.slug}`}
                      key={project.slug}
                    >
                      {project.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </footer>
        </section>
      </div>
    </main>
  );
}
