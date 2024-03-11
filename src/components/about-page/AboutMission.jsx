import React from "react";
import Mission from "../mission/Mission";

const AboutMission = () => {
  return (
    <section className="px-6 my-20 pb-[94px] lg:px-16">
      <h1 className="text-[#01A85A] font-bold text-[24px] sm:text-[48px] title text-center">
        Mission, <span className="text-sky-500"> Vision & </span> Value.
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-[51px] sm:mt-[94px] mt-[44px]">
        <div className="flex flex-col justify-center items-center gap-12 sm:ml-[68px] ml-4">
          <div className="w-full sm:w-[652px] mx-8 sm:h-[427px] h-[327px] shadow-lg text-center rounded-md">
            <h1 className="mt-10 text-[48px]">Vision</h1>
            <p className="text-[20px] sm:text-[24px] w-full sm:w-[592px] mt-10 mx-[30px]">
              Creating value in our environment through focusing on people
            </p>
          </div>

          <div className="w-full sm:w-[652px] h-[427px] shadow-lg text-center rounded-md">
            <h1 className="mt-10 text-[48px]">Mission</h1>
            <p className="sm:text-[24px] text-[20px]  w-full sm:w-[592px] mt-10 mx-[30px]">
              To identify young leaders with the intention of providing them
              with leadership development opportunities to discover and develop
              their talent while impacting our immediate environment.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-[550px] h-[897px] sm:mr-[119px] mr-[12px] bg-[#4081B4] text-white text-center rounded-md shadow-lg">
          <h1 className="mt-10 text-[48px]">Values</h1>
          <p className="text-[24px] w-full sm:w-[494px] mt-10 mx-[30px]">
            We Believe <br /> That Faith in God gives meaning and purpose to
            human lives <br /> That the brotherhood of man transcends the
            sovereignty of nations <br /> That Economic Justice can best be won
            by free men through free enterprise <br /> That Government should be
            of law, rather than of men <br /> That Earth Great treasure lies in
            human personality and <br /> That Service to humanity is the best
            work of life
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
