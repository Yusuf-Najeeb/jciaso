// import { useState } from "react";
import { Link } from "react-router-dom";
import { BsInfoCircle, BsTwitterX } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";
import Avatar from "./assets/avatar.png";

const data = [
  // {
  //   name: "Shamsudeen Aderoju",
  //   avatar: Avatar,
  //   position: "General Secretary",
  //   linkedin: "https://www.linkedin.com/",
  //   twitter: "https://twitter.com/",
  //   profile:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.",
  // },
  // {
  //   name: "Shamsudeen Aderoju",
  //   avatar: Avatar,
  //   position: "General Secretary",
  //   linkedin: "https://www.linkedin.com/",
  //   twitter: "https://twitter.com/",
  //   profile:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.",
  // },
  // {
  //   name: "Shamsudeen Aderoju",
  //   avatar: Avatar,
  //   position: "General Secretary",
  //   linkedin: "https://www.linkedin.com/",
  //   twitter: "https://twitter.com/",
  //   profile:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.",
  // },
  // {
  //   name: "Shamsudeen Aderoju",
  //   avatar: Avatar,
  //   position: "General Secretary",
  //   linkedin: "https://www.linkedin.com/",
  //   twitter: "https://twitter.com/",
  //   profile:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.",
  // },
  // {
  //   name: "Shamsudeen Aderoju",
  //   avatar: Avatar,
  //   position: "General Secretary",
  //   linkedin: "https://www.linkedin.com/",
  //   twitter: "https://twitter.com/",
  //   profile:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.",
  // },
  // {
  //   name: "Shamsudeen Aderoju",
  //   avatar: Avatar,
  //   position: "General Secretary",
  //   linkedin: "https://www.linkedin.com/",
  //   twitter: "https://twitter.com/",
  //   profile:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.",
  // },
];

const SpeakerCard = ({ speaker }) => {
  return (
    <figure className="w-[100%] sm:w-[48%] md:w-[32%] my-4 md:my-8 rounded-md p-2">
      <div className="relative">
        <p className="absolute right-1 top-3 px-2 rounded-full bg-[#FCFCFC] text-[#001926] text-sm w-10 hover:w-fit overflow-hidden transition-all duration-500 ease-in-out flex items-center gap-2">
          <span className="">About Speaker</span>
          <BsInfoCircle />
        </p>
        <img
          src={speaker.avatar}
          alt={speaker.name}
          className="rounded-t-md w-full object-cover object-center"
        />
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
  );
};

const Speakers = ({ sectionRef }) => {
  return (
    <main
      ref={sectionRef}
      className="bg-[#FCFCFC] text-[#001926] pt-1
       md:pb-8 px-2 md:px-[5rem]"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center md:mb-8">
        Meet The Speakers
      </h2>
      {data.length > 0 ? (
        <div className="flex items-center justify-center md:justify-between flex-wrap">
          {data.map((item, i) => {
            return <SpeakerCard speaker={item} key={i} />;
          })}
        </div>
      ) : (
        <div className="relative flex flex-col items-center justify-center">
          <img src={Avatar} alt="Coming Soon Avatar" className="rounded-lg" />
          <h4 className="font-bold text-7xl md:text-[15rem] absolute top-12 animate-pulse">
            ?
          </h4>
          <p className="font-bold text-3xl md:text-5xl">Coming Soon!</p>
        </div>
      )}
    </main>
  );
};

export default Speakers;
