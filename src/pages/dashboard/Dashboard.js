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


function Dashborad() {
  return (
    <div className="the-father-of-allDashborad">
    <Spacer />
    <MainDashboard />
    </div>
  )
}

export default Dashborad
