import { graphql } from "@/data/generated";

export const getGuidePageQuery = graphql(`
  query getGuidePageQuery(
    $filters: GuideFiltersInput
    $sort: [String]
    $pagination: PaginationArg
  ) {
    guides(filters: $filters) {
      data {
        attributes {
          big_image {
            big_image {
              data {
                attributes {
                  url
                }
              }
            }
            time_to_read
          }
          breadcrumbs_title
          components {
            ... on ComponentArticleSectionHeaderWithTexts {
              Descr
              header
            }
            ... on ComponentArticleSteps {
              steps {
                description
                title
              }
            }
            ... on ComponentGuideTable {
              data(sort: $sort) {
                column_1
                column_2
                order
              }
              column_2_name
              column_1_name
            }
            ... on ComponentSharedTitleDescrImage {
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
          }
          slug
          header {
            header
          }
          createdAt
        }
      }
    }
    projects(pagination: $pagination) {
      data {
        attributes {
          big_image {
            big_image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          task
          object_address
          job_type
          slug
        }
      }
    }
  }
`);

export const getGuidesPageQuery = graphql(`
  query getGuidesPageQuery(
    $filters: GuideFiltersInput
    $sort: [String]
    $pagination: PaginationArg
  ) {
    guides(filters: $filters, pagination: $pagination, sort: $sort) {
      data {
        attributes {
          slug
          createdAt
          header {
            header
          }
          big_image {
            big_image {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
        }
      }
    }
    guideTags {
      data {
        attributes {
          tag
        }
      }
    }
  }
`);
