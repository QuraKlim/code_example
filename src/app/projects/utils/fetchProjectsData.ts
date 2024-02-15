import {
  GetAllProjectsQueryQuery,
  GetAllProjectsQueryQueryVariables,
} from "@/data/generated/graphql";
import { client } from "@/data/client";
import { getAllProjectsQuery } from "@/queries";

export const parseData = (projects: GetAllProjectsQueryQuery) => {
  const data = projects.projects.data.map((i) => ({
    address: i.attributes.object_address,
    typeJob: i.attributes.job_type,
    task: i.attributes.task,
    image: i.attributes.big_image[0].big_image.data.attributes.url,
    slug: i.attributes.slug,
  }));
  const tags = projects.projectTags.data.map((i) => i.attributes.tag);
  const projectsTotal = projects.projects.meta.pagination.total;
  return { data, tags, projectsTotal };
};

export const fetchProjectsData = async (
  variables: GetAllProjectsQueryQueryVariables
) => {
  const projectPageData = await client.query({
    query: getAllProjectsQuery,
    variables,
  });

  return parseData(projectPageData.data);
};
