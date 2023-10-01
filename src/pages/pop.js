import { useState } from "react";
import {PopupWrapper, PopupContent, CloseButton} from "./appStyle"
import RoomCreate from "./Rooms/Create/RoomCreate";
function Popup() {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };

    return (
        <>
        <button onClick={openPopup}>Create new Room</button>
      {/* Render the Popup components */}
      <PopupWrapper style={{ display: isPopupOpen ? 'flex' : 'none' }}>
        <PopupContent>
          <CloseButton onClick={closePopup}>Close</CloseButton>
          <RoomCreate/>
        </PopupContent>
      </PopupWrapper>
      {/* Render other components */}
      </>
    );
  }
  export default Popup