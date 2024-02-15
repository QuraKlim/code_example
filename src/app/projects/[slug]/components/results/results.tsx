import { AnimateReveal } from "@/shared/components/animate";
import cls from "./results.module.scss";

interface ResultsProps {
  startDate: string;
  endDate: string;
  text: string;
}

const Results = ({ startDate, endDate, text }: ResultsProps) => {
  return (
    <section className={"container " + cls.results}>
      <AnimateReveal>
        <div className={cls.results_wrapper}>
          <div className={"text big_header " + cls.header}>Результаты</div>
          <div className={cls.deadline}>
            <p>Сроки выполнения</p>
            <p className="text light">
              C {startDate} до {endDate}
            </p>
          </div>
          <div className={"text big " + cls.text}>{text}</div>
        </div>
      </AnimateReveal>
    </section>
  );
};

export default Results;
