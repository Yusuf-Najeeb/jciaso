import React from "react";
import { BsCashStack, BsPeople, BsPerson } from "react-icons/bs";

const Benefits = () => {
  return (
    <main className="p-2 md:px-12 my-8">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-6">
        <div className="relative border border-[#0199cc] rounded p-4">
          <BsPerson
            className="absolute bg-[#0199cc] text-white rounded-full p-2 -top-5 left-[45%]"
            size={50}
          />
          <h3 className="text-sm sm:text-[1.2rem] font-bold text-[#333] mt-4 text-center">
            Individual Opportunity
          </h3>
          <p className="my-4 leading-6">
            JCI Aso membership offers individuals a transformative journey of
            personal and professional growth. With access to leadership
            development programs, mentorship opportunities, and a global
            community, JCI Aso members can refine their skills, expand their
            networks, and contribute meaningfully to community-driven
            initiatives. The organization serves as a catalyst for individuals
            to shape their careers and make a positive impact on the world.
          </p>
        </div>
        <div className="relative border border-[#0199cc] rounded p-4">
          <BsCashStack
            className="absolute bg-[#0199cc] text-white rounded-full p-2 -top-5
          left-[45%]"
            size={50}
          />
          <h3 className="text-sm sm:text-[1.2rem] font-bold text-[#333] mt-4 text-center">
            Business Opportunity
          </h3>
          <p className="my-4 leading-6">
            Partnering with JCI Aso opens doors to unique business
            opportunities. Through collaboration with a global network of
            forward-thinking individuals and organizations, businesses can tap
            into a diverse market, enhance their brand visibility, and gain
            access to exclusive resources. JCI's platform provides a powerful
            avenue for businesses to establish themselves as industry leaders
            and contribute to positive societal change.
          </p>
        </div>
        <div className="relative border border-[#0199cc] rounded p-4">
          <BsPeople
            className="absolute bg-[#0199cc] text-white rounded-full p-2 -top-5 left-[45%]"
            size={50}
          />
          <h3 className="text-sm sm:text-[1.2rem] font-bold text-[#333] mt-4 text-center">
            Community Opportunity
          </h3>
          <p className="my-4 leading-6">
            Being part of the JCI Aso network is more than just membership; it's
            an opportunity to belong to a global community dedicated to creating
            positive change. JCI provides a collaborative platform where
            individuals and organizations can unite, share ideas, and
            collectively address societal challenges. Through JCI Aso events,
            projects, and initiatives, the community actively contributes to
            building a better world, fostering a spirit of interconnectedness
            and shared responsibility.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Benefits;
