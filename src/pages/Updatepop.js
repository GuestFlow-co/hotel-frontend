// import React, { useState } from "react";
// import { PopupWrapper, PopupContent, RoomCreateContainer, FeatureChecklistContainer,  Container,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   ButtonGroup,
//   Button,
//  } from "./appStyle";
// import RoomCreate from "./Rooms/Create/RoomCreate";
// import FeatureChecklist from "./Rooms/Create/Feature";
// import { useNavigate} from 'react-router-dom';
// import styled from 'styled-components';

// import Signup from "./Booking/signup";
// import { useDispatch,useSelector } from "react-redux";
// import { addRoom } from "../store/actions/RoomActions";
// import { addAminity } from "../store/actions/Rooms/AminityActions";
// import RoomUpdate from "./Rooms/Update/RoomUpdate";


// const ContainerCheck = styled.div`
// `;

// const CheckboxLabel = styled.label`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// `;

// const CheckboxInput = styled.input`
//   margin-right: 5px;
// `;

// function Checkbox({ feature, checked, onChange }) {
//   return (
//     <CheckboxLabel>
//       <CheckboxInput type="checkbox" name={feature} checked={checked} onChange={onChange} />
//       {feature}
//     </CheckboxLabel>
//   );
// }

function UpdatePopup() {
//   const [isPopupOpen, setPopupOpen] = useState(false);
//   const [isRoomCreateOpen, setRoomCreateOpen] = useState(true); 
//   const [isFeatureChecklistOpen, setFeatureChecklistOpen] = useState(false);
//   const [activeComponent, setActiveComponent] = useState("RoomCreate");

//   const openRoomCreate = () => {
//     setRoomCreateOpen(true);
//     setFeatureChecklistOpen(false);
//     setActiveComponent("RoomCreate");
//   };

//   const openPopup = () => {
//     setPopupOpen(true);
//   };

//   const openFeatureChecklist = () => {
//     setFeatureChecklistOpen(true);
//     setRoomCreateOpen(false);
//     setActiveComponent("FeatureChecklist");
//   };

//   const closeRoomCreate = () => {
//     setRoomCreateOpen(false);
//     openFeatureChecklist(); // Show FeatureChecklist when RoomCreate is closed
//   };

//   const closeFeatureChecklist = () => {
//     setPopupOpen(false);
//   };


//   const initialRoomState = {
//     room_number: '',
//     roomType: '',
//     roomStatus: 'Available',
//     roomPrice: 0,
//     room_capacity: '',
//     description: '',
//     bed_nums: 1,
//     Room_space: 0,
//     Room_view: '',
//     image: [],
//   };

//   const navigate = useNavigate();

//   const [room, setRoom] = useState(initialRoomState);

//   const handleRoomSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await dispatch(updateRoom(room, room.Room_id));

//       if (response.ok) {
//         const updatedData = await response.json();
//         console.log('Room updated successfully:', updatedData);
//         setUpdateComplete(true);
//       } else {
//         console.error('Room update failed');
//       }
//     } catch (error) {
//       console.error('Room update failed:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRoom({
//       ...room,
//       [name]: value,
//     });
//   };

//   const initialFeatures = {
//     'Wi-Fi': false,
//     'Smart Controls': false,
//     'Mini Kitchenette': false,
//     'TV': false,
//     'Balcony or Terrace': false,
//     'Spa Bathrooms': false,
//     'Nespresso Machine': false,
//     'Robes and Slippers': false,
//     'Room Service Options': false,
//   };

//   const allFeatures = useSelector((state) => state.aminities.aminities);

//   const [features, setFeatures] = useState(initialFeatures);
//   const dispatch = useDispatch();
//   const rooms = useSelector((state) => state.rooms.rooms);
//   const lastRoomId = rooms.length > 0 ? rooms[rooms.length - 1].Room_id : null;

//   const handleCheckboxChange = (feature) => {
//     setFeatures((prevFeatures) => ({
//       ...prevFeatures,
//       [feature]: !prevFeatures[feature],
//     }));
//   };

//   const handleCheckSubmit = (e) => {
//     e.preventDefault();

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

//     amenityDataArray.forEach((amenityData) => {
//       dispatch(addAminity(amenityData));
//     });
//   };



  return (
    <>
{/* //     <button onClick={openPopup}><i className="fas fa-edit"></i></button>

//     <PopupWrapper  style={{ display: isPopupOpen ? "flex" : "none" }}>
//       <PopupContent>
//       <Container>
//       <Form onSubmit={handleRoomSubmit}>
//         <FormGroup>
//           <Label>Room Number</Label>
//           <Input
//             type="text"
//             value={room.room_number}
//             onChange={handleChange}
//             name="room_number"
//             className="form-control"
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label>Room Capacity</Label>
//           <Input
//             type="text"
//             value={room.room_capacity}
//             onChange={handleChange}
//             name="room_capacity"
//             className="form-control"
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label>Room Type</Label>
//           <Input
//             type="text"
//             value={room.roomType}
//             onChange={handleChange}
//             name="roomType"
//             className="form-control"
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label>Room description</Label>
//           <Input
//             type="text"
//             value={room.description}
//             onChange={handleChange}
//             name="description"
//             className="form-control"
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label>Bed #</Label>
//           <Input
//             type="number"
//             value={room.bed_nums}
//             onChange={handleChange}
//             name="bed_nums"
//             className="form-control"
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label>Room Space sqm</Label>
//           <Input
//             type="number"
//             value={room.Room_space}
//             onChange={handleChange}
//             name="Room_space"
//             className="form-control"
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label>Room View</Label>
//           <Input
//             type="text"
//             value={room.Room_view}
//             onChange={handleChange}
//             name="Room_view"
//             className="form-control"
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label>Room Price</Label>
//           <Input
//             type="number"
//             value={room.roomPrice}
//             onChange={handleChange}
//             name="roomPrice"
//             className="form-control"
//           />
//         </FormGroup>

//         <ButtonGroup>
//                 <Button onClick={closeRoomCreate} className="btn btn-danger">
//                   Cancel
//                 </Button>
//                 <Button type="submit" className="btn btn-success">
//                   Update Room
//                 </Button>
//               </ButtonGroup>
//             </Form>
//           </Container>
//         </PopupContent>

//         <PopupContent>
//           <FeatureChecklistContainer isActive={activeComponent === "FeatureChecklist"}>
//             {isFeatureChecklistOpen && (
//               <ContainerCheck>
//                 <h3>Feature Checklist</h3>
//                 <form onSubmit={handleCheckSubmit}>
//                   <div>
//                     {Object.entries(features).map(([feature, checked]) => (
//                       <div key={feature}>
//                         <Checkbox
//                           feature={feature}
//                           checked={checked}
//                           onChange={() => handleCheckboxChange(feature)}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                   <Button type="submit" onClick={closeFeatureChecklist}>
//                     Submit
//                   </Button>
//                 </form>
//               </ContainerCheck>
//             )}
//           </FeatureChecklistContainer>
//         </PopupContent>
//       </PopupWrapper> */}
    </>
  );
}

export default UpdatePopup;