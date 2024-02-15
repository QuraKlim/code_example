import { AnimateReveal } from "../../animate";
import BreadCrumbs, { IBreadCrumbsProps } from "../../breadcrumbs/BreadCrumbs";
import cls from "./breadcrumbsSection.module.scss";

const BreadcrumbsSection = ({ breadcrumbsArr }: IBreadCrumbsProps) => {
  return (
    <section className={"container " + cls.section}>
      <AnimateReveal>
        <BreadCrumbs breadcrumbsArr={breadcrumbsArr} />
      </AnimateReveal>
    </section>
  );
};

export default BreadcrumbsSection;
