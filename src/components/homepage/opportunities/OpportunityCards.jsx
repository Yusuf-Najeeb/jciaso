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
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1751380669686/d5e2a766-b55a-498e-8015-d01b171b5c82.jpeg"
            alt="An Individual dancing at an awareness campaign"
            className="w-full object-cover object-top h-[200px] max-h-[200px] rounded"
          />
          <figcaption className="hidden group-hover:flex md:justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.2rem] bg-[#ECBD37]/60 transition duration-200 rounded">
            <BsPersonCheckFill size={45} className="mb-12 text-[#fff]" />
            <div className="flex flex-col md:justify-center w-1/2">
              <p className="text-2xl text-[#0199CC] font-semibold drop-shadow leading-tight">
                Individual Development
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
            <p className="text-[1.2rem] sm:text-xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              Individual Development
            </p>
          </div>
        </figure>

        <figure className="group relative hover:bg-white">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1751380711605/466fd094-68d0-4886-a8fb-db0dccad37f6.jpeg"
            alt="Business meeting"
            className="w-full object-cover object-top h-[200px] max-h-[200px] rounded"
          />
          <figcaption className="hidden group-hover:flex md:justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.2rem] bg-[#ECBD37]/60 transition duration-200 rounded">
            <MdBusinessCenter size={45} className="mb-12 text-[#fff]" />
            <div className="flex flex-col md:justify-center w-1/2">
              <p className="text-2xl text-[#0199CC] font-semibold drop-shadow leading-tight">
                Business and Entrepreneurship
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
            <p className="text-[1.2rem] sm:text-xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              Business and Entrepreneurship
            </p>
          </div>
        </figure>

        <figure className="group relative hover:bg-white">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1751380684541/9d8ed593-1c3a-4c70-b00b-c18b51911692.jpeg"
            alt="Friends making the peace gesture"
            className="w-full object-cover object-top h-[200px] max-h-[200px] rounded"
          />
          <figcaption className="hidden group-hover:flex md:justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.2rem] bg-[#ECBD37]/60 transition duration-200 rounded">
            <BsPeopleFill size={45} className="mb-12 text-[#fff]" />
            <div className="flex flex-col md:justify-center w-1/2">
              <p className="text-2xl text-[#0199CC] font-semibold drop-shadow leading-tight">
                Community Action
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
            <p className="text-[1.2rem] sm:text-xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              Community Action
            </p>
          </div>
        </figure>

        <figure className="group relative hover:bg-white">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1751380698503/4515b035-2b67-4c0c-8e6c-6732f85e5bb7.jpeg"
            alt="Business men and women from every part of the country"
            className="w-full object-cover object-top h-[200px] max-h-[200px] rounded"
          />
          <figcaption className="hidden group-hover:flex md:justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.2rem] bg-[#ECBD37]/60 transition duration-200 rounded">
            <BsGlobeAsiaAustralia size={45} className="mb-12 text-[#fff]" />
            <div className="flex flex-col md:justify-center w-1/2">
              <p className="text-2xl text-[#0199CC] font-semibold drop-shadow leading-tight">
                International Cooperation
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
            <p className="text-[1.2rem] sm:text-xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              International Cooperation
            </p>
          </div>
        </figure>
      </div>
    </main>
  );
};

export default OpportunityCards;
