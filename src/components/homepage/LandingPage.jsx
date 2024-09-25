import React, { Fragment } from "react";
import HeroSection from "./herosection/HeroSection";
import Vision from "./jcivision/Vision";
import Sponsors from "./sponsors/Sponsors";
import Testimonials from "./testimonials/Testimonials";
import Media from "./media/Media";
import { HomePageNew } from "./media/LatestArticle";
import Opportunity from "./opportunities/OpportunityCards";
import Mission from "../mission/Mission";
// import Notification from "./Notification";

const LandingPage = () => {
  return (
    <Fragment>
      {/* <Notification /> */}
      <HeroSection />
      <Opportunity />
      <Vision />
      <Mission />
      <Testimonials autoSlide={true} />
      <Media />
      <HomePageNew />
      <Sponsors />
    </Fragment>
  );
};

export default LandingPage;
