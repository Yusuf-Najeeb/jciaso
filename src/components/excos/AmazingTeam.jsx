// CertificatesAndAwards.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AmazingTeam = () => {
  const certificateData = [
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710339568808/d8a86a8b-aaac-4449-9756-d9cb669351db.jpeg",
    },
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710339566245/5c5bb906-0fe5-4b73-be0f-636624e058fd.jpeg",
    },

    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710339563508/04a06f1a-e74f-47fd-9752-efaaf1d09fad.jpeg",
    },
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710339560650/56d6299c-0fc8-4a95-a9f6-cc6dbccdcd9e.jpeg",
    },
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710339557130/7cf78aa3-60ec-48d3-b3c9-32d91896b956.jpeg",
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
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-gray-800  mb-8 text-center">
        Our Amazing Members
      </h2>
      <Slider {...settings}>
        {certificateData.map((certificate, index) => (
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

export default AmazingTeam;
