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
            Being part of the JCI Aso network is more than just membership; it's
            an opportunity to belong to a global community dedicated to creating
            positive change. JCI provides a collaborative platform where
            individuals and organizations can unite, share ideas, and
            collectively address societal challenges. Through JCI Aso events,
            projects, and initiatives, the community actively contributes to
            building a better world, fostering a spirit of interconnectedness
            and shared responsibility.
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
