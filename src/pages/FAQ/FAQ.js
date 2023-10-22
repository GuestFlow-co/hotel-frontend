import React from 'react';
import './FAQ.scss';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";


export default function FAQ() {
  return (
    <div>
      {/* Page Banner Start */}
      <section className="page-banner-area pt-170 rpt-110 pb-190 rpb-125 rel z-1 bgs-cover bgc-black text-center" style={{ backgroundImage: "url(https://webtend.site/html/qomfort/assets/images/background/banner-shop.jpg)" }}>
        <div className="container">
          <div className="banner-inner text-white">
            <h1 className="page-title wow fadeInUp delay-0-2s" style={{ fontFamily: 'Noto Serif' }}>FAQs</h1>
            <nav aria-label="breadcrumb"></nav>
          </div>
        </div>
        <div className="bg-lines">
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
        </div>
      </section>
      {/* Page Banner End */}

      {/* FAQ Area start */}
      <Fade triggerOnce>
        <section className="faq-area py-130 rpy-100 rel">
          <div className="container">
            <div className="row align-items-center pb-130 rpb-100">
              <div className="col-lg-6">
                <div className="faq-image-part rmb-55 rel wow fadeInRight delay-0-2s">
                  <img src="https://webtend.site/html/qomfort/assets/images/faq/faq-page1.jpg" alt="FAQs" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 ms-lg-auto">
                <div className="faq-content-part wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15">FAQs</span>
                    <h2>Learn Something About Our Services And More</h2>
                  </div>
                  <div className="accordion" id="faq-accordion">
                    <div className="accordion-item">
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                          01. What Services Do We Provide?
                        </button>
                      </h5>
                      <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                        <div className="accordion-body">
                          <p>We provide comprehensive services tailored to your needs and preferences to ensure a delightful experience.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header">
                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                          02. How Much Do Our Rooms Cost?
                        </button>
                      </h5>
                      <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#faq-accordion">
                        <div className="accordion-body">
                          <p>We offer competitive pricing to meet your budget, ensuring your stay is both affordable and comfortable.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                          03. Meet Our Experienced Team Members
                        </button>
                      </h5>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                        <div className="accordion-body">
                          <p>Our team comprises experienced professionals dedicated to making your visit exceptional in every way.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                          04. Are We an Award-Winning Company?
                        </button>
                      </h5>
                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                        <div className="accordion-body">
                          <p>We proudly hold several prestigious awards, recognizing our commitment to excellence and customer satisfaction.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 me-lg-auto">
                <div className="faq-content-part rmb-55 wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15">FAQs</span>
                    <h2>Learn Something About Our Services And More</h2>
                  </div>
                  <div className="accordion" id="faq-accordion-two">
                    <div className="accordion-item">
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwoOne">
                          01. What Services Do We Provide?
                        </button>
                      </h5>
                      <div id="collapseTwoOne" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
                        <div className="accordion-body">
                          <p>We offer comprehensive services tailored to your unique needs, ensuring a delightful experience.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header">
                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwoTwo">
                          02. How Much Do Our Rooms Cost?
                        </button>
                      </h5>
                      <div id="collapseTwoTwo" className="accordion-collapse collapse show" data-bs-parent="#faq-accordion-two">
                        <div className="accordion-body">
                          <p>We provide competitive pricing to accommodate your budget while ensuring a comfortable stay.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwoThree">
                          03. Meet Our Experienced Team Members
                        </button>
                      </h5>
                      <div id="collapseTwoThree" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
                        <div className="accordion-body">
                          <p>Our team consists of seasoned professionals committed to making your visit truly exceptional.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwoFour">
                          04. Are We an Award-Winning Company?
                        </button>
                      </h5>
                      <div id="collapseTwoFour" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
                        <div className="accordion-body">
                          <p>We are honored to hold various prestigious awards that recognize our dedication to excellence and customer satisfaction.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-image-part rel wow fadeInRight delay-0-2s">
                  <img src="https://webtend.site/html/qomfort/assets/images/faq/faq-page2.jpg" alt="FAQs" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lines for-bg-white">
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
          </div>
        </section>
      </Fade>
      {/* FAQ Area end */}
    </div>
  );
}
