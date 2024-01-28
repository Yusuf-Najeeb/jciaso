import React from "react";
import { Tweet } from "react-tweet";
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
    <div className="w-1/2 max-h-[70vh] overflow-y-scroll tweets">
      {tweets.map((tweets) => (
        <div className="light" key={tweets.id}>
          <Tweet id={tweets.tweet} />
        </div>
      ))}
    </div>
  );
};

export default Tweets;
