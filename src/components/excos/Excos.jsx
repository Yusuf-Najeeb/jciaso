import React from "react";
import Header from "../header/Header";
import ExcosHero from "./ExcosHero";
import Excecutive from "./Excecutive";
import Distinguished from "./Distinguished";
import Footer from "../footer/Footer";

const Excos = () => {
  return (
    <div>
      <Header />
      <ExcosHero />
      <section className="flex flex-col-reverse items-center justify-center gap-2 py-16 w-[100%] px-6 lg:flex-row lg:px-16">
        <div className="flex flex-col gap-8 lg:w-[50%] ">
          <h1 className="title">Execs and Members</h1>
          <p className="text-[1.2rem]">
            The leadership of JCI aso is counselled by the president .Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus.
          </p>
          <div className="flex flex-col gap-2 text-[1.2rem] ">
            <h3 className="font-medium">
              The Management is currently made up of:
            </h3>
            <ul className=" list-disc lg:px-8 px-6">
              <li>Mr Idris</li>
              <li>Mr Idris</li>
              <li>Mr Idris</li>
              <li>Mr Idris</li>
            </ul>
          </div>
          <p className="text-[1.2rem] ">
            The Executive responsibility and authority for fulfilling the
            mission of JCI lies with the President, Engr. Adewale Adetokumbo.
          </p>
        </div>
        <div className="lg:w-[50%]">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706696491437/99553312-1434-4a05-94c3-60b37414631f.png"
            alt=""
          />
        </div>
      </section>
      <Excecutive />
      <Distinguished />
      <Footer />
    </div>
  );
};

export default Excos;
