import styles from "./page.module.scss";
import Image from "next/image";
import BlockManager from "./(components)/blockManager/BlockManager";
import ContactUs from "@/shared/components/contactUs/contactUs";
import timerIcon from "@/shared/icons/timer.svg";
import clsx from "clsx";
import { fetchData } from "@/app/blog/[article]/(utils)/fetchData";
import BreadCrumbs from "@/shared/components/breadcrumbs/BreadCrumbs";
import { AnimateReveal } from "@/shared/components/animate";

const Article = async ({ params }) => {
  const slug: string = params.article;

  const { title, breadcrumbs, imgUrl, components, time_to_read, date } =
    await fetchData({
      variables: { slug: slug },
    });

  const breadcrumbsArr = [
    { name: "Главная", url: "/" },
    { name: "Блог", url: "/blog" },
    {
      name: breadcrumbs,
      url: `/blog/${params.article}`,
    },
  ];

  return (
    <main className="mt">
      <section className={styles.article_section}>
        <AnimateReveal>
          <div className={styles.text_wrap}>
            <h1>{title}</h1>
            <BreadCrumbs breadcrumbsArr={breadcrumbsArr} />
          </div>
        </AnimateReveal>
      </section>
      <AnimateReveal>
        <section className={styles.about_article_section}>
          <div className={styles.article_data}>
            <p className="text big">{date}</p>
            <div className={styles.data_text}>
              <p className="text regular">
                {time_to_read.map((el, index) =>
                  index === 0 ? (
                    <span key={index} className="text regular light">
                      {el + " "}
                    </span>
                  ) : (
                    el + " "
                  )
                )}
              </p>
              <div className={styles.icon_wrap}>
                <Image src={timerIcon} fill alt="timer-icon" />
              </div>
            </div>
          </div>
          <div className={styles.article_image}>
            <div className={styles.img_wrapper}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imgUrl}`}
                fill
                alt="article-image"
              />
            </div>
          </div>
        </section>
      </AnimateReveal>
      <BlockManager blocks={components} />
      <section className={clsx("container", styles.contact_us)}>
        <ContactUs />
      </section>
    </main>
  );
};

export default Article;
