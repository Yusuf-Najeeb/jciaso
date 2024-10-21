import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BsInfoCircle, BsTwitterX } from "react-icons/bs";
import { RxCaretLeft } from "react-icons/rx";
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
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto facere ea minus, perferendis, debitis neque iste excepturi nihil cupiditate, eveniet autem sapiente dolorem consequuntur necessitatibus laborum maiores. Animi, est. Alias.",
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
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <figure className="w-[100%] sm:w-[48%] md:w-[32%] my-4 md:my-8 rounded-md p-2">
      <div className="relative">
        <div
          className="absolute -top-1 right-0 flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {isHovered && !showDetails && (
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="mr-6 pl-2 pr-3 rounded-xl text-sm bg-[#FCFCFC] text-[#001926] whitespace-nowrap overflow-hidden relative top-[1.1rem] z-40"
              >
                Show Details
              </motion.span>
            )}

            {isHovered && showDetails && (
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="mr-6 pl-2 pr-3 rounded-xl text-sm bg-[#FCFCFC] text-[#001926] whitespace-nowrap overflow-hidden relative top-[1.1rem] z-40"
              >
                Go back
              </motion.span>
            )}
          </AnimatePresence>
          <button
            size="icon"
            onClick={() => setShowDetails(!showDetails)}
            aria-label={showDetails ? "Hide Details" : "Show Details"}
            className="absolute bg-[#fff] top-4 right-2 rounded-full z-40"
          >
            {showDetails ? (
              <RxCaretLeft className="h-6 w-6 p-1" />
            ) : (
              <BsInfoCircle className="h-6 w-6 p-1" />
            )}
          </button>
        </div>
        <AnimatePresence mode="wait">
          {showDetails ? (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-[#FCFCFC] text-sm sm:text-[1rem] leading-normal text-muted-foreground bg-[#001926] mb-4 p-4 rounded-md">
                {speaker.profile}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="image"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <img
                  src={speaker.avatar}
                  alt={speaker.name}
                  className="rounded-t-md w-full object-cover object-center"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
      className="bg-[#FCFCFC] text-[#001926] pt-8
       md:pb-8 px-2 md:px-[5rem]"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center py-8 md:mb-8">
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
          <p className="font-bold text-3xl md:text-5xl py-4">Coming Soon!</p>
        </div>
      )}
    </main>
  );
};

export default Speakers;
