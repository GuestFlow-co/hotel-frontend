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

