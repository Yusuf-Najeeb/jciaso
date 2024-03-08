import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Image1 from "../../assests/images/pic8.png";

const Events = () => {
  return (
    <main className="p-2 sm:px-12">
      <div className="flex flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-4xl font-semibold leading-normal">
            Quality Leadership Value (QLV)
          </h4>
          <p className="text-sm text-gray-400">July 2024</p>
          <p className="leading-relaxed">
            Quality Leadership Value is an annual colloquium of leaders and
            business professionals which aims to development capacity, strive
            for business sustainability and chart a clause for transformational
            leadership that will translate to contribution to nation building.
            It’s usual gathering of business leaders, career professionals and
            upcoming individuals. Don’t be left out.
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3 hover:text-[#EC4B14] hover:border-[#EC4B14]">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img className="max-h-[300px] w-full rounded" src={Image1} alt="" />
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-4xl font-semibold leading-normal">
            2024 Northern Conference
          </h4>
          <p className="text-sm text-gray-400">August 2024</p>

          <p className="leading-relaxed">
            A Gathering of members of the Junior Chamber International Across
            Nigeria to deliberate on prevailing national issues and chart a
            strategic solutions to the myriad of challenges we face in Nigeria.
            It is to be hosted by JCI Aso and its billed to take place in Kano
            State, the Centre of Commerce. We will keep you in the loop as
            events unfold… Watch this space.
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3 hover:text-[#EC4B14] hover:border-[#EC4B14]">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img className="max-h-[300px] w-full rounded" src={Image1} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Events;
