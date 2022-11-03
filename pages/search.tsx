import type { NextPage } from "next";

// custom components
import Layout from "@/components/layout";
import SearchInput from "@/components/search-input";
import React, { useState } from "react";
import { useAxios } from "src/hooks/useAxios";
import Spinner from "@/components/UI/spinner";

const Search: NextPage = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [showArticles, setShowArticles] = useState<boolean>(false);

  const { loaded, callAPI, setLoaded } = useAxios();

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  };

  const handleSearchClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowArticles(true);
    setLoaded(false);
    const url: string = `https://newsapi.org/v2/everything?q="${searchInput}"&apiKey=${process.env.newsAPIKey}`;

    callAPI(url);
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
          {showArticles && !loaded && <Spinner />}
          {showArticles && loaded && <p>Results loaded</p>}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
