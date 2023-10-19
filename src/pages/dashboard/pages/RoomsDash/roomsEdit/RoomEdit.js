import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateRoom } from "../../../../../store/actions/Rooms/RoomActions";
import {
  PopupWrapper,
  PopupContent,
  RoomCreateContainer,
  FeatureChecklistContainer,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
} from "../../../../appStyle";
import axios from "axios";
import { key } from "fontawesome";

const RoomEdit = ({ Room }) => {
  const dispatch = useDispatch();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };
  const closeFeatureChecklist = () => {
    setPopupOpen(false);
    // openFeatureChecklist(true);
    // setActiveComponent("FeatureChecklist");
  };

  const initialRoomState = {
    room_number: "",
    roomType: "",
    roomStatus: "Available",
    roomPrice: 0,
    room_capacity: "",
    description: "",
    bed_nums: 1,
    Room_space: 0,
    Room_view: "",
    image: [],
  };

  const [roomCreated, setRoomCreated] = useState(false);
  const [room, setRoom] = useState(Room);

  const handleRoomSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      for (const key in room) {
        if (key === "image") {
          if (room.image) {
            if (Array.isArray(room.image)) {
              room.image.forEach((file) => {
                formData.append("image", file);
              });
            } else {
              formData.append("image", room.image);
            }
          }
        } else {
          formData.append(key, room[key]);
        }
      }
      const obj = {
        room_number: formData.get("room_number"),
        roomType: formData.get("roomType"),
        roomPrice:formData.get("roomPrice"),
        room_capacity:formData.get("room_capacity"),
        description:formData.get("description"),
        bed_nums: formData.get("bed_nums"),
        Room_space: formData.get("Room_space"),
        Room_view: formData.get("Room_view"),
        image: formData.get("image"),
      };

      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/rooms/${room.Room_id}`,
        obj,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Specify the content type
          },
        }
      );

      console.log(res.data, "resres");

      // }     dispatch(updateRoom(formData, room.Room_id));

      setRoom(initialRoomState);
    } catch (error) {
      console.error("Room creation failed:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name, "value", value);

    setRoom({
      ...room,
      [name]: value,
    });
  };

  const handleImage = (event) => {
    const { name, files } = event.target;
    if (name === "image") {
      console.log(files);
      setRoom({ ...room, image: Array.from(files) });
    }
  };

  // const initialFeatures = {
  //   'Wi-Fi': false,
  //   'Smart Controls': false,
  //   'Mini Kitchenette': false,
  //   'TV': false,
  //   'Balcony or Terrace': false,
  //   'Spa Bathrooms': false,
  //   'Nespresso Machine': false,
  //   'Robes and Slippers': false,
  //   'Room Service Options': false,
  // };

  // const allFeatures = useSelector((state) => state.aminities.aminities);

  // const [features, setFeatures] = useState(initialFeatures);
  // const rooms = useSelector((state) => state.rooms.rooms);
  // const lastRoomId = rooms.length > 0 ? rooms[rooms.length - 1].Room_id : null;

  // const handleCheckboxChange = (feature) => {
  //   setFeatures((prevFeatures) => ({
  //     ...prevFeatures,
  //     [feature]: !prevFeatures[feature],
  //   }));
  // };

  // const handleCheckSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const selectedFeatures = Object.keys(features).filter((feature) => features[feature]);

  //     const featureIds = selectedFeatures.map((selectedFeature) => {
  //       const feature = allFeatures.find((x) => x.feature_name === selectedFeature);
  //       return feature ? feature.feature_id : null;
  //     });

  //     const validFeatureIds = featureIds.filter((featureId) => featureId !== null);

  //     const amenityDataArray = validFeatureIds.map((featureId) => ({
  //       rooms_id: lastRoomId,
  //       feature_id: featureId,
  //     }));

  //     for (let i = 0; i < amenityDataArray.length; i++) {
  //       const response = await dispatch(addAminity(amenityDataArray[i]));
  //       console.log(response.data,"dataaaa")
  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log('Amenity added successfully:', data);

  //       } else {
  //         console.error('Failed to add Amenity');
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error adding Amenity:', error);
  //   }
  // };

  return (
    <>
      <button onClick={openPopup}>
        {" "}
        <i className="fas fa-edit"></i>{" "}
      </button>

      <PopupWrapper style={{ display: isPopupOpen ? "flex" : "none" }}>
        <PopupContent>
          {/* // <RoomCreate
            //   setClose={closeRoomCreate}
            //   onRoomCreate={openFeatureChecklist}
            //   setClosing={closeFeatureChecklist}
            // /> */}

          <Container>
            {/* <FeatureChecklist /> */}

            <Form onSubmit={handleRoomSubmit}>
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
                <Button type="submit" className="btn btn-success">
                  Edit the Room
                </Button>

              </ButtonGroup>
            </Form>
                <Button
                  onClick={closeFeatureChecklist}
                  type="submit"
                  className="btn btn-success"
                >
                  close
                </Button>
          </Container>
        </PopupContent>
      </PopupWrapper>
    </>
  );
};

export default RoomEdit;
