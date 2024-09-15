// import { useState } from "react";
import { Link } from "react-router-dom";
import { BsInfoCircle, BsTwitterX } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";
import Avatar from "./assets/avatar.png";

const data = [
  {
    name: "Shamsudeen Aderoju",
    avatar: Avatar,
    position: "General Secretary",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    profile:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.",
  },
  {
    name: "Shamsudeen Aderoju",
    avatar: Avatar,
    position: "General Secretary",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    profile:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.",
  },
  {
    name: "Shamsudeen Aderoju",
    avatar: Avatar,
    position: "General Secretary",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    profile:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.",
  },
  {
    name: "Shamsudeen Aderoju",
    avatar: Avatar,
    position: "General Secretary",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    profile:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.",
  },
  {
    name: "Shamsudeen Aderoju",
    avatar: Avatar,
    position: "General Secretary",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    profile:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.",
  },
  {
    name: "Shamsudeen Aderoju",
    avatar: Avatar,
    position: "General Secretary",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    profile:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.",
  },
];

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="w-[30%] my-8">
      <figure>
        <div className="relative">
          <p className="absolute right-1 top-3 px-2 rounded-full bg-[#FCFCFC] text-[#001926] text-sm w-10 hover:w-fit overflow-hidden transition-all duration-500 ease-in-out flex items-center gap-2">
            <span className="">About Speaker</span>
            <BsInfoCircle />
          </p>
          <img src={speaker.avatar} alt={speaker.name} />
        </div>
        <figcaption>
          <p className="font-bold text-2xl">{speaker.name}</p>
          <p className="text-xl">{speaker.position}</p>
          <p className="flex items-center gap-4 mt-2">
            <Link to={speaker.linkedin}>
              <RiLinkedinLine
                className="transition border border-[#001926] p-1 rounded hover:bg-[#001926] hover:text-[#FCFCFC] cursor-pointer"
                size={25}
              />
            </Link>
            <Link to={speaker.twitter}>
              <BsTwitterX
                className="transition border border-[#001926] p-1 rounded hover:bg-[#001926] hover:text-[#FCFCFC] cursor-pointer"
                size={25}
              />
            </Link>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

const Speakers = () => {
  return (
    <main className="bg-[#FCFCFC] text-[#001926] pt-[6rem] pb-8 px-[5rem]">
      <h2 className="text-5xl font-bold text-center">Meet The Speakers</h2>
      <div className="flex items-center justify-between flex-wrap my-4">
        {data.map((item, i) => {
          return <SpeakerCard speaker={item} key={i} />;
        })}
      </div>
    </main>
  );
};

export default Speakers;
