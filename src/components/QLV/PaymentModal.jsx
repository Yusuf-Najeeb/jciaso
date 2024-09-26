import React from "react";

const PaymentModal = ({ open, close }) => {
  return (
    <main
      className="absolute mx-auto drop-shadow-md left-[20%] top-[40%] transform translate-x-1/6 translate-y-1/2 bg-white text-[#001926] w-[60%] rounded-sm"
      style={{
        display: open ? "block" : "none",
      }}
    >
      <button onClick={close}>Close</button>
      <div>hello World</div>
    </main>
  );
};

export default PaymentModal;
