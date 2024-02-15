"use client";

import { useLenis } from "@studio-freight/react-lenis";
import styles from "./ScrollTopBtn.module.scss";
import IconComponent from "../iconComponent/IconComponent";
import arrowOnTopIcon from "@/shared/icons/ArrowOnTopIcon.svg";

const ScrollTopBtn = () => {
  const lenis = useLenis();

  const scrollToTop = () => {
    lenis.scrollTo("#top", { lerp: 0.03 });
  };

  return (
    <div className={styles.btn_wrapper}>
      <button onClick={scrollToTop} className={styles.on_top_btn}>
        <IconComponent
          src={arrowOnTopIcon}
          round={true}
          height={14}
          width={14}
          className={styles.btn_icon}
        />
      </button>
    </div>
  );
};

export default ScrollTopBtn;
