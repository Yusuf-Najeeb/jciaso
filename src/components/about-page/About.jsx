import React, { useEffect } from "react";
import "../../index.css";
import AboutHeroSection from "./AboutHeroSection";
// import AboutMission from "./AboutMission";
import AboutContent from "./AboutContent";
import AboutNumber from "./AboutNumber";
import Mission from "../mission/Mission";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
