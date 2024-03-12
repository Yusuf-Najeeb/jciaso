import React from "react";
import { Link } from "react-router-dom";

const JoinJCIButton = (props) => {
  
  return (
    <Link to="/join">
      <button className="bg-[#20B4E3] text-[#FFF] px-6 py-3 rounded-md font-semibold hover:bg-[#439eb9] duration-300 shadow">
        {props.title || "Join JCI ASO"}
      </button>
    </Link>
  );
};

export default JoinJCIButton;
