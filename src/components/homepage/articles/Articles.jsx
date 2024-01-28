import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import Tweets from "./Tweets";
import Youtube from "./Youtube";

const Articles = () => {
  return (
    <main className="mx-12">
      <h2 className="text-3xl my-4">Latest Posts</h2>
      <div className="relative w-full py-4 px-3">
        {/* header */}
        <div className="w-full flex flex-row justify-between items-center gap-8 mb-4">
          {/* Tweets */}
          <div className="w-1/2 flex flex-row justify-between items-center">
            <h4 className="font-semibold">Recent Tweets</h4>
            <button className="py-2 px-3 rounded-lg text-white bg-black hover:bg-black/70 transition text-sm flex flex-row items-center justify-around gap-1">
              Follow Us <FaXTwitter />
            </button>
          </div>
          {/* Youtube Videos */}
          <div className=" w-1/2 flex flex-row justify-between items-center">
            <h4 className="font-semibold">Youtube Videos</h4>
            <button className="py-2 px-3 rounded-lg text-white bg-red-700 hover:bg-red-700/70 transition text-sm flex flex-row items-center justify-around gap-1">
              Subscribe <BsYoutube size={20} />
            </button>
          </div>
        </div>
        {/* content */}
        <div className="w-full flex flex-row justify-between items-center gap-8 ">
          <Tweets />
          <Youtube />
        </div>
        {/* Articles */}
      </div>
    </main>
  );
};

export default Articles;

{
  /* <div className="p-2 rounded-lg border border-gray-500 basis-1/2">
          <div className="flex flex-row justify-between items-center">
            <h4>Recent Tweets</h4>
            <button className="py-2 px-3 rounded-lg text-white bg-black hover:bg-black/70 transition text-sm flex flex-row items-center justify-between gap-1">
              Follow Us <FaXTwitter />
            </button>
          </div>
        </div>

        <div className="p-2 rounded-lg border border-gray-500 basis-1/2">
          <div className="flex flex-row justify-between items-center">
            <h4>Youtube Videos</h4>
            <button className="py-2 px-3 rounded-lg text-white bg-red-700 hover:bg-red-700/70 transition text-sm flex flex-row items-center justify-between gap-1">
              Subscribe <BsYoutube size={20} />
            </button>
          </div>
        </div> */
}
