import { AnimateReveal } from "../animate";
import cls from "./pageHeader.module.scss";

interface PageHeaderProps {
  header: string;
}

const PageHeader = ({ header }: PageHeaderProps) => {
  return (
    <section className={"container " + cls.title}>
      <AnimateReveal>
        <h1>{header}</h1>
      </AnimateReveal>
    </section>
  );
};

export default PageHeader;
