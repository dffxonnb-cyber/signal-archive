const homeSections = [
  {
    title: "Home",
    description: "짧은 포지셔닝과 대표 작업이 먼저 보이는 표지판.",
  },
  {
    title: "Projects",
    description: "도메인과 문제 유형을 기준으로 탐색하는 프로젝트 아카이브.",
  },
  {
    title: "Writing",
    description: "프로젝트와 연결되는 글쓰기 브랜딩의 진입점.",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card">
          <span className="eyebrow">Initial Scaffold</span>
          <h1 className="page-title">Signal Archive</h1>
          <p className="page-intro">
            분석 프로젝트, 문제 해결 과정, 글쓰기를 하나의 탐색형 인터페이스로
            묶는 채용형 포트폴리오의 기본 구조를 먼저 세팅했습니다.
          </p>
        </section>

        <section className="placeholder-stack" aria-label="Planned sections">
          {homeSections.map((section) => (
            <article className="placeholder-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

