import React, { useState, useEffect } from "react";
import JoinJCIButton from "../homepage/herosection/JoinJCIButton";
import { Link } from "react-router-dom";
import { MdAddCall, MdLocationPin } from "react-icons/md";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* easy and fast contact */}
      <div className="w-full p-4 flex justify-between bg-sky-500 px-10 py-7">
        <div className="flex items-center gap-2 text-white text-base font-medium font-['Karla'] leading-normal">
          <span>
            <MdLocationPin />
          </span>
          Abuja, Aso, Abuja
        </div>
        <div className="flex flex-col items-center gap-2 lg:flex-row">
          <MdAddCall className="hidden text-white lg:flex" />
          <span className="text-white text-base font-medium font-['Karla'] leading-normal">
            +2347035551111,
          </span>
          <span className="text-white text-base font-medium font-['Karla'] leading-normal">
            +2347023333221
          </span>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-r from-[#f3edd0fa] via-gray-100 to-white"></div>
      {/* NavBar Section */}
      <nav
        className={
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 bg-white border-gray-200 py-7 dark:bg-gray-900 px-10"
            : "bg-white border-gray-200 py-7 dark:bg-gray-900 px-6"
        }
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/" className="flex items-baseline ">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706423288611/6824c0e2-9cb4-43d5-a65a-f2d46be78040.png"
              className="h-6 sm:h-9"
              alt="JCI Logo"
            />
            <span className=" text-xl font-bold whitespace-nowrap text-[#E3DB07] dark:text-white">
              ASO
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>

            <JoinJCIButton />

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="true"
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
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to=""
                  className="block py-2 pl-3 pr-4 text-white bg-sky-500 rounded lg:bg-transparent lg:text-sky-500 lg:p-0 dark:text-white duration-300"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 duration-300"
                >
                  Excos & Members
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 duration-300"
                >
                  News & Articles
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 duration-300"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 duration-300"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
