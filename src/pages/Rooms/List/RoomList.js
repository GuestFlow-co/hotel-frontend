import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RoomItem from "../Items/RoomItems";
import RoomFilter from "../Filter";

import {
  Container,
  Box,
  Input,
  Spinner,
  SimpleGrid,
  Card,
  Flex,
  Grid,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import './RoomPage.scss'

const RoomList = () => {

  const loading = useSelector((state) => state.rooms.loading);
  const rooms = useSelector((state) => state.rooms.rooms);
  console.log(rooms)
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [query, setQuery] = useState("");



  const handleFilter = (filteredData) => {
    setFilteredRooms(filteredData);
  };

  useEffect(() => {
    setFilteredRooms(rooms);
  }, [rooms]);

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setQuery(searchText);
    const filteredData = rooms.filter(
      (room) =>
        (room.roomType &&
          room.roomType.toLowerCase().includes(searchText)) ||
        (room.room_capacity &&
          room.room_capacity.toLowerCase().includes(searchText)) ||
        (room.roomStatus && room.roomStatus.toLowerCase().includes(searchText))
    );
    setFilteredRooms(filteredData);
  };

  const RoomItems = filteredRooms.map((room) => (

    <div className="col-xl-4 col-md-6" key={room.Room_id}>
      <RoomItem room={room} />
    </div>

  ));

  const noRoomsFoundMessage = filteredRooms.length === 0 ? (
    <div className="no-rooms-message text-center">No Rooms Found</div>
  ) : null;

  return (

    <div>
      {loading ? (
        <div className='preloader'></div>
      ) : (
        <div>
          {/* Hero section */}

          <section className="page-banner-area pt-140 rpt-80 pb-240 rpb-150 rel z-1 bgs-cover bgc-black text-center" style={{ backgroundImage: 'url(https://webtend.site/html/qomfort/assets/images/background/banner.jpg)' }}>
            <div className="container">
              <div className="banner-inner text-white rpb-25">
                <h1 className="page-title wow fadeInUp delay-0-2s">Explore Our Rooms</h1>
                <nav aria-label="breadcrumb">

                </nav>
              </div>
            </div>
            <div className="bg-lines">
              <span></span><span></span>
              <span></span><span></span>
              <span></span><span></span>
              <span></span><span></span>
              <span></span><span></span>
            </div>
            {/* Hero section End */}


          </section>


          <RoomFilter
            rooms={rooms}
            onFilter={handleFilter}
            handleSearch={handleSearch}
            query={query}
          />


          <section className='card-section-room room padding-top padding-bottom ' style={{ paddingBottom: '100px' }}>
            <div className='container'>
              <div className='room__wrapper'>
                <div className='row g-4'>
                  {noRoomsFoundMessage}

                  {RoomItems}

                </div>
              </div>
            </div>
          </section>
          <div className="bg-lines for-bg-white">
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
          </div>

          {/* {loading && (
          <Flex justifyContent="center" mt={4}>
            <Spinner size="md" color="teal.500" emptyColor="gray.200" />
          </Flex>
        )} */}

        </div>
      )}
    </div>
  );
};

export default RoomList;
