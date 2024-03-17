import React from "react";
import SocialMedia from "../socialmedia/SocialMedia";

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center gap-10 lg:py-16 px-6 font-semibold lg:px-10">
      {" "}
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[1.6rem]">Address</h1>
        <ul className="flex flex-col gap-2 text-[#1F1D21] opacity-80">
          <li>Junior Chamber International Aso </li>
          <li>Suite B21, Abuja Shopping Mall, Zone 3,</li>
          <li> Wuse, Abuja, Nigeria.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[1.6rem]">Email</h1>
        <p className="text-[#1F1D21] opacity-80">jciaso@jci.ng </p>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-[1.6rem]">Phone</h1>
        <ul className="flex flex-col gap-2 text-[#1F1D21] opacity-80">
          <li>+234-8177-098-608 </li>
          <li>+234-7037-370-003</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[1.6rem]">Social Media Platforms</h1>
        <SocialMedia />
      </div>
    </div>
  );
};

export default ContactInfo;
