import React from 'react';
import './ContactUs.scss'
function ContactInfoItem({ icon, title, text }) {
  return (
    <div className="contact-info-item">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <div className="content">
        <span className="title">{title}</span>
        <span className="text">{text}</span>
      </div>
    </div>
  );
}

export default ContactInfoItem;
