import React from "react";
import "../../index.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AboutHeroSection from "./AboutHeroSection";
import AboutMission from "./AboutMission";
import AboutContent from "./AboutContent";
import AboutNumber from "./AboutNumber";
import AboutPresident from "./AboutPresident";

const About = () => {
  return (
    <>
      <Header />
      <AboutHeroSection />
      <AboutContent />
      <AboutMission />
      <AboutNumber />
      <AboutPresident />
      <Footer />
    </>
  );
};

export default About;
