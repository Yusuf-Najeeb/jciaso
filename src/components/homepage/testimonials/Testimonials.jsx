import React from "react";

const Testimonials = () => {
  return (
    <div className="p-5 mt-24 relative">
      <h1 className="title bg-white font-[Karla] text-center text-5xl font-medium">
        Our Stories and Testimonials
      </h1>
      <div className="bg-slate-700 p-10 mt-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-[400px] border flex flex-col justify-center p-2 items-center rounded-md shadow-lg relative lg:p-6 testimonial-card">
            <div className="px-3 py-4 pb-16 lg:px-6">
              <p className="text-white text-base">
                From day one I joined JCI Aso, I am filled with gratitude for
                the enriching experiences and the incredible family there
                offering me a warm welcome and comprehensive orientation.
              </p>
            </div>
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706444805830/2c42305e-c6c1-4af6-82f9-9daccad1498d.jpeg"
              alt="Profile"
              className="absolute bottom-[-30px] left-1/2 top-15 transform -translate-x-1/2 translate-y-2 w-20 h-20 rounded-full border"
            />
            <p className="text-white text-sm absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 translate-y-8">
              Oladejo Ayomide <br /> Position
            </p>
          </div>

          <div className="w-full lg:w-[400px] border flex flex-col justify-center p-2 items-center rounded-md shadow-lg relative lg:p-6 testimonial-card">
            <div className="px-3 py-4 pb-16 lg:px-6">
              <p className="text-white text-base">
                Since joining, I have learnt the culture of excellence,
                partnership and collaboration, community impact, leadership,
                accountability and I've had the chance to showcase my public
                speaking skills.
              </p>
            </div>
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706444878598/999174b0-5108-48ba-9524-067c0d0534c9.jpeg"
              alt="Profile"
              className="absolute bottom-[-30px] left-1/2 top-15 transform -translate-x-1/2 translate-y-2 w-20 h-20 rounded-full border"
            />
            <p className="text-white text-sm absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 translate-y-8">
              Joshua Aigbona Oghorialu <br /> Position
            </p>
          </div>

          <div className="w-full lg:w-[400px] border flex flex-col justify-center p-2 items-center rounded-md shadow-lg relative lg:p-6 testimonial-card">
            <div className="px-3 py-4 pb-16 lg:px-6">
              <p className="text-white text-base">
                JCI Aso provided a platform for self-discovery and an avenue for
                self-development. The leaders and members are amazing. I am
                super grateful.
              </p>
            </div>
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706444735532/21a414c9-7a09-47ce-ae8d-72deb58dc87f.jpeg"
              alt="Profile"
              className="absolute bottom-[-30px] left-1/2 top-15 transform -translate-x-1/2 translate-y-2 w-20 h-20 rounded-full border"
            />
            <p className="text-white text-sm absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 translate-y-8">
              Shamsudeen Aderoju <br /> JCI Aso Secretary
            </p>
          </div>
        </div>
        <div className="flex justify-end text-right mt-8 lg:mt-20">
          <button className="text-white py-2 px-4 rounded-md border hover:border-sky-500 hover:text-sky-500 text-right">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
