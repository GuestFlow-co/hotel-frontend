import { useState } from "react";
import {PopupWrapper, PopupContent, CloseButton} from "../Tourash/TourPostStyles"
import BookingEdit from "./BookingEdit";
import { CgCloseO } from 'react-icons/cg';
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
        <PopupContent style={{ maxHeight: '150%', overflow: 'auto',backgroundColor:"var(--lighter-color)",justifyContent:'center' ,alignItems:"center"}}>
      <button onClick={closePopup} style={{ marginLeft: "80%", position: "relative" }}>
      <CgCloseO style={{ height:"50px",width:"35px",color:"#ab6034",marginLeft:"70% !important"}}/>
          </button>
          <BookingEdit setPopupOpen={setPopupOpen} booking={booking} closePopup={closePopup}/>
        </PopupContent>
      </PopupWrapper>
      {/* Render other components */}
      </>
    );
  }
  export default BookingEditPop