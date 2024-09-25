import star from "./assets/Star.png";
import asset1 from "./assets/asset1.png";
import asset2 from "./assets/asset2.png";
import asset3 from "./assets/asset3.png";
import asset4 from "./assets/asset4.png";
import asset5 from "./assets/asset5.png";
import QLVLogo from "./assets/QLV(White).png";

const Hero = () => {
  return (
    <main className="bg-[#001926] text-[#FCFCFC] overflow-hidden">
      <div className="relative w-full h-dvh max-w-[1400px] mx-auto flex justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-3 sm:mb-4 absolute z-40 px-4 lg:px-0">
          <div className="max-w-[50%] sm:max-w-[20%] sm:max-h-[20%]">
            <img
              src={QLVLogo}
              alt=""
              className="w-full object-contain object-center"
            />
          </div>
          <h1 className="text-3xl md:text-5xl w-full lg:max-w-[75%] text-center">
            Quality Leadership for National Excellence:{" "}
            <span className={`url(${star}) inline-block w-30 h-30`}></span>
            Inspiring Young Leaders to Shape the Future
          </h1>

          <h4 className="w-full sm:max-w-[80%] lg:max-w-[60%] text-center text-[1.2rem] md:text-[1.5rem] my-2">
            Welcome to the Quality Leadership Value (QLV) 2024 Boot Camp!
          </h4>

          <button
            className="bg-[#009FF5] border border-transparent transition hover:border hover:border-[#009FF5] hover:bg-transparent rounded-md px-4 md:px-8 py-1 md:py-3 mt-2 mb-8
           sm:text-xl"
          >
            Book a seat
          </button>
        </div>

        <img
          src={asset1}
          alt="Participants at the QLV session 2023"
          className="absolute rounded-md left-0 md:left-[8%] top-2 md:top-6 w-[40%] md:w-[20%]"
        />
        <img
          src={asset2}
          alt="Participants at the QLV session 2023"
          className="absolute rounded-md md:right-[20%] right-0 md:top-6 top-[6rem] w-[40%] md:w-[20%]"
        />
        <img
          src={asset3}
          alt="Participants at the QLV session 2023"
          className="absolute rounded-md left-0 md:left-[8%] bottom-[12%] md:bottom-8 w-[50%] md:w-[20%]"
        />
        <img
          src={asset4}
          alt="Participants at the QLV session 2023"
          className="hidden md:block absolute rounded-md -bottom-[7%] right-[35%] w-[17%]"
        />
        <img
          src={asset5}
          alt="Participants at the QLV session 2023"
          className="absolute rounded-md md:-right-[2%] right-0 bottom-[20%] w-[30%] md:w-[18%]"
        />
      </div>
    </main>
  );
};

export default Hero;
