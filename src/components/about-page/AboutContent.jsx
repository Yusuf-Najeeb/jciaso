import React, { useEffect } from "react";

const AboutContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <h1 className="title pt-16 px-6  lg:px-16">
        Brief <span className="text-[#0199CC]">History</span>
      </h1>
      <section className="flex flex-row items-center justify-between gap-4 w-[100%] py-4 px-6  lg:items-start lg:px-16">
        <div className="sm:text-[1.2rem] text-base flex flex-col gap-8 w-full lg:w-[50%] ">
          <p className="text-justify">
            Junior Chamber International Aso, a leading affiliate of Junior
            Chamber International, was founded in the year 2000 with a vision
            for excellence and aspiration to be one of the best in Africa and
            the best in the world. Established from the Abuja Metro Chamber of
            Commerce and formally referred to as the Aso Chamber of Commerce,
            our sole objective is to Identify people and provide enabling
            opportunities for self-discovery, leadership development, and
            capacity enhancement needed to tackle various emerging challenges
            within the Federal Capital Territory.
          </p>

          <p className="text-justify">
            Junior Chamber International, Aso, was founded by amazing visionary
            leaders whose aim was to float an organization that would produce
            individuals who maintain a high level of professionalism in their
            chosen career, accomplished businessmen and women, and most
            importantly, individuals with compassion, care, and zeal to serve
            humanity. We have, over time thrived on the four areas of
            developmental opportunities which include: Business Development and
            Entrepreneurship Development, Individual Development, Community
            Development, and International Development Opportunities.
          </p>
          <p className="text-justify">
            We have soared under the wings of our founding Fathers and Leaders
            who are JCI Senators Mustapha Adekola, GWO Soaga, and Abu Sanni, and
            have steadily built a sustainable structure drawing inspiration from
            the League of Presidents who have served JCI Aso for Twenty Four
            (24) Years and Counting. Our commitment to excellence and zest to
            provide leadership has been instrumental to the Production of two
            JCI Nigeria Presidents, JCI Senators Babajide Richard Ojo (2017) and
            Attairu Abdullahi Bala (2023).
          </p>
          <p className="text-justify">
            As we deepen our collective resolve for excellence and service to
            humanity, we salute our founding fathers, leaders, amazing members,
            and all stakeholders who have contributed to the growth of the
            organization.
          </p>
        </div>
        <div className="hidden lg:block lg:w-[30%] rounded-md">
          <img
            src="https://res.cloudinary.com/duw4jtxls/image/upload/v1710168617/About_n9aagz.png"
            alt="jci aso"
            className="w-full h-full object-cover mix-blend-overlay "
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutContent;
