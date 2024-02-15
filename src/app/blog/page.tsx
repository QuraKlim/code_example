"use client";
import styles from "./page.module.scss";
import CarouselSlider from "@/shared/components/carouselSlider/CarouseSlider";
import SliderElement from "@/shared/components/sliderElement/SliderElement";
import { FilterCategories } from "./(components)/filterCategories/FilterCategories";
import Link from "next/link";
import IconComponent from "@/shared/components/iconComponent/IconComponent";
import btnIcon from "@/shared/icons/gray-arrow-small.svg";
import BreadCrumbs from "@/shared/components/breadcrumbs/BreadCrumbs";
import { useEffect, useState } from "react";
import useFetchBlogData from "./(hooks)/useFetchBlogData";
import { getAllArticlesQuery } from "@/queries";
import { parseArticleData } from "./(utils)/fetchBlogData";
import { client } from "@/data/client";
import { useQuery } from "@apollo/client";
import Article from "./[article]/page";
import Parametrs from "../projects/components/parametrs/parametrs";
import EmptyButton from "@/shared/components/emptyButton/emptyButton";
import SliderElementSkeleton from "@/shared/components/sliderElement/sliderElementSkeleton/SliderElementSkeleton";
import { AnimateReveal } from "@/shared/components/animate";

const breadcrumbsArr = [
  {
    name: "Главная",
    url: "/",
  },
  {
    name: "Блог",
    url: "/blog",
  },
];
const pageSize = 3;

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const articlesSkeletons = Array(pageSize).fill(<SliderElementSkeleton />);
  const [filters, setFilters] = useState<string[]>([]);
  const [choosenFilters, setChoosenFilters] = useState<string[] | null>(null);
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 435);
  }, []);

  const { fetchMore, refetch, loading } = useQuery(getAllArticlesQuery, {
    variables: {
      pagination: isMobile ? { pageSize: pageSize, page: 1 } : {},
    },
    onCompleted: (data) => {
      const articles = parseArticleData(data);
      setArticles((prev) => [...prev, ...articles.articlesArr]);
      setFilters(articles.tags);
      setTotal(data.articles.meta.pagination.total);
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
                article_tags: {
                  tag: {
                    in: choosenFilters,
                  },
                },
              }
            : null,
        pagination: {
          pageSize: pageSize,
          page: Math.floor(articles.length / pageSize) + 1,
        },
      },
      updateQuery: (prev, newData) => {
        const newArticles = parseArticleData(newData.fetchMoreResult);
        setArticles((prev) => [...prev, ...newArticles.articlesArr]);
        setFetchMoreLoading(false);

        setTotal(newData.fetchMoreResult.articles.meta.pagination.total);
        return newData.fetchMoreResult;
      },
    });
  };

  const onFilterChange = () => {
    refetch({
      filters: choosenFilters?.length
        ? {
            article_tags: {
              tag: {
                in: choosenFilters,
              },
            },
          }
        : null,
      pagination: {
        limit: articles.length < pageSize ? pageSize : articles.length,
      },
    }).then((resp) => {
      const filtredArticles = parseArticleData(resp.data);
      setArticles((prev) => [...filtredArticles.articlesArr]);
      setTotal(resp.data.articles.meta.pagination.total);
    });
  };

  useEffect(() => {
    if (choosenFilters) {
      onFilterChange();
    }
  }, [choosenFilters]);

  return (
    <main className="mt" style={{ overflowX: "clip" }}>
      <section className={"container " + styles.blog}>
        <AnimateReveal>
          <div className={styles.title_wrap}>
            <h1 className="text big_header">
              {"Свежие новости \nи события компании"}
            </h1>
            <BreadCrumbs breadcrumbsArr={breadcrumbsArr} />
          </div>
        </AnimateReveal>
        <div className={styles.wrapper}>
          <Parametrs
            setPickedParametrs={setChoosenFilters}
            parametrs={filters}
          />
        </div>
        <div className={styles.slider}>
          <CarouselSlider
            className={styles.carousel}
            slidesPerView={3}
            sliderElements={articles.length ? articles : articlesSkeletons}
          />
        </div>
        <div className={styles.vertical}>
          {articles.length
            ? articles.map((el, index) => <div key={index}>{el}</div>)
            : articlesSkeletons.map((el, i) => (
                <div style={{ width: "100%" }} key={i}>
                  {el}
                </div>
              ))}
          <div className={styles.btn_wrap}>
            {articles.length < total ? (
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
    </main>
  );
};

export default Blog;
