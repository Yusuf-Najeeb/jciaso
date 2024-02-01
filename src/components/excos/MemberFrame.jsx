import React from "react";

const MemberFrame = ({ member }) => {
  return (
    <div className="flex flex-col items-center gap-1 font-semibold border border-[#adacaf] p-3 rounded-md">
      <img
        className="w-[12rem] h-[12rem] object-cover rounded-md "
        src={member.image}
        alt={member.name}
      />
      <h3>{member.name}</h3>
      <p>{member.position}</p>
    </div>
  );
};

export default MemberFrame;
