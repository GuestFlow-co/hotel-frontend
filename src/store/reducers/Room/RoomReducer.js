import * as types from "../../actions/Type"
const initialState = {
  rooms: [],
  comments: [],
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
    case types.FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload.comments,
        loading: false,
      };
    case types.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload.comments],
      };
    case types.DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter((comment) => comment.id !== action.payload.commentId),
      };
    case types.UPDATE_COMMENT:
      const updatedComment = action.payload.updatedComment;
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === updatedComment.id ? updatedComment : comment
        ),
      };
    default:
      return state;
  }
};

export default RoomReducer;