import cls from "./projectsList.module.scss";
import ProjectElement from "@/shared/components/projectElement/ProjectElement";

export interface Project {
  address: string;
  typeJob: string;
  task: string;
  image: string;
  slug: string;
}

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className={"container " + cls.projects}>
      <div className={cls.projects_list}>
        {projects.length ? (
          projects.map((i, index) => (
            <div className={cls.animated}>
              <ProjectElement
                jobCase={i.task}
                object={i.address}
                workType={i.typeJob}
                key={index}
                src={process.env.NEXT_PUBLIC_BACKEND_URL + i.image}
                isVertical={true}
                href={`/projects/${i.slug}`}
              />
            </div>
          ))
        ) : (
          <div className={cls.empty_page}></div>
        )}
      </div>
    </section>
  );
};
export default ProjectsList;
