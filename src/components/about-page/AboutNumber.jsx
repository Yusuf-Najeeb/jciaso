import React from "react";
import CountUp from "react-countup";

const AboutNumber = () => {
  return (
    <section className="flex justify-center">
      <div className=" flex flex-col justify-center items-center lg:items-start gap-10 p-8 text-center">
        <h1 className="sm:text-3xl text-2xl title font-bold sm:text-left ">
          Our Accomplishments
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 text-white items-center text-center">
          <div className="p-6 bg-[#20b4e3] shadow-lg py-12 rounded-md w-full">
            <b className="text-5xl font-extrabold ">
              {" "}
              <CountUp start={0} end={70} duration={6} />+
            </b>
            <h3 className="text-xl font-bold mb-2">Members</h3>
          </div>

          <div className="p-4 bg-[#20b4e3] shadow-lg py-12 rounded-md w-full">
            <b className="text-5xl font-extrabold ">
              {" "}
              <CountUp start={0} end={100} duration={7} />+
            </b>
            <h3 className="text-xl font-bold mb-2">Excos</h3>
          </div>

          <div className="p-4 bg-[#20b4e3] shadow-lg py-12  rounded-md w-full">
            <b className="text-5xl font-extrabold ">
              {" "}
              <CountUp start={0} end={20} duration={7} />+
            </b>
            <h3 className="text-xl font-bold mb-2">Years of Experience</h3>
          </div>

          <div className="p-4 bg-[#20b4e3] shadow-lg py-12 rounded-md w-full">
            <b className="text-5xl font-extrabold ">
              {" "}
              <CountUp start={0} end={10} duration={5} />%
            </b>
            <h3 className="text-xl font-bold mb-2">Professionalism</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNumber;
