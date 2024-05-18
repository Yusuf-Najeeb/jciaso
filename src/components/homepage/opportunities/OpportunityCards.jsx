import React from "react";
import {
  BsGlobeAsiaAustralia,
  BsPeopleFill,
  BsPersonCheckFill,
} from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { Link } from "react-router-dom";

const OpportunityCards = () => {
  return (
    <main className="p-2 md:px-12 md:py-12 bg-gray-50">
      <div className="w-fit mx-auto flex flex-col sm:flex-row flex-wrap justify-center md:justify-center gap-8 sm:gap-6">
        <figure className="basis-[45%] md:basis-[22%] group relative hover:bg-white">
          <img
            src="https://freshnewsng.com/uploads/images/202312/image_870x_6576e6e1ac416.jpg"
            alt="/"
            className="w-full h-full min-w-[300px] max-h-[200px] object-cover object-top"
          />
          <figcaption className="hidden group-hover:flex justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.5rem] bg-[#ECBD37]/60 transition duration-200">
            <BsPersonCheckFill size={45} className="mb-12 text-[#fff]" />
            <div className="flex flex-col justify-center w-1/2">
              <p className="text-2xl text-[#0199CC] font-semibold drop-shadow leading-tight">
                Individual Opportunity
              </p>
              <Link to="/individual">
                <button className="w-fit bg-[#0199CC] font-semibold hover:bg-white text-[#050505] rounded-lg px-3 py-2 mt-2 transition-colors">
                  Read more
                </button>
              </Link>
            </div>
          </figcaption>
          <div className="flex gap-4 justify-center mt-3">
            <BsPersonCheckFill size={40} className="text-[#ECBD37]" />
            <p className="text-2xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              Individual Opportunity
            </p>
          </div>
        </figure>

        <figure className="basis-[45%] md:basis-[22%] group relative hover:bg-white">
          <img
            src="https://freshnewsng.com/uploads/images/202312/image_870x_6576e6e1ac416.jpg"
            alt="/"
            className="w-full h-full min-w-[300px] max-h-[200px] object-cover object-top"
          />
          <figcaption className="hidden group-hover:flex justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.5rem] bg-[#ECBD37]/60 transition duration-200">
            <MdBusinessCenter size={45} className="mb-12 text-[#fff]" />
            <div className="flex flex-col justify-center w-1/2">
              <p className="text-2xl text-[#0199CC] font-semibold drop-shadow leading-tight">
                Business Opportunity
              </p>
              <Link to="/business">
                <button className="w-fit bg-[#0199CC] font-semibold hover:bg-white text-[#050505] rounded-lg px-3 py-2 mt-2 transition-colors">
                  Read more
                </button>
              </Link>
            </div>
          </figcaption>
          <div className="flex gap-4 justify-center mt-3">
            <MdBusinessCenter size={40} className="text-[#ECBD37]" />
            <p className="text-2xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              Business Opportunity
            </p>
          </div>
        </figure>

        <figure className="basis-[45%] md:basis-[22%] group relative hover:bg-white">
          <img
            src="https://freshnewsng.com/uploads/images/202312/image_870x_6576e6e1ac416.jpg"
            alt="/"
            className="w-full h-full min-w-[300px] max-h-[200px] object-cover object-top"
          />
          <figcaption className="hidden group-hover:flex justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.5rem] bg-[#ECBD37]/60 transition duration-200">
            <BsPeopleFill size={45} className="mb-12 text-[#fff]" />
            <div className="flex flex-col justify-center w-1/2">
              <p className="text-2xl text-[#0199CC] font-semibold drop-shadow leading-tight">
                Community Opportunity
              </p>
              <Link to="/community">
                <button className="w-fit bg-[#0199CC] font-semibold hover:bg-white text-[#050505] rounded-lg px-3 py-2 mt-2 transition-colors">
                  Read more
                </button>
              </Link>
            </div>
          </figcaption>
          <div className="flex gap-4 justify-center mt-3">
            <BsPeopleFill size={40} className="text-[#ECBD37]" />
            <p className="text-2xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              Community Opportunity
            </p>
          </div>
        </figure>

        <figure className="basis-[45%] md:basis-[22%] group relative hover:bg-white">
          <img
            src="https://freshnewsng.com/uploads/images/202312/image_870x_6576e6e1ac416.jpg"
            alt="/"
            className="w-full h-full min-w-[300px] max-h-[200px] object-cover object-top"
          />
          <figcaption className="hidden group-hover:flex justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.5rem] bg-[#ECBD37]/60 transition duration-200">
            <BsGlobeAsiaAustralia size={45} className="mb-12 text-[#fff]" />
            <div className="flex flex-col justify-center w-1/2">
              <p className="text-2xl text-[#0199CC] font-semibold drop-shadow leading-tight">
                International Opportunity
              </p>
              <Link to="/international">
                <button className="w-fit bg-[#0199CC] font-semibold hover:bg-white text-[#050505] rounded-lg px-3 py-2 mt-2 transition-colors">
                  Read more
                </button>
              </Link>
            </div>
          </figcaption>
          <div className="flex gap-4 justify-center mt-3">
            <BsGlobeAsiaAustralia size={40} className="text-[#ECBD37]" />
            <p className="text-2xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              International Opportunity
            </p>
          </div>
        </figure>
      </div>
    </main>
  );
};

export default OpportunityCards;
