import React from "react";
import HeroSection from "./herosection/HeroSection";
import Vision from "./jcivision/Vision";
import Sponsors from "./sponsors/Sponsors";
import Testimonials from "./testimonials/Testimonials";
import Media from "./media/Media";
import { HomePageNew } from "./media/LatestArticle";
import Opportunity from "./opportunities/OpportunityCards";
import Mission from "../mission/Mission";
import Notification from "./Notification";

const LandingPage = () => {
  return (
    <main className="relative">
      <div className="w-[60%] mx-auto absolute top-[1%] z-30 left-[20%]">
        <Notification />
      </div>
      <HeroSection />
      <Opportunity />
      <Vision />
      <Mission />
      <Testimonials autoSlide={true} />
      <Media />
      <HomePageNew />
      <Sponsors />
    </main>
  );
};

export default LandingPage;
