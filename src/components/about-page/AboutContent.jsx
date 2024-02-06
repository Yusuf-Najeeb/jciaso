import React from "react";

const AboutContent = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-center gap-2 py-16 w-[100%] px-6 lg:flex-row lg:px-16">
      <div className="flex flex-col gap-8 lg:w-[50%] ">
        <h1 className="title ">
          Brief <span className="text-sky-500">History</span>
        </h1>
        <p className="text-[1.2rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quo
          voluptatibus quia, modi reprehenderit, dolores numquam blanditiis,
          distinctio commodi quisquam adipisci sapiente autem rem eum
          consequuntur iusto expedita assumenda laborum quidem amet ea? Facere,
          ex dolor ipsa voluptatum cumque distinctio illo accusantium nisi modi
          nostrum fuga atque incidunt aliquid omnis.
        </p>

        <p className="text-[1.2rem] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          vero doloremque aspernatur, quisquam totam explicabo.
        </p>
      </div>
      <div className=" bg-gradient-to-t from-[#143c4d] via-[#034058] to-[#37758e]  lg:w-[50%] relative">
        <img
          src="https://res.cloudinary.com/duw4jtxls/image/upload/v1706621464/Frame_124_bfoknm.png"
          alt="Brief about jci "
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <p className="absolute text-[#FFF] tracking-[1.3rem] font-extrabold text-[2rem] top-[50%] right-[15%] lg:right-[20%]">
          JCI ASO
        </p>
      </div>
    </section>
  );
};

export default AboutContent;
