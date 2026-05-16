import type { ReactNode } from "react";

type PageHeroVariant = "home" | "standard";
type PageHeroPanelPlacement = "side" | "below";

type PageHeroProps = {
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
  eyebrow?: ReactNode;
  lead?: ReactNode;
  meta?: ReactNode;
  panelPlacement?: PageHeroPanelPlacement;
  title: ReactNode;
  titleId?: string;
  variant?: PageHeroVariant;
};

function joinClassNames(...values: Array<string | false | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function PageHero({
  actions,
  children,
  className,
  eyebrow,
  lead,
  meta,
  panelPlacement = "side",
  title,
  titleId,
  variant = "standard",
}: PageHeroProps) {
  return (
    <section
      aria-labelledby={titleId}
      className={joinClassNames(
        "surface-card",
        "page-hero",
        `page-hero--${variant}`,
        children ? "page-hero--with-panel" : "page-hero--solo",
        panelPlacement === "below" ? "page-hero--panel-below" : "page-hero--panel-side",
        className,
      )}
    >
      <div className="page-hero__copy">
        {eyebrow ? <span className="page-hero__eyebrow">{eyebrow}</span> : null}
        <h1 className="page-hero__title" id={titleId}>
          {title}
        </h1>
        {lead ? <p className="page-hero__lead">{lead}</p> : null}
        {meta ? <div className="page-hero__meta">{meta}</div> : null}
        {actions ? <div className="button-row page-hero__actions">{actions}</div> : null}
      </div>

      {children ? <div className="page-hero__panel">{children}</div> : null}
    </section>
  );
}
