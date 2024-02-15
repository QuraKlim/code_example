import { AnimateReveal } from "@/shared/components/animate";
import cls from "./statistic.module.scss";

export const Statistic = () => {
  return (
    <section className={"container " + cls.statistic}>
      <AnimateReveal>
        <div className={cls.statistic_flex + " flex jcsb"}>
          <p>Статистика</p>
          <div className={"flex " + cls.statistic_wrapper}>
            <div className={cls.statistic_item}>
              <p>12</p>
              <p className="text light">Опыт в сфере более 12 лет</p>
            </div>
            <div className={cls.statistic_item}>
              <p>500+</p>
              <p className="text light">Реализованных проектов</p>
            </div>
            <div className={cls.statistic_item}>
              <p>150 000</p>
              <p className="text light">
                Метров проложенных кабельных и воздушных линий
              </p>
            </div>
          </div>
        </div>
      </AnimateReveal>
    </section>
  );
};

export default Statistic;
