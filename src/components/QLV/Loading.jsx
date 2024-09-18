import React, { useEffect, useState } from "react";

import QLVLogo from "../QLV/assets/QLV1.png";
import QLVLogo1 from "../QLV/assets/QLV2.png";

const LandingPage = () => {
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
        backgroundImage: `url(${QLVLogo1})`,
      }}
    >
      <div className="w-full max-w-md p-6 rounded-lg mt-[30rem]">
        <div className="w-full bg-gray-300 h-4">
          <div
            className="h-4 striped progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-center text-3xl font-bold mb-6 mt-4 text-[#fff] uppercase">
          QLV 2024 is Coming...
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
