import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import JoinJCIButton from "../homepage/herosection/JoinJCIButton";
import { Link } from "react-router-dom";

const Header = () => {
  function toggleBtn() {
    const mobileMenu = document.getElementById("mobile-menu-4");
    mobileMenu.classList.toggle("hidden");
  }

  return (
    <>
      {/* easy and fast contact for users*/}
      <div className="py-4 px-12 bg-sky-500 hidden sm:flex flex-row justify-between">
        <div className=" text-white text-base font-medium font-['Karla'] ">
          <HiLocationMarker className="inline text-white mr-2 animate-bounce" />
          Aso, Abuja
        </div>
        <div className="">
          <FaPhone className="inline text-white mr-2 animate-pulse" />
          <span className="text-white text-base mr-2 font-['Karla'] leading-normal">
            +2347035551111,
          </span>
          <span className="text-white text-base font-['Karla'] leading-normal">
            +2347023333221
          </span>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-r from-[#f3edd0fa] via-gray-100 to-white hidden sm:block"></div>
      {/* NavBar Section */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50 ">
        <nav className="bg-white border-gray-200 shadow-md py-2.5 ">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto lg:px-10">
            <Link
              to="#"
              className="flex items-center w-20 h-12 md:w-28 md:h-16"
            >
              <img
                className="w-full"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706795621833/d0382388-1cac-4440-8f72-7585d8f0bafd.png"
                alt="JCI-Aso logo"
              />
            </Link>

            <div className="flex items-center lg:order-2">
              <div className="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
              </div>

              <JoinJCIButton />

              <button
                onClick={toggleBtn}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1 hidden"
              id="mobile-menu-4"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0  "
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/excos"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0 "
                  >
                    Excos & Members
                  </Link>
                </li>
                <li>
                  <Link
                    to="/articles"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0  "
                  >
                    News & Articles
                  </Link>
                </li>
                <li>
                  <Link
                    to="/donate"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0  "
                  >
                    Donate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
