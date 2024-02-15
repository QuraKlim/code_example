import { client } from "@/data/client";
import { GetSubservicePageQueryQueryVariables } from "@/data/generated/graphql";
import { getSubservicePageQuery } from "@/queries/subserviceQueries";
import { redirect } from "next/navigation";
import { title } from "process";

export interface IFetchDataParams {
  redirectSlug: string;
}

export const fetchSubserviceData = async (
  variables: GetSubservicePageQueryQueryVariables,
  { redirectSlug }: IFetchDataParams
) => {
  const { data } = await client.query({
    query: getSubservicePageQuery,
    variables: variables,
  });

  if (data.subservices.data.length === 0) {
    redirect(`/service/${redirectSlug}`);
  }

  const tabs = data.subservices.data[0].attributes.tabs_info.map((tab) => {
    return {
      title: tab.title,
      description: tab.description,
      image: `${process.env.NEXT_PUBLIC_BACKEND_URL}${tab.image.data.attributes.url}`,
    };
  });

  return {
    header: data.subservices.data[0].attributes.header.header,
    body: {
      description: data.subservices.data[0].attributes.page_description,
      greetingImage:
        data.subservices.data[0].attributes.big_image.big_image.data.attributes
          .url,
      tabs: tabs,
    },
    breadcrumbs: {
      url: data.subservices.data[0].attributes.service.data.attributes.slug,
      title:
        data.subservices.data[0].attributes.service.data.attributes.header.header.split(
          ","
        )[0],
    },
  };
};
