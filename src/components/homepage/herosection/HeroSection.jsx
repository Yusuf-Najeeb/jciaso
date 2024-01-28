import React, { useState, useEffect } from "react";
import JoinJCIButton from "./JoinJCIButton";

const HeroSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgroundData = [
    "https://images.pexels.com/photos/1367274/pexels-photo-1367274.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundData.length
      );
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  });

  const heroStyle = {
    backgroundImage: `url(${backgroundData[backgroundIndex]})`,
  };
  return (
    <React.Fragment>
      <div className="bg-gradient-to-r from-[#FBDA5A47] via-neutral-400 to-neutral-400 relative">
        <div
          className="w-full h-screen bg-black/60 bg-cover bg-center mix-blend-overlay object-cover absolute "
          style={heroStyle}
        ></div>
        <div className=" flex flex-col gap-6 justify-center   h-screen  z-10 relative px-4 lg:px-24 lg:w-[80%]">
          <h1 className="font-bold text-[2rem]  ">
            Lorem ipsum dolor, sit amet consectetur
          </h1>
          <p className="text-[1.2rem] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            dolore eius exercitationem, officiis animi sapiente nam asperiores
            pariatur amet il
          </p>
          <JoinJCIButton />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
