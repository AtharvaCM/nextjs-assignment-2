import type { NextPage } from "next";

// custom components
import Layout from "@/components/layout";
import Card from "@/components/UI/card";
import CardMedia from "@/components/UI/card-media";
import CardHeading from "@/components/UI/card-heading";
import CardContent from "@/components/UI/card-content";
import Avatar from "@/components/UI/avatar";

const Home: NextPage = () => {
  return (
    <Layout>
      <div id="topHeadlinesContainer" className="mx-[10%]">
        <div className="mx-auto max-w-[1024px]">
          <div className="my-6 flex items-center justify-center">
            <h1 className="text-4xl font-extrabold text-black" role="heading">
              Top Headlines in India
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card
              media={
                <CardMedia
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt=""
                />
              }
            >
              <CardHeading title="card title" />
              <CardContent>
                <div className="flex items-center">
                  <Avatar
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt=""
                  />
                  <p className="ml-2">Author name</p>
                  <p className="ml-auto">01/1/2022</p>
                </div>
              </CardContent>
            </Card>

            <Card
              media={
                <CardMedia
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt=""
                />
              }
            >
              <CardHeading title="card title" />
            </Card>

            <Card
              media={
                <CardMedia
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt=""
                />
              }
            >
              <CardHeading title="card title" />
            </Card>

            <Card
              media={
                <CardMedia
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt=""
                />
              }
            >
              <CardHeading title="card title" />
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
