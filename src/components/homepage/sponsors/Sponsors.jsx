import React from "react";

const Sponsors = () => {
  return (
    <div className=" flex flex-col px-6 py-4 mt-6 lg:px-10 lg:py-32 lg:gap-16 ">
      <h1 className=" title font-bold text-center text-[1.8rem] lg:text-[2.5rem]">
        Our Partners
      </h1>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 place-content-center place-items-center justify-center items-center lg:gap-16">
        <div className="relative flex items-center justify-center bg-white shadow rounded min-w-[300px] max-w-[300px] min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-110">
          <h3 className="absolute flex items-center justify-center inset-0 bg-blue-400/20">
            Sponsor Name
          </h3>
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708728628410/8b28aa1f-9214-4f69-a711-7ff593898847.png"
            alt="SEC"
            className=""
          />
        </div>
        <div className="flex items-center justify-center bg-white shadow rounded min-w-[300px] max-w-[300px] min-h-[200px] max-h-[200px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-110">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708729111677/49493e3c-ebf3-4702-a1b0-1f34d4cf7b30.jpeg"
            alt="SamVic"
            className="w-[65%] "
          />
        </div>
        <div className="flex items-center justify-center bg-white shadow rounded min-w-[300px] max-w-[300px] min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-110">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708729856496/88d7a496-5329-4566-bf38-6515cd60256a.jpeg"
            alt="Transcorp"
            className=""
          />
        </div>
        <div className="flex items-center justify-center bg-white shadow rounded min-w-[300px] max-w-[300px] min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-110">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708730003675/179feb7f-757d-41cb-a7a2-92a1db275259.png"
            alt="Boff"
            className=""
          />
        </div>
        <div className="flex items-center justify-center bg-white shadow rounded min-w-[300px] max-w-[300px] min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-110">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708730129102/2a211c3a-0cf1-4985-94fd-8dc32bd15697.jpeg"
            alt="Virtusso"
            className="w-[90%] "
          />
        </div>
        <div className="flex items-center justify-center bg-white shadow rounded min-w-[300px] max-w-[300px] min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-110">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708729656686/7ecc65ab-579e-4631-a604-538149e0a2ad.jpeg"
            alt="Studio 24"
            className="w-[70%] "
          />
        </div>
        <div className="flex items-center justify-center bg-white shadow rounded min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-110">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708728942890/fe6f7c3b-6f67-4060-a4b7-d28d73efbcdc.jpeg"
            alt="TIIDELab"
            className=""
          />
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
