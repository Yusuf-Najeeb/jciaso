import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../socialmedia/SocialMedia";
import Logo from "../../assests/JCIAso.png";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="h-full pt-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-white flex flex-col justify-center items-center text-[#000]">
      <section className="flex flex-col md:justify-center sm:items-center md:flex-row flex-wrap p-4 sm:gap-10 sm:px-10 lg:gap-40 text-sm">
        <div className="w-1/2 sm:w-1/4 my-4 p-2">
          <img
            src="https://res.cloudinary.com/duw4jtxls/image/upload/v1710260599/About_JCI-removebg-preview_tc8ikh.png"
            alt="JCI-Aso logo"
          />
        </div>

        <div className="flex flex-col gap-2 sm:gap-6 my-4 p-2">
          <h1 className="font-bold text-[1.5rem]">Quick Links</h1>
          <ul className="flex flex-row sm:flex-col gap-1 sm:gap-2 ">
            <Link to="/about" className="hover:underline duration-300">
              About&nbsp;us
            </Link>
            <Link to="/contact" className="hover:underline duration-300">
              Contact&nbsp;us
            </Link>
            <Link to="/donate" className="hover:underline duration-300">
              Donate
            </Link>
            <Link to="/articles" className="hover:underline duration-300">
              Blog
            </Link>
            <Link to="/events" className="hover:underline duration-300">
              Events
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-2 sm:gap-6 my-4 p-2">
          <h1 className="font-bold text-[1.5rem]">Contact Info</h1>
          <ul className="flex flex-col gap-2 ">
            <Link to="">Junior Chamber International Aso</Link>
            <Link to="">
              Suite B21, Abuja Shopping Mall, Zone 3, Wuse, Abuja
            </Link>
            <Link to="">info@jciaso.ng</Link>
            <Link to="">08177098608, 07037370003</Link>
            <SocialMedia />
          </ul>
        </div>
      </section>
      <div className="border border-[#FAFAFA80] w-[75%] mt-16"></div>
      <p className="w-[100%] bg-[#20B4E3] text-[0.8rem]  p-4 text-center text-white font-semibold mt-16">
        {" "}
        Copyright {today.getFullYear()} JCI ASO - All rights reserved
      </p>
      {/* <section></section> */}
    </footer>
  );
};

export default Footer;
