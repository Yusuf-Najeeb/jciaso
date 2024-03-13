import React, { useState } from "react";
import { jciExecutive } from "../../localdb/Executive";
import MemberFrame from "./MemberFrame";
import ExecutiveFrame from "./ExecutiveFrame";

const Excecutive = () => {
  const [exco] = useState(jciExecutive);
  return (
    <div className="flex flex-col gap-12 justify-center items-center mt-16 px-6 lg:px-16">
      <h1 className="title text-center">2024 Executive and Board Members</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center items-center gap-8 ">
        {exco.map((executive) => (
          <ExecutiveFrame executive={executive} />
        ))}
      </div>
    </div>
  );
};

export default Excecutive;
