import { useState, useEffect, useRef } from "react";
import { PiCaretUpBold, PiCaretDownBold } from "react-icons/pi";

const Accordion = ({ data }) => {
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
    <div className="w-full h-full mx-auto">
      <div className="bg-white p-4 md:p-8">
        <button
          onClick={toggleAccordion}
          className="w-full flex justify-between items-center text-left transition-all duration-200"
        >
          <span className="font-bold text-xl w-[90%] sm:w-full">
            {data.title}
          </span>
          {isOpen ? (
            <PiCaretUpBold className="p-1 text-3xl md:text-5xl bg-sky-600 hover:bg-white hover:drop-shadow text-white hover:text-sky-600 rounded-full transition ease-in-out " />
          ) : (
            <PiCaretDownBold className="p-1 text-3xl md:text-5xl bg-sky-600 hover:bg-white hover:drop-shadow text-white hover:text-sky-600 rounded-full transition ease-in-out " />
          )}
        </button>
        {isOpen && (
          <div
            ref={contentRef}
            style={{ height }}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <p className="text-xl text-[#333] w-full sm:w-[60%] my-3">
              {data.content}
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
    title: "Who can attend QLV 2024?",
    content:
      "The event is open to young professionals, aspiring leaders, JCI Aso members, and non-members interested in leadership and national development.",
  },
  {
    title: "What are the dates and formats of the event?",
    content:
      "The event will be conducted in a hybrid format, allowing participants to join both online and in person. QLV 2024 will take place virtually on the 6th and 7th of November, and physically on the 9th of November, 2024.",
  },
  {
    title: "How can I register for the event?",
    content:
      "You can register for the event by completing the registration form on this page. Ensure all necessary information is provided and select your preferred payment method.",
  },
  {
    title: "What is cost of attending QLV 2024?",
    content:
      "The registration fee for JCI Aso members is N10,000, while non-members pay N20,000. Discounts are available for early birds, so keep an eye out for that.",
  },
  {
    title: "Will there be networking opportunities?",
    content:
      "Yes, QLV 2024 includes numerous opportunities for networking with peers, industry leaders, and keynote speakers. We also have a specially designed networking game to help you sharpen your networking skills.",
  },
];

const FAQs = ({ sectionRef }) => {
  return (
    <main
      ref={sectionRef}
      className="bg-[#FCFCFC] text-[#001926] pt-[6rem] px-4 md:px-[5rem] mx-auto mb-8"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">FAQs</h2>
      <div>
        {data.map((item, i) => {
          return <Accordion key={i} data={item} />;
        })}
      </div>
    </main>
  );
};

export default FAQs;
