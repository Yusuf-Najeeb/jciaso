import React from "react";
import Header from "../header/Header";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactHeroSection from "./ContactHeroSection";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <ContactHeroSection />
      <div className="w-[100%] flex flex-col gap-6 lg:flex-row lg:px-12">
        <section className="lg:w-[60%] flex flex-col gap-16 border-r-2">
          <ContactForm />
          <h1 className="text-[2rem] font-bold pb-16">
            <span className="text-[#20B4E3]"> Locate us</span> on the map
          </h1>
        </section>
        <section className="lg:w-[40%] ">
          <ContactInfo />
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
