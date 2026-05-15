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
              Writing은 분석 밖의 취미 기록이 아니라, 관찰한 신호를 해석하고 읽히는 문장으로 바꾸는 전달력의 보조 증거입니다.
              문학적 결은 유지하되, 분석가 포트폴리오 안에서는 관찰·구조화·전달 역량을 보여주는 역할을 맡습니다.
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
              관찰한 장면을 어떻게 해석 가능한 구조와 문장으로 남기는지 보여주는 세 개의 노트를 골랐습니다.
              각 글은 감정, 분석, 액션이라는 다른 장면에서 같은 질문을 다룹니다.
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
                  글 보기
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.strengthSection}>
          <div className={styles.sectionHeadCompact}>
            <span className={styles.sectionLabel}>Writing Strength</span>
            <p className={styles.sectionDescription}>
              데이터 분석가 포트폴리오 안에서 Writing이 맡는 보조 증거의 역할을 세 가지 역량으로 정리했습니다.
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
