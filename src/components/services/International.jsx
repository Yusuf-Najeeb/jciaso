import React, { useEffect } from "react";

const International = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className="bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e] h-[50vh]  w-full relative">
        <img
          className="w-full h-full object-cover absolute mix-blend-overlay"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1716130895474/43b4680b-c8f4-4412-90ef-bb3ed56e8585.jpeg"
          alt="Group Photograph"
        />
        <div className="h-[50vh] flex flex-col text-center justify-center items-center text-[#FFF] px-4 lg:px-16">
          <h1 className="relative sm:text-2xl lg:text-4xl font-semibold">
            International Opportunity
          </h1>
          <p className="relative my-2 sm:text-[1.2rem]">
            Break down barriers and connect individuals across borders,
            fostering global collaboration and opportunity
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-8 p-4 md:px-12">
        <div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex w-10 h-[2px] bg-gradient-to-r from-[#0199CC] to-[#ECBD37] text-transparent"></div>
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Expanding horizons
            </h3>
          </div>
          <p className="sm:text-[1rem] mb-4 sm:mb-0">
            Joining the JCI Aso network connects you to a vibrant international
            community committed to driving global change. As a member, you'll
            engage with like-minded individuals and organizations from around
            the world, collaborating on projects that tackle pressing global
            challenges. Through international events, exchanges, and
            initiatives, you'll gain exposure to diverse perspectives and
            innovative solutions. JCI Aso provides a unique platform for
            cultural exchange, professional growth, and the opportunity to make
            a global impact. Embrace this chance to expand your horizons, build
            international relationships, and contribute to meaningful global
            initiatives with JCI Aso.
          </p>
        </div>
        <div className="">
          <img
            className="w-full lg:min-w-[600px] lg:min-h-[300px] lg:max-h-[400px] rounded-lg"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1716130895474/43b4680b-c8f4-4412-90ef-bb3ed56e8585.jpeg"
            alt="Group Photograph"
          />
        </div>
      </div>
    </main>
  );
};

export default International;
