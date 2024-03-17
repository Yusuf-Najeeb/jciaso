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
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710320103431/d5d2abd1-51ad-4ac2-9094-961438d71677.png",
      name: "Shamsudeen Aderoju",
      position: "Incumbent Secretary",
      jci: "JCI Aso",
    },
    {
      testimony:
        "JCI Aso holds a special place in my heart. Since joining in 2011, it's been instrumental in my personal and professional growth. But it wasn't until joining JCI Aso in 2018 that I found my second family in Abuja. The diverse connections and meaningful relationships formed here transcend borders. The warmth and camaraderie are unparalleled, whether collaborating on projects or sharing moments of laughter. I'm deeply grateful for JCI Aso's support, inspiration, and inclusivity. It embodies unity in diversity, and I'm honored to be part of its journey towards positive change.",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1706434169210/6a30b8fa-0719-4c52-b001-9e1490aa2f08.png",
      name: "Yetunde A. Adebisi",
      position: "2024 President",
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
    {
      testimony:
        "Since joining, I have learnt the culture of excellence, partnership and collaboration, community impact,  leadership, accountability and I've had the chance to showcase my public speaking skills",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710320108244/67eb0702-8832-48db-9cd5-7b32a532d47e.png",
      name: "Joshua Oghorialu ",
      position: "Director of Skills & Development",
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
    <div className=" p-5 lg:px-20 lg:py-6">
      <h2 className="text-4xl font-bold text-gray-800  mb-8 text-center">
        Testimonials
      </h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="text-center bg-gray-200 rounded-lg lg:min-h-[400px]"
          >
            <div className="flex flex-col gap-2 lg:flex-row lg:gap-12 items-center p-5">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.title}
                className="mx-auto rounded-lg  lg:w-[250px] lg:h-[250px]"
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
