"use client";

import AboutHead from "@/shared/components/MainPageCommonComponents/aboutHead/AboutHead";
import AboutStatistic from "@/shared/components/MainPageCommonComponents/aboutStatistic/AboutStatistic";
import AboutPartnersAndClients from "@/shared/components/aboutPartnersAndClients/AboutPartnersAndClients";
import Certificates from "../../certificates/Certificates";
import CarouselSlider from "../../carouselSlider/CarouseSlider";
import styles from "./AboutUs.module.scss";
import cer_1 from "@/public/images/main-page/certificates/cer_1.webp";
import first from "@/public/images/main-page/certificates/first.webp";
import cer_2 from "@/public/images/main-page/certificates/cer_2.webp";
import cer_3 from "@/public/images/main-page/certificates/cer_3.webp";
import cer_4 from "@/public/images/main-page/certificates/cer_4.webp";
import cer_5 from "@/public/images/main-page/certificates/cer_5.webp";
import cer_6 from "@/public/images/main-page/certificates/cer_6.webp";
import cer_7 from "@/public/images/main-page/certificates/cer_7.webp";
import cer_8 from "@/public/images/main-page/certificates/cer_8.webp";
import l1 from "@/public/images/main-page/letters/1.webp";
import l2 from "@/public/images/main-page/letters/2.webp";
import l3 from "@/public/images/main-page/letters/3.webp";
import l4 from "@/public/images/main-page/letters/4.webp";
import l5 from "@/public/images/main-page/letters/5.webp";
import l6 from "@/public/images/main-page/letters/6.webp";
import l7 from "@/public/images/main-page/letters/7.webp";
import l8 from "@/public/images/main-page/letters/8.webp";
import l9 from "@/public/images/main-page/letters/9.webp";
import { AnimateReveal } from "../../animate";

const AboutUsSection = () => {
  return (
    <section className={styles.a_section}>
      <div className={styles.head_wrap}>
        <AboutHead />
        <AboutStatistic />
      </div>
      <CertificatesWithClients />
    </section>
  );
};

const sertificates = [
  first,
  cer_1,
  cer_2,
  cer_3,
  cer_4,
  cer_5,
  cer_6,
  cer_7,
  cer_8,
];

const letters = [
  { src: l1, title: 'ООО "ИнвестНедвижимость"' },
  { src: l2, title: 'ООО "СК Девелопмент"' },
  { src: l3, title: 'АО "Газпромбанк"' },
  { src: l4, title: 'АО "Клиника К+31"' },
  { src: l5, title: 'АО "Тоговый дом Перекресток"' },
  { src: l6, title: 'АО "Райффайзенбанк"' },
  { src: l7, title: 'АО "РН-Москва"' },
  { src: l8, title: "Проректор по АХР" },
  { src: l9, title: 'ООО "Московская зеркальная фабрика"' },
];

export const CertificatesWithClients = () => {
  return (
    <>
      <AnimateReveal>
        <div>
          <p className={"text regular " + styles.title}>Сертификаты</p>
          <div className={styles.slider}>
            <CarouselSlider
              sliderElements={sertificates.map((el, index) => (
                <Certificates
                  key={index}
                  src={el.src}
                  alt="certificate"
                  srcToPdf={`/images/main-page/certificates/pdf/${index}.pdf`}
                />
              ))}
              slidesPerView={4}
              firstBreakPoint={2.3}
              seconBreakPoint={1.4}
              className={styles.carousel}
            />
          </div>
        </div>
      </AnimateReveal>
      <AnimateReveal>
        <div className={styles.letters_wrap}>
          <p className={"text regular " + styles.title}>
            Благодарственные письма
          </p>
          <div className={styles.slider}>
            <CarouselSlider
              sliderElements={letters.map((el, index) => (
                <Certificates
                  key={index}
                  src={el.src.src}
                  alt="certificate"
                  srcToPdf={`/images/main-page/letters/pdf/${index}.pdf`}
                  title={el.title}
                />
              ))}
              slidesPerView={4}
              firstBreakPoint={2.3}
              seconBreakPoint={1.4}
              className={styles.carousel}
            />
          </div>
        </div>
      </AnimateReveal>
      <AboutPartnersAndClients />
    </>
  );
};

export default AboutUsSection;
