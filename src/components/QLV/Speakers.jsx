// import { useState } from "react";

import { BsInfoCircle, BsTwitterX } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";
import Avatar from "./assets/avatar.png";

// const speakerCard = ({speaker}) =>{
//     return(

//     )
// }

const Speakers = () => {
  return (
    <main className="bg-[#FCFCFC] text-[#001926] pt-[6rem] pb-8 px-[5rem]">
      <h2 className="text-5xl font-bold text-center">Meet The Speakers</h2>

      <div className="flex">
        <figure>
          <div className="relative">
            <p className="absolute right-1 top-3 px-2 rounded-full bg-[#FCFCFC] text-[#001926] text-sm w-10 hover:w-fit overflow-hidden transition-all duration-500 ease-in-out flex items-center gap-2">
              <span className="">About Speaker</span>
              <BsInfoCircle />
            </p>
            <img src={Avatar} alt="Speaker at QLV 2024" />
          </div>
          <figcaption>
            <p className="font-bold text-2xl">Shamsudeen Aderoju</p>
            <p className="text-xl">General Secretary</p>
            <p className="flex items-center gap-4 mt-2">
              <RiLinkedinLine
                className="transition border border-[#001926] p-1 rounded hover:bg-[#001926] hover:text-[#FCFCFC] cursor-pointer"
                size={25}
              />
              <BsTwitterX
                className="transition border border-[#001926] p-1 rounded hover:bg-[#001926] hover:text-[#FCFCFC] cursor-pointer"
                size={25}
              />
            </p>
          </figcaption>
        </figure>
      </div>
    </main>
  );
};

export default Speakers;
