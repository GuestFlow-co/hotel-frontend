import React, { useState, useEffect } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings } from '../../../store/actions/Bookings/BookingActions';

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
    <div className="room-filter">
      <button
        className="filter-icon"
        onClick={() => setShowFilterForm(!showFilterForm)}
      >
        {showFilterForm ? 'Close Filter' : 'Open Filter'}{' '}
        <BiFilterAlt className={`fas ${showFilterForm ? 'fa-times' : 'fa-filter'}`} />
      </button>
      {showFilterForm && (
        <div className="filter-form">
          <label>Check-In Date:</label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
          <label>Check-Out Date:</label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
          <label>Capacity:</label>
          <input
            type="text" 
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
          <button onClick={handleFilter}>Apply</button>
        </div>
      )}
    </div>
  );
};

export default RoomFilter;
