import React from "react";
import "../../index.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Mission from "../mission/Mission";
import AboutHeroSection from "./AboutHeroSection";
import AboutContent from "./AboutContent";
// import AboutNumbers from "./AboutNumbers";

const About = () => {
  return (
    <>
      <Header />
      <AboutHeroSection />
      <AboutContent />
      {/* <AboutNumbers /> */}

      <Mission />
      <Footer />
    </>
  );
};

export default About;
