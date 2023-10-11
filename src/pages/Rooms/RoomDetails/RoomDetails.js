import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Card, Box, Image, Flex, Button, Container, Stack, Heading, Text, Icon, Grid } from '@chakra-ui/react';
import { DetailWrapper, BackButton,Amenities } from "./style";
// import { Container } from "react-bootstrap";
import { BsFillPeopleFill } from 'react-icons/bs';
import person from "../../../assets/Rooms/animation_lnj8u85h.json"
import bed from "../../../assets/Rooms/animation_lnj96mip.json"
import area from "../../../assets/Rooms/animation_lnj9d5je.json"
import view from "../../../assets/Rooms/animation_lnj9j3em.json"
import Lottie from "lottie-react";
import { FaStar } from "react-icons/fa";
import { IoIosBed } from 'react-icons/io';
import Rating from "../Rate/Rate";
import hero from "../../../assets/Rooms/5655441.jpg";
import { FaWifi, FaUtensils, FaTv } from 'react-icons/fa';
import HotelBookingForm from "../../Booking/Form";
import RommList from "../List/RoomList"
import RoomItem from "../Items/RoomItems";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const amenities = [
  {
    image: <FaWifi /> ,
    features: ['wifi'],
  },
  {
    image:<FaTv />,
    features: [ 'tv'],
  },
  // {
  //   image: <FaUtensils />,
  //   features: ['restaurant'],
  // },
];

const RoomDetail = () => {
  const { room_number } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const rooms = useSelector((state) => state.rooms.rooms);

  // Find the room based on room_number
  const room = rooms.find((room) => room.room_number === room_number);

  if (!room) {
    return <p>Room not found</p>;
  }

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

  const RoomItems = rooms.slice(0,5).map((room, index) => (
    <Box  key={room.Room_id}  p={7}  lg={4}  md={6}   sm={12}   style={{ display: index === currentIndex ? "block" : "none" }}>
      <Card>
        <Box>
          <RoomItem room={room} />
        </Box>
      </Card>
    </Box>
  ));

  return (
    <>
      <img
        src={hero}
        alt={`Room Image`}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <DetailWrapper style={{ backgroundColor: 'rgba(223, 215, 191, 0.26)', width: "68%", padding: "5px" }}>
        <Box position="relative" w="100%" pt={5}>
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex}`}
            w="100%"
            h="400px"
            paddingLeft={'15%'}
            paddingRight={'15%'}

            alignItems={'center'}
          />
          <Flex
            justify="space-between"
            position="absolute"
            w="80%"
            bottom="1rem"
            p="1rem"
            pl={'20%'}
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
          <Flex>
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
                {rate.length} reviews
              </Flex>
          <Flex justifyContent={"space-between"}>
            <h3>{roomType}</h3>
            <h3 className="m-0 room-price"> From {roomPrice} JD/Night</h3>
            
          </Flex >
          <br/>
          <h6>Features</h6>
          <hr style={{ borderColor: "brown", borderWidth: "1px", margin: "10px 0" }} />
          <Flex justify="space-between" pl={'15%'} pb={'5%'} pr={'15%'}> 
          <div style={{ display: "flex" }}>
          <Lottie  style={{ width: '50px' ,paddingRight:"2%"}} animationData={person} />
            
          {/* <Icon as={BsFillPeopleFill} mr={5} /> */}
          <div>
            <p style={{ color: "black" ,paddingBottom:"0" }}>Max Guest</p>
            <p style={{ color: "black" ,paddingTop:"0"}}>{room_capacity} person</p>
           </div> 
          </div>

          <div style={{ display: "flex" }}>
          <Lottie  style={{ width: '50px' ,paddingRight:"2%"}} animationData={bed} />
            {/* <Icon as={IoIosBed} mr={5} /> */}
            <div>
            <p style={{ color: "black" }}>Room Bed's</p>
            <p style={{ color: "black" }}>{bed_nums} Bed</p>
          </div>
          </div>
          </Flex>
          <Flex justify="space-between"  pl={'15%'} pr={'15%'}>
          <div style={{ display: "flex" }}>
          <Lottie  style={{ width: '50px' ,paddingRight:"5%"}} animationData={area} />
          <div>
          {/* <Icon as={BsFillPeopleFill} mr={5} /> */}
            <p style={{ color: "black" }}>Room Space</p>
            <p style={{ color: "black" }}>{Room_space} sqm</p>
          </div>
          </div>

          <div style={{ display: "flex" }}>
          <Lottie  style={{ width: '50px' }} animationData={view} />
          <div>
          {/* <Icon as={BsFillPeopleFill} mr={5} /> */}
            <p style={{ color: "black" }}>Room View</p>
            <p style={{ color: "black" }}>{Room_view} </p>
          </div>
          </div>
          </Flex>
          <Box pt={'3%'}>
          <p>{description}</p>
          {/* <p>rrrrrrrrrrrrrrrrrrfevdfzznoHUOShIUSIUDS</p> */}
          </Box>
          <hr style={{ borderColor: "brown", borderWidth: "1px", margin: "10px 0" }} />
          <h6>Room Amenities</h6>
          {/* <Container maxW="container.lg" mt={8}> */}
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              {amenities.map((amenity, index) => (
                <Amenities><Box
                  key={index}
                  overflow="hidden"
                  p={4}
                  boxShadow="md"
                  maxW="300px"
                >
                   <Flex mt={4} justify="space-between">
                    <Stack spacing={2} direction="row">
                      {amenity.features.map((feature) => (
                        <Flex align="center" key={feature}>
                          
                            {amenity.image
                            }
                          <Text>{feature}</Text>
                        </Flex>
                      ))}
                    </Stack>
                  </Flex>
                </Box></Amenities>
              ))}
            </Grid>
          {/* </Container> */}
        </Container>
        {/* <Rating room={room} /> */}
        <br/>

        <br/>
      </DetailWrapper>
      <Container className="position-absolute top-0 start-1 end-0 bg-rgba(223, 215, 191, 0.26) " alignItems={'center'}  mt={'24.5%'} w={'30%'} bg={'rgba(223, 215, 191, 0.26)'} > 
       <Container w={'100%'} pl={'10%'} pr={'10%'} pb={'7%'} pt={'7%'}>
        <HotelBookingForm/>
</Container>
      </Container>

      <Container className="position-absolute top-0 start-1 end-0 bg-rgba(223, 215, 191, 0.26) " alignItems={'center'}   mt={'65%'} w={'30%'} bg={'rgba(223, 215, 191, 0.26)'} > 
      <Text pt={7} pl={7} fontWeight={'bold'}>More Rooms</Text>
  <Container > {RoomItems} </Container>
      </Container>
    </>
  );
};

export default RoomDetail;
