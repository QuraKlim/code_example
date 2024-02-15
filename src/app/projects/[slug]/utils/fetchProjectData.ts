import { GetProjectPageQueryQueryVariables } from "./../../../../data/generated/graphql";
import { client } from "@/data/client";
import { GetProjectPageQueryQuery } from "@/data/generated/graphql";
import { getProjectPageQuery } from "@/queries";
import { dateToString } from "@/shared/utils/dateToString";
import { ApolloQueryResult } from "@apollo/client";
import { redirect } from "next/navigation";

export interface IFetchDataParams {
  variables: {
    slug: string;
  };
}

const parseData = (
  projectPageData: ApolloQueryResult<GetProjectPageQueryQuery>
) => {
  const basePath = projectPageData.data.projects.data[0].attributes;
  const title = basePath.header.header;
  const jobType = basePath.job_type;
  const address = basePath.object_address;
  const imgUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL +
    basePath.big_image[0].big_image.data.attributes.url;
  const time_to_read = basePath.big_image[0].time_to_read.split(" ");

  const task = basePath.task;

  const tabs = basePath.tabs.map((i) => ({
    title: i.title,
    description: i.description,
    image: process.env.NEXT_PUBLIC_BACKEND_URL + i.image.data.attributes.url,
  }));

  const results = basePath.results;

  const startDate = dateToString(basePath.start_date);

  const endDate = dateToString(basePath.end_date);

  const images = basePath.images.data.map(
    (i) => process.env.NEXT_PUBLIC_BACKEND_URL + i.attributes.url
  );

  const breadcrumbs = basePath.breadcrumbs_title;

  const createdAt = dateToString(basePath.createdAt);

  const otherProjects = () => {
    const projectsArr = [];
    if (basePath.project_tags.data) {
      basePath.project_tags.data.forEach((a) => {
        a.attributes.projects.data.forEach((i) => {
          if (!projectsArr.find((el) => el.slug == i.attributes.slug)) {
            projectsArr.push({
              address: i.attributes.object_address,
              typeJob: i.attributes.job_type,
              task: i.attributes.task,
              image: i.attributes.big_image[0].big_image.data.attributes.url,
              slug: i.attributes.slug,
            });
          }
        });
      });
    }
    return projectsArr;
  };

  return {
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
    otherProjects: otherProjects(),
  };
};

export const fetchData = async (
  variables: GetProjectPageQueryQueryVariables
) => {
  const projectPageData = await client.query({
    query: getProjectPageQuery,
    variables: variables,
  });

  return parseData(projectPageData);
};
