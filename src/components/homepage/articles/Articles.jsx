import React from "react";

const Articles = () => {
  return (
    <main className="mx-12">
      <h2 className="text-3xl">Latest Posts</h2>
      <div className="flex flex-col justify-between gap-16 md:flex-row w-full">
        <div className="border-2 basis-1/2">
          <div className="flex flex-row justify-between items-center">
            <h4>Recent Tweets</h4>
            <button className="py-2 px-3 border rounded-lg text-white bg-black hover:bg-black/70 transition text-sm">
              Follow Us
            </button>
          </div>
        </div>
        <div className="border-2 basis-1/2">
          <div className="flex flex-row justify-between items-center">
            <h4>Youtube Posts</h4>
            <button className="py-2 px-3 border rounded-lg text-white bg-red-700 hover:bg-red-700/70 transition text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Articles;
