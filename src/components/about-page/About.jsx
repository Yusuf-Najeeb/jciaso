import React from "react";
import "../../index.css";
import AboutHeroSection from "./AboutHeroSection";
// import AboutMission from "./AboutMission";
import AboutContent from "./AboutContent";
import AboutNumber from "./AboutNumber";
import Mission from "../mission/Mission";
const About = () => {
  return (
    <>
      <AboutHeroSection />
      <AboutContent />
      {/* <AboutMission /> */}
      <Mission />
      <AboutNumber />
    </>
  );
};

export default About;
