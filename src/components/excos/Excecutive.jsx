import React, { useState } from "react";
import { jciExecutive } from "../../localdb/Executive";
import MemberFrame from "./MemberFrame";

const Excecutive = () => {
  const [exco] = useState(jciExecutive);
  return (
    <div className="flex flex-col gap-12 justify-center items-center mt-16 px-6 lg:px-16">
      <h1 className="title">Meet the Executive Members</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center items-center gap-8 ">
        {exco.map((member) => (
          <MemberFrame member={member} />
        ))}
      </div>
    </div>
  );
};

export default Excecutive;
