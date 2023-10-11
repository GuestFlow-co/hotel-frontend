// BookingForm.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../store/actions/Bookings/BookingActions";
import { useParams } from "react-router-dom";
import cookie from "react-cookies";

const BookingForm = () => {
  const { room_number } = useParams();
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  const bookings = useSelector((state) => state.bookings.bookings);
  const user = cookie.load("user"); // Corrected the cookie key
  console.log("User Data:", user);
  const user_id = user ? user.user_id : "";
  console.log("user_id", user_id);

  const room = rooms.find((room) => room.room_number === room_number);

  const roomId = room ? room.Room_id : "";
  // Use correct property to get booking cost
  const bookingCost = bookings.length > 0 ? bookings[0].bookingCost : 0;

  const [bookingData, setBookingData] = useState({
    theRoomID: roomId,
    check_in_date: "",
    check_out_date: "",
    user_id: user ? user.user_id : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooking(bookingData));
    // Reset the form fields
    setBookingData({
      theRoomID: roomId,
      check_in_date: "",
      check_out_date: "",
      user_id: user ? user.user_id : "",
    });
  };

  return (
    <div>
      <h2>Add Booking</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Check-in Date:</label>
          <input
            type="date"
            name="check_in_date"
            value={bookingData.check_in_date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Check-out Date:</label>
          <input
            type="date"
            name="check_out_date"
            value={bookingData.check_out_date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Booking Cost:</label>
          <input
            type="text"
            name="bookingCost"
            value={bookingCost}
            onChange={handleChange}
          />
        </div>
        {/* Add more input fields for other booking data */}
        <button type="submit">Add Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
