import React from "react";
import { BsCalendar, BsBoxArrowUpRight, BsGraphUpArrow } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";

import Image7 from "../../assests/images/pic7.png";
import Image9 from "../../assests/images/pic9.png";

const Projects = () => {
  return (
    <main className="p-2 sm:px-12">
      <div className="flex flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="flex flex-row flex-nowrap gap-3 sm:text-7xl font-semibold leading-normal text-[#333] mb-4">
            {" "}
            <FaLeaf size={100} /> Go Green Project
          </h4>
          <p className="leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            quia quod quae, asperiores ad optio eum placeat perferendis
            distinctio consequatur provident iste. Dicta architecto eum ab
            cupiditate voluptas saepe veritatis!
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img src={Image7} alt="" />
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="flex flex-row flex-nowrap gap-3 sm:text-7xl font-semibold leading-normal text-[#333] mb-4">
            {" "}
            <BsGraphUpArrow size={100} /> JCI Arise
          </h4>
          <p className="leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            quia quod quae, asperiores ad optio eum placeat perferendis
            distinctio consequatur provident iste. Dicta architecto eum ab
            cupiditate voluptas saepe veritatis!
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3">
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
