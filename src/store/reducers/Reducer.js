import { combineReducers } from "redux";
import bookingReducer from "./Booking/BookingReducer";
import RoomReducer from "./Room/RoomReducer"
import tourReducer from "./Tour/TourReducer";

const rootReducer = combineReducers({
  rooms: RoomReducer,
  bookings: bookingReducer, 
  tours: tourReducer, 

});

export default rootReducer;
