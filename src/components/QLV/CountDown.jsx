import { useState, useEffect } from "react";

function CountDown() {
  const D_Day = new Date("2024-11-07");
  const calCounter = () => {
    const diff = D_Day - new Date();
    let counts = {};

    if (diff > 0) {
      counts = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      };
    } else {
      counts = {
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
      };
    }
    return counts;
  };

  const [counter, setCounter] = useState(calCounter());

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(calCounter());
    }, 1000);

    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <main className="bg-[#FCFCFC] text-[#001926] pt-4 md:pt-[6rem] pb-8">
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        Hurray! Events holds in
      </h2>

      <div className="flex justify-center items-center gap-2 sm:gap-4 mt-8 px-4">
        <div
          className="min-w-[70px] lg:min-w-[200px] bg-[#001926] text-[#FCFCFC] p-2 
        md:py-4 md:px-8 flex justify-center items-center flex-col-reverse"
        >
          <h4 className="text-sm sm:text-3xl md:uppercase mt-2">Days</h4>
          <p className="text-xl md:text-8xl">{counter.days}</p>
        </div>
        <span className="md:text-7xl font-bold">:</span>

        <div
          className="min-w-[70px] lg:min-w-[200px] bg-[#001926] text-[#FCFCFC] p-2 
        md:py-4 md:px-8 flex justify-center items-center flex-col-reverse"
        >
          <h4 className="text-sm sm:text-3xl md:uppercase mt-2">Hours</h4>
          <p className="text-xl md:text-8xl">{counter.hours}</p>
        </div>
        <span className="md:text-7xl font-bold">:</span>

        <div
          className="min-w-[70px] lg:min-w-[200px] bg-[#001926] text-[#FCFCFC] p-2 
        md:py-4 md:px-8 flex justify-center items-center flex-col-reverse"
        >
          <h4 className="text-sm sm:text-3xl md:uppercase mt-2">Minutes</h4>
          <p className="text-xl md:text-8xl">{counter.mins}</p>
        </div>
        <span className="md:text-7xl font-bold">:</span>

        <div
          className="min-w-[70px] lg:min-w-[200px] bg-[#001926] text-[#FCFCFC] p-2 
        md:py-4 md:px-8 flex justify-center items-center flex-col-reverse"
        >
          <h4 className="text-sm sm:text-3xl md:uppercase mt-2">Seconds</h4>
          <p className="text-xl md:text-8xl">{counter.secs}</p>
        </div>
      </div>
    </main>
  );
}

export default CountDown;
