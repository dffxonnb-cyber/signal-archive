"use client";

import { useMemo, useState } from "react";

import { FilterSelect } from "@/components/filter-select";
import { projects } from "@/content/projects";
import type { WritingEntry } from "@/types/content";

type WritingDirectoryProps = {
  entries: WritingEntry[];
  categories: string[];
};

export function WritingDirectory({
  entries,
  categories,
}: WritingDirectoryProps) {
  const [platform, setPlatform] = useState("전체");
  const [category, setCategory] = useState("전체");

  const platforms = useMemo(
    () => Array.from(new Set(entries.map((entry) => entry.platform))),
    [entries],
  );

  const projectTitleMap = useMemo(
    () =>
      new Map(
        projects.map((project) => [project.slug, project.title] as const),
      ),
    [],
  );

  const filteredEntries = useMemo(
    () =>
      entries.filter((entry) => {
        const matchesPlatform =
          platform === "전체" || entry.platform === platform;
        const matchesCategory =
          category === "전체" || entry.categories.includes(category);

        return matchesPlatform && matchesCategory;
      }),
    [category, entries, platform],
  );
  const statusLabelMap: Record<WritingEntry["status"], string> = {
    published: "Live",
    inventory: "Archive",
    planned: "Curation",
  };

  return (
    <section className="page-grid">
      <div className="surface-card filter-panel">
        <div className="filter-panel__header">
          <div>
            <span className="eyebrow">Directory</span>
            <h2 className="section-title">글의 역할로 탐색</h2>
            <p className="filter-panel__description">
              플랫폼보다 성격과 연결 프로젝트를 기준으로 정리한 아카이브입니다.
            </p>
          </div>
        </div>

        <div className="filter-grid filter-grid--compact">
          <FilterSelect
            id="writing-platform"
            label="플랫폼"
            onChange={setPlatform}
            options={[
              { label: "전체", value: "전체" },
              ...platforms.map((item) => ({ label: item, value: item })),
            ]}
            value={platform}
          />
          <FilterSelect
            id="writing-category"
            label="글 성격"
            onChange={setCategory}
            options={[
              { label: "전체", value: "전체" },
              ...categories.map((item) => ({ label: item, value: item })),
            ]}
            value={category}
          />
        </div>

        <div className="results-summary">
          <span>{filteredEntries.length} entries</span>
          <span>
            {platform} / {category}
          </span>
        </div>
      </div>

      <div className="archive-grid archive-grid--entries">
        {filteredEntries.map((entry) => (
          <article className="archive-card archive-card--entry" key={entry.slug}>
            <div className="archive-card__meta">
              <div className="tag-list">
                <span className="tag tag--accent">{entry.platform}</span>
              </div>
              <span className="archive-card__count">{statusLabelMap[entry.status]}</span>
            </div>
            <h2 className="project-card__title">{entry.title}</h2>

            <p className="project-card__summary">{entry.summary}</p>

            <div className="project-card__block">
              <span className="project-card__label">분류</span>
              <div className="tag-list">
                {entry.categories.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {entry.relatedProjects.length > 0 ? (
              <div className="project-card__block">
                <span className="project-card__label">관련 프로젝트</span>
                <div className="tag-list">
                  {entry.relatedProjects.map((slug) => (
                    <span className="tag" key={slug}>
                      {projectTitleMap.get(slug) ?? slug}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="project-card__actions">
              {entry.href === "#" ? (
                <span className="button-link button-link--secondary">
                  아카이브 노트
                </span>
              ) : (
                <a
                  className="button-link"
                  href={entry.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  원문 보기
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
