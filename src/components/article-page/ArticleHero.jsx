import React from "react";

const ArticleHero = () => {
  return (
    <section className="">
      <div className="h-[50vh] bg-[url('https://cdn.hashnode.com/res/hashnode/image/upload/v1706792495891/04441555-4fe1-4d00-9dfb-d8b81b787fca.jpeg')] bg-cover bg-bottom w-full">
        <div className="bg-[rgba(42,82,96,0.32)] text-white backdrop-blur-0 h-[50vh] flex flex-col justify-center items-start px-8">
          <h1 className="text-4xl lg:text-6xl font-bold">News & Articles</h1>
          <p className="lg:w-[40%] my-2 text-[1.2rem]">
            Meet our able management and the people who make our Institution
            feel like home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArticleHero;
