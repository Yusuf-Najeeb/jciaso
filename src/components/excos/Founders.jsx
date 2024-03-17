import React, { useState } from "react";
import MemberFrame from "./MemberFrame";
import { founder } from "../../localdb/FoundingLeaders";

const Founders = () => {
  const [exco] = useState(founder);
  return (
    <div className="flex flex-col gap-12 justify-center items-center py-24 px-6 lg:px-16">
      <div className="flex flex-col items-center">
        <h1 className="title text-center ">Founding Leaders</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  justify-center items-center gap-8  ">
        {exco.map((member) => (
          <MemberFrame member={member} />
        ))}
      </div>
    </div>
  );
};

export default Founders;
