import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../socialmedia/SocialMedia";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="bg-gradient-to-r from-[#313C45] via-[#3E343C] to-[#432E34] flex flex-col justify-center items-center text-[#FFFFFF]  h-screen">
      <section className="flex flex-wrap gap-10 px-6 lg:gap-40">
        <div className="self-center">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706795621833/d0382388-1cac-4440-8f72-7585d8f0bafd.png"
            alt="JCI-Aso logo"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-[1.5rem]">Quick Links</h1>
          <ul className="flex flex-col gap-2 ">
            <Link to="" className="hover:underline duration-300">
              About us
            </Link>
            <Link to="/contact" className="hover:underline duration-300">
              Contact us
            </Link>
            <Link to="" className="hover:underline duration-300">
              Donate
            </Link>
            <Link to="" className="hover:underline duration-300">
              News & Articles
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-[1.5rem]">Contact Info</h1>
          <ul className="flex flex-col gap-2 ">
            <Link to="">Junior Chamber International</Link>
            <Link to="">Transcorp hilton , Maitama , Abuja.</Link>
            <Link to="">info@jciaso.ng</Link>
            <SocialMedia />
          </ul>
        </div>
      </section>
      <p className="border border-[#FAFAFA80] w-[75%] mt-24 lg:mt-40"></p>
      <p className="w-[100%] bg-[#20B4E3] text-[0.8rem]  p-7 text-center font-semibold mt-16">
        {" "}
        Copyright {today.getFullYear()} JCI ASO - All rights reserved
      </p>
      <section></section>
    </footer>
  );
};

export default Footer;
