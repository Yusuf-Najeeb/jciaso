import React from "react";

const CountDown = () => {
  return (
    <main className="bg-[#FCFCFC] text-[#001926] pt-[6rem] pb-8">
      <h2 className="text-5xl font-bold text-center">
        Hurray! Events holds in
      </h2>
      <div className="flex justify-center items-center gap-4 mt-8">
        <div className="w-[250px] h-[200px] bg-[#001926] text-[#FCFCFC] p-4 flex justify-center items-center flex-col-reverse">
          <h4 className="text-3xl uppercase mt-2">Days</h4>
          <p className="text-8xl">00</p>
        </div>
        <span className="text-7xl font-bold">:</span>
        <div className="w-[250px] h-[200px] bg-[#001926] text-[#FCFCFC] p-4 flex justify-center items-center flex-col-reverse">
          <h4 className="text-3xl uppercase mt-2">Hours</h4>
          <p className="text-8xl">00</p>
        </div>
        <span className="text-7xl font-bold">:</span>
        <div className="w-[250px] h-[200px] bg-[#001926] text-[#FCFCFC] p-4 flex justify-center items-center flex-col-reverse">
          <h4 className="text-3xl uppercase mt-2">Minutes</h4>
          <p className="text-8xl">00</p>
        </div>
        <span className="text-7xl font-bold">:</span>
        <div className="w-[250px] h-[200px] bg-[#001926] text-[#FCFCFC] p-4 flex justify-center items-center flex-col-reverse">
          <h4 className="text-3xl uppercase mt-2">Seconds</h4>
          <p className="text-8xl">00</p>
        </div>
      </div>
    </main>
  );
};

export default CountDown;
