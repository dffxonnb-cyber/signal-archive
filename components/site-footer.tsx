import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__inner">
        <span>Signal Archive</span>
        <span>Problem framing, structure design, and verification-led analysis.</span>
        <Link className="site-footer__link" href="/start-here">
          Start Here
        </Link>
      </div>
    </footer>
  );
}
