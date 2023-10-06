import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import RoomItem from "../Items/RoomItems";
import SearchBar from "../../Search/search";
import RoomFilter from "../Filter"; // Import the RoomFilter component
import {
  RoomListWrapper,
  ListWrapper,
  List,
  Loading,
  SearchBarWrapper,
} from "./style";

const RoomList = () => {
  const loading = useSelector((state) => state.rooms.loading);
  const rooms = useSelector((state) => state.rooms.rooms);
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [query, setQuery] = useState("");

  // Callback function to update filtered rooms based on filter criteria
  const handleFilter = (filteredData) => {
    setFilteredRooms(filteredData);
  };

  useEffect(() => {
    // You can update the filtered rooms when rooms data changes here
    setFilteredRooms(rooms);
  }, [rooms]);

  const RoomItems = filteredRooms.map((room) => (
    <RoomItem
      room={room}
      key={room.Room_id}
      // setRoom={props.setRoom}
      // deleteRoom={props.deleteRoom}
    />
  ));

  return (
    <RoomListWrapper>
      {/* Uncomment this line if you want to display a loading indicator */}
      {/* {loading ? <Loading /> : null} */}
      <SearchBarWrapper>
        <SearchBar setQuery={setQuery} />
      </SearchBarWrapper>
      <RoomFilter rooms={rooms} onFilter={handleFilter} />
      <ListWrapper>
        <List>{RoomItems}</List>
      </ListWrapper>
    </RoomListWrapper>
  );
};

export default RoomList;
