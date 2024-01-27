import React from "react";
import { LuCopyPlus } from "react-icons/lu";
import { MdOutlineDirectionsCar } from "react-icons/md";
import { TbAmbulance } from "react-icons/tb";
import { IoWaterOutline } from "react-icons/io5";

const Vision = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-16 w-[100%] px-6 lg:flex-row lg:px-16 lg:py-10 lg:mt-16">
        <section className="lg:w-[50%]">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706348931433/7383af98-ff45-489b-ac58-3efcfca10058.png"
            alt="JCI_President"
            className="w-full object-cover"
          />
        </section>
        <section className="flex flex-col items-center gap-10 lg:w-[50%]">
          <h1 className="font-bold text-[1.8rem] lg:text-[2.5rem] text-center">
            Meet our President and our Core Objectives.
          </h1>
          <section className="flex flex-col gap-16 ">
            <div className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  ">
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <LuCopyPlus size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[1.2rem] ">
                  Quick and easy access to medications in Aso
                </h3>
                <p className="font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  ">
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <IoWaterOutline size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[1.2rem] ">
                  Quick and easy access to medications in Aso
                </h3>
                <p className="font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  ">
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <MdOutlineDirectionsCar size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[1.2rem]">
                  Quick and easy access to medications in Aso
                </h3>
                <p className="font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  ">
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <TbAmbulance size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[1.2rem]">
                  Quick and easy access to medications in Aso
                </h3>
                <p className="font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Vision;
