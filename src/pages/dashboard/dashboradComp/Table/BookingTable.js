import React from "react";
import "./bookingtable.scss";

function BookingTable({ bookings }) {
  const columns = [
    "Name",
    "Mobile",
    "Email",
    "Check In Date",
    "Check Out Date",
    "Room Number",
    "Amount",
    "Payment",
    "Actions", // Added a new column for actions
  ];

  return (
    <div className="table-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "rgb(218,225,243)",
        }}
      >
        <h3 className="table-title">Booking List</h3>
        <button className="add-button" title="Add">
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <table className="striped-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <td style={{ fontSize: "15px", fontWeight: "600" }} key={index}>
                {column}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {bookings && bookings.length > 0 ? (
            bookings.map((booking, rowIndex) => (
              <tr
                key={booking.booking_id}
                className={rowIndex % 2 === 0 ? "even" : "odd"}
              >
                <td style={{ paddingLeft: "25px" }}>
                  {booking.user.firstName}
                </td>
                <td>{booking.user.phoneNumber}</td>
                <td>{booking.user.email}</td>
                <td>{new Date(booking.check_in_date).toLocaleDateString()}</td>
                <td>{new Date(booking.check_out_date).toLocaleDateString()}</td>
                <td>{booking.Room.room_number}</td>
                <td>{booking.payment.amount}</td>
                <td>
                  <p
                    style={{
                      background: booking.payment.amount
                        ?  "#ffaaaa"
                        : "#19875426",
                      padding: "8px",
                      borderRadius: "15px",
                      fontSize:"16px",
                      color: booking.payment.amount ? "rgb(241,21,65)" :  "#198754",
                    }}
                  >
                    {booking.payment.amount ? "Unpaid" :  "Paid"}
                  </p>
                </td>
                <td style={{ paddingRight: "25px" }}>
                  <button className="update-button" title="Update">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="delete-button" title="Delete">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No bookings available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;
