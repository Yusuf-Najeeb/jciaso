import React from "react";
import { BsX } from "react-icons/bs";

const PaymentModal = ({ open, close }) => {
  return (
    <main
      className="modal fixed inset-0 z-50 overflow-y-auto pb-6 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out backdrop-blur-sm"
      style={{
        display: open ? "flex" : "none",
      }}
    >
      <div className="bg-white text-[#001926] md:w-[50%] min-h-[500px] mx-auto rounded-sm px-4 py-6">
        <button onClick={close} className="block ml-auto">
          <BsX size={40} />
        </button>
        <div className="flex flex-col items-start justify-center gap-4 h-[80%] mt-8">
          <h4>Thank you for registering for QLV 2024!</h4>
          <p>
            Please complete your registration by making the necessary payment to
            the account below:
          </p>
          <ul>
            <li>JCI Aso Members: ₦10,000</li>
            <li>Non-members: ₦20,000</li>
          </ul>
          <p>Bank: FCMB</p>
          <p>Account Number: 7723913012</p>
          <p>Account Name: JCI Aso - Projects</p>
          <p>
            Account After making your payment, kindly send your receipt to
            either Henrietta (08160380277) or Jessica (09058940642) on WhatsApp.
            Once payment is confirmed, click the button below to submit your
            registration.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PaymentModal;
