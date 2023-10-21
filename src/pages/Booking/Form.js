import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../store/actions/Bookings/BookingActions";
import { Link, useParams } from "react-router-dom";
import cookie from "react-cookies";
import {
  WelcomePopup,
} from "./style";

import DatePicker from "react-datepicker";


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

    if (new Date(bookingData.check_out_date) <= new Date(bookingData.check_in_date)) {
      alert("Check-out date cannot be before or on the same day as check-in date.");
      return;
    }

    const userHasBookingInRoom = bookings.some((booking) => {
      return (
        booking.theRoomID === roomId &&
        booking.customer_id === user_id &&
        (
          (new Date(booking.check_in_date) >= new Date(bookingData.check_in_date) &&
            new Date(booking.check_in_date) < new Date(bookingData.check_out_date)) ||
          (new Date(booking.check_out_date) > new Date(bookingData.check_in_date) &&
            new Date(booking.check_out_date) <= new Date(bookingData.check_out_date))
        )
      );
    });

    if (userHasBookingInRoom) {
      alert("You already have a booking for this room during the selected dates.");
      return;
    }

    dispatch(addBooking(bookingData));

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

  const hideWelcomePopup = () => {
    setShowWelcomePopup(false);
  };

  useEffect(() => {
    if (showWelcomePopup) {
      const timeout = setTimeout(hideWelcomePopup, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showWelcomePopup]);

  const currentDay = new Date();

  const isCheckInDateBooked = isDateBooked(bookingData.check_in_date);
  const isCheckOutDateBooked = isDateBooked(bookingData.check_out_date);


  return (
    <div>

      <div className="room-details-sidebar bgc-lighter p-50 rp-40 pos sticky-sidebar">
        <form onSubmit={handleSubmit} className="widget-search-filter wow fadeInUp delay-0-4s" >
          <div className="form-group">
            <label htmlFor="checkin">Check In</label>
            <div className="input-Checkin-out text-black" >
              <DatePicker
                selected={bookingData.check_in_date}
                onChange={date => setBookingData({ ...bookingData, check_in_date: date })}
                className={isCheckInDateBooked ? "disabled-input" : ""}
                disabled={isCheckInDateBooked}
                placeholderText="Check In"
                minDate={currentDay}
              />
              <i className="fa-regular fa-calendar-days text-black "></i>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="checkout">Check Out</label>
            <div className="input-Checkin-out" >
              <DatePicker
                selected={bookingData.check_out_date}
                onChange={date => setBookingData({ ...bookingData, check_out_date: date })}
                className={isCheckOutDateBooked ? "disabled-input" : ""}
                disabled={isCheckOutDateBooked}
                placeholderText="Check Out"
                minDate={currentDay}
              />
              <i className="fa-regular fa-calendar-days text-black "></i>

            </div>
          </div>

          {!user ? (
            <Link to="/login">

              <button className="theme-btn w-100">
                Add Booking <i className="fa fa-angle-right"></i>

              </button></Link>) : (

            <button className="theme-btn w-100" type="submit">
              Add Booking <i className="fa fa-angle-right"></i>

            </button>
          )


          }
        </form>

        {showWelcomePopup && (
          <WelcomePopup className="welcome-popup">
            <p className="welcome-message">Welcome to our hotel! Your booking has been added.</p>
          </WelcomePopup>
        )}
      </div>

    </div >
  );
};

export default BookingForm;

