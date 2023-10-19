// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateRoom } from '../../../store/actions/RoomActions';
// import { useNavigate } from 'react-router-dom';
// import {
//   Container,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   ButtonGroup,
//   Button,
// } from './style';

const RoomUpdate = ({ setClose, setUpdateComplete }) => {

  // const initialRoomState = {
  //   room_number: '',
  //   roomType: '',
  //   roomStatus: 'Available',
  //   roomPrice: 0,
  //   room_capacity: '',
  //   description: '',
  //   bed_nums: 1,
  //   Room_space: 0,
  //   Room_view: '',
  //   image: [],
  // };

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const [room, setRoom] = useState(initialRoomState);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await dispatch(updateRoom(room, room.Room_id));

  //     if (response.ok) {
  //       const updatedData = await response.json();
  //       console.log('Room updated successfully:', updatedData);
  //       setUpdateComplete(true);
  //     } else {
  //       console.error('Room update failed');
  //     }
  //   } catch (error) {
  //     console.error('Room update failed:', error);
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setRoom({
  //     ...room,
  //     [name]: value,
  //   });
  // };

  return (
    <>
    </>
    // <Container>
      /* <Form onSubmit={handleSubmit}>
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
          <Label>Room description</Label>
          <Input
            type="text"
            value={room.description}
            onChange={handleChange}
            name="description"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label>Bed #</Label>
          <Input
            type="number"
            value={room.bed_nums}
            onChange={handleChange}
            name="bed_nums"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label>Room Space sqm</Label>
          <Input
            type="number"
            value={room.Room_space}
            onChange={handleChange}
            name="Room_space"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label>Room View</Label>
          <Input
            type="text"
            value={room.Room_view}
            onChange={handleChange}
            name="Room_view"
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
          <Button onClick={setClose} className="btn btn-danger">
            Cancel
          </Button>
          <Button type="submit" className="btn btn-success">
            Update Room
          </Button>
        </ButtonGroup>
      </Form> */
    /* </Container> */
  );
};

export default RoomUpdate;
