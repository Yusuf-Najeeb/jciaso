import React from "react";
import HeroSection from "./herosection/HeroSection";
import Vision from "./jcivision/Vision";
import Sponsors from "./sponsors/Sponsors";
import Testimonials from "./testimonials/Testimonials";
import Media from "./media/Media";
import LatestArticle from "./media/LatestArticle";
import Opportunity from "./opportunities/OpportunityCards";

const LandingPage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Opportunity />
      <Vision />
      {/* <Mission /> */}
      <div className="mt-4">
        <h1 className="text-[1.2rem] sm:text-2xl lg:text-3xl font-bold text-center mb-2">
          JCI Creed
        </h1>
        <div className="w-full h-full bg-[#4081B4] text-white text-center shadow-lg py-6">
          <p className="text-[1.2] sm:text-[1.3rem] py-6 sm:pb-4 sm:mt-4 px-2">
            We Believe <br /> That Faith in God gives meaning and purpose to
            human lives <br /> That the brotherhood of man transcends the
            sovereignty of nations <br /> That Economic Justice can best be won
            by free men through free enterprise <br /> That Government should be
            of law, rather than of men <br /> That Earth Great treasure lies in
            human personality and <br /> That Service to humanity is the best
            work of life
          </p>
        </div>
      </div>
      <Testimonials autoSlide={true} />
      <Media />
      <LatestArticle />
      <Sponsors />
    </React.Fragment>
  );
};

export default LandingPage;
