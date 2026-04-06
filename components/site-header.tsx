import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/writing", label: "Writing" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link className="site-header__brand" href="/">
          <span className="site-header__mark">SA</span>
          <span>
            <span className="site-header__title">Signal Archive</span>
            <span className="site-header__subtitle">Choi Dabin</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="site-nav">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

