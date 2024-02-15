import { graphql } from "@/data/generated";

export const getServicePageQuery = graphql(`
  query getServicePageQuery(
    $filters: ServiceFiltersInput
    $sort: [String]
    $pagination: PaginationArg
  ) {
    services(filters: $filters) {
      data {
        attributes {
          breadcrumbs_title
          header {
            header
          }
          page_description {
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
            title
          }
          slug
          subservices {
            data {
              attributes {
                header {
                  header
                }
                slug
                page_description
                big_image {
                  big_image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    projects(sort: $sort, pagination: $pagination) {
      data {
        attributes {
          slug
          task
          job_type
          object_address
          big_image {
            big_image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`);
