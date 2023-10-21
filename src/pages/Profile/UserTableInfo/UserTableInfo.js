import React, { useState, useEffect } from 'react';
import './UserTableInfo.scss';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import cookie from 'react-cookies';

export default function UserTableInfo() {
  const [bookings, setBookings] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  const handlePayClick = (booking) => {
    setSelectedBooking(booking);
    setShowPaymentModal(true);
  };

  function handelDelete(id) {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/bookings/${id}`)
      .then((res) => {
        console.log(res.data);
        setBookings((prevRoomData) =>
          prevRoomData.filter((room) => room.booking_id !== id)
        );
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    const user = cookie.load('user');

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/bookings`)
      .then((response) => {
        const bookings = response.data;
        if (Array.isArray(bookings)) {
          const UserBooking = bookings.filter(
            (item) => item.customer_id === user.user_id
          );
          console.log('User Bookings: ', UserBooking);
          setBookings(UserBooking);
        } else {
          console.error('Data received is not in an array format.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handlePaymentConfirmation = () => {
    // Make an API call to update the payment status to 'paid'
    // You can use axios for this
    // After successful payment, update the local state and close the modal
    // Then, you can refresh the data if needed
    setShowPaymentModal(false);
  };

  return (
    <div className="user-booking-info ">
      <table className="user-info-table rounded-xl">
        <thead>
          <tr>
            <th style={{ borderRadius: '8px 0 0 0' }}>Room Number</th>
            <th>Seats in Tour</th>
            <th>Tour Title</th>
            <th>Amount Price</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Pay</th>
            <th style={{ borderRadius: '0 8px 0 0' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td style={{ paddingLeft: '20px' }}>{booking.Room?.room_number}</td>
              <td>{booking.number_of_seats_inTour}</td>
              <td>{booking.Tour?.Title}</td>
              <td style={{ paddingLeft: '20px' }}>{booking.payment.amount} $💸</td>
              <td>{formatDate(booking.check_in_date)}</td>
              <td>{formatDate(booking.check_out_date)}</td>
              <td>
                <div className="btn-user-edit-info" style={{ paddingRight: '24%', paddingBottom: '15px' }}>
                  <Button
                    outline
                    className="btn-brown-2"
                    onClick={() => handlePayClick(booking)}
                    style={{ color: 'green' }}
                  >
                    <i className="fa-solid fa-money-bill"></i>
                  </Button>
                </div>
              </td>
              <td style={{ display: 'flex', alignItems: 'center' }}>
                <div className="btn-user-edit-info" style={{ paddingLeft: '24%', paddingBottom: '15px' }}>
                  <Button
                    outline
                    className="btn-brown-2"
                    onClick={() => handelDelete(booking.booking_id)}
                    style={{ color: '#D80032' }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPaymentModal && (
        <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to proceed with the payment?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" style={{color:'black'}} onClick={() => setShowPaymentModal(false)}>
              Cancel
            </Button>
            <Button variant="success" style={{color:'black'}} onClick={handlePaymentConfirmation}>
              Pay
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
