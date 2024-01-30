import React from "react";
import Tweets from "./Tweets";
import Youtube from "./Youtube";

const Articles = () => {
  return (
    <main className="mx-12 my-8">
      <h2 className="text-3xl my-4">Latest Posts</h2>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4">
        <Tweets />
        <Youtube />
      </div>
    </main>
  );
};

export default Articles;
