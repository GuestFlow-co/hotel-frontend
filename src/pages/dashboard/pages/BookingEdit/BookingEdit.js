import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addBooking } from "../../store/actions/Bookings/BookingActions";
import { Link, useParams } from "react-router-dom";
import cookie from "react-cookies";
import { WelcomePopup } from "../../../Booking/style";

import DatePicker from "react-datepicker";
import axios from "axios";

const BookingEdit = ({ booking, closePopup }) => {
  const { room_number } = useParams();
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  const bookings = useSelector((state) => state.bookings.bookings);

  const room = rooms.find((room) => room.room_number === room_number);
  const roomId = room ? room.Room_id : "";
  console.log(booking);
  const [bookingData, setBookingData] = useState({
    check_in_date: new Date(booking.check_in_date),
    check_out_date: new Date(booking.check_out_date),
    number_of_seats_inTour: booking.number_of_seats_inTour,
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

    if (
      new Date(bookingData.check_out_date) <=
      new Date(bookingData.check_in_date)
    ) {
      alert(
        "Check-out date cannot be before or on the same day as check-in date."
      );
      return;
    }

    const userHasBookingInRoom = bookings.some((booking) => {
      return (
        booking.theRoomID === roomId &&
        ((new Date(booking.check_in_date) >=
          new Date(bookingData.check_in_date) &&
          new Date(booking.check_in_date) <
            new Date(bookingData.check_out_date)) ||
          (new Date(booking.check_out_date) >
            new Date(bookingData.check_in_date) &&
            new Date(booking.check_out_date) <=
              new Date(bookingData.check_out_date)))
      );
    });

    if (userHasBookingInRoom) {
      alert(
        "You already have a booking for this room during the selected dates."
      );
      return;
    }

    try {
      const res = axios.put(
        `${process.env.REACT_APP_BASE_URL}/bookings/${booking.booking_id}`,
        bookingData
      );
      console.log(res.data, "resresres");
    } catch (error) {
      console.error("Error:", error);
    }

    setShowWelcomePopup(true);

    setBookingData({
      check_in_date: "",
      check_out_date: "",
      number_of_seats_inTour: 0,
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
      <div className="room-details-sidebar bgc-lighter p-50 rp-40 pos">
        <form
          onSubmit={handleSubmit}
          className="widget-search-filter wow fadeInUp delay-0-4s"
        >
          <div className="form-group">
            <label htmlFor="checkin">Check In</label>
            <div className="input-Checkin-out text-black">
              <DatePicker
                selected={bookingData.check_in_date}
                onChange={(date) =>
                  setBookingData({ ...bookingData, check_in_date: date })
                }
                placeholderText="Check In"
                minDate={currentDay}
              />
              <i className="fa-regular fa-calendar-days text-black "></i>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="checkout">Check Out</label>
            <div className="input-Checkin-out">
              <DatePicker
                selected={bookingData.check_out_date}
                onChange={(date) =>
                  setBookingData({ ...bookingData, check_out_date: date })
                }
                placeholderText="Check Out"
                minDate={currentDay}
              />
              <i className="fa-regular fa-calendar-days text-black "></i>
            </div>
          </div>
          {bookingData.number_of_seats_inTour ? (
            <div className="form-group">
              <label>number of seats inTour</label>
              <div className="input-Checkin-out">
                <input
                  value={bookingData.number_of_seats_inTour || 0}
                  onChange={(event) =>
                    setBookingData({
                      ...bookingData,
                      number_of_seats_inTour: event.target.value,
                    })
                  }
                />
              </div>
            </div>
          ) : (
            <></>
          )}
          
          <button
            className="theme-btn"
            type="submit"
            onClick={closePopup}
            style={{
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Add Booking <i className="fa fa-angle-right"></i>
          </button>
        </form>
        {/* <button
          type="button"
          style={{
            backgroundColor: "gray",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={closePopup}
        >
          Cancel
        </button> */}
        {showWelcomePopup && (
          <WelcomePopup className="welcome-popup">
            <p className="welcome-message">
              Welcome to our hotel! Your booking has been added.
            </p>
          </WelcomePopup>
        )}
      </div>
    </div>
  );
};

export default BookingEdit;
