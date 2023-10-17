import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Card, Box, Image, Flex, Button, Container, Stack, Heading, Text, Icon, Grid } from '@chakra-ui/react';
import { DetailWrapper, BackButton } from "./style";
// import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import BookingForm from "../../Booking/Form";
import Features from "./features";
import Review from "./Review";




const colors = {
  orange: "#e8a41d",
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

  const { roomType, room_capacity, roomPrice, photoUrl, bed_nums, Room_space, Room_view, description, rate ,roomStatus} = room;
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
      <div>

        <section className="room-details-area py-130 rpy-100 rel z-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="room-details-content rmb-55">
                  <div className="section-title wow fadeInUp delay-0-2s">
                    <h2>Description</h2>
                  </div>
                  <ul className="blog-meta wow fadeInUp delay-0-3s">

                    <li>
                      <div className="ratting">
                        {Array(5).fill(parseInt(room.theRoomRate)).map((_, index) => (
                          <FaStar
                            key={index}
                            size={25}
                            color={room.theRoomRate > index ? colors.orange : colors.grey}
                            style={{
                              marginRight: 10,
                              cursor: "pointer",
                            }}
                          />
                        ))}
                      </div>
                    </li>
                  </ul>
                  <div className="price mb-35">${roomPrice}  Per Night</div>
                  <p>
                    {description}
                  </p>
                  <div className="room-details-images mt-45 wow fadeInUp delay-0-2s">
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
                          <div className="fa fa-angle-left"></div>
                        </Button>
                        <Button onClick={nextImage} colorScheme="teal" variant="outline" fontWeight={1000} color={"white"}>
                          <div className="fa fa-angle-right"></div>
                        </Button>
                      </Flex>
                    </Box>
                  </div>
                  <div className="section-title mt-35">
                    <h2>Room Facilities</h2>
                  </div>
                  <p>
                    {description}
                  </p>
                  <ul className="list-style-two three-column pt-10 wow fadeInUp delay-0-2s">
                    <li>Breakfast Included</li>
                    <li>Flat Screen TV</li>
                    <li>Hairdryer</li>
                    <li>Writing Desk</li>
                    <li>Towel Warmer</li>
                    <li>Shower bathtub</li>
                    <li>Balcony or Terrace</li>
                    <li>Ironing Board</li>
                    <li>Kettle Tea</li>
                    <li>Telephone</li>
                    <li>Saving Safe</li>
                    <li>Transportations</li>
                  </ul>
                  <div className="section-title my-40">
                    <h2>Availability</h2>
                    {/* <h3>{roomStatus}</h3> */}
                  </div>
                      
                  {/* <div className="room-calendar wow fadeInUp delay-0-2s" id="calendar"></div> */}

                  <div className="room-location mt-70 wow fadeInUp delay-0-2s">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
                      style={{ border: 0, width: '100%' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="section-title mt-45">
                    <h2>Rules & Regulations</h2>
                  </div>
                  <p>
                    To take a trivial example, which of us ever undertakes laborious
                    physical exercise, except to obtain some advantage avoids a pain
                    that produces no resultant pleasure
                  </p>
                  <ul className="list-style-two pt-10 wow fadeInUp delay-0-2s">
                    <li>Check-in: After 02:00pm</li>
                    <li>Checkout: Before 11:00am</li>
                    <li>Late Checkout: Additional charge 50% of the room rate.</li>
                    <li>No smoking in side the room</li>
                    <li>No pets</li>
                    <li>Identification document is a must for hotel registration.</li>
                  </ul>
                </div>
              </div>


              {/* form */}
              <div className="col-lg-5">
                  <BookingForm />
             
              </div>
            </div>

            <Review />
          </div>
          <div className="bg-lines for-bg-white">
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
          </div>
        </section>




        {/* <DetailWrapper style={{ width: "100%" }}>
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
              {Array(5).fill(parseInt(room.theRoomRate)).map((_, index) => (
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
            </Flex>
            <br />
            <Box display={'flex'} justifyContent={"space-between"} >
              <h3>{roomType}</h3>
              <h3 className="m-0 room-price"> From {roomPrice} JD/Night</h3>

            </Box >
            <br />

          </Container>
        </DetailWrapper> */}
      </div>
    </>
  );
};

export default RoomDetail;
