import axios from "axios";
import * as types from "../Type";
import instance from "../instance";


// BE
export const fetchResturants = () => {
  return async (dispatch) => {
      try {
          const res = await instance.get("/Resturants");
          console.log(res.data)
          dispatch({
              type: types.FETCH_RESTURANTS, 
              payload:{resturants:res.data}
          });
      } catch (error) {
          console.log(error.message);
      }
  }
};



// Add Resturant
export const addResturant = (resturants) => {
    console.log(resturants)
    return async (dispatch) => {
        
      try {
        const res = await instance.post('/Resturants', resturants);
        console.log('Response data:', res.data);
        console.log('Response status:', res.status);
        console.log('Response headers:', res.headers);
        
  
        if (res.status === 201) {
          dispatch({
            type: types.ADD_RESTURANT,
            payload: { resturants: res.data },
          });
          console.log("Resturant created successfully");
        } else {
          console.error("Server returned an error status:", res.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  };
    
  export const updateResturant = (updatedResturant, food_id) => {
    return async (dispatch) => {
      try {
        // Make the PUT request to update the resturant data
        const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/Resturants/${food_id}`, updatedResturant);
  console.log(res)
        // Dispatch the action to update the resturant
        dispatch({
          type: types.UPDATE_RESTURANT,
          payload: {
            updatedResturant: res.data,
          },
        });
  
      } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error updating resturant:', error.message);
      }
    };
  }; 
  
  
//   // Delete Resturant
//   export const deleteResturant =  (resturantId) => {
//     return async (dispatch) => {
//     try{
//       const res = await instance.delete(`/resturants/${resturantId}`)
//       console.log(res.data)
// dispatch({
//     type: types.DELETE_RESTURANT,
//     payload: { resturantId: resturantId }
// })}
// catch(error){
//   console.log(error.message)
//   }
// }
//   };
