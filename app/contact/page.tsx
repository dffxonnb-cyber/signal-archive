export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card page-header">
          <div>
            <span className="eyebrow">Contact</span>
            <h1 className="page-title">공개 버전에서 확인할 수 있는 범위</h1>
            <p className="page-intro">
              이 페이지는 직접 연락처보다 공개 가능한 범위와 후속 제공 항목을
              정리한 안내용 섹션입니다.
            </p>
          </div>

          <dl className="overview-stats">
            <div>
              <dt>Projects</dt>
              <dd>open for review</dd>
            </div>
            <div>
              <dt>Direct Contact</dt>
              <dd>hidden</dd>
            </div>
            <div>
              <dt>Resume PDF</dt>
              <dd>on request</dd>
            </div>
          </dl>
        </section>

        <div className="archive-grid">
          <article className="archive-card">
            <div className="archive-card__meta">
              <span className="eyebrow">Access</span>
              <span className="archive-card__count">public-safe</span>
            </div>
            <h3>직접 연락처 비공개</h3>
            <p>개인 메일과 소셜 링크는 공개 사이트에서 제외하고, 구조 검토에 필요한 정보만 남겼습니다.</p>
          </article>
          <article className="archive-card">
            <div className="archive-card__meta">
              <span className="eyebrow">Resume</span>
              <span className="archive-card__count">summary only</span>
            </div>
            <h3>원본 이력서는 별도 제공</h3>
            <p>공개 버전에서는 압축된 Resume만 제공하고, 원본 문서는 후속 단계에서 연결합니다.</p>
          </article>
          <article className="archive-card">
            <div className="archive-card__meta">
              <span className="eyebrow">Next Step</span>
              <span className="archive-card__count">in progress</span>
            </div>
            <h3>프로젝트와 구조 우선</h3>
            <p>우선은 프로젝트, 문제 해결 방식, 글 아카이브를 더 정교하게 다듬는 데 집중합니다.</p>
          </article>
        </div>
      </div>
    </main>
  );
}
