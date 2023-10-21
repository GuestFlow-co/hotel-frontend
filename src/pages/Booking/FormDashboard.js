import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from '../../store/actions/Bookings/BookingActions';
import { useParams } from 'react-router-dom';

import {
  Button,
  FlexContainer,
  FormContainer,
  FormHeader,
  Input,
  Label,
  FlexItem,
  Select,
} from './dashStyle';
import {
  Box,
  Flex,
  Container,
  Text,
  Textarea,
} from "@chakra-ui/react";

function HotelReservation({ispostbookingupdate}) {
  const { room_number } = useParams();
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  const bookings = useSelector((state) => state.bookings.bookings);
  const users = useSelector((state) => state.users.users);
  console.log(users,"uuuuuuuuu")
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [searchPhoneNumber, setSearchPhoneNumber] = useState('');
  const [searchRoom, setSearchRoom] = useState('');
  const [selectedRoomCapacity, setSelectedRoomCapacity] = useState(1);
  const [availableRooms, setAvailableRooms] = useState([]);

  const [bookingData, setBookingData] = useState({
    check_in_date: '',
    check_out_date: '',
    theRoomID: '', 
    customer_id: '', 
  });

  const [userS, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    user_id: '',
  });

  const [roomS, setRoom] = useState({
    room_capacity: 1,
    roomType: '',
    room_number: '',
    Room_id: '', // Changed to Room_id
  });

  useEffect(() => {
    if (searchPhoneNumber) {
      const filteredUsers = users.filter((userData) =>
        parseInt(userData.phoneNumber) === parseInt(searchPhoneNumber)
      );
      if (filteredUsers.length > 0) {
        setUser({
          name: filteredUsers[0].username,
          email: filteredUsers[0].email,
          phoneNumber: filteredUsers[0].phoneNumber,
          user_id: filteredUsers[0].user_id,
        });
        setBookingData({
          ...bookingData,
          customer_id: filteredUsers[0].user_id,
        });
      } else {

        setUser({
          name: '',
          email: '',
          phoneNumber: searchPhoneNumber,
          user_id: '',
        });
        setBookingData({
          ...bookingData,
          customer_id: '',
        });
      }
    }
  }, [searchPhoneNumber, users]);
  // console.log(searchPhoneNumber,"------------")
  // console.log("------------",userS)

  useEffect(() => {
    // Filter rooms based on selected room capacity
    const filteredRooms = rooms.filter((room) => room.room_capacity === selectedRoomCapacity.toString());
    setAvailableRooms(filteredRooms);
  }, [selectedRoomCapacity, rooms]);

  useEffect(() => {
    // Function to filter rooms based on availability for chosen dates
    const filterAvailableRooms = () => {
      if (bookingData.check_in_date && bookingData.check_out_date) {
        const bookedRooms = bookings.filter((booking) => {
          const bookingStartDate = new Date(booking.check_in_date);
          const bookingEndDate = new Date(booking.check_out_date);
          const checkInDate = new Date(bookingData.check_in_date);
          const checkOutDate = new Date(bookingData.check_out_date);

          return (
            checkInDate <= bookingEndDate && checkOutDate >= bookingStartDate
          );
        });

        // Create an array of booked room IDs
        const bookedRoomIDs = bookedRooms.map((booking) => booking.theRoomID);

        // Filter the available rooms based on booked room IDs
        const unbookedRooms = availableRooms.filter(
          (room) => !bookedRoomIDs.includes(room.Room_id)
        );

        setAvailableRooms(unbookedRooms);
      }
    };

    filterAvailableRooms();
  }, [bookingData.check_in_date, bookingData.check_out_date, availableRooms, bookings]);


  // Function to handle room capacity change
  const handleRoomCapacityChange = (e) => {
    setSelectedRoomCapacity(parseInt(e.target.value, 10));
  };

  // Function to choose a room number from available rooms
  const chooseRoomNumber = () => {
    if (availableRooms.length > 0) {
      // You can choose the first available room here, or implement your logic
      const selectedRoom = availableRooms[0];
      setSearchRoom(parseInt(selectedRoom.room_number));
      setBookingData({
        ...bookingData,
        theRoomID: selectedRoom.Room_id,
      });
    } else {
      // Handle the case where no rooms are available for the selected capacity
      alert('No rooms available for the selected capacity');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookingData.check_in_date || !bookingData.check_out_date) {
      alert('Please fill in both check-in and check-out dates.');
      return;
    }

    dispatch(addBooking(bookingData));
    ispostbookingupdate(true)
    // Show the welcome popup
    setShowWelcomePopup(true);

    if (userS.user_id) {
      setBookingData({
        check_in_date: '',
        check_out_date: '',
        Room_id: roomS.Room_id,
        customer_id: userS.user_id,
      });
    }
  };

  const isDateBooked = (date) => {
    return bookings.some((booking) => {
      const bookingStartDate = new Date(booking.check_in_date);
      const bookingEndDate = new Date(booking.check_out_date);
      const currentDate = new Date(date);

      return currentDate >= bookingStartDate && currentDate <= bookingEndDate;
    });
  };

  const isCheckInDateBooked = isDateBooked(bookingData.check_in_date);
  const isCheckOutDateBooked = isDateBooked(bookingData.check_out_date);

  return (
    <FormContainer>
      <FormHeader>Hotel Room Reservation</FormHeader>
      <form onSubmit={handleSubmit}>
        <FlexContainer>
          <FlexItem>
            <Label>Name:</Label>
            <Input
              type="text"
              name="name"
              value={userS.name}
              onChange={handleInputChange}
            />
          </FlexItem>
          <FlexItem>
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              value={userS.email}
              onChange={handleInputChange}
            />
          </FlexItem>
          <FlexItem>
            <Label>Phone Number:</Label>
            <Input
              type="tel"
              name="phoneNumber"
              value={searchPhoneNumber}
              onChange={(e) => setSearchPhoneNumber(e.target.value)}
            />
          </FlexItem>
          {/* <FlexItem>
            <Label># of guests:</Label>
            <Input
              type="number"
              name="room_capacity"
              value={roomS.room_capacity}
              onChange={handleRoomCapacityChange} // Changed to handleRoomCapacityChange
            />
          </FlexItem> */}
          <FlexItem>
            <Label>Check-In Date:</Label>
            <Input
              type="date"
              name="check_in_date"
              value={bookingData.check_in_date}
              onChange={handleInputChange}
              className={isCheckInDateBooked}
            />
          </FlexItem>
          <FlexItem>
            <Label>Check-Out Date:</Label>
            <Input
              type="date"
              name="check_out_date"
              value={bookingData.check_out_date}
              onChange={handleInputChange}
              className={isCheckOutDateBooked}
            />
          </FlexItem>
          <FlexItem>
            <Label>Room Capacity:</Label>
            <Select
              name="room_capacity"
              value={selectedRoomCapacity}
              onChange={handleRoomCapacityChange} // Changed to handleRoomCapacityChange
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              {/* Add more options as needed */}
            </Select>
          </FlexItem>
          <FlexItem >
            <Label>Room #:</Label>
            <Flex>
            <Input
              type="number"
              name="room_number"
              value={searchRoom}
              onChange={(e) => setSearchRoom(e.target.value)}
            />
            <Button type="button" onClick={chooseRoomNumber} style={{fontSize:'10px'}}>  
              Choose Room
            </Button>
            </Flex>
          </FlexItem>
        </FlexContainer>
        <Button type="submit">Reserve Room</Button>
      </form>
    </FormContainer>
  );
}

export default HotelReservation;
