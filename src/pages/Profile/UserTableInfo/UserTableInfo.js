import React, { useState, useEffect } from 'react';
import './UserTableInfo.scss';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import cookie from 'react-cookies';
import { Alert, AlertIcon } from '@chakra-ui/react';
import { useNavigate, Link } from "react-router-dom";



export default function UserTableInfo() {
  const [bookings, setBookings] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [paymentConfirmation, setPaymentConfirmation] = useState(false);
  const navigate = useNavigate();


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

  const handlePaymentConfirmation = (booking) => {
    const bookingData = { current_payment: booking.payment.amount };

    axios
      .put(`${process.env.REACT_APP_BASE_URL}/payments/${booking.paymentID}`, bookingData)
      .then((res) => {
        console.log(res.data, "resresres");
        setPaymentConfirmation(true);

        // Update the data in the state without a page refresh
        setBookings((prevBookings) =>
          prevBookings.map((prevBooking) =>
            prevBooking.booking_id === booking.booking_id
              ? { ...prevBooking, payment: { amount: booking.payment.amount } }
              : prevBooking
          )
        );

        setTimeout(() => {
          setPaymentConfirmation(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Error:', error);
      });


    setShowPaymentModal(false);
    navigate("/profile");
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
                    onClick={() => handlePayClick(booking)


                    }


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
        <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <Modal.Header closeButton style={{ backgroundColor: '#f0f0f0' }}>
            <Modal.Title style={{ fontSize: '1.5rem' }}>Confirm Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: '20px', background: '#fff' }}>
            <p style={{ fontSize: '1rem', margin: '10px 0' }}>Booking Cost: {selectedBooking.bookingCost}</p>
            <p style={{ fontSize: '1rem', margin: '10px 0' }}>Total Tour Price: {selectedBooking.total_tour_price}</p>
            <p style={{ fontSize: '1rem', margin: '10px 0' }}>Total Price: {selectedBooking.payment.amount} $💸</p>
          </Modal.Body>
          <Modal.Footer style={{ borderTop: '1px solid #ccc', padding: '10px', justifyContent: 'space-between' }}>
            <Button style={{ backgroundColor: '#ccc', color: '#000', padding: '8px 20px', borderRadius: '5px', border: 'none' }} onClick={() => setShowPaymentModal(false)}>
              Cancel
            </Button>
            <Link to='./'>
              <Button style={{ backgroundColor: '#28a745', color: '#fff', padding: '8px 20px', borderRadius: '5px', border: 'none' }}

                onClick={() => {
                  if (selectedBooking) {
                    handlePaymentConfirmation(selectedBooking); // Call handelDelete with the selected ID
                  }
                }}>
                Pay
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      )}
      {paymentConfirmation && (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          mb={4}
          position="fixed"
          top={"-70%"}
          // left={"50%"}
          right={"25%"}
          width="100%"
        >
          <AlertIcon boxSize="4" />
          Payment successful!
        </Alert>
      )}



    </div>
  );
}
