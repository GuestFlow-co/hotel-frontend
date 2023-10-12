import React from "react";
import { Routes, Route } from "react-router-dom";
import RoomList from "./Rooms/List/RoomList";
import { useSelector } from "react-redux/es";
import RoomDetail from "./Rooms/RoomDetails/RoomDetails";
import HomePage from "./HomePage/HomePage";
import Tour from "./Tour";

import LoginForm from "./Auth/LoginForm/LoginForm";
import LoginProvider from "./Context/Context_Login";
import ForgotPassword from "./Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword/ResetPassword";
import TourDetalis from "./TourDetails";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";


import FAQ from "./FAQ/FAQ";

import ContactUs from "./ContactUs/ContactUs";

import Dashboard from "./dashboard/Dashboard";
import BookingDash from "./dashboard/pages/BookingDash";
import MainDashboard from "./dashboard/dashboradComp/home/mainDashboard";
import Content from "./dashboard/dashboradComp/sideBar/content";
import Dashborad from "./dashboard/Dashboard";
import MM from "./dashboard/MM";

export default function Routers() {
  const rooms = useSelector((state) => state.rooms.rooms);

  return (
    <div>
      <LoginProvider>

     
        {/* <Header /> */}
        {/* <Dashborad>
          <Routes>
        <Route path="/dashboard/allbooking" element={<MainDashboard />} />
        <Route path="/dashboard/d" element={<BookingDash />} />

          </Routes>

      </Dashborad> */}


        <Header />



        <Routes>

          <Route path="/rooms/:room_number" element={<RoomDetail />} />
          <Route path="/rooms" element={<RoomList rooms={rooms} />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/tour' element={<Tour />} />
          <Route path="TourDetalis/:id" element={<TourDetalis />} />
          
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LoginForm />} />
          {/* <Route path="/signup" element={<SignupForm />} />  */}
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
          <Route path="/dashboard/*" element={<Dashboard />} />

        </Routes>



      </LoginProvider>

      <Footer />

    </div>
  );
}
