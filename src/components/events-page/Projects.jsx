import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
// import { FaLeaf } from "react-icons/fa";

import Image7 from "../../assests/images/pic7.png";
import Image9 from "../../assests/images/pic9.png";

const Projects = () => {
  return (
    <main className="p-2 sm:px-12">
      <div className="flex flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="flex flex-row flex-nowrap gap-3 sm:text-3xl font-semibold leading-normal text-[#333] mb-4">
            Educate a Child
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

      <div className="flex flex-row-reverse justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="flex flex-row flex-nowrap gap-3 sm:text-3xl font-semibold leading-normal text-[#333] mb-4">
            Save A Soul
          </h4>
          <p className="text-sm text-gray-400">April 2024</p>
          <p className="leading-relaxed">
            Save a Soul, a flagship community impact project of JCI Aso, focused
            on addressing prevailing health challenges in the FCT and its
            environment. In line with the actualization of JCI Rise and
            promotion of good health and wellbeing, this year project focuses
            its attention on Mental Health Awareness through a walk and talk
            sessions with experts. It’s a project parked with a lot of
            inspiration. Let’s promote mental health awareness together.
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3 hover:text-[#EC4B14] hover:border-[#EC4B14]">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img src={Image9} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Projects;
