import React, { useState } from "react";
import { PopupWrapper, PopupContent, CloseButton } from "./appStyle";
import RoomCreate from "./Rooms/Create/RoomCreate";
import FeatureChecklist from "./Rooms/Create/Feature";
import Signup from "./Booking/signup";

function Popup() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isRoomCreated, setRoomCreated] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleRoomCreation = () => {
    setRoomCreated(true);
    setPopupOpen(false); // Close the popup after room creation if needed
  };

  return (
    <>
      <button onClick={openPopup}>Create new Room</button>
      {/* Render the Popup components */}
      <PopupWrapper style={{ display: isPopupOpen ? "flex" : "none" }}>
        <PopupContent>
          {/* {isRoomCreated ? ( */}
            <FeatureChecklist />
          {/* ) : ( */}
            
            {/* <RoomCreate setClose={closePopup} onRoomCreate={handleRoomCreation} />  */}

            {/* <Signup/> */}
           
          {/* )} */}
        </PopupContent>
      </PopupWrapper>
      {/* Render other components */}
    </>
  );
}

export default Popup;
