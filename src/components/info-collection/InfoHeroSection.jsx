import React from "react";

const InfoHeroSection = () => {
  return (
    <section className="bg-black/70 h-[50vh]  w-full relative">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="https://res.cloudinary.com/duw4jtxls/image/upload/v1707657147/Frame_181_x6gxiz.png"
        alt=""
      />
      <div className=" h-[50vh] flex flex-col justify-center items-start  text-[#FFF]  px-4 lg:px-16">
        <h1 className=" relative text-6xl font-semibold"></h1>
      </div>
    </section>
  );
};

export default InfoHeroSection;
