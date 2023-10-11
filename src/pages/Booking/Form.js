// BookingForm.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../store/actions/Bookings/BookingActions";
import { useParams } from "react-router-dom";

const BookingForm = () => {
  const { room_number } = useParams();
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  const bookings = useSelector((state) => state.bookings.bookings);
  const users = useSelector((state) => state.users);
  console.log("----------------------------",users)
  const room = rooms.find((room) => room.room_number === room_number);

  const roomId = room ? room.Room_id : "";
  const bookingCost = bookings.bookingCost;

  const [bookingData, setBookingData] = useState({
    theRoomID: roomId,
    check_in_date: "",
    check_out_date: "",
    customer_id: "", // You need to provide a customer_id here
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
      customer_id: "", // Reset the customer_id as well
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
            name="bookingCost" // Change this to "bookingCost"
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
