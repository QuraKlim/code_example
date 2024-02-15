import { client } from "@/data/client";
import { GetArticlePageQueryQuery } from "@/data/generated/graphql";
import { getArticlePageQuery } from "@/queries";
import { ApolloQueryResult } from "@apollo/client";
import { redirect } from "next/navigation";

export interface IFetchDataParams {
  variables: {
    slug: string;
  };
}

const parseData = (
  articlePageData: ApolloQueryResult<GetArticlePageQueryQuery>
) => {
  const title = articlePageData.data.articles.data[0].attributes.header.header;
  const imgUrl =
    articlePageData.data.articles.data[0].attributes.big_image.big_image.data
      .attributes.url;
  const time_to_read =
    articlePageData.data.articles.data[0].attributes.big_image.time_to_read.split(
      " "
    );

  let date = new Date(
    articlePageData.data.articles.data[0].attributes.createdAt
  ).toLocaleString("ru", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const str = date.split(" ");
  str.pop();
  str[1] = str[1].charAt(0).toUpperCase() + str[1].substring(1) + ",";
  date = str.join(" ");

  const breadcrumbs =
    articlePageData.data.articles.data[0].attributes.breadcrumbs_title;
  const components =
    articlePageData.data.articles.data[0].attributes.components;
  return { title, imgUrl, breadcrumbs, components, time_to_read, date };
};

export const fetchData = async ({ variables }: IFetchDataParams) => {
  const articlePageData = await client.query({
    query: getArticlePageQuery,
    variables: variables,
  });

  if (articlePageData.data.articles.data.length === 0) {
    redirect("/blog");
  }

  return parseData(articlePageData);
};
