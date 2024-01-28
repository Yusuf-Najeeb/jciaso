import React from "react";
import HeroSection from "./herosection/HeroSection";
import Vision from "./jcivision/Vision";
import Sponsors from "./sponsors/Sponsors";
import Footer from "../footer/Footer";
import Testimonials from "./testimonials/Testimonials";
import Articles from "./articles/Articles";
import Header from "../header/Header";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <Vision />
      <Articles />
      <Testimonials />
      <Sponsors />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
