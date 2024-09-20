import React from "react";

import { useState, useEffect, useRef } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

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
    <div className="w-full mx-auto mt-5">
      <div className="bg-white p-8 rounded-lg">
        <button
          onClick={toggleAccordion}
          className="w-full flex justify-between items-center text-left transition-all duration-200"
        >
          <span className="font-medium">{content.title}</span>
          {isOpen ? (
            <FaCaretUp className="text-gray-500" />
          ) : (
            <FaCaretDown className="text-gray-500" />
          )}
        </button>
        {isOpen && (
          <div
            ref={contentRef}
            style={{ height }}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <p className="text-gray-600">{content.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const data = [
  {
    title: "What is the duration of the event?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis repellat eius natus, veritatis porro ratione error voluptatum ullam possimus ut vitae. Libero deserunt temporibus voluptates rerum quos cumque. Magni.",
  },
  {
    title: "What is the duration of the event?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis repellat eius natus, veritatis porro ratione error voluptatum ullam possimus ut vitae. Libero deserunt temporibus voluptates rerum quos cumque. Magni.",
  },
  {
    title: "What is the duration of the event?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis repellat eius natus, veritatis porro ratione error voluptatum ullam possimus ut vitae. Libero deserunt temporibus voluptates rerum quos cumque. Magni.",
  },
];

const FAQs = () => {
  return (
    <main className="bg-[#FCFCFC] text-[#001926] pt-[6rem] px-[5rem] mx-auto mb-8">
      <h2 className="text-5xl font-bold text-center">FAQs</h2>
      <div>
        {data.map((item, i) => {
          return <Accordion key={i} content={item} />;
        })}
      </div>
    </main>
  );
};

export default FAQs;
