// CertificatesAndAwards.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AmazingTeam = () => {
  const certificateData = [
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1751381466317/0d4a6935-5115-41d7-a1be-10a009827374.jpeg",
    },
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1751381348840/4c3684b9-9f2b-470e-b397-1910387184e5.jpeg",
    },
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1751381331674/22cea1a3-3d71-4c30-b7a2-366adc12478b.jpeg",
    },
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1751381447674/3fd7511b-60fe-4c44-acc2-7d15724fb03b.jpeg",
    },
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1751381366197/987b2ed6-cf8f-4a87-a036-6675ef376157.jpeg",
    },
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

    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1716153953624/def5c0b2-7555-4edb-91c2-58726118f60b.jpeg",
    },
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1716154559971/d1d94ba6-3cf9-453b-b994-14742ef8ef8b.jpeg",
    },

    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1716301215474/6323fa1c-5f4d-4a39-b9eb-5b25e0539162.jpeg",
    },
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1751380684541/9d8ed593-1c3a-4c70-b00b-c18b51911692.jpeg",
    },
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1751380698503/4515b035-2b67-4c0c-8e6c-6732f85e5bb7.jpeg",
    },
    {
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1751381397723/455a6593-c126-4af0-abda-bb29b0044bee.jpeg",
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
    <div className="mb-16 p-2">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800  mb-8 text-center">
        Our Amazing Members
      </h2>
      <Slider {...settings}>
        {certificateData.map((certificate, index) => (
          <div key={index} className="text-center">
            <img
              src={certificate.imageSrc}
              alt={certificate.title}
              className="mx-auto rounded-md shadow-lg w-full md:w-[80%] h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AmazingTeam;
