import styles from "./page.module.scss";
import AboutUsSection from "../shared/components/sections/AboutUsSection/AboutUsSection";
import GreetingSection from "../shared/components/sections/GreetingSection/GreetingSection";
import ServiceSection from "../shared/components/sections/ServiceSection/ServiceSection";
import OurProjectsSection from "../shared/components/sections/OurProjectsSection/OurProjectsSection";
import Electrician from "@/public/images/about/electrician.webp";
import Image from "next/image";

import Sign from "@/public/images/about/sign.webp";
import Accordeon from "@/shared/components/accordeon/accordeon";
import ContactUs from "@/shared/components/contactUs/contactUs";

import Tabs from "@/shared/components/tabs/tabs";
import clsx from "clsx";
import SubAboutUs from "@/shared/components/sections/SubAboutUs/SubAboutUs";
import Advantages from "@/shared/components/advantages/advantages";
import GoogleMap from "./contacts/components/map/map";
import Arrow from "@/shared/icons/arrow.svg";
import { Requsits } from "@/shared/components/requsits/Requsits";

import place from "@/shared/icons/place-icon.svg";
import clock from "@/shared/icons/clock-icon.svg";
import mail from "@/shared/icons/mail-icon.svg";
import phone from "@/shared/icons/phone-icon.svg";

const tabs2 = [
  {
    image: Sign,
    title: "Звонок и составление документов",
    description:
      "Lorem ipsum dolor sit amet consectetur. Congue nunc urna dui tempor mi tempus. Amet velit lacinia turpis id lectus iaculis tellus non. Mauris interdum nisl ullamcorper ipsum proin sed commodo pellentesque. Molestie ac in nibh nam.",
  },
  {
    image: Electrician,
    title: "Оценка",
    description:
      "1Lorem ipsum dolor sit amet consectetur. Congue nunc urna dui tempor mi tempus. Amet velit lacinia turpis id lectus iaculis tellus non. Mauris interdum nisl ullamcorper ipsum proin sed commodo pellentesque. Molestie ac in nibh nam.",
  },
  {
    image: Sign,
    title: "Коммерческое предложение",
    description:
      "2Lorem ipsum dolor sit amet consectetur. Congue nunc urna dui tempor mi tempus. Amet velit lacinia turpis id lectus iaculis tellus non. Mauris interdum nisl ullamcorper ipsum proin sed commodo pellentesque. Molestie ac in nibh nam.",
  },
  {
    image: Electrician,
    title: "Контракт",
    description:
      "3Lorem ipsum dolor sit amet consectetur. Congue nunc urna dui tempor mi tempus. Amet velit lacinia turpis id lectus iaculis tellus non. Mauris interdum nisl ullamcorper ipsum proin sed commodo pellentesque. Molestie ac in nibh nam.",
  },
  {
    image: Sign,
    title: "Выполнение договорных отношений",
    description:
      "3Lorem ipsum dolor sit amet consectetur. Congue nunc urna dui tempor mi tempus. Amet velit lacinia turpis id lectus iaculis tellus non. Mauris interdum nisl ullamcorper ipsum proin sed commodo pellentesque. Molestie ac in nibh nam.",
  },
  {
    image: Electrician,
    title: "Результат",
    description:
      "3Lorem ipsum dolor sit amet consectetur. Congue nunc urna dui tempor mi tempus. Amet velit lacinia turpis id lectus iaculis tellus non. Mauris interdum nisl ullamcorper ipsum proin sed commodo pellentesque. Molestie ac in nibh nam.",
  },
];

const accordeon = [
  {
    header: "dasdsad",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptate in excepturi! Sequi est autem quos maxime laborum quae nisi nobis aut explicabo sit, deserunt dolor voluptatum rem reiciendis mollitia.",
  },
  {
    header: "strasfasdasing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptate in excepturi! Sequi est autem quos maxime laborum quae nisi nobis aut explicabo sit, deserunt dolor voluptatum rem reiciendis mollitia.",
  },
  {
    header: "strsdafasdfing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptate in excepturi! Sequi est autem quos maxime laborum quae nisi nobis aut explicabo sit, deserunt dolor voluptatum rem reiciendis mollitia.",
  },
  {
    header: "string",
    content: "string",
  },
];

const steps = [
  {
    head: (
      <Image
        className={styles.step_icon}
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
        className={styles.step_icon}
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
        className={styles.step_icon}
        src={mail}
        alt="icon"
        width={50}
        height={50}
      />
    ),
    title: "Почта",
    text: (
      <a className={styles.link} href="mailto:info@megavolt-group.com">
        info@megavolt-group.com
        <Image className={styles.link_arrow} src={Arrow} alt="arrow" />
      </a>
    ),
  },
  {
    head: (
      <Image
        className={styles.step_icon}
        src={phone}
        alt="icon"
        width={50}
        height={50}
      />
    ),
    title: "Телефон",
    text: (
      <a className={styles.link} href="tel:+74951200108">
        +7 (495) 120-01-08
        <Image className={styles.link_arrow} src={Arrow} alt="arrow" />
      </a>
    ),
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <GreetingSection />
      <ServiceSection />
      <OurProjectsSection />
      <AboutUsSection />
      <SubAboutUs />
      <section className={clsx("container", styles.tabs_section)}>
        <Tabs
          tabs={tabs2}
          header={"Процесс сотрудничества от начала \nдо успешного результата"}
        />
      </section>
      <section className={clsx("container", styles.faq_section)}>
        <Accordeon fields={accordeon} />
      </section>
      <section className={"container " + styles.steps}>
        <Advantages content={steps} />
      </section>
      <Requsits />
      <div className={styles.map_wrapper}>
        <GoogleMap />
      </div>
    </main>
  );
}
