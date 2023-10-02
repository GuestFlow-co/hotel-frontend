import React from 'react';
import { Routes, Route } from "react-router-dom";
import RoomList from './Rooms/List/RoomList';
import { useSelector } from 'react-redux/es';
import RoomDetail from './Rooms/RoomDetails/RoomDetails';
import HomePage from './HomePage/HomePage';

export default function Routers() {
  const rooms = useSelector(state => state.rooms.rooms);  


  return (
    <Routes>
      <Route path="/rooms/:room_number"  element={<RoomDetail  />} />
      <Route path="/rooms"  element={<RoomList  rooms={rooms}  />} />
      <Route path='/' element={<HomePage />} />

    </Routes>
  );
}
