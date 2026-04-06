"use client";

import { useMemo, useState } from "react";

import { FilterSelect } from "@/components/filter-select";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/types/content";

type ProjectExplorerProps = {
  projects: Project[];
};

type SortMode = "featured" | "title";

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
            <h2 className="section-title">필터로 프로젝트 좁히기</h2>
            <p className="filter-panel__description">
              도메인, 문제 유형, 기술 기준으로 필요한 프로젝트만 빠르게 확인할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="filter-grid">
          <FilterSelect
            id="project-domain"
            label="도메인"
            onChange={setDomain}
            options={[
              { label: "전체", value: "전체" },
              ...domains.map((option) => ({ label: option, value: option })),
            ]}
            value={domain}
          />
          <FilterSelect
            id="project-problem-type"
            label="문제 유형"
            onChange={setProblemType}
            options={[
              { label: "전체", value: "전체" },
              ...problemTypes.map((option) => ({ label: option, value: option })),
            ]}
            value={problemType}
          />
          <FilterSelect
            id="project-stack"
            label="기술"
            onChange={setStack}
            options={[
              { label: "전체", value: "전체" },
              ...stacks.map((option) => ({ label: option, value: option })),
            ]}
            value={stack}
          />
          <FilterSelect
            id="project-sort"
            label="정렬"
            onChange={(value) => setSortMode(value as SortMode)}
            options={[
              { label: "추천순", value: "featured" },
              { label: "제목순", value: "title" },
            ]}
            value={sortMode}
          />
        </div>

        <div className="filter-toolbar">
          <div className="results-summary">
            <span>{filteredProjects.length} projects</span>
            <span>
              {domain} / {problemType} / {stack}
            </span>
          </div>
          <button
            className="text-button"
            onClick={() => {
              setDomain("전체");
              setProblemType("전체");
              setStack("전체");
              setSortMode("featured");
            }}
            type="button"
          >
            필터 초기화
          </button>
        </div>
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
