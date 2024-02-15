import React from "react";
import styles from "./Requsits.module.scss";
import { AnimateReveal } from "../animate";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/shared/icons/arrow.svg";
import sber_logo from "@/public/images/main-page/sber-logo.jpg";
import vl_logo from "@/shared/icons/vk-logo.svg";
import arrow_small from "@/shared/icons/maps-arrow-small.svg";

export const Requsits = () => {
  return (
    <section className={"container " + styles.requisites_link}>
      <AnimateReveal>
        <div className={styles.req_wrap}>
          <a
            href={"/images/main-page/requsits.pdf"}
            target="blank"
            className={"text big " + styles.link_big}
          >
            Посмотреть реквизиты
            <Image
              width={24}
              height={24}
              className={styles.link_arrow}
              src={Arrow}
              alt="arrow"
            />
          </a>
          <div className={styles.social_links}>
            <Link target="blank" href="/images/main-page/sber_rating.pdf">
              <Image
                src={sber_logo}
                className={styles.sber_logo}
                alt="sber"
                width={204}
                height={27}
                quality={100}
              />
              <Image
                width={24}
                height={24}
                className={styles.small_arr}
                src={arrow_small}
                alt="arrow"
              />
            </Link>
            <Link target="blank" href=" https://vk.com/megavolt_group">
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <Image
                  src={vl_logo}
                  className={styles.vk_logo}
                  width={36}
                  height={19}
                  alt="vk"
                />
                <p className="link text regular light">Группа Вконтакте</p>
              </div>
              <Image
                width={24}
                height={24}
                className={styles.small_arr}
                src={arrow_small}
                style={{ transform: "rotate" }}
                alt="arrow"
              />
            </Link>
          </div>
        </div>
      </AnimateReveal>
    </section>
  );
};
