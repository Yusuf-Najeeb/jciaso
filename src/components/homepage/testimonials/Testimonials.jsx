import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsQuote } from "react-icons/bs";

const Testimonials = () => {
  const testimonialsData = [
    {
      title: "Most Outstanding Performance award",
      testimony:
        "JCI Aso provided a platform for self-discovery and an avenue for self-development. The leaders and members are amazing. I am super grateful",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710164700153/d9edb3ac-5887-4a52-962d-8af1b96d135e.png",
      name: "Shamsudeen Aderoju",
      position: "Incumbent Secretary",
      jci: "JCI Aso",
    },
    {
      testimony:
        "JCI Aso provided a platform for self-discovery and an avenue for self-development. The leaders and members are amazing. I am super grateful",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710164700153/d9edb3ac-5887-4a52-962d-8af1b96d135e.png",
      name: "Shamsudeen Aderoju",
      position: "Incumbent Secretary",
      jci: "JCI Aso",
    },
    // Add more testimonials data here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
  };

  return (
    <div className="">
      <h1 className="text-center text-zinc-900 text-5xl font-medium font-Roboto leading-10">
        Testimonials
      </h1>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div>
            <div
              key={index}
              className="flex items-center justify-center rounded-md shadow-lg mx-auto "
            >
              <div className="w-[1000px] h-[502px] m-5 p-4 bg-gray-200 rounded-lg flex justify-center gap-12 items-center ">
                <img
                  src={testimonial.imageSrc}
                  className="w-[438px] h-[398px] rounded-md"
                  alt={testimonial.title}
                />
                <div className="text-left p-6  relative my-12">
                  <BsQuote
                    className="hidden md:block text-[#222C2C] absolute left-4 top-0 -ml-6 -mt-4 mb-2"
                    size={50}
                  />
                  <div className="w-96 text-black text-[25px] font-normal font-['Roboto']">
                    {testimonial.testimony}
                  </div>

                  <BsQuote
                    className="hidden md:block text-[#222C2C] absolute right-4 bottom-30 -mr-6 -mt-4 origin-center rotate-180"
                    size={50}
                  />
                  <div className="text-zinc-800 text-[20px] font-semibold mt-14">
                    {testimonial.name}
                  </div>
                  <div className="text-zinc-800 text-base font-normal">
                    {testimonial.position}
                  </div>
                  <div className="text-zinc-800 text-[24px] font-normal">
                    {testimonial.jci}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
