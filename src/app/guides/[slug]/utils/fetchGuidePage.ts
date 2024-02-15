import { parseLastProjects } from "@/app/service/[serviceSlug]/utils/fetchServicePage";
import { client } from "@/data/client";
import {
  GetGuidePageQueryQuery,
  GetGuidePageQueryQueryVariables,
} from "@/data/generated/graphql";
import { getGuidePageQuery } from "@/queries/gudesQueries";

export const parseGuideData = (guideData: GetGuidePageQueryQuery) => {
  const basePath = guideData.guides.data[0].attributes;
  const guide = {
    header: basePath.header.header,
    timeToRead: basePath.big_image.time_to_read,
    slug: basePath.slug,
    breadctumbsTitle: basePath.breadcrumbs_title,
    image: process.env.NEXT_PUBLIC_BACKEND_URL + basePath.big_image,
    components: basePath.components,
    createdAt: basePath.createdAt,
    lastProjects: parseLastProjects(guideData),
  };
  return guide;
};

export const fetchGuideData = async (
  variables: GetGuidePageQueryQueryVariables
) => {
  const guidePageData = await client.query({
    query: getGuidePageQuery,
    variables: variables,
  });

  return parseGuideData(guidePageData.data);
};
