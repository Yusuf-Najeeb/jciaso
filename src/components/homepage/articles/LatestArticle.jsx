import React, { useState } from "react";
import { articleUpdates } from "../../../localdb/Article";
import { Link } from "react-router-dom";

const LatestArticle = () => {
  const [news] = useState(articleUpdates);

  return (
    <section className="flex flex-col gap-2 px-6 mt-16">
      <h1 className="text-2xl px-10 ">Articles</h1>
      <section className="flex flex-wrap justify-center gap-8">
        {news.map((updates) => {
          return (
            <div className="bg-[#FAFAFA] flex flex-col gap-4 rounded-md lg:w-[30%] ">
              <img src={updates.Image} alt="article coverImage" />
              <section className="p-4 flex flex-col gap-6 items-start">
                <section className="flex flex-col gap-2 font-semibold">
                  <div className="text-red-500 flex gap-4 items-center font-medium">
                    <p>{updates.post1}</p>
                    <p>{updates.post2}</p>
                  </div>
                  <h1>{updates.heading}</h1>
                  <div className="flex items-center gap-3">
                    <p className="border-2 border-black w-4 h-4 bg-black"></p>
                    <p className="opacity-60">{updates.date}</p>
                  </div>
                </section>
                <p>{updates.content}</p>
                <Link>
                  <button className="border border-[#2288A9] text-[#2288A9] font-medium px-4 py-2 rounded-lg hover:border-red-500 hover:text-red-500 duration-300 mb-4">
                    {updates.read}
                  </button>
                </Link>
              </section>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default LatestArticle;
