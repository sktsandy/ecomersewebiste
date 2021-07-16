import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <>
      <div className="silder">
        <Carousel
          infiniteLoop
          autoPlay
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          <img src="images/slider-1.jpg" alt="slider" />

          <img src="images/slider-3.jpg" alt="slider" />

          <img src="images/slider-4.jpg" alt="slider" />

          <img src="images/slider-5.jpg" alt="slider" />

          <img src="images/slider-6.jpg" alt="slider" />
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
