import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Programs = () => {
  return (
    <main className="p-2 sm:px-12">
      <div className="flex flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-2xl font-semibold leading-normal">
            2024 International Women’s Day
          </h4>
          <p className="text-sm text-gray-400">March 2024</p>
          <p className="leading-relaxed">
            International Women’s Day Program is an event put together to
            celebrate the ingenuity of women and chart a course for inclusion.
            It’s one of our unwavering commitments to contribute to the
            actualization of SDG 5 (Gender Equality). This year, we will be
            discussing the theme: #InspireInclusion. Join us on 17th March 2024.
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3 hover:text-[#EC4B14] hover:border-[#EC4B14]">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img
            className="max-h-[300px] w-full rounded object-cover object-top"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710277405685/ddf7a15d-b583-40e3-9b58-2024e5cd3464.jpeg"
            alt="International women's day banner"
          />
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-2xl font-semibold leading-normal">
            Membership Development Summit
          </h4>
          <p className="text-sm text-gray-400">May 2024</p>
          <p className="leading-relaxed">
            The JCI Membership Development Summit is a one-day event designed to
            provide members, friends, and guests with valuable training in the 5
            most sought-after skills identified by the membership. The training
            will be delivered through a syndicate/breakout session format,
            featuring expert speakers chosen based on their expertise in each
            skill area. Participants will have the opportunity to engage in
            interactive sessions, ask questions, and gain practical knowledge
            they can apply in their personal and professional lives. You don’t
            want miss this
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3 hover:text-[#EC4B14] hover:border-[#EC4B14]">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img
            className="max-h-[300px] w-full rounded object-cover object-top"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710277704985/4d9bb9a1-6dbb-487c-90aa-e2801d718ff3.jpeg"
            alt="Membership development speakers series"
          />
        </div>
      </div>

      <div className="flex flex-row justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-2xl font-semibold leading-normal">
            Secondary School Debate and Speech Contest
          </h4>
          <p className="text-sm text-gray-400">June 2024</p>
          <p className="leading-relaxed">
            The 2024 Secondary School Debate shall be in three steps including
            Debate, Short Drama and Speech contest. It was established in a way
            to explore various inherent talents domiciled in the students and
            assist them to develop such talents. It’s targeted towards the
            actualization of SDGs 3, 4 and 5 and shall be discussing{" "}
            <quote className="font-semibold">
              The effect of Bullying and Physical violence on a child’s mental
              health
            </quote>
            .
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3 hover:text-[#EC4B14] hover:border-[#EC4B14]">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img
            className="max-h-[300px] w-full rounded object-cover object-top"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710277821578/ed8deb99-c512-423d-a6ea-aca1cf4407c6.png"
            alt="Secondary school competition on debate"
          />
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between items-center gap-4 py-4 my-8 border-b">
        <div className="flex-1">
          <h4 className="text-2xl font-semibold leading-normal">
            12th Baba N" Yara Novelty Games
          </h4>
          <p className="text-sm text-gray-400">May 2024</p>
          <p className="leading-relaxed">
            An annual sport event, put together for members of Junior Chamber
            International in the Northern and Southern Nigeria to improve our
            physical and mental wellbeing. It’s not only a sporting event but an
            avenue to bond, network and distress from all our hustle and bustle.
            The novelty games is billed to comprise series of indoor and outdoor
            activities amongst which is football. Table tennis, sprint and
            marathon races amongst others.
          </p>
          <button className="flex flex-row flex-nowrap items-center justify-between text-blue-500 font-semibold border border-blue-500 py-2 px-3 rounded my-3 hover:text-[#EC4B14] hover:border-[#EC4B14]">
            Read more &nbsp; <BsBoxArrowUpRight />{" "}
          </button>
        </div>
        <div className="flex-1">
          <img
            className="max-h-[300px] w-full rounded object-cover object-top"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1710285786426/6448ca95-66ae-4ec0-9246-195835225133.jpeg"
            alt="Baba N Yara Novelty games"
          />
        </div>
      </div>
    </main>
  );
};

export default Programs;
