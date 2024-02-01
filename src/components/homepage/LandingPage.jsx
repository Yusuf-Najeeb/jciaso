import React from "react";
import HeroSection from "./herosection/HeroSection";
import Vision from "./jcivision/Vision";
import Sponsors from "./sponsors/Sponsors";
import Footer from "../footer/Footer";
import Testimonials from "./testimonials/Testimonials";
import Articles from "./media/Media";
import Header from "../header/Header";
import LatestArticle from "./media/LatestArticle";
import Mission from "../mission/Mission";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <Vision />
      <Mission />
      <Testimonials />
      <Articles />
      <LatestArticle />
      <Sponsors />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
