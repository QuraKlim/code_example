import PageHeader from "@/shared/components/pageHeader/pageHeader";
import cls from "./page.module.scss";
import FirstSection from "./components/fisrtSection/firstSection";
import AccordeonAlt from "@/shared/components/accordeon/accordeonAlt";
import Conference from "@/public/images/about/conference.jpg";
import AdvantagesWrapper from "@/shared/components/advantagesWrapper/advantagesWrapper";
import Objects from "./components/objects/objects";
import Tabs from "@/shared/components/tabs/tabs";
import { tabs2 } from "@/app/about/page";
import OurProjectsSection from "@/shared/components/sections/OurProjectsSection/OurProjectsSection";
import Comments from "./components/comments/comments";
import Accordeon from "@/shared/components/accordeon/accordeon";
import ContactUs from "@/shared/components/contactUs/contactUs";
import BreadcrumbsSection from "@/shared/components/sections/breadcrumbsSection/breadcrumbsSection";
import { fetchData } from "./utils/fetchServicePage";
import { AnimateReveal } from "@/shared/components/animate";

const Service = async ({ params }) => {
  const breadcrumbsArr = [
    {
      name: "Главная",
      url: "/",
    },
    {
      name: "Услуги",
      url: "/service",
    },
  ];

  const slug = params.serviceSlug;

  const data = await fetchData(
    {
      variables: {
        filters: {
          slug: {
            eq: slug,
          },
        },
      },
    },
    slug
  );

  const accordeon = [
    {
      image: Conference,
      header: "dasdsad",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptate in excepturi! Sequi est autem quos maxime laborum quae nisi nobis aut explicabo sit, deserunt dolor voluptatum rem reiciendis mollitia.",
    },
    {
      image: Conference,
      header: "strasfasdasing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptate in excepturi! Sequi est autem quos maxime laborum quae nisi nobis aut explicabo sit, deserunt dolor voluptatum rem reiciendis mollitia.",
    },
    {
      image: Conference,
      header: "strsdafasdfing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptate in excepturi! Sequi est autem quos maxime laborum quae nisi nobis aut explicabo sit, deserunt dolor voluptatum rem reiciendis mollitia.",
    },
    {
      image: Conference,
      header: "string",
      content: "string",
    },
  ];

  return (
    <main className="mt">
      <PageHeader header="Электроснабжение, Безопасность и комфорт" />
      <BreadcrumbsSection breadcrumbsArr={breadcrumbsArr} />
      <FirstSection
        header={data.descriptionHeader}
        description={data.descriptionText}
        image={data.descriptionImage}
      />
      <section className={"container " + cls.accordeon}>
        <AnimateReveal>
          <p>Что включает сфера</p>
        </AnimateReveal>
        <AccordeonAlt fields={data.subservices} />
      </section>
      <AdvantagesWrapper classname={cls.advantages} />
      <Objects />
      <section className={"container " + cls.tabs_section}>
        <Tabs
          tabs={tabs2}
          header={"Процесс сотрудничества от начала \nдо успешного результата"}
        />
      </section>
      <OurProjectsSection
        elements={data.lastProjects}
        classname={cls.our_projects}
      />
      <Comments />
      <section className={"container " + cls.accordeon_sec}>
        <Accordeon fields={accordeon} />
      </section>
      <section className={cls.contact}>
        <ContactUs />
      </section>
    </main>
  );
};

export default Service;
