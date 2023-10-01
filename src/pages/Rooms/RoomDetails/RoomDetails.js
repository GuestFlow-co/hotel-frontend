import React from "react";
import { useSelector } from "react-redux";
import { DetailWrapper, BackButton } from "./style";
import { Link, useParams } from "react-router-dom";

const RoomDetail = () => {
  const { room_number } = useParams();
  const rooms = useSelector((state) => state.rooms.rooms);

  // Find the room with the matching room_number
  const room = rooms.find((room) => room.room_number === room_number);

  // Handle the case when the room is not found
  if (!room) {
    return <p>Room not found</p>;
  }

  return (
    <DetailWrapper>
      <h1>{room.room_number}</h1>
      <p>Type: {room.roomType}</p>
      <p>Capacity: {room.room_capacity}</p>
      <p>Rate: {room.theRoomRate}</p>
      <p>Status: {room.roomStatus}</p>
      <p className="room-price">Price: {room.roomPrice} JD</p>
      <Link to="/rooms">
        <BackButton type="back" className="btn btn-success" color="blue">
          Back
        </BackButton>
      </Link>
    </DetailWrapper>
  );
};

export default RoomDetail;
