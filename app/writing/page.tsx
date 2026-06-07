import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import {
  selectedSentence,
  writingEntries,
  writingFlow,
  writingStrengths,
} from "@/content/writing";
import { projects } from "@/content/projects";

import styles from "./page.module.css";

function formatNoteNumber(value: number) {
  return value.toString().padStart(2, "0");
}

export default function WritingPage() {
  const projectTitleMap = new Map(
    projects.map((project) => [project.slug, project.title] as const),
  );

  return (
    <main className="page-shell">
      <div className={`site-container page-grid ${styles.page}`}>
        <PageHero
          eyebrow="Signal Archive: Analysis Notes"
          lead={
            <>
              Analysis Notes는 분석 결과를 숫자에서 끝내지 않고, 판단 가능한 순서와 읽히는 문장으로 바꾸는 과정을
              정리한 기록입니다.
            </>
          }
          meta={
            <div aria-label="writing flow" className="page-hero__flow">
              {writingFlow.map((step, index) => (
                <div className="page-hero__flow-step" key={step}>
                  <span className="page-hero__flow-label">{step}</span>
                  {index < writingFlow.length - 1 ? (
                    <span aria-hidden="true" className="page-hero__flow-arrow">
                      →
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          }
          title="관찰을 판단 구조로 바꾸는 노트"
          titleId="writing-title"
        >
          <aside aria-label="selected sentence" className={styles.selectedSentence}>
            <span className={styles.panelLabel}>Evidence Sample</span>
            <dl className={styles.sampleStack}>
              <div>
                <dt>Signal</dt>
                <dd>결과만으로는 다음 행동이 보이지 않는 상황</dd>
              </div>
              <div>
                <dt>Frame</dt>
                <dd>사용자가 판단할 수 있는 순서로 재배치하기</dd>
              </div>
              <div>
                <dt>Deliver</dt>
                <dd>“{selectedSentence}”</dd>
              </div>
            </dl>
          </aside>
        </PageHero>

        <section className={styles.strengthSection}>
          <div className={styles.sectionHeadCompact}>
            <span className={styles.sectionLabel}>Note Strength</span>
            <p className={styles.sectionDescription}>
              데이터 프로덕트형 포트폴리오 안에서 Notes가 맡는 보조 증거의 역할을 세 가지 역량으로 정리했습니다.
            </p>
          </div>

          <div className={styles.strengthGrid}>
            {writingStrengths.map((item, index) => (
              <article className={styles.strengthItem} key={item.title}>
                <span className={styles.strengthIndex}>{formatNoteNumber(index + 1)}</span>
                <h2 className={styles.strengthTitle}>{item.title}</h2>
                <p className={styles.strengthDescription}>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.notesSection}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>Analysis Notes</span>
            <p className={styles.sectionDescription}>
              분석 결과를 어떤 신호로 읽고, 어떤 판단 흐름과 전달 문장으로 바꾸는지 보여주는 세 개의 노트를 골랐습니다.
              각 노트는 도구화, 액션 설계, 관찰 기록이라는 다른 장면에서 같은 질문을 다룹니다.
            </p>
          </div>

          <div className={styles.noteGrid}>
            {writingEntries.map((entry, index) => (
              <article className={styles.noteCard} key={entry.slug}>
                <div className={styles.noteHead}>
                  <span className={styles.noteLabel}>
                    NOTE FILE {formatNoteNumber(index + 1)}
                  </span>
                  <h2 className={styles.noteTitle}>{entry.title}</h2>
                  <div className={styles.noteMetaLine}>
                    <span>{entry.platform}</span>
                    <span>{entry.publishedAt}</span>
                  </div>
                </div>

                <div aria-label={`${entry.title} themes`} className={styles.noteThemes}>
                  {entry.categories.map((category) => (
                    <span className={styles.noteTheme} key={category}>
                      {category}
                    </span>
                  ))}
                </div>

                <p className={styles.noteDescription}>{entry.summary}</p>

                <dl className={styles.noteLensGrid}>
                  <div className={styles.noteLensItem}>
                    <dt>Signal</dt>
                    <dd>{entry.lens.observe}</dd>
                  </div>
                  <div className={styles.noteLensItem}>
                    <dt>Frame</dt>
                    <dd>{entry.lens.interpret}</dd>
                  </div>
                  <div className={styles.noteLensItem}>
                    <dt>Deliver</dt>
                    <dd>{entry.lens.sentence}</dd>
                  </div>
                </dl>

                {entry.excerpt ? (
                  <blockquote className={styles.noteExcerpt}>
                    “{entry.excerpt}”
                  </blockquote>
                ) : null}

                {entry.relatedProjects.length > 0 ? (
                  <div className={styles.relatedProjects}>
                    <span className={styles.noteLabel}>Related Work</span>
                    <div className={styles.projectPills}>
                      {entry.relatedProjects.map((slug) => (
                        <Link className={styles.projectPill} href={`/projects/${slug}`} key={slug}>
                          {projectTitleMap.get(slug) ?? slug}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className={styles.noteActions}>
                  <Link className={styles.noteLink} href={entry.href}>
                    글 보기
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
