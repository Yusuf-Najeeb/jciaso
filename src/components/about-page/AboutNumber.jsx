import React from "react";

const AboutNumber = () => {
  return (
    <section className="flex justify-center">
      <div className=" flex flex-col justify-center items-start gap-10 p-8 text-center">
        <h1 className="text-3xl title font-bold ">Some of our numbers</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 text-white">
          <div className="p-6 bg-gradient-to-r from-[#313C45] via-[#3E343C] to-[#432E34] py-12 rounded-md shadow-md">
            <b className="text-5xl font-extrabold "> 4000+</b>
            <h3 className="text-xl font-bold mb-2">Members</h3>
          </div>

          <div className="p-4 bg-gradient-to-r from-[#313C45] via-[#3E343C] to-[#432E34] py-12 rounded-md shadow-md">
            <b className="text-5xl font-extrabold "> 500+</b>
            <h3 className="text-xl font-bold mb-2">Excos</h3>
          </div>

          <div className="p-4 bg-gradient-to-r from-[#313C45] via-[#3E343C] to-[#432E34] py-12  rounded-md shadow-md">
            <b className="text-5xl font-extrabold "> 500+</b>
            <h3 className="text-xl font-bold mb-2">Years of Experience</h3>
          </div>

          <div className="p-4 bg-gradient-to-r from-[#313C45] via-[#3E343C] to-[#432E34] py-12 bg-white rounded-md shadow-md">
            <b className="text-5xl font-extrabold "> 100%</b>
            <h3 className="text-xl font-bold mb-2">Professionalism</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNumber;
