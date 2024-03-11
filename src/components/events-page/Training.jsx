import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Image7 from "../../assests/images/pic7.png";

const Training = () => {
  return (
    <div className="p-2 sm:px-12">
      <div className="flex flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="flex flex-row flex-nowrap gap-3 sm:text-3xl font-semibold leading-normal text-[#333] mb-4">
            In-House General Assembly Training Sessions
          </h4>
          <p className="text-sm text-gray-400">February 2024</p>
          <p className="leading-relaxed">
            Providing opportunities for the children of the downtrodden has
            always been the core of our activities, hence the decade long
            Educate a child project will happen again, this year. Watch out
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3 hover:text-[#EC4B14] hover:border-[#EC4B14]">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img src={Image7} alt="" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="flex flex-row flex-nowrap gap-3 sm:text-3xl font-semibold leading-normal text-[#333] mb-4">
            Monthly Skills Development Series
          </h4>
          <p className="text-sm text-gray-400">February 2024</p>
          <p className="leading-relaxed">
            Providing opportunities for the children of the downtrodden has
            always been the core of our activities, hence the decade long
            Educate a child project will happen again, this year. Watch out
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3 hover:text-[#EC4B14] hover:border-[#EC4B14]">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img src={Image7} alt="" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="flex flex-row flex-nowrap gap-3 sm:text-3xl font-semibold leading-normal text-[#333] mb-4">
            Skills Development sessions for Intending Members
          </h4>
          <p className="text-sm text-gray-400">February 2024</p>
          <p className="leading-relaxed">
            Providing opportunities for the children of the downtrodden has
            always been the core of our activities, hence the decade long
            Educate a child project will happen again, this year. Watch out
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3 hover:text-[#EC4B14] hover:border-[#EC4B14]">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img src={Image7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Training;
