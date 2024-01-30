import React from "react";

const AboutNumbers = () => {
  return (
    <>
      <section>
        <h1 className="p-4 title">
          Some of our <span className="text-sky-500">Numbers</span>
        </h1>

        <div className="flex p-4 gap-6 min-w-full">
          <div className="w-40 h-40 rounded-lg bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e]"></div>

          <div className="w-40 4-40 m-auto bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e]"></div>

          <div className="w-40 h-40 rounded-lg bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e]"></div>
        </div>
      </section>
    </>
  );
};

export default AboutNumbers;
