import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { LiaFacebookSquare } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = ({ aboutRef, partnerRef, faqRef, speakersRef }) => {
  return (
    <main className="bg-[#111] text-[#FCFCFC] pt-4 text-sm">
      <div className="w-full max-w-[1200px] flex justify-between items-center mx-auto">
        <Link to="#" className="flex items-center w-14 h-12 md:w-20 md:h-14">
          <img
            className="w-full"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710259811890/d8c5b502-3a13-43b2-829a-ea95fadbc9bc.png"
            alt="JCI-Aso logo"
          />
        </Link>
        <nav className="min-w-[550px] flex justify-between">
          <button
            className="hover:text-[#009FF5] transition"
            onClick={aboutRef}
          >
            About event
          </button>
          <button
            className="hover:text-[#009FF5] transition"
            onClick={speakersRef}
          >
            Speakers
          </button>
          <button className="hover:text-[#009FF5] transition" onClick={faqRef}>
            FAQ
          </button>
          <button
            className="hover:text-[#009FF5] transition"
            onClick={partnerRef}
          >
            Partners
          </button>
        </nav>

        <div>
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

      <div className="fw-full max-w-[1200px] flex justify-between items-center mx-auto py-4">
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

        <div>
          <p className="flex items-center gap-2">
            <span className="hover:text-[#009FF5] transition cursor-pointer">
              &copy; 2024 QLV Boot Camp
            </span>
            |{" "}
            <span className="hover:text-[#009FF5] transition cursor-pointer">
              All Rights Reserved
            </span>{" "}
            |{" "}
            <span className="hover:text-[#009FF5] transition cursor-pointer">
              Privacy Policy
            </span>{" "}
            |{" "}
            <span className="hover:text-[#009FF5] transition cursor-pointer">
              Terms of Service
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
