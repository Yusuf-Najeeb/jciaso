import React from "react";
import CountUp from "react-countup";

const AboutNumber = () => {
  return (
    <section className="flex justify-center">
      <div className=" flex flex-col justify-center items-start gap-10 p-8 text-center">
        <h1 className="text-3xl title font-bold ">Some of our numbers</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 text-white">
          <div className="p-6 bg-gradient-to-r from-[#313C45] via-[#3E343C] to-[#432E34] py-12 rounded-md shadow-md">
            <b className="text-5xl font-extrabold ">
              {" "}
              <CountUp start={0} end={1300} duration={5} />+
            </b>
            <h3 className="text-xl font-bold mb-2">Members</h3>
          </div>

          <div className="p-4 bg-gradient-to-r from-[#313C45] via-[#3E343C] to-[#432E34] py-12 rounded-md shadow-md">
            <b className="text-5xl font-extrabold ">
              {" "}
              <CountUp start={0} end={300} duration={4} />+
            </b>
            <h3 className="text-xl font-bold mb-2">Excos</h3>
          </div>

          <div className="p-4 bg-gradient-to-r from-[#313C45] via-[#3E343C] to-[#432E34] py-12  rounded-md shadow-md">
            <b className="text-5xl font-extrabold ">
              {" "}
              <CountUp start={0} end={27} duration={7} />+
            </b>
            <h3 className="text-xl font-bold mb-2">Years of Experience</h3>
          </div>

          <div className="p-4 bg-gradient-to-r from-[#313C45] via-[#3E343C] to-[#432E34] py-12 bg-white rounded-md shadow-md">
            <b className="text-5xl font-extrabold ">
              {" "}
              <CountUp start={0} end={100} duration={5} />%
            </b>
            <h3 className="text-xl font-bold mb-2">Professionalism</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNumber;
