import React, { useEffect,useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import "./Dashboard.scss";
import Content from "./dashboradComp/sideBar/content";
import MainDashboard from "./dashboradComp/home/mainDashboard";
import { Routes, Route } from "react-router-dom";
import BookingDash from "./pages/BookingDash";
import { fetchBookings } from "../../store/actions/Bookings/BookingActions";
import { useSelector, useDispatch } from "react-redux";
import { fetchRooms } from "../../store/actions/RoomActions";
import { fetchTours } from "../../store/actions/Tours/Touraction";
import { fetchUsers } from "../../store/actions/Auth/AuthActions";
import Popup from "../pop";
import HotelReservation from "../Booking/FormDashboard";

function Dashborad() {
  const bookings = useSelector((state) => state.bookings.bookings);
  const rooms = useSelector((state) => state.rooms.rooms);
  const tours = useSelector((state) => state.tours.tours);
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();
  const [loader, setloader] = useState(false);


  useEffect(() => {
    dispatch(fetchBookings());
    dispatch(fetchRooms());
    dispatch(fetchTours());
    dispatch(fetchUsers());

    setloader(true)
  }, [dispatch]);
  return (
    <div className="A" style={{width:"100%"}}>
    {loader ? (
      <div className="the-father-of-allDashboard" style={{display:"flex",backgroundColor:"#eaeef6",width:"100%"}}>
        <div className="content-dev-dashboard">
          <Content />
        </div>
        <div className="all-content-dev">
          <Routes>
            <Route path="/home" element={<MainDashboard users={users} bookings={bookings} rooms={rooms} tours={tours} />} />
            <Route path="/allbooking" element={<BookingDash bookings={bookings} users={users} />} />
            <Route path="/addbooking" element={<HotelReservation/>} />
            <Route path="/addrooms" element={<Popup />} />
            
          </Routes>
        </div>
      </div>
    ) : (
      <div className='preloader'></div>
    )}
  </div>
  );
}

export default Dashborad;
