import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../store/actions/Bookings/BookingActions";
import { Link, useParams } from "react-router-dom";
import cookie from "react-cookies";
import { Button } from "bootstrap";

const BookingForm = () => {
  const { room_number } = useParams();
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  const bookings = useSelector((state) => state.bookings.bookings);
  const user = cookie.load("user");
  console.log(user)
  const auth = cookie.load("auth");
  console.log(typeof auth)
  const user_id = user ? user.user_id : "";
  const room = rooms.find((room) => room.room_number === room_number);
  const roomId = room ? room.Room_id : "";

  const [bookingData, setBookingData] = useState({
    check_in_date: "",
    check_out_date: "",
    theRoomID: roomId,
    customer_id: user_id,
  });

  const [showWelcomePopup, setShowWelcomePopup] = useState(false); // State for the welcome popup

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookingData.check_in_date || !bookingData.check_out_date) {
      alert("Please fill in both check-in and check-out dates.");
      return;
    }

    dispatch(addBooking(bookingData));

    // Show the welcome popup
    setShowWelcomePopup(true);

    setBookingData({
      check_in_date: "",
      check_out_date: "",
      theRoomID: roomId,
      customer_id: user_id,
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
        {!user.user_id ? (
          <Link to="/login">
            <button className="bg-brown">Add Booking</button>
          </Link>
        ) : (
          <button className="bg-brown" type="submit">Add Booking</button>
        )}
      </form>

      {showWelcomePopup && (
        <div className="welcome-popup">
          <p>Welcome to our hotel! Your booking has been added.</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
