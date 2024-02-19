import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Image1 from "../../assests/images/pic8.png";

const Events = () => {
  return (
    <main className="p-2 sm:px-12">
      <div className="flex flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-4xl font-semibold leading-normal">
            Southern Conference
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
          <img className="max-h-[300px] w-full rounded" src={Image1} alt="" />
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-4xl font-semibold leading-normal">
            {" "}
            Southern Conference
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
          <img className="max-h-[300px] w-full rounded" src={Image1} alt="" />
        </div>
      </div>

      <div className="flex flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-4xl font-semibold leading-normal">
            Collegiate Conference
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
          <img className="max-h-[300px] w-full rounded" src={Image1} alt="" />
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-4xl font-semibold leading-normal">
            National Convention
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
          <img className="max-h-[300px] w-full rounded" src={Image1} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Events;
