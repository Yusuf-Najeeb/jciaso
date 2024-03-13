import React from "react";

const MemberFrame = ({ member }) => {
  return (
    <div className="flex flex-col items-center gap-1 font-semibold border border-[#adacaf] p-3 rounded-md h-[300px]">
      <img
        className="w-[12rem] h-[12rem] object-cover rounded-md"
        loading="lazy"
        src={member.image}
        alt={member.name}
      />
      <p className="opacity-80">{member.sen}</p>
      <h3 className="text-center">{member.name}</h3>
      <p className="opacity-60">{member.position}</p>
    </div>
  );
};

export default MemberFrame;
