import React from "react";
import HeroSection from "./herosection/HeroSection";
import Vision from "./jcivision/Vision";
import Sponsors from "./sponsors/Sponsors";
import Testimonials from "./testimonials/Testimonials";
import Media from "./media/Media";
import LatestArticle from "./media/LatestArticle";
import Mission from "../mission/Mission";
import Benefits from "./benefits/Benefits";

const LandingPage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Benefits />
      <Vision />
      <Mission />
      <Testimonials />
      <Media />
      <LatestArticle />
      <Sponsors />
    </React.Fragment>
  );
};

export default LandingPage;
