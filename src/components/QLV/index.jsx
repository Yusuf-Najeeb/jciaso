import React from "react";
import Nav from "./Header";
import Hero from "./Hero";
import CountDown from "./CountDown";
import About from "./About";
import Speakers from "./Speakers";
import Register from "./Registration";
import Loading from "./Loading";

const index = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <CountDown />
      <About />
      <Speakers />
      <Register />
      <Loading />
    </div>
  );
};

export default index;
