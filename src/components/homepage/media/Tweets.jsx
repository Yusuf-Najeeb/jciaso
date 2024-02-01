import React from "react";
import { Tweet } from "react-tweet";
import { FaXTwitter } from "react-icons/fa6";
import "../../../App.css";

const tweets = [
  {
    id: 1,
    tweet: "1365936394133245953",
  },
  {
    id: 2,
    tweet: "1616477317676531721",
  },
  {
    id: 3,
    tweet: "1611685122662715393",
  },
  {
    id: 4,
    tweet: "1609436012178182145",
  },
  {
    id: 5,
    tweet: "1609169388204179457",
  },
];

const Tweets = () => {
  return (
    <div className="basis-full md:basis-1/2 w-full md-w-1/2 border rounded-xl">
      <div className="flex flex-row justify-between items-center p-2">
        <h4 className="font-semibold">Recent Tweets</h4>
        <button className="py-2 px-3 rounded-lg text-white bg-black hover:bg-black/70 transition text-sm flex flex-row items-center justify-around gap-1">
          Follow Us&nbsp;
          <FaXTwitter />
        </button>
      </div>
      <div className="mx-auto max-h-[70vh] overflow-y-auto tweets py-2 lg:pl-8">
        {tweets.map((tweets) => (
          <div className="light" key={tweets.id}>
            <Tweet id={tweets.tweet} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tweets;
