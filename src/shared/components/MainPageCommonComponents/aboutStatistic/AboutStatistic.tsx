import { AnimateReveal } from "../../animate";
import styles from "./AboutStatistic.module.scss";

const AboutStatistic = () => {
  return (
    <AnimateReveal>
      <div className={styles.statistic_wrapper}>
        <div>Статистика</div>
        <ul className={styles.statistic_list}>
          <li className={styles.statistic_list_el}>
            <div className={styles.wrapper}>
              <p className="text regular">12</p>
              <p className="text regular light">Опыт в сфере более 12 лет</p>
            </div>
          </li>
          <li className={styles.statistic_list_el}>
            <div className={styles.wrapper}>
              <p className="text regular">500+</p>
              <p className="text regular light">Реализованных проектов</p>
            </div>
          </li>
          <li className={styles.statistic_list_el}>
            <div className={styles.wrapper}>
              <p className="text regular">150 000</p>
              <p className="text regular light">
                Метров проложенных кабельных и воздушных линий
              </p>
            </div>
          </li>
        </ul>
      </div>
    </AnimateReveal>
  );
};

export default AboutStatistic;
