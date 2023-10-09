import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Image, Flex, Button, Icon } from '@chakra-ui/react';
import { DetailWrapper, BackButton } from "./style";
import { Container } from "react-bootstrap";
import { BsFillPeopleFill } from 'react-icons/bs';
// import { IoBedOutline } from 'react-icons/io';
import Rating from "../Rate/Rate";
import hero from "../../../assets/Rooms/5655441.jpg";

const RoomDetail = () => {
  const { room_number } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const rooms = useSelector((state) => state.rooms.rooms);

  // Find the room based on room_number
  const room = rooms.find((room) => room.room_number === room_number);

  if (!room) {
    return <p>Room not found</p>;
  }

  const { roomType, room_capacity, roomPrice, photoUrl,bed_nums,Room_space, } = room;
  const images = photoUrl || [];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <img
        src={hero}
        alt={`Room Image`}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <DetailWrapper style={{ backgroundColor: 'rgba(223, 215, 191, 0.26)', width: "70%", padding: "5px" }}>
        <Box position="relative" w="100%" paddingLeft={5}>
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex}`}
            w="97%"
            h="400px"
          />
          <Flex
            justify="space-between"
            position="absolute"
            w="90%"
            bottom="1rem"
            p="1rem"
          >
            <Button onClick={prevImage} colorScheme="teal" variant="outline" fontWeight={1000} color={"white"}>
              Previous
            </Button>
            <Button onClick={nextImage} colorScheme="teal" variant="outline" fontWeight={1000} color={"white"}>
              Next
            </Button>
          </Flex>
        </Box>
        <Container style={{ paddingTop: "2%" }}>
          <Flex justifyContent={"space-between"}>
            <h3>{roomType}</h3>
            <h3 className="m-0 room-price"> From {roomPrice} JD/Night</h3>
          </Flex>
          <br/>
          <p>Features</p>
          <hr style={{ borderColor: "brown", borderWidth: "1px", margin: "10px 0" }} />
          <div style={{ display: "flex" }}>
            {/* <Icon as={IoBedOutline} mr={5} /> */}
            <p style={{ color: "black" }}>{room_capacity} person</p>
          </div>

          <div style={{ display: "flex" }}>
            <Icon as={BsFillPeopleFill} mr={5} />
            <div>
            <p style={{ color: "black" }}>{bed_nums} person</p>
            </div>
          </div>
        </Container>
        {/* <Rating room={room} /> */}
        <br/>
        <Link to="/rooms">
          {/* <BackButton type="back" className="btn btn-success" color="blue">
            Back
          </BackButton> */}
        </Link>
        <br/>
      </DetailWrapper>
    </>
  );
};

export default RoomDetail;
