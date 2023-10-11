import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import "./MainDashboard.scss";
import BookingDash from "../../pages/BookingDash";
import Content from "../sideBar/content";
function MainDashboard() {
  return (
    <div className="main-dev-dashbordHome">
            <Content />

        <Routes>
          <Route path="/dashboard/allbooking" element={<BookingDash />} />
        </Routes>{" "}
    </div>
  );
}

export default MainDashboard;
