import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

import QLVBanner from "../QLV/assets/QLV2.png";
import background from "../QLV/assets/QLVBackground.png";
import jciLogo from "../QLV/assets/JCI(White).svg";
import QLV from "../QLV/assets/QLV(White).png";

const LandingPage = () => {
  const { width } = useWindowSize();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(60);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="bg-gray-100 bg-cover bg-center flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${width < 950 ? background : QLVBanner})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-md p-6 rounded-lg">
        <div
          style={{
            display: `${width < 950 ? "block" : "none"}`,
            marginBottom: "5rem",
          }}
        >
          <div className="flex justify-center items-center gap-8">
            <div className="w-[40%]">
              <img
                src={jciLogo}
                alt=""
                className="w-[100%] object-fit object-cover"
              />
            </div>

            <div className="w-[1px] h-[100px] bg-[#fff]"></div>

            <div className="w-[50%]">
              <img
                src={QLV}
                alt=""
                className="w-[100%] object-fit object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-500 h-4 lg:mt-[30rem]">
          <div
            className="h-4 striped progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-center text-xl md:text-3xl font-semibold mb-6 mt-4 text-[#fff] uppercase">
          QLV 2024 is Coming...
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
