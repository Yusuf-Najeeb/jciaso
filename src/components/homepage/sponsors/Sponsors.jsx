import React from "react";
import { sponsors } from "../../../localdb/sponsors";

const Sponsors = () => {
  console.log(sponsors);
  return (
    <div className="flex flex-col px-2 py-4 mt-6 lg:px-10 lg:py-32 lg:gap-16">
      <h1 className="title font-bold text-center text-2xl">Our Partners</h1>

      <section className="hidden md:grid sm:grid-cols-3 lg:grid-cols-4 md:gap-4 md:place-content-center md:place-items-center justify-center items-center lg:gap-16 text-semibold text-[1.2rem] sm:px-8 sm:py-4">
        {sponsors?.map((sponsor) => {
          return (
            <div className="flex flex-col gap-2 items-center">
              <div className="min-w-[100px] min-h-[100px] bg-white shadow rounded sm:sm:min-w-[300px] max-w-[300px] sm:sm:min-h-[200px] max-h-[250px] grayscale hover:grayscale-0 duration-300 ease-out hover:scale-105 group flex justify-center items-center">
                <img src={sponsor?.src} alt={sponsor?.alt} className="w-fit" />
              </div>
              <h3 className="text-12 font-semibold text-center">
                {sponsor?.name}
              </h3>
            </div>
          );
        })}
      </section>
      <section className="md:hidden">
        <p>Implement a mobile carousel here...</p>
      </section>
    </div>
  );
};

export default Sponsors;
