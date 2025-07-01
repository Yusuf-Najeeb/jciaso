import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdCenterFocusStrong, MdOutline6FtApart } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";

const Vision = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const now = new Date();
  return (
    <React.Fragment>
      <div className="flex flex-col gap-16 w-[100%] pb-2 lg:flex-row lg:px-16 lg:py-10 lg:mt-16">
        <section className="flex flex-col items-center gap-x-4 lg:w-[50%]">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            className="flex flex-col items-center gap-2 "
          >
            <div className="flex flex-row px-2">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1751148887212/16c42dcd-5a5b-43a7-bcbf-f79dab33efe3.jpeg"
                alt="JCI Amb. Felix Akinyemi President"
                className="w-1/2 lg:w-full rounded-lg object-cover relative z-10"
              />
              <img
                className="lg:hidden w-1/2"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1751188640694/5e20d6a6-f3de-4f0e-95aa-e61abbb626b5.png"
                alt="2025 Presidential Theme: Inspiring Change"
              />
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-[1.2rem] sm:text-[1.5rem] font-bold sm:font-semibold mt-4">
                JCIN Amb. Felix Sunday Akinyemi
              </h1>
              <p className="text-[.9rem] sm:text-[1.2rem] font-semibold">
                25<sup>th</sup> President JCI Aso
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="flex flex-col items-start gap-2 py-2 px-4"
          >
            <h1 className="font-semibold text-center sm:text-left text-[1.2rem] sm:text-[1.5rem] lg:text-[1.5rem] mt-4">
              {now.getFullYear()} New Year Message
            </h1>
            <p className="text-start">
              It is with great humility and excitement that I address you today
              as the Local Organization President for 2025. As we step into this
              new year, we carry with us the hopes and aspirations of our
              dynamic and diverse organization...
            </p>
            <a
              href="https://drive.google.com/file/d/1dxBRX-Uh-Vr6E-hDoH-avJbfg4DgkrBo/view"
              target="blank"
            >
              <button className="border border-[#2288A9] text-[#2288A9] font-medium px-4 py-2 rounded-lg hover:border-red-500 hover:text-red-500 duration-300 mb-4">
                Read more..
              </button>
            </a>
          </div>
        </section>
        <section className=" flex flex-col items-center gap-10 lg:w-[50%]">
          <h1
            data-aos="flip-right"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            className="font-semibold title text-2xl lg:text-[1.8rem] text-center"
          >
            2025 Presidential Theme
          </h1>
          <img
            className="hidden lg:block w-[60%]"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1751188640694/5e20d6a6-f3de-4f0e-95aa-e61abbb626b5.png"
            alt="2025 Presidential Theme: Inspiring Change"
          />

          <section className="flex flex-col gap-8 px-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-easing="ease-in-out"
              className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  "
            >
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <MdCenterFocusStrong size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[1.2rem] ">
                  Innovative Solution
                </h3>
                <p className="text-[#333]">
                  Our approach to championing JCI Aso projects and programs
                  shall be centered on Innovation. Through data-driven
                  decisions, we shall employ technology tools, innovative
                  thinking caps, and the accommodation of fresh ideas to tackle
                  complex challenges.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  "
            >
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <GiWeightLiftingUp size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[1.2rem]">
                  Members Empowerment
                </h3>
                <p className="text-[#333]">
                  Riding on the shoulders of our predecessors in office and
                  standing in line with the JCI strategy, we shall prioritize
                  our members in all facets of our projects and programs. The
                  General Assembly conversations shall be centered on our
                  members, our officers' training school shall be revamped, we
                  shall expand the scope of our members' development summit, and
                  shall democratize our pieces of training and empowerment
                  programs to include our members.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  "
            >
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <MdOutline6FtApart size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[1.2rem]">
                  Collaborative Leadership
                </h3>
                <p className="text-[#333]">
                  As a leadership organization, established to build leaders who
                  will make the world a better place, we are intentional about
                  leveraging the expertise of our members to drive policies,
                  plan programs and implement projects.
                </p>
              </div>
            </div>

            {/* <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  "
            >
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <FaProjectDiagram size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[1.2rem] ">
                  Engaging Projects
                </h3>
                <p className="text-[#333]">
                  Organize health walks to promote physical well-being and
                  community bonding, and establish a mentorship program to
                  support personal and professional growth.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              className="flex flex-col items-center text-center gap-6 md:text-start md:flex-row  "
            >
              <p className="bg-[#20B4E3] p-10 rounded-full ">
                <FaGlobe size={30} color="#FFF" />
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[1.2rem]">
                  Global Engagement
                </h3>
                <p className="text-[#333]">
                  Promote international partnerships to exchange ideas and
                  implement cross-border initiatives.
                </p>
              </div>
            </div> */}
          </section>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Vision;
