import React from "react";
import "../../index.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Mission from "../mission/Mission";
import AboutHeroSection from "./AboutHeroSection";

const About = () => {
  return (
    <>
      <Header />
      <AboutHeroSection />

      <Mission />
      <Footer />
    </>
  );
};

export default About;
