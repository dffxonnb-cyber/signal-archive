import type { ProofPoint } from "@/content/proof-points";

type ProofPointGridProps = {
  points: ProofPoint[];
};

export function ProofPointGrid({ points }: ProofPointGridProps) {
  return (
    <div className="proof-point-grid">
      {points.map((point) => (
        <article className="proof-point-card" key={`${point.label}-${point.value}`}>
          <span className="proof-point-card__label">{point.label}</span>
          <strong className="proof-point-card__value">{point.value}</strong>
          <span className="proof-point-card__note">{point.note}</span>
        </article>
      ))}
    </div>
  );
}
