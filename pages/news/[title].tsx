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
      <p>{isEmpty(newsArticle) && "Cannot fetch article"}</p>

      <div className="mx-[10%] my-10">
        <article className="format lg:format-lg max-w-none">
          <h1>{newsArticle?.title}</h1>
          <p className="leading-tight">
            {newsArticle?.author && `By ${newsArticle?.author}`}
          </p>
          {/* <div className="flex">
            <img
              className="max-w-xl h-auto rounded-lg shadow-xl dark:shadow-gray-800"
              src={newsArticle?.urlToImage}
              alt="image description"
            />
            <p className="lead mx-5">{newsArticle?.description}</p>
          </div> */}
          <figure>
            <img
              className="w-full h-auto rounded-lg shadow-xl dark:shadow-gray-800"
              src={newsArticle?.urlToImage}
              alt={newsArticle?.title}
            />
          </figure>
          <p className="lead mx-8">{newsArticle?.description}</p>
          <p>{newsArticle?.content}</p>
          <a
            href={newsArticle?.url}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Read more
          </a>
        </article>
      </div>
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
