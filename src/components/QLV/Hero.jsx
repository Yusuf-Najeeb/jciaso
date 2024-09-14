import star from "./assets/Star.png";
import asset1 from "./assets/asset1.png";
import asset2 from "./assets/asset2.png";
import asset3 from "./assets/asset3.png";
import asset4 from "./assets/asset4.png";
import asset5 from "./assets/asset5.png";

const Hero = () => {
  return (
    <main className="bg-[#001926] text-[#FCFCFC] overflow-hidden">
      <div className="relative w-full h-dvh max-w-[1400px] mx-auto flex justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-3 mt-[5rem] mb-4 absolute z-50">
          <h1 className="text-6xl w-full max-w-[75%] text-center">
            JCI Aso Quality Leadership Value (QLV){" "}
            <span className={`url(${star}) inline-block w-30 h-30`}></span>
            2024 BootCamp
          </h1>
          <h4 className="w-full max-w-[60%] text-center text-[1.5rem] my-2">
            Quality Leadership for National Excellence: Inspiring Young Leaders
            to Shape the Future
          </h4>

          <button className="bg-[#009FF5] border border-transparent transition hover:border hover:border-[#009FF5] hover:bg-transparent rounded-md px-8 py-3 mt-2">
            Book a seat
          </button>
        </div>

        <img
          src={asset1}
          alt="Participants at the QLV session 2023"
          className="absolute rounded-md left-[8%] top-6 w-[20%]"
        />
        <img
          src={asset2}
          alt="Participants at the QLV session 2023"
          className="absolute rounded-md right-[24%] top-6 w-[20%]"
        />
        <img
          src={asset3}
          alt="Participants at the QLV session 2023"
          className="absolute rounded-md left-[8%] bottom-4 w-[20%]"
        />
        <img
          src={asset4}
          alt="Participants at the QLV session 2023"
          className="absolute rounded-md -bottom-[7%] right-[35%] w-[17%]"
        />
        <img
          src={asset5}
          alt="Participants at the QLV session 2023"
          className="absolute rounded-md -right-[2%] bottom-[10%] w-[18%]"
        />
      </div>
      <h1 className="relative bottom-0">
        JCI Aso QLV 2024 JCI Aso QLV 2024 JCI Aso QLV 2024 JCI Aso QLV 2024 JCI
        Aso QLV 2024 JCI Aso QLV 2024 JCI Aso QLV 2024 JCI Aso QLV 2024 Aso QLV
        2024 JCI Aso QLV 2024
      </h1>
    </main>
  );
};

export default Hero;
