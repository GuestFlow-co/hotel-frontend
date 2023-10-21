import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import checkMardIcon from '../../../../assets/images/icons/check-mark.png';
import './Restaurant.scss'
import { css } from '@emotion/react';



export default function Restaurant() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://webtend.site/html/qomfort/assets/images/food/food-restaurent.jpg',
    'https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6127330/pexels-photo-6127330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    "https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const imageInterval = setInterval(changeImage, 3000);

    return () => {
      clearInterval(imageInterval);
    };
  }, []);

  const imageTransition = css`
    transition: opacity 0.5s ease-in-out;
  `;

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '400px', // Adjust the height as needed
    overflow: 'hidden',
  };

  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  };

  imageStyle.opacity = 1; // Make the current image visible
  if (currentImageIndex > 0) {
    imageStyle.transition = 'opacity 2.5s ease-in-out';
  }

  return (
    <section className="food-drink-area pt-130 rpt-100 pb-160 rpb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="food-drink-content rmb-55">
              <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Food & Drink</span>
                <h2>Quality Food & Drink Your Trip Are Enjoyable</h2>
                <p>Elevate Your Journey with Exceptional Dining
                  At our establishment, we pride ourselves on providing a dining experience like no other, driven by a passion for excellence and customer satisfaction.</p>
              </div>
              <div className="feature-list">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-check-mark"></i>
                  </div>
                  <div className="content">
                    <h5 className=''>Free breakfast, tea & coffee</h5>
                    <p>To enhance your stay, we offer a delightful complimentary breakfast.</p>
                  </div>
                </div>
                <div className="feature-item wow fadeInUp delay-0-3s">
                  <div className="icon">
                    <i className="flaticon-check-mark"> </i>
                  </div>
                  <div className="content ">
                    <h5>Quality Foods & kitchen</h5>
                    <p>Our commitment to delivering exquisite cuisine and culinary excellence remains unwavering.</p>
                  </div>
                </div>
              </div>
              <Link to="./" className="theme-btn style-two mt-25 wow fadeInUp delay-0-4s">Learn More Hotel <i className="fa-solid fa-angle-right"></i></Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="food-drink-image rel wow fadeInUp delay-0-4s" css={imageTransition}>
              <div style={containerStyle}>
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Food Restaurant"
                    style={{
                      ...imageStyle,
                      opacity: index === currentImageIndex ? 1 : 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}