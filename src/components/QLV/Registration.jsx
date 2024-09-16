import React from "react";

const Registration = () => {
  return (
    <main className="bg-[#001926] text-[#FCFCFC] pt-12 pb-8 px-[5rem]">
      <h2 className="text-5xl font-bold text-center mb-8">
        Register for JCI Aso QLV
      </h2>

      <form>
        <div className="bg-[#FCFCFC] text-[#001926] my-8 py-8 px-4 rounded-xl">
          <label htmlFor="fullname" className="block text-xl mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter your full name"
            className="outline-none border-b border-[#323F49] py-2 w-[45%] bg-transparent text-xl"
          />
        </div>

        <div className="bg-[#FCFCFC] text-[#001926] my-8 py-8 px-4 rounded-xl">
          <label htmlFor="email" className="block text-xl mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email (eg. yourname@email.com)"
            className="outline-none border-b border-[#323F49] py-2 w-[45%] bg-transparent text-xl"
          />
        </div>

        <div className="bg-[#FCFCFC] text-[#001926] my-8 py-8 px-4 rounded-xl">
          <label htmlFor="phone" className="block text-xl mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter phone number"
            className="outline-none border-b border-[#323F49] py-2 w-[45%] bg-transparent text-xl"
          />
        </div>

        <div className="bg-[#FCFCFC] text-[#001926] my-8 py-8 px-4 rounded-xl">
          <label className="block text-xl mb-2">Are you a JCIN Member?</label>

          <label htmlFor="yes" className="flex items-center gap-3 mb-2">
            <input
              type="radio"
              name="membership"
              id="yes"
              className="w-4 h-4"
            />
            <span className="text-xl">Yes</span>
          </label>

          <label htmlFor="no" className="flex items-center gap-3 mb-2">
            <input type="radio" name="membership" id="no" className="w-4 h-4" />
            <span className="text-xl">No</span>
          </label>
        </div>

        <div className="bg-[#FCFCFC] text-[#001926] my-8 py-8 px-4 rounded-xl">
          <label className="block text-xl mb-2">Are you based in Abuja?</label>

          <label htmlFor="yes" className="flex items-center gap-3 mb-2">
            <input type="radio" name="location" id="yes" className="w-4 h-4" />
            <span className="text-xl">Yes</span>
          </label>

          <label htmlFor="no" className="flex items-center gap-3 mb-2">
            <input type="radio" name="location" id="no" className="w-4 h-4" />
            <span className="text-xl">No</span>
          </label>
        </div>

        <div className="bg-[#FCFCFC] text-[#001926] my-8 py-8 px-4 rounded-xl">
          <label className="block text-xl mb-2">
            How did you hear about QLV 2024?
          </label>

          <label
            htmlFor="social_media"
            className="flex items-center gap-3 mb-2"
          >
            <input
              type="radio"
              name="publicity"
              id="socials"
              className="w-4 h-4"
            />
            <span className="text-xl">Social Media</span>
          </label>

          <label htmlFor="newsletter" className="flex items-center gap-3 mb-2">
            <input
              type="radio"
              name="publicity"
              id="newsletter"
              className="w-4 h-4"
            />
            <span className="text-xl">Newsletter</span>
          </label>

          <label htmlFor="friend" className="flex items-center gap-3 mb-2">
            <input
              type="radio"
              name="publicity"
              id="friend"
              className="w-4 h-4"
            />
            <span className="text-xl">Friend/Colleague</span>
          </label>

          <label htmlFor="other" className="flex items-center gap-3 mb-2">
            <input
              type="radio"
              name="publicity"
              id="other"
              className="w-4 h-4"
            />
            <span className="text-xl">Other</span>
          </label>
        </div>
      </form>
    </main>
  );
};

export default Registration;
