import React from "react";
import Marquee from "react-fast-marquee";
import { sponsors } from "../../localdb/sponsors";

const Sponsors = ({ sectionRef }) => {
  return (
    <div
      ref={sectionRef}
      className="flex flex-col px-2 py-8 mt-4 lg:px-10  lg:gap-8"
    >
      <h1 className="title font-semibold text-center sm:text-2xl lg:text-5xl">
        Our Partners
      </h1>
      <section className="">
        <Marquee speed={100} pauseOnHover={true}>
          {sponsors?.map((sponsor) => {
            return (
              <div key={sponsor?.id}>
                <div className="min-w-[100px] min-h-[100px] bg-white shadow rounded sm:sm:min-w-[300px] max-w-[300px] sm:sm:min-h-[200px] max-h-[200px] flex justify-center items-center mx-4 drop-shadow-sm shadow-[#]">
                  <img
                    src={sponsor?.src}
                    alt={sponsor?.alt}
                    className="w-fit object-contain object-center"
                  />
                </div>
              </div>
            );
          })}
        </Marquee>
      </section>
      <div className="w-fit-content mx-auto">
        <button
          className="bg-[#009FF5] text-white border border-transparent transition hover:border hover:border-[#009FF5] hover:bg-transparent hover:text-[#001926] rounded-md px-4 md:px-8 py-1 md:py-3 mt-4 mb-8
        sm:text-xl"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe0D3SUoBPCdb91cjm9Qkxpyb030rsOWeoyijxBkeNJ4qDlhQ/viewform "
            target="_blank"
            rel="noreferrer"
          >
            For Sponsorship
          </a>
        </button>
      </div>
    </div>
  );
};

export default Sponsors;
