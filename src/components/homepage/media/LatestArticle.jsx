import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { articleUpdates } from "../../../localdb/Article";

export const LatestArticle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);
  const [news] = useState(articleUpdates);

  return (
    <section className="flex flex-col gap-2 px-4 lg:px-8 mt-16 mb-8">
      <h1 className="sm:text-2xl lg:text-3xl pl-4">News</h1>
      <div className="flex flex-col sm:flex-row flex-wrap justify-start md:justify-evenly gap-4">
        {news.map((updates) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-easing="ease-in"
              className="bg-[#FAFAFA] flex flex-col gap-4 rounded-md sm:w-[32%]"
            >
              <img
                src={updates.Image}
                className="w-full h-[250px] object-cover object-top rounded-t-md"
                alt="article coverImage"
              />

              <div className="p-4 flex flex-col gap-6 items-start">
                <div className="flex flex-col gap-2 font-semibold">
                  <div className="text-red-500 flex gap-4 items-center font-medium text-sm">
                    <p>{updates.post1}</p>
                    <p>{updates.post2}</p>
                  </div>
                  <h1>{updates.heading}</h1>
                  <div className="flex items-center gap-3">
                    <p className="border-2 border-black w-4 h-4 bg-black"></p>
                    <p className="opacity-60">{updates.date}</p>
                  </div>
                </div>
                <p className="">{updates.content}</p>
                <a href={updates.site} target="blank">
                  <button className="border border-[#2288A9] text-[#2288A9] font-medium px-4 py-2 rounded-lg hover:border-red-500 hover:text-red-500 duration-300 mb-4">
                    {updates.read}
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export const HomePageNew = () => {
  const [news] = useState(articleUpdates);

  return (
    <section className="flex flex-col gap-2 px-4 lg:px-8 mt-16 mb-8">
      <h1 className="sm:text-2xl lg:text-3xl pl-4">News</h1>
      <div className="flex flex-col sm:flex-row flex-wrap justify-start md:justify-evenly gap-4">
        {news.slice(0, 3).map((updates) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-easing="ease-in"
              className="bg-[#FAFAFA] flex flex-col gap-4 rounded-md sm:w-[32%]"
            >
              <img
                src={updates.Image}
                className="w-full h-[250px] object-cover object-top rounded-t-md"
                alt="article coverImage"
              />

              <div className="p-4 flex flex-col gap-6 items-start">
                <div className="flex flex-col gap-2 font-semibold">
                  <div className="text-red-500 flex gap-4 items-center font-medium text-sm">
                    <p>{updates.post1}</p>
                    <p>{updates.post2}</p>
                  </div>
                  <h1>{updates.heading}</h1>
                  <div className="flex items-center gap-3">
                    <p className="border-2 border-black w-4 h-4 bg-black"></p>
                    <p className="opacity-60">{updates.date}</p>
                  </div>
                </div>
                <p className="">{updates.content}</p>
                <a href={updates.site} target="blank">
                  <button className="border border-[#2288A9] text-[#2288A9] font-medium px-4 py-2 rounded-lg hover:border-red-500 hover:text-red-500 duration-300 mb-4">
                    {updates.read}
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
