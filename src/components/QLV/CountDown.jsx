import React from "react";

const CountDown = () => {
  return (
    <main className="bg-[#FCFCFC] text-[#001926] py-[5rem]">
      <h2 className="text-5xl font-bold text-center">
        Hurray! Events holds in
      </h2>
      <div className="flex justify-center items-center gap-4 mt-4">
        <div className="w-[250px] h-[200px] bg-[#001926] text-[#FCFCFC] p-4 flex justify-center items-center flex-col-reverse">
          <h4>Days</h4>
          <p>00</p>
        </div>
        <div className="w-[250px] h-[200px] bg-[#001926] text-[#FCFCFC] p-4 flex justify-center items-center flex-col-reverse">
          <h4>Hours</h4>
          <p>00</p>
        </div>
        <div className="w-[250px] h-[200px] bg-[#001926] text-[#FCFCFC] p-4 flex justify-center items-center flex-col-reverse">
          <h4>Minutes</h4>
          <p>00</p>
        </div>
        <div className="w-[250px] h-[200px] bg-[#001926] text-[#FCFCFC] p-4 flex justify-center items-center flex-col-reverse">
          <h4>Seconds</h4>
          <p>00</p>
        </div>
      </div>
    </main>
  );
};

export default CountDown;
