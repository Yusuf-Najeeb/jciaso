import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Notification = () => {
  const [openModal, setModal] = useState(true);

  const handleClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <main
      className={`${
        openModal ? "block" : "hidden"
      } relative bg-[#fff]/40 py-12 px-3 rounded-lg backdrop-blur-md`}
    >
      <button
        onClick={handleClose}
        className="absolute right-5 top-2 flex flex-row justify-between items-center"
      >
        close
        <BsX size={25} />
      </button>
      <Link to={"/events"} onClick={handleClose}>
        <img
          className="min-w-[500px] max-h-full w-full rounded object-cover object-top"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1716153094931/d6a7c345-c8b9-444f-8e1f-faaa0a5fd2eb.jpeg"
          alt="Secondary school competition on debate"
        />
      </Link>
    </main>
  );
};

export default Notification;
