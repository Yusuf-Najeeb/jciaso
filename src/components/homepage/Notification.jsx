import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Notification = () => {
  const [openModal, setModal] = useState(true);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <div
      id="my-modal"
      className={`modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out backdrop-blur-sm ${
        openModal ? "" : "hidden"
      }`}
    >
      <main
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        className={`${
          openModal ? "" : "hidden"
        } relative bg-[#fff]/40 rounded-lg backdrop-blur-md`}
      >
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-3 right-2.5 px-2 py-1 text-sm font-medium text-white bg-[#0199cc] hover:bg-[#012dcc] rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0199cc] flex flex-row items-center justify-between"
        >
          close
          <BsX size={20} />
        </button>
        <Link to={"/events"} onClick={handleClose}>
          <img
            className="max-h-[600px] h-full w-full rounded object-contain object-top"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1716153094931/d6a7c345-c8b9-444f-8e1f-faaa0a5fd2eb.jpeg"
            alt="Secondary school competition on debate"
          />
        </Link>
      </main>
    </div>
  );
};

export default Notification;
