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
import "./RoomsTable.scss";
import axios from "axios"
import RoomCreate from "../../../../Rooms/Create/RoomCreate";
import Popup from "../../../../pop";
import RoomEdit from "../../../pages/RoomsDash/roomsEdit/RoomEdit";
import { fetchRooms } from "../../../../../store/actions/RoomActions";
import { useSelector, useDispatch } from "react-redux";


// import UpdatePopup from "../../../../Updatepop";
import { useDownloadExcel } from 'react-export-table-to-excel';


function RoomsTable({ rooms ,isupdated,updated }) {

  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Rooms table',
    sheet: 'Users'
  })
  
  const rooms2 = useSelector((state) => state.rooms.rooms);
  const dispatch = useDispatch();

  const columns = [
    "coverPhoto",
    "Room Number",
    "Room Type",
    "Room Capacity",
    "Room Price",
    "Room Status",
    "Actions", // Added a new column for actions
  ];
  const [roomData, setRoomData] = useState(rooms); // Initialize the local state with props data
  const [selectedId, setSelectedId] = useState(null); // State variable to store the selected booking ID
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handelDelete(id) {
    axios.delete(`${process.env.REACT_APP_BASE_URL}/rooms/${id}`)
      .then((res) => {
        console.log(res.data);
        setRoomData((prevRoomData) => prevRoomData.filter((room) => room.Room_id !== id));

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    dispatch(fetchRooms());

    setRoomData(rooms2)
  }, [rooms,updated]);

  return (
    <div className="table-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "rgb(218,225,243)",
        }}
      >
        <h3 className="table-title">Rooms List</h3>
        <div>
          <button style={{ color: "green", paddingRight: "30px", fontSize: "24px" }} onClick={onDownload}>
            <i className="fas fa-file-excel"></i>
          </button>
          <button className="add-button" title="Add">
            <Popup />
          </button>
        </div>  
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
          {rooms && rooms.length > 0 ? (
            roomData.map((Rooms, rowIndex) => (
              <tr
                key={Rooms.Room_id}
                className={rowIndex % 2 === 0 ? "even" : "odd"}
              >
                <td>
                  {<img className="dash-rooms-photo" src={Rooms.coverPhoto} />}
                </td>

                <td>{Rooms.room_number}</td>
                <td>{Rooms.roomType}</td>
                <td>{Rooms.room_capacity}</td>
                <td>{Rooms.roomPrice}</td>
                <td>
                  <p
                    style={{
                      background:
                        Rooms.roomStatus === "dirty" ? "#ffaaaa" : "#19875426",
                      padding: "8px",
                      borderRadius: "15px",
                      fontSize: "16px",
                      color:
                        Rooms.roomStatus === "dirty"
                          ? "rgb(241,21,65)"
                          : "#198754",
                    }}
                  >
                    {Rooms.roomStatus}
                  </p>
                </td>
                <td style={{ paddingRight: "25px" }}>
                <button className="update-button" title="Update">
                    <RoomEdit Room={Rooms} isupdated={isupdated}/>
               
                  </button>
                  <Button
                    onClick={() => {
                      setSelectedId(Rooms.Room_id); // Set the selected ID in the state
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
              <td colSpan={columns.length}>No rooms available.</td>
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

export default RoomsTable;
