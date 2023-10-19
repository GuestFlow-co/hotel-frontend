import { useState } from "react";
import {PopupWrapper, PopupContent, CloseButton} from "../../../../appStyle"
import RoomEdit from "./RoomEdit";
function RoomEditPop({Room}) {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };

    return (
        <>
        <button onClick={openPopup}>  <i className="fas fa-edit"></i>
</button> 
      {/* Render the Popup components */}
      <PopupWrapper style={{ display: isPopupOpen ? 'flex' : 'none' }}>
        <PopupContent>
          <RoomEdit setPopupOpen={setPopupOpen} Room={Room}/>
        </PopupContent>
      </PopupWrapper>
      {/* Render other components */}
      </>
    );
  }
  export default RoomEditPop