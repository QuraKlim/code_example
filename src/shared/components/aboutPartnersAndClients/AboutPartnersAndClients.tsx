import { ReactNode } from "react";
import CarouselSlider from "../carouselSlider/CarouseSlider";
import styles from "./AboutPartnersAndClients.module.scss";

import img1 from "@/public/images/main-page/slider/slider-2/1.webp";
import img2 from "@/public/images/main-page/slider/slider-2/2.webp";
import img3 from "@/public/images/main-page/slider/slider-2/3.webp";
import img4 from "@/public/images/main-page/slider/slider-2/4.webp";
import img5 from "@/public/images/main-page/slider/slider-2/5.webp";
import img6 from "@/public/images/main-page/slider/slider-2/6.webp";
import img7 from "@/public/images/main-page/slider/slider-2/7.webp";
import img8 from "@/public/images/main-page/slider/slider-2/8.webp";
import img9 from "@/public/images/main-page/slider/slider-2/9.webp";
import PartnerComponent from "../partnerComponent/PartnerComponent";
import Button from "../button/button";
import Popup from "../popup/popup";
import { AnimateReveal } from "../animate";

const AboutPartnersAndClients = () => {
  const slidesImages2: ReactNode[] = [
    <PartnerComponent src={img1.src} />,
    <PartnerComponent src={img2.src} />,
    <PartnerComponent src={img3.src} />,
    <PartnerComponent src={img4.src} />,
    <PartnerComponent src={img5.src} />,
    <PartnerComponent src={img6.src} />,
    <PartnerComponent src={img7.src} />,
    <PartnerComponent src={img8.src} />,
    <PartnerComponent src={img9.src} />,
  ];

  return (
    <AnimateReveal willChangeDisable={true}>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <div className={styles.text_wrapper}>
            <p className="text regular">Партнеры и клиенты</p>
            <p className="text regular light">
              Наши клиенты и партнёры включают в себя крупные корпорации, малые
              и средние предприятия, которые доверяют нам свои проекты и
              бизнесы.
            </p>
          </div>
          <Popup>
            <Button text="Стать клиентом" />
          </Popup>
        </div>
        <div className={styles.slider}>
          <CarouselSlider
            sliderElements={slidesImages2}
            slidesPerView={6.3}
            firstBreakPoint={4.2}
            seconBreakPoint={2.05}
            className={styles.carousel}
          />
        </div>
      </div>
    </AnimateReveal>
  );
};

export default AboutPartnersAndClients;
