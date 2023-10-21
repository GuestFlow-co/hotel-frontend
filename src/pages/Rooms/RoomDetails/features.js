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



const Features = () => {
  const { room_number } = useParams();
  const rooms = useSelector((state) => state.rooms.rooms);

  const room = rooms.find((room) => room.room_number === room_number);

  const { room_capacity, bed_nums, Room_space, Room_view, description } = room;

  return (
    <div>
      <hr style={{ borderColor: "brown", borderWidth: "1px", margin: "10px 0" }} />

      <Flex justify="space-between"  pb={'5%'} pr={'15%'}>
        {room_capacity !== null && (
          <div style={{ display: "flex" }}>
            <Lottie style={{ width: '50px', paddingRight: "2%" }} animationData={person} />
            <div>
              <p style={{ color: "black", paddingBottom: "0" }}>Max Guest</p>
              <p style={{ color: "black", paddingTop: "0" }}>{room_capacity} person</p>
            </div>
          </div>
        )}

        {bed_nums !== null && (
          <div style={{ display: "flex" }}>
            <Lottie style={{ width: '50px', paddingRight: "2%" }} animationData={bed} />
            <div>
              <p style={{ color: "black" }}>Room Bed's</p>
              <p style={{ color: "black" }}>{bed_nums} Bed</p>
            </div>
          </div>
        )}
      </Flex>

      <Flex justify="space-between"  pr={'15%'}>
        {Room_space !== null && (
          <div style={{ display: "flex" }}>
            <Lottie style={{ width: '50px', paddingRight: "5%" }} animationData={area} />
            <div>
              <p style={{ color: "black" }}>Room Space</p>
              <p style={{ color: "black" }}>{Room_space} sqm</p>
            </div>
          </div>
        )}

        {Room_view !== null && (
          <div style={{ display: "flex" }}>
            <Lottie style={{ width: '50px' }} animationData={view} />
            <div>
              <p style={{ color: "black" }}>Room View</p>
              <p style={{ color: "black" }}>{Room_view} </p>
            </div>
          </div>
        )}
      </Flex>

    </div>
  )
}

export default Features;
