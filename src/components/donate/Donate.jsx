import React, { useEffect } from "react";
import DonateHeroSection from "./DonateHeroSection";
import DonateBankDetails from "./DonateBankDetails";

const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <DonateHeroSection />
      <DonateBankDetails />
    </div>
  );
};

export default Donate;
