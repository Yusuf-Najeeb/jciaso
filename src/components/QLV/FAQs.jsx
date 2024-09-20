import React from "react";

import { useState, useEffect, useRef } from "react";
import { PiCaretUpBold, PiCaretDownBold } from "react-icons/pi";

const Accordion = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="w-full mx-auto">
      <div className="bg-white p-8">
        <button
          onClick={toggleAccordion}
          className="w-full flex justify-between items-center text-left transition-all duration-200"
        >
          <span className="font-medium text-2xl">{content.title}</span>
          {isOpen ? (
            <PiCaretUpBold
              className="p-1 text-xl bg-sky-600 hover:bg-white hover:drop-shadow text-white hover:text-sky-600 rounded-full transition ease-in-out "
              size={40}
            />
          ) : (
            <PiCaretDownBold
              className="p-1 text-xl bg-sky-600 hover:bg-white hover:drop-shadow text-white hover:text-sky-600 rounded-full transition ease-in-out "
              size={40}
            />
          )}
        </button>
        {isOpen && (
          <div
            ref={contentRef}
            style={{ height }}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <p className="text-xl text-[#333] w-[60%] my-3">
              {content.content}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const data = [
  {
    title: "What is QLV 2024 Boot Camp?",
    content:
      "QLV 2024 Boot Camp is an event designed to help develop leadership skills, promote ethical practices, and inspire young professionals. It includes keynote speeches, interactive workshops, and networking opportunities.",
  },
  {
    title: "What is QLV 2024 Boot Camp?",
    content:
      "QLV 2024 Boot Camp is an event designed to help develop leadership skills, promote ethical practices, and inspire young professionals. It includes keynote speeches, interactive workshops, and networking opportunities.",
  },
  {
    title: "What is QLV 2024 Boot Camp?",
    content:
      "QLV 2024 Boot Camp is an event designed to help develop leadership skills, promote ethical practices, and inspire young professionals. It includes keynote speeches, interactive workshops, and networking opportunities.",
  },
  {
    title: "What is QLV 2024 Boot Camp?",
    content:
      "QLV 2024 Boot Camp is an event designed to help develop leadership skills, promote ethical practices, and inspire young professionals. It includes keynote speeches, interactive workshops, and networking opportunities.",
  },
  {
    title: "What is QLV 2024 Boot Camp?",
    content:
      "QLV 2024 Boot Camp is an event designed to help develop leadership skills, promote ethical practices, and inspire young professionals. It includes keynote speeches, interactive workshops, and networking opportunities.",
  },
  {
    title: "What is QLV 2024 Boot Camp?",
    content:
      "QLV 2024 Boot Camp is an event designed to help develop leadership skills, promote ethical practices, and inspire young professionals. It includes keynote speeches, interactive workshops, and networking opportunities.",
  },
  {
    title: "What is QLV 2024 Boot Camp?",
    content:
      "QLV 2024 Boot Camp is an event designed to help develop leadership skills, promote ethical practices, and inspire young professionals. It includes keynote speeches, interactive workshops, and networking opportunities.",
  },
];

const FAQs = () => {
  return (
    <main className="bg-[#FCFCFC] text-[#001926] pt-[6rem] px-[5rem] mx-auto mb-8">
      <h2 className="text-5xl font-bold text-center mb-4">FAQs</h2>
      <div>
        {data.map((item, i) => {
          return <Accordion key={i} content={item} />;
        })}
      </div>
    </main>
  );
};

export default FAQs;
