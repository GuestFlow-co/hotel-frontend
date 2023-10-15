import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import Toplogo from "../../assets/images/logoSVG.svg";
import "./navbar.scss";
import { useEffect, useState, useContext, } from "react";
import Logo from "../../assets/images/logos/logoW.png";
import { LoginContext } from "../../pages/Context/Context_Login";



const NavBar = () => {
  const { login, logout, loginData, errorMessage } = useContext(LoginContext);
  const isSignedIn = loginData.logged;
  const navigate = useNavigate();
  const location = useLocation();
  const isProfileRoute = location.pathname === "/profile";
  
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleLogOut = () => {
    logout();
    navigate("/login");
  };

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
                        <i className="fa-solid fa-building-columns p-5"></i>
                        Home
                      </Link>

                    </li>
                    <li className="dropdown">
                      <Link to="/rooms" className="link">
                        <i className="fa-solid fa-house p-5"></i>
                        Rooms
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link to="/tour" className="link">
                        <i class="fa-solid fa-tree p-5"></i>
                        Tours
                      </Link>
                    </li>
                    <li className="dropdown">

                      <Link to="./FAQ"><i class="fa-solid fa-question"></i> FAQs </Link>

                    </li>
                    <li>
                      <Link to="/contact" className="link">
                        <i class="fa-solid fa-address-book p-5"></i>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>

            <div className="menu-btns">
              {isSignedIn ? (
                <>
                  {!isProfileRoute && (
                    <Link to="/profile" className="theme-btn">
                      Profile <i className="fa-solid fa-user"></i>
                    </Link>
                  )}
                  <button onClick={handleLogOut} className="theme-btn">
                    Log Out <i className="fa-solid fa-sign-out"></i>
                  </button>
                </>
              ) : (
                <Link to="/login" className="theme-btn">
                  Start Now <i className="fa-solid fa-angle-right"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;