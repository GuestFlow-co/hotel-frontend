import React, { useEffect } from "react";
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

function Dashborad() {
  const bookings = useSelector((state) => state.bookings.bookings);
  const rooms = useSelector((state) => state.rooms.rooms);
  const tours = useSelector((state) => state.tours.tours);

  const dispatch = useDispatch();
  console.log(bookings, "bookings");
  console.log(rooms, "rooms");
  console.log(tours[0], "tours");

  useEffect(() => {
    dispatch(fetchBookings());
    dispatch(fetchRooms());
    dispatch(fetchTours());
  }, [dispatch]);
  return (
    <div className="the-father-of-allDashborad">
      <div className="content-dev-dashboard">
        <Content />
      </div>
      <div className="all-content-dev">
        <Routes>
          <Route path="/allbooking" element={<MainDashboard />} />
          <Route path="/d" element={<BookingDash />} />
        </Routes>{" "}
      </div>

    </div>
  );
}

export default Dashborad;
