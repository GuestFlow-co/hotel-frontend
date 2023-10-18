// userActions.js

import * as types from "../Type";
import jwt_decode from "jwt-decode";
import instance from "../instance";
import cookie from "react-cookies";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/user"); // Replace with your API endpoint for fetching users
      dispatch(setUsers(res.data));
    } catch (error) {
      // Handle error (e.g., dispatch an error action)
      console.error("Error fetching users:", error);
    }
  };
};

export const setUsers = (users) => {
  return {
    type: types.SET_USER,
    payload: users,
  };
};

export const signup = (userData) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", userData);
      console.log(res.data, "-----");
      if (res.data.token) {
        const user = jwt_decode(res.data.token);

        // Store the token in a cookie or use another secure storage method
        cookie.save("token", res.data.token, { path: "/" });

        // Dispatch the user information to update the state
        dispatch(setUsers(user));
      } else {
        // Handle the case where no token is returned (e.g., invalid credentials)
        console.error("No token received. Handle this case accordingly.");
      }
    } catch (error) {
      // Handle error (e.g., dispatch an error action)
      console.error("Error during signup:", error);
    }
  };
};
