import React from "react";
import "../../index.css";

const AboutContent = () => {
  return (
    <>
      <section>
        <h1 className="p-4 title text-center">
          Brief <span className="text-sky-500">History</span>
        </h1>
      </section>
      <div className="flex gap-4 p-10">
        {/* WriteUp */}
        <div className="w-[652px] text-justify text-wrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
          fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
          mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare
          leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
          at maximus ante fermentum sit amet. Pellentesque commodo lacus at
          sodales sodales.
        </div>
        <img
          className="w-[652px] h-[652px]"
          src="https://res.cloudinary.com/duw4jtxls/image/upload/v1706621464/Frame_124_bfoknm.png"
          alt="Brief about JCI Aso"
        />
      </div>
    </>
  );
};

export default AboutContent;
