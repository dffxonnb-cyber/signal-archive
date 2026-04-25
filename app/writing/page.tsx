import Link from "next/link";

import {
  selectedSentence,
  writingEntries,
  writingFlow,
  writingStrengths,
} from "@/content/writing";

import styles from "./page.module.css";

function formatNoteNumber(value: number) {
  return value.toString().padStart(2, "0");
}

export default function WritingPage() {
  return (
    <main className="page-shell">
      <div className={`site-container page-grid ${styles.page}`}>
        <section className={`surface-card ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <span className={styles.archiveStamp}>Signal Archive: Writing Notes</span>
            <h1 className={styles.heroTitle}>감각을 구조로 바꾸는 기록</h1>
            <p className={styles.heroDescription}>
              글쓰기는 흩어진 감각을 붙잡아 해석 가능한 문장으로 바꾸는 일입니다.
              이 페이지는 데이터 밖의 신호를 읽고, 장면과 감정 사이의 관계를
              정리한 기록입니다.
            </p>

            <div aria-label="writing flow" className={styles.heroFlow}>
              {writingFlow.map((step, index) => (
                <div className={styles.heroFlowStep} key={step}>
                  <span className={styles.heroFlowLabel}>{step}</span>
                  {index < writingFlow.length - 1 ? (
                    <span aria-hidden="true" className={styles.heroFlowArrow}>
                      →
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <aside aria-label="selected sentence" className={styles.selectedSentence}>
            <span className={styles.panelLabel}>Selected Sentence</span>
            <blockquote className={styles.selectedQuote}>
              “{selectedSentence}”
            </blockquote>
          </aside>
        </section>

        <section className={styles.notesSection}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>Writing Notes</span>
            <p className={styles.sectionDescription}>
              관찰과 해석이 어떻게 문장으로 남는지 보여주는 세 개의 노트를
              골랐습니다. 각 글은 감정, 분석, 액션이라는 다른 장면에서 같은
              질문을 다룹니다.
            </p>
          </div>

          <div className={styles.noteGrid}>
            {writingEntries.map((entry, index) => (
              <article className={styles.noteCard} key={entry.slug}>
                <div className={styles.noteHead}>
                  <span className={styles.noteLabel}>
                    WRITING NOTE {formatNoteNumber(index + 1)}
                  </span>
                  <h2 className={styles.noteTitle}>{entry.title}</h2>
                </div>

                <div aria-label={`${entry.title} themes`} className={styles.noteThemes}>
                  {entry.categories.map((category) => (
                    <span className={styles.noteTheme} key={category}>
                      {category}
                    </span>
                  ))}
                </div>

                <p className={styles.noteDescription}>{entry.summary}</p>

                {entry.excerpt ? (
                  <blockquote className={styles.noteExcerpt}>
                    “{entry.excerpt}”
                  </blockquote>
                ) : null}

                <Link className={styles.noteLink} href={entry.href}>
                  Read Note
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.strengthSection}>
          <div className={styles.sectionHeadCompact}>
            <span className={styles.sectionLabel}>Writing Strength</span>
            <p className={styles.sectionDescription}>
              왜 이 포트폴리오에 Writing이 필요한지, 문장 바깥의 작업 방식으로
              설명합니다.
            </p>
          </div>

          <div className={styles.strengthGrid}>
            {writingStrengths.map((item) => (
              <article className={styles.strengthItem} key={item.title}>
                <h2 className={styles.strengthTitle}>{item.title}</h2>
                <p className={styles.strengthDescription}>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
