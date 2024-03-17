import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin, CiYoutube, CiFacebook } from "react-icons/ci";

const SocialMedia = () => {
  return (
    <section className="flex items-center gap-6 opacity-80">
      <a
        href="https://twitter.com/jciaso"
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
        href="https://www.youtube.com/channel/UCgb1TT3KUS70l-HuYKHeFfw"
        target="blank"
        className="text-red-700 text-[1.5rem] "
      >
        <CiYoutube />
      </a>
      <a
        href="https://web.facebook.com/jciasoAbuja/"
        target="blank"
        className="text-sky-500 text-[1.5rem] "
      >
        <CiFacebook />
      </a>
    </section>
  );
};

export default SocialMedia;
