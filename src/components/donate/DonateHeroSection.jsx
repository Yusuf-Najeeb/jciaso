import React from "react";

const DonateHeroSection = () => {
  return (
    <section className="bg-black/70 h-[50vh]  w-full relative">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1707196654768/a96d48b5-a609-475b-9d8b-c14c2a6012e8.jpeg"
        alt=""
      />
      <div className=" h-[50vh] flex flex-col justify-center items-start  text-[#FFF]  px-4 lg:px-16">
        <h1 className=" relative text-6xl font-semibold">Donate</h1>
        <p className="relative lg:w-[40%] my-2 text-[1.2rem]">
          Support the JCI cause, touch lives, make the world a better and
          sweeter place.
        </p>
      </div>
    </section>
  );
};

export default DonateHeroSection;
