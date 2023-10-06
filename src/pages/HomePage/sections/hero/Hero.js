import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import circleHalfImage from '../../../../assets/images/shapes/slider-circle-half.png';
import circleImage from '../../../../assets/images/shapes/slider-circle.png';
import './hero.scss';

const Hero = () => {
  const settings = {
    infinite: true,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    appendDots: (dots) => <ul>{dots}</ul>,
  };

  return (
    <section className="main-slider-area bgc-black-with-lighting rel z-1">
      <div className="main-slider-active">
        <Slider {...settings}>

          <div className="slider-item">
            <div className="container">
              <div className="row justify-content-end align-items-center">
                <div className="col-xl-3">
                  <div className="slider-content">
                    <span className="sub-title"><i className='fa-solid fa-arrow-right'></i> Welcome to GestFlow</span>
                    <h1>Enjoy Vacations With <span>Luxury Hotel</span></h1>
                    <a href="room-grid.html" className="theme-btn">Explore Our Rooms <i className="fa-solid fa-angle-right"></i></a>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="slider-image">
                    <img src="	https://webtend.site/html/qomfort/assets/images/slider/slide-1.jpg" alt="Slider" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="container">
              <div className="row justify-content-end align-items-center">
                <div className="col-xl-3">
                  <div className="slider-content">
                    <span className="sub-title"><i className='fa-solid fa-arrow-right'></i> Welcome to GestFlow</span>
                    <h1>Enjoy Vacations With <span>Luxury Hotel</span></h1>
                    <a href="room-grid.html" className="theme-btn">Explore Our Rooms <i className="fa-solid fa-angle-right"></i></a>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="slider-image">
                    <img src="	https://webtend.site/html/qomfort/assets/images/slider/slide-2.jpg" alt="Slider" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="container">
              <div className="row justify-content-end align-items-center">
                <div className="col-xl-3">
                  <div className="slider-content">
                    <span className="sub-title"><i className='fa-solid fa-arrow-right'></i> Welcome to GestFlow</span>
                    <h1>Enjoy Vacations With <span>Luxury Hotel</span></h1>
                    <a href="room-grid.html" className="theme-btn">Explore Our Rooms <i className="fa-solid fa-angle-right"></i></a>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="slider-image">
                    <img src="	https://webtend.site/html/qomfort/assets/images/slider/slide-4.jpg" alt="Slider" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="main-slider-dots"></div>
          </div>
        </div>
      </div>
      <div className="slider-shapes">
        <img className="shape circle-half" src={circleHalfImage} alt="Shape" />
        <img className="shape circle" src={circleImage} alt="Shape" />
      </div>
      <div className="bg-lines">
        <span></span><span></span>
        <span></span><span></span>
        <span></span><span></span>
        <span></span><span></span>
        <span></span><span></span>
      </div>
    </section>
  );
};

export default Hero;
