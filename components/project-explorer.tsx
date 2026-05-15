"use client";

import { useMemo, useState } from "react";

import { FilterSelect } from "@/components/filter-select";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/types/content";

type ProjectExplorerProps = {
  projects: Project[];
};

type SortMode = "featured" | "title";
type ProjectSectionVariant = "featured" | "supporting";

const ALL = "전체";

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const [domain, setDomain] = useState(ALL);
  const [problemType, setProblemType] = useState(ALL);
  const [stack, setStack] = useState(ALL);
  const [sortMode, setSortMode] = useState<SortMode>("featured");

  const domains = useMemo(
    () => Array.from(new Set(projects.map((project) => project.primaryDomain))),
    [projects],
  );
  const problemTypes = useMemo(
    () => Array.from(new Set(projects.flatMap((project) => project.problemTypes))),
    [projects],
  );
  const stacks = useMemo(
    () => Array.from(new Set(projects.flatMap((project) => project.filterTools))),
    [projects],
  );

  const filteredProjects = useMemo(() => {
    const nextProjects = projects.filter((project) => {
      const matchesDomain = domain === ALL || project.primaryDomain === domain;
      const matchesProblemType = problemType === ALL || project.problemTypes.includes(problemType);
      const matchesStack = stack === ALL || project.filterTools.includes(stack);

      return matchesDomain && matchesProblemType && matchesStack;
    });

    if (sortMode === "title") {
      return [...nextProjects].sort((left, right) => left.title.localeCompare(right.title));
    }

    return [...nextProjects].sort((left, right) => left.sortOrder - right.sortOrder);
  }, [domain, problemType, projects, sortMode, stack]);

  const activeFilters = [
    domain !== ALL ? domain : null,
    problemType !== ALL ? problemType : null,
    stack !== ALL ? stack : null,
  ].filter(Boolean) as string[];
  const featuredResults = filteredProjects.filter((project) => project.status === "featured");
  const supportingResults = filteredProjects.filter((project) => project.status !== "featured");

  const renderProjectSection = (
    title: string,
    description: string,
    items: Project[],
    variant: ProjectSectionVariant,
  ) =>
    items.length > 0 ? (
      <section className="project-result-section" key={title}>
        <div className="project-result-section__head">
          <span className="eyebrow">{title}</span>
          <p>{description}</p>
        </div>
        <div className={`project-grid project-grid--${variant}`}>
          {items.map((project, index) => (
            <ProjectCard index={index + 1} key={project.slug} project={project} variant={variant} />
          ))}
        </div>
      </section>
    ) : null;

  return (
    <section className="page-grid">
      <div className="surface-card filter-panel filter-panel--projects">
        <div className="filter-panel__header filter-panel__header--projects">
          <div className="filter-panel__intro">
            <span className="eyebrow">Filter / Sort</span>
            <h2 className="section-title">Evidence Board 좁혀보기</h2>
            <p className="filter-panel__description">
              도메인, 문제 유형, 기술 스택 기준으로 어떤 프로젝트가 어떤 역량을 증명하는지 빠르게 비교합니다.
            </p>
          </div>

          <div className="filter-panel__status">
            <span className="filter-status-pill">{filteredProjects.length}개 프로젝트</span>
            <button
              className="text-button"
              onClick={() => {
                setDomain(ALL);
                setProblemType(ALL);
                setStack(ALL);
                setSortMode("featured");
              }}
              type="button"
            >
              필터 초기화
            </button>
          </div>
        </div>

        <div className="filter-grid filter-grid--projects">
          <FilterSelect
            id="project-domain"
            label="도메인"
            onChange={setDomain}
            options={[{ label: ALL, value: ALL }, ...domains.map((option) => ({ label: option, value: option }))]}
            tone="explorer"
            value={domain}
          />
          <FilterSelect
            id="project-problem-type"
            label="문제 유형"
            onChange={setProblemType}
            options={[
              { label: ALL, value: ALL },
              ...problemTypes.map((option) => ({ label: option, value: option })),
            ]}
            tone="explorer"
            value={problemType}
          />
          <FilterSelect
            id="project-stack"
            label="기술"
            onChange={setStack}
            options={[{ label: ALL, value: ALL }, ...stacks.map((option) => ({ label: option, value: option }))]}
            tone="explorer"
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
            tone="explorer"
            value={sortMode}
          />
        </div>

        <div className="filter-toolbar filter-toolbar--projects">
          <div className="results-summary results-summary--projects">
            <span>{sortMode === "featured" ? "추천순" : "제목순"}</span>
            {activeFilters.length > 0 ? (
              <div className="filter-active-list" aria-label="active filters">
                {activeFilters.map((item) => (
                  <span className="filter-active-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <span>전체 기준</span>
            )}
          </div>

          <div className="filter-quick-chips" aria-label="quick domain filters">
            {[ALL, ...domains.slice(0, 5)].map((item) => {
              const isActive = domain === item;

              return (
                <button
                  className={`filter-quick-chip ${isActive ? "filter-quick-chip--active" : ""}`}
                  key={item}
                  onClick={() => setDomain(item)}
                  type="button"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <>
          {renderProjectSection(
            "Featured Projects",
            "의사결정 질문, 근거 지표, 산출물, Hiring Signal을 우선 확인할 대표 증거입니다.",
            featuredResults,
            "featured",
          )}
          {renderProjectSection(
            "Supporting Projects",
            "도메인 확장성과 작업 범위를 압축해서 보여주는 보조 증거입니다.",
            supportingResults,
            "supporting",
          )}
        </>
      ) : (
        <div className="surface-card empty-state">
          <h2 className="section-title">조건에 맞는 프로젝트가 없습니다.</h2>
          <p className="page-intro">
            필터를 하나씩 해제하면 다른 도메인과 문제 유형의 프로젝트가 다시 보입니다.
          </p>
        </div>
      )}
    </section>
  );
}
