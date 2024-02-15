"use client";

import arrowIcon from "@/shared/icons/ArrowIcon.svg";
import styles from "./GreetingSection.module.scss";
import Image from "next/image";
import img from "@/public/images/main-page/background/main_page_first_section_bg.jpg";
import Button, { TextColor } from "../../button/button";
import Popup from "../../popup/popup";

const GreetingSection = () => {
  return (
    <section className={styles.greeting_section}>
      <Image
        className={styles.img}
        src={img}
        alt="background"
        fill={true}
        placeholder="blur"
        priority
      />
      <div className={styles.info_wrapper}>
        <div className={styles.title_wrapper}>
          <h1>
            <span className={styles.title_icon_span}>
              Решения для
              <Image
                src={arrowIcon}
                width={50}
                height={50}
                className={styles.arrow_icon}
                alt="arrow"
              />
            </span>
          </h1>
          <h1>инженерых коммуникаций</h1>
        </div>
        <div className={styles.about_company}>
          <p className="text big">
            Инженерные коммуникации , проектирование, строительство, инжиниринг,
            технологическое присоединение к сетям.
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              height: "100%",
              maxHeight: "90px",
            }}
          >
            <Popup>
              <Button text="Стать клиентом" />
            </Popup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreetingSection;
