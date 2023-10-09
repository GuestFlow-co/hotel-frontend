import React from 'react';
import { Routes, Route } from "react-router-dom";
import RoomList from './Rooms/List/RoomList';
import { useSelector } from 'react-redux/es';
import RoomDetail from './Rooms/RoomDetails/RoomDetails';
import HomePage from './HomePage/HomePage';
import Tour from './Tour';
import TourDetalis from './TourDetails';
import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'

export default function Routers() {
  const rooms = useSelector(state => state.rooms.rooms);  


  return (
    <div>

    <Header />

    <Routes>
      <Route path="/rooms/:room_number"  element={<RoomDetail/>} />
      <Route path="/rooms"  element={<RoomList  rooms={rooms}  />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/tour' element={<Tour />} />
      <Route path ="TourDetalis/:id" element={<TourDetalis />} />

    </Routes>
    <Footer />

    </div>
  );
}