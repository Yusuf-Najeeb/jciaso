import React from "react";

const Testimonials = () => {
  return (
    <div className="p-5 relative">
      <h1 className="bg-white font-[Karla] text-center text-5xl font-medium">
        Our Stories and Testimonials
      </h1>
      <div className="bg-slate-700 p-10 mt-8">
        <div className="flex flex-col  gap-32 justify-between lg:gap-8 lg:flex-row">
          <div className="border flex flex-col justify-center items-center p-6 rounded-md shadow-lg relative">
            <div className="px-6 py-4">
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                labore accusamus doloremque praesentium laboriosam sint dolor
                quis doloribus autem. Nobis hic iste exercitationem et,
                molestiae possimus totam unde dolorum! Ipsam?
              </p>
            </div>
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706370969019/c0fd8ef9-4c63-42f6-86d2-a69504f9d216.png"
              alt="Profile"
              className="absolute bottom-[-30px] left-1/2 top-15 transform -translate-x-1/2 translate-y-2 w-20 h-20 rounded-full border"
            />
            <p className="text-white text-sm absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 translate-y-8">
              Name <br /> Position
            </p>
          </div>
          <div className="border flex flex-col justify-center items-center p-6 rounded-md shadow-lg relative">
            <div className="px-6 py-4">
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                labore accusamus doloremque praesentium laboriosam sint dolor
                quis doloribus autem. Nobis hic iste exercitationem et,
                molestiae possimus totam unde dolorum! Ipsam?
              </p>
            </div>
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706370969019/c0fd8ef9-4c63-42f6-86d2-a69504f9d216.png"
              alt="Profile"
              className="absolute bottom-[-30px] left-1/2 top-15 transform -translate-x-1/2 translate-y-2 w-20 h-20 rounded-full border"
            />
            <p className="text-white text-sm absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 translate-y-8">
              Name <br /> Position
            </p>
          </div>
          <div className="border flex flex-col justify-center items-center p-6 rounded-md shadow-lg relative">
            <div className="px-6 py-4">
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                labore accusamus doloremque praesentium laboriosam sint dolor
                quis doloribus autem. Nobis hic iste exercitationem et,
                molestiae possimus totam unde dolorum! Ipsam?
              </p>
            </div>
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706370969019/c0fd8ef9-4c63-42f6-86d2-a69504f9d216.png"
              alt="Profile"
              className="absolute bottom-[-30px] left-1/2 top-15 transform -translate-x-1/2 translate-y-2 w-20 h-20 rounded-full border"
            />
            <p className="text-white text-sm absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 translate-y-8">
              Name <br /> Position
            </p>
          </div>
        </div>
        <div className="flex justify-end text-right  mt-20">
          <button className=" text-white py-2 px-4 rounded-md border text-right">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
