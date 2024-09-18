import React, { useEffect, useState } from "react";

import QLVLogo from "../QLV/assets/QLV1.png";

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
        backgroundImage: `url(${QLVLogo})`,
      }}
    >
      <div className="w-full max-w-md p-6 rounded-lg mt-[24rem]">
        {/* <h1 className="text-3xl font-bold text-center mb-6">
          JCI Aso QLV 24 is Coming...
        </h1> */}

        <div className="w-full bg-gray-300 rounded-full h-4">
          <div
            className="h-4 rounded-full striped progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-center text-3xl font-bold mb-6 mt-4">
          QLV 24 is Coming... {progress}%
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
