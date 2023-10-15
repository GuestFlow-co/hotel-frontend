import { combineReducers } from "redux";
import bookingReducer from "./Booking/BookingReducer";
import RoomReducer from "./Room/RoomReducer"

import tourReducer from "./Tour/TourReducer";
import authReducer from "./Auth/AuthReducer";
import ResturantReducer from "./Resturant/ResturantReducer";

const rootReducer = combineReducers({
  rooms: RoomReducer,
  bookings: bookingReducer, 
  tours: tourReducer, 
  resturants: ResturantReducer, 

  users: authReducer,


});

export default rootReducer;
