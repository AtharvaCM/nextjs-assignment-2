import type { GetStaticProps, NextPage } from "next";

// custom components
import Layout from "@/components/layout";
import Card from "@/components/UI/card";
import CardHeading from "@/components/UI/card-heading";
import CardContent from "@/components/UI/card-content";
import axios from "axios";
import { clipString } from "@/utils/index";

type TopSourcesType = {
  data: {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
  }[];
};

const TopSources: NextPage<TopSourcesType> = ({ data }) => {
  return (
    <Layout>
      <div id="topSourcesContainer" className="mx-[10%]">
        <div className="mx-auto max-w-[1024px]">
          {/* Title */}
          <div className="my-6 flex items-center justify-center">
            <h1 className="text-4xl font-extrabold text-black" role="heading">
              Top Headlines Sources in India
            </h1>
          </div>
          {/* Sources list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {data.map((source) => (
              <Card key={source?.id}>
                <CardHeading title={source?.name} />
                <CardContent>
                  <div className="flex flex-col">
                    {/* Category */}
                    <div>
                      <span className="flex-none bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        {source?.category}
                      </span>
                    </div>
                    {/* Description */}
                    <p className="my-2">
                      {clipString(source?.description, 110)}
                    </p>
                    {/* CTA */}
                    <div className="mt-auto">
                      <a
                        href={source?.url}
                        target={"_blank"}
                        rel="noreferrer"
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        <svg
                          aria-hidden="true"
                          className="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
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

export default TopSources;

export const getStaticProps: GetStaticProps = async () => {
  const url: string = `https://newsapi.org/v2/top-headlines/sources?country=in&apiKey=${process.env.newsAPIKey}`;
  const response = await axios.get(url);
  const topSourcesArray = response.data.sources;

  return {
    props: {
      data: topSourcesArray,
    },
    revalidate: 10,
  };
};
