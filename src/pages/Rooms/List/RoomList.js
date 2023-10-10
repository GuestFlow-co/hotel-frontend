import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RoomItem from "../Items/RoomItems";
import hero from "../../../assets/Rooms/5655441.jpg"
import RoomFilter from "../Filter";
import {
  Container,
  Box,
  Input,
  Spinner,
  SimpleGrid, 
  Flex,
  Card,
  Grid,
} from "@chakra-ui/react"; 

const RoomList = () => {
  const loading = useSelector((state) => state.rooms.loading);
  const rooms = useSelector((state) => state.rooms.rooms);
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
    const filteredData = rooms.filter((room) =>
      (
        (room.roomType && room.roomType.toLowerCase().includes(searchText)) ||
        (room.room_capacity && room.room_capacity.toLowerCase().includes(searchText)) ||
        (room.roomStatus && room.roomStatus.toLowerCase().includes(searchText))
      )
    );
    setFilteredRooms(filteredData);
  };

  const RoomItems = filteredRooms.map((room) => (
    <Box key={room.Room_id} p={3} lg={4} md={6} sm={12}>
      <Card>
        <Box > 
          <RoomItem room={room} />
        </Box>
      </Card>
    </Box>
  ));

  return (
    <Container pt={0}>
      <img
        src={hero}
        alt={`Room Image`}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <Input
        placeholder="Search for a room"
        onChange={handleSearch}
        value={query}
        size="md" 
        borderColor="BROWN" 
        backgroundColor="white" 
        _placeholder={{ color: 'gray.500' }}
        borderRadius="5%"  
        width="25%" 
        height={1}   
        paddingLeft={3}
        position="absolute"
        top="8%"
        left="30%"
        transform="translateX(-50%)"
      />
      <Grid mb={3}>
        <Flex> 
          <RoomFilter rooms={rooms} onFilter={handleFilter} />
        </Flex>
      </Grid>
      <SimpleGrid columns={3} spacing={3}> 
        {RoomItems}
      </SimpleGrid>
      {loading && (
        <Flex justifyContent="center" mt={4}>
          <Spinner size="md" color="teal.500" emptyColor="gray.200" />
        </Flex>
      )}
    </Container>
  );
};

export default RoomList;
