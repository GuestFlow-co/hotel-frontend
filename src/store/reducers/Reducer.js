import { combineReducers } from "redux";
import RoomReducer from "./Room/RoomReducer";



const rootReducer = combineReducers({
  rooms: RoomReducer,

  });
  export default rootReducer