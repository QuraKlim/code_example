import { graphql } from "@/data/generated";

export const getArticlePageQuery = graphql(`
  query getArticlePageQuery($slug: String!) {
    articles(filters: { slug: { eqi: $slug } }) {
      data {
        attributes {
          breadcrumbs_title
          createdAt
          header {
            header
          }
          big_image {
            time_to_read
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
          components {
            __typename
            ... on ComponentArticleSectionHeaderWithTexts {
              id
              header
              Descr
            }
            ... on ComponentArticleSteps {
              id
              steps {
                id
                title
                description
              }
            }
            ... on ComponentSharedTitleDescrImage {
              id
              title
              description
              image {
                data {
                  attributes {
                    height
                    url
                    width
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

export const getAllArticlesQuery = graphql(`
  query getAllArticlesQuery(
    $filters: ArticleFiltersInput
    $pagination: PaginationArg
    $sort: [String]
  ) {
    articles(filters: $filters, pagination: $pagination, sort: $sort) {
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
    articleTags {
      data {
        attributes {
          tag
        }
      }
    }
  }
`);
