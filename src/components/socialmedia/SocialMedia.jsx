import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="flex items-center gap-6">
      <a
        href="https://twitter.com/jci_aso"
        target="blank"
        className="text-white text-[1.5rem] hover:text-neutral-300 duration-300"
      >
        <FaSquareXTwitter />
      </a>
      <a
        href="https://www.instagram.com/jci_aso/?hl=en"
        target="blank"
        className="text-white text-[1.5rem] hover:text-neutral-300 duration-300"
      >
        <FaInstagramSquare />
      </a>
      <a
        href="https://www.linkedin.com/company/101489198/admin/feed/posts/"
        target="blank"
        className="text-white text-[1.5rem] hover:text-neutral-300 duration-300"
      >
        <FaLinkedin />
      </a>
    </section>
  );
};

export default SocialMedia;
