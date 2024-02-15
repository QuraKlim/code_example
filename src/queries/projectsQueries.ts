import { graphql } from "@/data/generated";

export const getAllProjectsQuery = graphql(`
  query getAllProjectsQuery(
    $filters: ProjectFiltersInput
    $pagination: PaginationArg
    $sort: [String]
  ) {
    projects(filters: $filters, pagination: $pagination, sort: $sort) {
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
          job_type
          task
          object_address
          slug
        }
      }
      meta {
        pagination {
          total
        }
      }
    }
    projectTags {
      data {
        attributes {
          tag
        }
      }
    }
  }
`);

export const getProjectPageQuery = graphql(`
  query getProjectPageQuery(
    $filters: ProjectFiltersInput
    $pagination: PaginationArg
  ) {
    projects(filters: $filters) {
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
          job_type
          task
          object_address
          slug
          breadcrumbs_title
          header {
            header
          }
          end_date
          images {
            data {
              attributes {
                url
              }
            }
          }
          results
          start_date
          tabs {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            title
            description
          }
          createdAt
          project_tags {
            data {
              attributes {
                tag
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
                      slug
                      task
                      job_type
                      object_address
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
`);
