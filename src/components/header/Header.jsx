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
      <header className="sticky top-0 bg-white border-b border-gray-200 dark:bg-gray-900 z-50">
      <nav className="bg-white border-gray-200 shadow-md py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="#" className="flex items-center">
            <img
              src="https://logonoid.com/images/thumbs/jci-logo.png"
              className="h-20 sm:h-20"
              alt="JCI Logo"
            />
            <span className="self-center pb-[-6px] text-[#ecbd37] text-sm font-bold whitespace-nowrap dark:text-[#ecbd37]">
              ASO
            </span>
          </Link>

          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>

            <Link
              to="/"
              className="text-white pr-8 bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-sky-500 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
            >
               <JoinJCIButton />
            </Link>
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
                  to="#"
                  className="block py-2 pl-3 pr-4 text-white bg-sky-500 rounded lg:bg-transparent lg:text-sky-500 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Excos & Members
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-blue-200 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-blue-700"
                >
                  News & Articles
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
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
