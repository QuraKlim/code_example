import cls from "./page.module.scss";
import Electrician from "@/public/images/about/electrician.jpg";
import Advantages from "@/shared/components/advantages/advantages";
import guard from "@/shared/icons/guard.svg";
import key from "@/shared/icons/key.svg";
import reward from "@/shared/icons/reward.svg";
import page from "@/shared/icons/page.svg";
import CiricleIcon from "@/shared/components/ciricleIcon/ciricleIcon";
import Tabs from "@/shared/components/tabs/tabs";
import Sign from "@/public/images/about/sign.jpg";
import Accordeon from "@/shared/components/accordeon/accordeon";
import ContactUs from "@/shared/components/contactUs/contactUs";
import PageHeader from "@/shared/components/pageHeader/pageHeader";
import Video from "@/shared/components/video/video";
import VideoImage from "@/public/images/about/video.webp";
import VideoCursor from "@/shared/icons/play.svg";
import AboutSection from "./components/aboutSection/aboutSection";
import Statistic from "./components/statisctis/statistic";
import Partners from "./components/partners/partners";
import Modal from "@/shared/components/modal/modal";
import BreadcrumbsSection from "@/shared/components/sections/breadcrumbsSection/breadcrumbsSection";
import SubAboutUs from "@/shared/components/sections/SubAboutUs/SubAboutUs";
import AboutUsSection, {
  CertificatesWithClients,
} from "@/shared/components/sections/AboutUsSection/AboutUsSection";
import clsx from "clsx";
import { AnimateReveal } from "@/shared/components/animate";

export const tabs2 = [
  {
    image: Sign.src,
    title: "Начало было положено. 2010 год",
    description:
      "Lorem ipsum dolor sit amet consectetur. Congue nunc urna dui tempor mi tempus. Amet velit lacinia turpis id lectus iaculis tellus non. Mauris interdum nisl ullamcorper ipsum proin sed commodo pellentesque. Molestie ac in nibh nam.",
  },
  {
    image: Electrician.src,
    title: "2015",
    description:
      "1Lorem ipsum dolor sit amet consectetur. Congue nunc urna dui tempor mi tempus. Amet velit lacinia turpis id lectus iaculis tellus non. Mauris interdum nisl ullamcorper ipsum proin sed commodo pellentesque. Molestie ac in nibh nam.",
  },
  {
    image: Sign.src,
    title: "2018",
    description:
      "2Lorem ipsum dolor sit amet consectetur. Congue nunc urna dui tempor mi tempus. Amet velit lacinia turpis id lectus iaculis tellus non. Mauris interdum nisl ullamcorper ipsum proin sed commodo pellentesque. Molestie ac in nibh nam.",
  },
  {
    image: Electrician.src,
    title: "2020",
    description:
      "3Lorem ipsum dolor sit amet consectetur. Congue nunc urna dui tempor mi tempus. Amet velit lacinia turpis id lectus iaculis tellus non. Mauris interdum nisl ullamcorper ipsum proin sed commodo pellentesque. Molestie ac in nibh nam.",
  },
  {
    image: Sign.src,
    title: "2023",
    description:
      "2Lorem ipsum dolor sit amet consectetur. Congue nunc urna dui tempor mi tempus. Amet velit lacinia turpis id lectus iaculis tellus non. Mauris interdum nisl ullamcorper ipsum proin sed commodo pellentesque. Molestie ac in nibh nam.",
  },
];

const About = () => {
  const breadcrumbsArr = [
    {
      name: "Главная",
      url: "/",
    },
    {
      name: "О компании",
      url: "/about",
    },
  ];
  const tabs = [
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

  const advantages = [
    {
      head: (
        <CiricleIcon
          image={key}
          wrapperClassName={cls.icon_wrapper}
          iconClassName={cls.icon}
        />
      ),
      title: "Работа «под ключ»",
      text: "Все наши клиенты получают бесплатную пожизненную техническую и юридическую поддержку",
    },
    {
      head: (
        <CiricleIcon
          wrapperClassName={cls.icon_wrapper}
          iconClassName={cls.icon}
          image={guard}
        />
      ),
      title: "Безопасно и законно",
      text: "Соблюдаем технику безопасности и регламенты ГОСТов, СНИПов и ПУЭ",
    },
    {
      head: (
        <CiricleIcon
          wrapperClassName={cls.icon_wrapper}
          iconClassName={cls.icon}
          image={page}
        />
      ),
      title: "Надежно и прозрачно",
      text: "Работаем по договору с фиксированием цены, которая не изменится в процессе работы",
    },
    {
      head: (
        <CiricleIcon
          wrapperClassName={cls.icon_wrapper}
          iconClassName={cls.icon}
          image={reward}
        />
      ),
      title: "Опытная команда",
      text: "Все мастера выходцы из электросетевых компаний, с техническим образованием и опытом работы более 10 лет",
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

  return (
    <div className="mt">
      <PageHeader header="Мегавольт - инженерный прорыв" />

      <BreadcrumbsSection breadcrumbsArr={breadcrumbsArr} />

      <div className={cls.video}>
        <AnimateReveal>
          <Video image={VideoImage} cursor={VideoCursor} />
        </AnimateReveal>
      </div>

      <AboutSection />

      <section className={"container " + cls.advantages_section}>
        <Advantages content={advantages} />
      </section>

      <section className={"container " + cls.tabs_section}>
        <Tabs
          tabs={tabs2}
          header={"История успеха: путь компании \nот идеи до мировой славы"}
        />
      </section>

      <Statistic />

      <section className={clsx("container", cls.certificates_clients)}>
        <CertificatesWithClients />
      </section>

      {/* <Partners /> */}
      <SubAboutUs />
      <section className={"container " + cls.tabs_section_sec}>
        <Tabs
          tabs={tabs}
          header={"Процесс сотрудничества от начала \nдо успешного результата"}
        />
      </section>
      <section className={"container " + cls.accordeon}>
        <Accordeon fields={accordeon} />
      </section>
      <section className={"container " + cls.contact}>
        <ContactUs />
      </section>
    </div>
  );
};

export default About;
