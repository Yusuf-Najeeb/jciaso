import React from "react";

const ContactMap = () => {
  return (
    <section>
      <h1 className="flex font-bold pt-16 px-6 lg:hidden">
        <span className="text-[#20B4E3] px-2"> Locate us </span> on the map
      </h1>
      <div className="bg-black/60 relative overflow-hidden">
        <iframe
          className="w-[100%] h-[60vh] overflow-hidden resize-none  mix-blend-overlay"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31519.583689981762!2d7.43991604311142!3d9.068505623627768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b4c17d0ca2d%3A0xa060fdc638f3821c!2sAbuja%20Shopping%20Mall%20Wuse%20zone%203!5e0!3m2!1sen!2sng!4v1706667106745!5m2!1sen!2sng"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
