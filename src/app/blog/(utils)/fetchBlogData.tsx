import { client } from "@/data/client";
import { GetAllArticlesQueryQuery } from "@/data/generated/graphql";
import { getAllArticlesQuery } from "@/queries";
import SliderElement from "@/shared/components/sliderElement/SliderElement";
import { ApolloQueryResult } from "@apollo/client";

export const parseArticleData = (articlePageData: GetAllArticlesQueryQuery) => {
  const articlesArr = articlePageData.articles.data.map((el) => {
    let str = new Date(el.attributes.createdAt).toLocaleString("ru", {
      month: "long",
      day: "numeric",
    });

    const str2 = str.split(" ");
    str2[1] = str2[1].charAt(0).toUpperCase() + str2[1].substring(1);
    str = str2.join(" ");

    return (
      <SliderElement
        articleTitle={el.attributes.header.header}
        src={
          process.env.NEXT_PUBLIC_BACKEND_URL +
          el.attributes.big_image.big_image.data.attributes.url
        }
        date={str}
        href={`/blog/${el.attributes.slug}`}
      />
    );
  });
  const tags = articlePageData.articleTags.data.map((i) => i.attributes.tag);
  const projectsTotal = articlePageData.articles.meta.pagination.total;
  return { articlesArr, tags, projectsTotal };
};

export const fetchBlogData = async () => {
  const articlePageData = await client.query({
    query: getAllArticlesQuery,
  });

  const arr = articlePageData.data.articles.data.map((el) => {
    let str = new Date(el.attributes.createdAt).toLocaleString("ru", {
      month: "long",
      day: "numeric",
    });

    const str2 = str.split(" ");
    str2[1] = str2[1].charAt(0).toUpperCase() + str2[1].substring(1);
    str = str2.join(" ");

    return {
      articleTitle: el.attributes.header.header,
      src:
        process.env.NEXT_PUBLIC_BACKEND_URL +
        el.attributes.big_image.big_image.data.attributes.url,
      date: str,
      href: el.attributes.slug,
    };
  });
  return arr;
};
