import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin, CiYoutube, CiFacebook } from "react-icons/ci";

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center gap-10 py-16 px-6 font-semibold lg:px-10">
      {" "}
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[1.6rem]">Address</h1>
        <ul className="flex flex-col gap-2 text-[#1F1D21] opacity-80">
          <li>Junior Chamber International </li>
          <li>Aso P.M.B 11923</li>
          <li>Maitama, FCT, Nigeria</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[1.6rem]">Email</h1>
        <p className="text-[#1F1D21] opacity-80">Aso@JCI.ng/email </p>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-[1.6rem]">Phone</h1>
        <ul className="flex flex-col gap-2 text-[#1F1D21] opacity-80">
          <li>+234-812-345-678 </li>
          <li>+234-812-345-678 </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[1.6rem]">Social Media Platforms</h1>
        <section className="flex items-center gap-6 opacity-80">
          <a
            href="https://twitter.com/jci_aso"
            target="blank"
            className="text-sky-600 text-[1.5rem] "
          >
            <BsTwitterX />
          </a>
          <a
            href="https://www.instagram.com/jci_aso/?hl=en"
            target="blank"
            className=" text-[1.5rem]  "
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/101489198/admin/feed/posts/"
            target="blank"
            className="text-sky-500 text-[1.5rem] "
          >
            <CiLinkedin />
          </a>
          <a
            href="https://www.linkedin.com/company/101489198/admin/feed/posts/"
            target="blank"
            className="text-red-700 text-[1.5rem] "
          >
            <CiYoutube />
          </a>
          <a
            href="https://www.linkedin.com/company/101489198/admin/feed/posts/"
            target="blank"
            className="text-sky-500 text-[1.5rem] "
          >
            <CiFacebook />
          </a>
        </section>
      </div>
    </div>
  );
};

export default ContactInfo;
