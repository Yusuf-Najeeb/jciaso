import React from "react";
import { BsQuote } from "react-icons/bs";

const Mission = () => {
  return (
    <section className="p-2 sm:px-8">
      <h1 className="text-[#01A85A] text-center font-bold text-[2rem] title my-4">
        Mission & Vision
      </h1>
      <section className="flex flex-col md:flex-row justify-center lg:justify-between gap-4">
        <div className="sm:w-1/2 flex flex-col gap-4">
          <div className="min-h-[100px] text-center p-2 rounded-lg shadow-lg shadow-[#ECBD37]/30 md:hover:scale-105 transition-all duration-700">
            <h3 className="text-[#328CB1] text-2xl title my-3">Vision</h3>
            <p>Creating value in our environment through focusing on people.</p>
          </div>
          <div className="min-h-[100px] text-center p-2 rounded-lg shadow-lg shadow-[#ECBD37]/30 md:hover:scale-105 transition-all duration-700">
            <h3 className=" text-2xl title my-3">Mission</h3>
            <p>
              To identify young leaders with the intention of providing them
              with leadership development opportunities to discover and develop
              their talent while impacting our immediate environment.
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 relative md:hover:scale-105 transition-all duration-700 rounded-lg shadow-md">
          <BsQuote
            className="hidden md:block text-[#ECBD37] absolute left-4 top-0 -ml-6 -mt-4"
            size={50}
          />
          <h3 className="text-2xl title my-3 mt-6 px-4">Values</h3>
          <p className="py-2 px-4">
            <p>We Believe</p>
            <p>That Faith in God gives meaning and purpose to human lives</p>
            <p>
              That the brotherhood of man transcends the sovereignty of nations
            </p>
            <p>
              That Economic Justice can best be won by free men through free
              enterprise
            </p>
            <p>That Government should be of law, rather than of men</p>
            <p>
              That Earth Great treasure lies in human personality and That{" "}
              <br />
              Service to humanity is the best work of life
            </p>
          </p>
          <BsQuote
            className="hidden md:block text-[#ECBD37] absolute right-4 -bottom-4 -mr-6 -mt-4 origin-center rotate-180"
            size={50}
          />
        </div>
        {/* <div className="border border-[#000] flex flex-col items-center gap-4 p-4 rounded-lg lg:w-[30%]">
          <h3 className="text-[#328CB1] text-[1.4rem]">Values</h3>
          <p>
            <span className="py-2 font-bold text-[#01A85A] ">We Believe</span>
            <br />
            <ul className="flex flex-col items-start gap-2 list-disc px-2 ">
              <li>
                That Faith in God gives meaning and purpose to human lives
              </li>
              <li>
                That the brotherhood of man transcends the sovereignty of
                nations
              </li>
              <li>
                That Economic Justice can best be won by free men through free
                enterprise
              </li>
              <li>That Government should be of law, rather than of men</li>
              <li>That Earth Great treasure lies in human personality and</li>
              <li>That Service to humanity is the best work of life</li>
            </ul>
          </p>
        </div> */}
      </section>
    </section>
  );
};

export default Mission;
