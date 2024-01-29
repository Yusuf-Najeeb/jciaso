import React from "react";

const Sponsors = () => {
  return (
    <div className=" flex flex-col  px-6 py-4 mt-6 lg:px-10 lg:py-32 lg:gap-16 ">
      <h1 className="font-bold text-center text-[1.8rem] lg:text-[2.5rem]">
        Our Proud Sponsors
      </h1>
      <section className="flex flex-wrap justify-start items-start gap-6 lg:gap-16">
        <img
          src="https://res.cloudinary.com/duw4jtxls/image/upload/v1706450581/IMG-20240128-WA0033_usqfj8.jpg"
          alt="quick teller"
          className="w-[20rem] h-[6rem]  object-contain"
        />
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706352077139/1ed60a04-0850-4b31-bb5f-8b87fd252c11.png"
          alt="quidax"
          className="w-[20rem] h-[6rem]  object-contain"
        />
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706352009003/dc8a201e-e477-4f1a-8a81-eb1ae296eca6.png"
          alt="Union Bank"
          className="w-[20rem] h-[6rem]  object-contain"
        />

        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706352090973/0f215709-cd71-40ff-84b4-cd2c742ba0d8.png"
          alt="igHub"
          className="w-[20rem] h-[6rem]  object-contain"
        />
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706352039500/54a5aedc-f038-4752-8186-a2d469d029cf.png"
          alt="Terra Kulture"
          className="w-[20rem] h-[6rem]  object-contain"
        />
      </section>
    </div>
  );
};

export default Sponsors;
