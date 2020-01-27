import React from "react";
import HeroTwo from "../components/Hero2";
import Banner from "../components/Banner";
import Me from "../components/Me";


const about = () => {
  return (
    <>
      <HeroTwo>
        <Banner
          title="About"
          subtitle="about this site and me"
        >
        </Banner>
      </HeroTwo>
      <Me />
    </>
  );
};

export default about;
