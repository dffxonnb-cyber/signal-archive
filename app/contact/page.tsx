export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card">
          <span className="eyebrow">Contact</span>
          <h1 className="page-title">공개 버전에서는 개인 식별 정보와 직접 연락처를 제외했습니다.</h1>
          <p className="page-intro">
            현재 사이트는 구조와 프로젝트를 검토할 수 있는 공개용 버전입니다.
            메일, 외부 프로필, 이력서 원본은 추후 별도 채널로 연결할 예정입니다.
          </p>
        </section>

        <div className="highlight-grid">
          <article className="summary-card">
            <span className="tag tag--accent">Public Preview</span>
            <h2>직접 연락처 비공개</h2>
            <p>개인 메일과 소셜 링크는 공개 버전에서 제외했습니다.</p>
          </article>
          <article className="summary-card">
            <span className="tag tag--accent">Resume</span>
            <h2>원본 이력서 보류</h2>
            <p>PDF 이력서와 상세 프로필 문서는 후속 버전에서 연결합니다.</p>
          </article>
          <article className="summary-card">
            <span className="tag tag--accent">Next Step</span>
            <h2>공개 구조 우선 정리</h2>
            <p>우선은 프로젝트, 문제 해결 방식, 글 구조를 안정적으로 다듬는 데 집중합니다.</p>
          </article>
        </div>
      </div>
    </main>
  );
}
