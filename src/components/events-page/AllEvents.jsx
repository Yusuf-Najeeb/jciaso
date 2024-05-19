import React, { useEffect } from "react";
import EventsHero from "./EventsHero";
import EventHeader from "./EventHeader";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <EventsHero />
      <EventHeader />
    </>
  );
};

export default Events;
