import React from "react";
import HeroSection from "./herosection/HeroSection";
import Vision from "./jcivision/Vision";
import Sponsors from "./sponsors/Sponsors";
import Footer from "../footer/Footer";

const LandingPage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Vision />
      <Sponsors />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
