import React from 'react'
import "./UserTableInfo.scss";
export default function UserTableInfo({getAllbooking}) {
  return (
    <div className="user-booking-info" >
    <table className="user-info-table">
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
            <td>{booking.Room?.room_number}</td>
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
  )
}
