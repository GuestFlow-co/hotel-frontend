import * as types from "../../actions/Type";

const initialState = {
  rooms: [],
  counter: 0,
  loading: true,
};

const RoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ROOMS:
      return {
        ...state,
        rooms: action.payload.rooms,
        loading: false,
      };
    case types.ADD_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, action.payload.rooms],
      };
    case types.DELETE_ROOM:
      return {
        ...state,
        rooms: state.rooms.filter((room) => room.id !== action.payload.roomId),
      };
      case types.UPDATE_ROOM:
        const updatedRoom = action.payload.updatedRoom;
  
        return {
          ...state,
          rooms: state.rooms.map((room) =>
            room.Room_id === updatedRoom.Room_id ? updatedRoom : room
          ),
        };
    default:
      return state;
  }
};

export default RoomReducer;