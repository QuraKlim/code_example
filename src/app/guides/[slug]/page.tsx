import cls from "./page.module.scss";
import BigImage from "@/public/images/about/big_image.jpg";
import ServiceSection from "@/shared/components/sections/ServiceSection/ServiceSection";
import OurProjectsSection from "@/shared/components/sections/OurProjectsSection/OurProjectsSection";
import { fetchGuideData } from "./utils/fetchGuidePage";
import BlockManager from "@/app/blog/[article]/(components)/blockManager/BlockManager";
import PageHeader from "@/shared/components/pageHeader/pageHeader";
import BreadcrumbsSection from "@/shared/components/sections/breadcrumbsSection/breadcrumbsSection";
import ArticleInfo from "@/shared/components/articleInfo/articleInfo";
import { dateToString } from "@/shared/utils/dateToString";
import { AnimateReveal } from "@/shared/components/animate";

const Guide = async ({ params }) => {
  const slug = params.slug;
  const guide = await fetchGuideData({
    filters: {
      slug: {
        eq: slug,
      },
    },
    sort: "order:asc",
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
      name: "Руководства",
      url: "/guides",
    },
    {
      name: guide.breadctumbsTitle,
      url: "/" + slug,
    },
  ];

  return (
    <div className="mt">
      <PageHeader header={guide.header} />
      <BreadcrumbsSection breadcrumbsArr={breadcrumbsArr} />
      <ArticleInfo
        date={dateToString(guide.createdAt)}
        timeToRead={guide.timeToRead}
      />
      <section className={cls.big_image_wrap}>
        <AnimateReveal>
          <div
            style={{ background: `url(${BigImage.src}) center center/cover` }}
            className={cls.big_image}
          ></div>
        </AnimateReveal>
      </section>

      {BlockManager({ blocks: guide.components })}

      <ServiceSection />
      <OurProjectsSection elements={guide.lastProjects} />
    </div>
  );
};

export default Guide;
