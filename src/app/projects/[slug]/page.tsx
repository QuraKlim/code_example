import PageHeader from "@/shared/components/pageHeader/pageHeader";
import ObjectInfo from "./components/objectInfo/objectInfo";
import cls from "./page.module.scss";
import Task from "./components/task/task";
import Tabs from "@/shared/components/tabs/tabs";
import Results from "./components/results/results";
import Accordeon from "@/shared/components/accordeon/accordeon";
import ContactUs from "@/shared/components/contactUs/contactUs";
import Eye from "@/shared/icons/eye.svg";
import City from "@/public/images/projects/city.jpg";
import CiricleIcon from "@/shared/components/ciricleIcon/ciricleIcon";
import { CarouselWrapper } from "@/shared/components/sections/OurProjectsSection/OurProjectsSection";
import AlikeProjects from "../components/alikeProjects/alikeProjects";
import { fetchData } from "./utils/fetchProjectData";
import BreadcrumbsSection from "@/shared/components/sections/breadcrumbsSection/breadcrumbsSection";
import { AnimateReveal } from "@/shared/components/animate";

const Project = async ({ params }) => {
  const slug = params.slug;

  const {
    title,
    imgUrl,
    breadcrumbs,
    time_to_read,
    jobType,
    address,
    task,
    tabs,
    results,
    startDate,
    endDate,
    images,
    createdAt,
    otherProjects,
  } = await fetchData({
    filters: {
      slug: {
        eq: slug,
      },
    },
    pagination: {
      limit: 3,
    },
  });

  const breadcrumbsArr = [
    {
      name: "Главная",
      url: "/",
    },
    {
      name: "Объекты",
      url: "/projects",
    },
    {
      name: breadcrumbs,
      url: "/" + slug,
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
    <section className="mt">
      <PageHeader header={title} />

      <BreadcrumbsSection breadcrumbsArr={breadcrumbsArr} />

      <ObjectInfo date={createdAt} address={address} jobType={jobType} />

      <section className={cls.big_image}>
        <AnimateReveal>
          <div
            className="w-100 h-100 br-20"
            style={{ background: `url(${imgUrl}) center center/cover` }}
          ></div>
        </AnimateReveal>
      </section>

      <Task text={task} />

      <section className={"container " + cls.tabs}>
        <Tabs tabs={tabs} header="Этапы работы" isBigHeader={true} />
      </section>

      <Results text={results} startDate={startDate} endDate={endDate} />

      <section className={cls.photos}>
        <CarouselWrapper
          horizontalOnMobile={true}
          slidesPerView={1.15}
          seconBreakPoint={1.5}
          elements={images.map((i) => (
            <div className={cls.slider_elem}>
              <div
                className={cls.slider_image}
                style={{
                  background: `url(${i}) center center/cover no-repeat`,
                }}
              ></div>
              <CiricleIcon
                image={Eye}
                wrapperClassName={cls.icon_wrapper + " " + cls.eye}
                iconClassName={cls.icon}
              />
            </div>
          ))}
        />
      </section>

      <section className={cls.other_projects}>
        <AlikeProjects projects={otherProjects} />
      </section>

      <section className={"container " + cls.accordeon}>
        <AnimateReveal>
          <p>Часто задаваемые вопросы</p>
        </AnimateReveal>
        <Accordeon fields={accordeon} />
      </section>

      <section className={cls.contact_section}>
        <ContactUs />
      </section>
    </section>
  );
};

export default Project;
