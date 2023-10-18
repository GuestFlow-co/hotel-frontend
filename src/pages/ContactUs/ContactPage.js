import React from "react";
import ContactInfoItem from "./ContactInfoItem";
import { AspectRatio } from '@chakra-ui/react'
import "./ContactUs.scss";
// import {BsFillTelephoneOutboundFill } from "react-icons/bs";
// icon={<BsFillTelephoneOutboundFill/>}

function ContactPage() {
  return (
    <section className="contact-page-area py-130 rpy-100 rel z-1">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
              <div className="row">
                <div className="col-xl-10">
                  <div className="section-title mb-60">
                    <span className="sub-title mb-15">Guest Flow</span>
                    <h2>Need Any Consultations to Booked your Seat</h2>
                  </div>
                </div>
              </div>
              <ul className="nav location-tab mb-40 wow fadeInUp delay-0-2s">
                <li>
                  <a
                    href="#Jordan"
                    data-bs-toggle="tab"
                    className="active show"
                  >
                    Jordan
                  </a>
                </li>
                <li>
                  <a href="#Syria" data-bs-toggle="tab">
                    Syria
                  </a>
                </li>
              </ul>
              <div className="tab-content wow fadeInUp delay-0-2s">
                <div className="tab-pane fade active show" id="Jordan">
                  <ContactInfoItem
                  
                    icon="flaticon-location-1"
                    title="Locations"
                    text="55 Main Street, 2nd block, Amman, Jordan"
                  />
                  <ContactInfoItem
                    icon="flaticon-email-marketing"
                    title="Email Address"
                    text={
                      <>
                        <a href="mailto:guestFlow@gmail.com">guestFlow@gmail.com</a>
                        , <a href="mailto:infohotel.net">infohotel.net</a>
                      </>
                    }
                  />
                  <ContactInfoItem
                    icon="flaticon-call"
                    title="Make A Call"
                    text={
                      <a href="calto:+9621234568899">+962 (123) 456 88 99</a>
                    }
                  />
                </div>
                <div className="tab-pane fade" id="Syria">

                  <ContactInfoItem
                    icon="flaticon-location-1"
                    title="Locations"
                    text="93 Main Street, 2nd block, Damascus, Syria"
                  />
                  <ContactInfoItem
                    icon="flaticon-email-marketing"
                    title="Email Address"
                    text={
                      <>
                        <a href="mailto:guestFlow@gmail.com">guestFlow@gmail.com</a>
                        , <a href="mailto:infohotel.net">infohotel.net</a>
                      </>
                    }
                  />
                  <ContactInfoItem
                    icon="flaticon-call"
                    title="Make A Call"
                    text={
                      <a href="calto:+9631234568899">+963 (123) 456 88 99</a>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-page-form wow fadeInUp delay-0-2s">
              <div className="section-title mb-15">
                <h3>Send Us Message</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form
                id="contactForm"
                className="contactForm"
                action="assets/php/form-process.php"
                name="contactForm"
                method="post"
              >
                <div className="row gap-20 pt-15">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value=""
                        placeholder="Full name"
                        required
                        data-error="Please enter your name"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        value=""
                        placeholder="Phone"
                        required
                        data-error="Please enter your Phone"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value=""
                        placeholder="Email"
                        required
                        data-error="Please enter your Email"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        value=""
                        placeholder="Subject"
                        required
                        data-error="Please enter your Subject"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="3"
                        placeholder="Message"
                        required
                        data-error="Please enter your Message"
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group pt-5 mb-0">
                      <button type="submit" className="theme-btn">
                        Send Message<i className="fa-solid fa-arrow-right"></i>
                      </button>
                      <div id="msgSubmit" className="hidden"></div>
                    </div>
                  </div>
                </div>
              </form>
           
            </div>
          </div>
        </div>
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
      <div className="content-map-container">
        <AspectRatio ratio={30 / 9}>
          <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10515.3955558058!2d35.90472362772293!3d31.945366980684618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI2JzU5LjYiTiAzNcKwMzUnMjguOSJF!5e0!3m2!1sen!2s!4v1634464595256!5m2!1sen!2s"
    title="Google Map"
            allowFullScreen
            loading="lazy"
          />
        </AspectRatio>
      </div>
    </section>
  );
}

export default ContactPage;
