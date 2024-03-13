import React, { useState } from "react";
import { jciExecutive } from "../../localdb/Executive";
import MemberFrame from "./MemberFrame";
import ExecutiveFrame from "./ExecutiveFrame";

const Excecutive = () => {
  const [exco] = useState(jciExecutive);
  return (
    <div className="flex flex-col gap-12 justify-center items-center mt-16 px-6 lg:px-16">
      <h1 className="title text-center">2024 Executives and Board Members</h1>
      <div className="flex flex-col gap-20 items-center">
        <div className="flex flex-col items-center gap-1 font-semibold p-1">
          <img
            className=" object-cover rounded-3xl lg:w-[40%] w-[60%] border-[#C7C4B8]"
            loading="lazy"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710327853850/81c3ab36-903a-4a77-bde4-cf8cbe37a0cd.png"
            alt="President"
          />
          <p className="opacity-80">JCIN Amb.</p>
          <h3 className="text-center font-bold">Yetunde A. Adebisi</h3>
          <p className="text-center">Local Organization President</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center items-center lg:gap-16 gap-4">
          {exco.map((executive) => (
            <ExecutiveFrame executive={executive} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Excecutive;
