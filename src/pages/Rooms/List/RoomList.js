import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import RoomItem from "../Items/RoomItems";
import SearchBar from "../../Search/search";
import RoomFilter from "../Filter";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Spinner,
  Card,
} from "react-bootstrap"; // Import Bootstrap components

const RoomList = () => {
  const loading = useSelector((state) => state.rooms.loading);
  const rooms = useSelector((state) => state.rooms.rooms);
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [query, setQuery] = useState("");
  const cardHeightRef = useRef(null); // Reference for calculating the card height

  const handleFilter = (filteredData) => {
    setFilteredRooms(filteredData);
  };

  useEffect(() => {
    setFilteredRooms(rooms);
  }, [rooms]);

  const RoomItems = filteredRooms.map((room) => (
    <Col key={room.Room_id} lg={4} md={6} sm={12}>
      <div ref={cardHeightRef}> {/* Measure the height of this element */}
        <Card className="mb-3" style={{ height: cardHeightRef.current?.offsetHeight }}>
          <Card.Body>
            <RoomItem room={room} />
          </Card.Body>
        </Card>
      </div>
    </Col>
  ));

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <InputGroup>
            <FormControl
              placeholder=""
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <RoomFilter rooms={rooms} onFilter={handleFilter} />
        </Col>
      </Row>
      <Row>
        <Col>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <Row>{RoomItems}</Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default RoomList;
