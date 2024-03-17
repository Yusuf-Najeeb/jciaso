import React from "react";

const GalleryHero = () => {
  return (
    <section className="bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e] h-[50vh]  w-full relative mb-10">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="https://res.cloudinary.com/duw4jtxls/image/upload/v1710684691/IMG-20240317-WA0030_fvgiop.jpg"
        alt=""
      />
      <div className=" h-[50vh] flex flex-col justify-center items-start  text-[#FFF]  px-4 lg:px-16">
        <h1 className=" relative text-2xl sm:text-4xl font-semibold">
          Gallery
        </h1>
        <p className="relative sm:w-[40%] my-2 text-sm sm:text-[1.2rem]">
          A glimpse into our memory lane
        </p>
      </div>
    </section>
  );
};

export default GalleryHero;
