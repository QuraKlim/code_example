import IconComponent from "@/shared/components/iconComponent/IconComponent";
import styles from "./SliderElement.module.scss";
import Image from "next/image";
import Link from "next/link";
import arrowLeft from "@/shared/icons/round_yellow_btn.svg";

interface ISliderElementProps {
  img: string;
  title: string;
  iconIMage: string;
}

const SliderElement = ({ img, title, iconIMage }: ISliderElementProps) => {
  return (
    <div className={styles.slider_el}>
      <Link href={"#"} className={styles.img_wrap}>
        <Image
          style={{ objectFit: "cover", objectPosition: "center" }}
          src={img}
          fill
          alt="slider-img"
          className={styles.bg_image}
        />
        <div className={styles.slide_btn}>
          <Image src={arrowLeft.src} height={60} width={60} alt="" />
        </div>
      </Link>
      <div className={styles.text}>
        <div className={styles.title_wrap}>
          <p className="text big">{title}</p>
          <IconComponent src={iconIMage} width={30} height={30} />
        </div>
        <Link className="link" href={"#"}>
          <p className="text regular light">6 гайдов</p>
        </Link>
      </div>
    </div>
  );
};

export default SliderElement;
