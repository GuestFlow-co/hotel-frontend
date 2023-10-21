import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import "./bookingtable.scss";
import HeaderCreate from "../../../Booking/Header";
import BookingEditPop from "../../pages/BookingEdit/BookingEditPop";
// import Popup from "../../../Updatepop";
// import UpdatePopup from "../../../Updatepop";

import { useDownloadExcel } from 'react-export-table-to-excel';



function BookingTable({ bookings }) {


  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Users table',
    sheet: 'Users'
  })

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
  const [bookingdata, setBooking] = useState(bookings); // Initialize the local state with props data
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedId, setSelectedId] = useState(null); // State variable to store the selected booking ID

  function handelDelete(id) {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/bookings/${id}`)
      .then((res) => {
        console.log(res.data);
        setBooking((prevRoomData) =>
          prevRoomData.filter((room) => room.booking_id !== id)
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    setBooking(bookings);
  }, [bookings]);
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
        <button style={{ color: "green", paddingRight: "30px", fontSize: "24px" }} onClick={onDownload}>
          <i className="fas fa-file-excel"></i>
        </button>

      </div>
      <table className="striped-table" ref={tableRef}>
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
            bookingdata.map((booking, rowIndex) => (
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
                        ? "#ffaaaa"
                        : "#19875426",
                      padding: "8px",
                      borderRadius: "15px",
                      fontSize: "16px",
                      color: booking.payment.amount
                        ? "rgb(241,21,65)"
                        : "#198754",
                    }}
                  >
                    {booking.payment.amount ? "Unpaid" : "Paid"}
                  </p>
                </td>
                <td style={{ paddingRight: "25px" }}>
                  <button className="update-button" title="Update">
                    <BookingEditPop booking={booking} />
                  </button>
                  <Button
                    onClick={() => {
                      setSelectedId(booking.booking_id); // Set the selected ID in the state
                      onOpen(); // Open the modal
                    }}
                    className="delete-button"
                    title="Delete"
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Are You Sure?</p>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                if (selectedId) {
                  handelDelete(selectedId); // Call handelDelete with the selected ID
                }
                onClose();
              }}
            >
              Yes
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default BookingTable;
