import React from "react";
import {
  Box,
  Flex,
  Spacer,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import "./Dashboard.scss"
import Content from "./dashboradComp/sideBar/content";
import MainDashboard from "./dashboradComp/home/mainDashboard";


function Dashborad({children}) {
  return (
    <div className="the-father-of-allDashborad">
      <Content />
    <div>
          {children}
    </div>
    
    </div>
  )
}

export default Dashborad
