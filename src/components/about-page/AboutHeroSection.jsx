import React from "react";

const AboutHeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e] h-[50vh]  w-full relative">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="https://res.cloudinary.com/duw4jtxls/image/upload/v1710168643/AboutFrame_npz6xl.png"
        alt=""
      />
      <div className=" h-[50vh] flex flex-col justify-center items-start  text-[#FFF]  px-4 lg:px-16">
        <h1 className=" relative text-4xl lg:text-6xl font-semibold">
          About Us
        </h1>
        <p className="relative lg:w-[40%] my-2 text-[1.2rem]">
          Learn a little about us, our organisation, ours goals and values
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
