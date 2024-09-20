import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { LiaFacebookSquare } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <main className="bg-[#111] text-[#FCFCFC] pt-4 text-sm">
      <div className="w-full max-w-[1200px] flex justify-between items-center mx-auto">
        <Link to="#" className="flex items-center w-14 h-12 md:w-28 md:h-16">
          <img
            className="w-full"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710259811890/d8c5b502-3a13-43b2-829a-ea95fadbc9bc.png"
            alt="JCI-Aso logo"
          />
        </Link>
        <nav className="min-w-[550px] flex justify-between">
          <button className="hover:text-[#009FF5] transition">
            <a href="#event">About event</a>
          </button>
          <button className="hover:text-[#009FF5] transition">
            <a href="#event">Speakers</a>
          </button>
          <button className="hover:text-[#009FF5] transition">
            <a href="#event">FAQ</a>
          </button>
          <button className="hover:text-[#009FF5] transition">
            <a href="#event">Partners</a>
          </button>
        </nav>

        <div>
          <p className="flex items-center gap-2 my-2">
            <CiMail size={25} />
            <a href="mailto=jciaso@jci.ng">Email: jciaso@jci.ng</a>
          </p>
          <p className="flex items-center gap-2 my-2">
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
            <Link to="facebook">
              <LiaFacebookSquare
                className="transition border border-[#001926] p-1 rounded hover:text-[#009FF5] cursor-pointer"
                size={35}
              />
            </Link>

            <Link to="instagram">
              <FaInstagram
                className="transition border border-[#001926] p-1 rounded hover:text-[#009FF5] cursor-pointer"
                size={30}
              />
            </Link>

            <Link to="linkedIn">
              <RiLinkedinLine
                className="transition border border-[#001926] p-1 rounded hover:text-[#009FF5] cursor-pointer"
                size={30}
              />
            </Link>
            <Link to="X">
              <BsTwitterX
                className="transition border border-[#001926] p-1 rounded hover:text-[#009FF5] cursor-pointer"
                size={25}
              />
            </Link>
          </div>
        </div>
        <div className="">
          <p>
            &copy; 2024 QLV Boot Camp | All Rights Reserved | Privacy Policy |
            Terms of Service
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
