import React, { useState } from "react";
import { jciExecutive } from "../../localdb/Executive";
import ExecutiveFrame from "./ExecutiveFrame";

const Excecutive = () => {
  const [exco] = useState(jciExecutive);
  return (
    <div className="flex flex-col gap-12 justify-center items-center mt-16 px-6 lg:px-16">
      <h1 className="title text-center">2025 Executives and Board Members</h1>
      <div className="flex flex-col gap-20 items-center">
        <div className="flex flex-col items-center gap-1 font-semibold p-1">
          <img
            className=" object-cover rounded-3xl lg:w-[100%] w-[80%] min-h-[400px] max-h-[400px] border-[#ffd700] border-2"
            loading="lazy"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1751148887212/16c42dcd-5a5b-43a7-bcbf-f79dab33efe3.jpeg"
            alt="President"
          />
          <p className="opacity-80">JCIN Amb.</p>
          <h3 className="text-center font-bold">Felix Sunday Akinyemi</h3>
          <p className="text-center">Local Organization President</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center items-center lg:gap-16 gap-4">
          {exco.map((executive) => (
            <ExecutiveFrame executive={executive} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Excecutive;
