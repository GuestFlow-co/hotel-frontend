import React from 'react'
import './about.scss'
import { Fade } from "react-awesome-reveal";


export default function About() {
  return (
    <section className="about-area pt-130 rpt-100 rel">
      <div className="container">
        <Fade cascade triggerOnce>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image-part rmb-55">
                <div className="top-part ">
                  <img src="https://imgbucketfordestinate.s3.eu-north-1.amazonaws.com/about.png" alt="About" />
                  <div className="icon wow fadeInLeft delay-0-2s">
                    <div class="icon wow fadeInLeft delay-0-2s"><i class="flaticon-hotel"></i></div>
                  </div>
                </div>
                <div className="bottom-part">
                  <a
                    href="https://www.youtube.com/watch?v=QwaoqKPupsE&ab_channel=TOPHITMUSIC"
                    className="mfp-iframe video-play-text wow fadeInRight delay-0-2s"
                  >
                    <i className="fa-solid fa-play"></i>
                    <span>
                      <b>Watch Latest</b>
                      <br /> <i>Videos</i>
                    </span>
                  </a>
                  <img src="https://webtend.site/html/qomfort/assets/images/about/about2.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-part">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>World Class Luxury Hotel & Restaurant Near City</h2>
                  <p>
                    Discover a World-Class Luxury Hotel & Restaurant Just Outside the City
                    At our establishment, we stand against those who are led astray and demoralized by fleeting pleasures.
                  </p>
                </div>
                <div className="feature-list wow fadeInUp delay-0-3s">
                  <div className="feature-item">
                    <div className="icon">
                      <i className="flaticon-check-mark"></i>
                    </div>
                    <div className="content">
                      <h5>Trusted Partners</h5>
                      <p>
                        Our trusted partners understand how to bring clarity and delight to every experience.

                      </p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="icon">
                      <i className="flaticon-check-mark"></i>
                    </div>
                    <div className="content">
                      <h5>Luxury Services</h5>
                      <p>
                        Our commitment to providing unparalleled luxury services is.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Fade>
      </div>

      <div className="bg-lines for-bg-white">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};
