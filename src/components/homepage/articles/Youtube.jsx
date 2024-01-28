import React from "react";
import ReactPlayer from "react-player/youtube";
import "../../../App.css";

const videos = [
  {
    id: 1,
    vid: "https://www.youtube.com/watch?v=qH9EnpfwHKQ&t",
  },
  {
    id: 2,
    vid: "https://www.youtube.com/watch?v=Vn5sDGrl-QE",
  },
  {
    id: 3,
    vid: "https://www.youtube.com/watch?v=aoW0Hl6CR2M",
  },
  {
    id: 4,
    vid: "https://www.youtube.com/watch?v=jAc8QmkLPZU",
  },
];

const Youtube = () => {
  return (
    <div className="w-1/2 max-h-[70vh] overflow-y-scroll youtube">
      {videos.map((item) => (
        <div className="w-[95%] my-6" key={item.id}>
          <ReactPlayer url={item.vid} width={{ width: "80%" }} />
        </div>
      ))}
    </div>
  );
};

export default Youtube;
