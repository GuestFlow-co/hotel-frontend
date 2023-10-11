import React from 'react'
import './FAQ.scss'
import { Link } from 'react-router-dom';


export default function FAQ() {
  return (
    <>
    {/* Page header */}
    <section className="page-header bg--cover" style={{ backgroundImage: "url(	https://labartisan.net/demo/tavern/assets/images/header/bg.jpg)" }}>
      <div className="container">
        <div className="page-header__content text-center">
          <h2>FAQ</h2>
          <nav style={{ '--bs-breadcrumb-divider': '/' }} aria-label="breadcrumb">
    
          </nav>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="faq padding-top padding-bottom">
      <div className="container">
        <div className="section-header">
          <div className="section-header__content">
            <p className="subtitle">Popular Questions</p>
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>
        <div className="faq__wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              {/* Accordion 1 */}
              <div className="accordion" id="faqAccordion1">
                <div className="row g-4">
                  {/* FAQ Item 1 */}
                  <div className="col-12">
                    <div className="accordion__item accordion__item--style2" data-aos="fade-up-right" data-aos-duration="1000">
                      <div className="accordion__header" id="faq1">
                        <button className="accordion__button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody1" aria-expanded="false" aria-controls="faqBody1">
                          What's special about your Hotel?
                          <span className="plus-icon"></span>
                        </button>
                      </div>
                      <div id="faqBody1" className="accordion-collapse collapse" aria-labelledby="faq1" data-bs-parent="#faqAccordion1">
                        <div className="accordion__body">
                          Don’t get shirty with me owt to do with me arse down have it car boot happy days no biggie bevriy only aquid goods flat the little rotter cheeky. Lorem ipsum dolor siterx amet Lorem ipsum dolor sit amet.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion__item accordion__item--style2" data-aos="fade-up-right" data-aos-duration="1000">
                      <div className="accordion__header" id="faq1">
                        <button className="accordion__button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody1" aria-expanded="false" aria-controls="faqBody1">
                          What's special about your Hotel?
                          <span className="plus-icon"></span>
                        </button>
                      </div>
                      <div id="faqBody1" className="accordion-collapse collapse" aria-labelledby="faq1" data-bs-parent="#faqAccordion1">
                        <div className="accordion__body">
                          Don’t get shirty with me owt to do with me arse down have it car boot happy days no biggie bevriy only aquid goods flat the little rotter cheeky. Lorem ipsum dolor siterx amet Lorem ipsum dolor sit amet.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion__item accordion__item--style2" data-aos="fade-up-right" data-aos-duration="1000">
                      <div className="accordion__header" id="faq1">
                        <button className="accordion__button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody1" aria-expanded="false" aria-controls="faqBody1">
                          What's special about your Hotel?
                          <span className="plus-icon"></span>
                        </button>
                      </div>
                      <div id="faqBody1" className="accordion-collapse collapse" aria-labelledby="faq1" data-bs-parent="#faqAccordion1">
                        <div className="accordion__body">
                          Don’t get shirty with me owt to do with me arse down have it car boot happy days no biggie bevriy only aquid goods flat the little rotter cheeky. Lorem ipsum dolor siterx amet Lorem ipsum dolor sit amet.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Add more FAQ items here */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Accordion 2 */}
              <div className="accordion" id="faqAccordion2">
                <div className="row g-4">
                  {/* FAQ Item 1a */}
                  <div className="col-12">
                    <div className="accordion__item accordion__item--style2" data-aos="fade-up-left" data-aos-duration="1000">
                      <div className="accordion__header" id="faq1a">
                        <button className="accordion__button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody1a" aria-expanded="false" aria-controls="faqBody1a">
                          How can I book a room from this website?
                          <span className="plus-icon"></span>
                        </button>
                      </div>
                      <div id="faqBody1a" className="accordion-collapse collapse" aria-labelledby="faq1a" data-bs-parent="#faqAccordion2">
                        <div className="accordion__body">
                          Don’t get shirty with me owt to do with me arse down have it car boot happy days no biggie bevriy only aquid goods flat the little rotter cheeky. Lorem ipsum dolor siterx amet Lorem ipsum dolor sit amet.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion__item accordion__item--style2" data-aos="fade-up-left" data-aos-duration="1000">
                      <div className="accordion__header" id="faq1a">
                        <button className="accordion__button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody1a" aria-expanded="false" aria-controls="faqBody1a">
                          How can I book a room from this website?
                          <span className="plus-icon"></span>
                        </button>
                      </div>
                      <div id="faqBody1a" className="accordion-collapse collapse" aria-labelledby="faq1a" data-bs-parent="#faqAccordion2">
                        <div className="accordion__body">
                          Don’t get shirty with me owt to do with me arse down have it car boot happy days no biggie bevriy only aquid goods flat the little rotter cheeky. Lorem ipsum dolor siterx amet Lorem ipsum dolor sit amet.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion__item accordion__item--style2" data-aos="fade-up-left" data-aos-duration="1000">
                      <div className="accordion__header" id="faq1a">
                        <button className="accordion__button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody1a" aria-expanded="false" aria-controls="faqBody1a">
                          How can I book a room from this website?
                          <span className="plus-icon"></span>
                        </button>
                      </div>
                      <div id="faqBody1a" className="accordion-collapse collapse" aria-labelledby="faq1a" data-bs-parent="#faqAccordion2">
                        <div className="accordion__body">
                          Don’t get shirty with me owt to do with me arse down have it car boot happy days no biggie bevriy only aquid goods flat the little rotter cheeky. Lorem ipsum dolor siterx amet Lorem ipsum dolor sit amet.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Add more FAQ items here */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
}
 