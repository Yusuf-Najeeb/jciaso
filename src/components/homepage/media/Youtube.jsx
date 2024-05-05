import React from "react";
import ReactPlayer from "react-player/youtube";
import { BsYoutube } from "react-icons/bs";
import "../../../App.css";

const videos = [
  {
    id: 1,
    vid: "https://youtu.be/xaYl-YGRnl4",
  },
  {
    id: 2,
    vid: "https://www.youtube.com/watch?v=qH9EnpfwHKQ&t",
  },
  {
    id: 3,
    vid: "https://www.youtube.com/watch?v=Vn5sDGrl-QE",
  },
  {
    id: 4,
    vid: "https://www.youtube.com/watch?v=aoW0Hl6CR2M",
  },
  {
    id: 5,
    vid: "https://www.youtube.com/watch?v=jAc8QmkLPZU",
  },
];

const Youtube = () => {
  return (
    <div className="basis:full md:basis-1/2 w-full md:w-1/2 border rounded-xl">
      <div className="flex flex-row justify-between items-center p-2">
        <h4 className="font-semibold">Youtube Videos</h4>
        <a
          href="https://www.youtube.com/channel/UCgb1TT3KUS70l-HuYKHeFfw"
          target="blank"
        >
          <button className="py-2 px-3 rounded-lg text-white bg-red-700 hover:bg-red-700/70 transition text-sm flex flex-row items-center justify-around gap-1">
            Subscribe&nbsp;
            <BsYoutube size={20} />
          </button>
        </a>
      </div>
      <div className="mx-auto max-h-[70vh] overflow-y-auto youtube py-2 lg:pl-1">
        {videos.map((item) => (
          <div className="w-full my-6" key={item.id}>
            <ReactPlayer url={item.vid} width={{ width: "80%" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
