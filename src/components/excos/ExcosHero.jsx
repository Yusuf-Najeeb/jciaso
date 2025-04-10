import React from "react";

const ExcosHero = () => {
  return (
    <section className="bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e] h-[50vh]  w-full relative">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710340592474/b4bac391-cd50-4137-b8a1-c25233f00593.jpeg"
        alt=""
      />
      <div className=" h-[50vh] flex flex-col justify-center items-start  text-[#FFF]  px-4 lg:px-16">
        <h1 className=" relative text-4xl lg:text-6xl font-semibold">
          Our Team
        </h1>
        <p className="relative lg:w-[40%] my-2 text-[1.2rem]">
          Meet Our Founding Leaders, the Executives, Board of Directors and our
          amazing past presidents and members making the organization to wax
          stronger year on year
        </p>
      </div>
    </section>
  );
};

export default ExcosHero;
