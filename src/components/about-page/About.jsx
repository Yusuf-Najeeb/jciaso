import React from "react";
import "../../index.css";
import AboutHeroSection from "./AboutHeroSection";
import AboutMission from "./AboutMission";
import AboutContent from "./AboutContent";
import AboutNumber from "./AboutNumber";
const About = () => {
  return (
    <>
      <AboutHeroSection />
      <AboutContent />
      <AboutMission />
      <AboutNumber />
    </>
  );
};

export default About;
