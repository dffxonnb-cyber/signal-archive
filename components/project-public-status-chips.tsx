import { getProjectPublicStatusChips } from "@/content/project-public-status";

type ProjectPublicStatusChipsProps = {
  slug: string;
  variant?: "project" | "home";
  limit?: number;
};

export function ProjectPublicStatusChips({
  slug,
  variant = "project",
  limit = 4,
}: ProjectPublicStatusChipsProps) {
  const chips = getProjectPublicStatusChips(slug).slice(0, limit);

  if (variant === "home") {
    return (
      <div className="home-project-card__tags" aria-label="public and verification status">
        {chips.map((item) => (
          <span className="home-project-card__tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="project-card__tools" aria-label="public and verification status">
      {chips.map((item) => (
        <span className="chip chip--status" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
