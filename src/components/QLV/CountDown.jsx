import React from "react";

const CountDown = () => {
  return (
    <main className="bg-[#FCFCFC] text-[#001926] pt-4 md:pt-[6rem] pb-8">
      <h2 className="text-2xl md:text-5xl font-bold text-center">
        Hurray! Events holds in
      </h2>

      <div className="flex justify-center items-center gap-2 sm:gap-4 mt-8 px-4">
        <div
          className="min-w-[70px] md:min-w-[200px] bg-[#001926] text-[#FCFCFC] p-2 
        md:py-4 md:px-8 flex justify-center items-center flex-col-reverse"
        >
          <h4 className="text-sm sm:text-3xl sm:uppercase mt-2">Days</h4>
          <p className="text-xl md:text-8xl">00</p>
        </div>
        <span className="md:text-7xl font-bold">:</span>
        <div
          className="min-w-[70px] md:min-w-[200px] bg-[#001926] text-[#FCFCFC] p-2 
        md:py-4 md:px-8 flex justify-center items-center flex-col-reverse"
        >
          <h4 className="text-sm sm:text-3xl sm:uppercase mt-2">Hours</h4>
          <p className="text-xl md:text-8xl">00</p>
        </div>
        <span className="md:text-7xl font-bold">:</span>
        <div
          className="min-w-[70px] md:min-w-[200px] bg-[#001926] text-[#FCFCFC] p-2 
        md:py-4 md:px-8 flex justify-center items-center flex-col-reverse"
        >
          <h4 className="text-sm sm:text-3xl sm:uppercase mt-2">Minutes</h4>
          <p className="text-xl md:text-8xl">00</p>
        </div>
        <span className="sm:text-7xl font-bold">:</span>
        <div
          className="min-w-[70px] md:min-w-[200px] bg-[#001926] text-[#FCFCFC] p-2 
        md:py-4 md:px-8 flex justify-center items-center flex-col-reverse"
        >
          <h4 className="text-sm sm:text-3xl sm:uppercase mt-2">Seconds</h4>
          <p className="text-xl md:text-8xl">00</p>
        </div>
      </div>
    </main>
  );
};

export default CountDown;
