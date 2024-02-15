import { graphql } from "@/data/generated";

export const getSubservicePageQuery = graphql(`
  query getSubservicePageQuery($filters: SubserviceFiltersInput) {
    subservices(filters: $filters) {
      data {
        attributes {
          slug
          createdAt
          header {
            header
          }
          page_description
          service {
            data {
              attributes {
                slug
                header {
                  header
                }
              }
            }
          }
          tabs_info {
            title
            description
            image {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
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
    }
  }
`);
