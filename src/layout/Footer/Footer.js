import React from 'react'
import './Footer.scss'
import Logo from '../../assets/images/logos/logoW.png'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="main-footer bgc-black-with-lighting pt-100 rel z-1 overflow-hidden">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-between">
          <div className="col-xl-3 col-lg-5 col-sm-6">
            <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-25">
                <Link to="./"><img src={Logo} alt="Logo" /></Link>
              </div>
              <p>Nam libero tempore lol soluta nobis eseligendi optio cumque nihile impedit quo minus maxime placeat facere</p>
              <div className="social-style-one pt-25">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-behance"></i></a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="list-style-one">
                <li><a href="about.html">About company</a></li>
                <li><a href="about.html">History</a></li>
                <li><a href="about.html">Team Member</a></li>
                <li><a href="blog.html">Latest News</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
              <h4 className="footer-title">Features</h4>
              <ul className="list-style-one">
                <li><a href="room-details.html">Free Transportation</a></li>
                <li><a href="room-details.html">GYM & Fitness Care</a></li>
                <li><a href="room-details.html">SPA Treatment</a></li>
                <li><a href="room-details.html">Food & Drinks</a></li>
                <li><a href="room-details.html">Breakfast</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
              <h4 className="footer-title">Newsletter</h4>
              <form action="#">
                <input type="email" placeholder="Enter Address" required />
                <button className="theme-btn">Subscribe <i className="fa-solid fa-angle-right"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bgd-dark  pt-20 pb-5 rpt-25">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>© 2023 <Link to='./'>GestFlow.</Link> All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="footer-bottom-nav rpb-10">
                <li><a href="about.html">Terms</a></li>
                <li><a href="about.html">Privacy Policy</a></li>
                <li><a href="faqs.html">FAQs</a></li>
                <li><a href="about.html">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span></span><span></span>
        <span></span><span></span>
        <span></span><span></span>
        <span></span><span></span>
        <span></span><span></span>
      </div>
      <div className="wave-shapes"></div>
      <div className="wave-shapes-two"></div>
    </footer>
  );
};

export default Footer
