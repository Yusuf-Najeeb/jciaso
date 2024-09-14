import React from "react";
import { Link } from "react-router-dom";

const QlvNav = () => {
  return (
    <main className="bg-[#001926] text-[#FCFCFC]">
      <div className="w-full max-w-[1200px] flex justify-between items-center mx-auto">
        <Link to="/" className="flex items-center w-20 h-12 md:w-28 md:h-16">
          <img
            className="w-full"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710259811890/d8c5b502-3a13-43b2-829a-ea95fadbc9bc.png"
            alt="JCI-Aso logo"
          />
        </Link>
        <nav className="min-w-[550px] flex justify-between">
          <button className="text-[18px]">
            <a href="#event">About event</a>
          </button>
          <button className="text-[18px]">
            <a href="#event">Speakers</a>
          </button>
          <button className="text-[18px]">
            <a href="#event">FAQ</a>
          </button>
          <button className="text-[18px]">
            <a href="#event">Partners</a>
          </button>
        </nav>

        <button className="border-2 border-[#009FF5] rounded-md px-4 py-2">
          Book a seat
        </button>
      </div>
    </main>
  );
};

export default QlvNav;
