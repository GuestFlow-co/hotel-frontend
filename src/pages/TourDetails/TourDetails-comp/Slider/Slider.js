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
    autoplaySpeed: 1500, 
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
console.log(photos,"0000000000");
  return (
    <Slider  {...settings}>
      {photos.map((item, index) => (
        <div key={index} className="slider-item">
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
 console.log(photo,"1111111111");

  return (
    <div className="slider-container">
      <CustomSlider photos={photo} />
    </div>
  );
}

export default SliderContainer;
