import React from "react";
import GallerySlide from "./GallerySlide";
import GalleryHero from "./GalleryHero";

const Gallery = () => {
  return (
    <React.Fragment>
      <GalleryHero />
      <div className="pt-10 lg:px-16">
        <section className="flex flex-col gap-2 lg:flex-row lg:w-[100%]">
          <div className="flex flex-col gap-4 lg:w-[75%]">
            <div className="flex gap-4">
              <div className="flex flex-col gap-4">
                <img
                  src="https://res.cloudinary.com/duw4jtxls/image/upload/v1710684691/IMG-20240317-WA0030_fvgiop.jpg"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/duw4jtxls/image/upload/v1710684658/IMG-20240317-WA0027_ljezzy.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/duw4jtxls/image/upload/v1710684703/IMG-20240317-WA0032_vrn8gf.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/duw4jtxls/image/upload/v1710685063/IMG-20240317-WA0026_l40xkx.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:w-[25%]">
            <img
              src="https://res.cloudinary.com/duw4jtxls/image/upload/v1710684704/IMG-20240317-WA0027_gz7dnj.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/duw4jtxls/image/upload/v1710684718/IMG-20240317-WA0028_sxl0j9.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/duw4jtxls/image/upload/v1710684718/IMG-20240317-WA0029_byorla.jpg"
              alt=""
            />
          </div>
        </section>
        <GallerySlide />
      </div>
    </React.Fragment>
  );
};

export default Gallery;
