import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FcNext, FcPrevious } from "react-icons/fc";
const Testimonials = () => {
  const testimonialsData = [
    {
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
        "From day one I joined JCI Aso, I am filled with gratitude for the enriching experiences and the incredible family there offering me a warm welcome and comprehensive orientation. The way the family are always readily available to guide me through the intricacies of the organization operations, fostering a sense of belonging right from the start. JCI ASO Family ethos of collaboration, growth, and also put in me an indelible mark on my approach to work and life. The culture of recognition at JCI Aso is truly motivating. allowing me to navigate challenges and seize opportunities with confidence.  Thank you JCI ASO Family . I love you all.",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710330090279/17106dbd-715f-47e4-9ba2-8f89b8b87b1c.png",
      name: "Oladejo Ayomide",

      jci: "JCI Aso",
    },
    {
      testimony:
        "Throughout my journey, JCI has provided me with invaluable opportunities to develop my leadership skills, practice effective leadership, and learn from both successes and failures. Additionally, being part of JCI has granted me the privilege of connecting with diverse individuals and gaining insights from their unique perspectives.",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710320101294/2172881a-e34f-453d-937d-875ca9cd9686.png",
      name: "Olayinka Solomon",
      jci: "JCI Aso",
    },
    {
      testimony:
        "Joining the Junior Chamber International (JCI) Aso was a decision driven by my desire to make a tangible difference in my community. JCI mission of providing development opportunities for young people resonated deeply with me. As a member,   I was eager to dive into the world of community service and personal development. My journey with JCI Aso began with a warm welcome from passionate leaders and members. My first project was that I was on all the committee for the JCI Aso project in the year 2023 and the enthusiasm and teamwork displayed during this project and programs were truly inspiring. During this project and programs, I learned the importance of persistence and creative problem-solving during these times. My experience with JCI Aso has been nothing short of transformative. It has taught me the power of collective action and the importance of community service. I encourage everyone, especially the youth, to get involved in JCI and discover the impact they can make.  Thank you for the opportunity.",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710332584383/73b97125-aaaa-4021-8483-89e1f10f0287.png",
      name: "Idris Omolaja",
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
    prevArrow: <FcPrevious />,
    nextArrow: <FcNext />,
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        {/* Add your custom left arrow icon or styles here */}
        <div>Previous</div>
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        {/* Add your custom right arrow icon or styles here */}
        <div>Next</div>
      </div>
    );
  };

  return (
    <div className=" p-5 lg:px-20 lg:py-16">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-neutral-100 mb-8 text-center">
        Testimonials
      </h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="text-center bg-gray-200 rounded-lg ">
            <div className="flex flex-col gap-2 lg:flex-row lg:gap-12 items-center p-5">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.title}
                className="mx-auto rounded-md shadow-lg lg:w-[438px]"
                style={{ maxWidth: "50%", height: "20%" }}
              />
              <div className="flex flex-col  items-center">
                <div>
                  <RiDoubleQuotesL className="  text-[#222C2C]" size={50} />
                  {testimonial.testimony}
                  <p className=" mt-4 text-lg text-gray-800 dark:text-neutral-100 font-semibold">
                    <RiDoubleQuotesR className=" text-[#222C2C]" size={50} />
                  </p>
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="opacity-60">{testimonial.jci}</p>
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
