import React from "react";
import styles from "./SubAboutUs.module.scss";
import backgroundImg from "@/public/images/main-page/about-us/about-us-bg.jpg";
import Image from "next/image";
import Calendar, { IStep } from "../../Calendar/Calendar";
import { AnimateReveal } from "@/shared/components/animate";

const steps: IStep[] = [
  {
    title: "Знаем требования сетевых организаций",
    description:
      "Благодаря чему мы можем заниматься эффективной проектной деятельностью",
  },
  {
    title: "Высокая квалификация специалистов",
    description: "Справляемся даже с самыми сложными задачами",
  },
  {
    title: "Не тратим ваше время",
    description:
      "Работаем со структурными подразделениями города, создаем комфортную среду по документообороту",
  },
  {
    title: "Выполняем полный цикл работ",
    description:
      "Предлагаем дополнительные услуги по водоснабжению и теплоснабжению",
  },
];
const SubAboutUs = () => {
  return (
    <>
      <section className={styles.sub_section}>
        <AnimateReveal>
          <div>
            <div className={styles.description}>
              <p className="text regular light">
                <span className={styles.dark_text}>Нас выбирают,</span> потому
                что в мире деловых людей мало быть просто экспертом в своем
                деле
              </p>
              <h1 className="text big_header">
                Мы знаем правила поведения и умеем выстраивать отношения в
                бизнес-среде
              </h1>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.img_wrapper}>
                <Image
                  className={styles.img}
                  src={backgroundImg.src}
                  fill
                  alt="sub-about-us-people-image"
                />
              </div>
            </div>
          </div>
        </AnimateReveal>
      </section>
      <section className={styles.calendar_section}>
        <Calendar steps={steps} />
      </section>
    </>
  );
};

export default SubAboutUs;
