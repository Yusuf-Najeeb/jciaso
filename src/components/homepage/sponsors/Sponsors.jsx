import React from "react";
import Marquee from "react-fast-marquee";
import { sponsors } from "../../../localdb/sponsors";

const Sponsors = () => {
  return (
    <div className="flex flex-col px-2 py-4 mt-6 lg:px-10 lg:py-32 lg:gap-16">
      <h1 className="title font-semibold text-center sm:text-2xl lg:text-3xl">
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
                    className="w-fit"
                  />
                </div>
                <h3 className="text-12 font-semibold text-center mt-3">
                  {sponsor?.name}
                </h3>
              </div>
            );
          })}
        </Marquee>
      </section>
    </div>
  );
};

export default Sponsors;
