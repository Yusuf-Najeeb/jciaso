import React from "react";

const AboutHeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e] h-[50vh]  w-full relative mt-12">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="https://res.cloudinary.com/duw4jtxls/image/upload/v1706621248/map_zqjsof.jpg"
        alt=""
      />
      <div className=" h-[50vh] flex flex-col justify-center items-start  text-[#FFF]  px-4 lg:px-16">
        <h1 className=" relative  text-[3rem]">About Us</h1>
        <p className="relative text-[1.5rem] sm:text-[1rem]">
          Learn a little about us, our organisation, ours goals and values
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
