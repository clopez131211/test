import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'


export default class Slide extends Component {
  render() {
    return (
      <div className="pics">
        <Carousel showArrows={true} width="75%" dynamicHeight>
          <div>
            <img src={one} alt="llama sitting in grass"/>
          </div>
          <div>
            <img src={two} alt="white llama"/>
          </div>
          <div>
            <img src={three} alt="llama with mouth open"/>
          </div>
          <div>
            <img src={four} alt="llama"/>
          </div>
        </Carousel>
      </div>
    );
  }
}
