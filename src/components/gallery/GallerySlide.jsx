import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GallerySlide = () => {
  const galleryData = [
    {
      imageSrc:
        "https://res.cloudinary.com/duw4jtxls/image/upload/v1710684690/IMG-20240317-WA0031_f6xov8.jpg",
    },
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710339566245/5c5bb906-0fe5-4b73-be0f-636624e058fd.jpeg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // fade: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
  };

  return (
    <div className="py-10">
      <Slider {...settings}>
        {galleryData.map((certificate, index) => (
          <div key={index} className="text-center">
            <img
              src={certificate.imageSrc}
              alt={certificate.title}
              className="mx-auto rounded-md shadow-lg"
              style={{ maxWidth: "50%", height: "20%" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallerySlide;
