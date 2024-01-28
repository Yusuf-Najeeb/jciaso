import React from "react";
import { MdCenterFocusStrong, MdOutline6FtApart } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";

const Vision = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-16 w-[100%] px-6 lg:flex-row lg:px-16 lg:py-10 lg:mt-16">
        <section className="flex flex-col items-center gap-6 lg:w-[50%]">
          <div className="flex flex-col items-center gap-2 ">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706434169210/6a30b8fa-0719-4c52-b001-9e1490aa2f08.png"
              alt="JCI_President"
              className="w-full rounded-lg object-cover"
            />
            <div className="flex flex-col items-center">
              <h1 className="text-[1.5rem] font-bold">
                JCIN Amb. Yetunde Adebisi
              </h1>
              <p className="font-semibold">President of JCI Aso</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2">
            <h1 className="font-bold text-[1.8rem] lg:text-[2.5rem] text-center">
              Meet our President
            </h1>
            <p className="text-start">
              In my tenure as JCI ASO President, I will be committed to
              fostering a vibrant and inclusive community. By putting our
              members first, cultivating partnerships, and prioritizing
              sustainability, Together, we will create lasting impact and
              inspire positive change in our region and beyond.
            </p>
            <a href="">
              <button className="border border-[#2288A9] text-[#2288A9] font-medium px-4 py-2 rounded-lg hover:border-red-500 hover:text-red-500 duration-300 mb-4">
                Read more..
              </button>
            </a>
          </div>
        </section>
        <section className="flex flex-col items-center gap-10 lg:w-[50%]">
          <h1 className="font-bold text-[1.8rem] lg:text-[2.5rem] text-center">
            our Core Objectives.
          </h1>
          <section className="flex flex-col gap-16 ">
            <div className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  ">
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <MdCenterFocusStrong size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[1.2rem] ">
                  Member-Centric Approach
                </h3>
                <p className="font-medium">
                  Establish a member-centric approach by conducting regular
                  surveys to gather feedback and ideas, and implement incentive
                  programs to recognize and reward member engagement.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  ">
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <FaProjectDiagram size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[1.2rem] ">Engaging Projects</h3>
                <p className="font-medium">
                  Organize health walks to promote physical well-being and
                  community bonding, and establish a mentorship program to
                  support personal and professional growth.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  ">
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <GiWeightLiftingUp size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[1.2rem]">
                  Strengthening Local Collaborations
                </h3>
                <p className="font-medium">
                  Forge partnerships with local businesses, NGOs, and government
                  agencies, and collaborate with other JCI chapters and similar
                  organizations to enhance community impact and collective
                  efforts.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  ">
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <FaGlobe size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[1.2rem]">Global Engagement</h3>
                <p className="font-medium">
                  Promote international partnerships to exchange ideas and
                  implement cross-border initiatives.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  ">
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <MdOutline6FtApart size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[1.2rem]">Partnership:</h3>
                <p className="font-medium">
                  Conducting regular financial audits ensures transparency,
                  while also facilitating knowledge sharing and capacity
                  building initiatives. Enhancing brand awareness and visibility
                  is achieved through various channels, including the
                  publication of partners.
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
