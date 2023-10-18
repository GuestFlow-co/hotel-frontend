import { useState } from "react";
import {PopupWrapper, PopupContent, CloseButton} from "../../../../appStyle"
import TourPost from "./TourPost";
function TourPop() {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };

    return (
        <>
        <button onClick={openPopup}>  <i className="fas fa-plus"></i>
</button>
      {/* Render the Popup components */}
      <PopupWrapper style={{ display: isPopupOpen ? 'flex' : 'none' }}>
        <PopupContent>
          <TourPost setPopupOpen={setPopupOpen}/>
        </PopupContent>
      </PopupWrapper>
      {/* Render other components */}
      </>
    );
  }
  export default TourPop