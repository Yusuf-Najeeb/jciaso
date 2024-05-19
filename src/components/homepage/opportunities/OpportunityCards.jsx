import React, { useEffect } from "react";
import {
  BsGlobeAsiaAustralia,
  BsPeopleFill,
  BsPersonCheckFill,
} from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { Link } from "react-router-dom";

const OpportunityCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="p-2 md:px-8 md:py-12 bg-gray-50">
      <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <figure className="group relative hover:bg-white">
          <img
            src="https://freshnewsng.com/uploads/images/202312/image_870x_6576e6e1ac416.jpg"
            alt="/"
            className="w-full object-cover object-top"
          />
          <figcaption className="hidden group-hover:flex md:justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.5rem] bg-[#ECBD37]/60 transition duration-200">
            <BsPersonCheckFill size={45} className="mb-12 text-[#fff]" />
            <div className="flex flex-col md:justify-center w-1/2">
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
          <div className="flex gap-4 mt-3">
            <BsPersonCheckFill size={40} className="text-[#ECBD37]" />
            <p className="text-[1.2rem] sm:text-2xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              Individual Opportunity
            </p>
          </div>
        </figure>

        <figure className="group relative hover:bg-white">
          <img
            src="https://freshnewsng.com/uploads/images/202312/image_870x_6576e6e1ac416.jpg"
            alt="/"
            className="w-full object-cover object-top"
          />
          <figcaption className="hidden group-hover:flex md:justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.5rem] bg-[#ECBD37]/60 transition duration-200">
            <MdBusinessCenter size={45} className="mb-12 text-[#fff]" />
            <div className="flex flex-col md:justify-center w-1/2">
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
          <div className="flex gap-4 mt-3">
            <MdBusinessCenter size={40} className="text-[#ECBD37]" />
            <p className="text-[1.2rem] sm:text-2xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              Business Opportunity
            </p>
          </div>
        </figure>

        <figure className="group relative hover:bg-white">
          <img
            src="https://freshnewsng.com/uploads/images/202312/image_870x_6576e6e1ac416.jpg"
            alt="/"
            className="w-full object-cover object-top"
          />
          <figcaption className="hidden group-hover:flex md:justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.5rem] bg-[#ECBD37]/60 transition duration-200">
            <BsPeopleFill size={45} className="mb-12 text-[#fff]" />
            <div className="flex flex-col md:justify-center w-1/2">
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
          <div className="flex gap-4 mt-3">
            <BsPeopleFill size={40} className="text-[#ECBD37]" />
            <p className="text-[1.2rem] sm:text-2xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              Community Opportunity
            </p>
          </div>
        </figure>

        <figure className="group relative hover:bg-white">
          <img
            src="https://freshnewsng.com/uploads/images/202312/image_870x_6576e6e1ac416.jpg"
            alt="/"
            className="w-full object-cover object-top"
          />
          <figcaption className="hidden group-hover:flex md:justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.5rem] bg-[#ECBD37]/60 transition duration-200">
            <BsGlobeAsiaAustralia size={45} className="mb-12 text-[#fff]" />
            <div className="flex flex-col md:justify-center w-1/2">
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
          <div className="flex gap-4 mt-3">
            <BsGlobeAsiaAustralia size={40} className="text-[#ECBD37]" />
            <p className="text-[1.2rem] sm:text-2xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              International Opportunity
            </p>
          </div>
        </figure>
      </div>
    </main>
  );
};

export default OpportunityCards;
