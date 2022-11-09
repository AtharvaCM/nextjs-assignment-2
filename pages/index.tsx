import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";

import axios from "axios";

import Layout from "@/components/layout";
import NewsArticlesList from "@/components/NewsArticlesList";
import Button from "@/components/UI/button";
import Spinner from "@/components/UI/spinner";

type NewsArticle = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type HomePageProps = {
  initialNewsArticles: NewsArticle[];
};

const Home: NextPage<HomePageProps> = ({ initialNewsArticles }) => {
  const [newsArticles, setNewsArticles] =
    useState<NewsArticle[]>(initialNewsArticles);
  const [page, setPage] = useState<number>(1);
  const [loaded, setLoaded] = useState<boolean>(false);

  const handleLoadMore = () => {
    setLoaded(false);

    setPage((prevPage) => {
      return prevPage + 1;
    });

    const url: string = `https://newsapi.org/v2/top-headlines?country=in&pageSize=12&page=${
      page + 1
    }&apiKey=${process.env.newsAPIKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setLoaded(true);
        setNewsArticles((prevState) => {
          return [...prevState, ...response.articles];
        });
      });
  };

  useEffect(() => {}, [page]);

  return (
    <Layout>
      <div id="topHeadlinesContainer" className="mx-[10%]">
        <div className="mx-auto max-w-[1024px]">
          {/* Title */}
          <div className="my-6 flex items-center justify-center">
            <h1 className="text-4xl font-extrabold text-black" role="heading">
              Top Headlines in India
            </h1>
          </div>
          {/* News Articles Grid */}
          <NewsArticlesList newsArticles={newsArticles} />
          {/* Load More Articles */}
          <div className="flex justify-center mb-5">
            <Button variant="primary" onClick={handleLoadMore}>
              {!loaded && <Spinner />}
              {loaded && "Load more"}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const url: string = `https://newsapi.org/v2/top-headlines?country=in&pageSize=12&page=1&apiKey=${process.env.newsAPIKey}`;
  const response = await axios.get(url);
  const newsArticlesArray = response.data.articles;

  return {
    props: {
      initialNewsArticles: newsArticlesArray,
    },
    revalidate: 10,
  };
};
