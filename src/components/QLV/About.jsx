import { useState, useRef } from "react";
import speaker from "./assets/speaker.png";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const Overview = () => {
  return (
    <div className="mt-2">
      <p className="text-xl mb-4">
        Welcome to the Quality Leadership Value (QLV) 2024 Boot Camp! This
        premier event is designed to cultivate leadership skills, promote
        ethical practices, and inspire young professionals to contribute to
        national development. Whether you join us online or in-person, QLV 2024
        offers a unique opportunity to learn from distinguished leaders, network
        with like-minded peers, and gain valuable insights that will propel your
        career and personal growth.
      </p>

      <h4 className="text-[#9e9d9d] font-bold text-xl my-8">
        Event Highlights:
      </h4>

      <ul className="text-xl list-disc ml-4">
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

      <p className="text-xl mb-4">
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
        <h3 className="text-2xl font-bold">Day&nbsp;1</h3>
        <ul className="text-xl list-disc ml-4">
          <li className="my-4 leading-7">
            Transformational Leadership in the Digital Age
          </li>
          <li className="my-4 leading-7">
            Building Resilient Organizations: Strategies for Sustainable Success
          </li>
        </ul>
      </div>

      <div className="flex items-start gap-8 mb-8">
        <h3 className="text-2xl font-bold">Day&nbsp;2</h3>
        <ul className="text-xl list-disc ml-4">
          <li className="my-4 leading-7">
            Ethical Leadership: Leading with integrity and trust
          </li>
        </ul>
      </div>

      <div className="flex items-start gap-8 mb-8">
        <h3 className="text-2xl font-bold">Day&nbsp;3</h3>
        <ul className="text-xl list-disc ml-4">
          <li className="my-4 leading-7">Keynote Speech</li>
          <li className="my-4 leading-7">High Impact Panel Sessions</li>
          <li className="my-4 leading-7">Team Building Activities</li>
          <li className="my-4 leading-7">Networking</li>
        </ul>
      </div>
    </div>
  );
};

const About = () => {
  const [toggler, setToggler] = useState(0);
  const [height, setHeight] = useState(false);

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
    <main className="bg-[#FCFCFC] text-[#001926] pt-[6rem] pb-8 px-[5rem]">
      <h2 className="text-5xl font-bold text-center">About Event</h2>

      <div className="flex flex-col md:flex-row gap-8">
        <section className="relative w-[60%]">
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
              height: toggler === 0 && height ? "65%" : "40%",
              overflowY: height ? "scroll" : "hidden",
            }}
          >
            {toggler === 0 && <Overview />}
            {toggler === 1 && <Schedule />}
          </div>

          {toggler === 0 && (
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

        <section className="w-[40%]">
          <img
            src={speaker}
            alt="A prominent business leader speaking at the 2023 JCI Aso QLV event"
            className="mt-8"
          />
        </section>
      </div>
    </main>
  );
};

export default About;
