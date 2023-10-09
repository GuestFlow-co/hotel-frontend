import React, { useState, useEffect } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { AiOutlineCheck } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings } from '../../../store/actions/Bookings/BookingActions';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Box,
  Flex,
  IconButton,
  Text,
  Icon,
} from '@chakra-ui/react';

const RoomFilter = ({ rooms, onFilter }) => {
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [capacity, setCapacity] = useState('');

  const bookings = useSelector((state) => state.bookings.bookings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const handleFilter = () => {
    const parsedCheckInDate = new Date(checkInDate);
    const parsedCheckOutDate = new Date(checkOutDate);

    const filteredRooms = rooms.filter((room) => {
      if (capacity !== '' && capacity !== room.room_capacity) {
        return false;
      }

      const isRoomAvailable = !bookings.some((booking) => {
        const bookingCheckIn = new Date(booking.check_in_date);
        const bookingCheckOut = new Date(booking.check_out_date);

        return (
          booking.theRoomID === room.Room_id &&
          (parsedCheckInDate < bookingCheckOut && parsedCheckOutDate > bookingCheckIn)
        );
      });

      return isRoomAvailable;
    });

    onFilter(filteredRooms);
  };

  return (
    <Box className="room-filter">
      <Flex alignItems="center">
        <IconButton
          aria-label={showFilterForm ? 'Close Filter' : 'Filter'}
          icon={<BiFilterAlt className={showFilterForm ? 'fas fa-times' : 'fas fa-filter'} />}
          onClick={() => setShowFilterForm(!showFilterForm)}
          mr={2}
        />
        <Text>{showFilterForm ? 'Close Filter' : 'Filter'}</Text>
      </Flex>
      {showFilterForm && (
        <Box className="filter-form">
          <Flex flexDirection="row" alignItems="center" justifyContent="space-around">
            <FormControl>
              <FormLabel style={{paddingRight: 6, paddingLeft:3}}>Check-In Date:</FormLabel>
              <Input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                 paddingRight={6}
                 paddingLeft={3}
                height={2}         

              />
            </FormControl>
            <FormControl>
              <FormLabel style={{paddingRight: 6}}>Check-Out Date:</FormLabel>
              <Input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                paddingRight={6}  
                height={2}         

                />
            </FormControl>
            <FormControl>
              <FormLabel style={{paddingRight: 6}}>Capacity:</FormLabel>
              <Input
                type="text"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                paddingRight={6}
                border="1px solid #ccc"       
                height={2}         
                />
            </FormControl>
            <Button onClick={handleFilter}
           
            padding={3}
            paddingTop={9}
            size={40}
            ><Icon as={AiOutlineCheck} mr={5}  /> 
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default RoomFilter;
