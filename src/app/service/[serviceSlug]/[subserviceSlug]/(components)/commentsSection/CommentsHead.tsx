"use client";
import Button from "@/shared/components/button/button";
import styles from "./CommentsHead.module.scss";
import { AnimateReveal } from "@/shared/components/animate";

const CommentsHead = () => {
  return (
    <>
      <AnimateReveal>
        <div className={styles.text}>
          <p className="text big_header">Убедились в качестве</p>
          <Button text="Наши услуги" />
        </div>
      </AnimateReveal>
    </>
  );
};

export default CommentsHead;
