import React, { useState } from "react";
import { useSelector } from 'react-redux';
import RoomItem from "../Items/RoomItems";
import SearchBar from "../../Search/search";
import {
  RoomListWrapper,
  ListWrapper,
  List,
  SearchBarWrapper,
} from "./style";

const RoomList = (props) => {
  const loading = useSelector((state) => state.rooms.loading);
  const rooms = useSelector((state) => state.rooms.rooms);
  const [query, setQuery] = useState("");

  // Filter rooms based on the query
  const filteredRooms = rooms.filter((room) =>
    room.roomType && room.roomType.includes(query)
  );

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
      <ListWrapper>
        <List>{RoomItems}</List>
      </ListWrapper>
    </RoomListWrapper>
  );
};

export default RoomList;
