import cls from "./page.module.scss";
import PageHeader from "@/shared/components/pageHeader/pageHeader";
import Form from "./components/form/form";
import Advantages from "@/shared/components/advantages/advantages";
import Arrow from "@/shared/icons/arrow.svg";
import Image from "next/image";
import GoogleMap from "./components/map/map";
import BreadcrumbsSection from "@/shared/components/sections/breadcrumbsSection/breadcrumbsSection";
import place from "@/shared/icons/place-icon.svg";
import clock from "@/shared/icons/clock-icon.svg";
import mail from "@/shared/icons/mail-icon.svg";
import phone from "@/shared/icons/phone-icon.svg";

import { Requsits } from "@/shared/components/requsits/Requsits";

const Contacts = () => {
  const breadcrumbsArr = [
    {
      name: "Главная",
      url: "/",
    },
    {
      name: "Контакты",
      url: "/contacts",
    },
  ];

  const steps = [
    {
      head: (
        <Image
          className={cls.step_icon}
          src={place}
          alt="icon"
          width={50}
          height={50}
        />
      ),
      title: "Адрес",
      text: "117246, г. Москва, Научный проезд, д. 10, помещ. 35",
    },
    {
      head: (
        <Image
          className={cls.step_icon}
          src={clock}
          alt="icon"
          width={50}
          height={50}
        />
      ),
      title: "Режим работы",
      text: "9:00 – 19:00 Пн-Пт",
    },
    {
      head: (
        <Image
          className={cls.step_icon}
          src={mail}
          alt="icon"
          width={50}
          height={50}
        />
      ),
      title: "Почта",
      text: (
        <a className={cls.link} href="mailto:info@megavolt-group.com">
          info@megavolt-group.com
          <Image className={cls.link_arrow} src={Arrow} alt="arrow" />
        </a>
      ),
    },
    {
      head: (
        <Image
          className={cls.step_icon}
          src={phone}
          alt="icon"
          width={50}
          height={50}
        />
      ),
      title: "Телефон",
      text: (
        <a className={cls.link} href="tel:+74951200108">
          +7 (495) 120-01-08
          <Image className={cls.link_arrow} src={Arrow} alt="arrow" />
        </a>
      ),
    },
  ];
  return (
    <div className="mt">
      <PageHeader header="Наши контакты" />
      <BreadcrumbsSection breadcrumbsArr={breadcrumbsArr} />
      <Form />
      <section className={"container " + cls.steps}>
        <Advantages content={steps} />
      </section>
      <Requsits />
      <div className={cls.map_wrapper}>
        <GoogleMap />
      </div>
    </div>
  );
};

export default Contacts;
