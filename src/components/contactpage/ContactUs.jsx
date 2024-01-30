import React from "react";
import Header from "../header/Header";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin, CiYoutube, CiFacebook } from "react-icons/ci";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <section className="bg-gradient-to-r from-[#081c24] via-[#032532] to-[#37758e] h-[50vh]  w-full relative mt-12">
        <img
          className="w-full h-full object-cover absolute mix-blend-overlay"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706572981874/5f36b16e-634a-4221-9849-1f962583d8b3.jpeg"
          alt=""
        />
        <div className=" h-[50vh] flex flex-col justify-center items-start  text-[#FFF]  px-4 lg:px-16">
          <h1 className=" relative  text-[3rem]">Contact Us</h1>
          <p className="relative text-[1.5rem]">
            We would love to hear from you
          </p>
        </div>
      </section>
      <div className="w-[100%] flex flex-col gap-6 lg:flex-row lg:px-12">
        <section className="lg:w-[60%] border-r-2">
          <form
            action=""
            className="w-[100%] flex flex-col items-start px-4 gap-6 py-20"
          >
            <div className="w-[100%] flex flex-col gap-6 lg:flex-row mb-6">
              <div className="w-1/2 flex flex-col">
                <label htmlFor="name" className="text-[#34313799] opacity-90">
                  Your Name*
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-b-2 p-2 rounded-full focus:border-b-[#20B4E3] outline-none"
                />
              </div>
              <div className="w-1/2 flex flex-col">
                <label htmlFor="email" className="text-[#34313799] opacity-90">
                  Email address*
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-b-2 p-2 rounded-full focus:border-b-[#20B4E3] outline-none"
                />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="message" className="text-[#34313799] opacity-90">
                Question
              </label>
              <textarea
                name="message"
                id="message"
                cols="6"
                rows="6"
                className="border-b-2 p-2 rounded-2xl focus:border-b-[#20B4E3] resize-none outline-none"
              ></textarea>
            </div>
            <button className="px-8 py-2.5 border border-[#01A85A] text-[#01A85A] text-[1rem] rounded-md hover:text-[#FFF] hover:border-[#20B4E3] hover:bg-[#20B4E3] duration-300">
              Send Message
            </button>
          </form>
        </section>
        <section className="lg:w-[40%] flex flex-col justify-center gap-10 py-16 lg:px-10">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[1.6rem]">Address</h1>
            <ul className="flex flex-col gap-2 text-[#1F1D21]">
              <li>Junior Chamber International </li>
              <li>Aso P.M.B 11923</li>
              <li>Maitama, FCT, Nigeria</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[1.6rem]">Email</h1>
            <p className="text-[#1F1D21]">Aso@JCI.ng/email </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[1.6rem]">Phone</h1>
            <ul className="flex flex-col gap-2 text-[#1F1D21]">
              <li>+234812345678 </li>
              <li>+234812345678 </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[1.6rem]">Social Media Platforms</h1>
            <section className="flex items-center gap-6">
              <a
                href="https://twitter.com/jci_aso"
                target="blank"
                className="text-blue-600 text-[1.5rem] duration-300"
              >
                <BsTwitterX />
              </a>
              <a
                href="https://www.instagram.com/jci_aso/?hl=en"
                target="blank"
                className=" text-[1.5rem] duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/101489198/admin/feed/posts/"
                target="blank"
                className=" text-[1.5rem] duration-300"
              >
                <CiLinkedin />
              </a>
              <a
                href="https://www.linkedin.com/company/101489198/admin/feed/posts/"
                target="blank"
                className="text-red-700 text-[1.5rem] duration-300"
              >
                <CiYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/101489198/admin/feed/posts/"
                target="blank"
                className=" text-[1.5rem] duration-300"
              >
                <CiFacebook />
              </a>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
