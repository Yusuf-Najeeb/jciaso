import React from "react";

const ExecutiveFrame = ({ executive }) => {
  return (
    <div className="flex flex-col items-center gap-1 font-semibold p-1 mb-4 h-[300px]">
      <img
        className=" object-cover rounded-3xl  border-[#C7C4B8]"
        loading="lazy"
        src={executive.image}
        alt={executive.name}
      />
      <p className="opacity-80">{executive.sen}</p>
      <h3 className="text-center">{executive.name}</h3>
      <p className="text-center opacity-60">{executive.position}</p>
    </div>
  );
};

export default ExecutiveFrame;
