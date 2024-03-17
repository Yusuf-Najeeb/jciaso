import React from "react";
const EventsHero = () => {
  return (
    <section className="bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e] h-[50vh]  w-full relative">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710275231153/8fdddda5-2c7f-4b7d-879e-71032cf98c2e.jpeg"
        alt=""
      />
      <div className=" h-[50vh] flex flex-col justify-center items-start  text-[#FFF]  px-4 lg:px-16">
        <h1 className=" relative text-2xl sm:text-4xl font-semibold">
          Events & Programs
        </h1>
        <p className="relative sm:w-[40%] my-2 text-sm sm:text-[1.2rem]">
          Keep up with our upcoming, ongoing and past event to keep up with the
          Jci community.
        </p>
      </div>
    </section>
  );
};

export default EventsHero;
