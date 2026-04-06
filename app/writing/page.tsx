import { WritingDirectory } from "@/components/writing-directory";
import { writingCategories, writingEntries } from "@/content/writing";

export default function WritingPage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card">
          <span className="eyebrow">Writing</span>
          <h1 className="page-title">플랫폼보다 글의 성격과 연결 구조가 먼저 보이는 글 아카이브</h1>
          <p className="page-intro">
            Velog, Brunch, 향후 블로그 글을 플랫폼별 창고가 아니라 하나의 통합
            피드로 묶고, 프로젝트와 다시 연결할 수 있게 구조를 잡았습니다.
          </p>
        </section>

        <WritingDirectory categories={writingCategories} entries={writingEntries} />
      </div>
    </main>
  );
}
