import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Image, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Button,Flex } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import BookingForm from "../../Booking/Form";
import Features from "./features";
import Review from "./Review";
import RoomCard from "../../HomePage/sections/roomCard/roomCard";
import RoomItem from "../Items/RoomItems";
import ImageModal from "./ImageModal";
import Aminities from './Aminities'
import MoreTours from './MoreTours'

const colors = {
  orange: "#e8a41d",
  grey: "#a9a9a9",
};

const RoomDetail = () => {
  const { room_number } = useParams();
  const rooms = useSelector((state) => state.rooms.rooms);
  const users = useSelector((state) => state.users.users);
  console.log(users, "------------------")

  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState(null);


  const room = rooms.find((room) => room.room_number === room_number);

  //   if (!room) {
  //     return <p>Room not found</p>;
  //   }

  const { roomType, room_capacity, roomPrice, photoUrl, bed_nums, Room_space, Room_view, description, rate, roomStatus } = room;
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

  const openImageModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
    setModalImageUrl(null);
  };

  return (
    <>
      <div>

        <section className="room-details-area pt-130 rpy-100 rel z-2">
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
                  <p style={{ fontSize: "20px", padding: '10px' }}>
                    {description}
                  </p>
                  <div id="frame" className="room-details-images mt-45 wow fadeInUp delay-0-2s">
                    <div id="border">
                      <Box position="relative">
                        <div className="image-frame" onClick={() => openImageModal(images[currentIndex])}>
                          <Image
                            src={images[currentIndex]}
                            alt={`Image ${currentIndex}`}
                            w="100%"
                            h="400px"
                            cursor="pointer"
                          />
                        </div>

                        <Flex justify="space-between" position="absolute" w="100%" bottom="1rem" p="1rem">
                          <Button onClick={prevImage} colorScheme="teal" variant="outline" fontWeight={1000} color={"white"}>
                            <div className="fa fa-angle-left"></div>
                          </Button>
                          <Button onClick={nextImage} colorScheme="teal" variant="outline" fontWeight={1000} color={"white"}>
                            <div className="fa fa-angle-right"></div>
                          </Button>
                        </Flex>
                      </Box>
                    </div>
                  </div>

                  <ImageModal isOpen={isImageModalOpen} onClose={closeImageModal} imageUrl={modalImageUrl} />


                  <div className="section-title mt-35">
                    <h2>Room Facilities</h2>
                  </div>
                  <p style={{ fontSize: "20px", padding: '10px' }}>
                    {description}
                  </p>
                  <div className="section-title my-40">
                    <h2>Room Features</h2>
                    {/* <h3>{roomStatus}</h3> */}

                    <Features />
                    <Aminities />
                  </div>
{/* 
                  <ul className="list-style-two three-column pt-10 wow fadeInUp delay-0-2s" style={{ fontSize: '20px' }}>
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
                  </ul> */}


                  <div className="section-title mt-45">
                    <h2>Rules & Regulations</h2>
                  </div>
                  <p style={{ fontSize: "20px", padding: '10px' }}>
                    To take a trivial example, which of us ever undertakes laborious
                    physical exercise, except to obtain some advantage avoids a pain
                    that produces no resultant pleasure
                  </p>
                  <ul className="list-style-two pt-10 wow fadeInUp delay-0-2s" style={{ fontSize: '18px' }}>
                    <li>Check-in: After 02:00pm</li>
                    <li>Checkout: Before 11:00am</li>
                    <li>Late Checkout: Additional charge 50% of the room rate.</li>
                    <li>No smoking in side the room</li>
                    <li>No pets</li>
                    <li>Identification document is a must for hotel registration.</li>
                  </ul>
                </div>
              </div>


              <div className="col-lg-5">
                <BookingForm />
                <MoreTours/>
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



        <RoomCard />


      </div>
    </>
  );
};

export default RoomDetail;
