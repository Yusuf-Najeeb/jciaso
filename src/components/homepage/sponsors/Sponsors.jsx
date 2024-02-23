import React from "react";

const Sponsors = () => {
  return (
    <div className=" flex flex-col  px-6 py-4 mt-6 lg:px-10 lg:py-32 lg:gap-16 ">
      <h1 className=" title font-bold text-center text-[1.8rem] lg:text-[2.5rem]">
        Our Partners
      </h1>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 place-content-center place-items-center justify-center items-center lg:gap-16">
        <div className="bg-white shadow min-h-[200px] max-h-[250px]">
          <img
            src="https://res.cloudinary.com/duw4jtxls/image/upload/v1706450578/IMG-20240128-WA0032_oztynh.jpg"
            alt="SEC"
            className="w-full object-contain object-center"
          />
        </div>
        <div className="bg-white shadow min-h-[200px] max-h-[250px]">
          <img
            src="https://res.cloudinary.com/duw4jtxls/image/upload/v1706450579/IMG-20240128-WA0034_ciq8jr.jpg"
            alt="SamVic"
            className="w-full object-contain object-center"
          />
        </div>
        <div className="bg-white shadow min-h-[200px] max-h-[250px]">
          <img
            src="https://res.cloudinary.com/duw4jtxls/image/upload/v1706450579/IMG-20240128-WA0030_jjafub.jpg"
            alt="Transcorp"
            className="w-full object-contain object-center"
          />
        </div>
        <div className="bg-white shadow min-h-[200px] max-h-[250px]">
          <img
            src="https://res.cloudinary.com/duw4jtxls/image/upload/v1706450580/IMG-20240128-WA0028_njsiwy.jpg"
            alt="Boff"
            className="w-full object-contain object-center"
          />
        </div>
        <div className="bg-white shadow min-h-[200px] max-h-[250px]">
          <img
            src="https://res.cloudinary.com/duw4jtxls/image/upload/v1706450580/IMG-20240128-WA0031_d3wrlb.jpg"
            alt="Virtusso"
            className="w-full object-contain object-center"
          />
        </div>
        <div className="bg-white shadow min-h-[200px] max-h-[250px]">
          <img
            src="https://res.cloudinary.com/duw4jtxls/image/upload/v1706450581/IMG-20240128-WA0033_usqfj8.jpg"
            alt="Studio 24"
            className="w-full object-contain object-center"
          />
        </div>
        <div className="bg-white shadow min-h-[200px] max-h-[250px]">
          <img
            src="https://res.cloudinary.com/duw4jtxls/image/upload/v1706450584/IMG-20240128-WA0029_euimvo.jpg"
            alt="TIIDELab"
            className="w-full object-contain object-center"
          />
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
