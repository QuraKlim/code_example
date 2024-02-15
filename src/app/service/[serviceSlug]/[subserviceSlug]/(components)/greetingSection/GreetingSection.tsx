"use client";
import styles from "./GreetingSection.module.scss";
import Button from "@/shared/components/button/button";
import Image from "next/image";
import mainImg from "@/public/images/subservice-page/image.jpg";
import Popup from "@/shared/components/popup/popup";
import { AnimateReveal } from "@/shared/components/animate";

interface IGreetingSection {
  description: string;
  image: string;
}

export const GreetingSection = ({ description, image }: IGreetingSection) => {
  return (
    <>
      <AnimateReveal>
        <div className={styles.greeting_wrap}>
          <p className={"text big"}>{description}</p>
          <Popup>
            <Button text="Получить консультацию" />
          </Popup>
        </div>
      </AnimateReveal>
      <AnimateReveal>
        <div className={styles.wrap}>
          <div className={styles.img_wrap}>
            <Image src={image} fill alt="greeting-image" />
          </div>
        </div>
      </AnimateReveal>
    </>
  );
};
