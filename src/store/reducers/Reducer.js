import { combineReducers } from "redux";
import bookingReducer from "./Booking/BookingReducer";
import RoomReducer from "./Room/RoomReducer"

const rootReducer = combineReducers({
  rooms: RoomReducer,
  bookings: bookingReducer, 
});

export default rootReducer;
