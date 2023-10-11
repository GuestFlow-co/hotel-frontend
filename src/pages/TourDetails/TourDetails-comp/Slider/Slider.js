import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.scss";

function CustomSlider({ photos }) {
  const settings = {
    infinite: true,
    slidesToShow: 2.5, 
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, 
    autoplaySpeed: 2500, 
    dots: true, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };
  return (
    <Slider  {...settings}>
      {photos.map((item, index) => (
        <div key={index} className="slider-item ">
          <img
            src={item}
            alt={`Slide ${index + 1}`}
            className="slider-image"
          />
        </div>
      ))}
      
    </Slider>
  );
}

function SliderContainer({photo}) {

  return (
    <div className="slider-container overflow-hidden">
      <CustomSlider photos={photo} />
    </div>
  );
}

export default SliderContainer;
