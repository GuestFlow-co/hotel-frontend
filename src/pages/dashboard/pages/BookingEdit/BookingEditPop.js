import { useState } from "react";
import {PopupWrapper, PopupContent, CloseButton} from "../Tourash/TourPostStyles"
import BookingEdit from "./BookingEdit";
function BookingEditPop({booking}) {
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
          <BookingEdit setPopupOpen={setPopupOpen} booking={booking}/>
        </PopupContent>
      </PopupWrapper>
      {/* Render other components */}
      </>
    );
  }
  export default BookingEditPop