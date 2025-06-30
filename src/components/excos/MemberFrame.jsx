import React from "react";

const MemberFrame = ({ member }) => {
  return (
    <fiure className="flex flex-col items-center gap-1 font-semibold border border-[#adacaf] rounded-md h-[300px]">
      <img
        className="w-full h-full max-h-[240px] object-cover object-top rounded-md"
        loading="lazy"
        src={member.image}
        alt={member.name}
      />
      <figcaption className="text-center mb-4">
        <h3 className="text-center">
          <span>{member.sen}</span> {member.name}
        </h3>
        <p className="text-black/80 font-normal">{member.position}</p>
      </figcaption>
    </fiure>
  );
};

export default MemberFrame;
