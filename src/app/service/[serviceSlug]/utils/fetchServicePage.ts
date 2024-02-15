import { client } from "@/data/client";
import { GetServicePageQueryQuery } from "@/data/generated/graphql";
import { getServicePageQuery } from "@/queries/serviceQueries";

export const parseLastProjects = (data: GetServicePageQueryQuery) => {
  const lastProjects = data.projects.data.map((i) => ({
    address: i.attributes.object_address,
    typeJob: i.attributes.job_type,
    task: i.attributes.task,
    image:
      process.env.NEXT_PUBLIC_BACKEND_URL +
      i.attributes.big_image[0].big_image.data.attributes.url,
    slug: i.attributes.slug,
  }));

  return lastProjects;
};

export const fetchData = async ({ variables }, serviceSlug: string) => {
  const servicePageData = await client.query({
    query: getServicePageQuery,
    variables: {
      ...variables,
      pagination: {
        limit: 5,
      },
      sort: "id:desc",
    },
  });

  const lastProjects = parseLastProjects(servicePageData.data);

  const basePath = servicePageData.data.services.data[0].attributes;

  const subservices = basePath.subservices.data.length
    ? basePath.subservices.data.map((i) => ({
        title: i.attributes.header.header,
        description: i.attributes.page_description,
        linkUrl: serviceSlug + "/" + i.attributes.slug,
        image:
          process.env.NEXT_PUBLIC_BACKEND_URL +
          i.attributes.big_image?.big_image.data.attributes.url,
      }))
    : null;

  const data = {
    title: basePath.header?.header,
    breadcrumbsTitle: basePath.breadcrumbs_title,
    descriptionHeader: basePath.page_description.title,
    descriptionText: basePath.page_description.description,
    descriptionImage:
      process.env.NEXT_PUBLIC_BACKEND_URL +
      basePath.page_description.image.data.attributes.url,
    subservices,
    lastProjects,
  };

  /* if (projectPageData.data.projects.data.length === 0) {
    redirect("../");
  } */

  return data;
};
