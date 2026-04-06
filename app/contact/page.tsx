import { profile } from "@/content/profile";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card">
          <span className="eyebrow">Contact</span>
          <h1 className="page-title">협업, 포지션 제안, 프로젝트 관련 연락을 환영합니다.</h1>
          <p className="page-intro">
            채용 제안, 협업 문의, 프로젝트 관련 대화가 필요한 경우 아래 링크로
            연결할 수 있습니다.
          </p>
        </section>

        <div className="highlight-grid">
          {profile.contactLinks.map((link) => (
            <article className="summary-card" key={link.label}>
              <span className="tag tag--accent">{link.label}</span>
              <h2>{link.label}</h2>
              <a href={link.href} rel="noreferrer" target="_blank">
                {link.href.replace("mailto:", "")}
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
