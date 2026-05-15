"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SignalArchiveLogo } from "@/components/signal-archive-logo";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/start-here", label: "Start Here" },
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/writing", label: "Writing" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link className="site-header__brand" href="/">
          <span className="site-header__mark">
            <SignalArchiveLogo className="site-header__logo" />
          </span>
          <span>
            <span className="site-header__title">Signal Archive</span>
            <span className="site-header__subtitle">Research Portfolio</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="site-nav">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                className={isActive ? "site-nav__active" : undefined}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
