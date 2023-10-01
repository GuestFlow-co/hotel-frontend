import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RoomItemWrapper,
  RoomItemTitle,
  RoomItemDescription,
  HoveredItems,
  HoveredItem,
} from "./style";

const RoomItem = ({ room }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <RoomItemWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/rooms/${room.room_number}`}>
        {isHovered ? (
          <HoveredItems>
      <RoomItemTitle>{room.title}</RoomItemTitle>
      <RoomItemDescription>Type: {room.roomType}</RoomItemDescription>
      <p>Capacity: {room.room_capacity}</p>
      <p>Rate: {room.theRoomRate}</p>
      <p>Status: {room.roomStatus}</p>
      <p className="room-price">Price: {room.roomPrice} JD</p>
          </HoveredItems>
        ) : (
          <img src={room.image} alt={room.name} />
        )}
      </Link>

    </RoomItemWrapper>
  );
};

export default RoomItem;
