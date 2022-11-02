import type { GetServerSideProps, NextPage } from "next";

import Layout from "@/components/layout";

import axios from "axios";
import { isEmpty } from "lodash";
// import { sanitizeString } from "@/utils/index";

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

type SingleNewsPageProps = {
  newsArticle: NewsArticle;
};

const SingleNewsPage: NextPage<SingleNewsPageProps> = ({ newsArticle }) => {
  return (
    <Layout>
      <p>Author: {newsArticle?.author}</p>
      <p>Title: {newsArticle?.title}</p>
      <p>Content: {newsArticle?.content}</p>
      <p>Description: {newsArticle?.description}</p>
      <p>{isEmpty(newsArticle) && "Cannot fetch article"}</p>
    </Layout>
  );
};

export default SingleNewsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let title = context?.params?.title;

  if (Array.isArray(title)) {
    title = title[0];
  }

  if (title === undefined) {
    title = "";
  }

  const url: string = `https://newsapi.org/v2/everything?q="${title}"&apiKey=${process.env.newsAPIKey}`;
  const response = await axios.get(url);
  const newsArticlesArray: NewsArticle[] = response.data.articles;

  return {
    props: {
      newsArticle: newsArticlesArray[0] || {},
    },
    notFound: isEmpty(newsArticlesArray[0]),
  };
};

// export async function getStaticPaths() {
// const url: string = `https://newsapi.org/v2/top-headlines?country=in&pageSize=9&page=1&apiKey=${process.env.newsAPIKey}`;
// const response = await axios.get(url);
// const newsArticlesArray: NewsArticle[] = response.data.articles;

// const pathsData: { params: { title: string } }[] = [];

// newsArticlesArray &&
//   newsArticlesArray.map((article) => {
//     pathsData.push({
//       params: {
//         title: sanitizeString(article.title),
//       },
//     });
//   });

//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   let title = context?.params?.title;

//   if (Array.isArray(title)) {
//     title = title[0];
//   }

//   if (title === undefined) {
//     title = "";
//   }

//   const url: string = `https://newsapi.org/v2/everything?q="${title}"&apiKey=${process.env.newsAPIKey}`;
//   const response = await axios.get(url);
//   const newsArticlesArray: NewsArticle[] = response.data.articles;

//   return {
//     props: {
//       newsArticle: newsArticlesArray[0] || {},
//     },
//     revalidate: 10,
//   };
// };
