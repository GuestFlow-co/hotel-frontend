import { combineReducers } from "redux";
import bookingReducer from "./Booking/BookingReducer";
import RoomReducer from "./Room/RoomReducer"
import authReducer from "./Auth/AuthReducer";

const rootReducer = combineReducers({
  rooms: RoomReducer,
  bookings: bookingReducer, 
  users: authReducer,

});

export default rootReducer;
