import React from "react";

const Mission = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 px-6 mt-20 lg:px-16">
      <h1 className="text-[#01A85A] font-bold text-[2rem]">Mission & Vision</h1>
      <section className="flex flex-wrap justify-center gap-10">
        <div className="border border-[#000] flex flex-col items-center text-center gap-4 p-4 rounded-lg lg:w-[30%]">
          <h3 className="text-[#328CB1] text-[1.4rem]">Vision</h3>
          <p>Creating value in our environment through focusing on people.</p>
        </div>
        <div className="border border-[#000] flex flex-col items-center text-center gap-4 p-4 rounded-lg lg:w-[30%]">
          <h3 className=" text-[1.4rem]">Mission</h3>
          <p>
            To identify young leaders with the intention of providing them with
            leadership development opportunities to discover and develop their
            talent while impacting our immediate environment.
          </p>
        </div>
        {/* <div className="border border-[#000] flex flex-col items-center gap-4 p-4 rounded-lg lg:w-[30%]">
          <h3 className="text-[#328CB1] text-[1.4rem]">Values</h3>
          <p>
            <span className="py-2 font-bold text-[#01A85A] ">We Believe</span>
            <br />
            <ul className="flex flex-col items-start gap-2 list-disc px-2 ">
              <li>
                That Faith in God gives meaning and purpose to human lives
              </li>
              <li>
                That the brotherhood of man transcends the sovereignty of
                nations
              </li>
              <li>
                That Economic Justice can best be won by free men through free
                enterprise
              </li>
              <li>That Government should be of law, rather than of men</li>
              <li>That Earth Great treasure lies in human personality and</li>
              <li>That Service to humanity is the best work of life</li>
            </ul>
          </p>
        </div> */}
      </section>
    </section>
  );
};

export default Mission;
