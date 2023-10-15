import axios from "axios";
import * as types from "../Type";
import instance from "../instance";


// BE
export const fetchAminities = () => {
  return async (dispatch) => {
      try {
          const res = await instance.get("/features");
          console.log(res.data)
          dispatch({
              type: types.FETCH_AMINITYS, 
              payload:{aminities:res.data}
          });
      } catch (error) {
          console.log(error.message);
      }
  }
};

export const fetchRoomAminities = () => {
    return async (dispatch) => {
        try {
            const res = await instance.get("/RoomsFeatures");
            console.log(res.data)
            dispatch({
                type: types.FETCH_FEATURE, 
                payload:{features:res.data}
            });
        } catch (error) {
            console.log(error.message);
        }
    }
  };

// Add Aminity
export const addAminity = (aminities) => {
    console.log(aminities)
    return async (dispatch) => {
        
      try {
        const res = await instance.post('/RoomsFeatures', aminities);
        console.log('Response data:', res.data);
        console.log('Response status:', res.status);
        console.log('Response headers:', res.headers);
        
  
        if (res.status === 201) {
          dispatch({
            type: types.ADD_AMINITY,
            payload: { aminities: res.data },
          });
          console.log("Aminity created successfully");
        } else {
          console.error("Server returned an error status:", res.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  };
    
  export const updateAminity = (updatedAminity, Aminity_id) => {
    return async (dispatch) => {
      try {
        // Make the PUT request to update the aminity data
        const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/features/${Aminity_id}`, updatedAminity);
  console.log(res)
        // Dispatch the action to update the aminity
        dispatch({
          type: types.UPDATE_AMINITY,
          payload: {
            updatedAminity: res.data,
          },
        });
  
      } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error updating aminity:', error.message);
      }
    };
  }; 
  
  
//   // Delete Aminity
//   export const deleteAminity =  (aminityId) => {
//     return async (dispatch) => {
//     try{
//       const res = await instance.delete(`/features/${aminityId}`)
//       console.log(res.data)
// dispatch({
//     type: types.DELETE_AMINITY,
//     payload: { aminityId: aminityId }
// })}
// catch(error){
//   console.log(error.message)
//   }
// }
//   };