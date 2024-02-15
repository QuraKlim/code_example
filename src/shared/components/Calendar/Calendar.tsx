import React from "react";
import styles from "./Calendar.module.scss";
import {
  ComponentArticleSteps,
  ComponentSharedTitleWithDecription,
  Maybe,
} from "@/data/generated/graphql";
import { AnimateReveal } from "../animate";

export interface IStep {
  title: string;
  description: string;
}

interface ICalendarProps {
  steps: Maybe<Array<Maybe<ComponentSharedTitleWithDecription>>> | IStep[];
}

const Calendar = async ({ steps }: ICalendarProps) => {
  return (
    <section className={styles.container}>
      <AnimateReveal>
        <div className={styles.advantages_wrapper}>
          {steps &&
            steps.map((el, index) => (
              <div key={index} className={styles.wrap}>
                <div className={styles.num_wrap}>
                  <p className="text regular">{"0" + (index + 1)}</p>
                </div>

                <div className={styles.text_wrap}>
                  <p className="text regular">{el.title}</p>
                  <p className="text regular light"> {el.description}</p>
                </div>
              </div>
            ))}
        </div>
      </AnimateReveal>
    </section>
  );
};

export default Calendar;
