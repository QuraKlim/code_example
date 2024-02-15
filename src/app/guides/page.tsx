import styles from "./page.module.scss";
import BreadCrumbs from "@/shared/components/breadcrumbs/BreadCrumbs";
import {
  ISingleServiceProps,
  SingleService,
} from "./(components)/SingleService/SingleService";
import { AnimateReveal } from "@/shared/components/animate";

const guides: ISingleServiceProps[] = [
  {
    head: "01. Электроснабжение",
    body: "Выберите, интересующие Вас, категории статей по электроснабжению",
    slug: "electricity-supply",
  },
  {
    head: "02. Водоснабжение",
    body: "Выберите, интересующие Вас, категории статей по водоснабжению",
    slug: "water-supply",
  },
  {
    head: "03. Теплоснабжение",
    body: "Выберите, интересующие Вас, категории статей по водоотведению",
    slug: "heat-supply",
  },
];

const breadcrumbsArr = [
  {
    name: "Главная",
    url: "/",
  },
  {
    name: "Руководства",
    url: "/guide",
  },
];

const Guide = () => {
  return (
    <main className="mt" style={{ overflowX: "clip" }}>
      <section className={styles.header}>
        <AnimateReveal>
          <div className={styles.header_wrap}>
            <h1>Руководства</h1>
            <BreadCrumbs breadcrumbsArr={breadcrumbsArr} />
          </div>
        </AnimateReveal>
      </section>
      {guides.map((el, index) => (
        <SingleService
          key={index}
          head={el.head}
          body={el.body}
          slug={el.slug}
        />
      ))}
    </main>
  );
};

export default Guide;
