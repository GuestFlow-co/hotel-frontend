import React from "react"; // Removed unused { useState }
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  Box,
  Image,
  Flex,
  Button,
  Container,
  Stack,
  Heading,
  Text,
  Icon,
  Grid,
} from "@chakra-ui/react";
import hero from "../../../assets/Rooms/5655441.jpg";
import RoomDetail from "./RoomDetails";
import Features from "./features"; // Changed "features" to "Features"
import Amenities from "./Aminities"; // Changed "Aminities" to "Amenities"
import Review from "./Review";
import BookingForm from "../../Booking/Form";
import RoomItem from "../Items/RoomItems";
import SContainer from "./Slider";

export default function RoomDetails() { // Named your component
  const { room_number } = useParams();
  const rooms = useSelector((state) => state.rooms.rooms);

  const room = rooms.find((room) => room.room_number === room_number);

  if (!room) {
    return <p>Room not found</p>;
  }

  const RoomItems = rooms.map((room) => ( 
    <Box key={room.Room_id} p={7} lg={4} md={6} sm={12}>
      <Card>
        <Box>
          <RoomItem room={room} />
        </Box>
      </Card>
    </Box>
  ));

  return (
    <div>
      <img
        src={hero}
        alt={`Room Image`}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />

      <Container w={"58%"} justifyContent={"center"} alignItems={"center"} ml={"3%"}>
        <RoomDetail />
        <Features />
        <hr style={{ borderColor: "brown", borderWidth: "1px", margin: "10px 0" }} />
        <Amenities />
      </Container>

      <Container className="position-absolute top-0 start-1 end-0" alignItems={"center"} mt={"24.5%"} w={"30%"}>
        <Container w={"100%"} pl={"10%"} pr={"10%"} pb={"7%"} pt={"7%"}>
          <BookingForm />
        </Container>
      </Container>

      <Container className="position-absolute top-0 start-1 end-0" alignItems={"center"} mt={"50%"} w={"30%"}>
        <Text pt={5} pl={7} paddingBottom={'-50'} fontWeight={"bold"}>
          More Rooms
        </Text>
        <Container>
          {/* {RoomItems} */}
          <SContainer/>
          </Container>
      </Container>
      <Review />
    </div>
  );
}
