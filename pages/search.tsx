import type { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";

// custom components
import Layout from "@/components/layout";
import SearchInput from "@/components/search-input";
import Spinner from "@/components/UI/spinner";
import Card from "@/components/UI/card";
import CardMedia from "@/components/UI/card-media";
import CardHeading from "@/components/UI/card-heading";
import CardContent from "@/components/UI/card-content";
import Avatar from "@/components/UI/avatar";

import { clipString, sanitizeString } from "@/utils/index";

type ArticleType = {
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

const Search: NextPage = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [showArticles, setShowArticles] = useState<boolean>(false);
  const [searchedArticles, setSearchedArticles] = useState<
    ArticleType[] | null
  >(null);
  const [loaded, setLoaded] = useState(false);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  };

  const handleSearchClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowArticles(true);
    setLoaded(false);
    const url: string = `https://newsapi.org/v2/everything?q=${searchInput.trim()}&page=1&pageSize=18&apiKey=${
      process.env.newsAPIKey
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setLoaded(true);
        setSearchedArticles(response.articles);
      });
  };

  return (
    <Layout>
      <div className="mx-[10%] pt-10">
        <div className="mx-auto max-w-[1024px]">
          {/* Search */}
          <SearchInput
            placeholder="Search News Articles..."
            onChange={handleSearchInputChange}
            onSearchClick={handleSearchClick}
          />
          {/* Display results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
            {showArticles && !loaded && <Spinner />}
            {showArticles &&
              loaded &&
              searchedArticles?.map((article, index) => (
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
                  <Link href={`/news/${encodeURI(article.title)}`}>
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

export default Search;
