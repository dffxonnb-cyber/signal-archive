type PageSummaryMetric = {
  label: string;
  value: number | string;
};

type PageSummaryProps = {
  metrics: PageSummaryMetric[];
  focusItems?: string[];
  focusLabel?: string;
  ariaLabel?: string;
};

export function PageSummary({
  metrics,
  focusItems = [],
  focusLabel = "Focus",
  ariaLabel = "page summary",
}: PageSummaryProps) {
  return (
    <div className="page-summary" aria-label={ariaLabel}>
      {metrics.map((item) => (
        <article className="page-summary__item page-summary__item--metric" key={item.label}>
          <span className="page-summary__label">{item.label}</span>
          <strong className="page-summary__value">{item.value}</strong>
        </article>
      ))}

      {focusItems.length > 0 ? (
        <article className="page-summary__item page-summary__item--focus">
          <span className="page-summary__label">{focusLabel}</span>
          <div className="page-summary__chips" aria-label={`${focusLabel} items`}>
            {focusItems.map((item) => (
              <span className="page-summary__chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      ) : null}
    </div>
  );
}
