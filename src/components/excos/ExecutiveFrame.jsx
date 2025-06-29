import React from "react";

const ExecutiveFrame = ({ executive }) => {
  return (
    <div className="flex flex-col items-center gap-1 font-semibold p-1 mb-4 min-h-[300px] max-h-[300px]">
      <img
        className="object-cover rounded-3xl w-full h-full min-h-[300px] max-h-[300px]  border-[#C7C4B8]"
        loading="lazy"
        src={executive.image}
        alt={executive.name}
      />
      <h3 className="text-center font-semibold leading-tight">
        {executive.name}
      </h3>
      <p className="text-center opacity-60 text-sm font-normal">
        {executive.position}
      </p>
    </div>
  );
};

export default ExecutiveFrame;
