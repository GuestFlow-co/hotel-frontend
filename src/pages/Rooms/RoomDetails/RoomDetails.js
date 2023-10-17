import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Card, Box, Image, Flex, Button, Container, Stack, Heading, Text, Icon, Grid } from '@chakra-ui/react';
import { DetailWrapper, BackButton } from "./style";
// import { Container } from "react-bootstrap";

import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const RoomDetail = () => {
  const { room_number } = useParams();
 const rooms = useSelector((state) => state.rooms.rooms);
 const users = useSelector((state) => state.users.users );
 console.log(users,"------------------")
 

  const room = rooms.find((room) => room.room_number === room_number);

//   if (!room) {
//     return <p>Room not found</p>;
//   }

  const { roomType, room_capacity, roomPrice, photoUrl,bed_nums ,Room_space,Room_view, description,rate } = room;
  const images = photoUrl || [];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);

 
  return (
    <>
    
      <DetailWrapper style={{ width: "100%"}}>
        <Box position='relative' pt={5} >
               <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex}`}
            w="100%"
            h="400px"
            ml={'4%'}
            // paddingRight={'15%'}
            
            
          />
         
          <Flex
            justify="space-between"
            position="absolute"
            w="80%"
            bottom="1rem"
            p="1rem"
            ml={'15%'}
          >
            <Button onClick={prevImage} colorScheme="teal" variant="outline" fontWeight={1000} color={"white"}>
              Previous
            </Button>
            <Button onClick={nextImage} colorScheme="teal" variant="outline" fontWeight={1000} color={"white"}>
              Next
            </Button>
          </Flex> 
        </Box>
        <Container style={{ paddingTop: "10%" }} ml={'5%'} >
          <Flex ml={30}>
        {Array(5).fill( parseInt(room.theRoomRate) ).map((_, index) => (
                  <FaStar
                    key={index}
                    size={20}
                    color={room.theRoomRate > index ? colors.orange : colors.grey}
                    style={{
                    marginRight: 10,
                    cursor: "pointer",
                 
                    }}
                  />
                ))}
                {/* {rate.length} reviews */}
              </Flex>
              <br/>
          <Box display={'flex'} justifyContent={"space-between"} >
            <h3>{roomType}</h3>
            <h3 className="m-0 room-price"> From {roomPrice} JD/Night</h3>
            
          </Box >
          <br/>
        
         
          {/* </Container> */}
        </Container>
        {/* <Rating room={room} /> */}
      </DetailWrapper>
    </>
  );
};

export default RoomDetail;
