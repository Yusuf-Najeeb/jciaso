import React from "react";
import { useState } from "react";

import Program from "./Programs";
import Events from "./Events";
import Projects from "./Projects";
import Training from "./Training";

const EventHeader = () => {
  const [toggler, setToggler] = useState(0);
  const handlePage = (index) => {
    setToggler(index);
  };
  return (
    <>
      <div className="mx-12 border-b my-4">
        <ul className="flex flex-row flex-nowrap gap-4 font-semibold text-[1.2rem] cursor-pointer">
          <li
            className={
              toggler === 0
                ? "border-b-[3px] pb-1 border-sky-500 text-sky-600 transition duration-300"
                : "text-black"
            }
            onClick={() => handlePage(0)}
          >
            Programs
          </li>
          <li
            className={
              toggler === 1
                ? "border-b-[3px] pb-1 border-sky-500 text-sky-600 transition duration-300"
                : "text-black"
            }
            onClick={() => handlePage(1)}
          >
            Events
          </li>
          <li
            className={
              toggler === 2
                ? "border-b-[3px] pb-1 border-sky-500 text-sky-600 transition duration-300"
                : "text-black"
            }
            onClick={() => handlePage(2)}
          >
            Projects
          </li>
          <li
            className={
              toggler === 3
                ? "border-b-[3px] pb-1 border-sky-500 text-sky-600 transition duration-300"
                : "text-black"
            }
            onClick={() => handlePage(3)}
          >
            Trainings
          </li>
        </ul>
      </div>
      <div>
        {toggler === 0 && <Program />}
        {toggler === 1 && <Events />}
        {toggler === 2 && <Projects />}
        {toggler === 3 && <Training />}
      </div>
    </>
  );
};

export default EventHeader;
