import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { LiaFacebookSquare } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";
import QLVLogo from "./assets/QLV(White).png";

const Footer = ({ aboutRef, partnerRef, faqRef, speakersRef }) => {
  return (
    <main className="bg-[#111] text-[#FCFCFC] pt-4 text-sm px-4 md:px-0">
      <div className="w-full lg:max-w-[1200px] flex justify-between md:items-center mx-auto">
        <Link to="/" className="flex md:items-center w-15 h-12 md:w-20 md:h-14">
          <img
            className="w-full"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710259811890/d8c5b502-3a13-43b2-829a-ea95fadbc9bc.png"
            alt="JCI-Aso logo"
          />
          <img className="w-full" src={QLVLogo} alt="JCI-Aso logo" />
        </Link>

        <nav className="md:min-w-[450px] flex flex-col md:flex-row md:justify-between justify-end text-right md:text-left">
          <button
            className="hover:text-[#009FF5] transition my-2 sm:my-0"
            onClick={aboutRef}
          >
            About event
          </button>
          <button
            className="hover:text-[#009FF5] transition my-2 sm:my-0"
            onClick={speakersRef}
          >
            Speakers
          </button>
          <button
            className="hover:text-[#009FF5] transition my-2 sm:my-0"
            onClick={faqRef}
          >
            FAQ
          </button>
          <button
            className="hover:text-[#009FF5] transition my-2 sm:my-0"
            onClick={partnerRef}
          >
            Partners
          </button>
        </nav>

        <div className="hidden md:block">
          <p className="flex items-center gap-2 my-2 hover:text-[#009FF5] transition">
            <CiMail size={25} />
            <a href="mailto=jciaso@jci.ng">Email: jciaso@jci.ng</a>
          </p>
          <p className="flex items-center gap-2 my-2 hover:text-[#009FF5] transition">
            <MdOutlinePhoneEnabled size={25} />
            <a href="tel:+2348112326974">Contact: +234 8112 326 974</a>
          </p>
        </div>
      </div>

      <div className="border-t border-[#fcfcfc] my-4"></div>

      <div className="fw-full max-w-[1200px] flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0 mx-auto py-4">
        <div className="flex items-center gap-4">
          <p>Follow us:</p>
          <div className="flex items-center gap-4">
            <a href="#nowhere" target="_blank">
              <LiaFacebookSquare
                className="transition border border-[#001926] p-1 rounded hover:text-[#009FF5] cursor-pointer"
                size={35}
              />
            </a>

            <a href="#nowhere" target="_blank">
              <FaInstagram
                className="transition border border-[#001926] p-1 rounded hover:text-[#009FF5] cursor-pointer"
                size={30}
              />
            </a>

            <a href="#nowhere" target="_blank">
              <RiLinkedinLine
                className="transition border border-[#001926] p-1 rounded hover:text-[#009FF5] cursor-pointer"
                size={30}
              />
            </a>

            <a href="#nowhere" target="_blank">
              <BsTwitterX
                className="transition border border-[#001926] p-1 rounded hover:text-[#009FF5] cursor-pointer"
                size={25}
              />
            </a>
          </div>
        </div>

        <div className="md:hidden block">
          <p className="flex items-center gap-2 my-2 hover:text-[#009FF5] transition">
            <CiMail size={25} />
            <a href="mailto=jciaso@jci.ng">Email: jciaso@jci.ng</a>
          </p>
          <p className="flex items-center gap-2 my-2 hover:text-[#009FF5] transition">
            <MdOutlinePhoneEnabled size={25} />
            <a href="tel:+2348112326974">Contact: +234 8112 326 974</a>
          </p>
        </div>

        <div className="min-w-[40%] max-w-[50%]">
          <p className="flex items-center justify-end gap-2">
            <span className="hover:text-[#009FF5] transition inline-block cursor-pointer text-xs sm:text-sm">
              &copy; 2024 QLV Boot Camp
            </span>
            |
            <span className="hover:text-[#009FF5] transition inline-block cursor-pointer text-xs sm:text-sm">
              All Rights Reserved
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
