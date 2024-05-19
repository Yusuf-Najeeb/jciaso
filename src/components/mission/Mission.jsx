import React from "react";
import { BsQuote } from "react-icons/bs";

const Mission = () => {
  return (
    <section className="p-2 sm:px-8 md:px-16 my-12">
      <h1 className="text-[#050505] font-bold text-2xl sm:text-3xl title text-center mb-12">
        Mission, <span className="text-[#0199CC]"> Vision & </span> Value.
      </h1>
      <section className="flex flex-col md:flex-row justify-center lg:justify-between gap-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center min-h-[200px] p-2 rounded-lg shadow-lg shadow-[#ECBD37]/30">
            <h3 className="text-[#0199CC] text-2xl title my-3">Vision</h3>
            <p className="sm:text-[1.2rem] text-center">
              Creating value in our environment through focusing on people.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center min-h-[200px] p-2 rounded-lg shadow-lg shadow-[#ECBD37]/30">
            <h3 className=" text-2xl title my-3 text-[#0199CC]">Mission</h3>
            <p className="sm:text-[1.2rem] text-center">
              To identify young leaders with the intention of providing them
              with leadership development opportunities to discover and develop
              their talent while impacting our immediate environment.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 relative rounded-lg shadow-md bg-[#0199CC] text-white pb-4">
          <BsQuote
            className="hidden md:block text-[#ECBD37] absolute left-4 top-0 -ml-6 -mt-4"
            size={50}
          />
          <h3 className="text-2xl title my-3 mt-6 px-4 text-center">
            JCI Values Creed
          </h3>
          <p className="py-2 px-4 text-left sm:text-[1.2rem]">
            <p>We Believe...</p>
            <p>That Faith in God gives meaning and purpose to human lives.</p>
            <p>
              That the brotherhood of man transcends the sovereignty of nations.
            </p>
            <p>
              That Economic Justice can best be won by free men through free
              enterprise.
            </p>
            <p>That Government should be of law, rather than of men.</p>
            <p>
              That Earth Great treasure lies in human personality, and That{" "}
              <br />
              Service to humanity is the best work of life.
            </p>
          </p>
          <BsQuote
            className="hidden md:block text-[#ECBD37] absolute right-4 -bottom-4 -mr-6 -mt-4 origin-center rotate-180"
            size={50}
          />
        </div>
      </section>
    </section>
  );
};

export default Mission;
