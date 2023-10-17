// userActions.js

import * as types from "../Type";
import decode from "jwt-decode";
import instance from "../instance";
import Cookies from "react-cookies";



export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/user"); // Replace with your API endpoint for fetching users
      dispatch(setUsers(res.data));
    } catch (error) {
      // Handle error
    }
  };
};

export const setUsers = (users) => {
  return {
    type: types.SET_USERS,
    payload: users,
  };
};

// export const signup = (newUser) => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.post("/signup", newUser);
//       const token = res.data.token;

//       Cookies.save("token", token);

//       dispatch(setUser(token));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

