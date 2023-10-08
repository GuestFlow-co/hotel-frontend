import React from "react";
import { Link } from "react-router-dom";
// import Toplogo from "../../assets/images/logoSVG.svg";
import "./navbar.scss";
import { useEffect, useState } from "react";

const NavBar = () => {


  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowScroll = window.scrollY;
      if (windowScroll >= 100) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = isHeaderFixed ? "main-header header-white fixed-header" : "main-header header-white";

  return (
    <header className={headerClasses}>
      <div className="header-upper">
        <div className="container container-1720 clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/images/logos/logo.png" alt="Logo" title="Logo" />
                </a>
              </div>
            </div>

            <div className="nav-outer clearfix me-auto">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <a href="index.html">
                      <img src="assets/images/logos/logo.png" alt="Logo" title="Logo" />
                    </a>
                  </div>

                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div className="navbar-collapse collapse clearfix">
                  <ul className="navigation clearfix">
                    <li className="dropdown">
                      <a href="#">Home</a>
                      <ul>
                        <li>
                          <a href="index.html">Home One</a>
                        </li>
                        <li>
                          <a href="index2.html">Home Two</a>
                        </li>
                        <li>
                          <a href="index3.html">Home Three</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Room</a>
                      <ul>
                        <li>
                          <a href="room-grid.html">Room Grid</a>
                        </li>
                        <li>
                          <a href="room-2columns.html">Room 2 Column</a>
                        </li>
                        <li>
                          <a href="room-list.html">Room List</a>
                        </li>
                        <li>
                          <a href="room-details.html">Room Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="about.html">About us</a>
                        </li>
                        <li>
                          <a href="services.html">Services</a>
                        </li>
                        <li>
                          <a href="gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="faqs.html">FAQs & Help</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Shop</a>
                      <ul>
                        <li>
                          <a href="shop.html">Shop Grid</a>
                        </li>
                        <li>
                          <a href="product-details.html">Product Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>

            <div className="menu-btns">
              <a href="contact.html" className="theme-btn">
                Book Now <i className="fa-solid fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;