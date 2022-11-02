import type { GetStaticProps, NextPage } from "next";

// custom components
import Layout from "@/components/layout";
import Card from "@/components/UI/card";
import CardMedia from "@/components/UI/card-media";
import CardHeading from "@/components/UI/card-heading";
import CardContent from "@/components/UI/card-content";
import Avatar from "@/components/UI/avatar";

import { clipString } from "@/utils/index";

import axios from "axios";

type HomePageProps = {
  data: {
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
  }[];
};

const Home: NextPage<HomePageProps> = ({ data }) => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {data.map((article, index) => (
              <Card
                key={index}
                media={
                  <CardMedia
                    src={article.urlToImage}
                    alt={article.title}
                    defaultSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                  />
                }
              >
                <CardHeading title={clipString(article.title, 50)} />
                <CardContent>
                  <div className="mt-aut w-full">
                    <div className="flex items-center">
                      <Avatar
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt=""
                      />
                      <p className="ml-2">{clipString(article.author, 15)}</p>
                      <p className="ml-auto">
                        {article.publishedAt.slice(0, 10)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const url: string = `https://newsapi.org/v2/top-headlines?country=in&pageSize=9&page=1&apiKey=${process.env.newsAPIKey}`;
  const response = await axios.get(url);
  const newsArticlesArray = response.data.articles;

  return {
    props: {
      data: newsArticlesArray,
    },
    revalidate: 10,
  };
};
