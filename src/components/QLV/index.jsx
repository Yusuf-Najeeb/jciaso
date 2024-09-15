import React from "react";
import Nav from "./Header";
import Hero from "./Hero";
import CountDown from "./CountDown";
import About from "./About";
import Speakers from "./Speakers";

const index = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <CountDown />
      <About />
      <Speakers />
    </div>
  );
};

export default index;
