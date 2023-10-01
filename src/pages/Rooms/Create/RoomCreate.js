import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRoom } from '../../../store/actions/RoomActions';
import { useParams } from 'react-router-dom';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
} from './style';

const RoomCreate = () => {
  const dispatch = useDispatch();
  const { Room_id } = useParams();

  const initialRoomState = {
    room_number: '',
    roomType: '',
    roomStatus: 'Available',
    roomPrice: 0,
    room_capacity: '',
  };

  const [room, setRoom] = useState(initialRoomState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addRoom(room));
      setRoom(initialRoomState);
      console.log("Room created successfully");
      console.log(room);
    } catch (error) {
      console.error("Room creation failed:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({
      ...room,
      [name]: value,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Room Number</Label>
          <Input
            type="text"
            value={room.room_number}
            onChange={handleChange}
            name="room_number"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label>Room Capacity</Label>
          <Input
            type="text"
            value={room.room_capacity}
            onChange={handleChange}
            name="room_capacity"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label>Room Type</Label>
          <Input
            type="text"
            value={room.roomType}
            onChange={handleChange}
            name="roomType"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label>Room Status</Label>
          <Input
            type="text"
            value={room.roomStatus}
            onChange={handleChange}
            name="roomStatus"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label>Room Price</Label>
          <Input
            type="number"
            value={room.roomPrice}
            onChange={handleChange}
            name="roomPrice"
            className="form-control"
          />
        </FormGroup>
          <ButtonGroup>
        <Button type="submit" className="btn btn-success">
          Create
        </Button>
      
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default RoomCreate;
