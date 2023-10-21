import React from "react";
import ContactPage from "./ContactPage";
import HeroContactUs from "./HeroContactUs";
import "./ContactUs.scss";
import InstagramArea from "./InstagramArea";
import { Fade } from "react-awesome-reveal";


function ContactUs() {
  return (
    <>
      <HeroContactUs />
      <Fade duration={1000} triggerOnce>
        <ContactPage />
        <InstagramArea />
      </Fade>
    </>
  );
}

export default ContactUs;
