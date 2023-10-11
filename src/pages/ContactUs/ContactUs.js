import React from "react";
import ContactPage from "./ContactPage";
import HeroContactUs from "./HeroContactUs";
import "./ContactUs.scss";
import InstagramArea from "./InstagramArea";

function ContactUs() {
  return (
    <>
      <HeroContactUs />
      <ContactPage />
      <InstagramArea/>
    </>
  );
}

export default ContactUs;
