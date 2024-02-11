import React from "react";

const InfoForm = () => {
  return (
    <>
      <div className="flex text-center justify-center items-center my-10">
        <div>
          <h1 className="text-sky-500 mb-4 text-4xl font-bold">Join JCI Aso</h1>
          <div className="text-left space-y-2 mb-2">
            <h3>
              Kindly fill out the form below and submit, we'll get back to you
              via email
            </h3>
            <div className="text-gray-400 text-sm">
              Be part of Junior Chamber International Aso
            </div>
          </div>

          <form
            className="space-y-4"
            // method="post"
            onSubmit={(e) => e.preventDefault}
          >
            <input
              className="border-2 border-gray-500 rounded-lg w-[300px] lg:w-full py-1.5 px-2 focus:border-sky-500"
              type="text"
              placeholder="First Name"
              id="firstName"
              required
            />
            <br />
            <input
              className="border-2 border-gray-500 rounded-lg w-[300px] lg:w-full py-1.5 px-2 focus:border-sky-500"
              type="text"
              placeholder="Last Name"
              id="lastName"
              required
            />
            <br />
            <input
              className="border-2 border-gray-500 rounded-lg w-[300px] lg:w-full py-1.5 px-2 focus:border-sky-500"
              type="email"
              placeholder="Email Address"
              id="email"
              required
            />
            <br />
            <input
              className="border-2 border-gray-500 rounded-lg w-[300px] lg:w-full py-1.5 px-2 focus:border-sky-500"
              type="number"
              placeholder="Phone Number"
              id="firstName"
              required
            />
            <br />
            <textarea
              className="border-2 border-gray-500 rounded-lg w-[300px] lg:w-full py-1.5 px-2 focus:border-sky-500 focus:ring-sky-500"
              name="reason"
              id="reason"
              cols="20"
              rows="10"
              required
              placeholder="Why you'd love to join Us"
            ></textarea>
            <br />
            <button
              className="bg-sky-500 w-[300px] lg:w-full rounded-lg hover:bg-sky-600 font-semibold text-white py-2 text-center px-6"
              type="click"
              onClick={(e) => e.preventDefault}
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InfoForm;
