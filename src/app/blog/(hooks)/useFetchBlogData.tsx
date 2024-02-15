import { useQuery } from "@apollo/client";
import { getAllArticlesQuery } from "@/queries";
import { client } from "@/data/client";
import { parseArticleData } from "../(utils)/fetchBlogData";
import { useState } from "react";

interface IUseFetchBlogDataProps {
  pageSize: number;
  page: number;
  setArticles: any;
  setFilters: any;
  setTotal: any;
}

function useFetchBlogData({
  pageSize,
  page,
  setArticles,
  setFilters,
  setTotal,
}: IUseFetchBlogDataProps) {
  const { fetchMore, refetch, loading } = useQuery(getAllArticlesQuery, {
    variables: {
      pagination: { pageSize: pageSize, page: 1 },
    },
    onCompleted: (data) => {
      const articles = parseArticleData(data);
      setArticles((prev) => [...prev, ...articles.articlesArr]);
      setFilters(articles.tags);
      setTotal(data.articles.meta.pagination.total);
    },
    client: client,
  });
  return { fetchMore, refetch, loading };
}

export default useFetchBlogData;
