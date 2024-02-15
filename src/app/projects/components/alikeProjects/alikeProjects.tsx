import cls from "./alikeProjects.module.scss";
import ProjectElement from "@/shared/components/projectElement/ProjectElement";
import Button from "@/shared/components/button/button";
import { CarouselWrapper } from "@/shared/components/sections/OurProjectsSection/OurProjectsSection";
import { Project } from "../projectsList/projectsList";
import Link from "next/link";
import { AnimateReveal } from "@/shared/components/animate";

interface AlikeProjectsProps {
  projects: Project[];
}

const AlikeProjects = ({ projects }: AlikeProjectsProps) => {
  const projectsList = projects.map((i, index) => (
    <ProjectElement
      jobCase={i.task}
      object={i.address}
      workType={i.typeJob}
      key={index}
      src={process.env.NEXT_PUBLIC_BACKEND_URL + i.image}
      href={`/projects/${i.slug}`}
    />
  ));
  return (
    <>
      <AnimateReveal>
        <div className={"container " + cls.projects}>
          <div className={cls.header}>
            <p className="text big_header">Похожие проекты</p>
            {projectsList.length ? (
              <Link href="/projects" className="link-no-decoration">
                <Button text="Смотреть все проекты" />
              </Link>
            ) : null}
          </div>
        </div>
      </AnimateReveal>
      <AnimateReveal>
        {projectsList.length ? (
          <div className={cls.photos}>
            <CarouselWrapper
              slidesPerView={1.15}
              firstBreakPoint={1.35}
              seconBreakPoint={1.5}
              elements={projectsList}
            />
          </div>
        ) : (
          <div className="container">
            <p className="text big">Нет похожих проектов</p>
          </div>
        )}
      </AnimateReveal>
    </>
  );
};

export default AlikeProjects;
