"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/types/content";

type ProjectExplorerProps = {
  projects: Project[];
};

type SortMode = "featured" | "title";

type FilterGroupProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

function FilterGroup({ label, options, value, onChange }: FilterGroupProps) {
  return (
    <div className="filter-group">
      <span className="filter-group__label">{label}</span>
      <div className="filter-options">
        <button
          className={`filter-chip ${value === "전체" ? "filter-chip--active" : ""}`}
          onClick={() => onChange("전체")}
          type="button"
        >
          전체
        </button>
        {options.map((option) => (
          <button
            className={`filter-chip ${value === option ? "filter-chip--active" : ""}`}
            key={option}
            onClick={() => onChange(option)}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const [domain, setDomain] = useState("전체");
  const [problemType, setProblemType] = useState("전체");
  const [stack, setStack] = useState("전체");
  const [sortMode, setSortMode] = useState<SortMode>("featured");

  const domains = useMemo(
    () => Array.from(new Set(projects.flatMap((project) => project.domains))),
    [projects],
  );
  const problemTypes = useMemo(
    () =>
      Array.from(new Set(projects.flatMap((project) => project.problemTypes))),
    [projects],
  );
  const stacks = useMemo(
    () => Array.from(new Set(projects.flatMap((project) => project.stack))),
    [projects],
  );

  const filteredProjects = useMemo(() => {
    const nextProjects = projects.filter((project) => {
      const matchesDomain =
        domain === "전체" || project.domains.includes(domain);
      const matchesProblemType =
        problemType === "전체" || project.problemTypes.includes(problemType);
      const matchesStack = stack === "전체" || project.stack.includes(stack);

      return matchesDomain && matchesProblemType && matchesStack;
    });

    if (sortMode === "title") {
      return [...nextProjects].sort((left, right) =>
        left.title.localeCompare(right.title),
      );
    }

    return [...nextProjects].sort((left, right) => left.sortOrder - right.sortOrder);
  }, [domain, problemType, projects, sortMode, stack]);

  return (
    <section className="page-grid">
      <div className="surface-card filter-panel">
        <div className="filter-panel__header">
          <div>
            <span className="eyebrow">Explorer</span>
            <h2 className="section-title">문제 유형과 도메인으로 프로젝트를 읽기</h2>
          </div>
          <div className="sort-switch" role="group" aria-label="Sort projects">
            <button
              className={`filter-chip ${sortMode === "featured" ? "filter-chip--active" : ""}`}
              onClick={() => setSortMode("featured")}
              type="button"
            >
              추천순
            </button>
            <button
              className={`filter-chip ${sortMode === "title" ? "filter-chip--active" : ""}`}
              onClick={() => setSortMode("title")}
              type="button"
            >
              제목순
            </button>
          </div>
        </div>

        <div className="filter-groups">
          <FilterGroup
            label="도메인"
            onChange={setDomain}
            options={domains}
            value={domain}
          />
          <FilterGroup
            label="문제 유형"
            onChange={setProblemType}
            options={problemTypes}
            value={problemType}
          />
          <FilterGroup
            label="기술"
            onChange={setStack}
            options={stacks}
            value={stack}
          />
        </div>
      </div>

      <div className="results-summary">
        <span>{filteredProjects.length} projects</span>
        <span>
          {domain} / {problemType} / {stack}
        </span>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="surface-card empty-state">
          <h2 className="section-title">조건에 맞는 프로젝트가 없습니다.</h2>
          <p className="page-intro">
            필터를 하나씩 해제하면 다른 도메인이나 문제 유형의 프로젝트가 다시
            보입니다.
          </p>
        </div>
      )}
    </section>
  );
}

