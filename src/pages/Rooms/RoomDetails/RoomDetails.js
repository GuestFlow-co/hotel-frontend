import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Image, Flex, Button } from '@chakra-ui/react';

import { DetailWrapper, BackButton } from "./style";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Rating from "../Rate/Rate";

import hero from "../../../assets/Rooms/5655441.jpg"
import RoomHero from "../RoomHero/RoomHero";

const RoomDetail = () => {
  const { room_number } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const rooms = useSelector((state) => state.rooms.rooms);
  const images= rooms.photoUrl

  const room = rooms.find((room) => room.room_number === room_number);


  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!room) {
    return <p>Room not found</p>;
  }

  return (
    <DetailWrapper>
           <Box position="relative" w="70%" height="150px" paddingTop={20}>
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        objectFit="cover"
        w="100%"
        h="100%"
      />
      <Flex
        justify="space-between"
        position="absolute"
        w="100%"
        bottom="1rem"
        p="1rem"
      >
        <Button onClick={prevImage} colorScheme="teal" variant="outline">
          Previous
        </Button>
        <Button onClick={nextImage} colorScheme="teal" variant="outline">
          Next
        </Button>
      </Flex>
    </Box>
        <Container>
        
      <h1> {room.roomType}</h1>
      <p>Capacity: {room.room_capacity}</p>
      <p>Rate: {room.theRoomRate}</p>
      <p>Status: {room.roomStatus}</p>
      <p className="room-price">Price: {room.roomPrice} JD</p>
      </Container>
      <Rating room={room}/>
      <Link to="/rooms">
        <BackButton type="back" className="btn btn-success" color="blue">
          Back
        </BackButton>
      </Link>
    </DetailWrapper>
  );
};

export default RoomDetail;
