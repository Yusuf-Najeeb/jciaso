import React, { useState, useEffect } from "react";
import JoinJCIButton from "./JoinJCIButton";
import Aos, { init } from "aos";
import "aos/dist/aos.css";
const HeroSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgroundData = [
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1706437958071/e0b3386c-dce8-473f-9190-4aa8e89b1d10.jpeg",
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1706438077523/18580b6d-f15d-4fec-a54f-c4d23cb79e15.jpeg",
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1706438174134/3fcf6917-a166-4dae-af2e-24d454580e8f.jpeg",
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1706438225729/0e54b97a-cce3-4828-b109-50a5f5f96e80.jpeg",
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1706438267652/8b0398c7-a686-4a65-a84a-f0491148fe09.jpeg",
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1706438523837/191afa02-aa93-4dac-ba51-c8786027cef0.jpeg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      Aos.init();
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
      <div className="bg-black/70 relative">
        <div
          className="w-full h-screen bg-cover bg-center mix-blend-overlay object-cover absolute transition-all duration-1000 delay-200 ease-in-out"
          style={heroStyle}
        ></div>
        <div className="text-white flex flex-col gap-6 justify-center min-h-[400px] sm:h-screen z-10 relative px-4 lg:px-24 lg:w-[70%] text-center sm:text-left">
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="font-bold text-2xl sm:text-[4rem] leading-normal sm:leading-tight"
          >
            Developing Leaders for a Changing World
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-[1.1rem] sm:text-[1.2rem] w-full sm:w-[90%] leading-tight sm:leading-normal"
          >
            Launch yourself into the world of endless possibilities and exciting
            opportunities, Get a platform to practice your craft and network
            with other emerging leaders.
          </p>
          <JoinJCIButton />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
