import styles from "./ProgressBar.module.scss";
import LeftArrowIcon from "../carouselSlider/icons/LeftArrowIcon";
import RightArrowIcon from "../carouselSlider/icons/RightArrowIcon";
import React from "react";
import clsx from "clsx";

interface IProgressBarProps {
  currentSlide: number;
  instanceRef: any;
  isVisible?: boolean;
  className?:string
}

const ProgressBar: React.FC<IProgressBarProps> = ({
  currentSlide,
  instanceRef,
  isVisible = true,
  className
}) => {
  return (
    <div className={clsx(isVisible ? styles.progress_bar_wrapper : styles.hide, className)}>
      <div className={styles.wrapper}>
        <div
          style={{
            transform: `scaleX(${currentSlide === 0 ? 1 : currentSlide + 1.0})`,
            transformOrigin: "left center",
            width: `${
              (1 / (instanceRef.current?.track.details.maxIdx + 1)) * 100
            }%`,
          }}
          className={styles.inner_line}
        ></div>
      </div>
      <div className={styles.btn_wrapper}>
        <button
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          className={styles.btn}
        >
          <LeftArrowIcon />
        </button>
        <button
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
          className={styles.btn}
        >
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};
export default ProgressBar;
