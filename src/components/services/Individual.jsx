import React from "react";

const Individual = () => {
  return (
    <main>
      <div className="bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e] h-[50vh]  w-full relative">
        <img
          className="w-full h-full object-cover absolute mix-blend-overlay"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710259524145/6f17457b-5171-4f60-a119-fec84a0a16a8.jpeg"
          alt="Group Photograph"
        />
        <div className="h-[50vh] flex flex-col text-center justify-center items-center text-[#FFF] px-4 lg:px-16">
          <h1 className="relative sm:text-2xl lg:text-4xl font-semibold">
            Community Opportunity
          </h1>
          <p className="relative my-2 sm:text-[1.2rem]">
            We are committed and rooted in our Community goals and values...
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-8 p-4 md:px-12">
        <div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex w-10 h-1 bg-gradient-to-r from-[#0199CC] to-[#ECBD37] text-transparent"></div>
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Our service to Humanity
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
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710259524145/6f17457b-5171-4f60-a119-fec84a0a16a8.jpeg"
            alt="Group Photograph"
          />
        </div>
      </div>
    </main>
  );
};

export default Individual;
