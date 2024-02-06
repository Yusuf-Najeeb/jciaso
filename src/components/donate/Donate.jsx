import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import DonateHeroSection from "./DonateHeroSection";
import DonateBankDetails from "./DonateBankDetails";

const Donate = () => {
  return (
    <div>
      <Header />
      <DonateHeroSection />
      <DonateBankDetails />
      <Footer />
    </div>
  );
};

export default Donate;
