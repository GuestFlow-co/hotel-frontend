import React, { useState } from "react";
import { PopupWrapper, PopupContent, CloseButton } from "./appStyle";
import RoomCreate from "./Rooms/Create/RoomCreate";
import FeatureChecklist from "./Rooms/Create/Feature";

function AminityPopup() {
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
  };

  return (
    <>
      <button onClick={openPopup}>Create new Room</button>
      {/* Render the Popup components */}
      <PopupWrapper style={{ display: isPopupOpen ? "flex" : "none" }}>
        <PopupContent>
          {/* <RoomCreate setClose={closePopup} onRoomCreate={handleRoomCreation} /> */}
          <FeatureChecklist isRoomCreated={isRoomCreated} />
        </PopupContent>
      </PopupWrapper>
      {/* Render other components */}
    </>
  );
}

export default AminityPopup;
