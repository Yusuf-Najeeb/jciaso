import React from "react";
import Tweets from "./Tweets";
import Youtube from "./Youtube";

const Media = () => {
  return (
    <main className="px-2 lg:px-16">
      <h2 className="text-2xl my-4">Latest Posts</h2>
      <div className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center flex-wrap md:flex-nowrap gap-x-12 gap-y-8">
        <Tweets />
        <Youtube />
      </div>
    </main>
  );
};

export default Media;
