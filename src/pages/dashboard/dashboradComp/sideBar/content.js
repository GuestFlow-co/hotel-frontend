import React,{useState} from "react";
import { Menu, MenuButton, Button, Box } from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import "./content.scss";
import { Link } from "react-router-dom";

function Content({children}) {
  // Initialize disclosure objects for each menu
  const firstMenuDisclosure = useDisclosure();
  const secondMenuDisclosure = useDisclosure();
  const [homeIsOpen, setHomeIsOpen] = useState(false);

  return (
    <Box w="100%"   bg="blue.500" style={{ backgroundColor: " rgb(72 19 19)" }} boxShadow="md">
      <section className="main-section-sidebar" >
        <div style={{ width: "90%" }}>
        <Menu>
      {() => (
        <Link to="/dashboard/home">
          <MenuButton
            className="sidebar-btn"
            as={Button}
            rightIcon={homeIsOpen ? <MinusIcon /> : <AddIcon />}
            isActive={homeIsOpen}
            style={{
              backgroundColor: homeIsOpen ? "#89644E" : "initial",
            }}
            onClick={() => setHomeIsOpen(!homeIsOpen)} // Toggle the open state
          >
            <i className="fa-solid fa-house"></i> Home
          </MenuButton>
        </Link>
      )}
    </Menu>
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
                    backgroundColor: firstMenuDisclosure.isOpen ? "#89644E" : "initial",
                  }}
                >
                 <i class="fa-solid fa-user"></i> Booking
                </MenuButton>
                {firstMenuDisclosure.isOpen && (
                  <div>
                    <Link to="/dashboard/allbooking">
                      <button className="sidebar-btn">All Booking</button>
                    </Link>
                    <Link to="/addbooking">
                      <button className="sidebar-btn">Add Booking</button>
                    </Link>
                    <Link to="/editbooking">
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
                    backgroundColor: secondMenuDisclosure.isOpen ? "#89644E" : "initial",
                  }}
                >
                  <i class="fa-solid fa-person-shelter"></i> Rooms
                </MenuButton>
                {secondMenuDisclosure.isOpen && (
                  <div>
                    <Link to="/allrooms">
                      <button className="sidebar-btn">All Rooms</button>
                    </Link>
                    <Link to="/addrooms">
                      <button className="sidebar-btn">Add Rooms</button>
                    </Link>
                    <Link to="/editrooms">
                      <button className="sidebar-btn">Edit Rooms</button>
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
