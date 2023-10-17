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
import RoomsDash from "./pages/RoomsDash/RoomsDash";
import TourDash from "./pages/Tourash/TourDash";

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
            <Route path="/" element={<MainDashboard users={users} bookings={bookings} rooms={rooms} tours={tours} />} />
            <Route path="/allrooms" element={<RoomsDash users={users} bookings={bookings} rooms={rooms} tours={tours} />} />
            <Route path="/alltour" element={<TourDash  tours={tours} />} />
            {/* <Route path="/alltour" element={<TourDash  tours={tours} />} /> */}

            <Route path="/allbooking" element={<BookingDash bookings={bookings} users={users} />} />
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
