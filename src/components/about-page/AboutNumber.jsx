import React from "react";
import CountUp from "react-countup";

const AboutNumber = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-center items-center lg:items-start gap-4 sm:gap-10 p-2 sm:p-8 text-center">
        <h1 className="sm:text-3xl text-2xl title font-bold sm:text-left ">
          Our <span className="text-[#0199CC]">Accomplishments</span>
        </h1>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-14 text-white items-center text-center">
          <div className="flex flex-col justify-center items-center bg-[#ecbd37] drop-shadow-lg py-12 rounded-md w-full">
            <b className="text-2xl md:text-4xl font-extrabold ">
              {" "}
              <CountUp start={0} end={70} duration={8} />
              <sup> +</sup>
            </b>
            <h3 className="sm:text-2xl font-normal mb-2">Members</h3>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#ecbd37] drop-shadow-lg py-12 rounded-md w-full">
            <b className="text-2xl md:text-4xl font-extrabold ">
              {" "}
              <CountUp start={0} end={100} duration={9} />
              <sup> +</sup>
            </b>
            <h3 className="sm:text-2xl font-normal mb-2">Project Executed</h3>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#ecbd37] drop-shadow-lg py-12  rounded-md w-full">
            <b className="text-2xl md:text-4xl font-extrabold ">
              {" "}
              <CountUp start={0} end={20} duration={7} />
              <sup> +</sup>
            </b>
            <h3 className="sm:text-2xl font-normal mb-2">
              Years of Experience
            </h3>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#ecbd37] drop-shadow-lg py-12 rounded-md w-full">
            <b className="text-2xl md:text-4xl font-extrabold ">
              <CountUp start={0} end={10} duration={9} />
              <sup> +</sup>
            </b>
            <h3 className="sm:text-2xl font-normal mb-2 px-2">
              Community Impacts
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNumber;
