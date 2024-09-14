import React from "react";
import Nav from "./Header";
import Hero from "./Hero";
import CountDown from "./CountDown";
import About from "./About";

const index = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <CountDown />
      <About />
    </div>
  );
};

export default index;
