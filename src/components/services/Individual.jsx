import React, { useEffect } from "react";

const Individual = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className="bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e] h-[50vh]  w-full relative">
        <img
          className="w-full h-full object-cover absolute mix-blend-overlay"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1716119368326/412541c3-d9c0-4658-ad37-dea36258997e.jpeg"
          alt="Group Photograph"
        />
        <div className="h-[50vh] flex flex-col text-center justify-center items-center text-[#FFF] px-4 lg:px-16">
          <h1 className="relative sm:text-2xl lg:text-4xl font-semibold">
            Individual Opportunity
          </h1>
          <p className="relative my-2 sm:text-[1.2rem]">
            At JCI Aso, we are dedicated to empowering each individual to
            achieve their personal goals, recognizing that their success
            contributes to our collective excellence...
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-8 p-4 md:px-12">
        <div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex w-10 h-[2px] bg-gradient-to-r from-[#0199CC] to-[#ECBD37] text-transparent"></div>
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Empowering Personal Growth
            </h3>
          </div>
          <p className="sm:text-[1rem] mb-4 sm:mb-0">
            Becoming part of the JCI Aso network opens doors to exceptional
            personal and professional development opportunities. As a member,
            you'll join a dynamic community dedicated to fostering positive
            change and innovation. Engage with leaders and peers in various
            initiatives and projects that not only address societal challenges
            but also enhance your skills and broaden your horizons. JCI Aso
            events and activities provide a platform for networking, learning,
            and contributing to impactful causes. This journey offers you the
            chance to grow, lead, and make a meaningful difference in the world.
            Embrace this unique opportunity to elevate yourself and your
            community with JCI Aso.
          </p>
        </div>
        <div className="">
          <img
            className="w-full lg:min-w-[600px] lg:min-h-[300px] lg:max-h-[400px] rounded-lg"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1716120070537/1cac1fd5-b6a7-4918-a4bc-1c16d2b113af.jpeg"
            alt="Friends at a parade"
          />
        </div>
      </div>
    </main>
  );
};

export default Individual;
