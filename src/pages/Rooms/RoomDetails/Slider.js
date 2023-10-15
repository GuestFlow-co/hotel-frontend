import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
// import "./style.scss";
import RoomItem from "../Items/RoomItems";
import { useSelector } from "react-redux";

function CustomSlider({ photos }) {
const rooms =useSelector((state)=> state.rooms.rooms)

  const settings = {
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, 
    autoplaySpeed: 6000, 
    dots: true, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  const PhotoItems = rooms.map((photo, index) => (
    <div key={index} className="slider-item">
      <Box p={7} lg={4} md={6} sm={12}>
        <Card>
          <Box>
            <RoomItem room={photo} />
          </Box>
        </Card>
      </Box>
    </div>
  ));

  return (
    <Slider {...settings}>
      {PhotoItems}
    </Slider>
  );
}

function SContainer({ rooms }) {
  return (
    <div className="slider-container overflow-hidden">
      <CustomSlider rooms={rooms} />
    </div>
  );
}

export default SContainer;
