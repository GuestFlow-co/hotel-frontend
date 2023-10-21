import React, { useState, useContext, useEffect } from "react";
import cookie from "react-cookies";

import { Menu, MenuButton, Button, Box } from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import "./content.scss";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/images/logos/logoW.png";
import { LoginContext } from "../../../Context/Context_Login";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import axios from "axios";
function Content({ children }) {
  // Initialize disclosure objects for each menu
  const firstMenuDisclosure = useDisclosure();
  const secondMenuDisclosure = useDisclosure();
  const tharidMenuDisclosure = useDisclosure();
  const navigate = useNavigate();

  const [homeIsOpen, setHomeIsOpen] = useState(false);
  const { login, logout, loginData, errorMessage } = useContext(LoginContext);

  const handleLogOut = () => {
    logout();
    navigate("/login");
  };
  const [fulluser, setFulluser] = useState("");
  // useEffect(() => {
  //   const newUser = cookie.load("user");
  //   setFulluser(newUser[0]);
  // }, []);
  useEffect(() => {
    const user = cookie.load("user");
    if (user) {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/user/${user.user_id}`)
        .then((response) => {
          const theUser = response.data;
          console.log(theUser, "uuuuuuuuuuuuu");
          setFulluser(theUser);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  }, []);
  const capitalizeFirstLetter = (str) => {
    if (str && str.length > 0) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return ""; // Return an empty string if str is undefined or empty
  };

  return (
    <Box
      w="100%"
      bg="blue.500"
      style={{
        backgroundColor: " rgb(72 19 19)",
        maxHeight: "100vh",
        overflowY: "auto",
      }}
      boxShadow="md"
    >
      <section className="main-section-sidebar">
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
            }}
          >
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
            <div className="user-profile">
              <MDBCardImage
                src={
                  fulluser?.coverPhoto ||
                  "https://www.its.ac.id/international/wp-content/uploads/sites/66/2020/02/blank-profile-picture-973460_1280.jpg"
                }
                alt="avatar"
                className="rounded-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "15px",
                }}
                fluid
              />
              <p className="username">
                {
                  fulluser
                    ? capitalizeFirstLetter(fulluser.firstName) +
                      "  " +
                      capitalizeFirstLetter(fulluser.lastName)
                    : "Guest" // Provide a default value or message when fulluser is null or undefined
                }
              </p>
            </div>
            <Menu>
              {() => (
                <Link
                  style={{
                    backgroundColor: homeIsOpen ? "#89644E" : "initial",
                  }}
                  className="sidebar-btn"
                  to="/dashboard/"
                >
                  <MenuButton
                    className="sidebar-btn"
                    as={Button}
                    isActive={homeIsOpen}
                    style={{
                      backgroundColor: homeIsOpen ? "#89644E" : "initial",
                    }}
                    // onClick={() => setHomeIsOpen(!homeIsOpen)} // Toggle the open state
                  >
                    <i
                      style={{ marginRight: "45px" }}
                      className="fa-solid fa-house"
                    ></i>{" "}
                    Home
                  </MenuButton>
                </Link>
              )}
            </Menu>
            <Menu className="menu-sidebar-btn">
              {() => (
                <>
                  <div style={{ width: "100%" }}>
                    <Link
                      style={{
                        backgroundColor: homeIsOpen ? "#89644E" : "initial",
                      }}
                      className="sidebar-btn"
                      to="/dashboard/allbooking"
                    >
                      <button className="sidebar-btn">
                        <i
                          style={{ marginRight: "15px" }}
                          class="fa-solid fa-hotel"
                        ></i>{" "}
                        ALL Booking
                      </button>
                    </Link>

                    <Link
                      style={{
                        backgroundColor: homeIsOpen ? "#89644E" : "initial",
                      }}
                      className="sidebar-btn"
                      to="/dashboard/addbooking"
                    >
                      <button className="sidebar-btn">
                        <i
                          style={{ marginRight: "15px" }}
                          class="fa-solid fa-circle-plus"
                        ></i>{" "}
                        ADD Booking
                      </button>
                    </Link>
                  </div>
                  {/* )} */}
                </>
              )}
            </Menu>

            <Menu className="menu-sidebar-btn">
              {() => (
                <>
                  <div style={{ width: "100%" }}>
                    <Link
                      style={{
                        backgroundColor: homeIsOpen ? "#89644E" : "initial",
                      }}
                      className="sidebar-btn"
                      to="/dashboard/allrooms"
                    >
                      <button className="sidebar-btn">
                        {" "}
                        <i
                          style={{ marginRight: "22px" }}
                          class="fa-solid fa-people-roof"
                        ></i>{" "}
                        ALL Rooms
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </Menu>

            {/* =====================//===================== */}
            <Menu className="menu-sidebar-btn">
              {() => (
                <>
                  <div style={{ width: "100%" }}>
                    <Link
                      style={{
                        backgroundColor: homeIsOpen ? "#89644E" : "initial",
                      }}
                      className="sidebar-btn"
                      to="/dashboard/alltour"
                    >
                      <button className="sidebar-btn">
                        {" "}
                        <i
                          style={{ marginRight: "25px" }}
                          class="fa-solid fa-map-location-dot"
                        ></i>
                        ALL Tours
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </Menu>
          </div>
          <button
            style={{ marginBottom: "50px", marginTop: "30px" }}
            onClick={handleLogOut}
            className="theme-btn1"
          >
            Log Out <i className="fa-solid fa-sign-out"></i>
          </button>
        </div>
      </section>
    </Box>
  );
}

export default Content;
