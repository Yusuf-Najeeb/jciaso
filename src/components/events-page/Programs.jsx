import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Image1 from "../../assests/images/pic1.png";
import Image2 from "../../assests/images/pic2.png";
import Image3 from "../../assests/images/pic3.png";
import Image4 from "../../assests/images/pic4.png";
const Programs = () => {
  return (
    <main className="p-2 sm:px-12">
      <div className="flex flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-4xl font-semibold leading-normal">
            Public speaking champion
          </h4>
          <p className="leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            quia quod quae, asperiores ad optio eum placeat perferendis
            distinctio consequatur provident iste. Dicta architecto eum ab
            cupiditate voluptas saepe veritatis!
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img src={Image1} alt="" />
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-4xl font-semibold leading-normal">Save a Soul</h4>
          <p className="leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            quia quod quae, asperiores ad optio eum placeat perferendis
            distinctio consequatur provident iste. Dicta architecto eum ab
            cupiditate voluptas saepe veritatis!
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img src={Image2} alt="" />
        </div>
      </div>

      <div className="flex flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-4xl font-semibold leading-normal">
            Global Digital Economy Summit
          </h4>
          <p className="leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            quia quod quae, asperiores ad optio eum placeat perferendis
            distinctio consequatur provident iste. Dicta architecto eum ab
            cupiditate voluptas saepe veritatis!
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img src={Image3} alt="" />
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-4xl font-semibold leading-normal">
            Creative Young Entrepreneurship Awards
          </h4>
          <p className="leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            quia quod quae, asperiores ad optio eum placeat perferendis
            distinctio consequatur provident iste. Dicta architecto eum ab
            cupiditate voluptas saepe veritatis!
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img src={Image4} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Programs;
