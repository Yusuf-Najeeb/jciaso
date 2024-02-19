import React from "react";
const EventsHero = () => {
  return (
    <section className="bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e] h-[50vh]  w-full relative">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="https://res.cloudinary.com/duw4jtxls/image/upload/v1706621248/map_zqjsof.jpg"
        alt=""
      />
      <div className=" h-[50vh] flex flex-col justify-center items-start  text-[#FFF]  px-4 lg:px-16">
        <h1 className=" relative text-6xl font-semibold">Events Placeholder</h1>
        <p className="relative w-[40%] my-2 text-[1.2rem]">
          Keep up with our upcoming, ongoing and past event to keep up with the
          Jci community.
        </p>
      </div>
    </section>
  );
};

export default EventsHero;
