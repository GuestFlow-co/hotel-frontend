import React, { useEffect } from "react";
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
import { Routes ,Route} from 'react-router-dom'
import BookingDash from "./pages/BookingDash";

function Dashborad() {
  useEffect(()=>{
    
  })
  return (
    <div className="the-father-of-allDashborad">
      <Content />
    <div>
    <Routes>
        <Route path="/allbooking" element={<MainDashboard />} />
        <Route path="/d" element={<BookingDash />} />

          </Routes>    </div>
    
    </div>
  )
}

export default Dashborad
