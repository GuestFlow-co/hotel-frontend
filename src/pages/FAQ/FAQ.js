import React from 'react'
import './FAQ.scss'
import { Link } from 'react-router-dom';


export default function FAQ() {
  return (
    <div>
      {/* Page Banner Start */}
      <section className="page-banner-area pt-170 rpt-110 pb-190 rpb-125 rel z-1 bgs-cover bgc-black text-center" style={{ backgroundImage: "url(https://webtend.site/html/qomfort/assets/images/background/banner-shop.jpg)" }}>
        <div className="container">
          <div className="banner-inner text-white">
            <h1 className="page-title wow fadeInUp delay-0-2s">FAQs</h1>
            <nav aria-label="breadcrumb">
            </nav>
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
                        01. What Services Do We Provides?
                      </button>
                    </h5>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                      <div className="accordion-body">
                        <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header">
                      <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        02. How Must Cost Our Rooms?
                      </button>
                    </h5>
                    <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#faq-accordion">
                      <div className="accordion-body">
                        <p>We denounce with righteous indignation and dislike men beguiledey and demoralized by the charms of pleasure of the moment</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header">
                      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        03. Experience Team Member?
                      </button>
                    </h5>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                      <div className="accordion-body">
                        <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header">
                      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                        04. Are You Awards Winning Company?
                      </button>
                    </h5>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                      <div className="accordion-body">
                        <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
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
                        01. What Services Do We Provides?
                      </button>
                    </h5>
                    <div id="collapseTwoOne" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
                      <div className="accordion-body">
                        <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header">
                      <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwoTwo">
                        02. How Must Cost Our Rooms?
                      </button>
                    </h5>
                    <div id="collapseTwoTwo" className="accordion-collapse collapse show" data-bs-parent="#faq-accordion-two">
                      <div className="accordion-body">
                        <p>We denounce with righteous indignation and dislike men beguiledey and demoralized by the charms of pleasure of the moment</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header">
                      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwoThree">
                        03. Experience Team Member?
                      </button>
                    </h5>
                    <div id="collapseTwoThree" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
                      <div className="accordion-body">
                        <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header">
                      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwoFour">
                        04. Are You Awards Winning Company?
                      </button>
                    </h5>
                    <div id="collapseTwoFour" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
                      <div className="accordion-body">
                        <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
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
      {/* FAQ Area end */}
    </div>
  );
}
