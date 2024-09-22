import { useState, useRef } from "react";
import speaker from "./assets/speaker.png";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import useWindowSize from "../../hooks/useWindowSize";

const Overview = () => {
  return (
    <div className="mt-2">
      <p className="sm:text-xl mb-4">
        Welcome to the Quality Leadership Value (QLV) 2024 Boot Camp! This
        premier event is designed to cultivate leadership skills, promote
        ethical practices, and inspire young professionals to contribute to
        national development. Whether you join us online or in-person, QLV 2024
        offers a unique opportunity to learn from distinguished leaders, network
        with like-minded peers, and gain valuable insights that will propel your
        career and personal growth.
      </p>

      <h4 className="text-[#9e9d9d] font-bold sm:text-xl my-8">
        Event Highlights:
      </h4>

      <ul className="sm:text-xl list-disc ml-4">
        <li className="my-4">Dates: September 28, 29, and October 1, 2024.</li>
        <li className="my-4">Format: Hybrid (Online and In-person).</li>
        <li className="my-4">
          Keynote Speakers: Renowned leaders and experts from various fields.
        </li>
        <li className="my-4">
          Workshops: Interactive sessions focusing on leadership, ethics, and
          personal development.
        </li>
        <li className="my-4">
          Networking: Opportunities to connect with peers and industry leaders.
        </li>
      </ul>

      <p className="sm:text-xl mb-4">
        Join us at QLV 2024 and be part of a transformative experience that will
        shape the future of leadership in Nigeria and beyond!
      </p>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="mt-2">
      <div className="flex items-start gap-8 mb-8">
        <h3 className="text-[1.1rem] sm:text-[1.3rem] font-bold">Day&nbsp;1</h3>
        <ul className="sm:text-xl list-disc ml-4">
          <li className="mb-4 ">
            Transformational Leadership in the Digital Age
          </li>
          <li className="mb-4 ">
            Building Resilient Organizations: Strategies for Sustainable Success
          </li>
        </ul>
      </div>

      <div className="flex items-start gap-8 mb-8">
        <h3 className="text-[1.1rem] sm:text-[1.3rem] font-bold">Day&nbsp;2</h3>
        <ul className="sm:text-xl list-disc ml-4">
          <li className="mb-4 ">
            Ethical Leadership: Leading with integrity and trust
          </li>
        </ul>
      </div>

      <div className="flex items-start gap-8 mb-8">
        <h3 className="text-[1.1rem] sm:text-[1.3rem] font-bold">Day&nbsp;3</h3>
        <ul className="sm:text-xl list-disc ml-4">
          <li className="mb-4 ">Keynote Speech</li>
          <li className="mb-4 ">High Impact Panel Sessions</li>
          <li className="mb-4 ">Team Building Activities</li>
          <li className="mb-4 ">Networking</li>
        </ul>
      </div>
    </div>
  );
};

const About = ({ sectionRef }) => {
  const [toggler, setToggler] = useState(0);
  const [height, setHeight] = useState(false);
  const { width } = useWindowSize();

  const heightRef = useRef(null);

  const toggleHeight = () => {
    setHeight(!height);

    if (height) {
      heightRef.current.scrollTop = 0;
    }
  };
  const handlePage = (index) => {
    setToggler(index);
  };

  return (
    <main
      ref={sectionRef}
      className="bg-[#FCFCFC] text-[#001926] pt-4 md:pt-[6rem] px-4 md:px-[5rem] mx-auto"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        About Event
      </h2>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <section className="relative w-full md:w-[60%]">
          <div className="border-b w-[90%]">
            <ul className="flex flex-row flex-nowrap gap-4 sm:gap-8 font-semibold text-sm sm:text-[1.2rem] cursor-pointer">
              <li
                className={
                  toggler === 0
                    ? "border-b-[3px] pb-1 border-sky-500 text-sky-600 transition duration-300"
                    : "text-black"
                }
                onClick={() => handlePage(0)}
              >
                Overview
              </li>
              <li
                className={
                  toggler === 1
                    ? "border-b-[3px] pb-1 border-sky-500 text-sky-600 transition duration-300"
                    : "text-black"
                }
                onClick={() => handlePage(1)}
              >
                Event Schedule
              </li>
            </ul>
          </div>
          <div
            ref={heightRef}
            className="p-4 transition-all duration-300 ease-in-out overflow-hidden scroll-hidden"
            style={{
              height:
                height && toggler === 0
                  ? "65%"
                  : toggler === 1
                  ? "100%"
                  : "40%",
              overflowY: height && toggler === 0 ? "scroll" : "hidden",
            }}
          >
            {toggler === 0 && <Overview />}
            {toggler === 1 && <Schedule />}
          </div>

          {width > 870 && toggler === 0 && (
            <button
              className="mt-4 font-bold text-sky-600 flex items-center"
              onClick={toggleHeight}
            >
              {height ? "Show less" : "Show more"}
              {height ? (
                <RxCaretDown size={30} className="font-bold" />
              ) : (
                <RxCaretUp size={30} className="font-bold" />
              )}
            </button>
          )}
        </section>

        <section className="hidden md:flex w-[40%] h-full max-h-full">
          <img
            src={speaker}
            alt="A prominent business expert speaking at the 2023 JCI Aso QLV event"
            className="mt-8 rounded max-h-full object-cover object-center"
          />
        </section>
      </div>
    </main>
  );
};

export default About;
