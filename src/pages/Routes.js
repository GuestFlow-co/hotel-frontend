import React from 'react';
import { Routes, Route } from "react-router-dom";
import RoomList from './Rooms/List/RoomList';
import { useSelector } from 'react-redux/es';
import RoomDetail from './Rooms/RoomDetails/RoomDetails';
import HomePage from './HomePage/HomePage';
import Tour from './Tour';
import LoginForm from './Auth/LoginForm';
import SignupForm from './Auth/SignupForm';
import LoginProvider from './Context/Context_Login';

export default function Routers() {
  const rooms = useSelector(state => state.rooms.rooms);  


  return (
       <LoginProvider>
    <Routes>

      <Route path="/rooms/:room_number"  element={<RoomDetail  />} />
      <Route path="/rooms"  element={<RoomList  rooms={rooms}  />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/tour' element={<Tour />} />

      <Route path="/login" element={<LoginForm />} /> 
      <Route path="/signup" element={<SignupForm />} /> 
    </Routes>
       </LoginProvider>
  );
}
