import axios from "axios";
import * as types from "../Type";
import instance from "../instance";


// BE
export const fetchRooms = () => {
  return async (dispatch) => {
      try {
          const res = await instance.get("/rooms");
          console.log(res.data)
          dispatch({
              type: types.FETCH_ROOMS, 
              payload:{rooms:res.data}
          });
      } catch (error) {
          console.log(error.message);
      }
  }
};



// Add Room
export const addRoom = (rooms) => {
    console.log(rooms)
    return async (dispatch) => {
        
      try {
        const res = await instance.post('/rooms', rooms);
        console.log('Response data:', res.data);
        console.log('Response status:', res.status);
        console.log('Response headers:', res.headers);
        
  
        if (res.status === 201) {
          dispatch({
            type: types.ADD_ROOM,
            payload: { rooms: res.data },
          });
          console.log("Room created successfully");
        } else {
          console.error("Server returned an error status:", res.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  };
    
  export const updateRoom = (updatedRoom, Room_id) => {
    return async (dispatch) => {
      try {
        // Make the PUT request to update the room data
        const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/rooms/${Room_id}`, updatedRoom);
      console.log(res.data,"resres")
        // Dispatch the action to update the room
        dispatch({
          type: types.UPDATE_ROOM,
          payload: {
            updatedRoom: res.data,
          },
        });
  
      } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error updating room:', error.message);
      }
    };
  }; 
  
  
//   // Delete Room
//   export const deleteRoom =  (roomId) => {
//     return async (dispatch) => {
//     try{
//       const res = await instance.delete(`/rooms/${roomId}`)
//       console.log(res.data)
// dispatch({
//     type: types.DELETE_ROOM,
//     payload: { roomId: roomId }
// })}
// catch(error){
//   console.log(error.message)
//   }
// }
//   };

// Comments
export const fetchComments = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/commentRoom");
      dispatch({
        type: types.FETCH_COMMENTS,
        payload: { comments: res.data },
      });
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
};

export const addComment = (comments) => {
  return async (dispatch) => {
    try {
      const res = await instance.post('/commentRoom', comments);

      if (res.status === 201) {
        dispatch({
          type: types.ADD_COMMENT,
          payload: { comments: res.data },
        });
        console.log("Comment added successfully");
      } else {
        console.error("Server returned an error status:", res.status);
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };
};

export const updateComment = (updatedComment, id) => {
  return async (dispatch) => {
    try {
      const res = await instance.put(`/commentRoom/${id}`, updatedComment);
      dispatch({
        type: types.UPDATE_COMMENT,
        payload: { updatedComment: res.data },
      });
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };
};
