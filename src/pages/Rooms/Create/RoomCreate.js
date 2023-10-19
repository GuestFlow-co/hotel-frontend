import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRoom } from '../../../store/actions/RoomActions';
import { useNavigate} from 'react-router-dom';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
} from './style';
import FeatureChecklist from './Feature';

const RoomCreate = ({ setClose, onRoomCreate, setActiveComponent, setClosing }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const initialRoomState = {
    room_number: '',
    roomType: '',
    roomStatus: 'Available',
    roomPrice: 0,
    room_capacity: '',
    description: '',
    bed_nums: 1,
    Room_space: 0,
    Room_view: '',
    image: [],
    verificationToken:true,
    emailVerified: true,
  };

  const [roomCreated, setRoomCreated] = useState(false);
  const [room, setRoom] = useState(initialRoomState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      for (const key in room) {
        if (key === 'image') {
          if (room.image) {
            if (Array.isArray(room.image)) {
              room.image.forEach((file) => {
                formData.append('image', file);
              });
              
            } else {
              formData.append('image', room.image);
            }
          }
        } else {
          formData.append(key, room[key]);
        }
      }

      const response = await dispatch(addRoom(formData));


      if (response.ok) {
        const data = await response.json();
        console.log('Room created successfully:', data);
        setRoom(initialRoomState);
        setActiveComponent("FeatureChecklist"); // Switch to FeatureChecklist
        onRoomCreate(data.Room_id);
      } else {
        console.error('Room creation failed');
      }
    } catch (error) {
      console.error('Room creation failed:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({
      ...room,
      [name]: value,
    });
  };

  const handleImage = (event) => {
    const { name, files } = event.target;
    if (name === 'image') {
      setRoom({ ...room, image: Array.from(files) });
    }
  };

  return (
    <Container>
      {roomCreated ? (
        <FeatureChecklist />
      ) : (
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Cover Photo</Label>
          <Input
            type="file"
            name="image"
            className="form-control"
            onChange={handleImage}
            multiple
          />
        </FormGroup>

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
          <Button onClick={setClose} type="submit" className="btn btn-success">
            Add the room features
          </Button>
        
          <Button onClick={setClosing} type="submit" className="btn btn-success">
            close
          </Button>

        </ButtonGroup>
      </Form>
      )}
    </Container>
  );
};

export default RoomCreate;
