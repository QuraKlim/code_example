"use client";

import React, { ReactNode, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./CarouselSlider.module.scss";
import ProgressBar from "../progessBar/ProgressBar";
import clsx from "clsx";
import { AnimateReveal } from "../animate";

interface ISliderProps {
  sliderElements: ReactNode[];
  slidesPerView: number;
  firstBreakPoint?: number;
  seconBreakPoint?: number;
  className?: string;
  progressBarClassName?: string;
}

const CarouselSlider: React.FC<ISliderProps> = ({
  sliderElements,
  slidesPerView,
  firstBreakPoint = 1,
  seconBreakPoint = 1,
  className,
  progressBarClassName,
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    mode: "free",
    slides: {
      perView: slidesPerView,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: firstBreakPoint, spacing: 10 },
      },
      "(max-width: 435px)": {
        slides: {
          perView: seconBreakPoint,
          spacing: 10,
        },
      },
    },
  });

  useEffect(() => {
    instanceRef.current.update({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      mode: "free",
      slides: {
        perView: slidesPerView,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 768px)": {
          slides: { perView: firstBreakPoint, spacing: 10 },
        },
        "(max-width: 470px)": {
          slides: {
            perView: seconBreakPoint,
            spacing: 10,
          },
        },
      },
    });
  }, [sliderElements]);

  return (
    <AnimateReveal>
      <div className={styles.visible}>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className={clsx("keen-slider", className)}>
            {sliderElements &&
              sliderElements.map((element, index) => (
                <div
                  key={index}
                  className={
                    "carouse-slider keen-slider__slide number-slide_" +
                    (index + 1)
                  }
                >
                  {element}
                </div>
              ))}
          </div>
        </div>
        <ProgressBar
          className={progressBarClassName}
          currentSlide={currentSlide}
          instanceRef={instanceRef}
        />
      </div>
    </AnimateReveal>
  );
};

export default CarouselSlider;
