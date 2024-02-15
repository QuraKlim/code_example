"use client";

import PageHeader from "@/shared/components/pageHeader/pageHeader";
import cls from "./page.module.scss";
import Parametrs from "./components/parametrs/parametrs";
import ProjectsList, { Project } from "./components/projectsList/projectsList";
import ContactUs from "@/shared/components/contactUs/contactUs";
import EmptyButton from "@/shared/components/emptyButton/emptyButton";
import { parseData } from "./utils/fetchProjectsData";
import { client } from "@/data/client";
import { useQuery } from "@apollo/client";
import { getAllProjectsQuery } from "@/queries";
import { useEffect, useState } from "react";
import BreadcrumbsSection from "@/shared/components/sections/breadcrumbsSection/breadcrumbsSection";
import { AnimateReveal } from "@/shared/components/animate";

const pageSize = 2;

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [choosenFilters, setChoosenFilters] = useState<string[] | null>(null);
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const breadcrumbsArr = [
    {
      name: "Главная",
      url: "/",
    },
    {
      name: "Объекты",
      url: "/projects",
    },
  ];

  const { fetchMore, refetch, loading } = useQuery(getAllProjectsQuery, {
    variables: {
      pagination: {
        limit: pageSize,
        start: 0,
      },
    },
    onCompleted: (data) => {
      const projects = parseData(data);
      setProjects((prev) => [...prev, ...projects.data]);
      setFilters(projects.tags);
      setTotal(data.projects.meta.pagination.total);
    },
    client: client,
  });

  const loadMore = () => {
    setFetchMoreLoading(true);
    fetchMore({
      variables: {
        filters:
          choosenFilters && choosenFilters.length
            ? {
                project_tags: {
                  tag: {
                    in: choosenFilters,
                  },
                },
              }
            : null,
        pagination: {
          limit: pageSize,
          start: projects.length,
        },
      },
      updateQuery: (prev, newData) => {
        const newProjects = parseData(newData.fetchMoreResult);
        setProjects((prev) => [...prev, ...newProjects.data]);
        setFetchMoreLoading(false);

        setTotal(newData.fetchMoreResult.projects.meta.pagination.total);
        return newData.fetchMoreResult;
      },
    });
  };

  const onFilterChange = () => {
    refetch({
      filters: choosenFilters?.length
        ? {
            project_tags: {
              tag: {
                in: choosenFilters,
              },
            },
          }
        : null,
      pagination: {
        limit: projects.length < pageSize ? pageSize : projects.length,
      },
    }).then((resp) => {
      const updatedProjects = parseData(resp.data);
      setProjects((prev) => [...updatedProjects.data]);
      setTotal(resp.data.projects.meta.pagination.total);
    });
  };

  useEffect(() => {
    if (choosenFilters) {
      onFilterChange();
    }
  }, [choosenFilters]);

  return (
    <div className="mt">
      <PageHeader header="Объекты" />
      <BreadcrumbsSection breadcrumbsArr={breadcrumbsArr} />
      <Parametrs setPickedParametrs={setChoosenFilters} parametrs={filters} />
      <ProjectsList projects={projects} />

      {projects.length < total ? (
        <section className={"container " + cls.empty_button}>
          <AnimateReveal>
            <EmptyButton
              onClick={loadMore}
              disabled={fetchMoreLoading || loading}
              text={
                fetchMoreLoading || loading ? "Загрузка..." : "Загрузить ещё"
              }
            />
          </AnimateReveal>
        </section>
      ) : null}

      <section className={cls.contact_wrap}>
        <ContactUs />
      </section>
    </div>
  );
};

export default Projects;
