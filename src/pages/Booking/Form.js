import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../store/actions/Bookings/BookingActions";
import { Link, useParams } from "react-router-dom";
import cookie from "react-cookies";
import {
  Container,
  Form,
  Label,
  Input,
  Button,
  WelcomePopup,
} from "./style";

const BookingForm = () => {
  const { room_number } = useParams();
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  const bookings = useSelector((state) => state.bookings.bookings);
  const user = cookie.load("user");
  const auth = cookie.load("auth");
  console.log(auth);
  const user_id = user ? user.user_id : "";
  const room = rooms.find((room) => room.room_number === room_number);
  const roomId = room ? room.Room_id : "";

  const [bookingData, setBookingData] = useState({
    check_in_date: "",
    check_out_date: "",
    theRoomID: roomId,
    customer_id: user_id,
  });

  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

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

  const isDateBooked = (date) => {
    return bookings.some((booking) => {
      const bookingStartDate = new Date(booking.check_in_date);
      const bookingEndDate = new Date(booking.check_out_date);
      const currentDate = new Date(date);

      return currentDate >= bookingStartDate && currentDate <= bookingEndDate;
    });
  };
console.log(isDateBooked)
  const isCheckInDateBooked = isDateBooked(bookingData.check_in_date);
  const isCheckOutDateBooked = isDateBooked(bookingData.check_out_date);
  console.log(isCheckInDateBooked)
  console.log(isCheckOutDateBooked)

  return (
    <Container w={'100'}>
      <h2>Add Booking</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Check-in Date:</Label>
          <Input
            type="date"
            name="check_in_date"
            value={bookingData.check_in_date}
            onChange={handleChange}
            className={isCheckInDateBooked ? "disabled-input" : ""}
            disabled={isCheckInDateBooked}
          />
        </div>
        <div>
          <Label>Check-out Date:</Label>
          <Input
            type="date"
            name="check_out_date"
            value={bookingData.check_out_date}
            onChange={handleChange}
            className={isCheckOutDateBooked ? "disabled-input" : ""}
            disabled={isCheckOutDateBooked}
          />
        </div>
        {!user ? (
          <Link to="/login">
            <Button style={{ background: '#ab6034' }}>Add Booking</Button>
          </Link>
        ) : (
          <Button style={{ background: '#ab6034' }} type="submit">Add Booking</Button>
        )}
      </Form>

      {showWelcomePopup && (
        <WelcomePopup className="welcome-popup">
          <p>Welcome to our hotel! Your booking has been added.</p>
        </WelcomePopup>
      )}
    </Container>
  );
};

export default BookingForm;

