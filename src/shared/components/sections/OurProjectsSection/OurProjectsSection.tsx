import styles from "./OurProjectsSection.module.scss";
import CarouselSlider from "@/shared/components/carouselSlider/CarouseSlider";
import React, { ReactNode } from "react";
import ProjectElement from "../../projectElement/ProjectElement";
import Button from "@/shared/components/button/button";
import clsx from "clsx";
import { Project } from "@/app/projects/components/projectsList/projectsList";
import { fetchProjectsData } from "@/app/projects/utils/fetchProjectsData";
import { AnimateReveal } from "../../animate";
import Link from "next/link";

interface OurProjectsSectionProps {
  classname?: string;
  elements?: Project[];
}

const OurProjectsSection = async ({
  classname,
  elements,
}: OurProjectsSectionProps) => {
  //при подгрузке последних проектов вместе с другими данными на странице они прокидываются сюда в elements. Если последние проекты - единственное на всей странице, что нужно подгрузить, то оно подгружается отдельно в этой функции
  const lastProjects = !elements
    ? await fetchProjectsData({
        sort: "id:desc",
        pagination: {
          limit: 3,
        },
      }).then((resp) =>
        resp.data.map((i) => (
          <ProjectElement
            src={process.env.NEXT_PUBLIC_BACKEND_URL + i.image}
            jobCase={i.task}
            href={`/projects/${i.slug}`}
            object={i.address}
            workType={i.typeJob}
          />
        ))
      )
    : null;

  const sliderElements = elements
    ? elements?.map((i) => (
        <ProjectElement
          src={i.image}
          jobCase={i.task}
          href={`/projects/${i.slug}`}
          object={i.address}
          workType={i.typeJob}
        />
      ))
    : null;

  return (
    <section className={`${styles.container} ${classname}`}>
      <div className={styles.p_section}>
        <AnimateReveal>
          <div className={styles.header}>
            <h1 style={{ maxWidth: "740px" }} className={"text big_header"}>
              Наши свежие завершенные проекты
            </h1>
            <Link href="/projects">
              <Button text="Смотреть все проекты" />
            </Link>
          </div>
        </AnimateReveal>
        <CarouselWrapper
          elements={sliderElements ?? lastProjects}
          slidesPerView={1.15}
        />
      </div>
    </section>
  );
};

interface CarouselWrapperProps {
  elements: ReactNode[];
  slidesPerView: number;
  horizontalOnMobile?: boolean;
  firstBreakPoint?: number;
  seconBreakPoint?: number;
}

export const CarouselWrapper = ({
  elements,
  slidesPerView,
  firstBreakPoint,
  seconBreakPoint,
  horizontalOnMobile = false,
}: CarouselWrapperProps) => {
  return (
    <>
      {!horizontalOnMobile && (
        <AnimateReveal>
          <div className={styles.mobile_wrap}>
            {elements &&
              elements.map((slide, index) => <div key={index}>{slide}</div>)}
          </div>
        </AnimateReveal>
      )}
      <div
        className={clsx(
          styles.carousel_wrap,
          horizontalOnMobile && styles.horizontal
        )}
      >
        <CarouselSlider
          sliderElements={elements}
          slidesPerView={slidesPerView}
          firstBreakPoint={firstBreakPoint}
          seconBreakPoint={seconBreakPoint}
          className={styles.carousel}
          progressBarClassName={styles.progress}
        />
      </div>
    </>
  );
};

export default OurProjectsSection;
