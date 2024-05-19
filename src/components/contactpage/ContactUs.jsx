import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactHeroSection from "./ContactHeroSection";
import ContactMap from "./ContactMap";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactHeroSection />
      <div className="w-[100%] flex flex-col gap-6 lg:flex-row lg:px-12 ">
        <section className="lg:w-[60%] flex flex-col lg:gap-16 border-r-2  px-6 lg:px-8">
          <ContactForm />
          <h1 className="hidden text-[2rem] font-bold pb-16 lg:flex">
            <span className="text-[#20B4E3] px-2"> Locate us</span> on the map
          </h1>
        </section>
        <section className="lg:w-[40%] ">
          <ContactInfo />
        </section>
      </div>
      <ContactMap />
    </div>
  );
};

export default ContactUs;
