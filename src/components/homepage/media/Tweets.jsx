import React from "react";
import { Tweet } from "react-tweet";
import { FaXTwitter } from "react-icons/fa6";
import "../../../App.css";

const tweets = [
  {
    id: 0,
    tweet: "1937518626124284336",
  },
  {
    id: 1,
    tweet: "1934980718989353154",
  },
  {
    id: 2,
    tweet: "1934299172431376619",
  },
  {
    id: 3,
    tweet: "1928860276457148903",
  },
  {
    id: 4,
    tweet: "1927433482101309694",
  },
  {
    id: 5,
    tweet: "1924164432495546818",
  },
  {
    id: 6,
    tweet: "1926340145814335752",
  },
  {
    id: 7,
    tweet: "1925844444676280577",
  },
  {
    id: 8,
    tweet: "1920789094709268860",
  },
  {
    id: 9,
    tweet: "1365936394133245953",
  },
  {
    id: 10,
    tweet: "1616477317676531721",
  },
  {
    id: 11,
    tweet: "1611685122662715393",
  },
  {
    id: 12,
    tweet: "1609436012178182145",
  },
  {
    id: 13,
    tweet: "1609169388204179457",
  },
  {
    id: 14,
    tweet: "1917926046151725513",
  },
  {
    id: 15,
    tweet: "1903774294397612333",
  },
  // {
  //   id: 16,
  //   tweet: "1906430527134953819",
  // },
];

const Tweets = () => {
  return (
    <div className="md:basis-1/2 w-full border rounded-xl">
      <div className="flex flex-row justify-between items-center p-4">
        <h4 className="font-semibold">Recent Tweets</h4>
        <a href="https://twitter.com/jci_aso" target="blank">
          <button className="py-2 px-3 rounded-lg text-white bg-black hover:bg-black/70 transition text-sm flex flex-row items-center justify-around gap-1">
            Follow Us&nbsp;
            <FaXTwitter />
          </button>
        </a>
      </div>
      <div className="mx-auto w-full max-h-[70vh] overflow-y-auto tweets py-2 lg:pl-1">
        {tweets.map((tweets) => (
          <div className="light w-full" key={tweets.id}>
            <Tweet id={tweets.tweet} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tweets;
