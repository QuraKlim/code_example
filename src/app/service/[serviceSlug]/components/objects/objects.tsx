import SliderImage from "@/public/images/subservice-page/slider_img.webp";
import cls from "./objects.module.scss";
import Image from "next/image";
import Icon from "@/shared/icons/key.svg";
import Arrow from "@/shared/icons/arrow.svg";
import CiricleIcon from "@/shared/components/ciricleIcon/ciricleIcon";
import { CarouselWrapper } from "@/shared/components/sections/OurProjectsSection/OurProjectsSection";
import { AnimateReveal } from "@/shared/components/animate";

const Objects = () => {
  const sliderElements = Array(7).fill(
    <div className={cls.slider_item}>
      <div className="br-20 h-100 h-100 overflow-hidden relative">
        <div
          className={cls.slider_item_image}
          style={{ background: `url(${SliderImage.src}) center center/cover` }}
        ></div>
        <CiricleIcon
          iconClassName={cls.icon}
          wrapperClassName={cls.icon_wrapper}
          image={Arrow}
        />
      </div>
      <div>
        <div className="flex aic gap_15">
          <p className="text big">Нежилые помещения</p>
          <Image src={Icon} height={24} width={24} alt="slider_item-icon" />
        </div>
        <p className="text light">6 гайдов</p>
      </div>
    </div>
  );
  return (
    <section className={"container " + cls.slider}>
      <AnimateReveal>
        <p className="text big_header">Выберите Ваш объект</p>
      </AnimateReveal>
      <CarouselWrapper
        horizontalOnMobile={true}
        firstBreakPoint={1.5}
        seconBreakPoint={1.1}
        elements={sliderElements}
        slidesPerView={3}
      />
    </section>
  );
};

export default Objects;
