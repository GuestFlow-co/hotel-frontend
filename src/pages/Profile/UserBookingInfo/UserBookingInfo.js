import React, { useEffect, useState } from "react";
import cookie from "react-cookies";
import axios from "axios";
import "./UserBookingInfo.scss";

function UserBookingInfo() {
  const [getAllbooking, setgetAllbooking] = useState([]);

  useEffect(() => {
    const user = cookie.load("user");
    if (user) {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/bookings`)
        .then((response) => {
          const bookings = response.data;
          if (Array.isArray(bookings)) {
            const UserBooking = bookings.filter(
              (item) => item.customer_id === user.user_id
            );
            console.log("User Bookings: ", UserBooking);
            setgetAllbooking(UserBooking);
          } else {
            console.error("Data received is not in an array format.");
          }
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  }, []);

  return (
    // <div className="user-booking-info">
    //   {getAllbooking.map((booking, index) => (
    //     <div key={index} className="booking-item">
    //       <div className="user-room-info">
    //         <h3>Room Number: {booking.Room.room_number}</h3>
    //       </div>
    //       <div className="user-tour-info">
    //         <p>Number of Seats in Tour: {booking.number_of_seats_inTour}</p>
    //         <p>Title: {booking.Tour?.Title}</p>
    //       </div>
    //       <div className="user-payment-info">
    //         <p>Amount: {booking.bookingCost}</p>
    //       </div>

    //       <p>Check-in Date: {booking.check_in_date}</p>
    //       <p>Check-out Date: {booking.check_out_date}</p>
    //     </div>
    //   ))}
    // </div>
    <div className="user-booking-info">
      <table className="table">
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Number of Seats in Tour</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
          </tr>
        </thead>
        <tbody>
          {getAllbooking.map((booking, index) => (
            <tr key={index}>
              <td>{booking.Room.room_number}</td>
              <td>{booking.number_of_seats_inTour}</td>
              <td>{booking.Tour?.Title}</td>
              <td>{booking.bookingCost}</td>
              <td>{booking.check_in_date}</td>
              <td>{booking.check_out_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserBookingInfo;
