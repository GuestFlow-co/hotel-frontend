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
import DatePicker from "react-datepicker";



const RoomFilter = ({ rooms, onFilter, handleSearch, query }) => {
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
    <div>

      <div className="search-and-features-area rpb-20 rel z-1">
        <div className="container container-1550">
          <div className="search-filter-inner rel z-2">
            <div className="section-title text-white mb-20 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-5">Booking Your Room</span>
              <h3>Find & Booked Your Room</h3>
            </div>
            <div className="filter-item wow fadeInUp delay-0-3s">
              <DatePicker
                selected={checkInDate}
                value={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Check In"
              />
              <i className="fa-regular fa-calendar-days text-white  "></i>

            </div>
            <div className="filter-item wow fadeInUp delay-0-4s">
              <DatePicker
                selected={checkOutDate}
                value={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Check Out"
              />
              <i className="fa-regular fa-calendar-days text-white  "></i>

            </div>

            <div className="filter-item wow fadeInUp delay-0-4s">
              <input
                placeholder="Search for a room"
                onChange={handleSearch}
                value={query}
              />
              <i class="fa-solid fa-magnifying-glass text-white"></i>
            </div>

            <div className="filter-item wow fadeInUp delay-0-4s">
              <input
                placeholder="Capacity"
                type="text"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
              <i class="fa-solid fa-users text-white"></i>
            </div>


            <button className="theme-btn style-two wow fadeInUp delay-0-7s" onClick={handleFilter}>
              Search Now <i className="fa fa-angle-right"></i>
            </button>
          </div>
          
        </div>
        <div className="bg-lines for-bg-white">
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
        </div>
      </div>

      {/* <Box className="room-filter">
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
                <FormLabel style={{ paddingRight: 6, paddingLeft: 3 }}>Check-In Date:</FormLabel>
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
                <FormLabel style={{ paddingRight: 6 }}>Check-Out Date:</FormLabel>
                <Input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  paddingRight={6}
                  height={2}

                />
              </FormControl>
              <FormControl>
                <FormLabel style={{ paddingRight: 6 }}>Capacity:</FormLabel>
                <Input
                  type="text"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  paddingRight={6}
                  border="1px solid #ccc"
                  height={2}
                />
              </FormControl>

              <FormControl>
                <FormLabel style={{ paddingRight: 6 }}>Search for a room:</FormLabel>
                <Input
                  placeholder="Search for a room"
                  onChange={handleSearch}
                  value={query}
                />
              </FormControl>

              <Button onClick={handleFilter}

                padding={3}
                paddingTop={9}
                size={40}
              ><Icon as={AiOutlineCheck} mr={5} />
              </Button>
            </Flex>
          </Box>
        )}
      </Box> */}
    </div>
  );
};

export default RoomFilter;
