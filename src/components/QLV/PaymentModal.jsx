import React from "react";

const PaymentModal = ({ open, close, handleSubmit }) => {
  return (
    <main
      className="fixed inset-0 z-50 py-6 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out backdrop-blur-sm"
      style={{
        display: open ? "flex" : "none",
      }}
    >
      <div className="bg-[#001926] text-[#fff] md:w-[60%] max-h-full mx-auto rounded-sm px-4 py-6 mt-[4rem] overflow-auto">
        <div className="flex flex-col items-start justify-center gap-4 mt-8 text-2xl px-4">
          <h2 className="text-2xl sm:text-4xl font-semibold">
            Thank you for registering for QLV 2024!
          </h2>
          <p>
            Please complete your registration by making the necessary payment to
            the account below:
          </p>
          <ul className="list-disc pl-5">
            <li className="ml-6">JCI Aso Members: ₦10,000</li>
            <li className="ml-6">Non-members: ₦20,000</li>
          </ul>
          <h4 className="text-xl sm:text-3xl mt-6">Payment Details</h4>
          <p className="underline text-[#009FF5]">Bank: FCMB</p>
          <p className="underline text-[#009FF5]">Account Number: 7723913012</p>
          <p className="underline text-[#009FF5]">
            Account Name: JCI Aso - Projects Account
          </p>
          <p>
            After making your payment, kindly send your receipt to either{" "}
            <span className="underline text-[#009FF5]">
              Henrietta (08160380277)
            </span>{" "}
            or{" "}
            <span className="underline text-[#009FF5]">
              Jessica (09058940642)
            </span>{" "}
            on WhatsApp. Once payment is confirmed, click the button below to
            submit your registration.
          </p>

          <div className="flex items-center justify-end gap-4 mt-8 text-xl sm:text-2xl">
            <button
              onClick={close}
              className="flex flex-row items-center gap-2 py-2 px-4 rounded-md bg-[#009FF5]"
            >
              <span>Cancel</span>
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="py-2 px-4 rounded-md bg-[#009FF5]"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentModal;
