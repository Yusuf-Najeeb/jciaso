import React from "react";

const AboutMission = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-6 px-6 my-20 lg:px-16">
      <h1 className="text-[#01A85A] font-bold text-[2rem] title text-center">
        Mission, <span className="text-sky-500"> Vision & </span> Value.
      </h1>
      <p className="my-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
        reprehenderit aspernatur quia harum ipsum illo tempore libero error,
        eligendi dicta.
      </p>

      <section className="flex flex-wrap justify-center text-center gap-10">
        <div className="border-2 border-[#000] flex flex-col items-center text-center gap-4 p-4 rounded-lg lg:w-[30%]">
          <h3 className="text-[#328CB1] text-[1.4rem]">Vision</h3>
          <p>Creating value in our environment through focusing on people.</p>
        </div>
        <div className="border-2 border-[#000] flex flex-col items-center text-center gap-4 p-4 rounded-lg lg:w-[30%]">
          <h3 className=" text-[1.4rem]">Mission</h3>
          <p>
            To identify young leaders with the intention of providing them with
            leadership development opportunities to discover and develop their
            talent while impacting our immediate environment.
          </p>
        </div>
        <div className="border-2 border-[#000] flex flex-col items-center gap-4 p-4 rounded-lg lg:w-[30%]">
          <h3 className="text-[#328CB1] text-[1.4rem]">Values</h3>
          <p>
            That Faith in God gives meaning and purpose to human lives That the
            brotherhood of man transcends the sovereignty of nations Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Eum, amet.
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutMission;
