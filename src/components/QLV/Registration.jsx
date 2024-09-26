import React, { useState } from "react";
import PaymentModal from "./PaymentModal";

const Registration = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    isMember: "",
    inAbuja: "",
    publicity: "",
  });

  const toggleModal = () => setOpenModal(!openModal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullname: "",
      email: "",
      phoneNumber: "",
      isMember: "",
      inAbuja: "",
      publicity: "",
    });
  };

  return (
    <main className="relative bg-[#001926] text-[#FCFCFC] pt-12 pb-4 md:pb-8 px-2 md:px-[5rem]">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Register for JCI Aso QLV 2024
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <div className="w-full sm:w-2/3 bg-[#FCFCFC] text-[#001926] my-8 py-4 md:py-8 px-4 rounded-xl">
          <label htmlFor="fullname" className="block sm:text-xl mb-2 px-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={formData.fullname}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your full name"
            className="outline-none border-b border-[#323F49] py-2 px-2 w-full bg-transparent sm:text-xl"
          />
        </div>

        <div className="w-full sm:w-2/3 bg-[#FCFCFC] text-[#001926] my-8 py-4 md:py-8 px-4 rounded-xl">
          <label htmlFor="email" className="block sm:text-xl mb-2 px-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your email (eg. yourname@email.com)"
            className="outline-none border-b border-[#323F49] py-2 px-2 w-full bg-transparent sm:text-xl"
          />
        </div>

        <div className="w-full sm:w-2/3 bg-[#FCFCFC] text-[#001926] my-8 py-4 md:py-8 px-4 rounded-xl">
          <label htmlFor="phoneNumber" className="block sm:text-xl mb-2 px-2">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => handleChange(e)}
            placeholder="Enter phone number"
            className="outline-none border-b border-[#323F49] py-2 px-2 w-full bg-transparent sm:text-xl"
          />
        </div>

        <div className="w-full sm:w-2/3 bg-[#FCFCFC] text-[#001926] my-8 py-4 md:py-8 px-4 rounded-xl">
          <label className="block sm:text-xl mb-2 px-2">
            Are you a JCIN Member?
          </label>

          <label htmlFor="yes" className="flex items-center gap-3 mb-2 px-2">
            <input
              type="radio"
              name="isMember"
              id="yes"
              className="w-4 h-4"
              value="yes"
              onChange={handleChange}
              checked={formData.isMember === "yes"}
            />
            <span className="sm:text-xl">Yes</span>
          </label>

          <label htmlFor="no" className="flex items-center gap-3 mb-2 px-2">
            <input
              type="radio"
              name="isMember"
              id="no"
              className="w-4 h-4"
              value="no"
              onChange={handleChange}
              checked={formData.isMember === "no"}
            />
            <span className="sm:text-xl">No</span>
          </label>
        </div>

        <div className="w-full sm:w-2/3 bg-[#FCFCFC] text-[#001926] my-8 py-4 md:py-8 px-4 rounded-xl">
          <label className="block sm:text-xl mb-2 px-2">
            Are you based in Abuja?
          </label>

          <label htmlFor="yes" className="flex items-center gap-3 mb-2 px-2">
            <input
              type="radio"
              name="inAbuja"
              id="yes"
              className="w-4 h-4"
              value="yes"
              onChange={handleChange}
              checked={formData.inAbuja === "yes"}
            />
            <span className="sm:text-xl">Yes</span>
          </label>

          <label htmlFor="no" className="flex items-center gap-3 mb-2 px-2">
            <input
              type="radio"
              name="inAbuja"
              id="no"
              className="w-4 h-4"
              value="no"
              onChange={handleChange}
              checked={formData.inAbuja === "no"}
            />
            <span className="sm:text-xl">No</span>
          </label>
        </div>

        <div className="w-full sm:w-2/3 bg-[#FCFCFC] text-[#001926] my-8 py-4 md:py-8 px-4 rounded-xl">
          <label className="block sm:text-xl mb-2 px-2">
            How did you hear about QLV 2024?
          </label>

          <label
            htmlFor="social_media"
            className="flex items-center gap-3 mb-2 px-2"
          >
            <input
              type="radio"
              name="publicity"
              id="socials"
              className="w-4 h-4"
              value="social media"
              onChange={handleChange}
              checked={formData.publicity === "social media"}
            />
            <span className="sm:text-xl">Social Media</span>
          </label>

          <label
            htmlFor="newsletter"
            className="flex items-center gap-3 mb-2 px-2"
          >
            <input
              type="radio"
              name="publicity"
              id="newsletter"
              className="w-4 h-4"
              value="newsletter"
              onChange={handleChange}
              checked={formData.publicity === "newsletter"}
            />
            <span className="sm:text-xl">Newsletter</span>
          </label>

          <label htmlFor="friend" className="flex items-center gap-3 mb-2 px-2">
            <input
              type="radio"
              name="publicity"
              id="friend"
              className="w-4 h-4"
              value="colleague/friend"
              onChange={handleChange}
              checked={formData.publicity === "colleague/friend"}
            />
            <span className="sm:text-xl">Friend/Colleague</span>
          </label>

          <label htmlFor="other" className="flex items-center gap-3 mb-2 px-2">
            <input
              type="radio"
              name="publicity"
              id="other"
              className="w-4 h-4"
              value="other"
              onChange={handleChange}
              checked={formData.publicity === "other"}
            />
            <span className="sm:text-xl">Other</span>
          </label>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <button
            type="button"
            onClick={toggleModal}
            className="bg-[#009FF5] border border-transparent transition hover:border hover:border-[#009FF5] hover:bg-transparent rounded-md px-6 sm:px-10 sm:py-4 py-2 sm:text-xl mb-2"
          >
            Register for Event
          </button>

          <p className="w-[80%] md:w-full text-sm text-center">
            Please ensure all fields are filled correctly. For any registration
            issues, contact us at{" "}
            <a href="mailto:jciaso@jci.ng" className="text-[#009FF5] underline">
              jciaso@jci.ng
            </a>
          </p>
        </div>
      </form>
      <PaymentModal open={openModal} close={toggleModal} />
    </main>
  );
};

export default Registration;
