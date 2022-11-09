import Link from "next/link";
import React from "react";

import Avatar from "../UI/avatar";
import Card from "../UI/card";
import CardContent from "../UI/card-content";
import CardHeading from "../UI/card-heading";
import CardMedia from "../UI/card-media";

import { clipString, sanitizeString } from "@/utils/index";

type NewsArticlesList = {
  newsArticles: {
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

const NewsArticlesList: React.FC<NewsArticlesList> = ({ newsArticles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
      {newsArticles?.map((article, index) => (
        <Card
          key={index}
          media={
            <CardMedia
              src={article.urlToImage}
              alt={sanitizeString(article.title)}
              defaultSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            />
          }
        >
          <Link href={`/news/${article.title}`}>
            <a>
              <CardHeading title={clipString(article.title, 50)} />
            </a>
          </Link>
          <CardContent>
            <div className="mt-auto w-full">
              <div className="flex items-center">
                <Avatar
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt=""
                />
                <p className="ml-2">{clipString(article.author, 15)}</p>
                <p className="ml-auto">{article.publishedAt.slice(0, 10)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NewsArticlesList;
