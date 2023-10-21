import { useState } from "react";
import {PopupWrapper, PopupContent, CloseButton} from "../TourPostStyles"
import TourEdit from "./TourEdit";
function TourEditPop({tour,tourupdated}) {
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
          <TourEdit setPopupOpen={setPopupOpen} tourupdated={tourupdated} tour1={tour}/>
        </PopupContent>
      </PopupWrapper>
      {/* Render other components */}
      </>
    );
  }
  export default TourEditPop