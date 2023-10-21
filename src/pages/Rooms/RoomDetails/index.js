import React, { useState, useEffect } from "react"; // Removed unused { useState }
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
import "./style.scss";



export default function RoomDetails() { // Named your component
  const { room_number } = useParams();
  const rooms = useSelector((state) => state.rooms.rooms);

  const room = rooms.find((room) => room.room_number === room_number);

  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);


  if (!room) {
    return (
      <section className="page-banner-area pt-195 rpt-135 pb-190 rpb-125 rel z-1 bgs-cover bgc-black text-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="container">
          <div className="banner-inner text-white rpb-25">
            <h2 className="page-title wow fadeInUp delay-0-2s p-10">Room Not found</h2>
            <Link className="theme-btn" to='/rooms'>Explore Our Rooms <i className="fa fa-angle-right"></i></Link>

          </div>
        </div>
        <div className="bg-lines">
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
        </div>
      </section>
    )
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
    <>
      {isLoading ? (
        <div className='preloader'></div>
      ) : (
        <div>

          <section className="page-banner-area pt-195 rpt-135 pb-190 rpb-125 rel z-1 bgs-cover bgc-black text-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
            <div className="container">
              <div className="banner-inner text-white rpb-25">
                <h2 className="page-title wow fadeInUp delay-0-2s">{room.roomType}</h2>
              </div>
            </div>
            <div className="bg-lines">
              <span></span><span></span>
              <span></span><span></span>
              <span></span><span></span>
              <span></span><span></span>
              <span></span><span></span>
            </div>
          </section>


          <div className="overflow-hidden">
            <RoomDetail />
          </div>
          <Container>
            {/* <hr style={{ borderColor: "brown", borderWidth: "1px", margin: "10px 0" }} /> */}
          </Container>
          {/* <Features /> */}

          <Amenities />
          {/* <Container className="position-absolute top-0 start-1 end-0" alignItems={"center"} mt={"24.5%"} w={"30%"}>
        <Container w={"100%"} pl={"10%"} pr={"10%"} pb={"7%"} pt={"7%"}>
          <BookingForm />
        </Container>
      </Container> */}

          {/* <Container className="position-absolute top-0 start-1 end-0" alignItems={"center"} mt={"50%"} w={"30%"}>
        <Text pt={5} pl={7} paddingBottom={'-50'} fontWeight={"bold"}>
          More Rooms
        </Text>
        <Container>
          <SContainer />
          {/* </Container> */}
          {/* </Container> */}
          {/* <Review /> */}
          
          {/* {RoomItems} */}


          
        </div>
      )}
    </>
  );
}
