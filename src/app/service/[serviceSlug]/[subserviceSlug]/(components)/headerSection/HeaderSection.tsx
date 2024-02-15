"use client";
import BreadCrumbs from "@/shared/components/breadcrumbs/BreadCrumbs";
import styles from "./HeaderSection.module.scss";
import { AnimateReveal } from "@/shared/components/animate";

interface IHeaderSection {
  breadcrumbs: {
    urlPrev: string;
    titlePrev: string;
    urlCur: string;
  };
  headerTitle: string;
}

const HeaderSection = ({ breadcrumbs, headerTitle }: IHeaderSection) => {
  const breadcrumbsArr = [
    {
      name: "Главная",
      url: "/",
    },
    {
      name: breadcrumbs.titlePrev,
      url: `/service/${breadcrumbs.urlPrev}`,
    },
    {
      name: headerTitle,
      url: `/service/${breadcrumbs.urlPrev}/${breadcrumbs.urlCur}`,
    },
  ];

  return (
    <AnimateReveal>
      <div className={styles.page_header}>
        <h1>{headerTitle}</h1>
        <div>
          <BreadCrumbs breadcrumbsArr={breadcrumbsArr} />
        </div>
      </div>
    </AnimateReveal>
  );
};

export default HeaderSection;
