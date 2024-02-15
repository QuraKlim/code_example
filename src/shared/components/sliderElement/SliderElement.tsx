"use client";

import styles from "./SliderElement.module.scss";
import Link from "next/link";
import arrowLeft from "@/shared/icons/arrowLetf.svg";
import Image from "next/image";

interface ISliderElementProps {
  src: string;
  articleTitle: string;
  date: string;
  href: string;
}

const SliderElement = ({
  src,
  articleTitle,
  date,
  href,
}: ISliderElementProps) => {
  return (
    <div className={styles.wrapper}>
      <Link className="link" href={href}>
        <div className={styles.img_wrap}>
          <Image
            className={styles.img}
            src={src}
            width={420}
            height={500}
            alt="slider-image"
          />
          <div className={styles.slide_btn}>
            <Image src={arrowLeft.src} width={25} height={25} alt="" />
          </div>
        </div>
        <div className={styles.description}>
          <p className="regular text ">{articleTitle}</p>
          <p className="regular text light">{date}</p>
        </div>
      </Link>
    </div>
  );
};

export default SliderElement;
