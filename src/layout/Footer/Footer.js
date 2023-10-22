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
              <p>Discover a World-Class Luxury Hotel & Restaurant Just Outside the City
                At our establishment.</p>
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
                <li><Link to="./AboutUs">About company</Link></li>
                <li><Link to="./AboutUs">History</Link></li>
                <li><Link to="./AboutUs">Team Member</Link></li>
                <li><Link to="blog.html">Latest News</Link></li>
                <li><Link to="contact.html">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
              <h4 className="footer-title">Features</h4>
              <ul className="list-style-one">
                <li><Link to="./rooms">Free Transportation</Link></li>
                <li><Link to="./rooms">GYM & Fitness Care</Link></li>
                <li><Link to="./rooms">SPA Treatment</Link></li>
                <li><Link to="./rooms">Food & Drinks</Link></li>
                <li><Link to="./rooms">Breakfast</Link></li>
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
      <div className="bg-lines">
        <span></span><span></span>
        <span></span><span></span>
        <span></span><span></span>
        <span></span><span></span>
        <span></span><span></span>
      </div>
      <div className="wave-shapes"></div>
      <div className="wave-shapes-two"></div>
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
                <li><Link to="./AboutUs">Terms</Link></li>
                <li><Link to="./AboutUs">Privacy Policy</Link></li>
                <li><Link to="faqs.html">FAQs</Link></li>
                <li><Link to="./AboutUs">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
