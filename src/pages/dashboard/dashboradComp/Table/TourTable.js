import React, { useEffect, useState } from "react";
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
import TourPop from "../../pages/Tourash/Tourpost/TourPop";
import TourEditPop from "../../pages/Tourash/TourEdit/TourEditPop"
function TourTable({ tours }) {
  const columns = [
    "Title",
    "location",
    "Start Date",
    "End Date",
    "Seat Price",
    "Max Capacity",
    "Available Seat",
     "Actions", 
  ];
  const [tourData, setTour] = useState(tours); // Initialize the local state with props data
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedId, setSelectedId] = useState(null); // State variable to store the selected booking ID

  function handelDelete(id) {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/tour/${id}`)
      .then((res) => {
        console.log(res.data);
        setTour((prevRoomData) =>
          prevRoomData.filter((room) => room.Tour_id !== id)
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    setTour(tours);
  }, [tours]);
  return (
    <div className="table-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "rgb(218,225,243)",
        }}
      >
        <h3 className="table-title">Tour List</h3>
        
        
          <button className="add-button" title="Add"> <TourPop />
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
          {tours && tours.length > 0 ? (
            tourData.map((tour, rowIndex) => (
              <tr
                key={tour.tour_id}
                className={rowIndex % 2 === 0 ? "even" : "odd"}
              >
                <td style={{ paddingLeft: "25px" }}>
                  {tour.Title}
                </td>
                <td>{tour.location}</td>
                <td>{new Date(tour.start_date).toLocaleDateString()}</td>
                <td>{new Date(tour.end_date).toLocaleDateString()}</td>
                <td>{tour.Seat_price}</td>
                <td>{tour.max_capacity}</td>

                <td>
                  <p
                    style={{
                      background: !tour.availableSeat
                        ? "#ffaaaa"
                        : "#19875426",
                      padding: "8px",
                      borderRadius: "15px",
                      fontSize: "16px",
                      color: !tour.availableSeat
                        ? "rgb(241,21,65)"
                        : "#198754",
                    }}
                  >
                    {!tour.availableSeat ? 0 : tour.availableSeat }
                  </p>
                </td>
                <td style={{ paddingRight: "25px" }}>
                  <button className="update-button" title="Update">
                    <TourEditPop tour={tour} />
                    <i className="fas fa-edit"></i>
                  </button>
                  <Button
                    onClick={() => {
                      setSelectedId(tour.tour_id); // Set the selected ID in the state
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
              <td colSpan={columns.length}>No tours available.</td>
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

export default TourTable;