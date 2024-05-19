import React, { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <form action="" className="w-[100%] flex flex-col items-start gap-6 py-20">
      <div className="w-[100%] flex flex-col gap-6 lg:flex-row mb-6">
        <div className="lg:w-1/2 flex flex-col">
          <label htmlFor="name" className="text-[#34313799] opacity-90">
            Your Name*
          </label>
          <input
            type="text"
            name="name"
            className="border-b-2 p-2 rounded-full focus:border-b-[#20B4E3] outline-none"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col">
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
      <button className="px-8 py-2.5  border border-[#01A85A] text-[#01A85A] text-[1rem] rounded-md hover:text-[#FFF] hover:border-[#20B4E3] hover:bg-[#20B4E3] duration-300">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
