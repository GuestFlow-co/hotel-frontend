import React from "react";
import { Menu, MenuButton, Button, Box } from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import "./content.scss";
import { Link } from "react-router-dom";

function Content({children}) {
  // Initialize disclosure objects for each menu
  const firstMenuDisclosure = useDisclosure();
  const secondMenuDisclosure = useDisclosure();

  return (
    <Box w="100%"  minH={"100vh"} bg="blue.500" style={{ backgroundColor: "rgb(16,19,28)" }} boxShadow="md">
      <section className="main-section-sidebar">
        <div style={{ width: "90%" }}>
          <Menu>
            {() => (
              <>
                <MenuButton
                  className="sidebar-btn"
                  isActive={firstMenuDisclosure.isOpen}
                  as={Button}
                  rightIcon={firstMenuDisclosure.isOpen ? <MinusIcon /> : <AddIcon />}
                  onClick={firstMenuDisclosure.onToggle}
                  style={{
                    backgroundColor: firstMenuDisclosure.isOpen ? "#f1f1f1" : "initial",
                  }}
                >
                  <i className="fa-solid fa-house"></i> Booking
                </MenuButton>
                {firstMenuDisclosure.isOpen && (
                  <div>
                    <Link to="/dashboard/allbooking">
                      <button className="sidebar-btn">All Booking</button>
                    </Link>
                    <Link to="/add-booking">
                      <button className="sidebar-btn">Add Booking</button>
                    </Link>
                    <Link to="/edit-booking">
                      <button className="sidebar-btn">Edit Booking</button>
                    </Link>
                  </div>
                )}
              </>
            )}
          </Menu>
          <Menu>
            {() => (
              <>
                <MenuButton
                  className="sidebar-btn"
                  isActive={secondMenuDisclosure.isOpen}
                  as={Button}
                  rightIcon={secondMenuDisclosure.isOpen ? <MinusIcon /> : <AddIcon />}
                  onClick={secondMenuDisclosure.onToggle}
                  style={{
                    backgroundColor: secondMenuDisclosure.isOpen ? "blue" : "initial",
                  }}
                >
                  <i className="fa-solid fa-house"></i> Booking
                </MenuButton>
                {secondMenuDisclosure.isOpen && (
                  <div>
                    <Link to="/all-booking">
                      <button className="sidebar-btn">All Booking</button>
                    </Link>
                    <Link to="/add-booking">
                      <button className="sidebar-btn">Add Booking</button>
                    </Link>
                    <Link to="/edit-booking">
                      <button className="sidebar-btn">Edit Booking</button>
                    </Link>
                  </div>
                )}
              </>
            )}
          </Menu>
        </div>
      </section>
    </Box>
  );
}

export default Content;
