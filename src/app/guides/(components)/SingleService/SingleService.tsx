"use client";

import React from "react";
import styles from "./SingleService.module.scss";
import { FilterCategories } from "@/app/blog/(components)/filterCategories/FilterCategories";
import CarouselSlider from "@/shared/components/carouselSlider/CarouseSlider";
import SliderElementSkeleton from "@/shared/components/sliderElement/sliderElementSkeleton/SliderElementSkeleton";
import { useQuery } from "@apollo/client";
import { getGuidesPageQuery } from "@/queries/gudesQueries";
import parseGuidesData from "../../(utils)/parseGuidesData";
import { client } from "@/data/client";
import EmptyButton from "@/shared/components/emptyButton/emptyButton";
import { AnimateReveal } from "@/shared/components/animate";

export interface ISingleServiceProps {
  head: string;
  body: string;
  slug: string;
}

const pageSize = 3;

export const SingleService = ({ head, body, slug }: ISingleServiceProps) => {
  const [guides, setGuides] = React.useState([]);
  const guidesSkeletons = Array(3).fill(<SliderElementSkeleton />);
  const [filters, setFilters] = React.useState<string[]>([]);
  const [choosenFilters, setChoosenFilters] = React.useState<string[] | null>(
    null
  );
  const [fetchMoreLoading, setFetchMoreLoading] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth <= 435);
  }, []);

  const { fetchMore, refetch, loading } = useQuery(getGuidesPageQuery, {
    variables: {
      pagination: isMobile ? { pageSize: pageSize, page: 1 } : {},
      filters: {
        service: {
          slug: {
            eqi: slug,
          },
        },
      },
    },
    onCompleted: (data) => {
      const guides = parseGuidesData(data);
      setGuides((prev) => [...prev, ...guides.guidesArr]);
      setFilters(guides.tags);
      setTotal(data.guides.meta.pagination.total);
    },
    client: client,
  });

  const loadMore = () => {
    setFetchMoreLoading(true);
    fetchMore({
      variables: {
        filters:
          choosenFilters && choosenFilters.length
            ? {
                service: {
                  slug: {
                    eqi: slug,
                  },
                },
                article_tags: {
                  tag: {
                    in: choosenFilters,
                  },
                },
              }
            : {
                service: {
                  slug: {
                    eqi: slug,
                  },
                },
              },
        pagination: {
          pageSize: pageSize,
          page: Math.floor(guides.length / pageSize) + 1,
        },
      },
      updateQuery: (prev, newData) => {
        const newGuides = parseGuidesData(newData.fetchMoreResult);
        setGuides((prev) => [...prev, ...newGuides.guidesArr]);
        setFetchMoreLoading(false);

        setTotal(newData.fetchMoreResult.guides.meta.pagination.total);
        return newData.fetchMoreResult;
      },
    });
  };

  const onFilterChange = () => {
    refetch({
      filters: choosenFilters?.length
        ? {
            service: {
              slug: {
                eqi: slug,
              },
            },
            guide_tags: {
              tag: {
                in: choosenFilters,
              },
            },
          }
        : {
            service: {
              slug: {
                eqi: slug,
              },
            },
          },
      pagination: {
        limit: isMobile
          ? guides.length < pageSize
            ? pageSize
            : guides.length
          : undefined,
      },
    }).then((resp) => {
      const filtredGuides = parseGuidesData(resp.data);
      setGuides((prev) => [...filtredGuides.guidesArr]);
      setTotal(resp.data.guides.meta.pagination.total);
    });
  };

  React.useEffect(() => {
    if (choosenFilters) {
      onFilterChange();
    }
  }, [choosenFilters]);

  return (
    <section className={styles.slider_section}>
      <AnimateReveal>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <p className="text regular">{head}</p>
            <p className="text regular light">{body}</p>
          </div>
          <FilterCategories
            setPickedParametrs={setChoosenFilters}
            filters={filters}
          />
        </div>
      </AnimateReveal>
      <div className={styles.slider}>
        <CarouselSlider
          className={styles.carousel}
          slidesPerView={3}
          sliderElements={guides.length ? guides : guidesSkeletons}
        />
      </div>
      <div className={styles.vertical}>
        {guides.length
          ? guides.map((el, index) => <div key={index}>{el}</div>)
          : guidesSkeletons.map((el, i) => (
              <div style={{ width: "100%" }} key={i}>
                {el}
              </div>
            ))}
        <div className={styles.btn_wrap}>
          {guides.length < total ? (
            <EmptyButton
              onClick={loadMore}
              disabled={fetchMoreLoading || loading}
              text={
                fetchMoreLoading || loading ? "Загрузка..." : "Загрузить ещё"
              }
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};
