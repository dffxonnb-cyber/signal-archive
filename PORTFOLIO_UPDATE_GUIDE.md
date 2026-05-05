# Portfolio Update Guide

Signal Archive is maintained as a growing portfolio system. Add new projects by updating structured content first, then let the reusable cards, filters, and proof blocks render the presentation.

## 1. Add a Project

Edit `content/projects.ts` and add one object to the `projects` array.

Required fields:

- `id`: stable project id. Usually the same value as `slug`.
- `slug`: URL path under `/projects/[slug]`.
- `title`: public project title.
- `status`: `"featured"`, `"supporting"`, or `"archive"`.
- `category`: Korean display category.
- `primaryDomain`, `domains`, `problemTypes`: used by filters and chips.
- `summary`, `supportingLine`, `cardBrief`: short card and detail copy.
- `metrics`: compact evidence chips. Use real metrics only.
- `evidencePoints`: longer evidence blocks for cards and detail pages.
- `role`, `stack`, `filterTools`, `cardTools`: used across cards, filters, and resume.
- `links`: external links with optional `type`: `"primary"`, `"secondary"`, or `"text"`.
- `sortOrder`: controls project order.
- `sections`, `detailBrief`, `focusPoints`: detail page content.

## 2. Choose Status

- `featured`: strongest 2-3 projects for recruiter review. These get stronger card treatment and appear on the Home page.
- `supporting`: polished portfolio projects that expand domain coverage.
- `archive`: older or lower-priority work that should remain available without dominating the site.

Keep only a small number of `featured` projects. If everything is featured, nothing feels curated.

## 3. Keep Cards Scannable

Recommended card length:

- `supportingLine`: one sentence.
- `cardBrief.problem`: one compact problem statement.
- `cardBrief.method`: one compact approach statement.
- `cardBrief.output`: 3-4 short output items.
- `coreTags`: add enough tags for filtering, but the card shows only the first few.

Avoid repeating the same words across every card. Vary wording around problem, approach, output, evidence, and decision value.

## 4. Add Metrics Without Clutter

Use `metrics` for short proof chips:

```ts
metrics: [
  { label: "Model Quality", value: "AUC 0.8604" },
  { label: "Priority Signal", value: "Top-10% Lift 4.39x" },
]
```

Rules:

- Use only metrics already proven in the project.
- Prefer 2-3 metrics per project.
- Keep values short enough to fit on mobile.
- Put longer explanations in `evidencePoints`.

## 5. Update Home Proof Points

Edit `content/proof-points.ts` when the top evidence row should change.

Use only real metrics from project content. Keep this section to about five proof points so it stays easy to scan.

## 6. Run Checks

Use the local project scripts:

```powershell
npm run typecheck
npm run lint
npm run build
```

If global `npm` is unavailable in this workspace, use the bundled Node runtime and local binaries.

## 7. Commit and Push

After checking the diff:

```powershell
git status --short
git add .
git commit -m "Update portfolio project archive"
git push origin main
```

For larger design-system changes, use a more specific commit message.
