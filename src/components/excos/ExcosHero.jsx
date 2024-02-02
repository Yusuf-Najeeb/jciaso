import React from "react";

const ExcosHero = () => {
  return (
    <section className="bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e] h-[50vh]  w-full relative mt-12">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706698352739/e0e0e4a7-221b-4d2b-af6b-073a4d29be91.jpeg"
        alt=""
      />
      <div className=" h-[50vh] flex flex-col justify-center items-start  text-[#FFF]  px-4 lg:px-16">
        <h1 className=" relative  text-[3rem]">Execs and Members</h1>
        <p className="relative text-[1.5rem]">
          Meet our able management and the people who make our Institution feel
          like home.
        </p>
      </div>
    </section>
  );
};

export default ExcosHero;
