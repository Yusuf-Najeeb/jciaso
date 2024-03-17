import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Training = () => {
  return (
    <div className="p-2 sm:px-12">
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="hidden sm:flex flex-row flex-nowrap gap-3 text-2xl sm:text-3xl font-semibold leading-normal text-[#333] mb-4">
            In-House GA Training:
          </h4>
          <p className="text-sm text-gray-400">
            {" "}
            January || March || May || July || Sept 2024
          </p>
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
          <h4 className="sm:hidden flex flex-row flex-nowrap gap-3 text-2xl sm:text-3xl font-semibold leading-normal text-[#333] mb-4">
            In-House General Assembly Training Sessions
          </h4>
          <img
            className="max-h-[300px] w-full rounded object-cover object-center"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710286260542/8d71eea3-f67c-43e8-ae21-f22a8bed7f9b.jpeg"
            alt="In house General Assembly"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="hidden sm:flex flex-row flex-nowrap gap-3 text-2xl sm:text-3xl font-semibold leading-normal text-[#333] mb-4">
            Monthly Skills Development Series
          </h4>
          <p className="text-sm text-gray-400">All Year Round</p>
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
          <h4 className="sm:hidden flex flex-row flex-nowrap gap-3 text-2xl sm:text-3xl font-semibold leading-normal text-[#333] mb-4">
            Monthly Skills Development series: All Year Round
          </h4>
          <img
            className="max-h-[300px] w-full rounded object-cover object-center"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710286231911/86f3718b-babb-4437-8c4b-7525b1201336.jpeg"
            alt="Monthly development series"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="hidden sm:flex flex-row flex-nowrap gap-3 text-2xl sm:text-3xl font-semibold leading-normal text-[#333] mb-4">
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
          <h4 className="sm:hidden flex flex-row flex-nowrap gap-3 text-2xl sm:text-3xl font-semibold leading-normal text-[#333] mb-4">
            Intending Members Pre-Induction Training: Monthly
          </h4>
          <img
            className="max-h-[300px] w-full rounded object-cover object-center"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710286271239/2b132c09-3eb7-4be4-9825-e69f4c9513c2.jpeg"
            alt="Skills development for intending members"
          />
        </div>
      </div>
    </div>
  );
};

export default Training;
