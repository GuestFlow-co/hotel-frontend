import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import RoomList from "./Rooms/List/RoomList";
import { useSelector } from "react-redux/es";
import RoomDetail from "./Rooms/RoomDetails";
import HomePage from "./HomePage/HomePage";
import Tour from "./Tour";
import { ChakraProvider } from '@chakra-ui/react'

import LoginForm from "./Auth/LoginForm/LoginForm";
import LoginProvider from "./Context/Context_Login";
import ForgotPassword from "./Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword/ResetPassword";
import TourDetalis from "./TourDetails";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

import AboutUs from "./AboutUs/AboutUs";

import FAQ from "./FAQ/FAQ";

import ContactUs from "./ContactUs/ContactUs";

import Dashboard from "./dashboard/Dashboard";
import Resturant from "./Resturant/Resturant";
import Profile from "./Profile/Profile";
import FeatureChecklist from "./Rooms/Create/Feature";

import ScrollToTopButton from '../components/buttons/topButton';
import EditUserInfo from "./Profile/EditUserInfo/EditUserInfo";

export default function Routers() {
  const location = useLocation().pathname;
  const isDashboardPage = location.startsWith("/dashboard");
  const isSignInPage = location === "/login";
  const rooms = useSelector((state) => state.rooms.rooms);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div>
      <ScrollToTopButton/>
      <LoginProvider>





        {!isDashboardPage && !isSignInPage && <Header />}




        <Routes>
          <Route path="/rooms/:room_number" element={<RoomDetail />} />
          <Route path="/rooms" element={<RoomList rooms={rooms} />} />

          <Route path='/tour' element={<Tour />} />
          <Route path="TourDetalis/:id" element={<TourDetalis />} />

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/FAQ" element={<FAQ />} />

          <Route path="/Resturants" element={<Resturant />} />
 424668b2193481e6d80a4fbd0cd305f89a498a20
          <Route path="/editProfile" element={<EditUserInfo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LoginForm />} />
          {/* <Route path="/signup" element={<SignupForm />} />  */}
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
          
          <Route path="/Dashboard/*" element={
            <ChakraProvider>

              <Dashboard />
            </ChakraProvider>
          } />

          <Route path='/' element={<HomePage />} />

        </Routes>



      </LoginProvider>

      {!isDashboardPage && !isSignInPage && <Footer />}

    </div>
  );
}
