import { PageSummary } from "@/components/page-summary";
import { WritingDirectory } from "@/components/writing-directory";
import { writingCategories, writingEntries } from "@/content/writing";

export default function WritingPage() {
  const relatedProjectCount = new Set(
    writingEntries.flatMap((entry) => entry.relatedProjects),
  ).size;

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card page-header">
          <div className="page-header__lead">
            <span className="eyebrow">Writing</span>
            <h1 className="page-title">프로젝트를 둘러싼 기록 아카이브</h1>
            <p className="page-intro">
              플랫폼보다 글의 역할과 연결 구조를 먼저 보여주는 페이지입니다. 회고, 분석 메모, 태도에 관한 기록을 같은 흐름 안에서 정리합니다.
            </p>
          </div>

          <PageSummary
            ariaLabel="writing summary"
            focusItems={writingCategories.slice(0, 4)}
            metrics={[
              { label: "Entries", value: writingEntries.length },
              { label: "Connected Projects", value: relatedProjectCount },
            ]}
          />
        </section>

        <WritingDirectory categories={writingCategories} entries={writingEntries} />
      </div>
    </main>
  );
}
