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
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1716119368326/412541c3-d9c0-4658-ad37-dea36258997e.jpeg"
            alt="An Individual dancing at an awareness campaign"
            className="w-full object-cover object-top"
          />
          <figcaption className="hidden group-hover:flex md:justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.9rem] bg-[#ECBD37]/60 transition duration-200">
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
            <p className="text-[1.2rem] sm:text-xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              Individual Opportunity
            </p>
          </div>
        </figure>

        <figure className="group relative hover:bg-white">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1716120531388/9b584610-39c2-4f23-8979-dd82faab82f3.jpeg"
            alt="Business meeting"
            className="w-full object-cover object-top"
          />
          <figcaption className="hidden group-hover:flex md:justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.9rem] bg-[#ECBD37]/60 transition duration-200">
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
            <p className="text-[1.2rem] sm:text-xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              Business Opportunity
            </p>
          </div>
        </figure>

        <figure className="group relative hover:bg-white">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1716129979057/cc881a17-ae8f-4580-921a-f48599a266c7.jpeg"
            alt="Friends making the peace gesture"
            className="w-full object-cover object-top"
          />
          <figcaption className="hidden group-hover:flex md:justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.9rem] bg-[#ECBD37]/60 transition duration-200">
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
            <p className="text-[1.2rem] sm:text-xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              Community Opportunity
            </p>
          </div>
        </figure>

        <figure className="group relative hover:bg-white">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1716130895474/43b4680b-c8f4-4412-90ef-bb3ed56e8585.jpeg"
            alt="Business men and women from every part of the country"
            className="w-full object-cover object-top"
          />
          <figcaption className="hidden group-hover:flex md:justify-center items-center gap-4 absolute inset-x-0 top-0 bottom-[4.9rem] bg-[#ECBD37]/60 transition duration-200">
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
            <p className="text-[1.2rem] sm:text-xl w-1/2 leading-tight hover:text-[#0199CC] transition-all font-semibold">
              International Opportunity
            </p>
          </div>
        </figure>
      </div>
    </main>
  );
};

export default OpportunityCards;
