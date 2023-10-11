import React from "react";
import { Link } from "react-router-dom";
// import Toplogo from "../../assets/images/logoSVG.svg";
import "./navbar.scss";
import { useEffect, useState } from "react";
import Logo from "../../assets/images/logos/logoW.png";



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
                <Link to="./">
                  <img src={Logo} alt="Logo" title="Logo" />
                </Link>
              </div>
            </div>

            <div className="nav-outer clearfix me-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link to="/" className="link">
                      <img src={Logo} alt="Logo" title="Logo" />
                    </Link>
                  </div>

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
                      <Link to="/" className="link">
                        Home
                      </Link>
                      <ul>
                        <li>
                          <a href="index.html">Home One</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link to="/rooms" className="link">
                        Rooms
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link to="/tour" className="link">
                        Tours
                      </Link>
                      <ul>
                        <li>
                          <a href="about.html">About us</a>
                        </li>
                        <li>
                          <a href="">Tours</a>
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
                    <Link to="./FAQ">FAQs</Link>
                      <ul>
                        <li>
                          <Link to="./FAQ">FAQs</Link>
                        </li>
                        <li>
                          <a href="product-details.html">Product Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact" className="link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>

            <div className="menu-btns">
              <Link to="/login" className="theme-btn">
                Start Now <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;