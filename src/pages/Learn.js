import React from "react";
import HeroOne from "../components/Hero1";
import Banner from "../components/Banner";
import Info from "../components/Info";
import Slide from "../components/Slide";
const learn = () => {
  return (
    <>
      <HeroOne>
        <Banner
          title="General Facts"
          subtitle="general facts about llamas"
        >
        </Banner>
      </HeroOne>
      <Info />
      <Slide />
    </>
  );
};

export default learn;
