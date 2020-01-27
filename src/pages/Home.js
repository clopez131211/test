import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="llamas !!"
          subtitle="a site all about llamas"
        >
          <Link to="/learn-more" className="btn-primary">
            Learn More
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default home;
