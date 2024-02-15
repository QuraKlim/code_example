import styles from "./page.module.scss";
import OurProjectsSection from "@/shared/components/sections/OurProjectsSection/OurProjectsSection";
import CarouselSlider from "@/shared/components/carouselSlider/CarouseSlider";
import sliderImage from "@/public/images/subservice-page/slider_img.webp";
import SliderElement from "./(components)/sliderElement/SliderElement";
import buildingIcon from "@/shared/icons/building.svg";
import carIcon from "@/shared/icons/carIcon.svg";
import treeIcon from "@/shared/icons/treeIcon.svg";
import ServiceSection from "@/shared/components/sections/ServiceSection/ServiceSection";
import Comments from "./(components)/comments/Comments";
import img1 from "@/public/images/subservice-page/1.png";
import img2 from "@/public/images/subservice-page/2.png";
import img3 from "@/public/images/subservice-page/3.png";
import ContactUs from "@/shared/components/contactUs/contactUs";
import Accordeon from "@/shared/components/accordeon/accordeon";
import Tabs from "@/shared/components/tabs/tabs";

import { GreetingSection } from "./(components)/greetingSection/GreetingSection";
import HeaderSection from "./(components)/headerSection/HeaderSection";
import CommentsHead from "./(components)/commentsSection/CommentsHead";
import { fetchSubserviceData } from "./(utils)/fetchSubserviceData";
import { AnimateReveal } from "@/shared/components/animate";

const comments = [
  {
    head: {
      icon: img1,
      name: "Иван Иванович",
      company: "ООО “Название Организации”",
    },
    body: {
      text: "Очень доволен работой «Первой энергетической компании». Специалисты компании провели проект по увеличению электрической мощности на высоком уровне.",
      date: "18 Декабря, 2023",
    },
  },
  {
    head: {
      icon: img2,
      name: "Григорий Николаевич",
      company: "ООО “Название Организации”",
    },
    body: {
      text: "Была необходимость в установке опор освещения определённых характеристик, которые производит только один завод в стране. Большая трудность в сроках поставки данных опор. «Первая энергетическая компания» уложилась в сроки, несмотря на все трудности, сделала качественно, не выходя за рамки согласованной сметы.",
      date: "20 Ноября, 2023",
    },
  },
  {
    head: {
      icon: img3,
      name: "Василий Александрович",
      company: "ООО “Название Организации”",
    },
    body: {
      text: "Выражаю огромную благодарность ООО «ПЭК» за помощь в разрешении проблемы со стоимостью выданных ТУ. «Первая энергетическая компания» выполнила работу в кратчайшие сроки и помогла сэкономить мне большую сумму денег.",
      date: "22 октября, 2023",
    },
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

const sliderEls = [
  <SliderElement
    img={sliderImage.src}
    title="Нежилые помещения"
    iconIMage={buildingIcon}
  />,
  <SliderElement img={sliderImage.src} title="Квартиры" iconIMage={carIcon} />,
  <SliderElement
    img={sliderImage.src}
    title="Земельные участки"
    iconIMage={treeIcon}
  />,
  <SliderElement img={sliderImage.src} title="Квартиры" iconIMage={carIcon} />,
  <SliderElement
    img={sliderImage.src}
    title="Земельные участки"
    iconIMage={treeIcon}
  />,
];

const Subservices = async ({ params }) => {
  const slug: string = params.subserviceSlug;
  const serviceSlug: string = params.serviceSlug;

  const { header, body, breadcrumbs } = await fetchSubserviceData(
    {
      filters: {
        service: {
          slug: {
            eqi: serviceSlug,
          },
        },
        slug: {
          containsi: slug,
        },
      },
    },
    { redirectSlug: serviceSlug }
  );

  return (
    <main className="mt" style={{ overflowX: "clip" }}>
      <section className={styles.container_header}>
        <HeaderSection
          breadcrumbs={{
            urlCur: slug,
            urlPrev: breadcrumbs.url,
            titlePrev: breadcrumbs.title,
          }}
          headerTitle={header}
        />
      </section>
      <section>
        <GreetingSection
          description={body.description}
          image={`${process.env.NEXT_PUBLIC_BACKEND_URL}${body.greetingImage}`}
        />
      </section>
      <section className={styles.container_tabs_1}>
        <Tabs
          tabs={body.tabs}
          header={"Процесс сотрудничества от начала \nдо успешного результата"}
        />
      </section>
      <section
        style={{ overflowX: "clip" }}
        className={styles.container_slider}
      >
        <AnimateReveal>
          <div className={styles.slider_text}>
            <p className="text big_header">Выберите ваш объект</p>
          </div>
        </AnimateReveal>
        <div className={styles.slider}>
          <CarouselSlider
            className={styles.carousel}
            sliderElements={sliderEls}
            slidesPerView={3.15}
            firstBreakPoint={2}
            seconBreakPoint={1.05}
          />
        </div>
      </section>
      <section className={styles.container_tabs_2}>
        <Tabs
          tabs={body.tabs}
          header="История успеха: путь компании от идеи до мировой славы"
        />
      </section>
      <OurProjectsSection />
      <section className={styles.container_comments}>
        <CommentsHead />
        <Comments comments={comments} />
      </section>
      <ServiceSection />
      <section className={styles.container_accrodeon}>
        <Accordeon fields={accordeon} />
      </section>
      <section className={styles.container_lg}>
        <ContactUs />
      </section>
    </main>
  );
};

export default Subservices;
