import React, { Component } from "react";
import Title from "./Title";
import react from "../images/react.png";
import asu from "../images/asu.png";

export default class Info extends Component {
  render() {
    return (
      <section className="services">
        <div className="info-me">
          <section className="about">
            <Title title="About Me" />
            <p>
              <span>
                Hello! My name is Christopher Lopez and I this is my Llama site!
                I am currently a Junior at Arizona State University, and I am
                pursuing a degree in software Engineering. I am excited to be a
                front-end engineer in today's web landscape because of how
                quickly things are evolving. Ten years ago, jQuery was the most
                popular JavaScript library used by everyone. Nowadays the
                landscape is totally different. New libraries and frameworks
                appeared and took over, such as React and Angular and newer
                libraries and Frameworks are being using in conjunction with
                those such as D3.js and Tenserflow.js. The ever changing
                landscape of web development is extremely interesting to me and
                is why I am excited to be a front end engineer in today's
                landscape.
              </span>
            </p>
          </section>

          <section className="pack">
            <Title title="About My Site" />
            <p>
              <span>
                This site is made using React.js. I decided to use React.js to
                make this site because of all the benefits that come with Single
                page applications. With React it is easy to make a information
                type site with its component based approach, where all the
                JavaScript and JSX would go into the components and rendered
                into the pages. I also chose to make a React SPA because of the
                speed of the application. Since the application loads the
                resources once, Going through the site will be faster than
                having a multi page website. I built the site the way I did
                because I felt that since this is a purely informational site
                about llamas and how this site was made, I would format it so as
                the user clicks through the site, they will easily see all of
                the pages. This is seen at the start where you are immediately
                directed to the informational page, then to my about page. I
                also created a nav bar so that you can easily go to any specific
                pages if you choose.
              </span>
            </p>
          </section>
        </div>
        <div className="react-logo">
          <img src={react} alt="react" />
          <img src={asu} alt="asu" />
        </div>
      </section>
    );
  }
}