import { useState, useEffect, useRef } from "react";
import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

const QlvNav = ({ aboutRef, partnerRef, faqRef, speakersRef }) => {
  const [openMobileNav, setMobileNav] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const { width } = useWindowSize();
  const navRef = useRef(null);

  const toggleMobileNav = () => setMobileNav(!openMobileNav);

  useEffect(() => {
    if (navRef.current) {
      // Calculate the height of the nav content for smooth transition
      setMenuHeight((navRef.current.scrollHeight = "400px"));
    }
  }, [openMobileNav]);

  return (
    <main className="bg-[#001926] text-[#FCFCFC] pt-4 sticky top-0 z-50 px-8  ">
      <div className="w-full sm:max-w-[800] lg:max-w-[1200px] flex justify-between items-center mx-auto">
        <Link to="/" className="flex items-center w-20 h-12 md:w-28 md:h-16">
          <img
            className="w-full"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710259811890/d8c5b502-3a13-43b2-829a-ea95fadbc9bc.png"
            alt="JCI-Aso logo"
          />
        </Link>
        {width > 750 ? (
          <>
            <nav className="hidden md:flex min-w-[400px] lg:min-w-[550px] md:justify-between justify-end">
              <button
                className="hover:text-[#009FF5] transition"
                onClick={aboutRef}
              >
                About Event
              </button>
              <button
                className="hover:text-[#009FF5] transition"
                onClick={speakersRef}
              >
                Speakers
              </button>
              <button
                className="hover:text-[#009FF5] transition"
                onClick={faqRef}
              >
                FAQ
              </button>
              <button
                className="hover:text-[#009FF5] transition"
                onClick={partnerRef}
              >
                Partners
              </button>
            </nav>

            <button className="hidden lg:flex border border-[#009FF5] rounded-md px-4 py-2 hover:bg-[#009FF5] transition">
              Book a seat
            </button>
          </>
        ) : (
          <>
            <div>
              {!openMobileNav ? (
                <button
                  onClick={toggleMobileNav}
                  className="md:hidden text-[#009FF5] transition"
                >
                  <LuMenu size={30} />
                </button>
              ) : (
                <button
                  onClick={toggleMobileNav}
                  className="md:hidden text-[#009FF5] transition"
                >
                  <MdClose size={30} />
                </button>
              )}
            </div>
            {openMobileNav && (
              <div
                className="absolute top-[100%] inset-x-0 w-full transition-all duration-700 ease-in-out"
                style={{
                  height: openMobileNav ? `${menuHeight}px` : "0px",
                  opacity: openMobileNav ? 1 : 0,
                }}
              >
                <nav className="flex flex-col md:hidden items-start justify-start gap-10 bg-[#fff] text-[#001926] w-full p-4">
                  <button
                    className="hover:text-[#009FF5] transition text-xl font-bold"
                    onClick={() => {
                      aboutRef();
                      toggleMobileNav();
                    }}
                  >
                    About Event
                  </button>
                  <button
                    className="hover:text-[#009FF5] transition text-xl font-bold"
                    onClick={() => {
                      speakersRef();
                      toggleMobileNav();
                    }}
                  >
                    Speakers
                  </button>
                  <button
                    className="hover:text-[#009FF5] transition text-xl font-bold"
                    onClick={() => {
                      faqRef();
                      toggleMobileNav();
                    }}
                  >
                    FAQ
                  </button>
                  <button
                    className="hover:text-[#009FF5] transition text-xl font-bold"
                    onClick={() => {
                      partnerRef();
                      toggleMobileNav();
                    }}
                  >
                    Partners
                  </button>

                  <button className="border bg-[#009FF5] rounded-md px-4 py-2 hover:border-[#009FF5] text-[#fff] font-bold transition">
                    Book a seat
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default QlvNav;
