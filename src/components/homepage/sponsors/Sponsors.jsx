import React from "react";

const Sponsors = () => {
  return (
    <div className="flex flex-col px-2 py-4 mt-6 lg:px-10 lg:py-32 lg:gap-16">
      <h1 className="title font-bold text-center text-[1.8rem] lg:text-[2.5rem]">
        Our Partners
      </h1>
      <section className="flex flex-wrap gap-8 overflow-x-scroll sm:overflow-hidden md:grid sm:grid-cols-2 lg:grid-cols-4 md:gap-4 md:place-content-center md:place-items-center justify-center items-center lg:gap-16 text-semibold text-[1.2rem] p-3 sm:px-8 sm:py-4">
        <div className="flex flex-col gap-2 items-center">
          <div className="min-w-[100px] min-h-[100px] bg-white shadow rounded sm:sm:min-w-[300px] max-w-[300px] sm:sm:min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-105 group">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708728628410/8b28aa1f-9214-4f69-a711-7ff593898847.png"
              alt="SEC"
              className=""
            />
          </div>
          <h3 className="text-12 font-semibold text-center">
            Secondary School Board
          </h3>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className=" min-w-[100px] min-h-[100px] bg-white shadow rounded sm:min-w-[300px] max-w-[300px] sm:min-h-[200px] max-h-[200px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-105">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708729111677/49493e3c-ebf3-4702-a1b0-1f34d4cf7b30.jpeg"
              alt="SamVic"
              className="w-[65%] "
            />
          </div>
          <h3 className=" transition text-16 font-semibold  ">Samvic</h3>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className=" min-w-[100px] min-h-[100px] bg-white shadow rounded sm:min-w-[300px] max-w-[300px] sm:min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-105">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708729856496/88d7a496-5329-4566-bf38-6515cd60256a.jpeg"
              alt="Transcorp"
              className=""
            />
          </div>
          <h3 className=" transition text-16 font-semibold ">
            Transcorp Hilton
          </h3>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className=" min-w-[100px] min-h-[100px] bg-white shadow rounded sm:min-w-[300px] max-w-[300px] sm:min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-105">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708730003675/179feb7f-757d-41cb-a7a2-92a1db275259.png"
              alt="Boff"
              className=""
            />
          </div>
          <h3 className=" transition text-16 font-semibold ">
            Boff & Company Insurance
          </h3>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center justify-center min-w-[100px] min-h-[100px] bg-white shadow rounded sm:min-w-[300px] max-w-[300px] sm:min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-105">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708730129102/2a211c3a-0cf1-4985-94fd-8dc32bd15697.jpeg"
              alt="Virtusso"
              className="w-[90%] "
            />
          </div>
          <h3 className="font-bold text-16 text-center">
            Virtusso Insurance Broker's Limited
          </h3>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center justify-center min-w-[100px] min-h-[100px] bg-white shadow rounded sm:min-w-[300px] max-w-[300px] sm:min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-105">
            <img
              src="https://res.cloudinary.com/duw4jtxls/image/upload/v1710667121/IMG-20240317-WA0021_lwt3ku.jpg"
              alt="XOA"
              className="w-[90%] "
            />
          </div>
          <h3 className="font-bold text-16 text-center">
            XOA solution limited
          </h3>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className=" min-w-[100px] min-h-[100px] bg-white shadow rounded sm:min-w-[300px] max-w-[300px] sm:min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-105">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708729656686/7ecc65ab-579e-4631-a604-538149e0a2ad.jpeg"
              alt="Studio 24"
              className="w-[70%] "
            />
          </div>
          <h3 className=" transition text-16 font-semibold ">
            Studio 24 photography
          </h3>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className=" min-w-[100px] min-h-[100px] bg-white shadow rounded sm:min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-105">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708728942890/fe6f7c3b-6f67-4060-a4b7-d28d73efbcdc.jpeg"
              alt="TIIDELab"
              className=""
            />
          </div>
          <h3 className=" transition text-16 font-semibold text-center">
            TIIDELab
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
